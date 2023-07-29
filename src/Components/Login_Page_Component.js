import React, { useState } from 'react';
import{Redirect} from 'react-router-dom'
import MovieListPage from './Movie_List_Page_Component'
import { useHistory } from 'react-router-dom';
import HomePage from './Home_Page_Component';


const LoginPage = (props) => {
    const [isloggedIn, setIsLoggedIn]= useState(false)


  const [formData, setFormData] = useState({
    name: '',
    password: '',
  });

  const [loginError, setLoginError] = useState(false);

  const handleNameChange = (event) => {
   
    setFormData((state)=>({...state,name:event.target.value}));
  };

  const handlePasswordChange = (event) => {
   
    setFormData((state)=>({...state,password:event.target.value}));
  };


  const handleLogin = (event) => {
    
    event.preventDefault();
    const storedData = localStorage.getItem('userData');
    const {name:nameFromLocalStorage, password: passwordFromLocalStorage}= JSON.parse(storedData)
    console.log(passwordFromLocalStorage)

    if(formData.name === nameFromLocalStorage && formData.password === passwordFromLocalStorage){
       setIsLoggedIn(true)

    }


    // if (storedData) {
    //   const userData = JSON.parse(storedData);
    //   if (formData.name === userData.name && formData.password === userData.password) {
    //     onSuccessfulLogin(userData);
    //     setLoginError(false);
    //   } else {
    //     setLoginError(true);
    //   }
    // } else {
    //   setLoginError(true);
    // }
  };


  return (
    <>
    
    {isloggedIn ? (<MovieListPage/>) : (<form onSubmit={handleLogin}>
    <div>
    <div>
      <h1 className='h1'>Login Page</h1>
    </div>
      <label>Name:</label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleNameChange}
      />
    </div>
    <div>
      <label>Password:</label>
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handlePasswordChange}
      />
    </div>
    {loginError && <div>Invalid Credentials</div>}
    <button type="submit">Log In</button>
  </form>)}
  </>
  );
};

export default LoginPage;
