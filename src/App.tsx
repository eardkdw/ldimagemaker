import React, { FunctionComponent, useState } from "react";
import Output from "./Output";
import FilePicker from "./FilePicker";
import Cropper from "./Cropper";
import { PercentCrop } from "react-image-crop";
import OverlayPicker from "./OverlayPicker";
import TextEditor from "./TextEditor";

const App: FunctionComponent = () => {
  const [backgroundImageUrl, setBackgroundImageUrl] = useState<string>("");
  const [backgroundImageWidth, setBackgroundImageWidth] = useState<number>(640);
  const [backgroundImageHeight, setBackgroundImageHeight] = useState<number>(480);
  const [crop, setCrop] = useState<PercentCrop>({ x: 0, y: 0, width: 100, height: 100, unit: "%" });
  const [overlayImageUrl, setOverlayImageUrl] = useState<string | null>(null);
  const [overlayImageWidth, setOverlayImageWidth] = useState<number | null>(null);
  const [overlayImageHeight, setOverlayImageHeight] = useState<number | null>(null);

  const [textLine1, setTextLine1] = useState<string>("");
  const [textLine1Background, setTextLine1Background] = useState<string>("#FAA61A");
  const [textLine1Foreground, setTextLine1Foreground] = useState<string>("#151721");

  const [textLine2, setTextLine2] = useState<string>("");
  const [textLine2Background, setTextLine2Background] = useState<string>("#FAA61A");
  const [textLine2Foreground, setTextLine2Foreground] = useState<string>("#151721");

  const [textLine3, setTextLine3] = useState<string>("");
  const [textLine3Background, setTextLine3Background] = useState<string>("#FAA61A");
  const [textLine3Foreground, setTextLine3Foreground] = useState<string>("#151721");

  const [textLine4, setTextLine4] = useState<string>("");
  const [textLine4Background, setTextLine4Background] = useState<string>("#FAA61A");
  const [textLine4Foreground, setTextLine4Foreground] = useState<string>("#151721");

  const [textLine5, setTextLine5] = useState<string>("");
  const [textLine5Background, setTextLine5Background] = useState<string>("#FAA61A");
  const [textLine5Foreground, setTextLine5Foreground] = useState<string>("#151721");

  const [textLine6, setTextLine6] = useState<string>("");
  const [textLine6Background, setTextLine6Background] = useState<string>("#FAA61A");
  const [textLine6Foreground, setTextLine6Foreground] = useState<string>("#151721");

  const [textLine7, setTextLine7] = useState<string>("");
  const [textLine7Background, setTextLine7Background] = useState<string>("#FAA61A");
  const [textLine7Foreground, setTextLine7Foreground] = useState<string>("#151721");

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
                <div className="field">
                  <div className="control">
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
              <TextEditor
                text={textLine1}
                foregroundColour={textLine1Foreground}
                backgroundColour={textLine1Background}
                onChange={(text, foreground, background) => {
                  setTextLine1(text);
                  setTextLine1Foreground(foreground);
                  setTextLine1Background(background);
                }}
              />
              <TextEditor
                text={textLine2}
                foregroundColour={textLine2Foreground}
                backgroundColour={textLine2Background}
                onChange={(text, foreground, background) => {
                  setTextLine2(text);
                  setTextLine2Foreground(foreground);
                  setTextLine2Background(background);
                }}
              />
              <TextEditor
                text={textLine3}
                foregroundColour={textLine3Foreground}
                backgroundColour={textLine3Background}
                onChange={(text, foreground, background) => {
                  setTextLine3(text);
                  setTextLine3Foreground(foreground);
                  setTextLine3Background(background);
                }}
              />
              <TextEditor
                text={textLine4}
                foregroundColour={textLine4Foreground}
                backgroundColour={textLine4Background}
                onChange={(text, foreground, background) => {
                  setTextLine4(text);
                  setTextLine4Foreground(foreground);
                  setTextLine4Background(background);
                }}
              />
              <TextEditor
                text={textLine5}
                foregroundColour={textLine5Foreground}
                backgroundColour={textLine5Background}
                onChange={(text, foreground, background) => {
                  setTextLine5(text);
                  setTextLine5Foreground(foreground);
                  setTextLine5Background(background);
                }}
              />
              <TextEditor
                text={textLine6}
                foregroundColour={textLine6Foreground}
                backgroundColour={textLine6Background}
                onChange={(text, foreground, background) => {
                  setTextLine6(text);
                  setTextLine6Foreground(foreground);
                  setTextLine6Background(background);
                }}
              />
              <TextEditor
                text={textLine7}
                foregroundColour={textLine7Foreground}
                backgroundColour={textLine7Background}
                onChange={(text, foreground, background) => {
                  setTextLine7(text);
                  setTextLine7Foreground(foreground);
                  setTextLine7Background(background);
                }}
              />

              <h3 className="ld-intro">Overlays</h3>
              <div className="ld-content">
                <div className="field">
                  <div className="control">
                    <OverlayPicker
                      setOverlay={(url, width, height) => {
                        setOverlayImageUrl(url);
                        setOverlayImageWidth(width);
                        setOverlayImageHeight(height);
                      }}
                    />
                  </div>
                </div>
              </div>
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
                text={[
                  {
                    text: textLine1,
                    foregroundColour: textLine1Foreground,
                    backgroundColour: textLine1Background,
                  },
                  {
                    text: textLine2,
                    foregroundColour: textLine2Foreground,
                    backgroundColour: textLine2Background,
                  },
                  {
                    text: textLine3,
                    foregroundColour: textLine3Foreground,
                    backgroundColour: textLine3Background,
                  },
                  {
                    text: textLine4,
                    foregroundColour: textLine4Foreground,
                    backgroundColour: textLine4Background,
                  },
                  {
                    text: textLine5,
                    foregroundColour: textLine5Foreground,
                    backgroundColour: textLine5Background,
                  },
                  {
                    text: textLine6,
                    foregroundColour: textLine6Foreground,
                    backgroundColour: textLine6Background,
                  },
                  {
                    text: textLine7,
                    foregroundColour: textLine7Foreground,
                    backgroundColour: textLine7Background,
                  },
                ]}
                overlays={
                  overlayImageUrl === null
                    ? []
                    : [
                        {
                          url: overlayImageUrl,
                          width: overlayImageWidth!,
                          height: overlayImageHeight!,
                        },
                      ]
                }
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default App;
