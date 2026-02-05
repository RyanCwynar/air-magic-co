export default function Home() {
  return (
    <>
      {/* Demo Banner */}
      <div className="demo-banner">
        ✨ This is a free redesign mockup created by Byldr — <a href="https://ryancwynar.github.io">Learn More</a>
      </div>

      {/* Navigation */}
      <nav>
        <div className="nav-container">
          <a href="#" className="logo">❄️ Air Magic</a>
          <div className="nav-links">
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#areas">Service Areas</a>
            <a href="#contact">Contact</a>
          </div>
          <a href="tel:9544914557" className="nav-cta">
            📞 (954) 491-4557
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>South Florida's Trusted AC Experts Since 1969</h1>
          <p>Over 55 years of keeping Fort Lauderdale, Oakland Park & Broward County cool and comfortable. Family-owned, fully licensed, and always here when you need us.</p>
          <div className="hero-buttons">
            <a href="tel:9544914557" className="btn-primary">
              Call Now: (954) 491-4557
            </a>
            <a href="#services" className="btn-secondary">
              View Services
            </a>
          </div>
        </div>
        <div className="hero-trust">
          <div className="trust-item">
            <span className="trust-icon">⭐</span>
            <span>5-Star Rated</span>
          </div>
          <div className="trust-item">
            <span className="trust-icon">🛡️</span>
            <span>Licensed & Insured</span>
          </div>
          <div className="trust-item">
            <span className="trust-icon">⚡</span>
            <span>Same-Day Service</span>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="section-container">
          <h2>Our HVAC Services</h2>
          <p className="section-subtitle">Complete heating and cooling solutions for your home or business</p>
          
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">🔧</div>
              <h3>AC Repair</h3>
              <p>Fast, reliable repairs for all makes and models. Our well-stocked trucks mean most repairs are completed in a single visit.</p>
              <ul>
                <li>Emergency service available</li>
                <li>Freon leak detection</li>
                <li>Compressor replacement</li>
                <li>All brands serviced</li>
              </ul>
            </div>
            
            <div className="service-card">
              <div className="service-icon">❄️</div>
              <h3>AC Installation</h3>
              <p>Expert installation of new air conditioning systems. We help you choose the right size and efficiency for your needs.</p>
              <ul>
                <li>Free estimates</li>
                <li>Energy-efficient units</li>
                <li>Ductless mini-splits</li>
                <li>Complete system replacement</li>
              </ul>
            </div>
            
            <div className="service-card">
              <div className="service-icon">🛠️</div>
              <h3>Maintenance</h3>
              <p>Keep your system running efficiently with regular tune-ups. Prevent costly breakdowns and extend equipment life.</p>
              <ul>
                <li>$79 tune-up special</li>
                <li>Annual maintenance plans</li>
                <li>Filter reminders</li>
                <li>Priority scheduling</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="section-container">
          <div className="about-content">
            <h2>55+ Years of Trusted Service</h2>
            <p>Since 1969, Air Magic Company has been the HVAC company Fort Lauderdale trusts. We're not a big national chain – we're your neighbors, and we take pride in building lasting relationships with the families we serve.</p>
            <p>Our technicians are trained on all major brands including Carrier, Trane, Lennox, Rheem, Goodman, and more. We invest in the training and equipment necessary to protect your home and family.</p>
            <div className="about-stats">
              <div className="stat">
                <span className="stat-number">55+</span>
                <span className="stat-label">Years in Business</span>
              </div>
              <div className="stat">
                <span className="stat-number">50k+</span>
                <span className="stat-label">Homes Serviced</span>
              </div>
              <div className="stat">
                <span className="stat-number">24/7</span>
                <span className="stat-label">Emergency Service</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Special Offers */}
      <section className="offers">
        <div className="section-container">
          <h2>Current Specials</h2>
          <div className="offers-grid">
            <div className="offer-card">
              <div className="offer-badge">New Customers</div>
              <h3>$79 AC Tune-Up</h3>
              <p>Complete system inspection and maintenance. Keep your AC running efficiently all season long.</p>
              <small>Not valid with other offers. New customers only.</small>
            </div>
            <div className="offer-card">
              <div className="offer-badge">Save Big</div>
              <h3>$200 Off New System</h3>
              <p>Upgrade to a new, energy-efficient air conditioning system and start saving on your energy bills.</p>
              <small>Not valid with other offers. Limited time.</small>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section id="areas" className="areas">
        <div className="section-container">
          <h2>Areas We Serve</h2>
          <p className="section-subtitle">Proudly serving Broward County and surrounding areas</p>
          <div className="areas-grid">
            <span>Fort Lauderdale</span>
            <span>Oakland Park</span>
            <span>Pompano Beach</span>
            <span>Coral Springs</span>
            <span>Boca Raton</span>
            <span>Deerfield Beach</span>
            <span>Coconut Creek</span>
            <span>Lauderhill</span>
            <span>Plantation</span>
            <span>Sunrise</span>
            <span>Tamarac</span>
            <span>Margate</span>
            <span>Wilton Manors</span>
            <span>Lighthouse Point</span>
            <span>Davie</span>
            <span>Weston</span>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="section-container">
          <h2>Get in Touch</h2>
          <p className="section-subtitle">Ready to schedule service? We're here to help!</p>
          
          <div className="contact-grid">
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <div>
                  <strong>Location</strong>
                  <p>Oakland Park, FL<br/>Serving all of Broward County</p>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <div>
                  <strong>Phone</strong>
                  <p><a href="tel:9544914557">(954) 491-4557</a></p>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">🕐</span>
                <div>
                  <strong>Hours</strong>
                  <p>24/7 Emergency Service<br/>Regular: Mon-Sat 7AM-7PM</p>
                </div>
              </div>
            </div>
            
            <div className="contact-cta">
              <h3>Need Service Now?</h3>
              <p>Our team is standing by to help with all your heating and cooling needs.</p>
              <a href="tel:9544914557" className="btn-primary btn-large">
                📞 Call (954) 491-4557
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="footer-container">
          <div className="footer-brand">
            <span className="logo">❄️ Air Magic Company</span>
            <p>Keeping South Florida comfortable since 1969</p>
          </div>
          <div className="footer-links">
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#areas">Service Areas</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="footer-contact">
            <a href="tel:9544914557">(954) 491-4557</a>
            <span>Oakland Park, FL</span>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 Air Magic Company. All rights reserved. Licensed & Insured.</p>
        </div>
      </footer>

      {/* Tracking pixel */}
      <script dangerouslySetInnerHTML={{
        __html: `
          (function() {
            var params = new URLSearchParams(window.location.search);
            var ref = params.get('ref');
            if (ref) {
              var img = new Image();
              img.src = 'https://convex-actions.byldr.co/track?ref=' + encodeURIComponent(ref) + '&url=' + encodeURIComponent(window.location.href);
            }
          })();
        `
      }} />

      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        :root {
          --primary: #0066cc;
          --primary-dark: #004d99;
          --accent: #00b4d8;
          --text: #1a1a2e;
          --text-light: #666;
          --bg: #ffffff;
          --bg-alt: #f8fafc;
          --border: #e2e8f0;
        }

        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          color: var(--text);
          line-height: 1.6;
        }

        /* Demo Banner */
        .demo-banner {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          background: #f59e0b;
          color: white;
          text-align: center;
          padding: 0.5rem 1rem;
          font-size: 0.85rem;
          font-weight: 500;
          z-index: 1001;
        }
        .demo-banner a { color: white; text-decoration: underline; }

        /* Navigation */
        nav {
          position: fixed;
          top: 36px;
          left: 0;
          right: 0;
          background: white;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
          z-index: 1000;
          padding: 1rem 2rem;
        }

        .nav-container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--primary);
          text-decoration: none;
        }

        .nav-links {
          display: flex;
          gap: 2rem;
        }

        .nav-links a {
          color: var(--text);
          text-decoration: none;
          font-weight: 500;
          transition: color 0.3s;
        }

        .nav-links a:hover {
          color: var(--primary);
        }

        .nav-cta {
          background: var(--primary);
          color: white !important;
          padding: 0.75rem 1.5rem;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 600;
          transition: background 0.3s;
        }

        .nav-cta:hover {
          background: var(--primary-dark);
        }

        /* Hero */
        .hero {
          padding: 10rem 2rem 4rem;
          background: linear-gradient(135deg, #0066cc 0%, #00b4d8 100%);
          color: white;
          text-align: center;
        }

        .hero-content {
          max-width: 800px;
          margin: 0 auto;
        }

        .hero h1 {
          font-size: 3rem;
          margin-bottom: 1.5rem;
          line-height: 1.2;
        }

        .hero p {
          font-size: 1.25rem;
          opacity: 0.95;
          margin-bottom: 2rem;
        }

        .hero-buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .btn-primary {
          background: white;
          color: var(--primary);
          padding: 1rem 2rem;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 600;
          font-size: 1.1rem;
          transition: transform 0.3s, box-shadow 0.3s;
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.2);
        }

        .btn-secondary {
          background: transparent;
          color: white;
          padding: 1rem 2rem;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 600;
          font-size: 1.1rem;
          border: 2px solid white;
          transition: background 0.3s;
        }

        .btn-secondary:hover {
          background: rgba(255,255,255,0.1);
        }

        .btn-large {
          padding: 1.25rem 2.5rem;
          font-size: 1.2rem;
        }

        .hero-trust {
          display: flex;
          justify-content: center;
          gap: 3rem;
          margin-top: 3rem;
          flex-wrap: wrap;
        }

        .trust-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 500;
        }

        .trust-icon {
          font-size: 1.5rem;
        }

        /* Sections */
        .section-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 5rem 2rem;
        }

        h2 {
          font-size: 2.5rem;
          text-align: center;
          margin-bottom: 1rem;
          color: var(--text);
        }

        .section-subtitle {
          text-align: center;
          color: var(--text-light);
          font-size: 1.1rem;
          margin-bottom: 3rem;
        }

        /* Services */
        .services {
          background: var(--bg-alt);
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .service-card {
          background: white;
          padding: 2rem;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.08);
          transition: transform 0.3s, box-shadow 0.3s;
        }

        .service-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 40px rgba(0,0,0,0.12);
        }

        .service-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        .service-card h3 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
          color: var(--primary);
        }

        .service-card p {
          color: var(--text-light);
          margin-bottom: 1rem;
        }

        .service-card ul {
          list-style: none;
        }

        .service-card li {
          padding: 0.5rem 0;
          padding-left: 1.5rem;
          position: relative;
          color: var(--text-light);
        }

        .service-card li::before {
          content: "✓";
          position: absolute;
          left: 0;
          color: var(--accent);
          font-weight: bold;
        }

        /* About */
        .about-content {
          max-width: 800px;
          margin: 0 auto;
          text-align: center;
        }

        .about-content p {
          color: var(--text-light);
          margin-bottom: 1.5rem;
          font-size: 1.1rem;
        }

        .about-stats {
          display: flex;
          justify-content: center;
          gap: 4rem;
          margin-top: 3rem;
          flex-wrap: wrap;
        }

        .stat {
          text-align: center;
        }

        .stat-number {
          display: block;
          font-size: 3rem;
          font-weight: 700;
          color: var(--primary);
        }

        .stat-label {
          color: var(--text-light);
        }

        /* Offers */
        .offers {
          background: linear-gradient(135deg, #0066cc 0%, #00b4d8 100%);
          color: white;
        }

        .offers h2 {
          color: white;
        }

        .offers-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .offer-card {
          background: rgba(255,255,255,0.15);
          padding: 2rem;
          border-radius: 12px;
          backdrop-filter: blur(10px);
          text-align: center;
        }

        .offer-badge {
          display: inline-block;
          background: #f59e0b;
          color: white;
          padding: 0.25rem 1rem;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .offer-card h3 {
          font-size: 2rem;
          margin-bottom: 1rem;
        }

        .offer-card small {
          opacity: 0.8;
          display: block;
          margin-top: 1rem;
        }

        /* Areas */
        .areas-grid {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1rem;
        }

        .areas-grid span {
          background: var(--bg-alt);
          padding: 0.75rem 1.5rem;
          border-radius: 25px;
          font-weight: 500;
          color: var(--text);
        }

        /* Contact */
        .contact {
          background: var(--bg-alt);
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .contact-item {
          display: flex;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .contact-icon {
          font-size: 2rem;
        }

        .contact-item strong {
          display: block;
          margin-bottom: 0.25rem;
        }

        .contact-item a {
          color: var(--primary);
          text-decoration: none;
          font-size: 1.25rem;
          font-weight: 600;
        }

        .contact-cta {
          background: white;
          padding: 3rem;
          border-radius: 12px;
          text-align: center;
          box-shadow: 0 4px 20px rgba(0,0,0,0.08);
        }

        .contact-cta h3 {
          font-size: 1.75rem;
          margin-bottom: 1rem;
        }

        .contact-cta p {
          color: var(--text-light);
          margin-bottom: 2rem;
        }

        .contact-cta .btn-primary {
          background: var(--primary);
          color: white;
        }

        /* Footer */
        footer {
          background: var(--text);
          color: white;
          padding: 3rem 2rem 1rem;
        }

        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 2rem;
        }

        .footer-brand .logo {
          color: white;
          font-size: 1.25rem;
        }

        .footer-brand p {
          opacity: 0.7;
          margin-top: 0.5rem;
        }

        .footer-links {
          display: flex;
          gap: 2rem;
        }

        .footer-links a {
          color: white;
          opacity: 0.8;
          text-decoration: none;
          transition: opacity 0.3s;
        }

        .footer-links a:hover {
          opacity: 1;
        }

        .footer-contact {
          text-align: right;
        }

        .footer-contact a {
          color: var(--accent);
          text-decoration: none;
          font-size: 1.25rem;
          font-weight: 600;
          display: block;
        }

        .footer-contact span {
          opacity: 0.7;
        }

        .footer-bottom {
          max-width: 1200px;
          margin: 2rem auto 0;
          padding-top: 2rem;
          border-top: 1px solid rgba(255,255,255,0.1);
          text-align: center;
          opacity: 0.7;
        }

        /* Mobile Responsive */
        @media (max-width: 768px) {
          .demo-banner {
            font-size: 0.7rem;
            padding: 0.4rem 0.75rem;
          }

          nav {
            top: 32px;
            padding: 0.5rem 1rem;
          }

          .logo {
            font-size: 1rem;
          }

          .nav-links {
            display: none;
          }

          .nav-cta {
            padding: 0.5rem 0.75rem;
            font-size: 0.85rem;
            white-space: nowrap;
          }

          .hero {
            padding: 8rem 1rem 3rem;
          }

          .hero h1 {
            font-size: 1.75rem;
          }

          .hero p {
            font-size: 1rem;
          }

          .hero-buttons {
            flex-direction: column;
          }

          .hero-trust {
            gap: 1.5rem;
          }

          .trust-item {
            font-size: 0.9rem;
          }

          .section-container {
            padding: 3rem 1rem;
          }

          h2 {
            font-size: 1.75rem;
          }

          .about-stats {
            gap: 2rem;
          }

          .stat-number {
            font-size: 2rem;
          }

          .contact-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .footer-container {
            flex-direction: column;
            text-align: center;
          }

          .footer-contact {
            text-align: center;
          }

          .footer-links {
            flex-wrap: wrap;
            justify-content: center;
          }
        }
      `}</style>
    </>
  );
}
