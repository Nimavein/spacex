import React from "react";
import {
  LaunchContainer,
  LaunchBasicInfo,
  LeftSection,
  RightSection,
  MissionText,
  MissionName,
  RocketInfoSection,
  RocketText,
  RocketNameAndStatus,
  RocketName,
  RocketStatus,
  LaunchDate,
  LaunchDateText,
  LaunchSite,
  LaunchSiteText,
  LearnMoreButton,
} from "./LaunchTile.styles";

import { Divider } from "../LaunchesContainer/LaunchesContainer.styles";

const LaunchTile = ({ launchData }) => {
  const { mission_name, launch_date_local, launch_site, links, rocket, ships } =
    launchData;
  console.log(launchData);
  return (
    <LaunchContainer>
      <LaunchBasicInfo>
        <LeftSection>
          <MissionText>MISSION</MissionText>
          <MissionName>{mission_name}</MissionName>
          <RocketInfoSection>
            <RocketText>ROCKET</RocketText>
            <RocketNameAndStatus>
              <RocketName>{rocket.rocket_name}</RocketName>
              <RocketStatus recovered>Recovered</RocketStatus>
            </RocketNameAndStatus>
          </RocketInfoSection>
          <LearnMoreButton>LEARN MORE</LearnMoreButton>
        </LeftSection>
        <RightSection>
          <LaunchDateText>LAUNCH DATE</LaunchDateText>
          <LaunchDate>{launch_date_local}</LaunchDate>
          <LaunchSiteText>LAUNCH SITE</LaunchSiteText>
          <LaunchSite>{launch_site.site_name}</LaunchSite>
        </RightSection>
      </LaunchBasicInfo>
      <Divider />
    </LaunchContainer>
  );
};

export default LaunchTile;
