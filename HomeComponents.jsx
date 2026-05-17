// ============================================================
// Homepage components
// ============================================================

const HeroSection = ({ feature, side }) => (
  <section className="kg-hero-section">
    <a href={feature.href} className="kg-hero-feature">
      <div className="kg-hero-feature-img">
        <span className="kg-placeholder-label">{feature.imgLabel}</span>
      </div>
      <div className="kg-hero-feature-body">
        <span className="kg-pill-sm">{feature.tag}</span>
        <h2 style={{ marginTop: 12 }}>{feature.title}</h2>
        <p>{feature.dek}</p>
        <span className="kg-hero-cta">წაიკითხე <IconArrow size={14}/></span>
      </div>
    </a>
    <div className="kg-hero-side">
      {side.map((s, i) => (
        <a key={i} href={s.href} className="kg-hero-side-card">
          <div className="kg-hero-side-img"></div>
          <div className="kg-hero-side-body">
            <span className="kg-pill-sm" style={{ alignSelf: "flex-start" }}>{s.tag}</span>
            <h4>{s.title}</h4>
            <span className="small">{s.meta}</span>
          </div>
        </a>
      ))}
    </div>
  </section>
);

const SectionHead = ({ title, link }) => (
  <div className="kg-section-head">
    <h2>{title}</h2>
    {link && <a href={link.href} className="kg-section-link">{link.label} <IconChevR size={14}/></a>}
  </div>
);

const TopPicksRow = ({ picks }) => (
  <div className="kg-picks-row">
    {picks.map((p, i) => (
      <a key={i} href={p.href} className="kg-pick-card">
        <div className="kg-pick-card-rank">{p.rank}</div>
        <div className="kg-pick-card-img">
          <span className="kg-placeholder-label">product · white bg</span>
        </div>
        <div className="kg-pick-card-body">
          <h3 className="latin">{p.name}</h3>
          <p className="kg-pick-card-reason">{p.reason}</p>
          <div className="kg-pick-card-row">
            <span className="kg-pick-card-price">{p.price} ლარი</span>
            <span className="kg-pick-card-link">ნახე მიმოხილვა →</span>
          </div>
        </div>
      </a>
    ))}
  </div>
);

const BtuStrip = () => (
  <section className="kg-section">
    <div className="kg-btu-strip">
      <div className="kg-btu-icon">
        <IconCalc size={32} color="#06B6D4"/>
      </div>
      <div>
        <h2>რა BTU მჭირდება?</h2>
        <p>შეიყვანე ოთახის ფართობი და ჭერის სიმაღლე — წამში მიიღებ ზუსტ რეკომენდაციას.</p>
      </div>
      <a href="btu.html" className="kg-btn-primary">გახსენი კალკულატორი <IconArrow size={16}/></a>
    </div>
  </section>
);

const GuideGrid = ({ items }) => (
  <div className="kg-guide-grid">
    {items.map((it, i) => (
      <a key={i} href={it.href} className="kg-related-card">
        <div className="kg-related-img">
          <span className="kg-placeholder-label">{it.imgLabel}</span>
        </div>
        <div className="kg-related-body">
          <span className="kg-pill-sm">{it.tag}</span>
          <h4>{it.title}</h4>
          <p>{it.dek}</p>
          <div className="kg-guide-card-byline">
            <div className="kg-guide-card-avatar">{it.initials}</div>
            <span>{it.author}</span>
            <span>·</span>
            <span>{it.date}</span>
          </div>
        </div>
      </a>
    ))}
  </div>
);

const BrandsGrid = ({ brands }) => (
  <div className="kg-brands-grid">
    {brands.map((b, i) => (
      <a key={i} href={b.href} className="kg-brand-tile">{b.name}</a>
    ))}
  </div>
);

const TeamBlock = () => (
  <section className="kg-section">
    <div className="kg-team-block">
      <div className="kg-team-img">
        <span className="kg-placeholder-label">team portrait · 4 people · daylight</span>
      </div>
      <div>
        <h2>ვინ ვართ ჩვენ</h2>
        <p>ჩვენ ვართ ოთხი ადამიანის დამოუკიდებელი გუნდი — ინჟინრები და მონტაჟის სპეციალისტები. ერთად ჩვენ გვაქვს 20+ წლის გამოცდილება კონდიციონერების მონტაჟის, სერვისისა და ანალიზის სფეროში.</p>
        <p>ყოველ წელს ვტესტავთ 12–18 ახალ მოდელს რეალურ ბინებში — ეს არ არის ლაბორატორიული მონაცემები, ეს არის გადანერგვის გამოცდილება ცოცხალ თბილისში.</p>
        <a href="methodology.html" className="kg-team-link">სრული მეთოდოლოგია <IconChevR size={12}/></a>
      </div>
    </div>
  </section>
);

const HomeFAQ = ({ items }) => (
  <section className="kg-section">
    <SectionHead title="ხშირი კითხვები"/>
    <div className="kg-article" style={{ padding: 0 }}>
      <FAQ items={items}/>
    </div>
  </section>
);

Object.assign(window, {
  HeroSection, SectionHead, TopPicksRow, BtuStrip,
  GuideGrid, BrandsGrid, TeamBlock, HomeFAQ,
});
