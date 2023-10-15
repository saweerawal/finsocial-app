import React, { useState, useMemo } from "react";
import Topbar from "../components/common/Topbar";
import { getCurrentUser } from "../api/FirestoreAPI";
import InsightsComponent from "../components/InsightsComponent";

export default function Insights() {
    const [currentUser, setCurrentUser] = useState({});

    useMemo(() => {
        getCurrentUser(setCurrentUser);
      }, []);
    return (<div>
    <Topbar currentUser={currentUser} />
    <InsightsComponent />
  </div>);
}