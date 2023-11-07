import React, { useEffect, useState } from "react";
import {
  AiOutlineSearch,
} from "react-icons/ai";
import "../Sass/InsightsComponent.scss";  // Import your CSS styles
import { getAllStocks } from "../api/FirestoreAPI";
import { useNavigate } from "react-router-dom";
import ReactSpeedometer from "react-d3-speedometer/slim";

export default function InsightsComponent() {
  const [stocks, setStocks] = useState([]);
  const [currentStock, setCurrentStock] = useState({});
  const [filteredStocks, setFilteredStocks] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [showHide, setshowHide] = useState([false, Number]);
  let navigate = useNavigate();

  const openStock = (stock) => {
    setCurrentStock(stock);
    setshowHide([true, 11]);
    setSearchInput("");
  };

  const handleSearch = () => {
    if (searchInput !== "") {
      let searched = stocks.filter((stock) => {
        return Object.values(stock)
          .join("")
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
      setFilteredStocks(searched);
    } else {
      setFilteredStocks(stocks);
    }
  };

  useEffect(() => {
    let debounced = setTimeout(() => {
      handleSearch();
    }, 10);

    return () => clearTimeout(debounced);
  }, [searchInput]);

  useEffect(() => {
    getAllStocks(setStocks);
  }, []);

  const buttonClick = (index) => {
    setshowHide([true, index])
    setCurrentStock({});
  }
  const company = ["TCS", "Infosys", "TataComm", "HDFC", "SBI", "Reliance", "Zomato", "Wipro", "HCL", "ITC"]

  const company_symbol = ["TCS", "INFY", "TATACOMM", "HDFCBANK", "SBIN", "RELIANCE", "ZOMATO", "WIPRO", "HCLTECH", "ITC"]
  
  const company_sentiment_value = [360, 450, 100, 780, 460, 500, 680, 260, 670, 430]

  const company_market_value = [520, 670, 270, 780, 400, 300, 900, 340, 472, 780]

  const current_price_company = [120, 110, 100, 190, 200, 140, 150, 210, 104, 118]

  return (
     
    <div>
      {searchInput.length === 0 ? (
      <></>
    ) : (
      <div className="stocksearch-results">
        {filteredStocks.length === 0 ? (
          <div className="stocksearch-inner">No Results Found..</div>
        ) : (
          
          filteredStocks.map((stock) => (
            <div className="stocksearch-inner" onClick={() => openStock(stock)}>
              <p className="companyname">{stock.companyName}</p>  
            </div>
          )) 
        )}
      </div>
    )}

      <div className="search-stocks">
      <input
        placeholder="Search Stocks.."
        value={searchInput}
        onChange={event => {
          setSearchInput(event.target.value)}}
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
    <h2>{(showHide[1]==11) ? currentStock.companyName : company[showHide[1]] }</h2>
    {/*<h3>Current Stock Price: {(showHide[1]==-1) ? currentStock.expertAnalysis : current_price_company[showHide[1]]}</h3>*/}
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
          value={(showHide[1]==11) ? currentStock.expertAnalysis : company_market_value[showHide[1]]}
          width={360}
          height={260}
          currentValueText="Expert Analysis"
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

    <iframe className="iframe-prop"
    width="66%"
    height="500px"
    style={{
      background: '#f0f0f0',
      padding: '10px',
      border: 'none',
      borderRadius: '15px',
      boxShadow: '0 2px 4px 0 rgba(0,0,0,.2)'
    }}
    src={`https://jika.io/embed/area-chart?symbol=${ (showHide[1]==11) ? currentStock.symbol  : company_symbol[showHide[1]] + ".NS" }&selection=one_month&closeKey=close`}
/>
    </div>
    )}
    </div>
  );
}
