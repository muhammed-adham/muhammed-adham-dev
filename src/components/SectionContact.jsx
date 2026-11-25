import React from "react";

const SectionContact = () => {
  return (
    <>
      <section className="contact-section">
        <p className="hidden">get in touch</p>
        <h1 className="hidden">contact me</h1>
        <p className="email">
          <a href='mailto:muharaafat@gmail.com' target="_blank" className="hidden">
            muharaafat@gmail.com
            </a>
            </p>
        <p className="email">
          <a href="https://www.linkedin.com/in/muhammed-adham-a7b9423b9/" target="_blank" rel="noopener noreferrer" className="hidden">
            linkedin
          </a>
          {" · "}
          <a href="https://github.com/muhammed-adham" target="_blank" rel="noopener noreferrer" className="hidden">
            github
          </a>
        </p>
        <p className="rights">copyright 2026 Muhammed Adham, all rights reserved</p>
      </section>
    </>
  );
};

export default SectionContact;
