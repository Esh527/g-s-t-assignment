import React, { useState } from 'react';
import './SignUp.css'

const SignupPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    password: '',
    email: '',
    phone: '',
    profession: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('userData', JSON.stringify(formData));
    setFormData({
      name: '',
      password: '',
      email: '',
      phone: '',
      profession: '',
    });
  };

  return (
    
    
    <form id="from" onSubmit={handleSubmit}>
      <div className='name'>
      <div>
      <h1 className='h1'>SignUp Page</h1>
    </div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
      </div>
      <div className='pass'> 
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
        />
      </div>
      <div className='email'>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
      </div>
      <div className='phn'>
        <label>Phone no:</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
        />
      </div>
      <div className='selection'>
        <label>Profession:</label>
        <select name="profession" value={formData.profession} onChange={handleInputChange}>
          <option value="">Select</option>
          <option value="engineer">Engineer</option>
          <option value="doctor">Doctor</option>
          <option value="teacher">Teacher</option>
          <option value="artist">Artist</option>
          
        </select>
      </div>
      <button type="submit" id="button">Sign Up</button>
    </form>
  );
};

export default SignupPage;
