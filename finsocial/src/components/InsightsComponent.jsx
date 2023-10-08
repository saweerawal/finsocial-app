import React, { useEffect, useState } from "react";
/*import "../Sass/InsightsComponent.scss";*/

import ReactSpeedometer from "react-d3-speedometer/slim"
// and just use it

export default function InsightsComponent() {
  return (
    <div className="">
    <ReactSpeedometer
    maxValue={999} 
    value={900}
    currentValueText="Sentiment Analysis"
    segments={3}
    customSegmentLabels={[
      {
        text: "Sell",
        position: "INSIDE",
        color: "#555",
      },
      {
        text: "Hold",
        position: "INSIDE",
        color: "#555",
      },
      {
        text: "Buy",
        position: "INSIDE",
        color: "#555",
      },
    ]} />

<ReactSpeedometer
    maxValue={999} 
    value={900}
    currentValueText="Market Analysis"
    segments={3}
    customSegmentLabels={[
      {
        text: "Sell",
        position: "INSIDE",
        color: "#555",
      },
      {
        text: "Hold",
        position: "INSIDE",
        color: "#555",
      },
      {
        text: "Buy",
        position: "INSIDE",
        color: "#555",
      },
    ]} />
    </div>
  );
}