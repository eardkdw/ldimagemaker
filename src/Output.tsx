import React, { FunctionComponent, useRef, useState } from "react";
import SaveModal from "./SaveModal";

const Output: FunctionComponent<{
  outputWidth: number;
  outputHeight: number;
  backgroundImageUrl: string;
  backgroundImageWidth: number;
  backgroundImageHeight: number;
  backgroundImageOffsetX: number;
  backgroundImageOffsetY: number;
}> = ({
  outputWidth,
  outputHeight,
  backgroundImageUrl,
  backgroundImageHeight,
  backgroundImageWidth,
  backgroundImageOffsetX,
  backgroundImageOffsetY,
}) => {
  const [showSaveModal, setShowSaveModal] = useState<boolean>(false);
  const svgRef = useRef<SVGSVGElement>(null);

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
        <svg ref={svgRef} viewBox={`0 0 ${outputWidth} ${outputHeight}`} style={{ width: "100%" }}>
          <image
            href={backgroundImageUrl}
            width={backgroundImageWidth}
            height={backgroundImageHeight}
            x={-backgroundImageOffsetX}
            y={-backgroundImageOffsetY}
          />
        </svg>
      </div>
      <div className="buttons">
        <div className="button" onClick={() => setShowSaveModal(true)}>
          Save image
        </div>
      </div>
    </>
  );
};

export default Output;
