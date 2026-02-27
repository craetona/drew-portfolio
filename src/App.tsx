import React from "react";
import { person, summary, skills, timeline } from "./data/resumeData";
import Timeline from "./components/Timeline";

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="section">
      <div className="section-title">
        <h2>{title}</h2>
      </div>
      {children}
    </section>
  );
}

export default function App() {
  const emailHref = `mailto:${person.email}`;
  const phoneHref = `tel:${person.phone.replace(/[^0-9+]/g, "")}`;

  return (
    <>
      <header className="nav">
        <div className="nav-inner">
          <div className="brand">
            <div className="badge" aria-hidden="true" />
            <div>
              <strong>{person.name}</strong>
              <div className="small">{person.location}</div>
            </div>
          </div>

          <nav className="nav-links" aria-label="Site">
            <a className="pill" href="#about">About</a>
            <a className="pill" href="#skills">Skills</a>
            <a className="pill" href="#timeline">Timeline</a>
            <a className="pill" href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main className="container">
        <div className="hero">
          <h1 className="h1">Software Engineer Portfolio</h1>
          <p className="sub">{summary}</p>

          <div className="row">
            <a className="cta" href="#timeline">View Timeline</a>
            <a className="cta secondary" href={emailHref}>Email</a>
            <a className="cta secondary" href={phoneHref}>Call</a>
            {person.links.map((l) => (
              <a className="cta secondary" key={l.label} href={l.href} target="_blank" rel="noreferrer">
                {l.label}
              </a>
            ))}
          </div>
        </div>

        <div className="grid two">
          <div className="card" id="about">
            <h2>About</h2>
            <p className="muted" style={{ marginTop: 0 }}>
              {person.name} · {person.location}
            </p>

            <div className="hr" />

            <h3>Summary</h3>
            <p className="muted">{summary}</p>

            <div className="kv" aria-label="Contact quick links">
              <a className="pill" href={emailHref}>{person.email}</a>
              <a className="pill" href={phoneHref}>{person.phone}</a>
            </div>
          </div>

          <div className="card" id="skills">
            <h2>Skills</h2>

            <div className="hr" />

            <h3>Technical</h3>
            <div className="kv">
              {skills.technical.map((s) => <span key={s}>{s}</span>)}
            </div>

            <div className="hr" />

            <h3>Soft</h3>
            <div className="kv">
              {skills.soft.map((s) => <span key={s}>{s}</span>)}
            </div>
          </div>
        </div>

        <Section id="timeline" title="Timeline (dated items)">
          <div className="card">
            <Timeline items={timeline} />
          </div>
        </Section>

        <Section id="contact" title="Contact">
          <div className="grid three">
            <div className="card">
              <h2>Email</h2>
              <p className="muted">Best for initial outreach.</p>
              <a className="cta" href={emailHref}>{person.email}</a>
            </div>
            <div className="card">
              <h2>Phone</h2>
              <p className="muted">Available for calls or quick follow-ups.</p>
              <a className="cta" href={phoneHref}>{person.phone}</a>
            </div>
            <div className="card">
              <h2>Links</h2>
              <p className="muted">Professional profiles and repositories.</p>
              <div className="kv">
                {person.links.map((l) => (
                  <a className="pill" key={l.label} href={l.href} target="_blank" rel="noreferrer">
                    {l.label}
                  </a>
                ))}
              </div>
              <p className="small" style={{ marginTop: 10 }}>
                Feel free to connect or view my work on LinkedIn and GitHub!
              </p>
            </div>
          </div>

          <div className="footer">
            <div>
              © {new Date().getFullYear()} {person.name}. Built with React + TypeScript.
            </div>
          </div>
        </Section>
      </main>
    </>
  );
}