import React, { useContext } from "react";
import axios from "axios";
import { useQuery } from "react-query";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

const LaunchesContext = React.createContext({});

const endpoint = "https://api.spacex.land/graphql/";
const QUERY = `
{
  launchesPast(limit: 10) {
    mission_name
    launch_date_local
    launch_site {
      site_name_long
      site_name
    }
    links {
      article_link
      video_link
    }
    rocket {
      rocket_name
      first_stage {
        cores {
          flight
          core {
            reuse_count
            status
          }
        }
      }
      second_stage {
        payloads {
          payload_type
          payload_mass_kg
          payload_mass_lbs
        }
      }
    }
    ships {
      name
      home_port
      image
    }
  }
}

`;

export const LaunchesProvider = ({ children }) => {
  const { isLoading, isError, data, error } = useQuery("launches", async () => {
    return axios({
      url: endpoint,
      method: "POST",
      data: {
        query: QUERY,
      },
    }).then((response) => response.data.data.launchesPast);
  });

  if (isLoading)
    return (
      <span>
        <Loader
          className="loader"
          type="Puff"
          color="#00BFFF"
          height={200}
          width={200}
          timeout={3000}
        />
      </span>
    );
  if (isError) return <span>{error.message}</span>;

  console.log(data);

  return (
    <LaunchesContext.Provider value={data}>{children}</LaunchesContext.Provider>
  );
};

export const useLaunchesData = () => {
  const launchesContext = useContext(LaunchesContext);
  return launchesContext;
};
