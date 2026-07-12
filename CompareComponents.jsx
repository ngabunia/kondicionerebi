// ============================================================
// Comparison page components
// ============================================================

const CompareHero = ({ a, b }) => {
  const imgStyle = (img) => img
    ? { backgroundImage: `url(${img})`, backgroundSize: "cover", backgroundPosition: "center" }
    : null;
  return (
    <section className="kg-compare-hero">
      <div className="kg-compare-product">
        <div className="kg-compare-img" style={imgStyle(a.img)}>
          {!a.img && <span className="kg-placeholder-label">{a.name}</span>}
        </div>
        <h3>{a.name}</h3>
        <div className="kg-price-now latin">{a.price} ₾</div>
      </div>
      <div className="kg-vs-icon">vs</div>
      <div className="kg-compare-product">
        <div className="kg-compare-img" style={imgStyle(b.img)}>
          {!b.img && <span className="kg-placeholder-label">{b.name}</span>}
        </div>
        <h3>{b.name}</h3>
        <div className="kg-price-now latin">{b.price} ₾</div>
      </div>
    </section>
  );
};

const VerdictBlock = ({ lines }) => (
  <section className="kg-verdict-block">
    <h3>მოკლე ვერდიქტი</h3>
    {lines.map((l, i) => (
      <div key={i} className="kg-verdict-line">
        <b className="latin">{l.who}</b> — {l.what}
      </div>
    ))}
  </section>
);

const DimRow = ({ label, sub, a, b }) => (
  <div className="kg-dim">
    <div className="kg-dim-label">
      {label}
      {sub && <span className="small">{sub}</span>}
    </div>
    <div className={"kg-dim-cell" + (a.win ? " win" : "")}>
      {a.win && <div className="kg-dim-winner"><IconCheck size={12}/> უკეთესი</div>}
      <h4>{a.name}</h4>
      <div className="v">{a.v}</div>
      <p>{a.note}</p>
    </div>
    <div className={"kg-dim-cell" + (b.win ? " win" : "")}>
      {b.win && <div className="kg-dim-winner"><IconCheck size={12}/> უკეთესი</div>}
      <h4>{b.name}</h4>
      <div className="v">{b.v}</div>
      <p>{b.note}</p>
    </div>
  </div>
);

Object.assign(window, { CompareHero, VerdictBlock, DimRow });
