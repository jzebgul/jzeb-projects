import React, { useState, useEffect } from 'react';
import CourseItem from './CourseItem';
import { useSelector, useDispatch } from 'react-redux';
import AddCourse from './AddCourse';
import database from '../services/fire';
import { fetchCourse } from '../actions/courses';


const AllCourses = () => {
    const dispatch = useDispatch();
    const courses = useSelector(state => state.courses);
    const coursesArray = Object.values(courses);
    const user = useSelector(state => state.auth.user.uid);

    console.log(coursesArray);


    useEffect(() => {
        dispatch(fetchCourse(user));
    }, [])


    return (
        <div>
            <h1>All-Courses</h1>
            <p>List Of Couses are as follows</p>

            {coursesArray.length}

            {coursesArray.length > 0 ? coursesArray.map((course) =>
                <CourseItem course={course} />) : "No Courses"
            }
        </div>
    )
}
export default AllCourses;