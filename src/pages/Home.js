import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Home.css";
import { toast } from "react-toastify";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

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
  const onDelete = async (id) => {
    if (
      window.confirm("are you sure that you want to delete that user record?")
    ) {
      const response = await axios.delete(`http://localhost:5000/users/${id}`);
      if (response.status === 200) {
        toast.success(response.data);
        fetchData();
      }
    }
  };

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
          {data.length === 0 ? (
            <p>No contacts saved, go to add tab to create contact</p>
          ) : (
            ""
          )}
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

                    <button
                      className='btn btnDelete'
                      onClick={() => {
                        onDelete(item.id);
                      }}
                    >
                      Delete
                    </button>

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
