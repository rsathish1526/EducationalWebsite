import "./Footer.css"

function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-inner">
        <div className="footer-brand">
          <h3><span>ϟ</span> Sparkly</h3>
          <p>Learn from experts.<br />Grow your skills.</p>

          <form className="footer-form">
            <input type="email" placeholder="Email address" />
            <button type="submit">Submit</button>
          </form>
        </div>

        <div className="footer-column">
          <h4>Company</h4>
          <a href="#home">Home</a>
          <a href="#about">About us</a>
          <a href="#mentors">Mentors</a>
          <a href="#contact">Contact us</a>
        </div>

        <div className="footer-column">
          <h4>Courses</h4>
          <a href="#courses">UI/UX Designing</a>
          <a href="#courses">Web Development</a>
          <a href="#courses">Data Visualization</a>
          <a href="#courses">Digital Marketing</a>
          <a href="#courses">AI/ML</a>
        </div>

        <div className="footer-column app-column">
          <h4>Download our app</h4>
          <button> &nbsp; App store &nbsp; ›</button>
          <button>▶ &nbsp; Play store &nbsp; ›</button>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© Sparkly Inc. All Rights Reserved.</span>
        <div className="socials">
          <span>𝕏</span>
          <span>f</span>
          <span>◎</span>
          <span>in</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
