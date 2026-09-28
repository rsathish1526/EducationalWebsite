import "./JoinTeam.css"
import person from "../../assets/join-person.png"

function JoinTeam() {
  return (
    <section className="join-team" id="about">
      <div className="join-inner">
        <div className="join-copy">
          <span>Become a Mentor</span>

          <h2>
            Join Our Team —
            <br />
            Inspire Learners Today!
          </h2>

          <p>
            Become a part of our passionate educator community and share
            <br />
            your expertise with learners worldwide. As an instructor, you'll
            <br />
            create engaging courses, guide students, and help shape their
            <br />
            personal and professional success
          </p>

          <button>Join our team</button>
        </div>

        <div className="join-art">
          <img src={person} alt="Experienced tutor" />
          <div className="tutor-badge">
            <strong>250+</strong>
            <span>Experienced Tutors</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default JoinTeam
