import React, { ChangeEvent } from "react";
import "./index.css";

interface ITextBlockProps {
  value: string;
  onChange?: Function;
  type?: string;
  readOnly?: boolean;
}

const TextBlock: React.FC<ITextBlockProps> = (props) => {
  const handleCopy = (value: string) => {
    navigator.clipboard.writeText(value);
  };

  const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const target = e.target as HTMLTextAreaElement;
    if (props.onChange) props.onChange(target.value);
  };

  return (
    <div className="TextBlock">
      <div className="header">
        <div>{props.type}</div>
        <div className="material-symbols-rounded icon"></div>
        <div
          role="button"
          className="material-symbols-rounded copy-icon"
          title="click to copy"
          onClick={() => handleCopy(props.value)}
        >
          content_copy
        </div>
      </div>
      <textarea
        className="content"
        placeholder={props.readOnly ? "" : "Click to edit..."}
        value={props.value}
        onChange={onChange}
        spellCheck={false}
        readOnly={props.readOnly}
        style={{ cursor: props.readOnly ? "pointer" : "text" }}
      />
    </div>
  );
};

export default TextBlock;
