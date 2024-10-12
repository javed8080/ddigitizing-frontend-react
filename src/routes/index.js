import React, { Suspense, useEffect } from "react";
import { Loader } from "react-feather";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import UserLayout from "../components/layout/UserLayout";
import ClientHome from "../pages/user/ClientHome";
import Digitizing from "../pages/user/Digitizing";
import Home from "../pages/user/Home";
import Patches from "../pages/user/Patches";
import Vector from "../pages/user/Vector";

const MainRoutes = () => {
  useEffect(() => {
    // const abortController = new AbortController();
    // const color = localStorage.getItem("color");
    // const layout = localStorage.getItem("layout_version") || configDB.data.color.layout_version;
    // document.body.classList.add(layout);
    // console.ignoredYellowBox = ["Warning: Each", "Warning: Failed"];
    // console.disableYellowBox = true;
    // document.getElementById("color").setAttribute("href", `${process.env.PUBLIC_URL}/assets/css/${color}.css`);

    // return function cleanup() {
    //   abortController.abort();
    // };
  }, []);

  return (
    <>
      <BrowserRouter basename="/">
        <Suspense fallback={<Loader />}>


        
          <Routes>
          <Route path={``} element={<UserLayout />}>
              <Route exact path="" element={<Home />} />
              <Route exact path="digitizing" element={<Digitizing />} />
              <Route exact path="vector" element={<Vector />} />
              <Route exact path="patches" element={<Patches />} />
              <Route exact path="client-home" element={<ClientHome />} />
            </Route>
          </Routes>
            {/* <Route exact path={`${process.env.PUBLIC_URL}`} element={<Navigate to={`${process.env.PUBLIC_URL}/dashboard/default`} />} />
            {routes.map(({ path, Component }, i) => (
              <Route element={<AppLayout />} key={i}>
                <Route exact path={path} element={Component} />
              </Route>
            ))} */}
        </Suspense>
      </BrowserRouter>
    </>
  );
};

export default MainRoutes;
