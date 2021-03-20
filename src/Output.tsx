import React, { FunctionComponent, useRef, useState } from "react";
import SaveModal from "./SaveModal";
import TextWithBackground from "./TextWithBackground";

const Output: FunctionComponent<{
  outputWidth: number;
  outputHeight: number;
  backgroundImageUrl: string;
  backgroundImageWidth: number;
  backgroundImageHeight: number;
  backgroundImageOffsetX: number;
  backgroundImageOffsetY: number;
  text: { text: string; foregroundColour: string; backgroundColour: string }[];
  overlays: { url: string; width: number; height: number; scalepos: Array<number> }[];
}> = ({
  outputWidth,
  outputHeight,
  backgroundImageUrl,
  backgroundImageHeight,
  backgroundImageWidth,
  backgroundImageOffsetX,
  backgroundImageOffsetY,
  text,
  overlays,
}) => {
  const [showSaveModal, setShowSaveModal] = useState<boolean>(false);
  const svgRef = useRef<SVGSVGElement>(null);
  const lineHeight = outputHeight / 8;
  const textSize = outputHeight / 12;

  return (
    <>
      {showSaveModal ? (
        <SaveModal
          svg={svgRef.current!}
          outputWidth={outputWidth}
          outputHeight={outputHeight}
          onClose={() => setShowSaveModal(false)}
        />
      ) : null}
      <div style={{ position: "relative" }}>
        <svg
          ref={svgRef}
          width={outputWidth}
          height={outputHeight}
          viewBox={`0 0 ${outputWidth} ${outputHeight}`}
          style={{ width: "100%" }}
        >
          <image
            href={backgroundImageUrl}
            width={backgroundImageWidth}
            height={backgroundImageHeight}
            x={-backgroundImageOffsetX}
            y={-backgroundImageOffsetY}
          />
          {text.map(({ text, foregroundColour, backgroundColour }, i) => (
            <TextWithBackground
              key={i}
              x={0.02 * outputWidth}
              y={(i + 1.5) * lineHeight}
              textSize={textSize}
              text={text}
              foregroundColour={foregroundColour}
              backgroundColour={backgroundColour}
            />
          ))}
          {overlays.map(({ url, width, height, scalepos }) => {
            const posX = scalepos ? scalepos[0] : 0;
            const posY = scalepos ? scalepos[1] : 0;
            const scaleW = scalepos ? scalepos[2] : 1;
            const scaleH = scalepos ? scalepos[3] : 1;

            const scaledWidth =
              outputWidth / outputHeight > width / height
                ? width * scaleW * (outputHeight / height)
                : outputWidth * scaleW;
            const scaledHeight =
              outputWidth / outputHeight > width / height
                ? outputHeight * scaleH
                : height * scaleH * (outputWidth / width);

            return (
              <image
                key={url}
                href={url}
                x={(outputWidth - scaledWidth) * posX}
                y={(outputHeight - scaledHeight) * posY}
                width={scaledWidth}
                height={scaledHeight}
                data-scale={scalepos}
              />
            );
          })}
        </svg>
      </div>
      <div className="buttons">
        <button className="button" onClick={() => setShowSaveModal(true)}>
          Save image
        </button>
      </div>
    </>
  );
};

export default Output;
