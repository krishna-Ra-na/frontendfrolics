import React from "react";


interface Props {
    children: React.ReactNode;
}

export default function CssanimationLayout({ children }: Props) {
    return (
        <>
            {children}
        </>
    );
}