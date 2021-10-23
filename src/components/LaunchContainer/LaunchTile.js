import React from "react";
import { LaunchContainer, Divider } from "./LaunchTile.styles";
import ShipsSection from "./ShipsSection/ShipsSection";
import MissionInfoSection from "./MissionInfoSection/MissionInfoSection";

const LaunchTile = ({ launchData }) => {
  const { mission_name, launch_date_local, launch_site, rocket, ships, links } =
    launchData;

  return (
    <LaunchContainer>
      <MissionInfoSection
        mission_name={mission_name}
        launch_date_local={launch_date_local}
        launch_site={launch_site}
        links={links}
        rocket={rocket}
      />
      <Divider />
      <ShipsSection shipsInfo={ships} />
    </LaunchContainer>
  );
};

export default LaunchTile;
