import React from 'react';
import './AboutMe.css';

function AboutMe() {
  return (
    <section className="about-me" id="about">
      <div className="about-me-content">
        <img src="path-to-photo.png" alt="Developer Avatar" className="avatar" />
        <h2>About Me</h2>
        <p>
        My name is Nick Price, I have been interested in creating and innovating since I was real young. Dropping out of college at the age of 19 still loving architecture and wanting to develop. I taught myself how to day trade and read markets. I went back to engineering school at 21 only to change my major to business one semester later.  I really enjoy problem solving and engineering innovating technology. Some of the ideas I was building into my websites have now been achieved by other companies, as I was young and did not know how to proceed, Now, I feel that one of the last pieces to the puzzle was this course and my dedication to learning as many new languages as possible and understanding them.
        </p>
      </div>
    </section>
  );
}

export default AboutMe;
