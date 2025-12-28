import { useContext } from 'react'
import { LanguageContext } from '../../contexts/language'
import './Skills.css'

const Skills = () => {
  const { portfolio, language } = useContext(LanguageContext)
  const { skills } = portfolio

  if (!skills.length) return null

  return (
    <section className='section skills' id='skills'>
      <h2 className='section__title'>{language === 'en' ? 'Skills' : 'Compétences'}</h2>
      <ul className='skills__list'>
        {skills.map((skill) => (
          <li key={skill} className='skills__list-item btn btn--plain'>
            {skill}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Skills

