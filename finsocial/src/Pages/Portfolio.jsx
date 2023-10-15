import React, { useState, useMemo } from "react";
import Topbar from "../components/common/Topbar";
import { getCurrentUser } from "../api/FirestoreAPI";
import PortfolioComponent from "../components/PortfolioComponent";


export default function Portfolio() {
    const [currentUser, setCurrentUser] = useState({});

    useMemo(() => {
        getCurrentUser(setCurrentUser);
      }, []);
    return (<div>
    <Topbar currentUser={currentUser} />
    <PortfolioComponent />
  </div>);
}