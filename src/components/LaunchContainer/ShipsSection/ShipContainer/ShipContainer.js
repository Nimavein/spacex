import React from "react";
import {
  ShipTile,
  ShipImage,
  ShipInfo,
  ShipName,
  Divider,
  HomePortSection,
  HomePortText,
  HomePort,
  WeightSection,
  WeightText,
  Weight,
} from "./ShipContainer.styles";

const ShipContainer = ({ shipInfo }) => {
  return (
    <ShipTile>
      <ShipImage src={shipInfo.image} alt="Ship" />
      <ShipInfo>
        <ShipName> {shipInfo.name}</ShipName>
        <Divider />
        <HomePortSection>
          <HomePortText>HOME PORT</HomePortText>
          <HomePort>{shipInfo.home_port}</HomePort>
        </HomePortSection>
        <WeightSection>
          <WeightText>WEIGHT [KG]</WeightText>
          <Weight>{shipInfo.weight_kg ? shipInfo.weight_kg : "Unknown"}</Weight>
        </WeightSection>
      </ShipInfo>
    </ShipTile>
  );
};

export default ShipContainer;
