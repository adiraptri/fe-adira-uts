import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams, Link } from "react-router-dom";
import './ProyekEdit.css'; 

const CafeEdit = () => {
  const [namaProyek, setNamaProyek] = useState("");
  const [alamat, setAlamat] = useState("");
  const [tables, setTables] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getProyekById();
  }, []);

  const updateProyek = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3001/proyek/update/${id}`, {
        nama: namaProyek,
        TanggalMulai: TanggalMulai,
        TanggalSelesai: TanggalSelesai,
      });
      navigate("/proyek");
    } catch (error) {
      console.log(error);
    }
  };

  const getProyekById = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/cafe/${id}`);
      setNamaCafe(response.data.nama);
      setTanggalMulai(response.data.TanggalMulai);
      setTanggalSelesai(response.data.TanggalSelesai);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="proyekEdit-container">
      <h1 className="proyekEdit-title">Edit Cafe</h1>
      <form onSubmit={updateProyek} className="proyekEdit-form">
        <div className="proyekEditform-group">
          <label className="proyekEdit-label">Nama Proyek</label>
          <input
            type="text"
            className="proyekEdit-input"
            value={namaCafe}
            onChange={(e) => setNamaProyek(e.target.value)}
            placeholder="Nama Proyek"
          />
        </div>

        <div className="proyekEdit-form-group">
          <label className="proyekEdit-label">Alamat</label>
          <input
            type="text"
            className="proyekEdit-input"
            value={alamat}
            onChange={(e) => setAlamat(e.target.value)}
            placeholder="Alamat"
          />
        </div>
        <div className="proyekEdit-form-group">
          <label className="proyekEdit-label">Alamat</label>
          <input
            type="text"
            className="proyekEdit-input"
            value={alamat}
            onChange={(e) => setAlamat(e.target.value)}
            placeholder="Alamat"
          />
        </div>
        <div className="proyekEdit-form-group">
          <label className="proyekEdit-label">Alamat</label>
          <input
            type="text"
            className="proyekEdit-input"
            value={alamat}
            onChange={(e) => setAlamat(e.target.value)}
            placeholder="Alamat"
          />
        </div>
        
        <div className="proyekEdit-form-group">
          <label className="proyekEdit-label">Tables</label>
          <input
            type="number"
            className="proyekEdit-input"
            value={tables}
            onChange={(e) => setTables(e.target.value)}
            placeholder="Jumlah Tables"
          />
        </div>
        <div className="proyekEdit-form-group">
          <label className="proyekEdit-label">Tables</label>
          <input
            type="number"
            className="proyekEdit-input"
            value={TanggalMulai}
            onChange={(e) => setTanggalMulai(e.target.value)}
            placeholder="Tanggal mulai"
          />
        </div>
        <div className="proyekEdit-flex">
          <button type="submit" className="proyekEdit-button proyekEdit-back-btn">
            Update Proyek
          </button>
          <button type="button" className="proyekEdit-button proyekEdit-back-btn">
            <Link to="/proyek/list">Back</Link>
          </button>
        </div>
      </form>
    </div>
  );
};

export default CafeEdit;
