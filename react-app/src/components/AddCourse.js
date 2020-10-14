import React, { useEffect } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Container } from 'reactstrap';
const AddCourse=()=>{
    useEffect(()=>{
        document.title= "Add Courses"
    },[])
    return(
<div>
    <h1 className="text-center my-3">Fill Course Detail</h1>
    <Form>
<FormGroup>
<label for="UserId">Course Id</label>
<Input
type="text"
placeholder="Enter your Id"
name="userId"
id="UserId"
/>
</FormGroup>

<FormGroup>
<label for="title">Course Title</label>
<Input
type="text"
placeholder="Enter Course Title"
name="title"
id="title"
/>
</FormGroup>

<label for="description">Course Description</label>
<Input
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