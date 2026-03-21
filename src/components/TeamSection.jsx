import { team } from '../data'

function TeamSection() {
  const desktopRows = [team.slice(0, 3), team.slice(3, 7), team.slice(7, 11)]
  const mobileRows = [team.slice(0, 3), team.slice(3, 6), team.slice(6, 9), team.slice(9, 11)]

  return (
    <section id="team" className="section section--light">
      <div className="section-heading section-heading--center">
        <h2 className="section-heading__plain-title">The Team Behind the Guardian</h2>
      </div>

      <div className="team-layout team-layout--desktop">
        {desktopRows.map((row, index) => (
          <div
            key={`team-row-${index + 1}`}
            className={`team-row team-row--${row.length}`}
          >
            {row.map((member) => (
              <article key={member.name} className="team-member">
                <div className="team-member__avatar" aria-hidden="true">
                  {member.photo && (
                    <img
                      src={member.photo}
                      alt={`${member.name} portrait`}
                      loading="lazy"
                    style={{
                      objectPosition: member.photoPosition || 'center',
                    }}
                    />
                  )}
                </div>
                <h3>{member.name}</h3>
                <p>{member.role}</p>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  LinkedIn
                </a>
              </article>
            ))}
          </div>
        ))}
      </div>

      <div className="team-layout team-layout--mobile">
        {mobileRows.map((row, index) => (
          <div
            key={`team-mobile-row-${index + 1}`}
            className={`team-row team-row--${row.length}`}
          >
            {row.map((member) => (
              <article key={member.name} className="team-member">
                <div className="team-member__avatar" aria-hidden="true">
                  {member.photo && (
                    <img
                      src={member.photo}
                      alt={`${member.name} portrait`}
                      loading="lazy"
                    />
                  )}
                </div>
                <h3>{member.name}</h3>
                <p>{member.role}</p>
                <a href={member.linkedin}>LinkedIn</a>
              </article>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}

export default TeamSection
