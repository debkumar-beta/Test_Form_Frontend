// App.js
import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [dob, setDob] = useState("");
  const [favoriteSports, setFavoriteSports] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = {
      name,
      age,
      dob,
      favoriteSports,
    };

    axios
      .post(
        "https://vercel.com/debs-projects-e6332bcc/test-form-backend/8uk6GF2cMgaQpofsJVPUnHJQSy81",
        form
      )
      .then((res) => {
        console.log(res.data);
        toast.success("Form submitted successfully!");
      })
      .catch((err) => {
        console.error(err);
        toast.error("Failed to submit form.");
      });

    setName("");
    setAge("");
    setDob("");
    setFavoriteSports("");
  };

  return (
    <div className="App">
      <h2>Form Fillup</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />

        <label>Age:</label>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <br />

        <label>DOB:</label>
        <input
          type="date"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
        />
        <br />

        <label>Favorite Sports:</label>
        <input
          type="text"
          value={favoriteSports}
          onChange={(e) => setFavoriteSports(e.target.value)}
        />
        <br />

        <button type="submit">Submit</button>
      </form>
      <ToastContainer />
    </div>
  );
}

export default App;
