import React from "react";
import styled from "styled-components";


import hljs from 'highlight.js';
import go from "highlight.js/lib/languages/go";
hljs.registerLanguage("go", go)

const Pre = styled.pre`
  border-radius: 1rem;
  padding: 1rem 1.5rem !important;
  line-height: 1.8rem;
  margin: 0.5rem 0;
`;

const Code: React.FC = ({ children }) => {
  const ref = React.createRef<HTMLPreElement>();

  React.useEffect(() => {
    hljs.highlightBlock(ref.current!);
  }, [ref]);

  return (
    <Pre ref={ref}>
      <code className="go">{children}</code>
    </Pre>
  );
};

export default Code;
