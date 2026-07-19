import { useContext } from 'react'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { LanguageContext } from '../../contexts/language'
import './About.css'

const About = () => {
  const { portfolio, language } = useContext(LanguageContext)
  const { name, role, description, resume, social } = portfolio.about

  return (
    <div className='about center'>
      {name && (
        <h1>
          {language === 'en' ? 'Hi, I am ' : 'Bonjour, je suis '}
          <span className='about__name'>{name}</span>
        </h1>
      )}

      {role && <h2 className='about__role'>{role}</h2>}
      
      <p className='about__desc'>{description && description}</p>

      <div className='about__contact center'>
        {resume && (
          <a href={resume} target="_blank" rel="noopener noreferrer">
            <span type='button' className='btn btn--outline'>
              {language === 'en' ? 'Check Out My Resume' : 'Voir mon CV'}
            </span>
          </a>
        )}

        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                aria-label='github'
                className='link link--icon'
              >
                <GitHubIcon style={{ fontSize: 38 }} />
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label='linkedin'
                className='link link--icon'
              >
                <LinkedInIcon style={{ fontSize: 38 }} />
              </a>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default About