import axios from 'axios'
import React, { useEffect, useState } from 'react'

const App = () => {


  const [user,setUser]=useState([])
  const [errorMsg,setErrorMsg]=useState("")

  useEffect(()=>{
    // fetch("https://jsonplaceholder.typicode.com/users")
    // .then((res)=>res.json())
    // .then((data)=>console.log(data))


    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log(res.data);
        setUser(res.data);
      })
      .catch((err) => setErrorMsg(err.message));

  },[])
  return (
    <div>
      <div>
        {user.map((userdata) => (
          <div
            style={{
              border: "1px solid black",
              margin: "10px",
              padding: "10px",
            }}
            key={userdata.id}
          >
            <p>{userdata.id}</p>
            <p>{userdata.name}</p>
            <p>{userdata.phone}</p>
          </div>
        ))}
      </div>
      <p>{errorMsg}</p>
    </div>
  );
}

export default App