import "./Project.css"
export default function Project({name, image, link}){
  return(
    <a
      href={link}
      target="_blank"
      className="project project-tile"
      rel="noopener noreferrer"
    >
      <p className="project-description">
        Esto es una description del proyecto
      </p>
      <img
        className="project-image"
        src={require(`../../../img/projects/${image}`)}
        alt="project"
      />
      <p className="project-title">
        <span className="code">&lt;</span>
        {name}
        <span className="code">/&gt;</span>
      </p>
    </a>
  )
}