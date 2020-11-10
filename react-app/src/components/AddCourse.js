import React, { useEffect, useState } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Container } from 'reactstrap';
import database from '../services/fire';
import { useSelector, useDispatch } from 'react-redux';
import uuid from 'react-uuid';
import '../App.css';
import { fetchCourse } from '../actions/courses';


const AddCourse = (props) => {
    const [courseTitle, setCourseTitle] = useState(props.currentCourse ? props.currentCourse.courseTitle : '');
    const [courseDesc, setCourseDesc] = useState(props.currentCourse ? props.currentCourse.courseDesc : '');
    const [editing, setEditing] = useState(props.currentCourse ? true : false);
    const dispatch = useDispatch();
    const user = useSelector(state => state.auth.user.uid);

    useEffect(() => {
        document.title = "Add Courses"
    }, [props])

    const addingCourse = () => {
        const payload = { id: uuid(), courseTitle: courseTitle, courseDesc: courseDesc }
        const dbcoursesWrapper = database.ref().child(user).child('courses');


        return dbcoursesWrapper.child(payload.id).update(payload).then(() => {
            dispatch({ type: "ADD_COURSES", payload });
            setCourseTitle('');
            setCourseDesc('');
            dispatch(fetchCourse(user));
        })

    }

    const updateCourse = () => {
        const payload = { id: props.currentCourse.id, courseTitle: courseTitle, courseDesc: courseDesc }
        const dbcoursesWrapper = database.ref().child(user).child('courses');


        return dbcoursesWrapper.child(payload.id).update(payload).then(() => {
            setCourseTitle('');
            setCourseDesc('');
            dispatch(fetchCourse(user));
        })

    }

    return (
        <div>
            <h1 className="text-center my-3">Fill Course Detail</h1>
            <Form onSubmit={(e) => {
                e.preventDefault(e.target.value);
                {editing ? updateCourse() : addingCourse()}
            }}>

                <FormGroup>
                    <label for="title">Course Title</label>
                    <Input
                        type="text"
                        value={courseTitle}
                        onChange={(e)=> setCourseTitle(e.target.value)}
                        placeholder="Enter Course Title"
                        name="title"
                        id="title"
                    />
                </FormGroup>

                <label for="description">Course Description</label>
                <Input
                    value={courseDesc}
                    onChange={(e) => setCourseDesc(e.target.value)}
                    type="textarea"
                    placeholder="Enter Course Description"
                    name="description"
                    id="description"
                    style={{ height: 150 }}
                />
                <Container className="text-center">
                    <Button color="success" type='success'>{editing ? 'Update Course' : 'Add Course'}</Button>
                    {/* <Button color="success" type='submit'>Add Course</Button> */}
                </Container>
            </Form>
        </div>
    );
};
export default AddCourse;