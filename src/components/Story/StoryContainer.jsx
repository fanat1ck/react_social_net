import React from "react";
import Story from "./Story";
import {connect} from "react-redux";
import {follow, getUsers, setCurrentPage, unfollow} from "../../reducer/reducerUsers";
import Preloader from "../../common/Preloader/Preloader";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


class StoryContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.usersPage.currentPage, this.props.usersPage.pageSize);
    }

    onChangePage = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.usersPage.pageSize);
    }

    render() {
        return <>

            {this.props.usersPage.isFetching ? <Preloader/> : null}
            <Story onChangePage={this.onChangePage}
                   totalUsersCount={this.props.usersPage.totalUsersCount}
                   pageSize={this.props.usersPage.pageSize}
                   setCurrentPage={this.props.usersPage.currentPage}
                   usersData={this.props.usersPage.usersData}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   toggleProgress={this.props.usersPage.toggleProgress}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        usersPage: state.userPage,
    }
}
export default compose(
    withAuthRedirect,
    connect(
        mapStateToProps, {setCurrentPage, follow, unfollow, getUsers,}),
)(StoryContainer)