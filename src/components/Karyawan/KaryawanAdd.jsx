import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './KaryawanAdd.css'; 

const KaryawanAdd = () => {
  const [namaKaryawan, setNamaKaryawan] = useState("");
  const [posisi, setPosisi] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const saveKaryawan = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3001/karyawan/post", {
        nama_karyawan: namaKaryawan,
        posisi: posisi,
        email: email,
      });
      alert("Karyawan berhasil ditambahkan");
      navigate("/karyawan");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="form-container">
      <div className="form-wrapper">
        <form onSubmit={saveKaryawan} className="form">
          <div className="form-group">
            <label>Nama karyawan</label>
            <input
              type="text"
              value={namaKaryawan}
              onChange={(e) => setNamaKaryawan(e.target.value)}
              placeholder="Nama Karyawan"
              required
            />
          </div>
          <div className="form-group">
            <label>Posisi</label>
            <input
              type="text"
              value={posisi}
              onChange={(e) => setPosisi(e.target.value)}
              placeholder="Posisi"
              required
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email"
              required
            />
          </div>
          <div className="form-actions">
            <button type="submit" className="btn save-btn">
              Save
            </button>
            <button
              type="button"
              onClick={() => navigate("/karyawan")}
              className="btn back-btn"
            >
              Back
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default KaryawanAdd;
