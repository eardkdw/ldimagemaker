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
  overlays: { url: string; width: number; height: number }[];
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
          {overlays.map(({ url, width, height }) => {
            const scaledWidth =
              outputWidth / outputHeight > width / height
                ? width * (outputHeight / height)
                : outputWidth;
            const scaledHeight =
              outputWidth / outputHeight > width / height
                ? outputHeight
                : height * (outputWidth / width);

            return (
              <image
                key={url}
                href={url}
                x={(outputWidth - scaledWidth) / 2}
                y={(outputHeight - scaledHeight) / 2}
                width={scaledWidth}
                height={scaledHeight}
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
