import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get("http://localhost:5000/users");
        if (result.status === 200) {
          setData(result.data);
        }
        setData(result.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className='home'>
      <table className='userTable'>
        <thead>
          <tr>
            <th className='theadStyle'>No.</th>
            <th className='theadStyle'>Name</th>
            <th className='theadStyle'>Email</th>
            <th className='theadStyle'>Contact</th>
            <th className='lastColumn'>Action</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((item, index) => {
              return (
                <tr key={index}>
                  <th className='theadStyle' scope='row'>
                    {index + 1}
                  </th>
                  <td className='theadStyle'>{item.name}</td>
                  <td className='theadStyle'>{item.email}</td>
                  <td className='theadStyle'>{item.contact}</td>
                  <td className='lastColumn'>
                    <Link to={`/update/${item.id}`}>
                      <button className='btn btnEdit'>Edit</button>
                    </Link>

                    <button className='btn btnDelete'>Delete</button>

                    <Link to={`/view/${item.id}`}>
                      <button className='btn btnView'>View</button>
                    </Link>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
