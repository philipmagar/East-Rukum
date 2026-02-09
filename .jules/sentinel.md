## 2025-05-14 - [Security Headers & Input Validation]
**Vulnerability:** Missing security headers (CSP, X-Frame-Options, etc.) and lack of input length validation.
**Learning:** For static sites deployed on Vercel, security headers must be explicitly configured in `vercel.json`. Contact forms, even if only client-side, should have `maxLength` limits to prevent extremely large payloads.
**Prevention:** Always include a comprehensive `vercel.json` with security headers and enforce input limits on all user-facing forms.
