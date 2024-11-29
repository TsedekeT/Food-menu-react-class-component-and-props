import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h2>Order Now</h2>
        <p>Call us at <a href="tel:+1234567890">+123-456-7890</a></p>
        <p>Email us at <a href="mailto:orders@myfoodmenu.com">orders@myfoodmenu.com</a></p>
        <button className="order-button">Place Your Order</button>
      </div>
    </footer>
  );
};

export default Footer;
