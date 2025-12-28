import { useContext } from 'react'
import { LanguageContext } from '../../contexts/language'
import './Experience.css'

const Experience = () => {
  const { portfolio, language } = useContext(LanguageContext)
  const { experience } = portfolio

  if (!experience || experience.length === 0) return null

  return (
    <section className='section experience' id='experience'>
      <h2 className='section__title'>{language === 'en' ? 'Experience' : 'Expérience'}</h2>

      <div className='experience__grid'>
        {experience.map((exp) => (
          <div key={exp.id} className='experience__card'>
            <h3>{exp.title}</h3>
            <p>
              <strong>{exp.company}</strong> · {exp.period}
            </p>

            {exp.description && <p>{exp.description}</p>}

            {exp.responsibilities?.length > 0 && (
              <>
                <h4>{language === 'en' ? 'Key responsibilities' : 'Responsabilités clés'}</h4>
                <ul className='experience__list'>
                  {exp.responsibilities.map((r) => (
                    <li key={`${exp.id}-${r}`}>{r}</li>
                  ))}
                </ul>
              </>
            )}

            {exp.stack?.length > 0 && (
              <p className='experience__stack'>
                <strong>Stack:</strong> {exp.stack.join(' · ')}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience
