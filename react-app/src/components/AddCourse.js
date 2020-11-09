import React, { useEffect, useState } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Container } from 'reactstrap';
import database from '../services/fire';
import { useSelector, useDispatch } from 'react-redux';
import uuid from 'react-uuid';
import '../App.css';
import { fetchCourse } from '../actions/courses';


const AddCourse = (props) => {
    const [update, setUpdate] = useState(props);
    const [courseId, setCourseId] = useState('');
    const [courseTitle, setCourseTitle] = useState('');
    const [courseDesc, setCourseDesc] = useState('');
    const [editing, setEditing] = useState(false);
    const dispatch = useDispatch();
    const user = useSelector(state => state.auth.user.uid);
    useEffect(() => {
        document.title = "Add Courses"
    }, [])

    const addCourse = () => {
        const payload = { id: uuid(), courseId:courseId, courseTitle: courseTitle, courseDesc: courseDesc }
        const dbcoursesWrapper = database.ref().child(user).child('courses');
        // const dbcoursesWrapper = database.ref(`users/${user}/courses`).push(courseId, courseTitle, setCourseDesc);
        return dbcoursesWrapper.child(payload.id).update(payload).then(() => {
            setCourseId('');
            setCourseTitle('');
            setCourseDesc('');
            dispatch({ type: "ADD_COURSES", payload });
            dispatch(fetchCourse(user));

        })
    }

    const updateCourse = (course) => {

        const payload = { id: uuid, courseId:courseId, courseTitle: courseTitle, courseDesc: courseDesc }
        const dbcoursesWrapper = database.ref().child(user).child('courses');
        // const dbcoursesWrapper = database.ref(`users/${user}/courses`).push(courseId, courseTitle, setCourseDesc);
        return dbcoursesWrapper.child(payload.id).update(payload).then(() => {
            setCourseId('');
            setCourseTitle('');
            setCourseDesc('');
            dispatch({ type: "UPDATE_COURSE", payload});
        })
    }

    return (
        <div>
            <h1 className="text-center my-3">Fill Course Detail</h1>
            <Form onSubmit={(e) => {
                e.preventDefault(e.target.value);
                addCourse();
            }}>
                <FormGroup>
                    <label for="UserId">Course Id</label>
                    <Input
                        type="text"
                        value={courseId}
                        onChange={(e) => setCourseId(e.target.value)}
                        placeholder="Enter your Id"
                        name="userId"
                        id="UserId"
                    />
                </FormGroup>

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
                    { update ? <Button color="success" type='button' onClick={addCourse()}>Add Course</Button> : <Button color="success" onClick={updateCourse()} type='button'>Update Course</Button>}
                    {/* <Button color="success" type='submit'>Add Course</Button> */}
                    <Button color="warning ml-3">clear</Button>
                </Container>
            </Form>
        </div>
    );
};
export default AddCourse;