import "./Project.css"
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
export default function Project({name, image}){
  return(
    <>
      <Popup trigger={
        <div className="project project-tile">
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
        </div>
      } position="bottom center" modal={true} >
        {close => (
          <div className="modal">
            <button className="close" onClick={close}>
              &times;
            </button>
            <div className="header">
              Popup content here !!

            </div>
            <div>
              asdasdasdasd
            </div>
            <a href="#" className="button">
              Link
            </a>
          </div>
          )
        }
        
      </Popup>
    </>
  )
}