import "./Project.css"
export default function Project({children, name, image, link}){
  return(
    <div
      className="project"
    >
      <p className="project-description">
        {children}
      </p>
      <img
        className="project-image"
        src={require(`../../../img/projects/${image}`)}
        alt="project"
      />
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="project-link">
        <span className="code">&lt;</span>
        {name}
        <span className="code">/&gt;</span>
      </a>
    </div>
  )
}