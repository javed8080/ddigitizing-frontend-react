import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import AppHeader from "../global/AppHeader/AppHeader";
import AppFooter from "../global/AppFooter/AppFooter";

const UserLayout = (props) => {
    return (
        <Fragment>
            <AppHeader />
            <div className="user-body">
                <Outlet />
            </div>
            <AppFooter />
        </Fragment>
    );
};

export default UserLayout;
