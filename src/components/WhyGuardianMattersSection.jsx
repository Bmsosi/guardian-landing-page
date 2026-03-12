import ellipse from '../assets/image/Ellipse.png'
import ellipses from '../assets/image/Ellipses.png'
import findObject from '../assets/image/Find_object.png'
import mobileLeft1 from '../assets/image/mobile_left1.png'
import mobileLeft2 from '../assets/image/mobile_left2.png'
import mobileLeft3 from '../assets/image/mobile_left3.png'
import mobileRight1 from '../assets/image/mobile_right1.png'
import mobileRight2 from '../assets/image/mobile_right2.png'
import mobileRight3 from '../assets/image/mobile_right3.png'

const leftPoints = [
  {
    title: "Greater Independence",
    text: "Guardian helps visually impaired users navigate spaces confidently without relying constantly on others.",
  },
  {
    title: "Indoor Navigation",
    text: "Guardian supports navigation in indoor environments where traditional navigation tools often fail.",
  },
];

const rightPoints = [
  {
    title: "Real-Time Safety",
    text: "The app detects obstacles and hazards, providing immediate alerts to help users avoid accidents.",
  },
  {
    title: "Peace of Mind",
    text: "The system offers reassurance for both users and their loved ones by providing continuous guidance and safety support.",
  },
];

function WhyGuardianMattersSection() {
  return (
    <section id="why-it-matters" className="section section--light">
      <div className="section-heading section-heading--center">
        <h2 className="section-heading__plain-title">Why Guardian Matters</h2>
        <p className="section-heading__description">
          Guardian empowers visually impaired individuals with safer navigation, greater
          independence, and confidence in everyday environments.
        </p>
      </div>

      <div className="matter-layout">
        <div className="matter-points matter-points--left">
          {leftPoints.map((item) => (
            <article key={item.title} className="matter-point">
              <h2>{item.title}</h2>
              <p>{item.text}</p>
            </article>
          ))}
        </div>

        <div className="matter-visual" aria-hidden="true">
          <img className="matter-visual__base" src={ellipses} alt="" />
          <img className="matter-visual__middle" src={ellipse} alt="" />
          <img className="matter-visual__top" src={findObject} alt="" />
        </div>

        <div className="matter-points matter-points--right">
          {rightPoints.map((item) => (
            <article key={item.title} className="matter-point">
              <h2>{item.title}</h2>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="matter-mobile">
        <div className="matter-mobile__row">
          <div className="matter-mobile__images">
            <img src={mobileLeft1} alt="" aria-hidden="true" />
            <img src={mobileLeft2} alt="" aria-hidden="true" />
            <img src={mobileLeft3} alt="" aria-hidden="true" />
          </div>
          <div className="matter-mobile__content">
            <article className="matter-point">
              <h2>{leftPoints[0].title}</h2>
              <p>{leftPoints[0].text}</p>
            </article>
            <article className="matter-point">
              <h2>{rightPoints[0].title}</h2>
              <p>{rightPoints[0].text}</p>
            </article>
          </div>
        </div>

        <div className="matter-mobile__row matter-mobile__row--reverse">
          <div className="matter-mobile__content">
            <article className="matter-point">
              <h2>{leftPoints[1].title}</h2>
              <p>{leftPoints[1].text}</p>
            </article>
            <article className="matter-point">
              <h2>{rightPoints[1].title}</h2>
              <p>{rightPoints[1].text}</p>
            </article>
          </div>
          <div className="matter-mobile__images">
            <img src={mobileRight1} alt="" aria-hidden="true" />
            <img src={mobileRight2} alt="" aria-hidden="true" />
            <img src={mobileRight3} alt="" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyGuardianMattersSection
