import './App.css'
import heroImage from './assets/Hero.png'
import { useState } from 'react'

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const categories = [
    { icon: "fas fa-dog", text: "Pets" },
    { icon: "fas fa-plane", text: "Travel" },
    { icon: "fas fa-graduation-cap", text: "Education & Tips" },
    { icon: "fas fa-shopping-bag", text: "Shopping & Reviews" },
    { icon: "fas fa-briefcase", text: "Career & Productivity" },
    { icon: "fas fa-dumbbell", text: "Fitness & Wellness" },
    { icon: "fas fa-heart", text: "Health & Wellness" },
    { icon: "fas fa-futbol", text: "Sports" },
    { icon: "fas fa-mobile-alt", text: "Tech & Gadgets" },
    { icon: "fas fa-rocket", text: "Business & Entrepreneur" },
    { icon: "fas fa-home", text: "Home & Lifestyle" },
    { icon: "fas fa-tshirt", text: "Fashion & Style" },
    { icon: "fas fa-spray-can", text: "Beauty & Skincare" },
    { icon: "fas fa-utensils", text: "Food & Cooking" },
    { icon: "fas fa-baby", text: "Parenting" },
    { icon: "fas fa-palette", text: "Interior Design" }
  ]

  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="logo">
            <span className="logo-icon">
              <i className="fas fa-star"></i>
            </span>
            <span className="logo-text">PostHaus</span>
          </div>
          <button 
            className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <nav className={`nav ${isMobileMenuOpen ? 'active' : ''}`}>
            <a href="#about" onClick={() => setIsMobileMenuOpen(false)}>About Us</a>
            <a href="#services" onClick={() => setIsMobileMenuOpen(false)}>Services</a>
            <a href="#process" onClick={() => setIsMobileMenuOpen(false)}>Process</a>
            <a href="#contact" className="contact-btn" onClick={() => setIsMobileMenuOpen(false)}>Request a quote</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Influencer Marketing That's Smart, Local & Done-for-You</h1>
            <p>Whether you're targeting customers in Lucknow or Delhi, or need creators under 50K followers—we help you connect with the right influencers.</p>
            <div className="cta-buttons">
              <button className="cta-button whatsapp-btn">
                <span className="btn-icon">
                  <i className="fab fa-whatsapp"></i>
                </span>
                WhatsApp
              </button>
              <button className="cta-button email-btn">
                <span className="btn-icon">
                  <i className="fas fa-envelope"></i>
                </span>
                Email
              </button>
            </div>
          </div>
          <div className="hero-visual">
            <img src={heroImage} alt="Digital landscape illustration" className="hero-image" />
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Our Expertise</span>
            <h2>Categories We Cover</h2>
            <p>We work with influencers across diverse niches to help your brand connect with the right audience in every category.</p>
          </div>
        </div>
        <div className="infinite-scroll-container">
          <div className="infinite-scroll-track">
            {/* First set */}
            {categories.map((category, index) => (
              <div key={`set1-${index}`} className="category-item">
                <span className="category-icon">
                  <i className={category.icon}></i>
                </span>
                <span className="category-text">{category.text}</span>
              </div>
            ))}
            {/* Second set */}
            {categories.map((category, index) => (
              <div key={`set2-${index}`} className="category-item">
                <span className="category-icon">
                  <i className={category.icon}></i>
                </span>
                <span className="category-text">{category.text}</span>
              </div>
            ))}
            {/* Third set */}
            {categories.map((category, index) => (
              <div key={`set3-${index}`} className="category-item">
                <span className="category-icon">
                  <i className={category.icon}></i>
                </span>
                <span className="category-text">{category.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Our Services</span>
            <h2>Comprehensive Solutions</h2>
            <p>Comprehensive influencer marketing solutions designed to amplify your brand's reach and engagement through authentic partnerships.</p>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-number">01</div>
              <div className="service-content">
                <div className="service-icon">
                  <i className="fas fa-search"></i>
                </div>
                <h3>Hyperlocal Influencer Discovery</h3>
                <p>City-level targeting and micro-location insights for perfect brand alignment.</p>
                <ul className="service-features">
                  <li>City-level targeting and micro-location insights</li>
                  <li>Perfect category alignment with your brand</li>
                  <li>Verified authentic engagement metrics</li>
                </ul>
              </div>
            </div>
            <div className="service-card">
              <div className="service-number">02</div>
              <div className="service-content">
                <div className="service-icon">
                  <i className="fas fa-video"></i>
                </div>
                <h3>Content Production</h3>
                <p>Professional content creation from concept to final delivery.</p>
                <ul className="service-features">
                  <li>Professional scriptwriting and storyboarding</li>
                  <li>Remote and on-site shooting coordination</li>
                  <li>Post-production editing and optimization</li>
                </ul>
              </div>
            </div>
            <div className="service-card">
              <div className="service-number">03</div>
              <div className="service-content">
                <div className="service-icon">
                  <i className="fas fa-robot"></i>
                </div>
                <h3>AI-Powered Matching</h3>
                <p>Advanced algorithms for perfect influencer-brand partnerships.</p>
                <ul className="service-features">
                  <li>Advanced algorithm for perfect matches</li>
                  <li>Real-time engagement rate analysis</li>
                  <li>Comprehensive brand safety checks</li>
                </ul>
              </div>
            </div>
            <div className="service-card">
              <div className="service-number">04</div>
              <div className="service-content">
                <div className="service-icon">
                  <i className="fas fa-chart-line"></i>
                </div>
                <h3>Analytics & Optimization</h3>
                <p>Comprehensive tracking and optimization for maximum ROI.</p>
                <ul className="service-features">
                  <li>Real-time campaign performance tracking</li>
                  <li>Detailed ROI and engagement analytics</li>
                  <li>Continuous optimization recommendations</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us / Algorithm Section */}
      <section id="about" className="algorithm-section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Our Technology</span>
            <h2>Why Our Algorithm Works</h2>
            <p>Our AI-powered matching system ensures perfect influencer-brand partnerships through comprehensive analysis and data-driven insights</p>
          </div>
          <div className="algorithm-grid">
            <div className="algorithm-card">
              <div className="algorithm-number">01</div>
              <div className="algorithm-content">
                <h3>Engagement Analysis</h3>
                <p>Deep-dive into authentic engagement patterns, comment quality, and audience interaction to identify genuine influence and filter out fake followers.</p>
                <div className="algorithm-metrics">
                  <span className="metric">98% Accuracy</span>
                </div>
              </div>
            </div>
            <div className="algorithm-card">
              <div className="algorithm-number">02</div>
              <div className="algorithm-content">
                <h3>Audience Intent Match</h3>
                <p>Match influencer audiences with your target demographics using behavioral data, interest mapping, and purchase intent signals.</p>
                <div className="algorithm-metrics">
                  <span className="metric">85% Higher ROI</span>
                </div>
              </div>
            </div>
            <div className="algorithm-card">
              <div className="algorithm-number">03</div>
              <div className="algorithm-content">
                <h3>Brand Fit Score</h3>
                <p>Analyze content style, values alignment, and previous brand partnerships to ensure perfect brand-creator fit and authentic collaborations.</p>
                <div className="algorithm-metrics">
                  <span className="metric">90% Success Rate</span>
                </div>
              </div>
            </div>
            <div className="algorithm-card">
              <div className="algorithm-number">04</div>
              <div className="algorithm-content">
                <h3>Partnership Readiness</h3>
                <p>Evaluate creator professionalism, content consistency, and collaboration history for smooth partnerships and reliable delivery.</p>
                <div className="algorithm-metrics">
                  <span className="metric">95% On-Time</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables Section */}
      <section className="deliverables">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Deliverables</span>
            <h2>What You Get</h2>
            <p>Comprehensive deliverables that drive your influencer marketing success and deliver measurable results</p>
          </div>
          <div className="deliverables-grid">
            <div className="deliverable-card">
              <div className="deliverable-number">01</div>
              <div className="deliverable-content">
                <div className="deliverable-icon">
                  <i className="fas fa-clipboard-list"></i>
                </div>
                <h3>Influencer Shortlists</h3>
                <p>Curated lists of pre-vetted influencers with detailed profiles, engagement metrics, and audience insights.</p>
                <div className="deliverable-features">
                  <span className="feature-tag">
                    <i className="fas fa-check"></i> Audience Analytics
                  </span>
                  <span className="feature-tag">
                    <i className="fas fa-check"></i> Engagement Rates
                  </span>
                </div>
              </div>
            </div>
            <div className="deliverable-card">
              <div className="deliverable-number">02</div>
              <div className="deliverable-content">
                <div className="deliverable-icon">
                  <i className="fas fa-video"></i>
                </div>
                <h3>Edited Reels</h3>
                <p>Professional video content edited to your brand guidelines, optimized for maximum engagement and conversions.</p>
                <div className="deliverable-features">
                  <span className="feature-tag">
                    <i className="fas fa-check"></i> Brand Guidelines
                  </span>
                  <span className="feature-tag">
                    <i className="fas fa-check"></i> Pro Editing
                  </span>
                </div>
              </div>
            </div>
            <div className="deliverable-card">
              <div className="deliverable-number">03</div>
              <div className="deliverable-content">
                <div className="deliverable-icon">
                  <i className="fas fa-file-alt"></i>
                </div>
                <h3>Content Breakdown</h3>
                <p>Detailed analysis of content performance, engagement rates, and audience response across all campaigns.</p>
                <div className="deliverable-features">
                  <span className="feature-tag">
                    <i className="fas fa-check"></i> Performance Metrics
                  </span>
                  <span className="feature-tag">
                    <i className="fas fa-check"></i> Audience Insights
                  </span>
                </div>
              </div>
            </div>
            <div className="deliverable-card">
              <div className="deliverable-number">04</div>
              <div className="deliverable-content">
                <div className="deliverable-icon">
                  <i className="fas fa-lightbulb"></i>
                </div>
                <h3>Creative Recommendations</h3>
                <p>Data-driven suggestions for content themes, messaging strategies, and optimization opportunities.</p>
                <div className="deliverable-features">
                  <span className="feature-tag">
                    <i className="fas fa-check"></i> Data-Driven
                  </span>
                  <span className="feature-tag">
                    <i className="fas fa-check"></i> Optimization
                  </span>
                </div>
              </div>
            </div>
            <div className="deliverable-card">
              <div className="deliverable-number">05</div>
              <div className="deliverable-content">
                <div className="deliverable-icon">
                  <i className="fas fa-chart-bar"></i>
                </div>
                <h3>Exportable Reports</h3>
                <p>Comprehensive analytics reports with ROI tracking, performance metrics, and actionable insights for stakeholders.</p>
                <div className="deliverable-features">
                  <span className="feature-tag">
                    <i className="fas fa-check"></i> ROI Tracking
                  </span>
                  <span className="feature-tag">
                    <i className="fas fa-check"></i> Actionable Insights
                  </span>
                </div>
              </div>
            </div>
            <div className="deliverable-card">
              <div className="deliverable-number">06</div>
              <div className="deliverable-content">
                <div className="deliverable-icon">
                  <i className="fas fa-bullseye"></i>
                </div>
                <h3>Campaign Management</h3>
                <p>End-to-end campaign oversight with timeline management, influencer coordination, and real-time monitoring.</p>
                <div className="deliverable-features">
                  <span className="feature-tag">
                    <i className="fas fa-check"></i> Timeline Management
                  </span>
                  <span className="feature-tag">
                    <i className="fas fa-check"></i> Real-time Monitoring
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Working Process */}
      <section id="process" className="working-process">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Our Process</span>
            <h2>How We Transform Your Brand into an Influencer Marketing Success</h2>
            <p>Our proven 6-step methodology ensures maximum ROI and authentic brand representation across all campaigns.</p>
          </div>
          
          <div className="process-timeline">
            <div className="timeline-line"></div>
            
            <div className="process-step">
              <div className="step-indicator">
                <div className="step-number">01</div>
                <div className="step-icon">
                  <i className="fas fa-search"></i>
                </div>
              </div>
              <div className="step-content">
                <h3>Strategic Discovery & Research</h3>
                <p>Deep-dive analysis to identify perfect influencers aligned with your brand values, target demographics, and campaign objectives.</p>
              </div>
            </div>

            <div className="process-step">
              <div className="step-indicator">
                <div className="step-number">02</div>
                <div className="step-icon">
                  <i className="fas fa-handshake"></i>
                </div>
              </div>
              <div className="step-content">
                <h3>Professional Outreach & Negotiation</h3>
                <p>Personal outreach to influencers with professional proposals, rate negotiations, and partnership agreements.</p>
              </div>
            </div>

            <div className="process-step">
              <div className="step-indicator">
                <div className="step-number">03</div>
                <div className="step-icon">
                  <i className="fas fa-edit"></i>
                </div>
              </div>
              <div className="step-content">
                <h3>Creative Scripting & Content Planning</h3>
                <p>Collaborative script development that maintains brand voice while preserving influencer authenticity and creativity.</p>
              </div>
            </div>

            <div className="process-step">
              <div className="step-indicator">
                <div className="step-number">04</div>
                <div className="step-icon">
                  <i className="fas fa-video"></i>
                </div>
              </div>
              <div className="step-content">
                <h3>Content Creation & Production</h3>
                <p>Professional content creation with quality control, ensuring brand guidelines while maintaining authentic influencer style.</p>
              </div>
            </div>

            <div className="process-step">
              <div className="step-indicator">
                <div className="step-number">05</div>
                <div className="step-icon">
                  <i className="fas fa-cut"></i>
                </div>
              </div>
              <div className="step-content">
                <h3>Professional Editing & Optimization</h3>
                <p>Expert post-production and editing to enhance content quality while maintaining authentic influencer voice and style.</p>
              </div>
            </div>

            <div className="process-step">
              <div className="step-indicator">
                <div className="step-number">06</div>
                <div className="step-icon">
                  <i className="fas fa-chart-line"></i>
                </div>
              </div>
              <div className="step-content">
                <h3>Strategic Publishing & Performance Analytics</h3>
                <p>Optimal posting schedule execution with comprehensive performance tracking and detailed ROI reporting.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default App
