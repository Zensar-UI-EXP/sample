import React from 'react';
import styled from 'styled-components/macro';
import { device } from '../../theme';
import { Image } from '../atoms';
import mobilesrcfile from "../../assets/images/logo__1x.png";
import tabletsrcfile from "../../assets/images/logo__2x.png";
import desktopsrcfile from "../../assets/images/logo__3x.png";

export const LogoHeadingWrapper = styled.h1`
  width: 31px;
  min-height: 40px;
  height: auto;
  @media only screen and ${device.tabletM}{
    width: 172px;
  }
`;

export const LinkWrapper = styled.a`
  float: left:
  width: 100%;
  height: 100%;
`;

export const Logo = ({ redirectionPath, titleInfo, mobilesrcfile, tabletsrcfile, desktopsrcfile }) => {
  return (
    <LogoHeadingWrapper>
      <LinkWrapper href={redirectionPath} title={titleInfo}>
        <Image mobilesrcfile={mobilesrcfile} tabletsrcfile={tabletsrcfile} desktopsrcfile={desktopsrcfile}/>
      </LinkWrapper>
    </LogoHeadingWrapper>
  );
};

Logo.defaultProps = {
  redirectionPath: "",
  titleInfo: "title",
  mobilesrcfile: mobilesrcfile,
  tabletsrcfile: tabletsrcfile,
  desktopsrcfile: desktopsrcfile
};
