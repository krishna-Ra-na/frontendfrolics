"use client"
import React from "react";
import Breadcrumb from '@/components/breadcrumb';

interface Props {
    children: React.ReactNode;
}

export default function ThrottleexamplesLayout({ children }: Props) {
    return (
        <>
            <div className='flex flex-col gap-4'>
                <Breadcrumb />
                {children}
            </div>
        </>
    );
}