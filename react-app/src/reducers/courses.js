//TASK REDUCER
import { omit } from 'lodash'

const initialState = {
}

const courses = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_COURSES':
            return { ...state, [action.payload.id]: action.payload }

        //     case 'COMPLETE_TASK':
        //         return { ...state, [action.payload.id]: action.payload }

            case 'DELETE-COURSE':
                return omit(state, action.id)

        //     // return {...state, items: omit(state, action.id)}
        //     case 'SET_TASKS':
        //         return action.tasks;

        default:
            return state


    }
};

export default courses