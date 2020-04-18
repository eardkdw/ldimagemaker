import React, { FunctionComponent, useState } from "react";

const SaveModal: FunctionComponent<{
  svg: SVGSVGElement;
  outputWidth: number;
  outputHeight: number;
  onClose: () => void;
}> = ({ svg, outputHeight, outputWidth, onClose }) => {
  const [dataUrl, setDataUrl] = useState<string>("about:blank");

  return (
    <div className="modal is-active">
      <div className="modal-background" />
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Download</p>
          <button className="delete" aria-label="close" onClick={onClose} />
        </header>
        <div className="modal-card-body">
          <canvas
            width={outputWidth}
            height={outputHeight}
            ref={(canvas: HTMLCanvasElement | null) => {
              if (canvas) {
                const ctx = canvas.getContext("2d");
                const svgData = URL.createObjectURL(
                  new Blob([new XMLSerializer().serializeToString(svg)], { type: "image/svg+xml" }),
                );
                const img = new Image();
                img.onload = () => {
                  ctx!.drawImage(img, 0, 0);
                  URL.revokeObjectURL(svgData);
                  setDataUrl(canvas.toDataURL("image/png"));
                };
                img.src = svgData;
              }
            }}
          />
        </div>
        <div className="modal-card-foot">
          <p className="has-text-centered">
            <a href={dataUrl} download="imagemaker.png" className="button is-success">
              Save file
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SaveModal;
