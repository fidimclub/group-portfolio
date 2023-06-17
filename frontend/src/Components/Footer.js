import React from 'react';
import './Footer.css'
const Footer = () => {
  return (
    <>
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <img src="logo.png" alt="Logo" style={{ width: '150px', height: 'auto' }} />
          </div>
          <div className="col-md-4">
            <h5>Get In Touch</h5>
            <form>
              <div className="form-row">
                <div className="col-md-8 form-group">
                  <input type="email" className="form-control" placeholder="Enter your email address" />
                </div>
                <div className="col-md-4 form-group">
                  <button type="submit" className="btn">Send</button>
                </div>

    </div>
    </form>
    <div class="copyright text-center">
      Copyright &copy; 2023 <span>Privacy Policy</span>
    </div>
    </div>
    </div>
    </div>
    
</footer>
</>)
}

export default Footer;
