import React from 'react';
import {
  Card, CardText, CardBody,
  CardTitle,  Button, Container
} from 'reactstrap';
import database from '../services/fire';
import { useSelector, useDispatch } from 'react-redux';



const Course = ({course}) => {
  const user = useSelector(state => state.auth.user.uid);
const dispatch = useDispatch();
  const removeCourse = (id) => {
    console.log(id);
    const dbtasksWrapper = database.ref().child(user).child('courses');
    dbtasksWrapper.child(id).remove().then(() => {
        dispatch({ type: 'DELETE_COURSE', id: id })
        console.log('deleted');
    })
  }
    return (
        <div>
          <Card>
            <CardBody className="text-center ">
            <CardText className="text-center"><h2>CourseID: {course.courseId}</h2></CardText>
              <CardTitle className="font-weight-bold text-center"><h1>{course.courseTitle}</h1></CardTitle>
              <CardText className="text-center">{course.courseDesc}.</CardText>
              <Container className="text-center">
              <Button color="warning">Update</Button>
              <Button color="danger ml-4" onClick={()=>removeCourse(course.id)}>Delete</Button>
              </Container>

            </CardBody>
          </Card>
        </div>
      );
    };
export default Course;