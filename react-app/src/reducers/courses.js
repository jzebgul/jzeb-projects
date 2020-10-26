//TASK REDUCER
// import { omit } from 'lodash'

const iState = {}
const courses = (state = iState, action) => {
    switch (action.type) {
        case 'ADD_COURSES':
            return { ...state, [action.payload.id]: action.payload }


    //     case 'COMPLETE_TASK':
    //         return { ...state, [action.payload.id]: action.payload }


    //     case 'REMOVE_TASK':
    //         return omit(state, action.id)


    //     // return {...state, items: omit(state, action.id)}
    //     case 'SET_TASKS':
    //         return action.tasks;


        default:
            return state


    }
};

export default courses
