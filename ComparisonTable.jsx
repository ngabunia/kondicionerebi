// Comparison table with best-in-class cell highlighting
const ComparisonTable = ({ headers, rows }) => (
  <div className="kg-table-wrap">
    <table className="kg-table">
      <thead>
        <tr>{headers.map((h, i) => <th key={i}>{h}</th>)}</tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i}>
            {row.cells.map((c, j) => (
              <td key={j}
                  className={c.best ? "kg-best" : ""}
                  data-label={headers[j]}>
                {c.best && <IconCheck size={14} color="#06B6D4"/>}
                <span className={j === 0 ? "latin kg-product-cell" : (j > 0 && j < row.cells.length - 1 ? "latin" : "")}>
                  {c.v}
                </span>
              </td>
            ))}
            <td className="kg-table-action"><a href={row.href}>ვრცლად <IconChevR size={14}/></a></td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

Object.assign(window, { ComparisonTable });
