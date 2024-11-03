import React, { useState } from 'react';  

const HogTile = ({ hog, hideHog }) => {  
  const [showDetails, setShowDetails] = useState(false);  

  const toggleDetails = () => {  
    setShowDetails(!showDetails);  
  };  

  return (  
    <div className="ui eight wide column">  
      <div className="ui card">  
        <div className="image">  
          <img src={hog.image} alt={hog.name} />  
        </div>  
        <div className="content">  
          <h3>{hog.name}</h3>  
          <button onClick={toggleDetails}>Toggle Details</button>  
          <button onClick={() => hideHog(hog.name)}>Hide</button>  
          {showDetails && (  
            <div>  
              <p>Specialty: {hog.specialty}</p>  
              <p>Weight: {hog.weight}</p>  
              <p>Greased: {hog.greased ? "Yes" : "No"}</p>  
              <p>Highest Medal: {hog.highestMedal}</p>  
            </div>  
          )}  
        </div>  
      </div>  
    </div>  
  );  
};  

export default HogTile;