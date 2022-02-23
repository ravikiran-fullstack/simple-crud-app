import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useLocation, useParams } from "react-router-dom";
import "./AddEdit.css";

import { toast } from "react-toastify";

const AddEdit = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");

  const { id } = useParams();
  console.log("id", id);

  useEffect(() => {
    if (id) {
      console.log("id useEffect", id);
      getSingleUser(id);
    }
  }, [id]);

  const getSingleUser = async (id) => {
    console.log("function called");
    const response = await axios.get(`http://localhost:5000/users/${id}`);
    if (response.status === 200) {
      toast.success("data retrieved successfully");
      console.log(response.data[0]);
      setName(response.data[0].name);
      setEmail(response.data[0].email);
      setContact(response.data[0].contact);
    }
  };

  const history = useHistory();
  const addUserData = async () => {
    try {
      const result = await axios.post("http://localhost:5000/user", {
        name,
        email,
        contact,
      });
      if (result.status === 200) {
        console.log(result.data);
        toast(result.data);
      }
      setTimeout(() => {
        history.push("/");
      }, 500);
    } catch (error) {
      console.log(error);
    }
  };

  const updateData = async () => {
    try {
      const result = await axios.put(`http://localhost:5000/users/${id}`, {
        name,
        email,
        contact,
      });
      if (result.status === 200) {
        console.log(result.data);
        toast(result.data);
      }
      setTimeout(() => {
        history.push("/");
      }, 500);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, contact);
    if (!id) {
      addUserData();
    } else {
      updateData();
    }
  };

  return (
    <div style={{ marginTop: "100px" }}>
      <form
        style={{
          margin: "auto",
          padding: "15px",
          maxWidth: "400px",
          alignContent: "center",
        }}
        onSubmit={handleSubmit}
      >
        <div>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            name='name'
            id='name'
            placeholder='Enter Name ...'
            onChange={(e) => setName(e.target.value)}
            value={name}
            required
          />
        </div>

        <div>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            name='email'
            id='email'
            placeholder='Enter Email ...'
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
        </div>

        <div>
          <label htmlFor='contact'>Contact</label>
          <input
            type='number'
            name='contact'
            id='contact'
            placeholder='Enter Contact Number ...'
            onChange={(e) => setContact(e.target.value)}
            value={contact}
            required
          />
        </div>
        <div>
          <button type='submit'>{id ? "Update" : "Add User"}</button>
        </div>
      </form>
    </div>
  );
};

export default AddEdit;
