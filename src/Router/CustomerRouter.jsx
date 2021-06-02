import React from "react";
import { useRoutes,useRedirect } from "hookrouter";
import Sidenav from "../components/sidenav";
import NearByPlaces from "../components/nearbyplaces";
const routes = {
    "/nearbydoc": () => <NearByPlaces />,
};
// const links = 
//     [
//         {
//             link: "/nearbydoc",
//             title: "Search Doctor",
//             icon: "",
//         },
//     ];

const CustomerRouter = () => {
    useRedirect("/", "/nearbydoc");
    useRedirect("/login","/nearbydoc");
    const pages = useRoutes(routes);

    return (
        <div className="">
            {!pages ? (
                <div className="">Error 404: Page not found</div>
            ) : (
                <div className="flex">
                <div className="fixed">
                <Sidenav/>
                </div>
                {pages}
                </div>
            )}
            {/* <Footer /> */}
        </div>
    );
};

export default CustomerRouter;