export const addBox = () => ({type: 'ADD_BOX'})

export const updateInput = ({ value }) => ({type: 'UPDATE_INPUT', inputValue: value})

export const closeBox = (id) => ({type: 'CLOSE_BOX', idValue: id})

export const likeBox = (id) => ({type: 'LIKE_BOX', idValue: id})

export const unlikeBox = (id) => ({type: 'UNLIKE_BOX', idValue: id})