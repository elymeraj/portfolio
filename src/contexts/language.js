import { createContext, useState } from 'react'
import { portfolios } from '../portfolio'

const LanguageContext = createContext()

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en')

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'fr' : 'en'))
  }

  const portfolio = portfolios[language]

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, portfolio }}>
      {children}
    </LanguageContext.Provider>
  )
}

export { LanguageContext, LanguageProvider }