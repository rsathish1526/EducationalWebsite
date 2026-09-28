import "./Navbar.css"

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-inner">
        <a href="#home" className="brand">
          <span className="brand-mark">ϟ</span>
          <span>Sparkly</span>
        </a>

        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About us</a>
          <a href="#courses">Courses <span className="chevron">⌄</span></a>
          <a href="#mentors" className="active">Mentors</a>
          <a href="#blogs">Blogs</a>
          <a href="#contact">Contact us</a>
        </nav>

        <a href="#register" className="register-btn">Register now</a>
      </div>
    </header>
  )
}

export default Navbar
