import together from '../assets/image/together.png'

function KeepingGuardianFreeSection() {
  return (
    <section className="support-section">
      <div className="support-panel">
        <div className="support-panel__content">
          <h2>Keep the Guardian Free</h2>
          <h3>Sustain Accessable Through Sponsorship</h3>
          <p>
            Guardian is designed to remain free for users. To support the
            operational costs of visual AI and infrastructure, we aim to partner
            with sponsors and organizations that share our commitment to
            accessibility and inclusive technology.
          </p>
          <a
            className="button button--light support-panel__button"
            href="#footer"
          >
            Learn More
          </a>
        </div>
      </div>

      <div className="support-visual" aria-hidden="true">
        <img className="support-visual__image" src={together} alt="" />
      </div>
    </section>
  );
}

export default KeepingGuardianFreeSection
