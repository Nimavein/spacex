import React from "react";
import { SectionContainer, SpacexLogo } from "./LaunchesContainer.styles";
import Carousel, { arrowsPlugin } from "@brainhubeu/react-carousel";
import Icon from "react-fa";
import "@brainhubeu/react-carousel/lib/style.css";
import { useLaunchesData } from "../../contextProviders/launchesContext";

const LaunchesContainer = () => {
  const launches = useLaunchesData();
  console.log(launches);
  return (
    <SectionContainer>
      <SpacexLogo src="/spacex-logo.svg" alt="spacex-logo" />

      <Carousel
        plugins={[
          {
            resolve: arrowsPlugin,
            options: {
              arrowLeft: (
                <button>
                  <Icon name="angle-double-left" />
                </button>
              ),
              arrowLeftDisabled: (
                <button>
                  <Icon name="angle-left" />
                </button>
              ),
              arrowRight: (
                <button>
                  <Icon name="angle-double-right" />
                </button>
              ),
              arrowRightDisabled: (
                <button>
                  <Icon name="angle-right" />
                </button>
              ),
              addArrowClickHandler: true,
            },
          },
        ]}
      >
        {launches.map((launch) => (
          <p key={launch.mission_name}>{launch.mission_name}</p>
        ))}
      </Carousel>
    </SectionContainer>
  );
};

export default LaunchesContainer;
