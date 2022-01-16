import React from "react";

const PreviewPopUp = () => {
  return (
    <div className="absolute top-0 right-0">
      <div>
        <div>
          <div>
            <i className="fas fa-video"></i>
            <span>Previews</span>
            <div>
              <span></span>
            </div>
          </div>
          <p>Preview won't play while browser</p>
        </div>
        <div>
          <div>
            <i className="fas fa-volume-up"></i>
            <span>Previews</span>
            <div>
              <span></span>
            </div>
          </div>
          <p>Sound is off while browser</p>
        </div>
      </div>
    </div>
  );
};

export default PreviewPopUp;
