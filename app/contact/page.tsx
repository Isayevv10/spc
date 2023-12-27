"use client";

import React, { useState } from "react";
import "@/styles/pages/_contact.scss";

const Contact = () => {
  const [emailData, setEmailData] = useState({
    from: "",
    subject: "",
    message: "",
    number: "",
    uname: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setEmailData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      if (
        emailData.from == "" ||
        emailData.message == "" ||
        emailData.number == "" ||
        emailData.subject == "" ||
        emailData.uname == ""
      ) {

        
      }
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(emailData),
      });

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error:", error);
    }

    setEmailData({
      from: "",
      subject: "",
      message: "",
      number: "",
      uname: "",
    });
  };

  return (
    <div className="contact">
      <div className="contact__find">
        <p>Əlaqə</p>
        <p>
          Xidmətlərimiz haqqında daha çox məlumat əldə etmək üçün, zəhmət
          olmasa, aşağıdakı formu təfərrüatlı doldurun və nümayəndəmizdən biri
          sizə qısa zamanda geri dönüş edəcək.
        </p>
      </div>
      <div className="contact__mail">
        <div className="grid__form">
          <div className="item-1">
            <input
              type="text"
              name="uname"
              placeholder="Your Name"
              value={emailData.uname}
              required
              onChange={handleChange}
            />
          </div>
          <div className="item-2">
            <input
              type="text"
              placeholder="Your Company"
              name="subject"
              value={emailData.subject}
              required
              onChange={handleChange}
            />
          </div>
          <div className="item-3">
            <input
              type="email"
              name="from"
              placeholder="Your Email"
              value={emailData.from}
              required
              onChange={handleChange}
            />
          </div>
          <div className="item-4">
            <input
              type="text"
              name="number"
              placeholder="Your Contact Number"
              value={emailData.number}
              required
              onChange={handleChange}
            />
          </div>
          <div className="item-5">
            <textarea
              name="message"
              cols={30}
              rows={10}
              placeholder="Your Message"
              value={emailData.message}
              required
              onChange={handleChange}
            />
          </div>
        </div>

        <button type="submit" className="btn__submit" onClick={handleSubmit}>
          SUBMIT
        </button>
      </div>
    </div>
  );
};
export default Contact;
