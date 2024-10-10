import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import './CustomerList.css'; 

const CustomerList = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    getCustomers();
  }, []);

  const getCustomers = async () => {
    try {
      const response = await axios.get("http://localhost:3001/customer");
      setCustomers(response.data);
    } catch (error) {
      console.error("Error fetching customers:", error);
    }
  };

  const deleteCustomer = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/customer/delete/${id}`);
      getCustomers();
    } catch (error) {
      console.error("Error deleting customer", error);
    }
  };

  return (
    <div className="container-customers">
      <div className="header">
        <div className="header-customers">
          <h1>Customer List</h1>
          <Link to="/customers/add" className="add-btn">Add New</Link>
        </div>
      </div>

      <div className="table-wrapper">
        <table className="customer-table">
          <thead>
            <tr>
              <th>No</th>
              <th>Nama</th>
              <th>Nama Perusahaan</th>
              <th>Kontak</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer, index) => (
              <tr key={customer.id}>
                <td>{index + 1}</td>
                <td>{customer.nama}</td>
                <td>{customer.nama_perusahaan}</td>
                <td>{customer.kontak}</td>
                <td>
                  <button className="edit-btn">
                    <Link to={`/customers/edit/${customer.id}`}>Edit</Link>
                  </button>
                  <button
                    onClick={() => deleteCustomer(customer.id)}
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

export default CustomerList;
