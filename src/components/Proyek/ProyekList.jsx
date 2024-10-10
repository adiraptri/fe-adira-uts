import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import './ProyekList.css'; 

const ProyekList = () => {
  const [Proyek, setProyek] = useState([]);

  useEffect(() => {
    getProyek();
  }, []);

 
  const getProyek = async () => {
    try {
      const response = await axios.get("http://localhost:3001/proyek");
      setProyek(response.data);
    } catch (error) {
      console.error("Error fetching proyek:", error);
    }
  };


  const deleteProyek = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/proyek/delete/${id}`);
      getProyek();
    } catch (error) {
      console.error("Error deleting proyek", error);
    }
  };

  return (
    <div className="container-proyek">
      <div className="header">
        <div className="header-proyek">
          <h1>Proyek List</h1>
          <Link to="/proyek/add" className="add-btn">Add New</Link>
        </div>
      </div>

      <div className="table-wrapper">
        <table className="proyek-table">
          <thead>
            <tr>
              <th>No</th>
              <th>Nama Proyek</th>
              <th>Deskripsi</th>
              <th>Tanggal Mulai</th>
              <th>Tanggal Selesai</th>
            </tr>
          </thead>
          <tbody>
            {Proyek.map((proyek, index) => (
              <tr key={proyek.id}>
                <td>{index + 1}</td>
                <td>{proyek.nama}</td>
                <td>{proyek.TanggalMulai}</td>
                <td>{proyek.TanggalSelesai}</td>
                <td>
                  <button className="edit-btn">
                    <Link to={`/proyek/edit/${proyek.id}`}>Edit</Link>
                  </button>
                  <button
                    onClick={() => deleteProyek(proyek.id)}
                    className="delete-btn"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProyekList;
