import * as React from 'react';
import styled, { css } from 'styled-components/macro';
import { respCss } from '../../helper';

import { 
  Notification, Settings, UserProfile
} from '../../assets/custom-icons';

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: ${(props) => (props.mr ? `${props.mr}px` : 0)};
  margin-left: ${(props) => (props.ml ? `${props.ml}px` : 0)};
  width: 24px;
  height: 24px;

  ${css`
    ${(props) => respCss('height', props.height)}
  `}

  ${css`
    ${(props) => respCss('width', props.width)}
  `}

  svg {
    display: block;
    width: 100%;
  }
`;

export const Icon = (props) => {
  const components = {
    notification: Notification,
    settings: Settings,
    userprofile: UserProfile
  };

  const Icon = components[props.name];

  return (
    <IconWrapper
      mt={props.mt}
      mr={props.mr}
      ml={props.ml}
      width={props.width}
      height={props.height}
    >
      <Icon {...props} />
    </IconWrapper>
  );
};

Icon.defaultProps = {
  height: '24px',
  width: '24px',
};
