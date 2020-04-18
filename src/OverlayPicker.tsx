import React, { FunctionComponent } from "react";

const OVERLAYS = [
  {
    name: "Corner Fade",
    url: "overlays/fade-black.png",
  },
  {
    name: "Yellow Flag",
    url: "overlays/ld-banner.png",
  },
  {
    name: "Stop Brexit",
    url: "overlays/ld-logotype.png",
  },
  {
    name: "Triangles",
    url: "overlays/triangles.png",
  },
];

function loadImage(url: string): Promise<{ dataUrl: string; width: number; height: number }> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
      canvas.getContext("2d")!.drawImage(img, 0, 0);

      resolve({
        dataUrl: canvas.toDataURL("image/png"),
        width: canvas.width,
        height: canvas.height,
      });
    };
    img.onerror = reject;
    img.src = url;
  });
}

const OverlayPicker: FunctionComponent<{
  setOverlay: (url: string | null, width: number | null, height: number | null) => void;
}> = ({ setOverlay }) => (
  <div className="buttons">
    <button
      className="button"
      onClick={() => {
        setOverlay(null, null, null);
      }}
    >
      Clear
    </button>
    {OVERLAYS.map(({ name, url }) => (
      <button
        className="button"
        key={name}
        onClick={async () => {
          const { dataUrl, width, height } = await loadImage(url);
          setOverlay(dataUrl, width, height);
        }}
      >
        {name}
      </button>
    ))}
  </div>
);

export default OverlayPicker;
