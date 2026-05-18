// TL;DR box — the AI-citation magnet
const TLDR = ({ items, heading = "მოკლედ" }) => (
  <aside className="kg-tldr" role="note" aria-label={heading}>
    <div className="kg-tldr-head">
      <IconBolt size={20} color="#06B6D4"/>
      <h3>{heading}</h3>
    </div>
    <ul>
      {items.map((it, i) => (
        <li key={i}><b>{it.label}:</b> <span dangerouslySetInnerHTML={{__html: it.text}}/></li>
      ))}
    </ul>
  </aside>
);

Object.assign(window, { TLDR });
