function SectionHeading({ eyebrow, title, dark = false, plain = false, description }) {
  return (
    <div className="section-heading section-heading--center">
      <span className={`eyebrow${dark ? ' eyebrow--dark' : ''}${plain ? ' eyebrow--plain' : ''}`}>
        {eyebrow}
      </span>
      {title ? <h2>{title}</h2> : null}
      {description ? <p className="section-heading__description">{description}</p> : null}
    </div>
  )
}

export default SectionHeading
