import React, { useEffect, useState } from "react";
import {
  AiOutlineSearch,
} from "react-icons/ai";
import "../Sass/InsightsComponent.scss";  // Import your CSS styles
import ReactSpeedometer from "react-d3-speedometer/slim";

export default function InsightsComponent() {
  const [searchInput, setSearchInput] = useState("");
  const [showHide, setshowHide] = useState([false, Number])
  const buttonClick = (index) => {
    setshowHide([true, index])
  }
  const company = ["TCS", "Infosys", "Tata", "HDFC", "SBI", "Reliance", "Zomato", "Wipro", "HCL", "ITC"]
  
  const company_sentiment_value = [360, 450, 100, 780, 460, 500, 680, 260, 670, 430]

  const company_market_value = [520, 670, 270, 780, 400, 300, 900, 340, 472, 780]

  const current_price_company = [120, 110, 100, 190, 200, 140, 150, 210, 104, 118]

  return (
     
    <div>
      <div className="search-stocks">
      <input
        placeholder="Search Stocks.."
        onChange={(event) => setSearchInput(event.target.value)}
      />
    </div>

    <div className="company-stocks">
    <ul>
        {company.map((p, index) => (  
    <li key={index} style={{display: 'inline-flex', flexDirection: 'column', paddingTop: '1%', paddingLeft: '3%'}}>
      <button style={{fontWeight: showHide[1] === index ? "bold" : "normal", borderWidth: showHide[1] === index ? "2px" : "1px", borderColor: showHide[1] === index ? "black" : "#bbbbbb" }} onClick={() => buttonClick(index)}>{p}</button>
      </li>
      ))}  
      </ul>   


    </div>

    {showHide[0] && (
      <div>
        <div className="stock-heading">
    <h2>{company[showHide[1]]}</h2>
    <h3>Current Stock Price: {current_price_company[showHide[1]]}</h3>
       </div>
    <div className="insights-container">
      <div className="speedometer">
        <ReactSpeedometer
          maxValue={999}
          value={company_sentiment_value[showHide[1]]}
          width={360}
          height={260}
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
          value={company_market_value[showHide[1]]}
          width={360}
          height={260}
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
    </div>
    )}
    </div>
  );
}
