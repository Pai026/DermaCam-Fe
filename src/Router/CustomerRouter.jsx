import React from "react";
import { useRoutes,useRedirect } from "hookrouter";
import Sidenav from "../components/sidenav";
import NearByPlaces from "../components/nearbyplaces";
import HealthDetail from "../components/healthdetail";
import Products from "../components/products";

const routes = {
    "/nearbydoc": () => <NearByPlaces />,
    "/healthdetails": () => <HealthDetail />,
    "/products" : () => <Products/>,
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