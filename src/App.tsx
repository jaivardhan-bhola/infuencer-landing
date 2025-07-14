import './App.css'
import heroImage from './assets/Hero.png'
import { useState } from 'react'

function App() {
  const [activeStep, setActiveStep] = useState(1)

  const handleStepClick = (stepNumber: number) => {
    setActiveStep(stepNumber)
  }
  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="logo">
            <span className="logo-icon">★</span>
            <span className="logo-text">PostHaus</span>
          </div>
          <nav className="nav">
            <a href="#about">About Us</a>
            <a href="#services">Services</a>
            <a href="#process">Process</a>
            <a href="#contact" className="contact-btn">Request a quote</a>
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
                <span className="btn-icon">💬</span>
                WhatsApp
              </button>
              <button className="cta-button email-btn">
                <span className="btn-icon">✉️</span>
                Email
              </button>
            </div>
          </div>
          <div className="hero-visual">
            <img src={heroImage} alt="Digital landscape illustration" className="hero-image" />
          </div>
        </div>
        <div className="brands">
          <div className="container">
            <h3 className="categories-title">Categories We Cover</h3>
            <div className="categories-grid">
              <div className="category-item">
                <span className="category-icon">🐕</span>
                <span className="category-text">Pets</span>
              </div>
              <div className="category-item">
                <span className="category-icon">✈️</span>
                <span className="category-text">Travel</span>
              </div>
              <div className="category-item">
                <span className="category-icon">📚</span>
                <span className="category-text">Education & Tips</span>
              </div>
              <div className="category-item">
                <span className="category-icon">🛍️</span>
                <span className="category-text">Shopping & Reviews</span>
              </div>
              <div className="category-item">
                <span className="category-icon">💼</span>
                <span className="category-text">Career & Productivity</span>
              </div>
              <div className="category-item">
                <span className="category-icon">💪</span>
                <span className="category-text">Fitness & Wellness</span>
              </div>
              <div className="category-item">
                <span className="category-icon">🧘</span>
                <span className="category-text">Health & Wellness</span>
              </div>
              <div className="category-item">
                <span className="category-icon">⚽</span>
                <span className="category-text">Sports</span>
              </div>
              <div className="category-item">
                <span className="category-icon">📱</span>
                <span className="category-text">Tech & Gadgets</span>
              </div>
              <div className="category-item">
                <span className="category-icon">🚀</span>
                <span className="category-text">Business & Entrepreneur</span>
              </div>
              <div className="category-item">
                <span className="category-icon">🏠</span>
                <span className="category-text">Home & Lifestyle</span>
              </div>
              <div className="category-item">
                <span className="category-icon">👗</span>
                <span className="category-text">Fashion & Style</span>
              </div>
              <div className="category-item">
                <span className="category-icon">🧴</span>
                <span className="category-text">Beauty & Skincare</span>
              </div>
              <div className="category-item">
                <span className="category-icon">🍳</span>
                <span className="category-text">Food & Cooking</span>
              </div>
              <div className="category-item">
                <span className="category-icon">👶</span>
                <span className="category-text">Parenting</span>
              </div>
              <div className="category-item">
                <span className="category-icon">🎨</span>
                <span className="category-text">Interior Design</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="container">
          <h2>Services</h2>
          <p>We specialize in connecting brands with the perfect influencers through our comprehensive influencer marketing platform. From discovery to campaign execution, we handle everything.</p>
          <div className="services-grid">
            <div className="service-card green">
              <h3>Hyperlocal Influencer Discovery</h3>
              <ul className="service-features">
                <li>City-level targeting</li>
                <li>Category alignment</li>
                <li>Authentic engagement</li>
              </ul>
              <div className="service-icon">🎯</div>
            </div>
            <div className="service-card dark">
              <h3>End-to-End Content Production</h3>
              <ul className="service-features">
                <li>Scriptwriting</li>
                <li>Remote/on-site shooting</li>
                <li>Editing & coordination</li>
              </ul>
              <div className="service-icon">🎬</div>
            </div>
            <div className="service-card green">
              <h3>Influencer Shortlisting</h3>
              <ul className="service-features">
                <li>AI-powered matching</li>
                <li>Engagement rate analysis</li>
                <li>Brand safety checks</li>
              </ul>
              <div className="service-icon">✅</div>
            </div>
            <div className="service-card dark">
              <h3>Campaign Reporting & Optimization</h3>
              <ul className="service-features">
                <li>Real-time analytics</li>
                <li>Performance tracking</li>
                <li>ROI optimization</li>
              </ul>
              <div className="service-icon">📊</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Let's make things happen</h2>
            <p>Contact us today to learn more about how our influencer marketing services can help your business grow and succeed online.</p>
            <button className="cta-button">Get your free proposal</button>
          </div>
          <div className="cta-visual">
            <div className="smiley">😊</div>
          </div>
        </div>
      </section>

      {/* Why Us / Algorithm Section */}
      <section id="about" className="algorithm-section">
        <div className="container">
          <h2>Why Our Algorithm Works</h2>
          <p>Our AI-powered matching system ensures perfect influencer-brand partnerships through comprehensive analysis</p>
          <div className="algorithm-grid">
            <div className="algorithm-card">
              <div className="algorithm-icon">📊</div>
              <h3>Engagement Analysis</h3>
              <p>Deep-dive into authentic engagement patterns, comment quality, and audience interaction to identify genuine influence.</p>
            </div>
            <div className="algorithm-card">
              <div className="algorithm-icon">🎯</div>
              <h3>Audience Intent Match</h3>
              <p>Match influencer audiences with your target demographics using behavioral data and interest mapping.</p>
            </div>
            <div className="algorithm-card">
              <div className="algorithm-icon">⭐</div>
              <h3>Brand Fit Score</h3>
              <p>Analyze content style, values alignment, and previous brand partnerships to ensure perfect brand-creator fit.</p>
            </div>
            <div className="algorithm-card">
              <div className="algorithm-icon">✅</div>
              <h3>Partnership Readiness Check</h3>
              <p>Evaluate creator professionalism, content consistency, and collaboration history for smooth partnerships.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables Section */}
      <section className="deliverables">
        <div className="container">
          <h2>What You Get</h2>
          <p>Comprehensive deliverables that drive your influencer marketing success</p>
          <div className="deliverables-grid">
            <div className="deliverable-item">
              <div className="deliverable-icon">📋</div>
              <h3>Influencer Shortlists</h3>
              <p>Curated lists of pre-vetted influencers with detailed profiles, engagement metrics, and audience insights.</p>
            </div>
            <div className="deliverable-item">
              <div className="deliverable-icon">🎬</div>
              <h3>Edited Reels</h3>
              <p>Professional video content edited to your brand guidelines, optimized for maximum engagement and conversions.</p>
            </div>
            <div className="deliverable-item">
              <div className="deliverable-icon">📝</div>
              <h3>Content Breakdown</h3>
              <p>Detailed analysis of content performance, engagement rates, and audience response across all campaigns.</p>
            </div>
            <div className="deliverable-item">
              <div className="deliverable-icon">💡</div>
              <h3>Creative Recommendations</h3>
              <p>Data-driven suggestions for content themes, messaging strategies, and optimization opportunities.</p>
            </div>
            <div className="deliverable-item">
              <div className="deliverable-icon">📊</div>
              <h3>Exportable Reports</h3>
              <p>Comprehensive analytics reports with ROI tracking, performance metrics, and actionable insights for stakeholders.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Working Process */}
      <section id="process" className="working-process">
        <div className="container">
          <h2>Our Working Process</h2>
          <p>Step-by-Step Guide to Your Influencer Marketing Success</p>
          <div className="process-steps">
            <div 
              className={`process-step ${activeStep === 1 ? 'active' : ''}`}
              onClick={() => handleStepClick(1)}
            >
              <div className="step-number">01</div>
              <div className="step-content">
                <h3>Discovery</h3>
                {activeStep === 1 && (
                  <p>We identify the perfect influencers for your brand by analyzing their audience demographics, engagement rates, and content alignment with your target market and brand values.</p>
                )}
              </div>
            </div>
            <div 
              className={`process-step ${activeStep === 2 ? 'active' : ''}`}
              onClick={() => handleStepClick(2)}
            >
              <div className="step-number">02</div>
              <div className="step-content">
                <h3>Outreach</h3>
                {activeStep === 2 && (
                  <p>Our team handles all communications with influencers, negotiating rates, discussing campaign requirements, and finalizing partnerships to ensure smooth collaboration.</p>
                )}
              </div>
            </div>
            <div 
              className={`process-step ${activeStep === 3 ? 'active' : ''}`}
              onClick={() => handleStepClick(3)}
            >
              <div className="step-number">03</div>
              <div className="step-content">
                <h3>Scripting</h3>
                {activeStep === 3 && (
                  <p>We create compelling scripts and content briefs that maintain your brand voice while allowing influencers to showcase your products authentically to their audience.</p>
                )}
              </div>
            </div>
            <div 
              className={`process-step ${activeStep === 4 ? 'active' : ''}`}
              onClick={() => handleStepClick(4)}
            >
              <div className="step-number">04</div>
              <div className="step-content">
                <h3>Shooting</h3>
                {activeStep === 4 && (
                  <p>Whether remote or on-site, we coordinate the entire content creation process, ensuring high-quality visuals and messaging that resonate with your target audience.</p>
                )}
              </div>
            </div>
            <div 
              className={`process-step ${activeStep === 5 ? 'active' : ''}`}
              onClick={() => handleStepClick(5)}
            >
              <div className="step-number">05</div>
              <div className="step-content">
                <h3>Editing</h3>
                {activeStep === 5 && (
                  <p>Our creative team handles post-production, editing content to match your brand guidelines while maintaining the influencer's authentic style and voice.</p>
                )}
              </div>
            </div>
            <div 
              className={`process-step ${activeStep === 6 ? 'active' : ''}`}
              onClick={() => handleStepClick(6)}
            >
              <div className="step-number">06</div>
              <div className="step-content">
                <h3>Publishing & Reporting</h3>
                {activeStep === 6 && (
                  <p>We manage the content publishing schedule and provide detailed analytics reports showing reach, engagement, conversions, and ROI for your campaign.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default App
