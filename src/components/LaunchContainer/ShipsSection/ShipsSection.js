import React from "react";
import ShipContainer from "./ShipContainer/ShipContainer";
import { ShipsContainer, SectionTitle } from "./ShipsSection.styles";

const ShipsSection = ({ shipsInfo }) => {
  console.log(shipsInfo);
  return (
    <>
      <SectionTitle>RESCUE SHIPS</SectionTitle>
      <ShipsContainer>
        {shipsInfo.map((ship) => {
          return <ShipContainer key={ship.name} shipInfo={ship} />;
        })}
      </ShipsContainer>
    </>
  );
};

export default ShipsSection;
