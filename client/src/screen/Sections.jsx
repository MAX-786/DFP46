import React from "react";

export default function Section ({ chapterId, sectionIndex }) {
  // Assuming some data structure to retrieve content for a section
  const sectionContent = `Content for ${chapterId} - ${sectionIndex}`;

  return (
    <div>
      <h3>{sectionContent}</h3>
      <p>{sectionContent}</p>
    </div>
  );
};
