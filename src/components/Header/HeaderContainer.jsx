import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthData} from "../../reducer/reducerAuth";


class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.getAuthData()
    }

    render() {
        return <Header {...this.props}/>
    }
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})


export default connect(mapStateToProps, {getAuthData})(HeaderContainer);
