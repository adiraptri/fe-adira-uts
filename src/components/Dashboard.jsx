import React from 'react';
import "./Dashboard.css"
import { Link } from 'react-router-dom';
import Anggota from "../assets/geng.jpeg"
import Proyek from "../assets/famale.png"
import Nama from "../assets/two.png"
import Mandor from "../assets/bos.jpeg"
import Customer from "../assets/Data.jpeg"



const Dashbaord = () => {
  return (
    <div className='main'>
      <div className='card'>
      <h3><Link to= "/customer" className='link-dash'>Customer</Link></h3>
        <img src={Customer}/>
        <p>Data Pelanggan</p>
      </div>
      <div className='card'>
      <h3><Link to="/data" className='link-dash'>Data</Link></h3>
        <img src={Nama}/>
       <p>Nama proyek</p>
      </div>
      <div className='card'>
      <h3><Link to ="/karyawan" className='link-dash'>Anggota tim</Link></h3>
         <img src={Anggota}/>
        <p>Data Anggota tim</p>
      </div>
      <div className='card'>
      <h3><Link to = "/status" className='link-dash'>Status proyek</Link></h3>
        <img src={Mandor}/>
        <p>Status proyek</p>
      </div>
      <div className='card'>
      <h3><Link to = "/proyek" className='link-dash'>Waktu Kerja</Link></h3>
        <img src={Proyek}/>
        <p>Data Waktu Pengerjaan</p>
      </div>
    
    </div>
  )
}

export default Dashbaord