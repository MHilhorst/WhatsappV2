import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import MainNavbar from '../components/navbar';
import MainSidebar from '../components/sidebar';
import { Helmet } from 'react-helmet';
import Flexbox from 'flexbox-react';

class AltLayout extends React.Component {
  componentDidMount() {
    console.log('finish loading default layout');
  }
  render() {
    return (
      <>
        <Helmet>
          <style>{`body { background-color:#f7f8fb; } `}</style>
        </Helmet>
        <Flexbox flexDirection="column" display="flex" height="100vh">
          <Flexbox>
            <MainNavbar />
          </Flexbox>
          <Flexbox flex="1">{this.props.children}</Flexbox>
        </Flexbox>
      </>
    );
  }
}

export default AltLayout;
