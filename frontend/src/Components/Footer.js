import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
   <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

 
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css">
  
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
  <title>Portfolio Site</title>
  
</head>
<body>
  <style>
   
    body {
      background-color: #222;
      color: #fff;
    }

    .footer {
      background-color: #222;
      padding-top: 20px;
      text-align: center;
    }
    
    .footer p {
      margin-bottom: 10px;
      margin: 20px;
    }
   .footer h5{
    margin-right: 70px;
   }
    .footer .social-icons {
      list-style: none;
      padding: 0;
      margin-bottom: 10px;
    }

    .footer .social-icons li {
      display: inline-block;
      margin-right: 10px;
      width: 40px;
      
    }
   .footer .social-icons li a {
    font-size: 20px;
    width: 40px;
   }
    .footer .copyright {
      padding: 10px 0;
      background: #333;
      margin-bottom:-20px;
      font-size: 12px;
      
    }
    
    .footer .copyright span {
      color: #0894d1;
    }
    .btn{
      width: 80px;
      height: 40px;
      background-color: #ffcb00;
    }
    .btn:hover{
      background-color: #b39f3b;
    }
    .btn2{
      width: 80px;
      height: 40px;
      background-color: #ffcb00;
      border: 5px solid #ffcb00;
      font-style: italic;
      margin-top: 80px;
      margin-left: 9px;
      border-radius: 5px;
    }
    .txt{
      height: 120px;
      width: 250px;
    }
    .form-control{
      width: 250px;
height: 40px;
    }
  </style>


  
  <footer class="footer">
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <img src="logo.png" alt="Logo" style="width: 150px; height: auto;">
        </div>
        <div class="col-md-4">
          <h5>Get In Touch</h5>
          <form>
            <div class="form-row">
              <div class="col-md-8 form-group">
                <input type="email" class="form-control" placeholder="Enter your email address">
              </div>
              <div class="col-md-4 form-group">
                <button type="submit" class="btn">Send</button>
              </div>
            </div>
            <div class="form-row">
              <div class="col-md-8 form-group">
                <input type="text" class="txt" >
              </div>
              <div class="col-md-4 form-group">
                <button type="submit" class="btn2">
                  <i class="fas fa-comment-alt text-btn-icon"></i>
                  Text
                </button>
              </div>
            </div>
          </form>
        </div>
        <div class="col-md-4">
          <h4>Contact Information</h4>
          <p>123 Main Street, City</p>
          <p>123-456-7890</p>
          <p>info@example.com</p>
          <ul class="social-icons">
            <li><a href="#"><i class="fab fa-github"></i></a></li>
            <li><a href="#"><i class="fab fa-twitter"></i></a></li>
            <li><a href="#"><i class="fab fa-instagram"></i></a></li>
            <li><a href="#"><i class="fab fa-linkedin"></i></a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="copyright text-center">
      Copyright &copy; 2023 <span>Privacy Policy</span>
  </footer>

 
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>

  <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/js/all.min.js"></script>
</body>
</html>

  )
}

export default Footer
