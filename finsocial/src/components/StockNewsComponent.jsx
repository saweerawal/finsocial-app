import React, { useState } from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "../Sass/StockNewsComponent.scss";
import { AutoComplete } from "antd";
import FALLBACK_IMAGE from '../assets/Finsocial.png';

const onMediaFallback = event => event.target.src = FALLBACK_IMAGE;



export default function StockNewsComponent() {
    const [dataArray, setDataArray] = useState([]);
    const [counter, setCounter] = useState(0);
    const regicomponentDidMountster = async () => {
      console.log(counter);
      if (counter <= 1) {
      let res = await fetch(
        `https://newsapi.org/v2/everything?q=india-stocks&apiKey=1647613012524f3caecd4562125d2ca5`      
      );
      let data = await res.json();
      let arr = [...data.articles];
      setDataArray([...arr]);
      setCounter(counter + 1);
      console.log(dataArray);
      }
    };

    try{
    console.log("i am constructor");
    if(counter <= 1){
      setCounter(counter + 1);
      regicomponentDidMountster();}
    }
    catch (err) {
        console.log(err);
        toast.error("Cannot Fetch Stock News");
      }
    return (
      <ul style={{marginLeft: '60px'}}>
        {dataArray.map((p, index) => (  

        <li key={index} style={{display: 'inline-flex', flexDirection: 'column', padding: '30px'}}>
            <Card sx={{ maxWidth: 345, maxHeight: 450, height: 450 }}>
            <CardMedia
              sx={{ height: '54%' }}
              image={p.urlToImage}
              title="Contemplative Reptile"
              onError={onMediaFallback}
              component="img"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" sx={{ fontSize: "19px"}}>
                {p.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ textOverflow: "ellipsis", overflow: "hidden", whiteSpace: "noWrap", maxWidth: "100%" }}>
                {p.description}
              </Typography>
            </CardContent>
            <CardActions sx={{ maxHeight: '20%'}}>
              <Button style={{marginLeft: '5px'}} size="small" onClick={event =>  window.location.href=p.url}>Learn More</Button>
            </CardActions>
          </Card> 
    </li>
))}  
    </ul>          
    );
}

