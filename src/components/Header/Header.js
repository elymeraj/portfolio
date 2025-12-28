import { useContext } from 'react'
import Navbar from '../Navbar/Navbar'
import { LanguageContext } from '../../contexts/language'
import './Header.css'

const Header = () => {
  const { portfolio } = useContext(LanguageContext)
  const { header } = portfolio
  const { homepage, title } = header

  return (
    <header className='header center'>
      <h3>
        {homepage ? (
          <a href={homepage} className='link'>
            {title}
          </a>
        ) : (
          title
        )}
      </h3>
      <Navbar />
    </header>
  )
}

export default Header
