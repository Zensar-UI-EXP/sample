import React from 'react';
import styled from 'styled-components/macro';
import header from "../../json/header.json";
import { Logo, RightHeader } from "../molecules";
import { colors } from '../../theme';

const HeaderWrapper = styled.div`
  color: ${colors.primary.black75};
  background: ${colors.white};
  padding: 20px 25px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Header = (props) => {
  return <HeaderWrapper>
    <Logo />
    <RightHeader />
  </HeaderWrapper>;
};

Header.defaultProps = {
};
