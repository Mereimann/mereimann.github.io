// figures.js — SVG figure placeholders for publication thumbnails + portrait.
// These give each publication card a visual thumbnail with a paper-figure feel.
// Replace these with screenshots of your actual paper figures if you wish.

const P_DEFAULT = {
  ink:    "#1a1a1a",
  paper:  "#f6f4ef",
  accent: "#2a4c8a",
  muted:  "#c9c2b4",
};

function PubFigure({ id, palette, label }) {
  const p = palette || P_DEFAULT;
  const stripes = (
    <defs>
      <pattern id={"stripe-" + id} width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
        <line x1="0" y1="0" x2="0" y2="6" stroke={p.muted} strokeWidth="1" />
      </pattern>
    </defs>
  );
  const common = { width: "100%", height: "100%", viewBox: "0 0 200 140", preserveAspectRatio: "xMidYMid slice" };

  switch (id) {
    case "restaurant":
      return (
        <svg {...common}>
          {stripes}
          <rect width="200" height="140" fill={p.paper} />
          <rect width="200" height="140" fill={"url(#stripe-" + id + ")"} opacity="0.35" />
          <ellipse cx="100" cy="78" rx="46" ry="22" fill={p.paper} stroke={p.ink} strokeWidth="1.2" />
          <rect x="86" y="32" width="28" height="34" rx="4" fill={p.paper} stroke={p.ink} strokeWidth="1.2" />
          <circle cx="100" cy="44" r="6" fill={p.accent} />
          <line x1="93" y1="56" x2="107" y2="56" stroke={p.ink} strokeWidth="1.2" />
          <rect x="36" y="92" width="20" height="12" rx="2" fill={p.paper} stroke={p.ink} strokeWidth="1.2" />
          <rect x="144" y="92" width="20" height="12" rx="2" fill={p.paper} stroke={p.ink} strokeWidth="1.2" />
          <text x="10" y="132" fontFamily="ui-monospace, monospace" fontSize="8" fill={p.ink} opacity="0.55">fig. · restaurant study</text>
        </svg>
      );
    case "dialogue":
      return (
        <svg {...common}>
          {stripes}
          <rect width="200" height="140" fill={p.paper} />
          <rect width="200" height="140" fill={"url(#stripe-" + id + ")"} opacity="0.3" />
          <rect x="20" y="28" width="80" height="10" fill={p.ink} />
          <rect x="100" y="48" width="60" height="10" fill={p.accent} />
          <rect x="20" y="68" width="100" height="10" fill={p.ink} opacity="0.6" />
          <rect x="100" y="88" width="40" height="10" fill={p.accent} opacity="0.7" />
          <text x="10" y="132" fontFamily="ui-monospace, monospace" fontSize="8" fill={p.ink} opacity="0.55">fig. · turn taking</text>
        </svg>
      );
    case "thesis":
      return (
        <svg {...common}>
          {stripes}
          <rect width="200" height="140" fill={p.paper} />
          <rect x="60" y="22" width="80" height="100" fill={p.paper} stroke={p.ink} strokeWidth="1.4" />
          <rect x="60" y="22" width="80" height="14" fill={p.accent} />
          <line x1="70" y1="50" x2="130" y2="50" stroke={p.ink} strokeWidth="1" />
          <line x1="70" y1="58" x2="120" y2="58" stroke={p.ink} strokeWidth="1" />
          <line x1="70" y1="66" x2="124" y2="66" stroke={p.ink} strokeWidth="1" />
          <line x1="70" y1="74" x2="110" y2="74" stroke={p.ink} strokeWidth="1" />
          <text x="10" y="132" fontFamily="ui-monospace, monospace" fontSize="8" fill={p.ink} opacity="0.55">phd thesis · 182 pp.</text>
        </svg>
      );
    case "survey":
      return (
        <svg {...common}>
          {stripes}
          <rect width="200" height="140" fill={p.paper} />
          <rect width="200" height="140" fill={"url(#stripe-" + id + ")"} opacity="0.25" />
          <circle cx="100" cy="34" r="6" fill={p.accent} />
          <line x1="100" y1="40" x2="50" y2="70" stroke={p.ink} />
          <line x1="100" y1="40" x2="100" y2="70" stroke={p.ink} />
          <line x1="100" y1="40" x2="150" y2="70" stroke={p.ink} />
          <circle cx="50"  cy="74" r="5" fill={p.ink} />
          <circle cx="100" cy="74" r="5" fill={p.ink} />
          <circle cx="150" cy="74" r="5" fill={p.ink} />
          <line x1="50"  y1="80" x2="30"  y2="100" stroke={p.ink} opacity="0.7" />
          <line x1="50"  y1="80" x2="70"  y2="100" stroke={p.ink} opacity="0.7" />
          <line x1="150" y1="80" x2="130" y2="100" stroke={p.ink} opacity="0.7" />
          <line x1="150" y1="80" x2="170" y2="100" stroke={p.ink} opacity="0.7" />
          <circle cx="30"  cy="104" r="3.5" fill={p.accent} opacity="0.7" />
          <circle cx="70"  cy="104" r="3.5" fill={p.accent} opacity="0.7" />
          <circle cx="130" cy="104" r="3.5" fill={p.accent} opacity="0.7" />
          <circle cx="170" cy="104" r="3.5" fill={p.accent} opacity="0.7" />
          <text x="10" y="132" fontFamily="ui-monospace, monospace" fontSize="8" fill={p.ink} opacity="0.55">fig. · DM taxonomy</text>
        </svg>
      );
    case "wild":
      return (
        <svg {...common}>
          {stripes}
          <rect width="200" height="140" fill={p.paper} />
          <rect width="200" height="140" fill={"url(#stripe-" + id + ")"} opacity="0.25" />
          <rect x="20" y="40" width="160" height="70" fill={p.paper} stroke={p.ink} strokeWidth="1.2" />
          <line x1="20" y1="62" x2="180" y2="62" stroke={p.ink} opacity="0.6" />
          <rect x="86" y="70" width="16" height="22" fill={p.accent} />
          <circle cx="94" cy="68" r="5" fill={p.accent} />
          {[40, 60, 130, 150, 165].map((x, i) => (
            <circle key={i} cx={x} cy={94} r="4" fill={p.ink} opacity="0.7" />
          ))}
          <text x="10" y="132" fontFamily="ui-monospace, monospace" fontSize="8" fill={p.ink} opacity="0.55">fig. · in-the-wild deployment</text>
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <rect width="200" height="140" fill={p.paper} />
          {stripes}
          <rect width="200" height="140" fill={"url(#stripe-" + id + ")"} opacity="0.4" />
          <text x="100" y="76" textAnchor="middle" fontFamily="ui-monospace, monospace" fontSize="9" fill={p.ink} opacity="0.6">
            {label || id || "figure"}
          </text>
        </svg>
      );
  }
}

// Portrait: shows a real photo if PORTRAIT_SRC is set, otherwise a placeholder.
function Portrait({ palette, fill = false }) {
  const p = palette || P_DEFAULT;
  const containerStyle = {
    ...(fill ? { height: "100%", minHeight: 0 } : { aspectRatio: "4/5" }),
    width: "100%",
    background: p.paper,
    position: "relative",
    overflow: "hidden",
    border: "1px solid " + p.ink + "22",
    flexShrink: 0,
  };

  if (window.PORTRAIT_SRC) {
    return (
      <div style={containerStyle}>
        <img
          src={window.PORTRAIT_SRC}
          alt="Merle M. Reimann"
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", display: "block" }}
        />
      </div>
    );
  }

  return (
    <div style={containerStyle}>
      <svg width="100%" height="100%" viewBox="0 0 100 125" preserveAspectRatio="xMidYMid slice" style={{ position: "absolute", inset: 0 }}>
        <defs>
          <pattern id="portrait-stripe" width="4" height="4" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <line x1="0" y1="0" x2="0" y2="4" stroke={p.muted} strokeWidth="0.6" />
          </pattern>
        </defs>
        <rect width="100" height="125" fill="url(#portrait-stripe)" opacity="0.55" />
        <circle cx="50" cy="52" r="18" fill={p.paper} stroke={p.ink} strokeWidth="0.6" opacity="0.7" />
        <path d="M22,118 C 26,90 42,80 50,80 C 58,80 74,90 78,118 Z" fill={p.paper} stroke={p.ink} strokeWidth="0.6" opacity="0.7" />
      </svg>
      <div style={{
        position: "absolute", left: 8, bottom: 6,
        fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
        fontSize: 9, letterSpacing: "0.06em", textTransform: "uppercase",
        color: p.ink, opacity: 0.45,
      }}>
        photo
      </div>
    </div>
  );
}

Object.assign(window, { PubFigure, Portrait });
