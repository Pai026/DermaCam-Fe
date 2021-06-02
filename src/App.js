import React,{useState} from "react";
import PublicRouter from "./Router/PublicRouter"
import { useAbortableEffect } from "./util/useAbortableEffect";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUser } from "./Redux/actions";
import {FullLoading} from "./components/common/loader";
import CustomerRouter from "./Router/CustomerRouter";
function App() {
    const dispatch = useDispatch();
    const state = useSelector((reduxState) => reduxState);
    const { currentUser } = state;
    const [user, setUser] = useState(false);


    useAbortableEffect(
        async (status) => {
            const access = localStorage.getItem("login_access_token");
            
            if (access) {
                const res = await dispatch(getCurrentUser());
                
                if (res) {
                    
                    setUser(res.data);
                }
            } else {
                setUser(null);
            }
        },
        [dispatch]
    );
    if (user !== null && (!currentUser || currentUser.isFetching)) {
        return <FullLoading />;
    }
    if (currentUser && currentUser.data) {
        
        return <CustomerRouter/>;
    }
    else{
    return <PublicRouter />
    }
}

export default App;