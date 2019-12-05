import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
body {
    font-family: 'Roboto', sans-serif !important;
    min-height: 100%;
  }
`;
export const Box = styled.div`
  background-color: ${props => props.color};
  border-radius: ${props => props.theme.radius.box};
  padding: ${props => (props.padding ? `${props.padding}px` : '15px')};
  border: ${props =>
    props.border ? `1px solid ${props.theme.color.border}` : '0'}
  margin-top: ${props => `${props.marginTop}px`};
  margin-bottom: ${props => `${props.marginBottom}px`};
    position:${props => (props.sticky ? 'sticky' : null)}
`;

export const AccordionToggle = styled.div`
    background-color: ${props => props.theme.color.input}
    border-top: ${props => `1px solid ${props.theme.color.border}`}
    border-bottom: ${props => `1px solid ${props.theme.color.border}`}
    padding-bottom:0.5rem;
    padding-top:0.5rem;
    `;
export const Button = styled.button`
  background-color: ${props => props.theme.color.primary};
  border: 0;
  padding: 7px 15px;
  color: ${props =>
    props.color === 'light' ? 'white' : props.theme.color.primary}
  border-radius: ${props => props.theme.radius.button};
`;

export const BoxedNumber = styled.span`
    background-color: ${props => props.theme.color.green}
    padding: 5px;
    color:white;
    font-size:0.8rem;
    display:flex;
    align-items:center;
    justify-content:center;
`;
export const Input = styled.input`
  background-color: ${props => props.theme.color.input};
  padding: 7px 15px;
  border: ${props => `1px solid ${props.theme.color.border}`};
  border-radius: ${props => props.theme.radius.input};
  width: ${props => (props.fullWidth ? '100%' : null)};
`;

export const Label = styled.label`
  font-size: 1rem;
  color: ${props => props.theme.text.color.black};
  font-weight: ${props => props.theme.text.weight.label};
`;

export const LabelSmall = styled(Label)`
  font-size: 0.8rem;
  color: ${props => props.theme.text.color.grey};
  margin-bottom: ${props => (props.mbNone ? '0' : '0.5rem')};
`;

export const Text = styled.p`
  font-size: 1rem;
  color: ${props =>
    props.subtext ? props.theme.text.color.grey : props.theme.text.color.black};
  margin: ${props => (props.noMargin ? '0' : null)};
`;

export const HeaderText = styled.h1`
  color: ${props => props.theme.text.color.black};
  font-size: 1.5rem;
  font-weight: ${props => props.theme.text.weight.header};
  margin: 0;
`;
export const CodeHeader = styled(HeaderText)`
  font-size: 1.2rem;
  color: #fff;
  margin-bottom: 0;
`;

export const CodeBox = styled.div`
  background-color: #233659;
  padding: 0px 0px 0px 30px;
`;
export const CodeBoxHeader = styled(CodeBox)`
  background-color: #152748;
  padding: 15px 30px;
`;

export const TitleItem = styled(HeaderText)`
  font-size: 1.2rem;
`;
export const Divider = styled.div`
  height: 1px;
  width: 100%;
  background-color: ${props => props.theme.color.border};
  margin-top: ${props => `${props.mt}rem` || null};
  margin-bottom: ${props => `${props.mb}rem` || null};
`;

export const Group = styled.div`
  padding-top: ${props => `${props.pt}rem` || null};
  padding-bottom: ${props => `${props.pb}rem` || null};
  padding-left: ${props => `${props.pl}rem` || null};
  padding-right: ${props => `${props.pr}rem` || null};
`;

export const TextArea = styled.textarea`
  background-color: ${props => props.theme.color.input};
  padding: 7px 15px;
  border: ${props => `1px solid ${props.theme.color.border}`};
  border-radius: ${props => props.theme.radius.input};
  width: ${props => (props.fullWidth ? '100%' : null)};
`;

export const NavigationBar = styled.div`
  height: 57px;
  background-color: white;
  border-bottom: 1px solid ${props => props.theme.color.border};
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
export const NavigationItem = styled.div`
  padding: 5px 10px;
  margin-left: 0.7rem;
  margin-right: 0.7rem;
  &:hover {
    background-color: ${props => props.theme.color.input};
    border-radius: ${props => props.theme.radius.box};
  }
  ${Text}:hover {
    color: ${props => props.theme.color.primaryv2};e
  }
`;
export const UploadButton = styled.input`
  background-color: ${props => props.theme.color.primary};
  padding: 7px 15px;
  border-radius: ${props => props.theme.radius.button};
  color: #fff;
`;

export const DropZoneStyle = styled.div`
justify-content:center;
align-items:center;
display:flex;
height:100%;
border-radius: ${props => props.theme.radius.box}
border: ${props => `2px dashed ${props.theme.color.border}`};
margin-bottom:1rem;
`;

export const EditorButton = styled.button`
  background-color: ${props => props.theme.color.editorButton};
  border: 0;
`;
