import React from "react";

import instagramLogo from '../assets/owner/instagram.png'
import twitterLogo from '../assets/owner/twitter.png'
import moreIcon from '../assets/owner/more.png'
import './Main.css'
const Main = () => {
  return (
    <div className="main">
      <div className="mainContent">
        <div className="punkHighlight">
          <div className="punkContainer">
            <img
              className="selectedPunk"
              src={
                "https://lh3.googleusercontent.com/STE8tbZbNQdsQM08ub4pB5uTi4DEqMgL_fEDBar5psDlrQWJlCirRK2YyylKAwFXCPkPIh0PcxWI0TkSqvxnBCu7r9ly9d4_DFyi=w600"
              }
              //   src={activePunk.image_original_url}
              alt=""
            />
          </div>
        </div>
        <div className="punkDetails" style={{ color: "#fff" }}>
          <div className="title">activePunk.name
          <span className="itemNumber">.#3</span>
          </div>
        <div className="owner">
          <div className="ownerImageContainer">
            <img
              src="https://lh3.googleusercontent.com/STE8tbZbNQdsQM08ub4pB5uTi4DEqMgL_fEDBar5psDlrQWJlCirRK2YyylKAwFXCPkPIh0PcxWI0TkSqvxnBCu7r9ly9d4_DFyi=w600"
              alt=""
              style={{width:"50px"}}
            
            />
          </div>
          <div className="ownerDetails">
            <div className="ownerNameAndHandle">
              <div>Wallet Address</div>
              <div className="ownerHandle"> @kasunhasanga96</div>
            </div>
            <div className="ownerLink">
              <img
              src={instagramLogo} alt=""
              />
            </div>
            <div className="ownerLink">
              <img
              src={twitterLogo} alt=""
              />
            </div>
            <div className="ownerLink">
              <img
              src={moreIcon} alt=""
              />
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
