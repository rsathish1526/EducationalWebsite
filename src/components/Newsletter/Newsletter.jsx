import "./Newsletter.css"
import leftPerson from "../../assets/newsletter-left.png"
import rightPerson from "../../assets/newsletter-right.png"

function Newsletter() {
  return (
    <section className="newsletter" id="blogs">
      <div className="newsletter-banner">
        <img className="newsletter-person left" src={leftPerson} alt="Student" />

        <div className="newsletter-content">
          <h2>
            Subscribe to our
            <br />
            newsletter for updates
          </h2>

          <p>
            Stay informed with the latest news, insights, and updates
            <br />
            delivered straight to your inbox
          </p>

          <form className="newsletter-form">
            <input type="email" placeholder="Email address" />
            <button type="submit">Submit</button>
          </form>
        </div>

        <img className="newsletter-person right" src={rightPerson} alt="Student" />
      </div>
    </section>
  )
}

export default Newsletter
