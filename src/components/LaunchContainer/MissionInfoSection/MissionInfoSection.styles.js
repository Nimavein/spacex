import styled from "styled-components";
import { getColor } from "../../../styles/utils";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";

export const LaunchBasicInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media ${({ theme }) => theme.medias.mobile} {
    flex-direction: column;
  }
`;

export const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
`;
export const RightSection = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MissionText = styled.p`
  color: ${getColor("darkGrey")};
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  margin-bottom: 12px;

  @media ${({ theme }) => theme.medias.mobile} {
    font-size: 14px;
    line-height: 16px;
    margin-bottom: 6px;
  }
`;
export const MissionName = styled.p`
  color: ${getColor("white")};
  font-weight: bold;
  font-size: 42px;
  line-height: 49px;

  @media ${({ theme }) => theme.medias.mobile} {
    font-size: 34px;
    line-height: 40px;
  }
`;

export const RocketInfoSection = styled.div``;
export const RocketText = styled(MissionText)`
  margin: 23px 0 8px 0;

  @media ${({ theme }) => theme.medias.mobile} {
    margin: 20px 0 7px 0;
  }
`;
export const RocketNameAndStatus = styled.div`
  display: flex;
  align-items: center;
`;
export const RocketStatus = styled.div`
  display: flex;
  align-items: center;
  padding: 2px 4px 2px 4px;
  margin-left: 7px;
  background-color: ${({ recovered }) =>
    recovered ? getColor("success") : getColor("failure")};
  color: ${getColor("black")};
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  border-radius: 2px;
`;
export const RocketName = styled.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  color: ${getColor("white")};

  @media ${({ theme }) => theme.medias.mobile} {
    font-size: 16px;
    line-height: 19px;
  }
`;

export const LaunchDateText = styled(MissionText)`
  text-align: right;
  margin-bottom: 8px;

  @media ${({ theme }) => theme.medias.mobile} {
    text-align: left;
  }
`;
export const LaunchDate = styled(RocketName)`
  text-align: right;

  @media ${({ theme }) => theme.medias.mobile} {
    display: none;
  }
`;

export const LaunchDateMobile = styled(RocketName)`
  display: none;
  @media ${({ theme }) => theme.medias.mobile} {
    display: block;
  }
`;

export const LaunchSiteText = styled(MissionText)`
  margin: 23px 0 8px 0;
  text-align: right;

  @media ${({ theme }) => theme.medias.mobile} {
    text-align: left;
    margin: 16px 0 8px 0;
  }
`;
export const LaunchSite = styled(RocketName)`
  text-align: right;

  @media ${({ theme }) => theme.medias.mobile} {
    text-align: left;
  }
`;

export const LearnMoreButton = styled.button`
  width: fit-content;
  padding: 19px 37px;
  border: 2px solid ${getColor("white")};
  background: transparent;
  color: ${getColor("white")};
  margin-top: 40px;
  cursor: pointer;
  transition: 0.4s all ease-in-out;

  &:hover {
    opacity: 0.6;
  }

  @media ${({ theme }) => theme.medias.mobile} {
    margin: 30px 0 28px 0;
    width: 100%;
  }
`;

export const LightTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "white",
    color: "rgba(0, 0, 0, 0.87)",
    fontSize: 14,
  },
}));
