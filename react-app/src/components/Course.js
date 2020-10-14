import React from 'react';
import {
  Card, CardText, CardBody,
  CardTitle,  Button, Container
} from 'reactstrap';

const Course = ({course}) => {
    return (
        <div>
          <Card>
            <CardBody className="text-center ">
              <CardTitle className="font-weight-bold text-center"><h1>{course.title}</h1></CardTitle>
              <CardText className="text-center">{course.description}.</CardText>
              <Container className="text-center">
              <Button color="warning">Update</Button>
              <Button color="danger ml-4">Delete</Button>
              </Container>
              
            </CardBody>
          </Card>
        </div>
      );
    };
export default Course;