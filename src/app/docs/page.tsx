import Link from "next/link";
import { docSections, type DocBlock } from "@/lib/docs";

function DocBlockRenderer({ block }: { block: DocBlock }) {
  switch (block.type) {
    case "p":
      return <p className="doc-p">{block.text}</p>;
    case "ul":
      return (
        <ul className="doc-list">
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol className="doc-list doc-list--ordered">
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      );
    case "code":
      return (
        <div className="doc-code-wrap">
          {block.label && (
            <p className="doc-code-label">{block.label}</p>
          )}
          <pre className="doc-code">
            <code>{block.code}</code>
          </pre>
        </div>
      );
    case "table":
      return (
        <div className="doc-table-wrap">
          <table className="doc-table">
            <thead>
              <tr>
                {block.headers.map((h) => (
                  <th key={h}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, i) => (
                <tr key={i}>
                  {row.map((cell, j) => (
                    <td key={j}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case "callout":
      return (
        <div className={`doc-callout doc-callout--${block.variant}`}>
          {block.text}
        </div>
      );
  }
}

export default function DocsPage() {
  return (
    <section className="py-16 sm:py-24">
      <div className="site-container">
        <div className="max-w-2xl">
          <p className="section-label">Documentation</p>
          <h1 className="font-display mt-3 text-[clamp(1.75rem,4vw,2.5rem)] font-light text-foreground">
            Docs
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            Technical reference for Sherwood Fi — onchain tax lien and tax deed
            markets on Robinhood Chain. Senior claims on real property,
            tokenized. Statutory yield. Onchain settlement.
          </p>
        </div>

        <div className="mt-14 grid gap-12 lg:grid-cols-[220px_1fr] lg:gap-16">
          <nav className="doc-nav lg:sticky lg:top-28 lg:self-start">
            {docSections.map((section) => (
              <div key={section.id} className="doc-nav__group">
                <p className="doc-nav__section">{section.title}</p>
                <ul>
                  {section.articles.map((article) => (
                    <li key={article.id}>
                      <Link
                        href={`#${article.id}`}
                        className="doc-nav__link"
                      >
                        {article.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>

          <div className="doc-content min-w-0">
            {docSections.map((section) => (
              <div key={section.id} className="doc-section">
                <h2 className="doc-section__title">{section.title}</h2>

                {section.articles.map((article) => (
                  <article
                    key={article.id}
                    id={article.id}
                    className="doc-article"
                  >
                    <h3 className="doc-article__title">{article.title}</h3>
                    <div className="doc-article__body">
                      {article.content.map((block, i) => (
                        <DocBlockRenderer key={i} block={block} />
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
