import React from "react";


const Layout = ({children}) => {
    return (
        <div className="bg-neutral-200 container mx-auto">
        {children}
        </div>
    )
}

export default Layout