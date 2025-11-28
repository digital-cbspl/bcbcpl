import React from 'react';

export default function Map() {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1200"
      className="w-full"
    >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d216713.8303577515!2d85.868412!3d20.307653!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a190a161aaaaaab%3A0x8708de4f4172abac!2sB.C.%20Bhuyan%20Constructions%20Pvt.%20Ltd.!5e1!3m2!1sen!2sus!4v1763959570401!5m2!1sen!2sus"
        width="100%"
        height="450"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="rounded-lg shadow-md"
      ></iframe>
    </div>
  );
}
