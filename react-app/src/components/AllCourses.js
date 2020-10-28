import React, { useState, useEffect } from 'react';
import Course from './Course';
import { useSelector, useDispatch } from 'react-redux';
import AddCourse from './AddCourse';


const AllCourses = () => {
    const dispatch = useDispatch();
    const courses = useSelector(state => state.courses);
    const coursesArray = Object.values(courses);

    useEffect(()=>{
        console.log(coursesArray);
    },[])

    return (
        <div>
            <h1>All-Courses</h1>
            <p>List Of Couses are as follows</p>

            {coursesArray.length}

            { coursesArray.length > 0 ? coursesArray.map((item) =>
                <Course course={item} />) : "No Courses"
            }
        </div>
    )
}
export default AllCourses;