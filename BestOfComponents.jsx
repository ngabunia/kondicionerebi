// ============================================================
// Best-of list page components
// ============================================================

const RankBadge = ({ num, label, title }) => (
  <div className="kg-rank">
    <div className="kg-rank-num">{num}</div>
    <div>
      <div className="kg-rank-label">{label}</div>
      <h2 style={{ marginTop: 4 }}>{title}</h2>
    </div>
  </div>
);

const ProsCons = ({ pros, cons }) => (
  <div className="kg-pros-cons">
    <div className="kg-pc-col kg-pc-pros">
      <h4>დადებითი</h4>
      <ul>{pros.map((p, i) => <li key={i}>{p}</li>)}</ul>
    </div>
    <div className="kg-pc-col kg-pc-cons">
      <h4>უარყოფითი</h4>
      <ul>{cons.map((c, i) => <li key={i}>{c}</li>)}</ul>
    </div>
  </div>
);

const WhoBlock = ({ kind = "buy", title, children }) => (
  <div className="kg-who">
    <h4>
      {kind === "buy"
        ? <IconCheck size={18} color="#047857"/>
        : <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#B45309" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/></svg>}
      {title}
    </h4>
    <p>{children}</p>
  </div>
);

const QuickSummary = ({ items }) => (
  <section className="kg-quick-summary">
    <h3>ჩვენი არჩევანი — სწრაფი მიმოხილვა</h3>
    <ol>
      {items.map((it, i) => (
        <li key={i}>
          <span className="qs-label">{it.label}</span>
          <span className="qs-name">{it.name}</span>
          <a href={`#${it.anchor}`}>კარგი დეტალები →</a>
        </li>
      ))}
    </ol>
  </section>
);

Object.assign(window, { RankBadge, ProsCons, WhoBlock, QuickSummary });
