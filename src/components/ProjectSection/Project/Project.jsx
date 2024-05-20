import "./Project.css"
export default function Project({children, name, image, link}){
  return(
    <a
      href={link}
      target="_blank"
      className="project project-tile"
      rel="noopener noreferrer"
    >
      <p className="project-description">
        {children}
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