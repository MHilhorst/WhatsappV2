import React from 'react';
import { Box, HeaderText, Text } from '../../../styles/style';
import { Editor, EditorState, RichUtils } from 'draft-js';
import './feedback.css';

import 'prismjs/themes/prism.css';
import CodeUtils from 'draft-js-code';
import {
  BlockStyleControls,
  InlineStyleControls,
  getBlockStyle,
  styleMap,
  decorator
} from '../../../utils/draft-components';
class FeedbackView extends React.Component {
  constructor(props) {
    super(props);
    this.state = { editorState: EditorState.createEmpty(decorator) };
    this.onChange = this.onChange.bind(this);
    this.focus = this.focus.bind(this);
    this.handleKeyCommand = this.handleKeyCommand.bind(this);
    this.onTab = this.onTab.bind(this);
    this.toggleBlockType = this.toggleBlockType.bind(this);
    this.toggleInlineStyle = this.toggleInlineStyle.bind(this);
    this.getBlockStyle = getBlockStyle.bind(this);
  }

  onChange = editorState => {
    this.setState({
      editorState
    });

    this.props.handleFeedback(editorState.getCurrentContent());
  };

  focus = () => {
    this.refs.editor.focus();
  };

  handleKeyCommand = command => {
    const { editorState } = this.state;
    let newState;
    if (CodeUtils.hasSelectionInBlock(editorState)) {
      newState = CodeUtils.handleKeyCommand(editorState, command);
    }
    if (!newState) {
      newState = RichUtils.handleKeyCommand(editorState, command);
    }
    if (newState) {
      this.onChange(newState);
      return true;
    }
    return false;
  };

  keyBinding = evt => {
    const { editorState } = this.state;
    if (!CodeUtils.hasSelectionInBlock(editorState))
      return Editor.getDefaultKeyBinding(evt);

    const command = CodeUtils.getKeyBinding(evt);

    return command || Editor.getDefaultKeyBinding(evt);
  };

  handleReturn = evt => {
    const { editorState } = this.state;
    if (!CodeUtils.hasSelectionInBlock(editorState)) return false;

    this.onChange(CodeUtils.handleReturn(evt, editorState));
    return true;
  };

  onTab = e => {
    const { editorState } = this.state;
    if (!CodeUtils.hasSelectionInBlock(editorState)) return false;

    this.onChange(RichUtils.onTab(e, this.state.editorState));
    return true;
  };

  toggleBlockType = blockType => {
    this.onChange(RichUtils.toggleBlockType(this.state.editorState, blockType));
  };

  toggleInlineStyle = inlineStyle => {
    this.onChange(
      RichUtils.toggleInlineStyle(this.state.editorState, inlineStyle)
    );
  };

  render() {
    const { editorState } = this.state;
    const contentState = editorState.getCurrentContent();
    let className = 'RichEditor-editor';
    if (!contentState.hasText()) {
      if (
        contentState
          .getBlockMap()
          .first()
          .getType() !== 'unstyled'
      ) {
        className += ' RichEditor-hidePlaceholder';
      }
    }

    return (
      <Box border marginTop={15} padding={30} color="white">
        <HeaderText>Feedback</HeaderText>
        <Text subtext>
          Give your feedback on how the code can be done better.
        </Text>
        <div className="RichEditor-root">
          <BlockStyleControls
            editorState={editorState}
            onToggle={this.toggleBlockType}
          />
          <InlineStyleControls
            editorState={editorState}
            onToggle={this.toggleInlineStyle}
          />
          <div className={className} onClick={this.focus}>
            <Editor
              blockStyleFn={this.getBlockStyle}
              customStyleMap={styleMap}
              editorState={editorState}
              handleKeyCommand={this.handleKeyCommand}
              handleReturn={this.handleReturn}
              keyBinding={this.keyBinding}
              onChange={this.onChange}
              onTab={this.onTab}
              placeholder="Write your feedback, you can also use code blocks to display snippets of code ..."
              ref="editor"
              spellCheck={true}
            />
          </div>
        </div>
      </Box>
    );
  }
}

export default FeedbackView;
