"use client";

import React, { useState } from "react";
import "@/styles/pages/_contact.scss";
import Image from "next/image";
import { Search } from "@/components/Search/Search";

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
      // if (
      //   emailData.from == "" ||
      //   emailData.message == "" ||
      //   emailData.number == "" ||
      //   emailData.subject == "" ||
      //   emailData.uname == ""
      // ) {
      // }

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
    <>
      <Search />

      <div className="contact">
        <div className="contact__mail">
          <div className="grid__form">
            <div className="item-1">
              <label htmlFor="uname">Ad Soyad</label>
              <input
                type="text"
                name="uname"
                value={emailData.uname}
                required
                onChange={handleChange}
              />
            </div>
            <div className="item-2">
              <label htmlFor="uname">Şirkət</label>
              <input
                type="text"
                name="subject"
                value={emailData.subject}
                required
                onChange={handleChange}
              />
            </div>
            <div className="item-3">
              <label htmlFor="uname">Email</label>
              <input
                type="email"
                name="from"
                value={emailData.from}
                required
                onChange={handleChange}
              />
            </div>
            <div className="item-4">
              <label htmlFor="uname">Telefon</label>
              <input
                type="text"
                name="number"
                value={emailData.number}
                required
                onChange={handleChange}
              />
            </div>
            <div className="item-5">
              <label htmlFor="uname">Mesajınız</label>
              <textarea
                name="message"
                cols={30}
                rows={7}
                value={emailData.message}
                required
                onChange={handleChange}
              />
            </div>
          </div>

          <button type="submit" className="btn__submit" onClick={handleSubmit}>
            Göndər
          </button>
        </div>

        <div className="contact__info">
          <div className="contact__info--adres">
            <Image src="/images/adres.png" width={70} height={70} alt="adres" />
            <p>Abşeron rayonu, Qobu qəsəbəsi</p>
          </div>

          <div className="contact__info--detail">
            <Image
              src="/images/contact.png"
              alt="contact"
              width={70}
              height={70}
            />

            <div>
              <h1>Telefon</h1>
              <p>+994 50 265 34 87</p>
            </div>

            <div>
              <h1>Email</h1>
              <p>sales@createindustry.az</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
