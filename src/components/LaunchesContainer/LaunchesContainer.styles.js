import styled from "styled-components";
import { getColor } from "../../styles/utils";

export const SectionContainer = styled.section`
  max-width: 1141px;
  margin: 63px auto 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Divider = styled.hr`
  border: 1px solid ${getColor("darkGrey")};
  width: 100%;
  height: 1px;
  margin-top: 44px;
`;

export const SpacexLogo = styled.img``;

export const LeftArrow = styled.img`
  cursor: pointer;
`;
export const RightArrow = styled.img`
  cursor: pointer;
`;

export const LeftDisabledArrow = styled(LeftArrow)`
  cursor: pointer;
`;

export const RightDisabledArrow = styled(RightArrow)`
  cursor: pointer;
`;
