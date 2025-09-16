import React, { useState } from "react";
import "./User.css";
import axios from "axios";

const User = () => {
    const [userData, setUserData] = useState({
      username: "",
      mobile: "",
    });


    const handleChange=(e)=>{
        setUserData({...userData,[e.target.name]:e.target.value})
    }


    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.post("https://jsonplaceholder.typicode.com/users",userData)
        .then(res => console.log(res))

    }

    const handleUpdate=(e)=>{
          e.preventDefault();
           axios.put("https://jsonplaceholder.typicode.com/users/1", userData)
            .then(res => console.log(res))
    }


        const handleDelete = (e) => {
          e.preventDefault();
          axios
            .delete("https://jsonplaceholder.typicode.com/users/1")
            .then((res) => console.log(res));
        };
  return (
    <section className="signup-section">
      <div className="signup-container">
        <h2 className="signup-title">Sign Up</h2>

        {/* Username Input */}
        <div className="form-group">
          <input
            type="text"
            className="form-input"
            placeholder="Username"
            name="username"
            value={userData.username}
            onChange={handleChange}
            autoComplete="off"
          />
        </div>

        {/* Mobile Number Input */}
        <div className="form-group">
          <input
            type="text"
            className="form-input"
            placeholder="Mobile Number"
            name="mobile"
            value={userData.mobile}
            onChange={handleChange}
            autoComplete="off"
          />
        </div>

        {/* Sign Up Button */}
        <button className="signup-btn" onClick={handleSubmit}>
          Sign Up
        </button>
        <button className="signup-btn" onClick={handleUpdate}>
          Update
        </button>
        <button className="signup-btn" onClick={handleDelete}>
          DELETE
        </button>
      </div>
    </section>
  );
};

export default User;
