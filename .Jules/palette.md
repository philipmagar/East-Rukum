## 2025-05-15 - Floating UI Collision & Semantic Buttons
**Learning:** In applications with multiple fixed/floating elements (like a "Back to Top" button and a "Music Player"), positioning them at similar bottom coordinates leads to visual overlap and interaction failures. Additionally, using non-semantic elements like `div` for interactive controls prevents keyboard accessibility and screen reader support.

**Action:** Always audit the viewport for overlapping fixed elements. Standardize vertical offsets (e.g., 30px for primary, 100px for secondary) to ensure clearance. Ensure all interactive controls use semantic `<button>` tags with localized `aria-label` attributes for accessibility.
