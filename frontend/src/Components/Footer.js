import React from 'react';
import './Footer.css'
import logo from "../images/logo.png" 

const Footer = () => {
  return (
    <>
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <img src={logo} alt="Logo" style={{ width: '150px', height: 'auto' }} />
          </div>

          <div className="col-md-4" style={{marginBottom: "20px"}}>
  <h5>Get In Touch</h5>
 
  <form>
    <div className="form-row" style={{marginBottom: "20px"}}>
      <div className="col-md-8 form-group" style={{marginBottom: "20px", marginLeft: "110px"}}>
        <input type="email" className="form-control" placeholder="Enter your email address" />
      </div>
      <div className="col-md-4 form-group">
        <button type="submit" className="btn" style={{marginLeft: "110px"}}>Send</button>
      </div>

    </div>
  </form>
</div>

<div className="col-md-4" >
  <ul className="nobull">
    <li>Members:</li>
    <li>Anthony Barnett</li>
    <li>David Palacios</li>
    <li>Seth Zwerling</li>
    <li>Peter Huynh</li>
    <li>Seren Kapanoglu</li>
    <li>Zena Creps</li>
      
       
      
      
      </ul>
      Copyright &copy; 2023 <span>Privacy Policy</span>
    
    </div>
</div>

<div className="col-md-4" style={{marginBottom: "20px"}}>
 
</div>

    </div>
   
    
</footer>
</>)
}

export default Footer;
