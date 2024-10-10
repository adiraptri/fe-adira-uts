import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css"
import Dashbaord from "./components/Dashboard";
import ProyekList from "./components/Proyek/ProyekList";
import ProyekAdd from "./components/Proyek/ProyekAdd";
import KaryawanAdd from "./components/Karyawan/KaryawanAdd";
import KaryawanList from "./components/Karyawan/KaryawanList";
import CustomerList from "./components/customer/CustomerList";
import StatusProyek from "./components/Status/StatusProyekList";
import ProgresProyek from "./components/Progres/ProgresList";

function App() {
  return (
    <>
     <BrowserRouter basename="/fe-adira-uts/"> 
      <div>
        <Navbar />
        <div>
          <Routes>
            <Route path="/" element={<Dashbaord />} />
            <Route path="/proyek" element={<ProyekList/>} />
            <Route path="/proyek/add" element={<ProyekAdd/>} />
            <Route path="/karyawan/add" element={<KaryawanAdd/>} />
            <Route path="/karyawan" element={<KaryawanList/>} />
            <Route path="/customer" element={<CustomerList/>} />
            <Route path="/status" element={<StatusProyek/>} />
            <Route path="/progres" element={<ProgresProyek/>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
    </>
  );
}

export default App;