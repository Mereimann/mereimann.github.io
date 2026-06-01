// figures.js — Publication thumbnails + portrait placeholder.
//
// ADDING PAPER FIGURES:
//   1. Export a figure from your paper as a PNG or JPEG (any size, ~3:2 ratio works well).
//   2. Drop the file into the uploads/figures/ folder.
//   3. In data.js, set the publication's `figure` field to the path, e.g.:
//        figure: "uploads/figures/hri25.png"
//   4. If `figure` is null, a simple placeholder is shown instead.

// Publication thumbnail: shows the image if a path is given, placeholder otherwise.
function PubFigure({ src, palette }) {
  const p = palette || { paper: "#f5f1e8", muted: "#c9c2b4", ink: "#1d1a16" };

  if (src) {
    return (
      <img
        src={src}
        alt="paper figure"
        style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center center", display: "block" }}
      />
    );
  }

  // Plain placeholder — no image yet
  return (
    <div style={{
      width: "100%", height: "100%",
      background: p.paper,
      display: "flex", alignItems: "center", justifyContent: "center",
    }}>
      <span style={{
        fontFamily: "ui-monospace, monospace", fontSize: 9,
        letterSpacing: "0.08em", textTransform: "uppercase",
        color: p.ink, opacity: 0.35,
      }}>
        figure
      </span>
    </div>
  );
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
