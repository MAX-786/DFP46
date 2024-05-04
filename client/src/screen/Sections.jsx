import React from "react";

export default function Section({ chapter, section }) {
  // Assuming some data structure to retrieve content for a section
  const sectionContent = `Content for ${chapter.name} - ${chapter.id}.${section.id} ${section.name}`;

  return (
    <div>
      <h1>{sectionContent}</h1>
      <p>{sectionContent}</p>
    </div>
  );
}
