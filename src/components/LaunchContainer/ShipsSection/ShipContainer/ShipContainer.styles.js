import styled from "styled-components";
import { getColor } from "../../../../styles/utils";

export const ShipTile = styled.div`
  background: ${getColor("white")};
  border-radius: 20px;
  width: 360px;
  margin-bottom: 20px;
  transition: 0.4s all ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

export const ShipImage = styled.img`
  border-radius: 20px 20px 0px 0px;
  width: 100%;
  height: 180px;
`;

export const ShipInfo = styled.div`
  padding: 0 15px 20px 15px;
  display: flex;
  flex-direction: column;
`;

export const ShipName = styled.p`
  margin: 17px 0;
  font-weight: bold;
  font-size: 24px;
  line-height: 24px;
  color: ${getColor("black")};
`;

export const Divider = styled.hr`
  width: 95%;
  border: 1px solid ${getColor("lightGrey")};
  margin: 0 auto 14px auto;
`;

export const HomePortSection = styled.div`
  display: flex;
  align-items: center;
`;
export const HomePortText = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 24px;
  color: ${getColor("grey")};
  margin-right: 38px;
`;
export const HomePort = styled.p`
  font-weight: bold;
  font-size: 14px;
  line-height: 24px;
  color: ${getColor("black")};
`;
export const WeightSection = styled(HomePortSection)``;
export const WeightText = styled(HomePortText)``;
export const Weight = styled(HomePort)``;
