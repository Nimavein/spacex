import styled from "styled-components";
import { getColor } from "../../../styles/utils";

export const ShipsContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const SectionTitle = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: ${getColor("darkGrey")};
  margin: 36px 0 17px 0;
`;
