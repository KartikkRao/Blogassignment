import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ListItems from './Listitems';
import Navbar from './Navbar';
import Genre from './Genre';
import Welcome from './Welcome';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
function List() {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [uniqueTypes, setUniqueTypes] = useState([]);

  useEffect(() => {
    axios.get("/blogs.json")
      .then((res) => {
        setData(res.data);
        // Extract unique types using a Set
        const types = new Set(res.data.map(item => item.type));
        setUniqueTypes([...types]);
      })
      .catch((error) => setError(error.message));
  }, []);

  if (error) {
    return <h2>Error: {error}</h2>;
  }

  return (
    
    <div className="whole">
      <div className="dev1">
      <Genre></Genre>
      </div>
      <div className="dev2">
      <Welcome></Welcome>
      </div>
      <div className="dev3">
      <div className='list'>
        {uniqueTypes.map(type => (
          <div key={type} id={type}>
          <h1>{type}</h1>
          <ListItems type={type} />
          </div>
        ))}
      </div>
      </div>
    </div>
     

    
  );
}

export default List;
