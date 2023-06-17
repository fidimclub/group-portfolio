import React from 'react';
import './Footer.css'
const Footer = () => {
  return (
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
              <div className="form-row">
                <div className="col-md-8 form-group">
                  <input type="text" className="txt" />
                </div>
                <div className="col-md-4 form-group">
                  <button type="submit" className="btn2">
                    <i className="fas fa-comment-alt text-btn-icon"></i>
                    Text
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="col-md-4">
            <h4>Contact Information</h4>
            <p>123 Main Street, City</p>
            <p>123-456-7890</p>
            <p>info@example.com</p>
            <ul className="social-icons">
              <li><a href="#"><i className="fab fa-github"></i></a></li>
              <li><a href="#"><i className="fab fa-twitter"></i></a></li>
              <li><a href="#"><i className="fab fa-instagram"></i></a></li>
              <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="copyright text-center">
        Copyright &copy; 2023 <span>Privacy Policy</span>
      </div>
    </footer>
  );
}

export default Footer;
