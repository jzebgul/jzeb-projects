import { bindActionCreators } from "redux";

export default (state = {}, action) => {
    switch (action.type) {
        case 'setCurrentCourse':
            return {
                currentCourse: action.course
            };
        case 'removeCurrentCourse':
            return {};
        default:
            return state;
    };
};