import React from 'react';
 //import {Menuitem} from './menuitem'
// import {BuisnessDetail} from './buisnessDetails'
// import {CreateUser} from './createUser'

import { Container, Row, Col } from 'react-bootstrap';
// import Menuitem from './menuitem';


export class ContentSpace extends React.Component {
 
  render() {



  


    
   
    return (
        <Container>
          <Row>
          <Col>
      
          {/* <Menuitem /> */}
          </Col>
        
          
          <Col>
         
          {/* {this.props.snapIn1}
          {this.props.snapIn2} */}
            {/* <CreateUser />
            <BuisnessDetail /> */}
          </Col>
          </Row>
        </Container>
        );

    }
}

export default ContentSpace;