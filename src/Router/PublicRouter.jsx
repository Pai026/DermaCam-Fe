import React from "react";
import { useRoutes, navigate, useRedirect } from "hookrouter";
import PublicNavBar from "../components/PublicNavBar";
import Logapp from "../components/login";
import Signup from "../components/signup";
const routes = {
    "/login": () => <Logapp />,
    "/register": () => <Signup />
};
const PublicRouter = ()=>{
    useRedirect("/", "/login");
    const pages = useRoutes(routes);
    !pages && navigate("/");
    return (
        <div className="relative bg-gray-200 min-h-screen pb-24">
            {/* public navbar can go here */}
            <PublicNavBar />
            {pages}
            {!pages && (
                <div className="flex justify-center py-16">
                    Error 404: Page not found
                </div>
            )}
            {/* <Footer signUp={true} /> */}
        </div>
    );
};

export default PublicRouter;