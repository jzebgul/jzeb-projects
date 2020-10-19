import React, { useEffect, useState } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Container } from 'reactstrap';
import database from '../services/fire';
import { useSelector, useDispatch } from 'react-redux';
import '../App.css';

const AddCourse=()=>{
    const [course, setCourse] = useState('');
    const dispatch = useDispatch();
    const user = useSelector(state => state.auth.user);

    useEffect(()=>{
        document.title= "Add Courses"
    },[])

    const addCourse = () => {
        const payload = { courseId:courseId, title:title, text:course, description:description}
        const dbcoursesWrapper = database.ref().child(user).child('courses');
        return dbcoursesWrapper.child(payload.user).update(payload).then(() => {
            setCourse('');
            dispatch({ type: "ADD_COURSES", payload })
       })
     }
    return(
<div>
    <h1 className="text-center my-3">Fill Course Detail</h1>
    <Form onSubmit={e => {
        e.preventDefault(e.target.value);
        addCourse();
    } }>
<FormGroup>
<label for="UserId">Course Id</label>
<Input
type="text"
value={CourseId}
onChange={e => setCourse(e.target.value)}
placeholder="Enter your Id"
name="userId"
id="UserId"
/>
</FormGroup>

<FormGroup>
<label for="title">Course Title</label>
<Input
type="text"
value={title}
onChange={e => setCourse(e.target.value)}
placeholder="Enter Course Title"
name="title"
id="title"
/>
</FormGroup>

<label for="description">Course Description</label>
<Input
value={description}
onChange={e => setCourse(e.target.value)}
type="textarea"
placeholder="Enter Course Description"
name="description"
id="description"
style={{ height: 150}}
/>
<Container className="text-center">
<Button color="success">Add Course</Button>
<Button color="warning ml-3">clear</Button>
</Container>
    </Form>
</div>

    );
};
export default AddCourse;