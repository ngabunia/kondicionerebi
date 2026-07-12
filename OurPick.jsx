// Our Pick recommendation card — hero conversion component
const OurPick = ({ name, reason, specs, price, oldPrice, ctaLabel, ctaHref, alternatives }) => (
  <section className="kg-pick">
    <span className="kg-pick-badge">ჩვენი არჩევანი</span>
    <div className="kg-pick-grid">
      <div className="kg-pick-img">
        <span className="kg-placeholder-label">product · white bg</span>
      </div>
      <div className="kg-pick-body">
        <h3 className="latin">{name}</h3>
        <p className="kg-pick-reason">{reason}</p>
        <ul className="kg-spec-list">
          {specs.map((s, i) => (
            <li key={i}>
              <span className="kg-spec-icon">{s.icon}</span>
              <span className="kg-spec-label">{s.label}</span>
              <span className="kg-spec-value latin">{s.value}</span>
            </li>
          ))}
        </ul>
        <div className="kg-pick-bottom">
          <div className="kg-pick-price">
            <span className="kg-price-now latin">{price} ₾</span>
            {oldPrice && <span className="kg-price-old latin">{oldPrice} ₾</span>}
          </div>
          <a href={ctaHref} className="kg-btn-primary">{ctaLabel} <IconArrow size={16}/></a>
        </div>
        {alternatives && <p className="small muted kg-alts">სად კიდევ იყიდება: {alternatives}</p>}
      </div>
    </div>
  </section>
);

Object.assign(window, { OurPick });
