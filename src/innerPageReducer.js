export const initialState = () => {
    return {
        title: "Default Reduced header"
    };
};

export default (state = initialState(), action) => {
    switch (action.type) {
        // case "CHANGE_TITLE" :
        //     return {
        //             ...state,
        //             title: "Changed Title"
        //         };
        default:
            return state;    
    }
};