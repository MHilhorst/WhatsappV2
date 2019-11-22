import React from 'react';
import {
  Box,
  Text,
  Group,
  Divider,
  TitleItem,
  Button,
  LabelSmall
} from '../../styles/style';
class ListingView extends React.Component {
  render() {
    const MAX_LENGTH = 200;
    return (
      <Box border marginTop={15} padding={30} color="white">
        <TitleItem>Title of the project</TitleItem>
        <Text subtext>{`${this.props.text.substring(0, MAX_LENGTH)}...`}</Text>
        <Divider mb={1} />
        <Group
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <LabelSmall mbNone>
            POSTED BY <span style={{ fontWeight: 700 }}>MICHAEL</span>
          </LabelSmall>
          <LabelSmall mbNone>JAVASCRIPT</LabelSmall>
          <LabelSmall mbNone>BEGINNER</LabelSmall>
          <Button color="light" style={{ float: 'right' }}>
            Briefing
          </Button>
        </Group>
      </Box>
    );
  }
}

ListingView.defaultProps = {
  text:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do iusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit'
};
export default ListingView;
