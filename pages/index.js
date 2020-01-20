import Layout from '../components/MyLayout';
import MapChart from '../components/MapChart';
import React, { useState } from "react";
import ReactDOM from "react-dom";
import ReactTooltip from "react-tooltip";

export default function Index(){
    const [content, setContent] = useState("");
    return (
      <Layout>
        <MapChart setTooltipContent={setContent}/>
        <ReactTooltip>{content}</ReactTooltip>

        <img src="../assets/ezgif.com-reverse.gif.jpg" alt="Bastard face"/>
      </Layout>
    );
}