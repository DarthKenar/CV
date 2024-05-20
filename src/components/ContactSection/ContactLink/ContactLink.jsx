export default function ContactLink({name, icon, link}){
  return(
    <a
      href={link}
      target="_blank"
      className="btn contact-details"
      rel="noopener noreferrer"
    >
      <i className={icon} /> {name}
    </a>
  )
}