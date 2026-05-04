'use client';

import { useState, useRef, useEffect } from 'react';
import { useI18n } from '../i18n/I18nContext';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export default function ChatWidget() {
  const { t, locale } = useI18n();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: t('chat_welcome'),
    },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  async function sendMessage() {
    if (!input.trim() || loading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages((prev) => [...prev, { role: 'user', content: userMessage }]);
    setLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage, locale }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Error desconocido');
      }

      setMessages((prev) => [...prev, { role: 'assistant', content: data.reply }]);
    } catch (err: any) {
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content:
            t('chat_error') + '\n\n' +
            (err.message || 'Error de conexión'),
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  }

  return (
    <>
      {/* Botón flotante */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: 'fixed',
          bottom: 24,
          right: 24,
          width: 56,
          height: 56,
          borderRadius: '50%',
          background: '#d4853a',
          border: 'none',
          cursor: 'pointer',
          boxShadow: '0 4px 16px rgba(212,133,58,0.4)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1.6rem',
          zIndex: 1000,
          transition: 'transform 0.2s, box-shadow 0.2s',
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.transform = 'scale(1.08)';
          (e.currentTarget as HTMLElement).style.boxShadow =
            '0 6px 24px rgba(212,133,58,0.5)';
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.transform = 'scale(1)';
          (e.currentTarget as HTMLElement).style.boxShadow =
            '0 4px 16px rgba(212,133,58,0.4)';
        }}
      >
        {isOpen ? '✕' : '🐱'}
      </button>

      {/* Ventana de chat */}
      {isOpen && (
        <div
          style={{
            position: 'fixed',
            bottom: 92,
            right: 24,
            width: 380,
            maxWidth: 'calc(100vw - 48px)',
            height: 520,
            maxHeight: 'calc(100vh - 120px)',
            background: '#fdf6ec',
            borderRadius: 20,
            boxShadow: '0 16px 48px rgba(44,36,22,0.15)',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            zIndex: 999,
            animation: 'slideUp 0.25s ease',
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          {/* Header */}
          <div
            style={{
              padding: '1rem 1.25rem',
              background: 'linear-gradient(135deg, #d4853a 0%, #c0702e 100%)',
              color: '#fff',
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem',
            }}
          >
            <span style={{ fontSize: '1.4rem' }}>🐱</span>
            <div>
              <div style={{ fontWeight: 700, fontSize: '0.9rem' }}>{t('chat_title')}</div>
              <div style={{ fontSize: '0.7rem', opacity: 0.85 }}>
                {t('chat_subtitle')}
              </div>
            </div>
          </div>

          {/* Messages */}
          <div
            style={{
              flex: 1,
              overflowY: 'auto',
              padding: '1rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem',
            }}
          >
            {messages.map((msg, i) => (
              <div
                key={i}
                style={{
                  alignSelf: msg.role === 'user' ? 'flex-end' : 'flex-start',
                  maxWidth: '85%',
                  padding: '0.7rem 1rem',
                  borderRadius: msg.role === 'user' ? '16px 16px 4px 16px' : '16px 16px 16px 4px',
                  background: msg.role === 'user' ? '#d4853a' : '#fff',
                  color: msg.role === 'user' ? '#fff' : '#2c2416',
                  fontSize: '0.85rem',
                  lineHeight: 1.6,
                  boxShadow:
                    msg.role === 'user'
                      ? '0 2px 8px rgba(212,133,58,0.25)'
                      : '0 2px 8px rgba(44,36,22,0.06)',
                  wordBreak: 'break-word',
                }}
              >
                {msg.content}
              </div>
            ))}
            {loading && (
              <div
                style={{
                  alignSelf: 'flex-start',
                  padding: '0.7rem 1rem',
                  borderRadius: '16px 16px 16px 4px',
                  background: '#fff',
                  boxShadow: '0 2px 8px rgba(44,36,22,0.06)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.3rem',
                }}
              >
                <span
                  style={{
                    display: 'inline-block',
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    background: '#d4853a',
                    animation: 'bounce 1.2s infinite 0ms',
                  }}
                />
                <span
                  style={{
                    display: 'inline-block',
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    background: '#d4853a',
                    animation: 'bounce 1.2s infinite 200ms',
                  }}
                />
                <span
                  style={{
                    display: 'inline-block',
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    background: '#d4853a',
                    animation: 'bounce 1.2s infinite 400ms',
                  }}
                />
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div
            style={{
              padding: '0.75rem 1rem',
              borderTop: '1px solid rgba(201,180,154,0.3)',
              display: 'flex',
              gap: '0.5rem',
              background: '#fff',
            }}
          >
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={t('chat_placeholder')}
              style={{
                flex: 1,
                padding: '0.6rem 1rem',
                borderRadius: 12,
                border: '1px solid rgba(201,180,154,0.4)',
                background: '#fdf6ec',
                color: '#2c2416',
                fontSize: '0.85rem',
                fontFamily: "'DM Sans', sans-serif",
                outline: 'none',
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = '#d4853a';
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = 'rgba(201,180,154,0.4)';
              }}
            />
            <button
              onClick={sendMessage}
              disabled={!input.trim() || loading}
              style={{
                width: 40,
                height: 40,
                borderRadius: 12,
                border: 'none',
                background: !input.trim() || loading ? '#c9b49a' : '#d4853a',
                color: '#fff',
                cursor: !input.trim() || loading ? 'not-allowed' : 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1rem',
                transition: 'background 0.2s',
              }}
            >
              ➤
            </button>
          </div>
        </div>
      )}

      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(12px) scale(0.96); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes bounce {
          0%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-6px); }
        }
      `}</style>
    </>
  );
}
