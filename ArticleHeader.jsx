// Breadcrumb + H1 + dek + byline + hero image
const Breadcrumb = ({ items }) => (
  <nav className="kg-crumb" aria-label="breadcrumb">
    {items.map((it, i) => (
      <React.Fragment key={i}>
        {i > 0 && <span className="kg-crumb-sep">›</span>}
        {it.href ? <a href={it.href}>{it.label}</a> : <span>{it.label}</span>}
      </React.Fragment>
    ))}
  </nav>
);

const ArticleHeader = ({
  crumbs, title, dek, authorInitials, authorName, authorRole,
  updated, readTime, heroCaption, heroImg,
}) => (
  <header className="kg-article-header">
    <Breadcrumb items={crumbs}/>
    <h1>{title}</h1>
    <p className="kg-dek">{dek}</p>
    <div className="kg-byline">
      <div className="kg-avatar">{authorInitials}</div>
      <div className="kg-byline-text">
        <b>{authorName}</b>
        <span className="muted"> · {authorRole}</span>
      </div>
      <span className="kg-byline-dot">·</span>
      <span className="small muted">განახლდა: {updated}</span>
      <span className="kg-byline-dot">·</span>
      <span className="small muted"><IconClock size={14} color="#6B7280"/> {readTime}</span>
    </div>
    <figure className="kg-hero">
      <div className="kg-hero-img" style={heroImg ? { backgroundImage: `url(${heroImg})`, backgroundSize: "cover", backgroundPosition: "center" } : null}>
        {!heroImg && <span className="kg-placeholder-label">tbilisi rooftop · AC condensers · summer</span>}
      </div>
      <figcaption>{heroCaption}</figcaption>
    </figure>
  </header>
);

Object.assign(window, { Breadcrumb, ArticleHeader });
