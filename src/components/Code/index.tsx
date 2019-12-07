import React from "react";

const Code: React.FC = ({ children }) => {
  return (
    <code>
      <pre>{children}</pre>
    </code>
  );
};

export default Code;
