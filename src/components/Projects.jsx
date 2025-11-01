export default function Projects() {
  const sample = [
    {
      title: 'Project 1',
      desc: 'E-Commerce Website Using Python Full Stack',
      link: '#'
    },
    {
      title: 'Project 2',
      desc: 'Mobile app using React-Native and Mern Stack',
      link: '#'
    }
  ]

  return (
    <section id="projects" className="projects container">
      <h2>Projects</h2>
      <div className="grid">
        {sample.map((p) => (
          <article key={p.title} className="card project-card">
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
            <p>
              <a href={p.link} target="_blank" rel="noreferrer">
                View
              </a>
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}
