import React, { FunctionComponent, useState } from "react";
import Output from "./Output";
import FilePicker from "./FilePicker";
import Cropper from "./Cropper";
import { PercentCrop } from "react-image-crop";

const App: FunctionComponent = () => {
  const [backgroundImageUrl, setBackgroundImageUrl] = useState<string>("");
  const [backgroundImageWidth, setBackgroundImageWidth] = useState<number>(640);
  const [backgroundImageHeight, setBackgroundImageHeight] = useState<number>(480);
  const [crop, setCrop] = useState<PercentCrop>({ x: 0, y: 0, width: 100, height: 100, unit: "%" });

  return (
    <>
      <header className="hero is-primary">
        <div className="hero-body">
          <div className="container">
            <h1 className="ld-title">Lib Dem Image Maker</h1>
          </div>
        </div>
      </header>
      <main className="section">
        <div className="container">
          <div className="columns">
            <div className="column">
              <h2 className="ld-subtitle">Design</h2>
              <h3 className="ld-intro">Background</h3>
              <div className="ld-content">
                <div className="control">
                  <div className="field">
                    <FilePicker
                      onChange={(url, width, height) => {
                        setBackgroundImageUrl(url);
                        setBackgroundImageWidth(width);
                        setBackgroundImageHeight(height);
                      }}
                    />
                  </div>
                </div>
                <Cropper imageUrl={backgroundImageUrl} crop={crop} setCrop={setCrop} />
              </div>
              <h3 className="ld-intro">Text</h3>
              <h3 className="ld-intro">Overlays</h3>
            </div>
            <div className="column">
              <h2 className="ld-subtitle">Output</h2>
              <Output
                outputWidth={backgroundImageWidth * ((crop.width ?? 0) / 100)}
                outputHeight={backgroundImageHeight * ((crop.height ?? 0) / 100)}
                backgroundImageWidth={backgroundImageWidth}
                backgroundImageHeight={backgroundImageHeight}
                backgroundImageUrl={backgroundImageUrl}
                backgroundImageOffsetX={backgroundImageWidth * ((crop.x ?? 0) / 100)}
                backgroundImageOffsetY={backgroundImageHeight * ((crop.y ?? 0) / 100)}
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default App;
