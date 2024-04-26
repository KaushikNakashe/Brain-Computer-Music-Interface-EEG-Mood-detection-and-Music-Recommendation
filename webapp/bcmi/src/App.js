import './App.css';
import React, { useState } from 'react';
import axios from 'axios';
import ParticlesComponent from './components/particles';

function App() {
  const [currentMood, setCurrentMood] = useState('');

  const handleUserSelection = (userId) => {
    axios.post('http://localhost:5000/predict', { user_id: userId })
      .then(response => {
        console.log('Response:', response); // Log the entire response object
        setCurrentMood(response.data.current_mood);
      })
      .catch(error => {
        console.error('Error predicting:', error);
      });
  };

  const mapMoodToString = (mood) => {
    switch (mood) {
      case '0':
        return 'Disgust/Angry';
      case '1':
        return 'Happy/Funny';
      case '2':
        return 'Calm/Peaceful';
      case '3':
        return 'Sad/Quiet';
      default:
        return '';
    }
  };
  // Function to render mood based on its value
  const renderMood = () => {
    return mapMoodToString(currentMood);
  };

  return (
    <div className="App">
      <div className="particles-container">
        <ParticlesComponent id="particles" />
      </div>
      <header className="App-header">
        <h1 className='big'>
          Brain Computer Music Interface
        </h1>
        <h4 className="small">
          Choose a user for Music Recommendations: 
        </h4>
      </header>
      <div className="button-container">
        <button className="b1" onClick={() => handleUserSelection(1)}>User 1 </button>
        <button className="b2" onClick={() => handleUserSelection(2)}>User 2 </button>
        <button className="b3" onClick={() => handleUserSelection(3)}>User 3 </button>
        <button className="b4" onClick={() => handleUserSelection(4)}>User 4 </button>
      </div>
      <div className="mood-predictions">
        <div className="mood-window">
         <h2>Your Current Mood:</h2>
         <p className="moodc">{renderMood()}</p>
        </div>
<div className="songs-predicted">
  <h2>Songs Predicted Playlist:</h2>
  {/* Display iframe for each mood */}
  {currentMood === '0' && (
    <iframe
    title="Angry Playlist"
    style={{ borderRadius: '12px', marginTop: '10px' }} /* Add margin-top */
    src="https://open.spotify.com/embed/album/6tWmAwsXBU2R3gub5p67Hd?utm_source=generator"
    width="100%"
    height="352"
    frameBorder="0"
    allowFullScreen=""
    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
    loading="lazy"
  ></iframe>
  
  )}
  {currentMood === '1' && (
    <iframe
      title="Happy Playlist"
      style={{ borderRadius: '12px', marginTop: '10px' }}
      src="https://open.spotify.com/embed/playlist/222IptTOxogeUBi0m1Yqwd?utm_source=generator"
      width="100%"
      height="352"
      frameBorder="0"
      allowFullScreen=""
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    ></iframe>
  )}
  {currentMood === '2' && (
    <iframe
      title="Calm Playlist"
      style={{ borderRadius: '12px', marginTop: '10px' }}
      src="https://open.spotify.com/embed/playlist/4kOdiP5gbzocwxQ8s2UTOF?utm_source=generator"
      width="100%"
      height="352"
      frameBorder="0"
      allowFullScreen=""
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    ></iframe>
  )}
  {currentMood === '3' && (
    <iframe
      title="Sad Playlist"
      style={{ borderRadius: '12px', marginTop: '10px' }}
      src="https://open.spotify.com/embed/playlist/75uOpSRxXAYm6ZXP8yZ2DR?utm_source=generator"
      width="100%"
      height="352"
      frameBorder="0"
      allowFullScreen=""
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    ></iframe>
  )}
</div>
      </div>
    </div>
  );
}

export default App;
