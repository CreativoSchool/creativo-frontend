// ==========================================
// CREATIVO DESIGN SYSTEM
// FILE: styles/creativo_design_system.ts
// SAFE VERSION – NO DUPLICATE IDENTIFIER
// ==========================================

// ---------- COLORS ----------
export const creativoColors = {
  brand: {
    primary: "#3B82F6",
    secondary: "#22C55E",
    magenta: "#EE2158",
  },

  neutral: {
    black: "#000000",
    white: "#FFFFFF",
    gray: "#6B7280",
    light: "#F9FAFB",
  },

  border: {
    light: "#E5E7EB",
  },
}

// ---------- TYPOGRAPHY ----------
export const typography = {
  heading: {
    fontFamily: "'Poppins', sans-serif",
    weight: 600,
    color: "#111827",
  },

  body: {
    fontFamily: "'Inter', sans-serif",
    weight: 400,
    color: "#4B5563",
  },

  badge: {
    fontFamily: "'Inter', sans-serif",
    weight: 500,
    size: "0.75rem",
  },
}

// ---------- BADGE BASE STYLE ----------
export const badgeBaseStyle = {
  display: "inline-flex",
  alignItems: "center",
  padding: "4px 10px",
  borderRadius: "9999px",
  lineHeight: 1,
}

// ---------- BADGE VARIANTS ----------
export const badgeVariants = {
  programType: {
    monthly: {
      bg: "#DBEAFE",
      text: "#1E40AF",
    },
    foundation: {
      bg: "#DCFCE7",
      text: "#166534",
    },
    customPrivate: {
      bg: "#FCE7F3",
      text: "#9D174D",
    },
  },

  audience: {
    kids: {
      bg: "#FEF3C7",
      text: "#92400E",
    },
    junior: {
      bg: "#E0E7FF",
      text: "#3730A3",
    },
    teen: {
      bg: "#EDE9FE",
      text: "#5B21B6",
    },
    adult: {
      bg: "#ECFEFF",
      text: "#155E75",
    },
  },
}
