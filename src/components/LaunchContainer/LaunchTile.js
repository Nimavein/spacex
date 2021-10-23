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
  LightTooltip,
} from "./LaunchTile.styles";

import { Divider } from "../LaunchesContainer/LaunchesContainer.styles";
import ShipsSection from "./ShipsSection/ShipsSection";

const LaunchTile = ({ launchData }) => {
  const { mission_name, launch_date_local, launch_site, rocket, ships, links } =
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
          <a href={links.article_link || links.video_link}>
            <LearnMoreButton>LEARN MORE</LearnMoreButton>
          </a>
        </LeftSection>
        <RightSection>
          <LaunchDateText>LAUNCH DATE</LaunchDateText>
          <LaunchDate>{launch_date_local}</LaunchDate>
          <LaunchSiteText>LAUNCH SITE</LaunchSiteText>
          <LightTooltip
            title={launch_site.site_name_long}
            placement="bottom-start"
          >
            <LaunchSite>{launch_site.site_name}</LaunchSite>
          </LightTooltip>
        </RightSection>
      </LaunchBasicInfo>
      <Divider />
      <ShipsSection shipsInfo={ships} />
    </LaunchContainer>
  );
};

export default LaunchTile;
