import logo from '../assets/image/logo.png'
import appleLogo from '../assets/image/apple-logo.png'
import heroPhone from '../assets/image/hero_phone.png'
import appleWatch from '../assets/image/apple_watch.png'
import proposalPDF from '../assets/Guardian_Proposal_Spread.pdf'

function HeroSection() {
  return (
    <section className="here_section hero section">
      <div className="hero__brand hero__brand--top">
        <img className="hero__brand-logo" src={logo} alt="Guardian logo" />
        <span className="hero__brand-name">Guardian</span>
      </div>

      <div className="hero__content">
        <h1>Navigate the World with Confidence</h1>
        <p className="hero__text">
          Guardian helps visually impaired individuals move safely and independently
          using real-time spatial awareness.
        </p>
        <div className="here_action hero__actions">
          <a className="button button--app-store" href="#footer">
            <img className="button__icon" src={appleLogo} alt="" aria-hidden="true" />
            <span className="button__text">
              <span>Download on the</span>
              <span>App Store</span>
            </span>
          </a>
          <a
            className="button button--navy"
            href={proposalPDF}
            target="_blank"
            rel="noreferrer"
          >
            Learn more
          </a>
        </div>
      </div>

      <div className="hero__visual" aria-hidden="true">
        <div className="hero__device-stack">
          <img className="hero__phone-image" src={heroPhone} alt="" />
          <img className="hero__watch-image" src={appleWatch} alt="" />
        </div>
      </div>
    </section>
  )
}

export default HeroSection
