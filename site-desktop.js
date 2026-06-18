// site-desktop.js — Desktop layout for Merle Reimann's personal website.
// Design: "Quiet Press" — EB Garamond, white background, deep blue accent.
// Layout: full-viewport, single-page app with top nav. No page scrolling;
// each section has its own internal scroll area.

const PALETTE = {
  ink:       "#1d1a16",
  paper:     "#ffffff",
  paperDeep: "#f5f1e8",
  accent:    "#2a4c8a",
  muted:     "#b3a78f",
  rule:      "#1d1a1622",
};

// ── Shared helpers ─────────────────────────────────────────────────────────

function SectionLabel({ P, children }) {
  return (
    <div style={{
      fontVariant: "small-caps", letterSpacing: "0.12em", fontSize: 14,
      opacity: 0.65, marginBottom: 8,
      borderBottom: "1px solid " + P.rule, paddingBottom: 4,
    }}>
      {children}
    </div>
  );
}

// ── ClassicSite — root shell ────────────────────────────────────────────────

function ClassicSite() {
  const [page, setPage] = React.useState("home");
  const P = PALETTE;
  const nav = ["home", "publications", "talks", "mentoring", "contact"];

  return (
    <div style={{
      width: "100%", maxWidth: 1100, height: "100vh",
      background: P.paper, color: P.ink,
      fontFamily: '"EB Garamond", "Cormorant Garamond", Georgia, serif',
      fontSize: 15.5, lineHeight: 1.45,
      display: "flex", flexDirection: "column",
      boxShadow: "0 0 80px rgba(0,0,0,0.08)",
    }}>
      <ClassicHeader page={page} setPage={setPage} nav={nav} P={P} />
      <div style={{
        flex: 1, minHeight: 0,
        padding: "26px clamp(20px, 5vw, 56px) 0",
        display: "flex", flexDirection: "column",
      }}>
        {page === "home"         && <ClassicHome     P={P} setPage={setPage} />}
        {page === "publications" && <ClassicPubs     P={P} />}
        {page === "talks"        && <ClassicTalks    P={P} />}
        {page === "mentoring"    && <ClassicTeaching P={P} />}
        {page === "contact"      && <ClassicContact  P={P} setPage={setPage} />}
      </div>
      <ClassicFooter P={P} />
    </div>
  );
}

// ── ClassicHeader ───────────────────────────────────────────────────────────

function ClassicHeader({ page, setPage, nav, P }) {
  const [clicks, setClicks] = React.useState(0);
  const [flight, setFlight] = React.useState("idle");

  // Inject keyframe animations once on mount
  React.useEffect(() => {
    const id = "__bird-kf";
    if (document.getElementById(id)) return;
    const s = document.createElement("style");
    s.id = id;
    s.textContent = `
      @keyframes birdHop {
        0%   { transform: translate(0,0) rotate(0deg) scale(1); }
        25%  { transform: translate(1px,-10px) rotate(-6deg) scale(1,1.08); }
        50%  { transform: translate(2px,-14px) rotate(0deg) scale(1.05,0.95); }
        70%  { transform: translate(1px,-6px) rotate(4deg) scale(1,1.04); }
        100% { transform: translate(0,0) rotate(0deg) scale(1); }
      }
      @keyframes birdFlyAway {
        0%   { transform: translate(0,0) scaleX(-1) scaleY(1); opacity:1; }
        6%   { transform: translate(0,3px) scaleX(-1) scaleY(0.82); opacity:1; }
        16%  { transform: translate(18px,-28px) scaleX(-1) rotate(-22deg) scaleY(1.1); opacity:1; }
        30%  { transform: translate(55px,-60px) scaleX(-1) rotate(-18deg) scaleY(0.92); opacity:1; }
        45%  { transform: translate(110px,-100px) scaleX(-1) rotate(-20deg) scaleY(1.06); opacity:1; }
        62%  { transform: translate(195px,-148px) scaleX(-1) rotate(-22deg) scale(0.75,0.72); opacity:0.8; }
        80%  { transform: translate(290px,-180px) scaleX(-1) rotate(-24deg) scale(0.45,0.43); opacity:0.4; }
        100% { transform: translate(420px,-210px) scaleX(-1) rotate(-26deg) scale(0.15,0.14); opacity:0; }
      }
      @keyframes birdFlyBack {
        0%   { transform: translate(420px,-210px) rotate(-26deg) scale(0.15,0.14); opacity:0; }
        15%  { transform: translate(280px,-160px) rotate(-20deg) scale(0.35,0.33); opacity:0.4; }
        35%  { transform: translate(130px,-90px) rotate(-14deg) scale(0.68,0.65); opacity:0.9; }
        55%  { transform: translate(35px,-22px) rotate(-6deg) scale(0.98,0.96); opacity:1; }
        66%  { transform: translate(4px,7px) rotate(4deg) scale(1.04,0.92); opacity:1; }
        74%  { transform: translate(-2px,-6px) rotate(-3deg) scale(0.98,1.06); opacity:1; }
        81%  { transform: translate(1px,3px) rotate(2deg) scale(1.01,0.97); opacity:1; }
        88%  { transform: translate(-1px,-2px) rotate(-1deg) scale(1,1.02); opacity:1; }
        94%  { transform: translate(0,1px) rotate(0.5deg) scale(1,0.99); opacity:1; }
        100% { transform: translate(0,0) rotate(0deg) scale(1,1); opacity:1; }
      }
    `;
    document.head.appendChild(s);
  }, []);

  const handleBirdClick = () => {
    if (flight !== "idle") return;
    const next = clicks + 1;
    if (next < 3) {
      setClicks(next);
      setFlight("hop");
      setTimeout(() => setFlight("idle"), 500);
    } else {
      setClicks(0);
      setFlight("away");
      setTimeout(() => {
        setFlight("back");
        setTimeout(() => setFlight("idle"), 1800);
      }, 10000);
    }
  };

  const birdStyle = {
    height: 28, width: "auto", flexShrink: 0, display: "block",
    cursor: "pointer", userSelect: "none",
    animation:
      flight === "hop"  ? "birdHop 0.55s cubic-bezier(.4,0,.2,1) both" :
      flight === "away" ? "birdFlyAway 1.5s cubic-bezier(.4,0,1,1) both" :
      flight === "back" ? "birdFlyBack 2s cubic-bezier(.2,.8,.3,1) both" :
      "none",
    transformOrigin: "50% 80%",
  };

  return (
    <header style={{
      padding: "22px clamp(20px, 5vw, 56px) 14px",
      borderBottom: "1px solid " + P.rule,
      display: "flex", alignItems: "center", justifyContent: "space-between",
      gap: 24, flexShrink: 0,
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <img
          src="uploads/blackbird.png"
          alt="blackbird"
          onClick={handleBirdClick}
          style={birdStyle}
        />
        <div style={{ fontSize: 24, letterSpacing: "-0.01em", fontWeight: 500 }}>
          Merle&nbsp;M.&nbsp;Reimann
        </div>
      </div>

      <nav style={{
        display: "flex", gap: "clamp(12px, 1.5vw, 22px)", fontSize: 14,
        fontVariant: "small-caps", letterSpacing: "0.08em", alignItems: "baseline",
        flexWrap: "wrap", justifyContent: "flex-end",
      }}>
        {nav.map((n) => {
          const label = n === "mentoring" ? "teaching" : n;
          return (
            <button key={n} onClick={() => setPage(n)} style={{
              background: "none", border: 0, padding: 0, cursor: "pointer",
              color: P.ink, opacity: page === n ? 1 : 0.55,
              fontFamily: "inherit", fontSize: "inherit",
              letterSpacing: "inherit", fontVariant: "inherit",
              borderBottom: page === n ? "1px solid " + P.accent : "1px solid transparent",
              paddingBottom: 2,
            }}>
              {label}
            </button>
          );
        })}
        <span style={{ width: 1, height: 14, background: P.rule, alignSelf: "center" }} />
        <a href={SITE.cv} style={{
          color: P.paper, background: P.accent, textDecoration: "none",
          fontFamily: "inherit", fontSize: 13, fontVariant: "small-caps",
          letterSpacing: "0.08em", padding: "3px 10px", borderRadius: 3,
        }}>
          CV
        </a>
      </nav>
    </header>
  );
}

// ── ClassicFooter ───────────────────────────────────────────────────────────

function ClassicFooter({ P }) {
  const updated = new Date().toLocaleDateString("en-GB", { month: "short", year: "numeric" });
  return (
    <footer style={{
      padding: "10px clamp(20px, 5vw, 56px)",
      borderTop: "1px solid " + P.rule,
      display: "flex", justifyContent: "space-between",
      fontSize: 12, color: P.ink, opacity: 0.55,
      fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
      flexShrink: 0,
    }}>
      <span>Stockholm</span>
      <span>Last updated · {updated}</span>
    </footer>
  );
}

// ── ClassicHome ─────────────────────────────────────────────────────────────

function ClassicHome({ P }) {
  const btnBase = {
    display: "inline-block", padding: "5px 12px", textDecoration: "none",
    fontVariant: "small-caps", letterSpacing: "0.08em", fontSize: 12.5, lineHeight: 1,
    fontFamily: '"EB Garamond", Georgia, serif',
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", gap: 30 }}>
      {/* Portrait + bio + links */}
      <div style={{
        display: "grid", gridTemplateColumns: "230px 1fr", gap: 36, alignItems: "stretch",
      }}>
        <Portrait palette={P} fill />
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <h1 style={{ fontSize: 32, lineHeight: 1.06, margin: "0 0 12px", fontWeight: 500, letterSpacing: "-0.01em" }}>
            Hi, I am <em style={{ color: P.accent }}>Merle!</em>
          </h1>
          <p style={{ margin: "0 0 8px", color: P.ink, opacity: 0.88 }}>{SITE.about_long}</p>
          <p style={{ margin: "0 0 16px", color: P.ink, opacity: 0.7, fontStyle: "italic" }}>{SITE.about_short}</p>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            <a href={SITE.scholar} target="_blank" rel="noreferrer"
              style={{ ...btnBase, border: "1px solid " + P.ink + "55", color: P.ink }}>
              Google Scholar
            </a>
            <a href={SITE.linkedin} target="_blank" rel="noreferrer"
              style={{ ...btnBase, border: "1px solid " + P.ink + "55", color: P.ink }}>
              LinkedIn
            </a>
            <a href={SITE.kth} target="_blank" rel="noreferrer"
              style={{ ...btnBase, border: "1px solid " + P.ink + "55", color: P.ink }}>
              KTH Profile
            </a>
            <a href={"mailto:" + SITE.emailHref}
              style={{ ...btnBase, border: "1px solid " + P.accent, color: P.accent }}>
              {SITE.email}
            </a>
          </div>
        </div>
      </div>

      {/* Recent news — full width */}
      <div style={{ flex: 1, minHeight: 0, display: "flex", flexDirection: "column" }}>
        <SectionLabel P={P}>Recent news</SectionLabel>
        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column" }}>
          {NEWS.slice(0, 5).map((n, i) => (
            <li key={i} style={{
              display: "grid", gridTemplateColumns: "92px 1fr", gap: 16,
              fontSize: 14.5, padding: "8px 0",
              borderBottom: i < 4 ? "1px solid " + P.rule : "none",
              alignItems: "baseline",
            }}>
              <span style={{ fontFamily: "ui-monospace, monospace", fontSize: 11.5, opacity: 0.6 }}>
                {n.date}
              </span>
              <span style={{ color: P.ink, opacity: 0.92 }}>
                {n.text}
                {n.youtube && (
                  <a href={n.youtube} target="_blank" rel="noreferrer" style={{
                    marginLeft: 8, fontSize: 12, fontFamily: "ui-monospace, monospace",
                    color: P.accent, textDecoration: "none",
                    border: "1px solid " + P.accent + "66",
                    padding: "1px 7px", fontVariant: "small-caps", letterSpacing: "0.06em",
                  }}>Link</a>
                )}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// ── ClassicPubs ─────────────────────────────────────────────────────────────

function ClassicPubs({ P }) {
  const [open, setOpen] = React.useState(0);
  return (
    <div style={{
      display: "flex", flexDirection: "column", gap: 12,
      paddingBottom: 24, overflowY: "auto",
      paddingRight: 18, scrollbarGutter: "stable",
    }}>
      <SectionLabel P={P}>Publications</SectionLabel>
      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        {PUBS.map((p, i) => (
          <article key={i} onClick={() => setOpen(i)} style={{
            display: "grid", gridTemplateColumns: "138px 1fr auto",
            gap: 18, cursor: "pointer", padding: "10px 6px",
            borderBottom: "1px solid " + P.rule,
            background: open === i ? P.paperDeep : "transparent",
          }}>
            <div style={{ width: 138, height: 92, overflow: "hidden", border: "1px solid " + P.rule }}>
              <PubFigure src={p.figure} palette={P} />
            </div>
            <div>
              <div style={{ fontSize: 11.5, fontVariant: "small-caps", letterSpacing: "0.12em", color: P.accent, marginBottom: 2 }}>
                {p.venue} · {p.year}
              </div>
              <h3 style={{ margin: "0 0 4px", fontSize: 18, fontWeight: 500, lineHeight: 1.2, letterSpacing: "-0.005em" }}>
                {p.title}
              </h3>
              <div style={{ fontSize: 13, fontStyle: "italic", opacity: 0.72 }}>
                {p.authors} · {p.venueFull}
              </div>
              {open === i && (
                <div style={{ fontSize: 13.5, opacity: 0.85, marginTop: 6, maxWidth: 640 }}>
                  {p.blurb}
                </div>
              )}
            </div>
            <div style={{
              display: "flex", flexDirection: "column", gap: 4,
              alignItems: "flex-end",
              fontFamily: "ui-monospace, monospace", fontSize: 11.5,
            }}>
              {p.links.map((l, k) => (
                <a key={k} href={l.href} target="_blank" rel="noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  style={{ color: P.ink, opacity: 0.7 }}>
                  [{l.label}]
                </a>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

// ── ClassicTalks ────────────────────────────────────────────────────────────

function ClassicTalks({ P }) {
  return (
    <div style={{ overflowY: "auto", paddingBottom: 24 }}>
      <SectionLabel P={P}>Talks & presentations</SectionLabel>
      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {TALKS.map((t, i) => (
          <li key={i} style={{
            display: "grid", gridTemplateColumns: "120px 1fr 140px",
            gap: 20, padding: "14px 4px",
            borderBottom: "1px solid " + P.rule, alignItems: "start",
          }}>
            <span style={{ fontFamily: "ui-monospace, monospace", fontSize: 12, opacity: 0.7, paddingTop: 3 }}>
              {t.date}
            </span>
            <div>
              <div style={{ fontSize: 16, lineHeight: 1.2 }}>{t.title}</div>
              <div style={{ fontStyle: "italic", fontSize: 13, opacity: 0.7, marginTop: 2 }}>
                {t.venue} · {t.where}
              </div>
              {t.youtube && (
                <a href={t.youtube} target="_blank" rel="noreferrer" style={{
                  display: "inline-flex", alignItems: "center", gap: 5,
                  marginTop: 6, fontSize: 12,
                  color: P.accent, textDecoration: "none",
                  border: "1px solid " + P.accent + "66",
                  padding: "3px 10px", fontVariant: "small-caps", letterSpacing: "0.08em",
                  fontFamily: '"EB Garamond", Georgia, serif',
                }}>
                  YouTube
                </a>
              )}
            </div>
            <span style={{
              justifySelf: "end", fontVariant: "small-caps", letterSpacing: "0.1em",
              fontSize: 11.5, color: P.accent,
              border: "1px solid " + P.accent + "55", padding: "2px 8px",
            }}>
              {t.kind}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

// ── ClassicTeaching ─────────────────────────────────────────────────────────

function ClassicTeaching({ P }) {
  return (
    <div style={{ overflowY: "auto", paddingBottom: 24, display: "flex", flexDirection: "column", gap: 22 }}>

      {/* Teaching roles — courses, at top */}
      <div>
        <SectionLabel P={P}>Teaching roles</SectionLabel>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18, alignItems: "start" }}>
          {TEACHING.map((g, i) => (
            <section key={i} style={{ borderTop: "1px solid " + P.rule, paddingTop: 10 }}>
              <div style={{ marginBottom: 6 }}>
                <h3 style={{ margin: "0 0 2px", fontSize: 15, fontWeight: 500 }}>{g.role}</h3>
                <span style={{ fontFamily: "ui-monospace, monospace", fontSize: 11, opacity: 0.6 }}>{g.where}</span>
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 4 }}>
                {g.items.map((it, k) => (
                  <li key={k} style={{ fontSize: 13, display: "flex", gap: 8, alignItems: "flex-start" }}>
                    <span style={{ color: P.accent, flexShrink: 0 }}>—</span>
                    <span style={{ flex: 1 }}>{it}</span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>

      {/* Students */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 26 }}>
        <div>
          <SectionLabel P={P}>Current students</SectionLabel>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
            {STUDENTS.current.map((s, i) => (
              <li key={i} style={{ fontSize: 14 }}>
                <span style={{ fontFamily: "ui-monospace, monospace", fontSize: 11, color: P.accent }}>({s.level})</span>{" "}
                <em style={{ opacity: 0.6 }}>{s.name}</em> — {s.title}
                <span style={{ opacity: 0.5, fontSize: 12 }}> · {s.where} {s.since}–</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <SectionLabel P={P}>Past students</SectionLabel>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 6 }}>
            {STUDENTS.past.map((s, i) => (
              <li key={i} style={{ fontSize: 14 }}>
                <span style={{ fontFamily: "ui-monospace, monospace", fontSize: 11, color: P.accent }}>({s.level})</span>{" "}
                <em style={{ opacity: 0.6 }}>{s.name}</em> — {s.title}
                <span style={{ opacity: 0.5, fontSize: 12 }}> · {s.year}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Open thesis topics */}
      <div>
        <SectionLabel P={P}>Open MSc thesis topics</SectionLabel>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 16 }}>
          {OPEN_THESIS.map((t, i) => (
            <div key={i} style={{ borderTop: "2px solid " + P.accent, paddingTop: 10 }}>
              <div style={{ fontVariant: "small-caps", fontSize: 11.5, letterSpacing: "0.08em", color: P.accent, marginBottom: 4 }}>
                {t.level}
              </div>
              <div style={{ fontSize: 15, fontWeight: 500, marginBottom: 6, lineHeight: 1.3 }}>{t.title}</div>
              <div style={{ fontSize: 13, opacity: 0.82, marginBottom: 8, lineHeight: 1.45 }}>{t.description}</div>
              <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                {t.skills.map((sk) => (
                  <span key={sk} style={{ fontSize: 11.5, fontFamily: "ui-monospace, monospace", padding: "1px 6px", border: "1px solid " + P.rule }}>
                    {sk}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

// ── ClassicContact ──────────────────────────────────────────────────────────

function ClassicContact({ P, setPage }) {
  const btnBase = {
    display: "inline-block", padding: "5px 12px", textDecoration: "none",
    fontVariant: "small-caps", letterSpacing: "0.08em", fontSize: 12.5, lineHeight: 1,
    fontFamily: '"EB Garamond", Georgia, serif',
    border: "1px solid " + P.ink + "55", color: P.ink,
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", gap: 20 }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1.15fr", gap: 44, flex: 1, minHeight: 0 }}>

        {/* Left: contact details */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div>
            <SectionLabel P={P}>Contact</SectionLabel>
            <div style={{ fontSize: 15, lineHeight: 1.75 }}>
              <div style={{ fontWeight: 500 }}>{SITE.name}</div>
              <div style={{ fontStyle: "italic", opacity: 0.75 }}>{SITE.division}</div>
              <div style={{ opacity: 0.75 }}>KTH Royal Institute of Technology</div>
              <div style={{ opacity: 0.75 }}>{SITE.address}</div>
            </div>
            <a href={"mailto:" + SITE.emailHref} style={{
              marginTop: 14, display: "inline-flex", alignItems: "center", gap: 10,
              padding: "9px 14px", background: P.accent, color: P.paper,
              textDecoration: "none", fontVariant: "small-caps", letterSpacing: "0.06em", fontSize: 14,
            }}>
              <span>Write to me</span>
              <span style={{ fontFamily: "ui-monospace, monospace", fontSize: 12, opacity: 0.85 }}>{SITE.email}</span>
            </a>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 14 }}>
              <a href={SITE.scholar}  target="_blank" rel="noreferrer" style={btnBase}>Google Scholar</a>
              <a href={SITE.linkedin} target="_blank" rel="noreferrer" style={btnBase}>LinkedIn</a>
              <a href={SITE.kth}      target="_blank" rel="noreferrer" style={btnBase}>KTH Profile</a>
            </div>
          </div>
        </div>

        {/* Right: for prospective students */}
        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <div>
            <SectionLabel P={P}>Prospective students</SectionLabel>
            <p style={{ margin: "0 0 10px", fontSize: 15, lineHeight: 1.65, opacity: 0.9 }}>
              I supervise MSc thesis projects on topics in spoken HRI, dialogue management, and capability communication.
              If you are interested, I am happy to hear from you.
            </p>
            <button onClick={() => setPage && setPage("mentoring")} style={{
              display: "block", background: "none", border: "none", padding: 0, cursor: "pointer",
              color: P.accent, fontFamily: "inherit", fontSize: 14, fontStyle: "italic", textAlign: "left",
            }}>
              → See open thesis topics
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

Object.assign(window, { ClassicSite, PALETTE });
