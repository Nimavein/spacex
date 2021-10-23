import React from "react";

import {
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
} from "./MissionInfoSection.styles";

const MissionInfoSection = ({
  mission_name,
  rocket,
  links,
  launch_date_local,
  launch_site,
}) => {
  const isRecovered = rocket.first_stage.cores[0].land_success === true;
  return (
    <LaunchBasicInfo>
      <LeftSection>
        <MissionText>MISSION</MissionText>
        <MissionName>{mission_name}</MissionName>
        <RocketInfoSection>
          <RocketText>ROCKET</RocketText>
          <RocketNameAndStatus>
            <RocketName>{rocket.rocket_name}</RocketName>
            <RocketStatus recovered={isRecovered}>
              {isRecovered ? "Recovered" : "Unrecovered"}
            </RocketStatus>
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
  );
};

export default MissionInfoSection;
