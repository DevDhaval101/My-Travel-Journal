import React from 'react';
import Head from './component/Head';
import Card from './component/Card';
import data from './component/Data';


function App() {
  console.log(Card);

  
  const card = data.map ( (item) => {
    return (
      <Card 
        mainImg = {item.img}
        logoImg = {item.locationLogo}
        location = {item.location}
        link = {item.link}
        place = {item.place}
        date = {item.date}
        info = {item.discription}
      
      />
    )
  });


  return (
    <div>
      <Head />
      {card}
    </div>
    
  )
}

export default App;
