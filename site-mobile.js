// site-mobile.js — Mobile layout for Merle Reimann's personal website.
// Responsive single-column layout with hamburger navigation.
// Renders when viewport width < 720px.

function ClassicMobileSite() {
  const [page, setPage] = React.useState("home");
  const [menuOpen, setMenuOpen] = React.useState(false);
  const P = PALETTE;
  const PAGES = ["home", "publications", "talks", "mentoring", "contact"];

  const goTo = (p) => { setPage(p); setMenuOpen(false); };

  return (
    <div style={{
      width: "100%", minHeight: "100vh",
      background: P.paper, color: P.ink,
      fontFamily: '"EB Garamond", "Cormorant Garamond", Georgia, serif',
      fontSize: 16, lineHeight: 1.5,
      position: "relative", display: "flex", flexDirection: "column",
    }}>

      {/* Header */}
      <header style={{
        padding: "14px 20px",
        borderBottom: "1px solid " + P.rule,
        display: "flex", justifyContent: "space-between", alignItems: "center",
        flexShrink: 0, position: "sticky", top: 0, background: P.paper, zIndex: 5,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <img src="uploads/blackbird.png" alt="blackbird" style={{ height: 24, width: "auto", flexShrink: 0, display: "block" }} />
          <div style={{ fontSize: 18, fontWeight: 500, letterSpacing: "-0.01em" }}>
            Merle M. Reimann
          </div>
        </div>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: "none", border: 0, cursor: "pointer", padding: 4 }}
          aria-label="Menu">
          {menuOpen
            ? <svg width="22" height="22" viewBox="0 0 22 22"><line x1="3" y1="3" x2="19" y2="19" stroke={P.ink} strokeWidth="1.6" strokeLinecap="round" /><line x1="19" y1="3" x2="3" y2="19" stroke={P.ink} strokeWidth="1.6" strokeLinecap="round" /></svg>
            : <svg width="22" height="22" viewBox="0 0 22 22"><line x1="3" y1="6" x2="19" y2="6" stroke={P.ink} strokeWidth="1.6" strokeLinecap="round" /><line x1="3" y1="11" x2="19" y2="11" stroke={P.ink} strokeWidth="1.6" strokeLinecap="round" /><line x1="3" y1="16" x2="19" y2="16" stroke={P.ink} strokeWidth="1.6" strokeLinecap="round" /></svg>
          }
        </button>
      </header>

      {/* Nav overlay */}
      {menuOpen && (
        <div style={{
          position: "fixed", inset: 0, zIndex: 20,
          background: P.paper, display: "flex", flexDirection: "column", padding: "20px",
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 28 }}>
            <div style={{ fontSize: 14, fontStyle: "italic", opacity: 0.6 }}>Navigate</div>
            <button onClick={() => setMenuOpen(false)} style={{ background: "none", border: 0, cursor: "pointer" }}>
              <svg width="22" height="22" viewBox="0 0 22 22"><line x1="3" y1="3" x2="19" y2="19" stroke={P.ink} strokeWidth="1.6" strokeLinecap="round" /><line x1="19" y1="3" x2="3" y2="19" stroke={P.ink} strokeWidth="1.6" strokeLinecap="round" /></svg>
            </button>
          </div>
          <nav style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {PAGES.map((n) => {
              const label = n === "mentoring" ? "Teaching" : n.charAt(0).toUpperCase() + n.slice(1);
              return (
                <button key={n} onClick={() => goTo(n)} style={{
                  textAlign: "left", background: "none", border: 0,
                  borderBottom: "1px solid " + P.rule,
                  padding: "18px 4px", fontFamily: "inherit", fontSize: 28, fontWeight: 500,
                  letterSpacing: "-0.01em", color: page === n ? P.accent : P.ink, cursor: "pointer",
                  display: "flex", justifyContent: "space-between", alignItems: "center",
                }}>
                  <span>{label}</span>
                  {page === n && <span style={{ fontSize: 14, color: P.accent, fontStyle: "italic" }}>current</span>}
                </button>
              );
            })}
          </nav>
          <div style={{ marginTop: "auto", paddingTop: 24 }}>
            <a href={SITE.cv} style={{
              display: "inline-flex", alignItems: "center", gap: 10,
              padding: "12px 18px", background: P.accent, color: P.paper,
              textDecoration: "none", fontSize: 15, fontVariant: "small-caps", letterSpacing: "0.1em",
            }}>
              Download CV <span style={{ fontFamily: "ui-monospace, monospace", fontSize: 12 }}>↓ pdf</span>
            </a>
          </div>
        </div>
      )}

      {/* Page content */}
      <div style={{ flex: 1, padding: "20px 20px 16px" }}>
        {page === "home"         && <MobileHome     P={P} setPage={setPage} />}
        {page === "publications" && <MobilePubs     P={P} />}
        {page === "talks"        && <MobileTalks    P={P} />}
        {page === "mentoring"    && <MobileTeaching P={P} />}
        {page === "contact"      && <MobileContact  P={P} setPage={setPage} />}
      </div>

      {/* Footer links */}
      <footer style={{
        padding: "12px 20px",
        borderTop: "1px solid " + P.rule,
        display: "flex", justifyContent: "center", gap: 16,
        fontSize: 12.5, fontVariant: "small-caps", letterSpacing: "0.08em",
        color: P.ink, opacity: 0.7, flexShrink: 0,
      }}>
        <a href={SITE.scholar}  target="_blank" rel="noreferrer" style={{ color: "inherit", textDecoration: "none" }}>Scholar</a>
        <span style={{ opacity: 0.4 }}>·</span>
        <a href={SITE.linkedin} target="_blank" rel="noreferrer" style={{ color: "inherit", textDecoration: "none" }}>LinkedIn</a>
        <span style={{ opacity: 0.4 }}>·</span>
        <a href={"mailto:" + SITE.emailHref} style={{ color: "inherit", textDecoration: "none" }}>Email</a>
        <span style={{ opacity: 0.4 }}>·</span>
        <a href={SITE.kth}      target="_blank" rel="noreferrer" style={{ color: "inherit", textDecoration: "none" }}>KTH</a>
      </footer>
    </div>
  );
}

// ── Mobile section label ────────────────────────────────────────────────────

function MobileSectionLabel({ P, children }) {
  return (
    <div style={{
      fontVariant: "small-caps", letterSpacing: "0.12em", fontSize: 14,
      opacity: 0.65, marginBottom: 10, borderBottom: "1px solid " + P.rule, paddingBottom: 4,
    }}>
      {children}
    </div>
  );
}

// ── MobileHome ──────────────────────────────────────────────────────────────

function MobileHome({ P }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
      {/* Portrait + greeting */}
      <div style={{ display: "grid", gridTemplateColumns: "100px 1fr", gap: 16, alignItems: "start" }}>
        <div style={{ width: 100, height: 100, overflow: "hidden", border: "1px solid " + P.rule }}>
          <Portrait palette={P} />
        </div>
        <div>
          <h1 style={{ margin: "0 0 6px", fontSize: 22, fontWeight: 500, lineHeight: 1.1, letterSpacing: "-0.01em" }}>
            Hi, I am <em style={{ color: P.accent }}>Merle!</em>
          </h1>
        </div>
      </div>

      {/* About */}
      <div>
        <MobileSectionLabel P={P}>About</MobileSectionLabel>
        <p style={{ margin: "0 0 8px", fontSize: 15, lineHeight: 1.55 }}>{SITE.about_long}</p>
        <p style={{ margin: 0, fontStyle: "italic", opacity: 0.75, fontSize: 14.5 }}>{SITE.about_short}</p>
      </div>

      {/* News */}
      <div>
        <MobileSectionLabel P={P}>Recent news</MobileSectionLabel>
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {NEWS.map((n, i) => (
            <li key={i} style={{
              display: "grid", gridTemplateColumns: "68px 1fr", gap: 10,
              padding: "10px 0", borderBottom: i < NEWS.length - 1 ? "1px solid " + P.rule : "none",
              fontSize: 14.5, alignItems: "baseline",
            }}>
              <span style={{ fontFamily: "ui-monospace, monospace", fontSize: 11, opacity: 0.55, lineHeight: 1.6 }}>
                {n.date}
              </span>
              <span>
                {n.text}
                {n.youtube && (
                  <a href={n.youtube} target="_blank" rel="noreferrer" style={{
                    marginLeft: 8, fontSize: 12, fontFamily: "ui-monospace, monospace",
                    color: P.accent, textDecoration: "none",
                    border: "1px solid " + P.accent + "66",
                    padding: "1px 7px", fontVariant: "small-caps", letterSpacing: "0.06em",
                  }}>YouTube</a>
                )}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// ── MobilePubs ──────────────────────────────────────────────────────────────

function MobilePubs({ P }) {
  const [open, setOpen] = React.useState(null);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
      <MobileSectionLabel P={P}>Publications</MobileSectionLabel>
      {PUBS.map((p, i) => (
        <article key={i} onClick={() => setOpen(open === i ? null : i)} style={{
          borderBottom: "1px solid " + P.rule, padding: "14px 0", cursor: "pointer",
        }}>
          <div style={{ display: "grid", gridTemplateColumns: "90px 1fr", gap: 14 }}>
            <div style={{ width: 90, height: 64, overflow: "hidden", border: "1px solid " + P.rule, flexShrink: 0 }}>
              <PubFigure id={p.figure} palette={P} />
            </div>
            <div>
              <div style={{ fontFamily: "ui-monospace, monospace", fontSize: 10.5, color: P.accent, marginBottom: 2 }}>
                {p.venue} · {p.year}
              </div>
              <h3 style={{ margin: "0 0 3px", fontSize: 15.5, fontWeight: 500, lineHeight: 1.2 }}>{p.title}</h3>
              <div style={{ fontSize: 12.5, fontStyle: "italic", opacity: 0.65 }}>{p.authors}</div>
            </div>
          </div>
          {open === i && (
            <div style={{ marginTop: 10, fontSize: 14, opacity: 0.85, lineHeight: 1.5 }}>
              <p style={{ margin: "0 0 8px" }}>{p.blurb}</p>
              <div style={{ display: "flex", gap: 10, fontFamily: "ui-monospace, monospace", fontSize: 12 }}>
                {p.links.map((l, k) => (
                  <a key={k} href={l.href} target="_blank" rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    style={{ color: P.accent }}>
                    [{l.label}]
                  </a>
                ))}
              </div>
            </div>
          )}
        </article>
      ))}
    </div>
  );
}

// ── MobileTalks ─────────────────────────────────────────────────────────────

function MobileTalks({ P }) {
  return (
    <div>
      <MobileSectionLabel P={P}>Talks & presentations</MobileSectionLabel>
      {TALKS.map((t, i) => (
        <div key={i} style={{ padding: "12px 0", borderBottom: i < TALKS.length - 1 ? "1px solid " + P.rule : "none" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 3 }}>
            <span style={{ fontFamily: "ui-monospace, monospace", fontSize: 11, opacity: 0.6 }}>{t.date}</span>
            <span style={{ fontVariant: "small-caps", fontSize: 11.5, color: P.accent, border: "1px solid " + P.accent + "44", padding: "1px 6px" }}>{t.kind}</span>
          </div>
          <div style={{ fontSize: 15.5, lineHeight: 1.3, marginBottom: 3 }}>{t.title}</div>
          <div style={{ fontSize: 13, fontStyle: "italic", opacity: 0.65 }}>{t.venue} · {t.where}</div>
          {t.youtube && (
            <a href={t.youtube} target="_blank" rel="noreferrer" style={{
              display: "inline-block", marginTop: 6, padding: "3px 10px",
              border: "1px solid " + P.accent + "66",
              color: P.accent, textDecoration: "none",
              fontVariant: "small-caps", letterSpacing: "0.08em", fontSize: 13,
            }}>
              YouTube
            </a>
          )}
        </div>
      ))}
    </div>
  );
}

// ── MobileTeaching ──────────────────────────────────────────────────────────

function MobileTeaching({ P }) {
  const [tab, setTab] = React.useState("roles");
  const tabs = [["roles", "Roles"], ["students", "Students"], ["thesis", "Open topics"]];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
      <MobileSectionLabel P={P}>Teaching & supervision</MobileSectionLabel>

      {/* Tab switcher */}
      <div style={{ display: "flex", gap: 0, marginBottom: 4 }}>
        {tabs.map(([id, label]) => (
          <button key={id} onClick={() => setTab(id)} style={{
            flex: 1, background: "none",
            border: "1px solid " + P.rule,
            borderBottom: tab === id ? "2px solid " + P.accent : "1px solid " + P.rule,
            padding: "7px 4px", fontFamily: "inherit", fontSize: 13.5,
            fontVariant: "small-caps", letterSpacing: "0.06em",
            color: tab === id ? P.accent : P.ink, cursor: "pointer",
          }}>
            {label}
          </button>
        ))}
      </div>

      {tab === "roles" && (
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {TEACHING.map((g, i) => (
            <div key={i} style={{ borderTop: "1px solid " + P.rule, paddingTop: 10 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 6 }}>
                <span style={{ fontSize: 16, fontWeight: 500 }}>{g.role}</span>
                <span style={{ fontFamily: "ui-monospace, monospace", fontSize: 11, opacity: 0.6 }}>{g.where}</span>
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {g.items.map((it, k) => (
                  <li key={k} style={{ fontSize: 14, padding: "4px 0", display: "flex", gap: 8 }}>
                    <span style={{ color: P.accent, flexShrink: 0 }}>—</span><span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}

      {tab === "students" && (
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div>
            <div style={{ fontVariant: "small-caps", letterSpacing: "0.1em", fontSize: 12, marginBottom: 8, opacity: 0.7 }}>Current</div>
            {STUDENTS.current.map((s, i) => (
              <div key={i} style={{ padding: "8px 0", borderBottom: "1px solid " + P.rule, fontSize: 14.5 }}>
                <span style={{ fontFamily: "ui-monospace, monospace", fontSize: 11, color: P.accent }}>({s.level})</span>{" "}
                <em style={{ opacity: 0.6 }}>{s.name}</em> — {s.title}
                <span style={{ opacity: 0.5, fontSize: 12 }}> · {s.since}–</span>
              </div>
            ))}
          </div>
          <div>
            <div style={{ fontVariant: "small-caps", letterSpacing: "0.1em", fontSize: 12, marginBottom: 8, opacity: 0.7 }}>Past</div>
            {STUDENTS.past.map((s, i) => (
              <div key={i} style={{ padding: "8px 0", borderBottom: "1px solid " + P.rule, fontSize: 14.5 }}>
                <span style={{ fontFamily: "ui-monospace, monospace", fontSize: 11, color: P.accent }}>({s.level})</span>{" "}
                <em style={{ opacity: 0.6 }}>{s.name}</em> — {s.title}
                <span style={{ opacity: 0.5, fontSize: 12 }}> · {s.year}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {tab === "thesis" && (
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          {OPEN_THESIS.map((t, i) => (
            <div key={i} style={{ borderTop: "2px solid " + P.accent, paddingTop: 10 }}>
              <div style={{ fontVariant: "small-caps", fontSize: 11.5, color: P.accent, marginBottom: 4 }}>{t.level}</div>
              <div style={{ fontSize: 16, fontWeight: 500, marginBottom: 6, lineHeight: 1.25 }}>{t.title}</div>
              <div style={{ fontSize: 14, opacity: 0.82, marginBottom: 8, lineHeight: 1.5 }}>{t.description}</div>
              <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                {t.skills.map((sk) => (
                  <span key={sk} style={{ fontSize: 12, fontFamily: "ui-monospace, monospace", padding: "2px 7px", border: "1px solid " + P.rule }}>
                    {sk}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ── MobileContact ───────────────────────────────────────────────────────────

function MobileContact({ P, setPage }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
      <div>
        <MobileSectionLabel P={P}>Contact</MobileSectionLabel>
        <div style={{ fontSize: 15, lineHeight: 1.7 }}>
          <div style={{ fontWeight: 500 }}>{SITE.name}</div>
          <div style={{ fontStyle: "italic", opacity: 0.7 }}>{SITE.division}</div>
          <div style={{ opacity: 0.7 }}>KTH Royal Institute of Technology</div>
          <div style={{ opacity: 0.7 }}>Stockholm, Sweden</div>
        </div>
        <a href={"mailto:" + SITE.emailHref} style={{
          display: "inline-flex", alignItems: "center", gap: 8, marginTop: 12,
          padding: "9px 14px", background: P.accent, color: P.paper,
          textDecoration: "none", fontVariant: "small-caps", letterSpacing: "0.06em", fontSize: 14,
        }}>
          Write to me <span style={{ fontFamily: "ui-monospace, monospace", fontSize: 12, opacity: 0.85 }}>{SITE.email}</span>
        </a>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 14 }}>
          {[["Google Scholar", SITE.scholar], ["LinkedIn", SITE.linkedin], ["KTH Profile", SITE.kth]].map(([label, href]) => (
            <a key={label} href={href} target="_blank" rel="noreferrer" style={{
              display: "inline-block", padding: "5px 12px",
              border: "1px solid " + P.ink + "55", color: P.ink,
              textDecoration: "none", fontVariant: "small-caps",
              letterSpacing: "0.08em", fontSize: 13,
            }}>{label}</a>
          ))}
        </div>
      </div>

      <div>
        <MobileSectionLabel P={P}>Prospective students</MobileSectionLabel>
        <p style={{ margin: "0 0 10px", fontSize: 15, lineHeight: 1.65, opacity: 0.9 }}>
          I supervise MSc thesis projects on topics in spoken HRI, dialogue management, and capability communication.
          If you are interested, I am happy to hear from you.
        </p>
        <button onClick={() => setPage && setPage("mentoring")} style={{
          background: "none", border: "none", padding: 0, cursor: "pointer",
          color: P.accent, fontFamily: "inherit", fontSize: 14, fontStyle: "italic",
        }}>
          → See open thesis topics
        </button>
      </div>
    </div>
  );
}

Object.assign(window, { ClassicMobileSite });
