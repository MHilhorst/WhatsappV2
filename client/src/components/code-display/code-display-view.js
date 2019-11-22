import React from 'react';
import { CodeBox, CodeBoxHeader, CodeHeader } from '../../styles/style';
import SyntaxHighlighter from 'react-syntax-highlighter';
import styleTheme from 'react-syntax-highlighter/dist/esm/styles/hljs/atom-one-dark';
class CodeDisplay extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const codeString =
      "import React from 'react';\r\nimport './dashboard.css';\r\n\r\n\r\nimport { Col, Row } from 'reactstrap';\r\nimport { Text, CodeHeader, CodeBox, CodeBoxHeader } from '../../styles/style';\r\nimport SyntaxHighlighter from 'react-syntax-highlighter';\r\n\r\nimport styleTheme from 'react-syntax-highlighter/dist/esm/styles/hljs/atom-one-dark';\r\nclass DashboardView extends React.Component {\r\n  onChange(newValue) {\r\n    console.log(newValue);\r\n  }\r\n  render() {\r\n    const codeString = 'var count = 1; if (true) {count += 1; }';\r\n    return (\r\n      <Row>\r\n        <Col md={{ size: 6 }} lg={{ size: 6 }}>\r\n          <CodeBoxHeader>\r\n            <CodeHeader>Filename.js</CodeHeader>\r\n          </CodeBoxHeader>\r\n          <CodeBox>\r\n            <SyntaxHighlighter\r\n              language=\"javascript\"\r\n              style={styleTheme}\r\n              customStyle={{\r\n                backgroundColor: '#233659',\r\n                fontSize: '1rem'\r\n              }}\r\n              showLineNumbers\r\n            >\r\n              {codeString}\r\n            </SyntaxHighlighter>\r\n          </CodeBox>\r\n        </Col>\r\n        <Col md={{ size: 6 }} lg={{ size: 6 }}>\r\n          <p>asd</p>\r\n        </Col>\r\n      </Row>\r\n    );\r\n  }\r\n}\r\n\r\nexport default DashboardView;\r\n";

    return (
      <>
        <CodeBoxHeader>
          <CodeHeader>Filename.js</CodeHeader>
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
            {codeString}
          </SyntaxHighlighter>
        </CodeBox>
      </>
    );
  }
}
export default CodeDisplay;
