import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import style from './Forms.module.css'
import { useNavigate } from 'react-router-dom';

const Form = ({ updateFormData }) => {
    const navigate = useNavigate();

    const [IsActive, setIsActive] = useState(false)
    const [formData, setFormData] = useState({
        fname: '',
        lname: '',
        fathername:'',
        mobile: '',
        dob: '',
        address: '',
        pincode: '',
        gender: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        let existingData = JSON.parse(localStorage.getItem('formData')) || [];
    
        const isDuplicate = existingData.some((data) =>
            data.fname === formData.fname
        );
    
        if (isDuplicate) {
            setIsActive(true);
            setFormData({
                fname: '',
                lname: '',
                fathername:'',
                mobile: '',
                dob: '',    
                address: '',
                pincode: '',
                gender: '',
            });
        } else {
            existingData.push(formData);
            localStorage.setItem('formData', JSON.stringify(existingData));
    
            setFormData({
                fname: '',
                lname: '',
                fathername:'',
                mobile: '',
                dob: '',
                address: '',
                pincode: '',
                gender: '',
            });
    
            updateFormData(existingData);
            navigate('/table');
        }
    };
    

    const handleclose = () => {
        setIsActive(false);
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        const inputValue = value;

        setFormData((prevData) => ({
            ...prevData,
            [name]: inputValue,
        }));
    };
    return (

        <div className='container-fluid'>
            <form className={`row g-3 ${style.formcontainer} ${IsActive ? style.blur : ''}`} onSubmit={handleSubmit}>
                <div className="col-md-6">
                    <label htmlFor="inputFirstName" className="form-label">First Name</label>
                    <input type="text" className="form-control" id="inputFirstName" name='fname' value={formData.fname} onChange={handleChange} required />
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputLastName" className="form-label">Last Name</label>
                    <input type="text" className="form-control" id="inputLastName" name='lname' value={formData.lname} onChange={handleChange} required />
                </div>

                <div className="col-md-6">
                    <label htmlFor="inputfatherName" className="form-label">Father's Name</label>
                    <input type="text" className="form-control" id="inputfatherName" name='fathername' value={formData.fathername} onChange={handleChange} required />
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputMobile" className="form-label">Mobile Number</label>
                    <input type="tel" className="form-control" id="inputMobile" name="mobile" value={formData.mobile} onChange={handleChange} required
                    />
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputDOB" className="form-label">Date of Birth</label>
                    <input type="date" className="form-control" id="inputDOB" name="dob" value={formData.dob} onChange={handleChange} />
                </div>
                <div className="col-12">
                    <label htmlFor="inputAddress" className="form-label">Address</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" name="address" value={formData.address} onChange={handleChange} required />
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputPincode" className="form-label">Pincode</label>
                    <input type="text" className="form-control" id="inputPincode" name="pincode" value={formData.pincode} onChange={handleChange} required />
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputGender" className="form-label">Gender</label>
                    <select id="inputGender" className="form-select" name="gender" value={formData.gender} onChange={handleChange} required>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Other</option>
                    </select>
                </div>
                <div className="col-12">
                    <button type="submit" className="btn btn-primary">Add</button>
                </div>

            </form>
            {IsActive && (
                <div className={`modal-container text-center ${style.modalcontainer}`}>
                    <FontAwesomeIcon icon={faX} className={style.fax} />
                    <p className={style.alertpopupmessage}>Duplicate entry: This entry already exists.</p>
                    <button type='submit' className='btn btn-secondary' onClick={handleclose}>Close</button>
                </div>
            )}

        </div>
    )
}

export default Form
