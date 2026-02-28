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
          <a className="brand" href="#top">
            <div className="badge" aria-hidden="true" />
            <div>
              <strong>{person.name}</strong>
              <div className="small">{person.location}</div>
            </div>
          </a>

          <nav className="nav-links" aria-label="Site">
            <a className="pill" href="#about">About</a>
            <a className="pill" href="#skills">Skills</a>
            <a className="pill" href="#timeline">Timeline</a>
            <a className="pill" href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main className="container" id="top">
        <div className="hero">
          <p className="eyebrow">Portfolio</p>
          <h1 className="h1">Software Engineer</h1>
        </div>

        <div className="grid two">
          <div className="card" id="about">
            <h2>About</h2>
            <p className="muted" style={{ marginTop: 0, marginBottom: 0}}>
              {person.name} - {person.location}
            </p>
            <div className="kv" aria-label="External links">
              {person.links.map((l) => (
                <a className="pill" key={l.label} href={l.href} target="_blank" rel="noreferrer">
                  {l.label}
                </a>
              ))}
            </div>
            <p>{summary}</p>
          </div>

          <div className="card" id="skills">
            <h2>Skills</h2>
            <div className="skill-group">
              <h3>Technical</h3>
              <div className="kv">
                {skills.technical.map((s) => <span key={s}>{s}</span>)}
              </div>
            </div>
            <div className="skill-group">
              <h3>Soft</h3>
              <div className="kv">
                {skills.soft.map((s) => <span key={s}>{s}</span>)}
              </div>
            </div>
          </div>
        </div>

        <Section id="timeline" title="Timeline">
          <div className="card">
            <Timeline items={timeline} />
          </div>
        </Section>

        <Section id="contact" title="Contact">
          <div className="card contact-card">
            <h2>Lets connect</h2>
            <p className="muted">Email works best for first outreach. Phone is great for quick follow-ups.</p>
            <div className="row">
              <a className="cta" href={emailHref}>{person.email}</a>
              <a className="cta secondary" href={phoneHref}>{person.phone}</a>
            </div>
          </div>

          <div className="footer">
            <div>
              (c) {new Date().getFullYear()} {person.name}. Built with React + TypeScript.
            </div>
          </div>
        </Section>
      </main>
    </>
  );
}
