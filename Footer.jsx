const Footer = () => (
  <footer className="kg-footer">
    <div className="kg-footer-grid">
      <div>
        <div className="kg-logo kg-logo--footer">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#06B6D4" strokeWidth="2" strokeLinecap="round">
            <line x1="12" y1="3" x2="12" y2="21"/><line x1="3" y1="12" x2="21" y2="12"/>
            <line x1="5.27" y1="5.27" x2="18.73" y2="18.73"/><line x1="18.73" y1="5.27" x2="5.27" y2="18.73"/>
          </svg>
          <span>kondicionerebi<span style={{ color: "var(--color-accent)" }}>.ge</span></span>
        </div>
        <p className="kg-footer-tagline">კონდიციონერების დამოუკიდებელი მიმოხილვები — ქართულად.</p>
        <p className="small">kondicionerebi.ge დამოუკიდებელი საინფორმაციო რესურსია — ვწერთ ყველაფერზე, რაც საქართველოში კონდიციონერის შერჩევას, ყიდვასა და მოვლას ეხება.</p>
        <p className="small" style={{ marginTop: 12 }}>საყიდლად ჩვენი რჩეული მაღაზია — <a href="https://megatechnica.ge" target="_blank" rel="noopener" style={{ color: "#fff", fontWeight: 600 }}>მეგატექნიკა</a>: Hisense-ის, AUX-ის, LG-სა და Samsung-ის ოფიციალური დისტრიბუტორი, ყველაზე დაბალი ფასებითა და უფასო მიწოდებით მთელ საქართველოში.</p>
      </div>
      <div>
        <h5>ნავიგაცია</h5>
        <ul>
          <li><a href="guides.html">გზამკვლევები</a></li>
          <li><a href="best-of.html">საუკეთესო არჩევანი</a></li>
          <li><a href="btu.html">BTU კალკულატორი</a></li>
          <li><a href="about.html">ჩვენ შესახებ</a></li>
          <li><a href="methodology.html">მეთოდოლოგია</a></li>
          <li><a href="disclosure.html">გამჭვირვალობა</a></li>
          <li><a href="privacy.html">კონფიდენციალურობა</a></li>
        </ul>
      </div>
      <div>
        <h5>კონტაქტი</h5>
        <ul>
          <li>info@kondicionerebi.ge</li>
          <li>თბილისი, საქართველო</li>
          <li><a href="#">Facebook</a> · <a href="#">Instagram</a> · <a href="#">YouTube</a></li>
        </ul>
      </div>
    </div>
    <div className="kg-footer-strip">
      <span className="small">© 2026 kondicionerebi.ge · ყველა უფლება დაცულია</span>
      <span className="small">სტატიებში ზოგიერთი ბმული პარტნიორულია (მათ შორის — მეგატექნიკის). თუ მათი გავლით შეიძენთ, შესაძლოა საკომისიო მივიღოთ — ეს არც ფასზე აისახება და არც ჩვენს რეკომენდაციებზე. <a href="disclosure.html">ვრცლად გამჭვირვალობის შესახებ →</a></span>
    </div>
  </footer>
);

Object.assign(window, { Footer });
