import React, { useState, useEffect } from 'react';

import {
  Card, CardText, CardBody,
  CardTitle,  Button, Container
} from 'reactstrap';
import database from '../services/fire';
import { useSelector, useDispatch} from 'react-redux';
import { fetchCourse } from '../actions/courses';
import AddCourse from './AddCourse';



const Course = () => {
  const user = useSelector((state) => state.auth.user.uid);
  const [course, setCourse] = useState({});
  const dispatch = useDispatch();

  const removeCourse = (id) => {
    console.log(id);
    const dbtasksWrapper = database.ref().child(user).child('courses');
    dbtasksWrapper
      .child(id)
      .remove()
      .then(() => {
        dispatch({ type: 'DELETE_COURSE', id });
        dispatch(fetchCourse(user));
      });
  };

  const updateCourse = (id) => {
    setIsUpdating(true);
    setCourse(course);
  };

  // state to switch between updating the course and viewing the course
  const [isUpdating, setIsUpdating] = useState(false);



  return (
    <div>
      {isUpdating ? (
       // {/* pass the course down and a callback to close update component  */}
        <AddCourse 
          course = {course} 
          update = {isUpdating}
          finishUpdate={() => setIsUpdating(false)}
        />

      ) : (
        <Card>
          <CardBody className="text-center ">
            <CardText className="text-center">
              <h2>CourseID: {course.courseId}</h2>
            </CardText>
            <CardTitle className="font-weight-bold text-center">
              <h1>{course.courseTitle}</h1>
            </CardTitle>
            <CardText className="text-center">{course.courseDesc}.</CardText>
            <Container className="text-center">
              {/* Set isUpdating to true */}
              <Button color="warning"  onClick={() => updateCourse(course)}>
                Update
              </Button>
              <Button color="danger ml-4" onClick={() => removeCourse(course.id)}>
                Delete
              </Button>
            </Container>
          </CardBody>
        </Card>
      )}
    </div>
  );
};
export default Course;