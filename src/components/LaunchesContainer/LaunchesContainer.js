import React from "react";
import {
  SectionContainer,
  SpacexLogo,
  LeftArrow,
  RightArrow,
  LeftDisabledArrow,
  RightDisabledArrow,
  Divider,
} from "./LaunchesContainer.styles";
import Carousel, { arrowsPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { useLaunchesData } from "../../contextProviders/launchesContext";
import LaunchTile from "../LaunchContainer/LaunchTile";

const LaunchesContainer = () => {
  const launches = useLaunchesData();
  return (
    <SectionContainer>
      <SpacexLogo src="/spacex-logo.svg" alt="spacex-logo" />
      <Divider />

      <Carousel
        plugins={[
          {
            resolve: arrowsPlugin,
            options: {
              arrowLeft: <LeftArrow src="/left-arrow.svg" alt="left-arrow" />,
              arrowLeftDisabled: (
                <LeftDisabledArrow
                  src="/disabled-left-arrow.svg"
                  alt="left-arrow"
                />
              ),
              arrowRight: (
                <RightArrow src="/right-arrow.svg" alt="right-arrow" />
              ),
              arrowRightDisabled: (
                <RightDisabledArrow
                  src="/disabled-right-arrow.svg"
                  alt="right-arrow"
                />
              ),
              addArrowClickHandler: true,
            },
          },
        ]}
      >
        {launches.map((launch) => (
          <LaunchTile key={launch.mission_name} launchData={launch} />
        ))}
      </Carousel>
    </SectionContainer>
  );
};

export default LaunchesContainer;
