import React, { Component, lazy, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardTitle,
  Col,
  Row,
  Table,
} from 'reactstrap';

class Homepage extends Component {
    constructor(props) {
      super(props);

      this.state = {
    
      };
    

    }
    
  
    loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>
  
    render() {
  
      return (
        <div  className="animated fadeIn">
          <Row> 
            <Col md={12}>
                <h1>THIS IS MY HOMEPAGE</h1>
                    Here is the Current React version: <strong>{React.version}</strong>

            </Col>
          </Row>
        </div>
    );
  }
}

export default Homepage;
