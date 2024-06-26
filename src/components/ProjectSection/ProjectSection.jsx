import ProjectDescription from "./Project/ProjectDescription/ProjectDescription"
import Project from "./Project/Project"
export default function ProjectSection(){
  return(
    <section id="projects" className="projects-section">
      <h2 className="projects-section-header">Proyectos</h2>
      <div className="projects-grid">
        <Project name="VidelaSpect" image="videlaspect.jpg" link="#">
          <ProjectDescription title="Videla Spect" goal="Registrar la entrada y salida del personal docente de la escuela Ing. Ricardo Videla n°4012. Mediante Documento de Identidad y foto rostro del personal" details="Al sistema se le implementó verificación de rostro humano por inteligencia artificial. Panel de administrador. Envío de resumen de registros por correo electrónico. Eliminación automática o manual, opcional de registros, autentificación por token, encriptación de contraseñas entre otras características." technologies="Typescript, Javascript, Node.Js, Express.Js, HTMX, TypeORM, HandleBars" deployment="Ubicado en un servidor privado dentro de la escuela." repository="(privado)" />
        </Project>
        <Project name="Pomodoro Neumorphism" image="pomodoroneumorphism.webp" link="https://darthkenar.github.io/PomodoroNeumorphism/">
          <ProjectDescription title="Pomodoro Neumorphism" goal="Gestionar tareas sin distraerse, mantener la concentración y aumentar la productividad." details="Estilo minimalista con Neumorfismo. Guarda automaticamente las tareas para completarlas luego, establece diferentes periodos de tiempo a tu gusto para mantener la concentración." technologies="Javascript (vanilla), CSS, HTML" deployment="https://darthkenar.github.io/PomodoroNeumorphism/" repository="https://github.com/DarthKenar/PomodoroNeumorphism"/>
        </Project>
        <Project name="El Canario Regionales" image="elCanarioRegionales.webp" link="http://federicovega.pythonanywhere.com/">
          <ProjectDescription title="" goal="" details="" technologies="Python, Django, TailwindCSS, HTMX" deployment="https://federicovega.pythonanywhere.com/" repository=""/>
          
        </Project>
        <Project name="El Canario Matemático" image="elCanarioMatematico.png" link="#">
          <ProjectDescription/>
        </Project>
        <Project name="Word Learn Spanish" image="wordlearnspanish.webp" link="https://github.com/DarthKenar/WordlearnSpanish">
          <ProjectDescription/>
        </Project>
        <Project name="Mecalógica" image="mecalogica.jfif" link="#">
          <ProjectDescription/>
        </Project>
      </div>
      <a
        href="https://github.com/DarthKenar?tab=repositories"
        className="btn btn-show-all"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-github"
        >
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
        </svg>
        Ver todos
        <i className="fas fa-chevron-right" />
      </a>
    </section>
  )
}