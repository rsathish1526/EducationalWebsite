import "./Hero.css"
import heroPeople from "../../assets/hero-people.png"
import reviewers from "../../assets/hero-reviewers.png"
import playIcon from "../../assets/play.png"

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-inner">
        <div className="hero-copy">
          <span className="hero-pill">Our Mentors</span>

          <h1>
            Elevate your Skills
            <br />
            with our <span>Experts</span>
          </h1>

          <img
            className="reviewers"
            src={reviewers}
            alt="2.5K reviews"
          />

          <div className="hero-actions">
            <a href="#courses" className="explore-btn">Explore courses</a>

            <button className="play-button" aria-label="How it works">
              <img src={playIcon} alt="" />
            </button>

            <span>How it works</span>
          </div>
        </div>

        <div className="hero-art">
          <img
            src={heroPeople}
            alt="Students learning together"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
