import React from 'react';
import '../App.css'; // Or the relevant CSS file

function AboutMe() {
  return (
    <section className="about-me">
      
      <h2 className='subtitles' >Hello World!!</h2>

      <p className="fade-up" style={{ animationDelay: '0.4s' }}>
        - I love problem solving and finding innovative solutions to complex issues through code. 👨🏽‍💻
      </p>
      <p className="fade-up" style={{ animationDelay: '0.8s' }}>
        - I'm a life long learner with a Bachelor of Science in Computer Science and a Bachelor of Biomedical Science from the University of Otago. 📚👨🏽‍🎓
      </p>
      <p className="fade-up" style={{ animationDelay: '1.2s' }}>
        - Deeply interested in exploring the convergence between Cybersecurity and Network Security. 🤖🪪
      </p>
      <p className="fade-up" style={{ animationDelay: '1.6s' }}>
        - Outside of my Education I am an avid cricket player, guitarist and sprinter. 🏏🎸🏃🏽‍♂️
      </p>
    </section>
  );
}

export default AboutMe;
