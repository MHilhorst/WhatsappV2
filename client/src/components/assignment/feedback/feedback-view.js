import React from 'react';
import { Box, HeaderText, Text } from '../../../styles/style';
import { Editor, EditorState, RichUtils } from 'draft-js';
import './feedback.css';
import Prism from 'prismjs';
import PrismDecorator from 'draft-js-prism';
import 'prismjs/themes/prism.css';
import CodeUtils from 'draft-js-code';

const decorator = new PrismDecorator({
  // Provide your own instance of PrismJS
  prism: Prism,
  defaultSyntax: 'javascript'
});
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
    const styleMap = {
      CODE: {
        backgroundColor: 'rgba(0, 0, 0, 0.05)',
        fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
        fontSize: 16,
        padding: 2
      }
    };
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
              blockStyleFn={getBlockStyle}
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

    function getBlockStyle(block) {
      switch (block.getType()) {
        case 'blockquote':
          return 'RichEditor-blockquote';
        default:
          return null;
      }
    }
  }
}

class StyleButton extends React.Component {
  constructor() {
    super();
    this.onToggle = e => {
      e.preventDefault();
      this.props.onToggle(this.props.style);
    };
  }

  render() {
    let className = 'RichEditor-styleButton';
    if (this.props.active) {
      className += ' RichEditor-activeButton';
    }

    return (
      <span className={className} onMouseDown={this.onToggle}>
        {this.props.label}
      </span>
    );
  }
}

const BLOCK_TYPES = [
  { label: 'H1', style: 'header-one' },
  { label: 'H2', style: 'header-two' },
  { label: 'H3', style: 'header-three' },
  { label: 'H4', style: 'header-four' },
  { label: 'H5', style: 'header-five' },
  { label: 'H6', style: 'header-six' },
  { label: 'Blockquote', style: 'blockquote' },
  { label: 'UL', style: 'unordered-list-item' },
  { label: 'OL', style: 'ordered-list-item' },
  { label: 'Code Block', style: 'code-block' }
];

const BlockStyleControls = props => {
  const { editorState } = props;
  const selection = editorState.getSelection();
  const blockType = editorState
    .getCurrentContent()
    .getBlockForKey(selection.getStartKey())
    .getType();

  return (
    <div className="RichEditor-controls">
      {BLOCK_TYPES.map(type => (
        <StyleButton
          key={type.label}
          active={type.style === blockType}
          label={type.label}
          onToggle={props.onToggle}
          style={type.style}
        />
      ))}
    </div>
  );
};

var INLINE_STYLES = [
  { label: 'Bold', style: 'BOLD' },
  { label: 'Italic', style: 'ITALIC' },
  { label: 'Underline', style: 'UNDERLINE' },
  { label: 'Monospace', style: 'CODE' }
];

const InlineStyleControls = props => {
  var currentStyle = props.editorState.getCurrentInlineStyle();
  return (
    <div className="RichEditor-controls">
      {INLINE_STYLES.map(type => (
        <StyleButton
          key={type.label}
          active={currentStyle.has(type.style)}
          label={type.label}
          onToggle={props.onToggle}
          style={type.style}
        />
      ))}
    </div>
  );
};

export default FeedbackView;
