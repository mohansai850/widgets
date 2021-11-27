import React, { useEffect } from "react";
import { useState } from "react/cjs/react.development";

const Route = ({path, children}) => {

    const [currPath, setCurrPath] = useState(window.location.pathname)

    const onLocationChange = () => {
        setCurrPath(window.location.pathname)
    }

    useEffect(() => {
        window.addEventListener('popstate', onLocationChange)
        return () => {
            window.removeEventListener('popstate', onLocationChange)
        }
    }, [])
    return currPath === path ? children : null;
}

export default Route;