import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
body {
    @import url('https://fonts.googleapis.com/css?family=Lato|Montserrat&display=swap');
    font-family: 'Lato', sans-serif;
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
    position:${props => (props.sticky ? 'sticky' : null)}
`;

export const Button = styled.button`
  background-color: ${props => props.theme.color.primary};
  border: 0;
  padding: 7px 15px;
  color: ${props =>
    props.color === 'light' ? 'white' : props.theme.color.primary}
  border-radius: ${props => props.theme.radius.button};
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
`;

export const TextArea = styled.textarea`
  background-color: ${props => props.theme.color.input};
  padding: 7px 15px;
  border: ${props => `1px solid ${props.theme.color.border}`};
  border-radius: ${props => props.theme.radius.input};
  width: ${props => (props.fullWidth ? '100%' : null)};
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
