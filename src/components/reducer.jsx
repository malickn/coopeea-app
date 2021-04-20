
const initialState = {
    language: 'English'
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'ENGLISH':
            return{
                language : 'Français'
            };
        case 'FRENCH':
            return{
                language : 'English'
            };
        default:
            return state
    }
};

export default reducer;