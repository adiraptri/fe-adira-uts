import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './ProyekAdd.css'

const ProyekAdd = () => {
  const [namaProyek, setNamaProyek] = useState("");
  const [TanggalMulai, setTanggalMulai] = useState("");
  const [TanggalSelesai, setTanggalSelesai] = useState(0); 
  const navigate = useNavigate();

  const saveProyek = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3001/proyek/post", {
        nama: namaProyek,
        TanggalMulai: TanggalMulai,
        TanggalSelesai: TanggalSelesai,
      });
      alert("Proyek berhasil ditambahkan");
      navigate("/proyek");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="form-container">    
      <div className="form-wrapper">
        <form onSubmit={saveProyek} className="form">
          <div className="form-group">
            <label>Nama proyek</label>
            <input
              type="text"
              value={namaProyek}
              onChange={(e) => setNamaProyek(e.target.value)}
              placeholder="Nama Proyek"
              required
            />
          </div>
          <div className="form-group">
            <label>Tanggal mulai</label>
            <input
              type="text"
              value={TanggalMulai}
              onChange={(e) => setTanggalMulai(e.target.value)}
              placeholder="tanggal mulai"
              required
            />
          </div>
          <div className="form-group">
            <label>Tanggal Selesai</label>
            <input
              type="number"
              value={TanggalSelesai}
              onChange={(e) => setTanggalSelesai(e.target.value)}
              placeholder="tanggal selesai"
              required
            />
          </div>
          {/* <div className="form-group">
            <label>Harga</label>
            <input
              type="number"
              value={harga}
              onChange={(e) => setHarga(e.target.value)}
              placeholder="harga"
              required
            />
          </div> */}
          <div className="form-actions">
            <button type="submit" className="btn save-btn">
              Save
            </button>
            <button
              type="button"
              onClick={() => navigate("/proyek")}
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

export default ProyekAdd;