// importing React library
import React from 'react';

// Bio component
function Bio() {
  return (
    // wrapping the content inside a div with a class of "bio"
    <div className="bio">
      <h2>About Me</h2> 
      <p>
        I'm a software engineer with a passion for learning and building
        innovative solutions. I have experience in full-stack development,
        including JavaScript, React, Node.js, and more. 
        I am always eager to learn new technologies and improve my skills.
      </p>
    </div>
  );
}

// exporting the Bio component to be used in other parts of the application
export default Bio;