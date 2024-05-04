import React from "react";
import { Link } from "react-router-dom";

export default function Chapter ({ chapter }) {

    // const [currentSection, s]

    return (
  <div>
    <h2>{chapter.title}</h2>
    <ul>
      {chapter.sections.map((section, index) => (
        <li key={index}>
          <Link to={`${section.slug}`}>{`${chapter.id}.${section.id} ${section.name}`}</Link>
        </li>
      ))}
    </ul>
  </div>
)};
