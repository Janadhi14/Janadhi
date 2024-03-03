import React from 'react';
import '../App.css'; // Or the relevant CSS file

function AboutMe() {
  return (
    <section className="about-me">
      
      <h2 className='fadeup' >Hello World!!</h2>

      <p className="fade-up" style={{ animationDelay: '0.4s' }}>
        - I love problem solving and coding. 💆🏽‍♂️
      </p>
      <p className="fade-up" style={{ animationDelay: '0.8s' }}>
        - I'm a life long learner with a Bachelors Degree in Biomedical Science and currently completing my Degree in Computer Science at the University of Otago. 📚👨🏽‍🎓
      </p>
      <p className="fade-up" style={{ animationDelay: '1.2s' }}>
        - Deeply interested in exploring the convergence of Machine Learning and Software Engineering. 🤖🪪
      </p>
    </section>
  );
}

export default AboutMe;
