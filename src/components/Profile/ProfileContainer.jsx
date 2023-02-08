import React from "react";
import classes from "./Profile.module.css";
import Profile from "./Profile";
import {connect} from "react-redux";
import {useParams} from "react-router-dom";
import {getStatus, getUserProfile, updateStatus} from "../../reducer/reducerProfile";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2
        }
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }

    render() {
        return (
            <div className={classes.content}>
                <Profile {...this.props}
                         profile={this.props.profile}
                         status={this.props.status}
                         updateStatus={this.props.updateStatus}
                />
            </div>
        );
    }
}


let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,

})

export function withRouter(Children) {
    return (props) => {
        const match = {params: useParams()};
        return <Children {...props} match={match}/>
    }
}


export default compose(
    connect(mapStateToProps,
        {
            getUserProfile,
            getStatus,
            updateStatus
        }),
    withRouter,
    withAuthRedirect
)(ProfileContainer)