export default function Writings() {
  return (
    <main className="minimal-page">
      <article className="minimal-card">
        <header className="minimal-header">
          <h1>
            <a href="/">Zachary Suh</a>
          </h1>
        </header>
        <p className="quick-links">
          <a
            href="https://www.linkedin.com/in/zacharysuh/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>{" "}
          <a
            href="https://calendly.com/suhzach4/meeting-times"
            target="_blank"
            rel="noreferrer"
          >
            Chat
          </a>{" "}
          <a href="/writings">Writings</a>
        </p>

        <section className="build-section">
          <p className="section-lead">Writings</p>
          <ul>
            <li>
              <a href="/writings/pe-cre-lifecycle">
                The Concept of the PE / CRE PE Acquisition Lifecycle
              </a>
{" "}<span className="writing-date">May 12, 2026</span>
            </li>
          </ul>
        </section>
      </article>
    </main>
  );
}
