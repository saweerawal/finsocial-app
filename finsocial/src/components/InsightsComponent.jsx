import React, { useEffect, useState } from "react";
import "./InsightsComponent.css";  // Import your CSS styles
import ReactSpeedometer from "react-d3-speedometer/slim";

export default function InsightsComponent() {
  return (
    <div className="insights-container">
      <div className="speedometer">
        <ReactSpeedometer
          maxValue={999}
          value={360}
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
          ]}
        />
      </div>

      <div className="speedometer">
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
          ]}
        />
      </div>
    </div>
  );
}
