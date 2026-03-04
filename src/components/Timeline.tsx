import type { TimelineItem } from "../data/resumeData";

/**
 * Converts `YYYY-MM` strings into concise, human-readable labels.
 */
function fmtMonth(yyyyMm: string) {
  // yyyy-mm
  const [y, m] = yyyyMm.split("-").map((v) => Number(v));
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  if (!y || !m) return yyyyMm;
  return `${months[m - 1]} ${y}`;
}

/**
 * Normalizes point-in-time and range entries into one display string.
 */
function fmtRange(item: TimelineItem) {
  if (item.date) return fmtMonth(item.date);
  const start = item.start ? fmtMonth(item.start) : "";
  const end = item.end ? (item.end === "Present" ? "Present" : fmtMonth(item.end)) : "";
  if (start && end) return `${start} - ${end}`;
  return start || end || "";
}

interface TimelineProps {
  items: TimelineItem[];
}

/**
 * Chronological timeline used across experience, education, projects, and certifications.
 */
export default function Timeline({ items }: TimelineProps) {
  // Lexical sort works because dates are stored in zero-padded `YYYY-MM` format.
  const toSortKey = (it: TimelineItem) => it.date ?? it.end ?? it.start ?? "0000-01";
  const sorted = [...items].sort((a, b) => toSortKey(b).localeCompare(toSortKey(a)));

  return (
    <div className="timeline" aria-label="Timeline">
      {sorted.map((it, idx) => (
        <div className="tnode" key={`${it.type}-${it.title}-${idx}`}>
          <div className="thead">
            <div>
              <div className="twhere">
                {it.title}
                {it.org ? <span className="muted"> - {it.org}</span> : null}
                {it.location ? <span className="muted"> - {it.location}</span> : null}
              </div>
              <div className="small">{it.type}</div>
            </div>
            <div className="twhen">{fmtRange(it)}</div>
          </div>

          {it.tags?.length ? (
            <div className="kv" aria-label="Tags">
              {it.tags.map((t) => <span key={t}>{t}</span>)}
            </div>
          ) : null}

          {it.bullets?.length ? (
            <ul className="bullets">
              {it.bullets.map((b, i) => <li key={i}>{b}</li>)}
            </ul>
          ) : null}

          {it.links?.length ? (
            <div className="kv" aria-label="Links">
              {it.links.map((l) => (
                <a className="pill" key={l.label} href={l.href} target="_blank" rel="noreferrer">
                  {l.label}
                </a>
              ))}
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
}
