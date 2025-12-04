import React from "react";
import useScrollAnimation from '../hooks/useScrollAnimation'
import "./Skills.css";

// Skills with brand colors - these colors are applied on hover
const skills = [
  {
    name: "HTML",
    color: "#E65100",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
        <path fill="#E65100" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path>
        <path fill="#FF6D00" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path>
        <path fill="#FFF" d="M24,25v-4h8.6l-0.7,11.5L24,35.1v-4.2l4.1-1.4l0.3-4.5H24z M32.9,17l0.3-4H24v4H32.9z"></path>
        <path fill="#EEE" d="M24,30.9v4.2l-7.9-2.6L15.7,27h4l0.2,2.5L24,30.9z M19.1,17H24v-4h-9.1l0.7,12H24v-4h-4.6L19.1,17z"></path>
      </svg>
    ),
  },
  {
    name: "CSS",
    color: "#0277BD",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
        <path fill="#0277BD" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path>
        <path fill="#039BE5" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path>
        <path fill="#FFF" d="M33.1 13L24 13 24 17 28.9 17 28.6 21 24 21 24 25 28.4 25 28.1 29.5 24 30.9 24 35.1 31.9 32.5 32.6 21 32.6 21z"></path>
        <path fill="#EEE" d="M24,13v4h-8.9l-0.3-4H24z M19.4,21l0.2,4H24v-4H19.4z M19.8,27h-4l0.3,5.5l7.9,2.6v-4.2l-4.1-1.4L19.8,27z"></path>
      </svg>
    ),
  },
  {
    name: "JavaScript",
    color: "#F7DF1E",
    svg: (
      <svg viewBox="0 0 100 100">
        <rect width="100" height="100" fill="#F7DF1E" />
        <rect x="20" y="20" width="60" height="60" fill="#323330" />
        <text x="50" y="70" fontSize="45" fill="#F7DF1E" textAnchor="middle" fontWeight="bold">JS</text>
      </svg>
    ),
  },
  {
    name: "TypeScript",
    color: "#3178C6",
    svg: (
      <svg viewBox="0 0 100 100">
        <rect width="100" height="100" fill="#3178C6" />
        <text x="50" y="70" fontSize="50" fill="#fff" textAnchor="middle" fontWeight="bold">TS</text>
      </svg>
    ),
  },
  {
    name: "React",
    color: "#61DAFB",
    svg: (
      <svg viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="8" fill="#61DAFB" />
        <g stroke="#61DAFB" strokeWidth="5" fill="none">
          <ellipse rx="45" ry="18" cx="50" cy="50" transform="rotate(60 50 50)" />
          <ellipse rx="45" ry="18" cx="50" cy="50" transform="rotate(0 50 50)" />
          <ellipse rx="45" ry="18" cx="50" cy="50" transform="rotate(120 50 50)" />
        </g>
      </svg>
    ),
  },
  {
    name: "Next.js",
    color: "#000000",
    svg: (
      <svg viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="48" fill="#000" />
        <text x="50" y="65" fontSize="50" fill="#fff" textAnchor="middle" fontWeight="bold">N</text>
      </svg>
    ),
  },
  {
    name: "Tailwind",
    color: "#38BDF8",
    svg: (
      <svg viewBox="0 0 100 100">
        <path
          fill="#38BDF8"
          d="M50 20c-12 0-20 7-23 20 5-7 10-9 17-8 3 1 6 3 9 6 5 5 10 9 19 9 12 0 20-7 23-20-5 7-10 9-17 8-3-1-6-3-9-6-5-5-10-9-19-9z"
        />
        <path
          fill="#38BDF8"
          d="M27 52c-12 0-20 7-23 20 5-7 10-9 17-8 3 1 6 3 9 6 5 5 10 9 19 9 12 0 20-7 23-20-5 7-10 9-17 8-3-1-6-3-9-6-5-5-10-9-19-9z"
        />
      </svg>
    ),
  },
  {
    name: "MySQL",
    color: "#00618A",
    svg: (
      <svg viewBox="0 0 100 100">
        <path fill="#00618A" d="M35 70c2-15 15-33 30-33s22 13 22 22-13 15-30 15H35z" />
        <circle cx="60" cy="40" r="8" fill="#E48E00" />
      </svg>
    ),
  },
  {
    name: "PostgreSQL",
    color: "#336791",
    svg: (
      <svg viewBox="0 0 100 100">
        <path
          fill="#336791"
          d="M50 15c-16 0-28 11-28 27 0 25 28 42 28 42s28-17 28-42c0-16-12-27-28-27z"
        />
        <circle cx="50" cy="45" r="11" fill="#fff" />
      </svg>
    ),
  },
  {
    name: "Figma",
    color: "#F24E1E",
    svg: (
      <svg viewBox="0 0 100 100">
        <circle cx="35" cy="25" r="15" fill="#F24E1E" />
        <circle cx="65" cy="25" r="15" fill="#FF7262" />
        <circle cx="35" cy="50" r="15" fill="#A259FF" />
        <circle cx="65" cy="50" r="15" fill="#1ABCFE" />
        <circle cx="35" cy="75" r="15" fill="#0ACF83" />
      </svg>
    ),
  },
  {
    name: "GitHub",
    color: "#1f2937",
    svg: (
      <svg viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="45" fill="#000" />
        <path
          fill="#fff"
          d="M50 20C33 20 20 33 20 50c0 13 8 24 20 28 1.5.3 2-1 2-2v-5c-8 2-10-4-10-4-1.5-4-4-5-4-5-3-2 .2-2 .2-2 3 .2 5 3 5 3 3 5 8 4 10 3 .3-2 1-4 2-5-7-1-14-3-14-15 0-3 1-6 3-8-.3-1-1-5 .3-10 0 0 2-1 7 3 2-1 5-1 7-1s5 0 7 1c5-4 7-3 7-3 1.3 5 .6 9 .3 10 2 2 3 5 3 8 0 12-7 14-14 15 1 1 2 3 2 6v8c0 1 .5 2.5 2 2.5 12-4 20-15 20-28 0-17-13-30-30-30z"
        />
      </svg>
    ),
  },
];

export default function Skills() {
  const sectionRef = useScrollAnimation('slide-in-up')

  return (
    <section id="skills" ref={sectionRef} className="skills-section">
      <h2 className="skills-title">Skills</h2>

      <div className="skills-grid">
        {skills.map((skill) => (
          <div
            className="skill-card"
            key={skill.name}
            style={{ "--brand-color": skill.color }}
          >
            <div className="skill-content">
              <div className="skill-icon">{skill.svg}</div>
              <div className="skill-name">{skill.name}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
