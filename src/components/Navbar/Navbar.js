import { useContext, useState } from 'react'
import Brightness2 from '@material-ui/icons/Brightness2'
import WbSunny from '@material-ui/icons/WbSunny'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'
import { ThemeContext } from '../../contexts/theme'
import { LanguageContext } from '../../contexts/language'
import './Navbar.css'

const Navbar = () => {
  const [{ themeName, toggleTheme }] = useContext(ThemeContext)
  const { language, toggleLanguage, portfolio } = useContext(LanguageContext)
  const [showNavList, setShowNavList] = useState(false)

  const { projects, skills, experience, contact } = portfolio

  const toggleNavList = () => setShowNavList(!showNavList)

  return (
    <nav className='center nav'>
      <ul
        style={{ display: showNavList ? 'flex' : null }}
        className='nav__list'
      >
        {projects.length ? (
          <li className='nav__list-item'>
            <a
              href='#projects'
              onClick={toggleNavList}
              className='link link--nav'
            >
              {language === 'en' ? 'Projects' : 'Projets'}
            </a>
          </li>
        ) : null}

        {experience.length ? (
            <li className='nav__list-item'>
              <a
                href='#experience'
                onClick={toggleNavList}
                className='link link--nav'
              >
                {language === 'en' ? 'Experience' : 'Expérience'}
              </a>
            </li>
          ) : null}

        {skills.length ? (
          <li className='nav__list-item'>
            <a
              href='#skills'
              onClick={toggleNavList}
              className='link link--nav'
            >
              {language === 'en' ? 'Skills' : 'Compétences'}
            </a>
          </li>
        ) : null}

        {contact ? (
          <li className='nav__list-item'>
            <a
              href='#contact'
              onClick={toggleNavList}
              className='link link--nav'
            >
              Contact
            </a>
          </li>
        ) : null}

        {/* Bouton Langue */}
        <li className='nav__list-item'>
            <button 
                type='button' 
                onClick={toggleLanguage} 
                className='link link--nav'
                style={{ background: 'none', border: 'none', cursor: 'pointer', fontWeight: 'bold' }}
            >
                {language === 'en' ? 'FR' : 'EN'}
            </button>
        </li>
      </ul>

      <button
        type='button'
        onClick={toggleTheme}
        className='btn btn--icon nav__theme'
        aria-label='toggle theme'
      >
        {themeName === 'dark' ? <WbSunny /> : <Brightness2 />}
      </button>

      <button
        type='button'
        onClick={toggleNavList}
        className='btn btn--icon nav__hamburger'
        aria-label='toggle navigation'
      >
        {showNavList ? <CloseIcon /> : <MenuIcon />}
      </button>
    </nav>
  )
}

export default Navbar
