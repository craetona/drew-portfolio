import type { ReactNode } from "react";
import { person, summary, skills, timeline } from "./data/resumeData";
import Timeline from "./components/Timeline";

/**
 * Shared wrapper for top-level sections to keep heading and spacing consistent.
 */
interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
}

/**
 * Reusable section shell used by the single-page anchor navigation.
 */
function Section({
  id,
  title,
  children,
}: SectionProps) {
  return (
    <section id={id} className="section">
      <div className="section-title">
        <h2>{title}</h2>
      </div>
      {children}
    </section>
  );
}

/**
 * Root portfolio page rendered as a static SPA.
 */
export default function App() {
  const emailHref = `mailto:${person.email}`;
  // Strip formatting characters so `tel:` is broadly compatible across devices.
  const phoneHref = `tel:${person.phone.replace(/[^0-9+]/g, "")}`;

  return (
    <>
      {/* Anchor-based nav keeps this portfolio dependency-light and GitHub Pages friendly. */}
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
              <h3>Languages and Frameworks</h3>
              <div className="kv">
                {skills.languages.map((s) => <span key={s}>{s}</span>)}
              </div>
            </div>
            <div className="skill-group">
              <h3>Tools</h3>
              <div className="kv">
                {skills.tools.map((s) => <span key={s}>{s}</span>)}
              </div>
            </div>
            <div className="skill-group">
              <h3>Web Dev</h3>
              <div className="kv">
                {skills.web.map((s) => <span key={s}>{s}</span>)}
              </div>
            </div>
            <div className="skill-group">
              <h3>IT and Systems Fundamentals</h3>
              <div className="kv">
                {skills.it.map((s) => <span key={s}>{s}</span>)}
              </div>
            </div>
            <div className="skill-group">
              <h3>Soft Skills</h3>
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
            <h2>Let's connect</h2>
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
