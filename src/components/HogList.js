import React from 'react';  
import HogTile from './HogTile';  

const HogList = ({ hogs, hideHog }) => {  
  return (  
    <div className="ui grid container">  
      {hogs.map(hog => (  
        <HogTile key={hog.name} hog={hog} hideHog={hideHog} />  
      ))}  
    </div>  
  );  
};  

export default HogList;