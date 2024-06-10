import React from 'react';

function ContactForm() {
  return (
    <form>
      <label>
        Name:
        <input type="text" name="name" />
      </label>
      <label>
        Email:
        <input type="email" name="email" />
      </label>
      <label>
        Message:
        <textarea name="message" />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default ContactForm;