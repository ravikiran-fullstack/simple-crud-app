import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const View = () => {
  const [userData, setUserData] = useState({});
  const { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`http://localhost:5000/users/${id}`);
      console.log(response.data[0]);
    };

    fetchData();
  }, [id]);
  console.log("id", id);
  return <div>View</div>;
};

export default View;
