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
        <p className="kg-footer-tagline">დამოუკიდებელი მიმოხილვები კონდიციონერებზე — ქართულად.</p>
        <p className="small">kondicionerebi.ge არის <b style={{color:"#fff"}}>მეგატექნიკის</b> გუნდის სპეციალიზებული საინფორმაციო რესურსი.</p>
      </div>
      <div>
        <h5>ნავიგაცია</h5>
        <ul>
          <li><a href="#">გზამკვლევები</a></li>
          <li><a href="#">ბრენდები</a></li>
          <li><a href="#">BTU კალკულატორი</a></li>
          <li><a href="#">ჩვენ შესახებ</a></li>
          <li><a href="#">მეთოდოლოგია</a></li>
        </ul>
      </div>
      <div>
        <h5>კონტაქტი</h5>
        <ul>
          <li>info@kondicionerebi.ge</li>
          <li>წერეთლის გამზ. 140, თბილისი</li>
          <li><a href="#">Facebook</a> · <a href="#">Instagram</a> · <a href="#">YouTube</a></li>
        </ul>
      </div>
    </div>
    <div className="kg-footer-strip">
      <span className="small">© 2026 kondicionerebi.ge · ყველა უფლება დაცულია</span>
      <span className="small">სტატიებში არსებული ბმულები შესაძლოა აფილირებული იყოს მეგატექნიკასთან. <a href="#">სრული გამჭვირვალობა →</a></span>
    </div>
  </footer>
);

Object.assign(window, { Footer });
