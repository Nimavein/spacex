import styled from "styled-components";
import { getColor } from "../../styles/utils";

export const LaunchContainer = styled.section`
  margin-top: 36px;
  width: 100%;
  padding: 0 40px 0 40px;
`;

export const LaunchBasicInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
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
`;
export const MissionName = styled.p`
  color: ${getColor("white")};
  font-weight: bold;
  font-size: 42px;
  line-height: 49px;
`;

export const RocketInfoSection = styled.div``;
export const RocketText = styled(MissionText)`
  margin: 23px 0 8px 0;
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
`;

export const LaunchDateText = styled(MissionText)`
  text-align: right;
  margin-bottom: 8px;
`;
export const LaunchDate = styled(RocketName)`
  text-align: right;
`;
export const LaunchSiteText = styled(MissionText)`
  margin: 23px 0 8px 0;
  text-align: right;
`;
export const LaunchSite = styled(RocketName)`
  text-align: right;
`;

export const LearnMoreButton = styled.button`
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
`;
