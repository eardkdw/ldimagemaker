import React, { FunctionComponent, useState } from "react";
import Output from "./Output";
import FilePicker from "./FilePicker";

const App: FunctionComponent = () => {
  const [backgroundImageUrl, setBackgroundImageUrl] = useState<string>("");
  const [backgroundImageWidth, setBackgroundImageWidth] = useState<number>(640);
  const [backgroundImageHeight, setBackgroundImageHeight] = useState<number>(480);

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
                <FilePicker
                  onChange={(url, width, height) => {
                    setBackgroundImageUrl(url);
                    setBackgroundImageWidth(width);
                    setBackgroundImageHeight(height);
                  }}
                />
              </div>
              <h3 className="ld-intro">Text</h3>
              <h3 className="ld-intro">Overlays</h3>
            </div>
            <div className="column">
              <h2 className="ld-subtitle">Output</h2>
              <Output
                outputWidth={backgroundImageWidth}
                outputHeight={backgroundImageHeight}
                backgroundImageWidth={backgroundImageWidth}
                backgroundImageHeight={backgroundImageHeight}
                backgroundImageUrl={backgroundImageUrl}
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default App;
