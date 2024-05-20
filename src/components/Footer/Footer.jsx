export default function Footer(){
  return(
    <footer>
      <div className="phrase">
        <em>
          Lo único que podemos decidir es qué hacer con el tiempo que se nos ha
          dado.
        </em>
        <h5>
          <span>Mithrandir</span>
        </h5>
      </div>
      <p
        style={{
          display: "flex",
          flexDirection: "row-reverse",
          justifyContent: "center",
          justifyItems: "center",
          alignItems: "center",
          gap: 10
        }}
      >
        <a href="https://f-vega.com" target="_blank" rel="noopener noreferrer">
          Federico Vega
        </a>
        <svg
          style={{ padding: "0%", display: "block", top: "-5%" }}
          xmlns="http://www.w3.org/2000/svg"
          width={16}
          height={16}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-coffee"
        >
          <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
          <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
          <line x1={6} y1={1} x2={6} y2={4} />
          <line x1={10} y1={1} x2={10} y2={4} />
          <line x1={14} y1={1} x2={14} y2={4} />
        </svg>
      </p>
    </footer>
  )
}