import Dialogs from "./Dialogs";
import {addMassageActionCreator, updateMassageActionCreator} from "../../reducer/reducerMessage";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


const mapStateToProps = (state) => {
    return {
        messagePage: state.messagePage,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        updateMassage: (body) => {
            dispatch(updateMassageActionCreator(body))
        }, addMassage: () => {
            dispatch(addMassageActionCreator())
        }
    }
}


export default compose(
    withAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps)
)(Dialogs)

