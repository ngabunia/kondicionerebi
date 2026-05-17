// FAQ accordion — semantic <details> so AI crawlers see content
const FAQ = ({ items }) => (
  <section className="kg-faq" aria-label="ხშირად დასმული კითხვები">
    <h2>ხშირად დასმული კითხვები</h2>
    {items.map((it, i) => (
      <details key={i} open={i === 0}>
        <summary>{it.q}</summary>
        <p>{it.a}</p>
      </details>
    ))}
  </section>
);

Object.assign(window, { FAQ });
