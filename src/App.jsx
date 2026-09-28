import "./index.css"

import navbarImage from "./assets/navbar.png"
import heroImage from "./assets/hero.png"
import newsletterImage from "./assets/newsletter.png"
import mentorsImage from "./assets/mentors.png"
import joinImage from "./assets/join.png"
import footerImage from "./assets/footer.png"

function App() {
  return (
    <div className="page">

      <img
        src={navbarImage}
        alt="Sparkly navigation"
        className="design-section navbar-image"
      />

      <img
        src={heroImage}
        alt="Sparkly hero section"
        className="design-section hero-image"
      />

      <img
        src={newsletterImage}
        alt="Newsletter section"
        className="design-section newsletter-image"
      />

      <img
        src={mentorsImage}
        alt="Industry mentors section"
        className="design-section mentors-image"
      />

      <img
        src={joinImage}
        alt="Join our team section"
        className="design-section join-image"
      />

      <img
        src={footerImage}
        alt="Sparkly footer"
        className="design-section footer-image"
      />

    </div>
  )
}

export default App