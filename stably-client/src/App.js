import React, { useState } from "react";
import { useForm } from "react-hook-form";
import './App.css';

const apiUrl = "https://stably.herokuapp.com/ap1/v1";

const App = () =>  {
  const { register, handleSubmit, handleChange } = useForm();
  const [ data, setData ] = useState(null);
  const  [loading, setLoading] = useState(false);

  const getPrimeNumber = (data) => {    
    setLoading(true);
    setData(null);
    fetch(`${apiUrl}/get-highest-prime-number`, {
      method: "post",
      headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
        },
      body: JSON.stringify({
        "number": data.number
      })
    })
    .then(resp => resp.json())
    .then(
        response => {
            setData(response.data)
            setLoading(false)
        }, 
        err => {
            console.log(err);
        }
    )
  }
  

  return (
    <div className="App">
      <form onSubmit={handleSubmit(getPrimeNumber)}>
          <div className="inner">
          
            <input {...register('number')} type="number" name="number" placeholder="Enter number here" onChange={handleChange} min="2" required/>
            <small>Enter a number and get the highest prime number less than it</small>
          </div>
          <button className={loading ? "loading":""}> {loading ? "":"Get Value"}  </button>
          <p className="answer" style={{display: !data && "none"}}>
            {data ? `Answer: ${data}` : null}
         </p>
         </form>
         
    </div>
  );
}

export default App;
