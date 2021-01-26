//index.js
import React from 'react';
import ReactDOM from 'react-dom';
import Cards from './Cards';
import Sdata from './Sdata';
import './index.css';
ReactDOM.render(
    <>
        <h1 className="heading_style">Netflix Top 5 Web Series</h1>
        {Sdata.map((val)=> {
        return(
            <Cards 
                imgscr={val.imgscr}
                title={val.title}
                sname={val.sname}
                link={val.links}
            />
        );
        })}
    </>, document.getElementById("root"));


