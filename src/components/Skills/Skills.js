import { useContext } from 'react'
import { LanguageContext } from '../../contexts/language'
import './Skills.css'

const Skills = () => {
  const { portfolio, language } = useContext(LanguageContext)
  const { skills } = portfolio

  if (!skills || skills.length === 0) return null

  return (
    <section className='section skills' id='skills'>
      <h2 className='section__title'>
        {language === 'en' ? 'Skills' : 'Compétences'}
      </h2>

      <div className='skills__grid'>
        {skills.map((group) => (
          <article key={group.category} className='skills__category'>
            <h3 className='skills__category-title'>{group.category}</h3>

            <ul className='skills__list'>
              {group.items.map((skill) => (
                <li key={`${group.category}-${skill}`} className='skills__list-item btn btn--plain'>
                  {skill}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Skills