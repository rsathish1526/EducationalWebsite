import "./Mentors.css"
import sophie from "../../assets/mentor-sophie.png"
import colin from "../../assets/mentor-colin.png"

function MentorCard({ image, name, role, watch, followers }) {
  return (
    <article className="mentor-card">
      <div className="mentor-photo">
        <img src={image} alt={name} />
      </div>

      <div className="mentor-info">
        <h3>{name}</h3>
        <p>{role}</p>

        <div className="mentor-stats">
          <div>
            <strong>{watch}</strong>
            <span>◷ &nbsp;Watch time</span>
          </div>
          <div>
            <strong>{followers}</strong>
            <span>♧ &nbsp;Followers</span>
          </div>
        </div>

        <a href="#profile">View profile →</a>
      </div>
    </article>
  )
}

function Mentors() {
  return (
    <section className="mentors" id="mentors">
      <div className="mentors-heading">
        <span>Our Team</span>
        <h2>Learn from Industry Experts</h2>
        <p>
          Gain insights from industry experts and master real-world skills for career
          <br />
          growth and professional development
        </p>
      </div>

      <div className="mentor-grid">
        <MentorCard
          image={sophie}
          name="Sophie Johnson"
          role="Data Analyst Mentor"
          watch="20M+"
          followers="10K+"
        />

        <MentorCard
          image={colin}
          name="Colin Munro"
          role="AI/ML Expert Mentor"
          watch="35M+"
          followers="12K+"
        />
      </div>

      <button className="see-all">See all</button>
    </section>
  )
}

export default Mentors
