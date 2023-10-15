import React, { useState, useMemo } from "react";
import Topbar from "../components/common/Topbar";
import { getCurrentUser } from "../api/FirestoreAPI";
import NotificationsComponent from "../components/NotificationsComponent";


export default function Notifications() {
    const [currentUser, setCurrentUser] = useState({});

    useMemo(() => {
        getCurrentUser(setCurrentUser);
      }, []);
    return (<div>
    <Topbar currentUser={currentUser} />
    <NotificationsComponent />
  </div>);
}