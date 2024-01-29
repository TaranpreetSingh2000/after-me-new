import React from 'react';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import style from './Table.module.css';
import { useNavigate, Link } from 'react-router-dom';

const Table = ({ formData }) => {
  const navigate = useNavigate();

  const openForm = () => {
    navigate('/form');
  };

  return (
    <div>
      <Navbar />
      <div className={`entries my-4 px-3 ${style.entries}`}>
        <h4>Entries</h4>

        <div className={`${style.btncontainers}`}>

        <button className="btn btn-success" onClick={openForm}>
          Add more entries
        </button>
        {/* <Link to="/strapidata" className={style.strapilink}>See the data</Link> */}
        </div>
      </div>
      <div className="table-container mb-4">
        {formData && formData.length > 0 ? (
          <table className="table">
            <thead className="thead-light">
              <tr>
                <th scope="col">Id</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Father's Name</th>
                <th scope="col">Mobile No</th>
                <th scope="col">Address</th>
                <th scope="col">DOB</th>
                <th scope="col">Pin Code</th>
                <th scope="col">Gender</th>
              </tr>
            </thead>
            <tbody>
              {formData.map((data, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{data.fname}</td>
                  <td>{data.lname}</td>
                  <td>{data.fathername}</td>
                  <td>{data.mobile}</td>
                  <td>{data.address}</td>
                  <td>{data.dob}</td>
                  <td>{data.pincode}</td>
                  <td>{data.gender}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className='text-center my-2'>No Data available</p>
        )
        }
      </div>
      <Footer />
    </div>
  );
};

export default Table;
