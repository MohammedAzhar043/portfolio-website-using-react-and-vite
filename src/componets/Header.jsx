function Header(){

    const name = "Mohammed Azhar";
    const profession = "Full Stack Developer";

    return (

        <header className="header">
        <h1>{name}</h1>
        <p>{profession}</p>
        <nav>
          <a href="#about">About</a>
          <a href="#projects">projects</a>
          <a href="#contact">Contacts</a>
        </nav>
      </header>
    )
}

export default Header;