import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import AppHeader from "../global/AppHeader/AppHeader";

const UserLayout = (props) => {
    return (
        <Fragment>
            <AppHeader />
            <div className="user-body">
                <Outlet />
            </div>
        </Fragment>
    );
};

export default UserLayout;
