import {coursesRef} from '../services/fire';

const FETCH_COURSES = 'FETCH_COURSES';

export const addCourse = newCourse => async dispatch => {
  coursesRef.push().set(newCourse);
};
// export const completeTask = completeTask => async dispatch => {
//   todosRef.child(completeTask).remove();
// };
// export const fetchTask = () => async dispatch => {
//   tasksRef.on("value", snapshot => {
//     dispatch({
//       type: FETCH_TASKS,
//       payload: snapshot.val()
//     });
//   });
// };