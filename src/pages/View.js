import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const View = () => {
  const [userData, setUserData] = useState({});
  const { id } = useParams();
  useEffect(() => {
    fetchData();
  }, [id]);

  const fetchData = async () => {
    const response = await axios.get(`http://localhost:5000/users/${id}`);
    console.log(response.data[0]);
    setUserData(response.data[0]);
  };
  console.log("id", id);
  return (
    <div className='main'>
      <div className='viewPage'>
        <div className='heading'>User Contact Details</div>
        <div className='contactDetails'>
          <div>ID: {userData.id}</div>
          <div>Name: {userData.name}</div>
          <div>Email: {userData.email}</div>
          <div>Contact: {userData.contact}</div>
        </div>
      </div>
    </div>
  );
};

export default View;
