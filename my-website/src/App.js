import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import langChainImage from './assets/langchain.png'; 
import myCatImage from './assets/mycat.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [activeSection, setActiveSection] = useState('about');

  const hackathonGameVideoId = "JEBriG7Auyw"; 
  const hackathonGameThumbnail = `https://img.youtube.com/vi/${hackathonGameVideoId}/0.jpg`;

  const renderSection = () => {
    switch (activeSection) {
      case 'about':
        return (
          <section id="about" className="mb-4">
            <h2>
              About Me
            </h2>
            <div className="content show">
              <p>
                Software Engineer with a Master's degree, specializing in full-stack development and cloud technologies. Experienced in Java, Python, and JavaScript frameworks with a track record of multiple internships and contributions to open-source projects.
              </p>
              <img src={myCatImage} alt="mycat" className="cat-image" />
              <p>Yes, he's my cat. Contact me if you want to see more of his cute pictures</p>
            </div>
          </section>
        );
      case 'experiences':
        return (
          <section id="experiences" className="mb-4">
            <h2>
              Past Interesting Coding Experiences
            </h2>
            <div className="content show">
              <div className="project-details">
                <h3>Game Made on Hackathon</h3>
                <p>"Be The Detective" is an immersive first-player experience that transforms you into a sleuth on your mobile device.</p>
                <p>Join our game server and dive into a world of mystery where your choices shape the narrative:</p>
                <ul>
                  <li><strong>Interactive Gameplay:</strong> Engage with a story that responds to your every move.</li>
                  <li><strong>Dynamic Environment:</strong> Explore scenarios that adapt in real time to your investigative tactics.</li>
                  <li><strong>Powered by AI:</strong> Utilizing OpenAI API, every case unfolds in a unique fashion, providing a fresh challenge each time.</li>
                </ul>
                <a href={`https://www.youtube.com/watch?v=${hackathonGameVideoId}`} target="_blank" rel="noopener noreferrer" className="video-thumbnail">
                  <div style={{ backgroundImage: `url(${hackathonGameThumbnail})` }} className="video-thumbnail-image">
                    <FontAwesomeIcon icon={faPlayCircle} className="video-play-icon" />
                  </div>
                </a>
              </div>
              <div className="project-details">
                <h3>E-commerce Platform Developed in Part Time</h3>
                <p>Say goodbye to sticker shock and rediscover the joy of bargain hunting with the app I've helped develop.</p>
                <ul>
                  <li><strong>Reviving Excitement:</strong> Experience the thrill of snagging unexpected deals that make shopping exhilarating again.</li>
                  <li><strong>Large Community:</strong> Join over 500,000 users who share your passion for finding the best value.</li>
                  <li><strong>Daily Discoveries:</strong> Delight in new, life-changing bargains uncovered every single day.</li>
                </ul>
                <p>
                  Product Demo:
                  </p>
                  <a href="https://www.lordofsavings.com/" target="_blank" rel="noopener noreferrer">LordOfSavings</a>
              </div>
            </div>
          </section>
        );
      case 'opensource':
        return (
          <section id="opensource" className="mb-4">
            <h2>
              Open Source Projects that I recommend and have contributions
            </h2>
            <div className="content show">
              <div className="project-details">
                <h3>Langchain</h3>
                <p>Take your LLM application from prototype to production with ease. LangChain offers an AI-first toolkit and flexible abstractions designed to build context-aware, reasoning applications.</p>
                <ul>
                  <li><strong>Context-Aware:</strong> Seamlessly integrates language models with various sources of context, including prompt instructions, few-shot examples, and grounding content.</li>
                  <li><strong>Reasoning Capability:</strong> Empowers language models to reason and make decisions based on the provided context and to determine appropriate actions.</li>
                </ul>
                <p>LangChain is the framework of choice for developing sophisticated applications that leverage the full potential of language models.</p>
                <a href="https://www.langchain.com/" target="_blank" rel="noopener noreferrer">LangChain</a>
                <img src={langChainImage} alt="Langchain Description" className="langchain-image" />
              </div>
            </div>
          </section>
        );
      default:
        return null;
    }
  };

  return (
    <div className="App container mt-5">
      <header className="App-header mb-5">
        <h1>Welcome to My Portfolio</h1>
      </header>

      <nav className="navbar">
        <a href="#about" onClick={() => setActiveSection('about')}>About Me</a>
        <a href="#experiences" onClick={() => setActiveSection('experiences')}>Experiences</a>
        <a href="#opensource" onClick={() => setActiveSection('opensource')}>Open Source</a>
      </nav>

      <main>
        {renderSection()}
      </main>
    </div>
  );
}

export default App;
