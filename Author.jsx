// Extended author byline at article bottom + related article cards
const AuthorBio = ({ initials, name, role, bio }) => (
  <section className="kg-author">
    <div className="kg-avatar-lg">{initials}</div>
    <div className="kg-author-body">
      <h4>{name}</h4>
      <div className="small muted">{role}</div>
      <p>{bio}</p>
      <a href="#" className="kg-link">ჩემი სხვა სტატიები <IconChevR size={12}/></a>
    </div>
  </section>
);

const RelatedCard = ({ tag, title, dek, label }) => (
  <a href="#" className="kg-related-card">
    <div className="kg-related-img">
      <span className="kg-placeholder-label">{label}</span>
    </div>
    <div className="kg-related-body">
      <span className="kg-pill-sm">{tag}</span>
      <h4>{title}</h4>
      <p>{dek}</p>
    </div>
  </a>
);

const RelatedGrid = ({ items }) => (
  <section className="kg-related-grid">
    <h2>დაკავშირებული სტატიები</h2>
    <div className="kg-related-row">
      {items.map((it, i) => <RelatedCard key={i} {...it}/>)}
    </div>
  </section>
);

Object.assign(window, { AuthorBio, RelatedCard, RelatedGrid });
