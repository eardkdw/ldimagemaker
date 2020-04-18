import React, { FunctionComponent, useState } from "react";

const TextWithBackground: FunctionComponent<{
  x: number;
  y: number;
  textSize: number;
  text: string;
  foregroundColour: string;
  backgroundColour: string;
}> = ({ x, y, text, foregroundColour, backgroundColour, textSize }) => {
  const [backgroundWidth, setBackgroundWidth] = useState<number>(0);
  const padding = textSize * 0.1;

  if (text === "") {
    return null;
  }

  return (
    <>
      <rect
        x={-padding}
        y={y - textSize + padding}
        transform={`rotate(-5 ${x} ${y})`}
        fill={backgroundColour}
        height={textSize + 2 * padding}
        width={x + backgroundWidth + 3 * padding}
      />
      <text
        x={x + padding}
        y={y + padding}
        fontFamily="Open Sans"
        fontWeight="700"
        fontSize={`${textSize}px`}
        fill={foregroundColour}
        transform={`rotate(-5 ${x} ${y})`}
        ref={(element: SVGTextElement) => {
          if (element) {
            setBackgroundWidth(element.getBBox().width);
          }
        }}
      >
        {text}
      </text>
    </>
  );
};

export default TextWithBackground;
