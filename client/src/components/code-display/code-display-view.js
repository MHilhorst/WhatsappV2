import React from 'react';
import { CodeBox, CodeBoxHeader, CodeHeader } from '../../styles/style';
import SyntaxHighlighter from 'react-syntax-highlighter';
import styleTheme from 'react-syntax-highlighter/dist/esm/styles/hljs/atom-one-dark';
class CodeDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { file_data, file_name } = this.props.assignment;
    return (
      <>
        <CodeBoxHeader>
          <CodeHeader>{file_name}</CodeHeader>
        </CodeBoxHeader>
        <CodeBox>
          <SyntaxHighlighter
            language="javascript"
            style={styleTheme}
            customStyle={{
              backgroundColor: '#233659',
              fontSize: '1rem',
              height: this.props.height,
              overflowY: 'scroll',
              overflowX: 'hidden'
            }}
            showLineNumbers
          >
            {file_data}
          </SyntaxHighlighter>
        </CodeBox>
      </>
    );
  }
}
export default CodeDisplay;
