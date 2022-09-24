import React from 'react';
import styled from 'styled-components/macro';

import { Banner, Filter, Main, SystemStatus, CategoryFilter, SnackBar} from "../molecules";
import { Header, Footer, Settings, Preview, UserProfile, Help } from "../organisms";

import { connect } from "react-redux";
import { toggleSettings, toggleUserProfile, toggleHelp } from "../../redux/common/action";

const connectedProps = (state) => ({
  preview: state.common.preview,
  settingsOpen: state.common.settingsOpen,
  userProfileOpen: state.common.userProfileOpen,
  helpOpen: state.common.helpOpen,
});

const connectionActions = {
  toggleSettings: toggleSettings,
  toggleUserProfile: toggleUserProfile,
  toggleHelp: toggleHelp
}

var connector = connect(connectedProps, connectionActions);

const PageWrapper = styled.div``;

export const Dashboard = (props) => {
  return <PageWrapper>
        <Header />
    </PageWrapper>;
};

Dashboard.defaultProps = {
  selected: false,
};

export default connector(Dashboard);