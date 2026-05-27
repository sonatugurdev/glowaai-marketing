export function SiteFooter() {
  return (
    <footer>
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="/" aria-label="Glowa AI">
              <svg width="136" height="48" viewBox="0 0 148 52" fill="none">
                <g transform="translate(0,6)">
                  <path d="M18 2 C18 2 6 8 6 20 C6 29 13 36 20 36 C20 36 20 24 30 16 C22 20 20 28 20 28 C20 28 26 14 18 2Z" fill="#22D3EE"/>
                  <text x="40" y="30" fontFamily="DM Sans, sans-serif" fontSize="22" fontWeight="500" fill="white" letterSpacing="-0.5">Glowa</text>
                  <rect x="108" y="18" width="24" height="15" rx="4" fill="rgba(255,255,255,0.15)"/>
                  <text x="120" y="29.5" fontFamily="DM Sans, sans-serif" fontSize="9" fontWeight="700" fill="white" textAnchor="middle" letterSpacing="0.5">AI</text>
                </g>
              </svg>
            </a>
            <p>AI-powered skin intelligence for MedSpas — helping aesthetic practices sell more, effortlessly.</p>
          </div>
          <div className="footer-col">
            <h4>Product</h4>
            <ul>
              <li><a href="#features">Features</a></li>
              <li><a href="#results-section">Results</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><a href="#">About</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Press</a></li>
              <li><a href="mailto:hello@glowa.ai">Contact</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Legal</h4>
            <ul>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">HIPAA Compliance</a></li>
              <li><a href="#">Security</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 Glowa AI, Inc. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">HIPAA Compliance</a>
            <a href="#">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
