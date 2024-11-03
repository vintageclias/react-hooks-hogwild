import React, { useState } from 'react';  

const AddHogForm = ({ addHog }) => {  
  const [name, setName] = useState('');  
  const [specialty, setSpecialty] = useState('');  
  const [weight, setWeight] = useState('');  
  const [greased, setGreased] = useState(false);  
  const [highestMedal, setHighestMedal] = useState('');  
  const [image, setImage] = useState('');  

  const handleSubmit = (e) => {  
    e.preventDefault();  
    const newHog = { name, specialty, weight: parseFloat(weight), greased, highestMedal, image };  
    addHog(newHog);  
    setName('');  
    setSpecialty('');  
    setWeight('');  
    setGreased(false);  
    setHighestMedal('');  
    setImage('');  
  };  

  return (  
    <form onSubmit={handleSubmit}>  
      {}  
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />  
      <input type="text" placeholder="Specialty" value={specialty} onChange={(e) => setSpecialty(e.target.value)} required />  
      <input type="number" placeholder="Weight" value={weight} onChange={(e) => setWeight(e.target.value)} required />  
      <label>  
        Greased:   
        <input type="checkbox" checked={greased} onChange={() => setGreased(!greased)} />  
      </label>  
      <input type="text" placeholder="Highest Medal" value={highestMedal} onChange={(e) => setHighestMedal(e.target.value)} required />  
      <input type="text" placeholder="Image URL" value={image} onChange={(e) => setImage(e.target.value)} required />  
      <button type="submit">Add Hog</button>  
    </form>  
  );  
};  

export default AddHogForm;