function About() {
    const name = "Mohammed Azhar";
    const profession = "Full Stack Developer";

    return(
        <section id="about" className="about-section">
        <h2>About Me</h2>
        <p>
          Hello , I am {name} and passionate {profession} , I love building web
          application that solve real world problmes
        </p>
      </section>
    )
}

export default About;