'use client';

import { useState, useRef, useEffect } from 'react';
import { useI18n } from '../i18n/I18nContext';
import { LOCALES } from '../i18n/types';

export default function LanguageSelector() {
  const { locale, setLocale, t } = useI18n();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const current = LOCALES.find((l) => l.code === locale)!;

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  return (
    <div ref={ref} style={{ position: 'relative' }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.35rem',
          background: open ? 'rgba(212,133,58,0.12)' : 'none',
          border: 'none',
          cursor: 'pointer',
          padding: '0.3rem 0.6rem',
          borderRadius: 10,
          fontSize: '0.75rem',
          fontFamily: "'DM Sans', sans-serif",
          fontWeight: 500,
          color: '#6b5c44',
          transition: 'background 0.15s',
          whiteSpace: 'nowrap',
        }}
        title={t('nav_language')}
      >
        <span>{current.flag}</span>
        <span>{current.code.toUpperCase()}</span>
        <span
          style={{
            fontSize: '0.55rem',
            color: '#c9b49a',
            marginLeft: 1,
            transform: open ? 'rotate(180deg)' : 'none',
            transition: 'transform 0.2s',
          }}
        >
          ▾
        </span>
      </button>

      {open && (
        <div
          style={{
            position: 'absolute',
            top: 'calc(100% + 6px)',
            right: 0,
            minWidth: 160,
            background: '#fff',
            border: '1px solid rgba(201,180,154,0.3)',
            borderRadius: 12,
            boxShadow: '0 8px 24px rgba(44,36,22,0.12)',
            zIndex: 300,
            overflow: 'hidden',
            animation: 'fadeIn 0.15s ease',
          }}
        >
          {LOCALES.map((l) => (
            <button
              key={l.code}
              onClick={() => {
                setLocale(l.code);
                setOpen(false);
              }}
              style={{
                width: '100%',
                textAlign: 'left',
                background: l.code === locale ? 'rgba(212,133,58,0.08)' : 'none',
                border: 'none',
                borderLeft: l.code === locale ? '3px solid #d4853a' : '3px solid transparent',
                cursor: 'pointer',
                padding: '0.5rem 0.85rem',
                fontSize: '0.8rem',
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: l.code === locale ? 600 : 400,
                color: l.code === locale ? '#2c2416' : '#6b5c44',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                transition: 'all 0.1s',
              }}
            >
              <span style={{ fontSize: '1rem' }}>{l.flag}</span>
              <span>{l.label}</span>
            </button>
          ))}
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-4px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
