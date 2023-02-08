const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_MESSAGE = "UPDATE-MESSAGE";

let initialState = {
    messageData: [
        {message: "Hello"},
        {message: "World"},
        {message: "!!!"},
        {message: "Hello"},
    ],
    userData: [
        {id: 1, name: "Ivan"},
        {id: 2, name: "Vika"},
        {id: 4, name: "Bogdan"},
    ],
    newMessage: "fanat1ck",
};

const reducerMessage = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_MESSAGE: {
            // let stateCopy = {...state}
            // stateCopy.newMessage = action.message;
            // return stateCopy;
            return {
                ...state,
                newMessage: action.message,
            }
        }
        case ADD_MESSAGE: {
            // let newMessage = {
            //     message: state.newMessage
            // };
            // let stateCopy = {...state}
            // stateCopy.messageData = [...state.messageData]
            // stateCopy.messageData.push(newMessage);
            // stateCopy.newMessage = "";
            // return stateCopy;
            return {
                ...state,
                messageData: [...state.messageData, {message: state.newMessage}],
                newMessage: ''

            }
        }
        default:
            return state;
    }
};

export const addMassageActionCreator = () => ({type: ADD_MESSAGE});
export const updateMassageActionCreator = (text) => ({type: UPDATE_MESSAGE, message: text});


export default reducerMessage;
