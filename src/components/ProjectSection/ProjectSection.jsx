import Project from "./Project/Project"
export default function ProjectSection(){
  return(
    <section id="projects" className="projects-section">
      <h2 className="projects-section-header">Proyectos</h2>
      <div className="projects-grid">
        <Project name="VidelaSpect" image="videlaspect.jpg">
          <h2>Descripción</h2>
          <p>Videla Spect es un sistema de registro para docentes de la Escuela Ingeniero Ricardo Videla n°4012. Su propósito es agilizar y optimizar el proceso de registro de entrada y salida del personal. Para asegurar la precisión, se verifica el Documento de Identidad y la fotografía del rostro del personal, validada por inteligencia artificial.</p>
          <p>Este sistema ofrece un panel de administración completo, envío de resúmenes de registros por correo electrónico y la posibilidad de eliminar registros de manera automática o manual. Permite activar o desactivar la validación por IA y ajustar su sensibilidad, evitando así inconvenientes con cámaras de baja resolución. Para proteger los datos, se utiliza autenticación por token y encriptación de contraseñas.</p>
          <p>Videla Spect se desarrolló con tecnologías robustas y modernas como Typescript, Javascript, Node.Js, Express.Js, HTMX, TypeORM y HandleBars, garantizando un rendimiento óptimo y una experiencia de usuario fluida.</p>
          <h2>Despliegue</h2>
          <p>Videla Spect está alojado en un servidor privado ubicado dentro de las instalaciones de la escuela.</p>
          <h2>Repositorio</h2>
          <p>El repositorio de código de Videla Spect es privado.</p>
          <h2>Explicación en YouTube</h2>
          <p><a rel="noopener noreferrer" target="_blank" className="project-link" href="https://www.youtube.com/watch?v=1TA07KAbR10">https://www.youtube.com/watch?v=1TA07KAbR10</a></p>
        </Project>
        <Project name="Pomodoro Neumorphism" image="pomodoroneumorphism.webp" link="https://darthkenar.github.io/PomodoroNeumorphism/"></Project>
        <Project name="El Canario Regionales" image="elCanarioRegionales.webp" link="http://federicovega.pythonanywhere.com/"></Project>
        <Project name="Word Learn Spanish" image="wordlearnspanish.webp" link="https://github.com/DarthKenar/WordlearnSpanish"></Project>
        <Project name="El Canario Matemático" image="elCanarioMatematico.png" link="#"></Project>
        <Project name="Mecalógica" image="mecalogica.jfif" link="#"></Project>
      </div>
      <a
        href="https://github.com/DarthKenar?tab=repositories"
        className="btn btn-show-all link-github"
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