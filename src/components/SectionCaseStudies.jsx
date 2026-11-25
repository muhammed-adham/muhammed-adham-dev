import React from "react";

const studies = [
  {
    title: "DocNow",
    tag: "Healthcare booking front end · Personal project, 2025",
    problem:
      "Booking a doctor online should be quick and clear on any device, without a confusing flow.",
    built:
      "I designed the interface in Figma and built the whole responsive front end myself.",
    stack: "React, Vite, Tailwind CSS, Figma",
    note: "Front end only, with no back end.",
    link: "https://healthcare-app-five.vercel.app",
  },
  {
    title: "KADER Factory Website",
    tag: "Industrial company website · AOI",
    problem:
      "A factory needed a clear company website.",
    built:
      "I built it as a single-page app in vanilla JavaScript at AOI, using reusable components. AOI's sites use a custom i18n engine for English/Arabic (RTL).",
    stack: "Vanilla JavaScript, HTML5, CSS3, Bootstrap, i18n/RTL",
    link: "https://kadar-nativejs.vercel.app",
  },
  {
    title: "OGME",
    tag: "Full-stack web app · 2023–2024",
    problem:
      "A web app that needed user accounts and stored data.",
    built:
      "I worked across the stack: React front end, Node/Express API, MongoDB storage, and sign-in with JWT, Passport and Google.",
    stack: "MongoDB, Express, React, Node.js, JWT, Passport",
  },
  {
    title: "Shopify stores",
    tag: "E-commerce design · Ecomblacker, 2024–2025",
    problem: "Online brands needed clean storefronts.",
    built:
      "I worked as web designer on two Shopify stores, sundob.com and layomy.com.",
    stack: "Shopify, Figma",
    link: "https://sundob.com",
  },
];

const SectionCaseStudies = () => (
  <section className="case-studies-section">
    <h1 className="case-title hidden">case studies</h1>
    <div className="case-grid">
      {studies.map((s) => (
        <article className="case hidden" key={s.title}>
          <p className="case-tag">{s.tag}</p>
          <h2>{s.title}</h2>
          <p>
            <strong>Challenge.</strong> {s.problem}
          </p>
          <p>
            <strong>What I did.</strong> {s.built}
          </p>
          <p>
            <strong>Stack.</strong> {s.stack}
          </p>
          {s.note && <p className="case-note">{s.note}</p>}
          {s.link && (
            <a href={s.link} target="_blank" rel="noopener noreferrer">
              View live →
            </a>
          )}
        </article>
      ))}
    </div>
  </section>
);

export default SectionCaseStudies;
