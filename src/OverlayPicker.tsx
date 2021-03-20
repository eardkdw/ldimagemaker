import React, { FunctionComponent } from "react";

const OVERLAYS = [
  {
    name: "Corner Fade",
    url: "overlays/fade-black.png",
    scalepos: [1, 1, 1.0, 1.0], //scalepos is [x, y, w, h] where each is a decimal from 0-1 indicating position (0.5 is centered for x,y) or a scale factor
  },
  {
    name: "Yellow Flag",
    url: "overlays/ld-banner.png",
    scalepos: [1, 0, 1.0, 1.0],
  },
  {
    name: "Stop Brexit",
    url: "overlays/ld-logotype.png",
    scalepos: [1, 1, 1.0, 1.0],
  },
  {
    name: "Triangles",
    url: "overlays/triangles.png",
    scalepos: [1, 1, 1.0, 1.0],
  },
  {
    name: "Main Party Logo",
    url: "overlays/main-ld-logo.png",
    scalepos: [0.95, 0.95, 0.2, 0.2],
  },
  {
    name: "White Party Logo",
    url: "overlays/white-text-yellow-bird.png",
    scalepos: [0.95, 0.95, 0.2, 0.2],
  },
  {
    name: "Charcoal Party Logo",
    url: "overlays/charcoal-ld-logo.png",
    scalepos: [0.95, 0.95, 0.2, 0.2],
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
  setOverlay: (
    url: string | null,
    width: number | null,
    height: number | null,
    scalepos: Array<number>,
  ) => void;
}> = ({ setOverlay }) => (
  <div className="buttons">
    <button
      className="button"
      onClick={() => {
        setOverlay(null, null, null, [0, 0, 1, 1]);
      }}
    >
      Clear
    </button>
    {OVERLAYS.map(({ name, url, scalepos }) => (
      <button
        className="button"
        key={name}
        onClick={async () => {
          const { dataUrl, width, height } = await loadImage(url);
          setOverlay(dataUrl, width, height, scalepos);
        }}
      >
        {name}
      </button>
    ))}
  </div>
);

export default OverlayPicker;
