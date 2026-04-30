import { memo } from "react";

const JANK_DELAY = 100;
function MarkdownPreview({ render, options }) {
  const expensiveRender = () => {
    const start = performance.now();
    while (performance.now() - start < JANK_DELAY) {}
    return null;
  };

  return (
    <div>
      <h1>Last Render: {Date.now()}</h1>
      <div
        className="markdown-preview"
        dangerouslySetInnerHTML={{ __html: render(options.text) }}
      ></div>
      {expensiveRender()}
    </div>
  );
}
export default memo(MarkdownPreview);
