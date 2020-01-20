import React, { memo } from "react";
import {
  ZoomableGroup,
  ComposableMap,
  Geographies,
  Geography
} from "react-simple-maps";
import data from '../data/mapData.json';

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const rounded = num => {
  if (num > 1000000000) {
    return Math.round(num / 100000000) / 10 + "Bn";
  } else if (num > 1000000) {
    return Math.round(num / 100000) / 10 + "M";
  } else {
    return Math.round(num / 100) / 10 + "K";
  }
};

const MapChart = ({ setTooltipContent }) => {
  return (
    <>
      <ComposableMap data-tip="" projectionConfig={{ scale: 200 }}>
        <ZoomableGroup>
          <Geographies geography={data}>
            {({ geographies }) =>
              geographies.map(geo => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={() => {
                    let KEITH_FACT_TEXT;
                    let FABERGE_EGGS_COUNT;
                    const { NAME, POP_EST, FABERGE_EGGS, KEITH_FACT } = geo.properties;
                    if (!FABERGE_EGGS) {
                        FABERGE_EGGS_COUNT = "zero";
                    } else {
                        FABERGE_EGGS_COUNT = FABERGE_EGGS;
                    }
                    if (!KEITH_FACT) {
                        KEITH_FACT_TEXT = "Keith hasn't made a holy show of himself in this country yet. Check back later.";
                    } else {
                        KEITH_FACT_TEXT = KEITH_FACT;
                    }
                    setTooltipContent(`${NAME} - Faberge Eggs: ${FABERGE_EGGS_COUNT} - Keith fact: ${KEITH_FACT_TEXT}`);
                  }}
                  onMouseLeave={() => {
                    setTooltipContent("");
                  }}
                  style={{
                    default: {
                      fill: "#f7dbea",
                      outline: "none"
                    },
                    hover: {
                      fill: "#e587b9",
                      outline: "none"
                    },
                    pressed: {
                      fill: "#d74894",
                      outline: "none"
                    }
                  }}
                />
              ))
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
    </>
  );
};

export default memo(MapChart);
