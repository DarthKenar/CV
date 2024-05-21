import "./Project.css"
import {Popover, PopoverTrigger, PopoverContent, PopoverArrow, PopoverHeader, PopoverCloseButton, PopoverBody, PopoverFooter} from "@chakra-ui/popover"
export default function Project({name, image}){
  return(
    <>
      <Popover>
        <PopoverTrigger>
          <div
            className="project project-tile"
          >
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
        </PopoverTrigger>
        <PopoverContent>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverHeader>Confirmation!</PopoverHeader>
          <PopoverBody>Are you sure you want to have that milkshake?</PopoverBody>
        </PopoverContent>
      </Popover>

    </>
  )
}