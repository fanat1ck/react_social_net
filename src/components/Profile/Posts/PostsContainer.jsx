import {addPostActionCreator, updatePostActionCreator} from "../../../reducer/reducerProfile";
import Posts from "./Posts";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator())
        },
        updatePost: (text) => {
            dispatch(updatePostActionCreator(text))
        }
    }
}

const PostsComponent = connect(mapStateToProps, mapDispatchToProps)(Posts)
export default PostsComponent;
