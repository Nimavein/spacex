import styled from "styled-components";
import { getColor } from "../../styles/utils";

export const LaunchContainer = styled.section`
  margin-top: 36px;
  width: 100%;

  @media ${({ theme }) => theme.medias.mobile} {
    margin-top: 18px;
    padding: 0 15px;
  }
`;

export const Divider = styled.hr`
  border: 1px solid ${getColor("darkGrey")};
  width: 100%;
  height: 1px;
  margin-top: 44px;

  @media ${({ theme }) => theme.medias.mobile} {
    margin-top: 20px;
    width: 100vw;
    margin-left: -15px;
  }
`;
