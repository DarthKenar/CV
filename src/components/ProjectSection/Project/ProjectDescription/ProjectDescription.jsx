import "./ProjectDescription.css"
export default function ProjectDescription({title, goal, details, technologies, deployment, repository}){
  return(
    <p className="project-description">
      <h4 className="project-description-title">{title}</h4>
        <br/>
      <p className="project-description-body">
        Objetivo: <br/>
        <i>{goal}</i><br/><br/>
        Características: <br/>
        <i>{details}</i><br/><br/>
        Tecnologías: <br/>
        <i>{technologies}</i><br/><br/>
        Despliegue: <br/>
        <i><u><a className="link" href={deployment} target="_blank" rel="noreferrer noopener">{deployment}</a></u></i><br/><br/>
        Repositorio:<br/>
        <i><u><a className="link" href={repository} target="_blank" rel="noreferrer noopener">{repository}</a></u></i>
      </p>
    </p>
  )
}