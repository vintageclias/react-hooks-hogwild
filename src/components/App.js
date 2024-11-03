import React, { useState } from 'react'; 
import 'semantic-ui-css/semantic.min.css'; 
import hogs from '../porkers_data';  
import Nav from './Nav';  
import HogList from './HogList';  
import FilterSort from './FilterSort';  
import AddHogForm from './AddHogForm';  
import './App.css'; 

function App() {  
  const [hogsData, setHogsData] = useState(hogs);  
  const [filterGreased, setFilterGreased] = useState(false);  
  const [sortOption, setSortOption] = useState('');  
  const [hiddenHogs, setHiddenHogs] = useState([]);  

  const handleFilterChange = (greased) => {  
    setFilterGreased(greased);  
  };  

  const handleSortChange = (option) => {  
    setSortOption(option);  
  };  

  const hideHog = (hogName) => {  
    setHiddenHogs([...hiddenHogs, hogName]);  
  };  

  const addHog = (newHog) => {  
    setHogsData([...hogsData, newHog]);  
  };  

  let filteredHogs = filterGreased  
    ? hogsData.filter(hog => hog.greased)  
    : hogsData;  

  if (sortOption) {  
    filteredHogs.sort((a, b) => {  
      if (sortOption === 'name') {  
        return a.name.localeCompare(b.name);  
      } else if (sortOption === 'weight') {  
        return a.weight - b.weight;  
      }  
      return 0;  
    });  
  }  

  filteredHogs = filteredHogs.filter(hog => !hiddenHogs.includes(hog.name));  

  return (  
    <div className="App">  
      <Nav />  
      <FilterSort onFilterChange={handleFilterChange} onSortChange={handleSortChange} />  
      <AddHogForm addHog={addHog} />  
      <HogList hogs={filteredHogs} hideHog={hideHog} />  
    </div>  
  );  
}  

export default App;

	

