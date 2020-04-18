import React, { ChangeEvent, FunctionComponent } from "react";

const FilePicker: FunctionComponent<{
  onChange: (imageDataUrl: string, imageWidth: number, imageHeight: number) => void;
}> = ({ onChange }) => (
  <div className="file">
    <label className="file-label">
      <input
        className="file-input"
        type="file"
        accept="image/*"
        onChange={(ev: ChangeEvent<HTMLInputElement>) => {
          const file = ev.currentTarget.files![0];
          if (file) {
            const reader = new FileReader();
            reader.addEventListener("load", () => {
              const image = new Image();
              image.onload = () => {
                onChange(image.src, image.width, image.height);
              };
              image.src = reader.result as string;
            });
            reader.readAsDataURL(file);
          }
        }}
      />
      <span className="file-cta">
        <span className="file-label">Choose an image…</span>
      </span>
    </label>
  </div>
);

export default FilePicker;
