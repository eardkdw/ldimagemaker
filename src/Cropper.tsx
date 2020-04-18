import React, { ChangeEvent, FunctionComponent, useState } from "react";
import ReactCrop, { PercentCrop } from "react-image-crop";

import "react-image-crop/lib/ReactCrop.scss";

const Cropper: FunctionComponent<{
  imageUrl: string;
  crop: PercentCrop;
  setCrop: (crop: PercentCrop) => void;
}> = ({ imageUrl, crop, setCrop }) => {
  const [enableCrop, setEnableCrop] = useState<boolean>(false);

  return (
    <>
      <div className="control">
        <div className="field">
          <label className="checkbox">
            <input
              type="checkbox"
              checked={enableCrop}
              disabled={!imageUrl}
              onChange={(ev: ChangeEvent<HTMLInputElement>) => {
                setEnableCrop(ev.currentTarget.checked);
                if (!ev.currentTarget.checked) {
                  setCrop({ x: 0, y: 0, width: 100, height: 100, unit: "%" });
                }
              }}
            />{" "}
            Crop image
          </label>
        </div>
      </div>
      {enableCrop ? (
        <>
          <div className="control">
            <div className="field">
              <ReactCrop
                src={imageUrl}
                crop={crop}
                onChange={(crop, percentCrop) => setCrop(percentCrop)}
              />
            </div>
          </div>
          <div className="control">
            <div className="field">
              <div className="buttons">
                <button
                  className="button"
                  onClick={() => {
                    setCrop({ x: 0, y: 0, width: 100, height: 100, unit: "%" });
                  }}
                >
                  Reset crop
                </button>
                <button
                  className="button"
                  onClick={() => {
                    setCrop({ aspect: 1200 / 628, unit: "%" });
                  }}
                >
                  Crop for Facebook
                </button>
                <button
                  className="button"
                  onClick={() => {
                    setCrop({ aspect: 1200 / 675, unit: "%" });
                  }}
                >
                  Crop for Twitter
                </button>
                <button
                  className="button"
                  onClick={() => {
                    setCrop({ aspect: 1, unit: "%" });
                  }}
                >
                  Crop for Instagram
                </button>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default Cropper;
