import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setNetworkStatus } from "../../redux/slice/networkSlice";

function NetworkListener() {
  const dispatch = useDispatch();
  useEffect(() => {
    const updateOnlineStatus = () => {
      dispatch(setNetworkStatus(navigator.onLine));
    };
    window.addEventListener("online", updateOnlineStatus);
    window.addEventListener("offline", updateOnlineStatus);
    updateOnlineStatus();
    return () => {
      window.removeEventListener("online", updateOnlineStatus);
      window.removeEventListener("offline", updateOnlineStatus);
    };
  }, [dispatch]);
  return null;
}

export default NetworkListener;
