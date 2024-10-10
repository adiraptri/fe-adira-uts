import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import './KaryawanList.css'; 

const KaryawanList = () => {
  const [karyawan, setKaryawan] = useState([]);

  useEffect(() => {
    getKaryawan();
  }, []);

  const getKaryawan = async () => {
    try {
      const response = await axios.get("http://localhost:3001/karyawan");
      setKaryawan(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteKaryawan = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/karyawan/delete/${id}`);
      getKaryawan();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container-karyawan">
      <div className="header">
        <div className="header-karyawan">
          <h1>Karyawan List</h1>
          <Link to="/karyawan/add" className="add-btn">Add New</Link>
        </div>
      </div>

      <div className="table-wrapper">
        <table className="karyawan-table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Nama Karyawan</th>
              <th>Email</th>
              <th>Posisi</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {karyawan.map((karyawan, index) => (
              <tr key={karyawan.id}>
                <td>{index + 1}</td>
                <td>{karyawan.nama_karyawan}</td>
                <td>{karyawan.email}</td>
                <td>{karyawan.status}</td>
                <td>
                  <button className="edit-btn">
                    <Link to={`/karyawan/edit/${karyawan.id}`}>Edit</Link>
                  </button>
                  <button
                    onClick={() => deleteKaryawan(karyawan.id)}
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

export default KaryawanList;
