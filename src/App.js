import React from "react";
import "./App.css";
import { motion } from "framer-motion";
import {
  FaWhatsapp,
  FaGithub,
  FaInstagram,
  FaFacebook,
  FaLinkedin,
} from "react-icons/fa";
import profile from "./profile.jpg.jpeg";

function App() {
  const openWhatsApp = () => {
    window.open("https://wa.me/916387816346", "_blank");
  };

  return (
    <div className="container">
      {/* HERO */}
      <section className="hero">
        <motion.img
          src={profile}
          alt="Harsh"
          className="profile"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
        />

        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Harsh Bajpai 🚀
        </motion.h1>

        <p>Web Developer | Freelancer</p>

        <button className="btn" onClick={openWhatsApp}>
          <FaWhatsapp /> Hire Me
        </button>
      </section>

      {/* ABOUT */}
      <section className="glass">
        <h2>About Me</h2>
        <p>
          I am a passionate web developer skilled in React, HTML, CSS &
          JavaScript. I create modern and responsive websites that attract users
          and clients.
        </p>
      </section>

      {/* PROJECTS */}
      <section>
        <h2>Projects</h2>
        <div className="projects">
          <motion.div className="card" whileHover={{ scale: 1.1 }}>
            <h3>Portfolio Website</h3>
            <p>Modern animated portfolio</p>
          </motion.div>

          <motion.div className="card" whileHover={{ scale: 1.1 }}>
            <h3>Typing Test App</h3>
            <p>Speed & accuracy checker</p>
          </motion.div>

          <motion.div className="card" whileHover={{ scale: 1.1 }}>
            <h3>Resume Builder</h3>
            <p>Create resume easily</p>
          </motion.div>
        </div>
      </section>

      {/* SOCIAL */}
      <section className="social">
        <h2>Connect With Me</h2>
        <div className="icons">
          <a href="https://www.instagram.com/harshussh" target="_blank">
            <FaInstagram />
          </a>

          <a href="https://www.facebook.com/share/1KiQhB9eio/" target="_blank">
            <FaFacebook />
          </a>

          <a
            href="https://www.linkedin.com/in/harsh-bajpai-ab896028b"
            target="_blank"
          >
            <FaLinkedin />
          </a>

          <a href="https://wa.me/916387816346" target="_blank">
            <FaWhatsapp />
          </a>
        </div>
      </section>

      {/* CONTACT */}
      <section className="glass">
        <h2>Contact</h2>
        <p>Email: hb48547@gmail.com</p>
        <p>Phone: 6387816346</p>
      </section>

      {/* FOOTER */}
      <footer>
        <p>© 2026 Harsh Bajpai</p>
      </footer>
    </div>
  );
}

export default App;
