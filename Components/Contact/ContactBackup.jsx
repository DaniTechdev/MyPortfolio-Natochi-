"use client";

import React, { useState, useEffect } from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
//React Icons
import { FaPhoneAlt } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { MdOutlineLocationCity } from "react-icons/md";
//Internaal  import
import "./Contact.css";

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null); // null, 'success', or 'error'

  // Form state and errors
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  console.log("formData", formData);

  const [errors, setErrors] = useState({});

  // Effect to clear success message after 5 seconds
  useEffect(() => {
    let timer;
    if (status === "success") {
      timer = setTimeout(() => {
        setStatus(null);
      }, 5000); // 5 seconds timeout
    }

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [status]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear error for this field when user types
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Name validation
    if (!formData.user_name.trim()) {
      newErrors.user_name = "Name is required";
    }

    // Email validation
    if (!formData.user_email.trim()) {
      newErrors.user_email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.user_email)) {
      newErrors.user_email = "Email is invalid";
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message should be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    // Validate form before submission
    if (!validateForm()) {
      return;
    }

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
          setStatus("success");
          // Reset form data state
          setFormData({
            user_name: "",
            user_email: "",
            message: "",
          });
          form.current.reset(); // Clear the form
        },
        (error) => {
          console.log("Failed to send email:", error.text);
          setStatus("error");
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src="/natochi-logo.svg" alt=" theme pattern logo" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            I am currently available to take on new projects, so feel free to
            get in touch as soon as possible anytime!
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <BiLogoGmail style={{ width: "50px", height: "50px" }} />{" "}
              <p>tochidan11@gmail.com</p>
            </div>

            <div className="contact-detail">
              <FaPhoneAlt style={{ width: "50px", height: "50px" }} />{" "}
              <p>+2347033541712</p>
            </div>

            <div className="contact-detail">
              <MdOutlineLocationCity
                style={{ width: "50px", height: "50px" }}
              />{" "}
              <p>Enugu State, Nigeria, Lagos State Nigeria</p>
            </div>
          </div>
        </div>

        {status === "success" && (
          <div className="success-message">
            Message sent successfully! Thank you for contacting us.
          </div>
        )}

        {status === "error" && (
          <div className="error-message">
            Something went wrong. Please try again later.
          </div>
        )}

        <form className="contact-right" ref={form} onSubmit={sendEmail}>
          <label htmlFor="">Your Name</label>
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            value={formData.user_name}
            onChange={handleChange}
          />
          <label htmlFor="">Your Email</label>
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            value={formData.user_email}
            onChange={handleChange}
          />
          <label htmlFor="">Write your message here</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <button
            type="submit"
            disabled={isSubmitting}
            className="contact-submit"
          >
            {isSubmitting ? "Sending..." : "Send"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
