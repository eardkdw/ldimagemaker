import React, { ChangeEvent, FunctionComponent } from "react";

const TextEditor: FunctionComponent<{
  text: string;
  foregroundColour: string;
  backgroundColour: string;
  onChange: (text: string, foregroundColour: string, backgroundColour: string) => void;
}> = ({ text, foregroundColour, backgroundColour, onChange }) => {
  return (
    <div className="field is-grouped">
      <div className="control">
        <input
          className="input"
          value={text}
          onChange={(ev: ChangeEvent<HTMLInputElement>) =>
            onChange(ev.currentTarget.value, foregroundColour, backgroundColour)
          }
        />
      </div>
    </div>
  );
};

export default TextEditor;
