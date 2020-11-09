import database from '../services/fire';

const FETCH_COURSES = 'FETCH_COURSES';

// export const addCourse = newCourse => async dispatch => {
//   coursesRef.push().set(newCourse);

// };

// export const removeCourse = removeCourse => async dispatch => {
//   coursesRef.child(removeCourse).remove();
// };

export const fetchCourse = (user) => async dispatch => {
  const coursesRef = database.ref().child(user).child('courses');

  coursesRef.once('value')
  .then((snapshot) => {
      const courses = [];

      snapshot.forEach((childSnapshot) => {
        courses.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        });
      });

      // dispatch(setcourses(courses));
      dispatch({ type: "FETCH_COURSES", courses });
  });
};



// //ADD_EXPENSE
// export const addCourse = (course) => ({
//   type: 'ADD_COURSE',
//   course
// });

// export const startAddCourse = (courseData = {}) => {
//   return (dispatch, getState) => {
//     const user = getState().auth.user;
//     const {
//       courseId = '',
//       courseTitle = '',
//       courseDesc = ''
//     } = courseData;
//     const course = { courseId, courseTitle, courseDesc};

//     database.ref(`users/${user}/courses`).push(course).then((ref) => {
//       dispatch(addCourse({
//         ...course
//       }));
//     });
//   };
// };