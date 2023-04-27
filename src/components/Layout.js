import React from "react";


const Layout = ({children}) => {
    return (
        <div className="bg-neutral-200 container h-screen">
        {children}
        </div>
    )
}

export default Layout