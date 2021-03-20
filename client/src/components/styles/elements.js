import styled, { css } from "styled-components";
import { colors } from "./globals";
export const Button = styled.a`
  heigt: 40px;
  line-height: 40px;
  font-weight: 600;
  font-size: 20px;
  background: none;
  text-decoration: none !important;
  cursor: pointer;
  transition: all 0.3s;
  ${(props) =>
    props.danger &&
    css`
      color: ${colors.danger};
      &:hover {
        color: ${colors.dangerDrak};
      }
    `}
  ${(props) =>
    props.waraning &&
    css`
      color: ${colors.warning};
      &:hover {
        color: ${colors.warningLight};
      }
    `}
  ${(props) =>
    props.primary &&
    css`
      background: ${colors.primaryLight};
      padding: 0 16px;
      font-size: 16px;
      border-radius: 5px;
      color: ${colors.white};
      &:hover {
        background: ${colors.primary};
        color: ${colors.white};
      }
    `}
    ${(props) =>
    props.gray &&
    css`
      background: ${colors.drakGray};
      padding: 0 16px;
      font-size: 16px;
      border-radius: 5px;
      color: ${colors.white};
      &:hover {
        background: ${colors.gray};
        color: ${colors.white};
      }
    `}
`;
