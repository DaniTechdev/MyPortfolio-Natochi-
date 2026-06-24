"use client";

import React, { useState, useEffect } from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
//React Icons
import { FaPhoneAlt } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { MdOutlineLocationCity } from "react-icons/md";
//Internaal  import
import Style from "./Contact.module.css";
const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null);
  const form = useRef();

  useEffect(() => {
    let timer;
    if (status === "success") {
      timer = setTimeout(() => {
        setStatus(null);
        setIsSubmitting(false);
      }, 5000); // 5 seconds timeout
    }

    // Cleanup timer when component unmounts or status changes
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [status]);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    emailjs
      .sendForm(
        "service_c09vip6", // From EmailJS dashboard
        "template_dhk4xho", // From EmailJS dashboard
        form.current,
        "aV2c0wvZJdDWx1FvC" // From EmailJS dashboard
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          // Reset form or show success message
          setStatus("success");
          form.current.reset();
        },
        (error) => {
          console.log("Failed to send email:", error.text);
          setStatus("error");
        }
      );
  };

  return (
    <div id="contact" className={Style.contact}>
      <div className={Style.contact_title}>
        <h1>Get in touch</h1>
        <img src="/natochi-logo.svg" alt="" aria-hidden="true" />
      </div>
      <p className={Style.contact_subtitle}>
        Have a project in mind or just want to say hi? I&apos;m available for new
        work, drop a message and I&apos;ll get back to you.
      </p>

      <div className={Style.contact_section}>
        <div className={Style.contact_left}>
          <h2>Let&apos;s talk</h2>
          <p className={Style.left_text}>
            I am currently available to take on new projects, so feel free to
            reach out through any of the channels below.
          </p>
          <div className={Style.contact_details}>
            <a href="mailto:tochidan11@gmail.com" className={Style.contact_detail}>
              <span className={Style.icon_wrap}>
                <BiLogoGmail className={Style.icon} />
              </span>
              <span className={Style.detail_text}>
                <span className={Style.detail_label}>Email</span>
                <span className={Style.detail_value}>tochidan11@gmail.com</span>
              </span>
            </a>

            <a href="tel:+2347033541712" className={Style.contact_detail}>
              <span className={Style.icon_wrap}>
                <FaPhoneAlt className={Style.icon} />
              </span>
              <span className={Style.detail_text}>
                <span className={Style.detail_label}>Phone</span>
                <span className={Style.detail_value}>+234 703 354 1712</span>
              </span>
            </a>

            <div className={Style.contact_detail}>
              <span className={Style.icon_wrap}>
                <MdOutlineLocationCity className={Style.icon} />
              </span>
              <span className={Style.detail_text}>
                <span className={Style.detail_label}>Location</span>
                <span className={Style.detail_value}>
                  Enugu &amp; Lagos State, Nigeria
                </span>
              </span>
            </div>
          </div>
        </div>

        <form className={Style.contact_right} ref={form} onSubmit={sendEmail}>
          {status === "success" && (
            <div className={Style.success_message}>
              Message sent successfully — thank you for reaching out!
            </div>
          )}
          {status === "error" && (
            <div className={Style.error_message}>
              Something went wrong. Please try again later.
            </div>
          )}

          <div className={Style.field}>
            <label htmlFor="name">Your Name</label>
            <input
              id="name"
              type="text"
              placeholder="Enter your name"
              name="name"
              required
            />
          </div>

          <div className={Style.field}>
            <label htmlFor="email">Your Email</label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              name="email"
              required
            />
          </div>

          <div className={Style.field}>
            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              name="message"
              rows="6"
              placeholder="Tell me about your project..."
              required
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={Style.contact_submit}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
