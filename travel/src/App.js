import React, { useState } from "react";
import data from "./data";
import  Tours  from "./Components/Tours";

const App = () => {
  const[tours,settours]=useState(data);

  function removetours(id){
    const newtours=tours.filter((tour)=>
        tour.id!==id
    )
    settours(newtours)
  }
  function refresh(){
    settours(data)
  }
  if(tours.length==0){
    return(
      <div className="refresh">
        <h1>No tours left</h1>
        <button onClick={refresh}>Refresh</button>
      </div>
    )
  }else{
  return (
    <div className="app">
      <Tours tours={tours} removetours={removetours}></Tours>
    </div>
  )
  }
};

export default App;
