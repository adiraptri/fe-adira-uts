import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import './ProgresList.css';

const ProgresProyek = () => {
  const [statusProyek, setStatusProyek] = useState([]);

  useEffect(() => {
    getStatusProyek();
  }, []);

  const getStatusProyek = async () => {
    try {
      const response = await axios.get("http://localhost:3001/status-proyek");
      setStatusProyek(response.data);
    } catch (error) {
      console.error("Error fetching status proyek:", error);
    }
  };

  const deleteStatus = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/status-proyek/delete/${id}`);
      getStatusProyek();
    } catch (error) {
      console.error("Error deleting status proyek", error);
    }
  };

  return (
    <div className="container-status">
      <div className="header">
        <div className="header-status">
          <h1>Status Proyek</h1>
          <Link to="/status/add" className="add-btn">Add New</Link>
        </div>
      </div>

      <div className="table-wrapper">
        <table className="status-table">
          <thead>
            <tr>
              <th>No</th>
              <th>Progres Proyek</th>
              <th>Tanggal Laporan</th>
              <th>Nama Karyawan</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {statusProyek.map((status, index) => (
              <tr key={status.id}>
                <td>{index + 1}</td>
                <td>{status.Progres_proyek}</td>
                <td>{status.Tanggal_laporan}</td>
                <td>{status.Nama_karyawan}</td>
                <td>
                  <button className="edit-btn">
                    <Link to={`/status/edit/${status.id}`}>Edit</Link>
                  </button>
                  <button
                    onClick={() => deleteStatus(status.id)}
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

export default ProgresProyek;
