import React from 'react';
import {
  Box,
  Text,
  AccordionToggle,
  Divider,
  LabelSmall
} from '../../../styles/style';
import './feedback-result-item.css';

import { Editor, EditorState, convertFromRaw } from 'draft-js';
import 'prismjs/themes/prism.css';
import {
  getBlockStyle,
  styleMap,
  decorator
} from '../../../utils/draft-components';
import {
  Row,
  Collapse,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import { FaAngleDown, FaAngleUp, FaCog } from 'react-icons/fa';
class FeedbackResultItemView extends React.Component {
  constructor(props) {
    super(props);
    this.getBlockStyle = getBlockStyle.bind(this);
    this.state = {
      editorState: EditorState.createWithContent(
        convertFromRaw(JSON.parse(this.props.feedbackContent)),
        decorator
      ),
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
    const { editorState, dropdownOpen, isOpen } = this.state;
    let className = 'RichEditor-editor ';

    console.log(this.props.feedback);
    return (
      <Box color="white" border marginTop={15} padding="0">
        <Box onClick={this.handleToggle}>
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
              <Text noMargin>
                Posted by <span style={{ fontWeight: 500 }}>Michael</span>
              </Text>
              <LabelSmall mbNone style={{ marginLeft: '1rem' }}>
                12-11-2019 15:30
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
        <Collapse isOpen={isOpen}>
          <Box padding={30}>
            <div className={className} onClick={this.focus}>
              <Editor
                blockStyleFn={this.getBlockStyle}
                customStyleMap={styleMap}
                editorState={editorState}
                ref="editor"
                readOnly
              />
            </div>
          </Box>
        </Collapse>

        <AccordionToggle
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            border: 0
          }}
          onClick={this.handleToggle}
        >
          {!this.state.isOpen ? (
            <FaAngleDown size={20} />
          ) : (
            <FaAngleUp size={20} />
          )}
        </AccordionToggle>
      </Box>
    );
  }
}

export default FeedbackResultItemView;
