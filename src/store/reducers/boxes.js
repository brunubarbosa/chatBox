const INITIAL_STATE = {
    boxes:[],
    inputValue: ''
}

export default function boxes(state= INITIAL_STATE, action) {
    switch(action.type) {
        case 'ADD_BOX':
            return {...state, inputValue: '', boxes: [...state.boxes, {author: state.inputValue}]}
        case 'UPDATE_INPUT':
            return {...state, inputValue: action.inputValue}
        default:
            return {...state}
    }
}
