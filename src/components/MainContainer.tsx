import React from "react";
import Footer from "./Footer";

export default function MainContainer({children}: React.PropsWithChildren<{}>) {
    return (
        <>
            <div className="flex flex-col h-full container mx-auto pt-4 pb-0">
                {children}
                <Footer/>
            </div>
        </>
    );
};
