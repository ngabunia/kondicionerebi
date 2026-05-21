// ============================================================
// Brand page components
// ============================================================

const BrandHero = ({ name, tagline, verdict, logo, logoSrc }) => (
  <section className="kg-brand-hero">
    <div className="kg-brand-logo-box">
      {logoSrc
        ? <img src={logoSrc} alt={name} style={{ maxWidth: "70%", maxHeight: "50%" }}/>
        : (logo || name)}
    </div>
    <div>
      <h1>{name}</h1>
      <p className="kg-brand-hero-tagline">{tagline}</p>
      <div className="kg-brand-verdict">
        <div className="kg-brand-verdict-label">ჩვენი ვერდიქტი</div>
        <p>{verdict}</p>
      </div>
    </div>
  </section>
);

const QuickFacts = ({ facts }) => (
  <div className="kg-quick-facts">
    {facts.map((f, i) => (
      <div key={i} className="kg-fact">
        <div className="kg-fact-label">{f.label}</div>
        <div className="kg-fact-value">{f.value}</div>
      </div>
    ))}
  </div>
);

const BrandCTA = ({ title, dek, href, ctaLabel }) => (
  <div className="kg-brand-cta">
    <div>
      <h3>{title}</h3>
      <p>{dek}</p>
    </div>
    <a href={href} className="kg-btn-primary">{ctaLabel} <IconArrow size={16}/></a>
  </div>
);

Object.assign(window, { BrandHero, QuickFacts, BrandCTA });
