
import React, { useState } from 'react';

function Kuch() {
  const hehe = [
    { "id": 1, "name": "piyush", "desc": "piyush lives in goregaon" },
    { "id": 2, "name": "meet", "desc": "meet lives in borivali" },
    { "id": 3, "name": "nikhil", "desc": "nikhil lives in south" }
  ];

  // State to keep track of the current index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next person
  function nextPerson() {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % hehe.length); // Cycles back to 0 after the last index
  }

  // Function to go to the previous person
  function prevPerson() {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + hehe.length) % hehe.length); // Correctly wraps around to the last index
  }

  return (
    <div>
      <div className="name">
        <h2>{hehe[currentIndex].name}</h2>
        <p>{hehe[currentIndex].desc}</p>
      </div>
      <button onClick={prevPerson}>Previous</button>
      <button onClick={nextPerson}>Next</button>
    </div>
  );
}

export default Kuch;
