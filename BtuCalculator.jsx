// ============================================================
// BTU Calculator — live-computing form + result card
// ============================================================
const { useState, useMemo, useEffect, useRef } = React;

// -------- Calculation logic --------
// Base: 350 BTU / m²
// Multipliers chain on top of that, then heat-source flat additions.
const BASE_PER_SQM = 350;

const CEILING_MULT = {
  "2.5": 0.93,
  "2.7": 1.00,
  "3.0": 1.11,
  "3.5": 1.30,
};

const SUN_MULT = {
  north:    { mult: 0.90, label: "ჩრდილოეთი",            sub: "ნაკლები პირდაპირი მზე" },
  eastwest: { mult: 1.00, label: "აღმოსავლეთი ან დასავლეთი", sub: "საშუალო ექსპოზიცია" },
  south:    { mult: 1.20, label: "სამხრეთი",              sub: "პირდაპირი მზე დღის უმეტესობას" },
};

const ROOM_TYPE = {
  bedroom: { mult: 0.90, label: "საძინებელი",   icon: "bed" },
  living:  { mult: 1.00, label: "მისაღები",      icon: "sofa" },
  kitchen: { mult: 1.30, label: "სამზარეულო",   icon: "chef" },
  office:  { mult: 1.05, label: "ოფისი",         icon: "monitor" },
};

const HEAT_SOURCES = [
  { id: "computer", label: "კომპიუტერი",         add: 400, icon: "monitor" },
  { id: "tv",       label: "ტელევიზორი",          add: 300, icon: "tv" },
  { id: "kitchen",  label: "სამზარეულო ტექნიკა", add: 600, icon: "chef" },
];

// Each person beyond 2 adds 600 BTU
const PERSON_BASE = 2;
const PERSON_ADD = 600;

function calculate(state) {
  const { area, ceiling, sun, people, roomType, heatSources } = state;

  const base = area * BASE_PER_SQM;
  const ceilMul = CEILING_MULT[ceiling] ?? 1.0;
  const sunMul = SUN_MULT[sun]?.mult ?? 1.0;
  const roomMul = ROOM_TYPE[roomType]?.mult ?? 1.0;
  const peopleAdd = Math.max(0, people - PERSON_BASE) * PERSON_ADD;
  const heatAdd = heatSources.reduce((s, id) => {
    const h = HEAT_SOURCES.find(x => x.id === id);
    return s + (h?.add ?? 0);
  }, 0);

  const raw = base * ceilMul * sunMul * roomMul + peopleAdd + heatAdd;
  // Round to nearest 500 for display
  const rounded = Math.round(raw / 500) * 500;

  return {
    rounded,
    breakdown: {
      base: Math.round(base),
      ceilingMult: ceilMul,
      sunMult: sunMul,
      roomMult: roomMul,
      peopleAdd,
      heatAdd,
    },
  };
}

// Snap to nearest standard AC capacity
const STANDARD_BTU = [5000, 7000, 9000, 12000, 18000, 24000];
function pickClass(btu) {
  // Round up to next standard size
  return STANDARD_BTU.find(s => s >= btu) ?? STANDARD_BTU[STANDARD_BTU.length - 1];
}

// -------- Tiny icon helpers for segmented controls --------
const SegIcon = ({ name, size = 20 }) => {
  const common = { width: size, height: size, viewBox: "0 0 24 24", fill: "none",
                   stroke: "currentColor", strokeWidth: 1.6,
                   strokeLinecap: "round", strokeLinejoin: "round" };
  switch (name) {
    case "north":
      return <svg {...common}><path d="M12 4v16"/><path d="m7 9 5-5 5 5"/></svg>;
    case "eastwest":
      return <svg {...common}><path d="M4 12h16"/><path d="m9 7-5 5 5 5"/><path d="m15 7 5 5-5 5"/></svg>;
    case "south":
      return <svg {...common}><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>;
    case "bed":
      return <svg {...common}><path d="M2 4v16"/><path d="M2 8h18a2 2 0 0 1 2 2v10"/><path d="M2 17h20"/><path d="M6 8v9"/></svg>;
    case "sofa":
      return <svg {...common}><path d="M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3"/><path d="M2 11v5a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v2H6v-2a2 2 0 0 0-4 0Z"/><path d="M4 18v2"/><path d="M20 18v2"/></svg>;
    case "chef":
      return <svg {...common}><path d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z"/><line x1="6" y1="17" x2="18" y2="17"/></svg>;
    case "monitor":
      return <svg {...common}><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>;
    case "tv":
      return <svg {...common}><rect x="2" y="7" width="20" height="15" rx="2" ry="2"/><polyline points="17 2 12 7 7 2"/></svg>;
    case "save":
      return <svg {...common}><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></svg>;
    default: return null;
  }
}

// -------- Field primitives --------
const NumberField = ({ value, onChange, min = 5, max = 200, step = 1, unit }) => (
  <div className="kg-num-row">
    <input type="number" value={value} min={min} max={max} step={step}
           onChange={e => onChange(Math.max(min, Math.min(max, Number(e.target.value) || min)))}/>
    <span className="kg-num-row-unit">{unit}</span>
    <div className="kg-num-stepper">
      <button type="button" onClick={() => onChange(Math.min(max, value + step))}>+</button>
      <button type="button" onClick={() => onChange(Math.max(min, value - step))}>−</button>
    </div>
  </div>
);

const Segmented = ({ options, value, onChange, cols = 3 }) => (
  <div className={"kg-segmented kg-segmented-" + cols}>
    {options.map(o => (
      <button key={o.id} type="button"
              className={"kg-seg-option" + (value === o.id ? " active" : "")}
              onClick={() => onChange(o.id)}>
        {o.icon && <span className="kg-seg-icon"><SegIcon name={o.icon}/></span>}
        <span className="kg-seg-label">
          {o.label}
          {o.sub && <span style={{ display: "block", fontSize: 11, color: "var(--color-text-muted)", fontWeight: 400, marginTop: 2 }}>{o.sub}</span>}
        </span>
      </button>
    ))}
  </div>
);

const ChecksGrid = ({ options, value, onChange }) => (
  <div className="kg-checks">
    {options.map(o => {
      const on = value.includes(o.id);
      return (
        <label key={o.id} className={"kg-check" + (on ? " active" : "")}>
          <input type="checkbox" checked={on}
                 onChange={e => onChange(e.target.checked
                   ? [...value, o.id]
                   : value.filter(x => x !== o.id))}/>
          <span className="kg-check-icon"><SegIcon name={o.icon}/></span>
          <span className="kg-check-label">{o.label}</span>
        </label>
      );
    })}
  </div>
);

const PeopleSlider = ({ value, onChange }) => (
  <>
    <div className="kg-slider-wrap">
      <input type="range" className="kg-slider"
             min="1" max="10" step="1" value={value}
             onChange={e => onChange(Number(e.target.value))}/>
      <span className="kg-slider-value">{value}</span>
    </div>
    <div className="kg-slider-ticks">
      <span>1</span><span>2</span><span>3</span><span>4</span><span>5</span>
      <span>6</span><span>7</span><span>8</span><span>9</span><span>10</span>
    </div>
  </>
);

// -------- Recommended models per BTU class --------
const RECS_BY_BTU = {
  5000:  [
    { name: "Hisense AS-05HR4", reason: "მცირე ოთახისთვის — საუკეთესო ფასი.",       price: "399",   href: "#" },
    { name: "AUX ASW-H05A4",        reason: "ბიუჯეტური ალტერნატივა, საიმედო.",         price: "349",   href: "#" },
    { name: "Samsung WindFree 5K", reason: "უხმაუროდ მუშაობს, A++ ენერგო-კლასი.",     price: "749",   href: "#" },
  ],
  7000:  [
    { name: "Hisense AS-07UR4", reason: "კატეგორიის საუკეთესო ფასი/ხარისხი.",       price: "479",   href: "#" },
    { name: "AUX ASW-H07A4",        reason: "ბიუჯეტური — გასაქირავებელი ბინისთვის.",   price: "419",   href: "#" },
    { name: "LG S07EQ",          reason: "WiFi და ქართული აპლიკაცია.",                price: "829",   href: "#" },
  ],
  9000:  [
    { name: "Hisense AS-09HR4", reason: "საუკეთესო საერთო — სიჩუმე და გარანტია.",     price: "699",   href: "guide.html" },
    { name: "AUX ASW-H09A4",        reason: "150 ლარით იაფი — ბიუჯეტური არჩევანი.",      price: "549",   href: "guide.html" },
    { name: "Samsung WindFree 9K", reason: "ენერგო-ეფექტური, თითქმის უხმაუროდ.",       price: "1 199", href: "guide.html" },
  ],
  12000: [
    { name: "Hisense AS-12HR4", reason: "სამხრეთის ოთახისთვის ან ჭერით 3 მ+.",       price: "879",   href: "#" },
    { name: "Daikin Sensira 12K",reason: "5 წლის გარანტია, იაპონური ხარისხი.",        price: "1 449", href: "#" },
    { name: "Samsung WindFree 12K", reason: "30-35 კვ.მ ფართობისთვის — პრემიუმი.",     price: "1 599", href: "#" },
  ],
  18000: [
    { name: "Hisense AS-18FR4", reason: "დიდი ფართობებისთვის, 35–50 კვ.მ-მდე.",      price: "1 049", href: "#" },
    { name: "AUX ASW-H18A4",        reason: "ეკონომიური ვარიანტი მთავარ მისაღებში.",     price: "899",   href: "#" },
    { name: "LG S18EQ",          reason: "ენერგო-კლასი A+++, ცხელი თვეებისთვის.",      price: "1 899", href: "#" },
  ],
  24000: [
    { name: "Daikin FTXM 24K",   reason: "კომერციული ფართობებისთვის.",                price: "2 999", href: "#" },
    { name: "Mitsubishi MSZ-EF24", reason: "პრემიუმი — გრძელვადიანი ინვესტიცია.",     price: "3 499", href: "#" },
    { name: "Samsung WindFree 24K", reason: "მაღალი ჭერის სივრცეებისთვის.",            price: "2 749", href: "#" },
  ],
};

// -------- Main calculator --------
const BtuCalculator = () => {
  const [area, setArea] = useState(25);
  const [ceiling, setCeiling] = useState("2.7");
  const [sun, setSun] = useState("eastwest");
  const [people, setPeople] = useState(2);
  const [roomType, setRoomType] = useState("living");
  const [heatSources, setHeatSources] = useState(["tv"]);
  const [email, setEmail] = useState("");
  const [saved, setSaved] = useState(false);
  const [bumped, setBumped] = useState(false);

  const result = useMemo(
    () => calculate({ area, ceiling, sun, people, roomType, heatSources }),
    [area, ceiling, sun, people, roomType, heatSources],
  );

  const btuClass = pickClass(result.rounded);
  const recs = RECS_BY_BTU[btuClass] ?? RECS_BY_BTU[9000];

  // Tiny "pop" animation on the number when value changes
  const prev = useRef(result.rounded);
  useEffect(() => {
    if (prev.current !== result.rounded) {
      setBumped(true);
      const t = setTimeout(() => setBumped(false), 220);
      prev.current = result.rounded;
      return () => clearTimeout(t);
    }
  }, [result.rounded]);

  const formatBTU = n => n.toLocaleString("en-US").replace(/,/g, " ");

  return (
    <>
      <header className="kg-calc-header">
        <div className="kg-page-inner">
          <nav className="kg-crumb" aria-label="breadcrumb">
            <a href="index.html">მთავარი</a>
            <span className="kg-crumb-sep">›</span>
            <span>BTU კალკულატორი</span>
          </nav>
          <span className="kg-calc-eyebrow"><IconCalc size={14}/> ინტერაქტიული ხელსაწყო</span>
          <h1>რა BTU მჭირდება?</h1>
          <p>შეიყვანე ოთახის სპეციფიკაცია — წამში გაიგებ კონდიციონერის ზუსტ სიმძლავრეს და ნახავ რეკომენდირებულ მოდელებს.</p>
        </div>
      </header>

      <div className="kg-calc-layout">
        {/* --------- Form (left) --------- */}
        <form className="kg-calc-form" onSubmit={e => e.preventDefault()}>
          <h2>ოთახის სპეციფიკაცია</h2>

          <div className="kg-field">
            <div className="kg-field-label">
              <span className="kg-field-title">ოთახის ფართობი</span>
              <span className="kg-field-hint">კვ.მ</span>
            </div>
            <NumberField value={area} onChange={setArea} min={5} max={200} step={1} unit="კვ.მ"/>
          </div>

          <div className="kg-field">
            <div className="kg-field-label">
              <span className="kg-field-title">ჭერის სიმაღლე</span>
              <span className="kg-field-hint">სტანდარტი 2.7 მ</span>
            </div>
            <select className="kg-select" value={ceiling} onChange={e => setCeiling(e.target.value)}>
              <option value="2.5">2.5 მ — დაბალი</option>
              <option value="2.7">2.7 მ — სტანდარტული</option>
              <option value="3.0">3.0 მ — მაღალი</option>
              <option value="3.5">3.5 მ+ — ძალიან მაღალი</option>
            </select>
          </div>

          <div className="kg-field">
            <div className="kg-field-label">
              <span className="kg-field-title">მზის ექსპოზიცია</span>
              <span className="kg-field-hint">სად იყურება ფანჯრები</span>
            </div>
            <Segmented
              cols={3}
              value={sun}
              onChange={setSun}
              options={[
                { id: "north",    label: "ჩრდილოეთი",    icon: "north" },
                { id: "eastwest", label: "აღმოს. / დას.", icon: "eastwest" },
                { id: "south",    label: "სამხრეთი",      icon: "south" },
              ]}
            />
          </div>

          <div className="kg-field">
            <div className="kg-field-label">
              <span className="kg-field-title">ადამიანების რაოდენობა</span>
              <span className="kg-field-hint">ხშირად ოთახში</span>
            </div>
            <PeopleSlider value={people} onChange={setPeople}/>
          </div>

          <div className="kg-field">
            <div className="kg-field-label">
              <span className="kg-field-title">ოთახის ტიპი</span>
            </div>
            <Segmented
              cols={4}
              value={roomType}
              onChange={setRoomType}
              options={[
                { id: "bedroom", label: "საძინებელი", icon: "bed" },
                { id: "living",  label: "მისაღები",    icon: "sofa" },
                { id: "kitchen", label: "სამზარეულო", icon: "chef" },
                { id: "office",  label: "ოფისი",        icon: "monitor" },
              ]}
            />
          </div>

          <div className="kg-field">
            <div className="kg-field-label">
              <span className="kg-field-title">დამატებითი თბური წყაროები</span>
              <span className="kg-field-hint">აარჩიე ყველა</span>
            </div>
            <ChecksGrid
              options={HEAT_SOURCES}
              value={heatSources}
              onChange={setHeatSources}
            />
          </div>
        </form>

        {/* --------- Live result (right, sticky) --------- */}
        <aside className="kg-result">
          <span className="kg-result-label"><IconBolt size={14} color="#06B6D4"/> ცოცხალი გათვლა</span>
          <div className="kg-result-headline">თქვენ გჭირდებათ კონდიციონერი:</div>
          <div className={"kg-result-number" + (bumped ? " bumped" : "")}>
            {formatBTU(result.rounded)}
            <span className="unit">BTU</span>
          </div>

          <div className="kg-result-class">
            ეს შეესაბამება <b>{formatBTU(btuClass)} BTU</b> კატეგორიის კონდიციონერს — ბაზრის სტანდარტი {btuClass <= 9000 ? "მცირე-საშუალო" : btuClass <= 18000 ? "საშუალო-დიდი" : "დიდი"} ფართობებისთვის.
          </div>

          <div className="kg-result-breakdown">
            <h4>როგორ გავთვალეთ</h4>
            <div className="kg-breakdown-row">
              <span>{area} კვ.მ × 350 BTU</span>
              <span className="v">{formatBTU(result.breakdown.base)}</span>
            </div>
            <div className="kg-breakdown-row">
              <span>ჭერი {ceiling} მ</span>
              <span className="v">× {result.breakdown.ceilingMult.toFixed(2)}</span>
            </div>
            <div className="kg-breakdown-row">
              <span>{SUN_MULT[sun].label}</span>
              <span className="v">× {result.breakdown.sunMult.toFixed(2)}</span>
            </div>
            <div className="kg-breakdown-row">
              <span>{ROOM_TYPE[roomType].label}</span>
              <span className="v">× {result.breakdown.roomMult.toFixed(2)}</span>
            </div>
            {result.breakdown.peopleAdd > 0 && (
              <div className="kg-breakdown-row">
                <span>+{people - PERSON_BASE} ადამიანი</span>
                <span className="v">+{formatBTU(result.breakdown.peopleAdd)}</span>
              </div>
            )}
            {result.breakdown.heatAdd > 0 && (
              <div className="kg-breakdown-row">
                <span>თბური წყაროები</span>
                <span className="v">+{formatBTU(result.breakdown.heatAdd)}</span>
              </div>
            )}
            <div className="kg-breakdown-row total">
              <span>სულ</span>
              <span className="v">{formatBTU(result.rounded)} BTU</span>
            </div>
          </div>

          <div className="kg-result-actions">
            <a href="#recs" className="kg-btn-primary">ნახე რეკომენდაციები <IconArrow size={14}/></a>
            <button className="kg-result-save" type="button"
                    onClick={() => setSaved("show")}>
              <SegIcon name="save" size={14}/> შენახვა
            </button>
          </div>

          {saved && (
            <>
              <div className="kg-save-form">
                <input type="email" placeholder="თქვენი ელ.ფოსტა"
                       value={email} onChange={e => setEmail(e.target.value)}/>
                <button type="button"
                        onClick={() => { if (email.includes("@")) setSaved("done"); }}>
                  გაგზავნა
                </button>
              </div>
              {saved === "done" && (
                <div className="kg-save-confirmation">
                  <IconCheck size={14} color="#06B6D4"/> შედეგი გაგზავნილია — შეამოწმეთ ფოსტა
                </div>
              )}
            </>
          )}
        </aside>
      </div>

      {/* --------- Recommended models below --------- */}
      <section id="recs" className="kg-calc-recs">
        <SectionHead
          title={`რეკომენდირებული ${formatBTU(btuClass)} BTU მოდელები`}
          link={{ label: "ნახე ყველა გზამკვლევი", href: "guides.html" }}
        />
        <TopPicksRow
          picks={recs.map((r, i) => ({
            rank: i === 0 ? "საუკეთესო არჩევანი" : i === 1 ? "ბიუჯეტური" : "პრემიუმი",
            ...r,
          }))}
        />
        <div className="kg-calc-cta-strip">
          <p>ნახე ყველა <b>{formatBTU(btuClass)} BTU</b> კონდიციონერი მეგატექნიკაში — Hisense, AUX, LG, Samsung-ის ოფიციალური დისტრიბუტორი. ყველაზე იაფი ფასი, საუკეთესო გარანტია, მაღაზიები მთელ საქართველოში.</p>
          <a href="https://megatechnica.ge" target="_blank" rel="noopener" className="kg-btn-primary">გადადი megatechnica.ge-ზე <IconArrow size={14}/></a>
        </div>
      </section>
    </>
  );
};

Object.assign(window, { BtuCalculator });
