import React from 'react';
import { Box, HeaderText, Text, LabelSmall } from '../../../styles/style';
class BrowseView extends React.Component {
  render() {
    return (
      <Box border marginTop={15} padding={30} color="white">
        <HeaderText>{this.props.title}</HeaderText>
        <Text>{this.props.description}</Text>
        <LabelSmall>
          POSTED BY <span style={{ fontWeight: 600 }}>MICHAEL</span>
        </LabelSmall>
      </Box>
    );
  }
}

BrowseView.defaultProps = {
  title: 'Test Title',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do iusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi ut ali Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do iusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi ut aliu Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do iusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi ut ali Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do iusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi ut ali..'
};
export default BrowseView;
