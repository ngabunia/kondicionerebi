// Sticky top navigation
const Nav = ({ active }) => {
  const items = [
    { label: "გზამკვლევები",       href: "guides.html" },
    { label: "საუკეთესო არჩევანი", href: "best-of.html" },
    { label: "ჩვენ შესახებ",        href: "#" },
    { label: "კონტაქტი",            href: "#" },
  ];
  return (
    <nav className="kg-nav">
      <a href="index.html" className="kg-logo">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#06B6D4" strokeWidth="2" strokeLinecap="round">
          <line x1="12" y1="3" x2="12" y2="21"/><line x1="3" y1="12" x2="21" y2="12"/>
          <line x1="5.27" y1="5.27" x2="18.73" y2="18.73"/><line x1="18.73" y1="5.27" x2="5.27" y2="18.73"/>
        </svg>
        <span>kondicionerebi<span style={{ color: "var(--color-accent)", opacity: 0.6 }}>.ge</span></span>
      </a>
      <ul className="kg-nav-items">
        {items.map(i => (
          <li key={i.label}><a href={i.href} className={active === i.label ? "active" : ""}>{i.label}</a></li>
        ))}
      </ul>
      <div className="kg-nav-right">
        <a href="btu.html" className="kg-btn-ghost"><IconCalc size={16}/> BTU კალკულატორი</a>
        <button className="kg-icon-btn" aria-label="Search"><IconSearch size={20} color="#6B7280"/></button>
      </div>
    </nav>
  );
};

Object.assign(window, { Nav });
