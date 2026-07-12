// Sidebar components: TOC, Methodology, Related-link
const TOC = ({ items, active }) => (
  <nav className="kg-toc" aria-label="ამ სტატიაში">
    <div className="kg-side-label">ამ სტატიაში</div>
    <ul>
      {items.map((it, i) => (
        <li key={i}>
          <a href={`#${it.id}`} className={active === it.id ? "active" : ""}>{it.label}</a>
        </li>
      ))}
    </ul>
  </nav>
);

const Methodology = () => (
  <aside className="kg-method">
    <div className="kg-method-head">
      <IconFlask size={20} color="#6B7280"/>
      <h4>როგორ ვტესტავთ</h4>
    </div>
    <p>ყოველ სეზონზე ათობით მოდელს ვცდით თბილისის რეალურ ბინებში — ვზომავთ გაგრილების სიჩქარეს, ხმაურსა და დენის ხარჯს.</p>
    <a href="methodology.html">სრული მეთოდოლოგია <IconChevR size={12}/></a>
  </aside>
);

const Sidebar = ({ tocItems, active }) => (
  <aside className="kg-sidebar">
    <TOC items={tocItems} active={active}/>
    <Methodology/>
  </aside>
);

Object.assign(window, { TOC, Methodology, Sidebar });
