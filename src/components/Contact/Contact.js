import { useContext } from 'react'
import { LanguageContext } from '../../contexts/language'
import './Contact.css'

const Contact = () => {
  const { portfolio, language } = useContext(LanguageContext)
  const { contact } = portfolio

  if (!contact.email) return null

  return (
    <section className='section contact center' id='contact'>
      <h2 className='section__title'>Contact</h2>
      <a href={`mailto:${contact.email}`}>
        <span type='button' className='btn btn--outline'>
          {language === 'en' ? 'Email me' : 'M\'envoyer un email'}
        </span>
      </a>
    </section>
  )
}

export default Contact