
const appReducer = (state, action) => {

    switch(action.type){
        case 'add_new_user': return {
                                ...state,
                                users: [...state.users, action.data]
                            }
                            
        case 'update_counter': return {
                                    ...state,
                                    counter: state.counter + action.data
                                }
                        
    }
    /*
    if(action.type === 'add_new_user'){
        return {
            ...state,
            users: [...state.users, action.data]
        }
    }
    else if(action.type === 'update_counter'){
        return {
            ...state,
            counter: state.counter + action.data
        }
    }
    */
};

export default appReducer;