import { useContext } from 'react'
import ProjectContainer from '../ProjectContainer/ProjectContainer'
import { LanguageContext } from '../../contexts/language'
import './Projects.css'

const Projects = () => {
  const { portfolio, language } = useContext(LanguageContext)
  const { projects } = portfolio

  if (!projects.length) return null

  return (
    <section id='projects' className='section projects'>
      <h2 className='section__title'>{language === 'en' ? 'Projects' : 'Projets'}</h2>

      <div className='projects__grid'>
        {projects.map((project) => (
          <ProjectContainer key={project.name} project={project} />
        ))}
      </div>
    </section>
  )
}

export default Projects