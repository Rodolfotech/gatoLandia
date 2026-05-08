const TOKEN_KEY = "gnt_admin_token";

function getSecret(): string {
  return process.env.ADMIN_PASSWORD || "gatitos2024";
}

export function generateToken(): string {
  const payload = {
    exp: Date.now() + 86400000,
    key: getSecret(),
  };
  return Buffer.from(JSON.stringify(payload)).toString("base64");
}

export function verifyToken(token: string): boolean {
  try {
    const payload = JSON.parse(Buffer.from(token, "base64").toString());
    return payload.exp > Date.now() && payload.key === getSecret();
  } catch {
    return false;
  }
}

export function getStoredToken(): string | null {
  if (typeof window === "undefined") return null;
  return localStorage.getItem(TOKEN_KEY);
}

export function setStoredToken(token: string): void {
  localStorage.setItem(TOKEN_KEY, token);
}

export function clearStoredToken(): void {
  localStorage.removeItem(TOKEN_KEY);
}
