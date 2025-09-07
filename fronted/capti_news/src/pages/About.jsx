import React from 'react';
import '../assets/Styles/About.css';

export default function About() {
  return (
    <div className="about-container">
      {/* First Div - Intro */}
      <section className="intro-section">
        <h1>About Capti News Channel</h1>
        <p>
          Capti News Channel is a trusted name in broadcasting, delivering accurate, fast,
          and unbiased news across the globe. With a commitment to truth and transparency,
          we bring you the latest in business, politics, technology, and world affairs.
        </p>
      </section>

      {/* Second Div - Image and Content */}
      <section className="image-text-section">
        <div className="image-side">
          <img src="https://www.shutterstock.com/image-photo/corporate-portrait-multigenerational-working-team-600nw-2166007405.jpg" alt="Capti News Room" />
        </div>
        <div className="text-side">
          <h2>Our Mission</h2>
          <p>
            We aim to empower the public with knowledge through responsible journalism.
            Our editorial team upholds the highest standards of accuracy and integrity,
            ensuring every story matters and every voice is heard.
          </p>
          <h2>Our Vision</h2>
          <p>
            To be a global leader in news media, fostering a well-informed society
            through innovation and storytelling.
          </p>
        </div>
      </section>

      {/* Third Div - 3-Column Photo Grid */}
      <section className="photo-grid-section">
        <div className="photo-grid">
          <div className="grid-item">
            <img src="https://avalliance.com/wp-content/uploads/2021/06/Live-studio-PSP-4.jpg" alt="Studio" />
            <p>Live Broadcasting Studio</p>
          </div>
          <div className="grid-item">
            <img src="https://media.istockphoto.com/id/2178511504/photo/journalist-in-a-coat-interviews-on-microphone-in-urban-park-setting-during-chilly-afternoon.jpg?s=612x612&w=0&k=20&c=XV7vP0vjXFBDqwo67kEcQnA7QfKolsyV4kMPKCrmAo8=" alt="Reporters" />
            <p>Field Reporters in Action</p>
          </div>
          <div className="grid-item">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRugTJK4y_KCOQplI-OraSLsonIrYRH4u_NLg&s" alt="Control Room" />
            <p>Advanced Newsroom Technology</p>
          </div>
        </div>
      </section>
    </div>
  );
}
