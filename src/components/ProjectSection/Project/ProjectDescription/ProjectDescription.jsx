import "./ProjectDescription.css"
export default function ProjectDescription({title, goal, details, technologies, deployment, repository}){
  return(
    <p className="project-description">
      <h4 className="project-description-title">{title}</h4>
        <br/>
      <p className="project-description-body">
        {goal}<br/><br/>
        {details}
        <br/><br/>
        {technologies}<br/><br/>
        {deployment}<br/><br/>
        {repository}
      </p>
    </p>
  )
}