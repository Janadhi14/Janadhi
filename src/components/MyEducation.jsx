import React from 'react';
import '../App.css'; // Or the relevant CSS file

const educationTimeline = [
  {
    period: '2022 - 2024',
    institution: 'UNIVERSITY OF OTAGO',
    degree: 'Bachelor Of Science, Computer Science',
    description: 'Covered multiple programming languages; Java, Python, HTML, CSS, JavaScript, C, SQL. Topics: APIs, Software Development, Networks and Distributed Systems, Cryptography, Security, Database Management, Algorithms and Datastructures, Web Design and Applications.'
  },
  {
    period: '2019 - 2021',
    institution: 'UNIVERSITY OF OTAGO',
    degree: 'Bachelor Of Biomedical Science, Functional Human Biology',
    description: 'Covered topics in Human Physiology (Renal, Respiratory, Cardiovascular and Gastrointestinal), Anatomy and Pathology. Research on Hyperuricemia\'s impact on Pancreatic Beta Cell Differentiation.'
  },

];

const certificates = [
  {
    name: 'Machine Learning Specialization',
    imageUrl: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F125559383%2F317212851579%2F1%2Foriginal.20210208-232017?w=512&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C2246%2C2246&s=40aa0fb13fe40ce86241ae7b8fc8caea'
  },
  {
    name: 'Google IT Support Professional Certificate',
    imageUrl: 'https://steelbluemedia.com/wp-content/uploads/2019/06/new-google-favicon-512.png'
    // link to certification
  },
  {
    name: 'Google Cyber Security Professional Certificate',
    imageUrl: 'https://steelbluemedia.com/wp-content/uploads/2019/06/new-google-favicon-512.png'
  },
  {
    name: 'Licence Controller Qualification',
    imageUrl: 'data:image/png;base64,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'
  },
  {
    name: 'New Zealand Full Drivers Licence',
    imageUrl: 'https://yt3.googleusercontent.com/ytc/AIf8zZQ7UgUNPzA9kc1YgVWO2AOMqCQHWaq-OtHgaUXy=s900-c-k-c0x00ffffff-no-rj'
  },
  
 
];

function MyEducation() {
  const delayIncrement = 0.2;
  return (
    <section className="about-me">
       <div className="education-container">
        <div className="education-section">
          <h3>My Education</h3>
          <ul className="timeline">
            {educationTimeline.map((edu, index) => (
              <li 
                key={index} 
                className="timeline-item"
                style={{ animationDelay: `${index * delayIncrement}s` }}
              >
                <div className="timeline-content">
                  <h4 className="timeline-institution">{edu.institution}</h4>
                  <span className="timeline-period">{edu.period}</span>
                  <span className="timeline-degree">{edu.degree}</span>
                  <p className="timeline-description">{edu.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="certificates-section">
        <h3>Certificates</h3>
        <ul className="certificates-list">
          {certificates.map((cert, index) => (
            <li
              key={index}
              className="certificate-item"
              style={{ animationDelay: `${index * delayIncrement}s` }}
            >
              <img src={cert.imageUrl} alt={cert.name} className="certificate-image" />
              <div className="certificate-info">
                <h4>{cert.name}</h4>
               
              </div>
            </li>
          ))}
        </ul>
      </div>
     
      </div>
    </section>
  );
}

export default MyEducation;
