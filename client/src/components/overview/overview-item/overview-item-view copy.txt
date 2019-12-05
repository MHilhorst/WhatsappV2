import React from 'react';
import {
  Box,
  Text,
  HeaderText,
  AccordionToggle,
  Button,
  Divider,
  LabelSmall
} from '../../../styles/style';
import {
  Row,
  Collapse,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import { FaAngleDown, FaAngleUp, FaCog } from 'react-icons/fa';
class OverviewItemView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      dropdownOpen: false
    };
  }

  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  handleDropdown = () => {
    this.setState({ dropdownOpen: !this.state.dropdownOpen });
  };
  render() {
    const { isOpen, dropdownOpen } = this.state;
    return (
      <Box color="white" border marginTop={15} padding="0">
        <Box>
          <Row
            style={{
              margin: 0,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            <Row
              style={{
                margin: 0,
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <HeaderText>{this.props.assignment.title}</HeaderText>
              <LabelSmall mbNone style={{ marginLeft: '1rem' }}>
                28-11-2018
              </LabelSmall>
            </Row>
            <Dropdown isOpen={dropdownOpen} toggle={this.handleDropdown}>
              <DropdownToggle color="null" caret={false} aria-haspopup={false}>
                <FaCog color="#66768a" />
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>Delete</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </Row>
        </Box>

        <Divider />
        <Box>
          <Text noMargin>{this.props.assignment.description}</Text>
        </Box>
        <Collapse isOpen={isOpen}>
          <Box>
            <Text>asdas</Text>
          </Box>
        </Collapse>

        <AccordionToggle
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
          onClick={this.handleToggle}
        >
          {!this.state.isOpen ? (
            <FaAngleDown size={20} />
          ) : (
            <FaAngleUp size={20} />
          )}
        </AccordionToggle>
        <Box>
          <Row
            style={{
              margin: 0,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            <Text noMargin>
              <span
                style={{
                  backgroundColor: '#2ecc71',
                  padding: '3px 5px',
                  color: 'white',
                  borderRadius: 5,
                  fontSize: '0.8rem',
                  marginRight: 5
                }}
              >
                {this.props.assignment.feedbackCount || 0}
              </span>{' '}
              {this.props.assignment.feedbackCount != 1 ? 'Answers' : 'Answer'}
            </Text>
            <Button
              color="light"
              onClick={() =>
                this.props.history.push(
                  `/result/${this.props.assignment.assignmentUrlId}`
                )
              }
            >
              View
            </Button>
          </Row>
        </Box>
      </Box>
    );
  }
}

export default OverviewItemView;
