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

        case 'FETCH_COURSES':
            return action.courses

            case 'UPDATE_COURSE':
                return action.courses;

        default:
            return state


    }
};

export default courses