import React, { useState, useEffect } from 'react';

import {
  Card, CardText, CardBody,
  CardTitle,  Button, Container
} from 'reactstrap';
import database from '../services/fire';
import { useSelector, useDispatch} from 'react-redux';
import { fetchCourse } from '../actions/courses';
import AddCourse from './AddCourse';


const CourseItem = (props) => {
  const [updating, setUpdating] = useState(false);
  const user = useSelector((state) => state.auth.user.uid);
  const dispatch = useDispatch();

  const removeCourse = (id) => {
    const dbtasksWrapper = database.ref().child(user).child('courses');

    dbtasksWrapper
      .child(id)
      .remove()
      .then(() => {
        dispatch(fetchCourse(user));
      });
  };

  const updateCourse = () => {
    setUpdating(true);
  };



  return (
    <div>
      {updating ? (
       // {/* pass the course down and a callback to close update component  */}
        <AddCourse
          currentCourse={props.course}
        />

      ) : (
        <Card>
          <CardBody className="text-center ">
            <CardText className="text-center">
              <h2>CourseID: {props.course.courseId}</h2>
            </CardText>
            <CardTitle className="font-weight-bold text-center">
              <h1>{props.course.courseTitle}</h1>
            </CardTitle>
            <CardText className="text-center">{props.course.courseDesc}.</CardText>
            <Container className="text-center">
              {/* Set isUpdating to true */}
              <Button color="warning" onClick={() => updateCourse()}>
                Update
              </Button>
              <Button color="danger ml-4" onClick={() => removeCourse(props.course.id)}>
                Delete
              </Button>
            </Container>
          </CardBody>
        </Card>
      )}
    </div>
  );
};
export default CourseItem;