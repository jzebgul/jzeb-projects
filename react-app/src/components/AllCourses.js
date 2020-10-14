import React, { useState, useEffect } from 'react';
import Course from './Course';
const AllCourses=()=>{
    useEffect(()=>{
        document.title= "All Courses"
    },[])
    

const [courses]= useState ([
    
    {title: "Java Course", description: "title Demo Course"},
    {title: "UseState", description: "title Demo Course"},
    {title: "AllCoursese", description: "title Demo Course"}
]);

return (
    <div>
        <h1>All-Courses</h1>
        <p>List Of Couses are as follows</p>
    
    { courses.length > 0 ? courses.map((item)=>
        <Course course={item}/>) :"No Courses"
    }
    </div>
)
}
export default AllCourses;