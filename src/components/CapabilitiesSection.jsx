import { capabilities } from '../data'
import leaf from '../assets/image/leaf.png'

function CapabilitiesSection() {
  const topCards = capabilities.filter((item) => item.layout === 'top')
  const bottomCards = capabilities.filter((item) => item.layout === 'side')

  return (
    <section id="capabilities" className="section section--light">
      <div className="section-heading section-heading--center">
        <h2 className="section-heading__plain-title">What Guardian Can Do</h2>
      </div>

      <div className="capability-layout">
        <div className="capability-row capability-row--top">
          {topCards.map((item) => (
            <article key={item.title} className="capability-card capability-card--top">
              <div className="capability-card__header capability-card__header--top">
                <div className="capability-card__icon-wrap">
                  <img className="capability-card__icon" src={leaf} alt="" aria-hidden="true" />
                </div>
                <h3>{item.title}</h3>
              </div>
              <p>{item.text}</p>
            </article>
          ))}
        </div>

        <div className="capability-row capability-row--bottom">
          {bottomCards.map((item) => (
            <article key={item.title} className="capability-card capability-card--side">
              <div className="capability-card__header">
                <div className="capability-card__icon-wrap">
                  <img className="capability-card__icon" src={leaf} alt="" aria-hidden="true" />
                </div>
                <h3>{item.title}</h3>
              </div>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CapabilitiesSection
