import React from 'react';
import '../App.css'; // Or the relevant CSS file
import tensorflow from '../assets/images/Tensorflow_logo.svg.png';
import pyTorch from '../assets/images/pytorch.png';
import sklearn from '../assets/images/sklearn.png';
import numpy from '../assets/images/numpy-1.svg';
import pandas from '../assets/images/pandas.svg'
import keras from '../assets/images/keras.png'
import vite from '../assets/images/vite.png'
import python from '../assets/images/python.png'
import csharp from '../assets/images/csharp.png'
import c from '../assets/images/c.png'
import node from '../assets/images/node-js.svg'


// Example data for Frontend and Backend skills with image URLs
const frontendSkills = [
  {
    name: 'HTML',
    imageUrl: 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/html-icon.png'
  },
  {
    name: 'CSS',
    imageUrl: 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/css-icon.png'
  },
  {
    name: 'JavaScript',
    imageUrl: 'https://symbols.getvecta.com/stencil_25/41_javascript.0ca26ec4ab.svg'
  },
  {
    name: 'React',
    imageUrl: 'https://www.svgrepo.com/show/452092/react.svg'
  },
  {
    name: 'vite',
    imageUrl: vite
  },

   {
    name: 'Angular',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png'
  },
  {
    name: 'Vue',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/2367px-Vue.js_Logo_2.svg.png'
  },

];

const backendSkills = [
  {
    name: 'Python',
    imageUrl: python
  },
  {
    name: 'Java',
    imageUrl: 'https://cdn.iconscout.com/icon/free/png-512/free-java-59-1174952.png?f=webp&w=512'
  },
  {
    name: 'C#',
    imageUrl: csharp
  }, 
  {
    name: 'C',
    imageUrl:c
  },

  {
    name: 'SQL',
    imageUrl: 'https://symbols.getvecta.com/stencil_28/61_sql-database-generic.90b41636a8.svg'
  },
  {
    name: 'Node.js',
    imageUrl: node
  },
];

const MLstack = [
  {
    name: 'TensorFlow',
    imageUrl: tensorflow
  },
  {
    name: 'Keras',
    imageUrl: keras
  },
  {
    name: 'Pytorch',
    imageUrl: pyTorch
  },
  {
    name: 'SkLearn',
    imageUrl: sklearn
  },
  {
    name: 'Pandas',
    imageUrl: pandas
  },
  {
    name: 'Numpy',
    imageUrl: numpy
  },
  
  
];
function Skills() {
  return (
    <section className="fade-in-slide">
      
      <h2 class = 'subtitles'>My Skills</h2>

      <div className="skills-container">
        <div className="frontend-skills">
          <h3>Frontend</h3>
          <div className="skills-grid">
            {frontendSkills.map((skill, index) => (
              <div key={index} className="skill-item">
                <img src={skill.imageUrl} alt={skill.name} className="skill-image" />
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="backend-skills">
          <h3>Backend</h3>
          <div className="skills-grid">
            {backendSkills.map((skill, index) => (
              <div key={index} className="skill-item">
                <img src={skill.imageUrl} alt={skill.name} className="skill-image" />
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="frontend-skills">
          <h3>ML Frameworks</h3>
          <div className="skills-grid">
            {MLstack.map((skill, index) => (
              <div key={index} className="skill-item">
                <img src={skill.imageUrl} alt={skill.name} className="skill-image" />
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
