import React from "react";
import "./successNotification.css"; 

const SuccessNotification = ({ onClose }) => (
  <div className="notification-overlay">
    <div className="notification-box">
      <img src="https://invitera.site/files/event/213/e07d992af68a552f9ccb6d76d09b9e04.jpg" className="w-50 h-30"/>
      <p>
        Thank you for your RSVP. We sincerely appreciate your confirmation and ask that you
        celebrate in your heart with best wishes from afar.. .
      </p>
      <button onClick={onClose} className="notification-button">
        Close
      </button>
    </div>
  </div>
);

export default SuccessNotification;
