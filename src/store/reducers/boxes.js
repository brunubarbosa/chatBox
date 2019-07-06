const INITIAL_STATE = {
    boxes:[],
    inputValue: '',
    quantidade: 0
}

export default function boxes(state= INITIAL_STATE, action) {
    console.log(action)
    switch(action.type) {
        case 'ADD_BOX':
            return {...state, inputValue: '', quantidade: ++state.quantidade, boxes: [...state.boxes, {id: Math.random(), author: state.inputValue, likes: 0}]}
        case 'UPDATE_INPUT':
            return {...state, inputValue: action.inputValue}
        case 'CLOSE_BOX':
            return {...state, quantidade: --state.quantidade, boxes: state.boxes.filter(element => element.id != action.idValue)}
        case 'LIKE_BOX':
            return {...state, boxes: state.boxes.map(element => {if(element.id != action.idValue ? element : ++element.likes) {
                return element
            }else {
                element.likes++
                return element
            }}).sort((a,b) => {console.log(b); return b.likes - a.likes})}
            
            case 'UNLIKE_BOX':
                return {...state, boxes: state.boxes.map(element => {if(element.id != action.idValue ? element : --element.likes) {
                    return element
                }else {
                    element.likes--
                    return element
                }}).sort((a,b) => {console.log(b); return b.likes - a.likes})}

        default:
            return {...state}
    }
}
