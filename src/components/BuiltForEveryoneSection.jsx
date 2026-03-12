import watchPhone from '../assets/image/watch_phone.png'

function BuiltForEveryoneSection() {
  return (
    <section className="built-section">
      <div className="built-visual" aria-hidden="true">
        <img className="built-visual__image" src={watchPhone} alt="" />
      </div>

      <div className="built-panel">
        <h2>Built for Everyone</h2>
        <p>
          Guardian is thoughtfully designed to support a wide range of visual
          abilities, using balanced contrast, clear visual hierarchy, and simple
          navigation patterns so users can comfortably understand and navigate
          the app independently, even without sight or advanced mobile
          experience.
        </p>
        <a className="button button--light built-panel__button" href="#footer">
          Try Now
        </a>
      </div>
    </section>
  );
}

export default BuiltForEveryoneSection
