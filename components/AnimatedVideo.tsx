"use client";

import React, { useState, useEffect } from "react";

export default function VideoSection() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return null; // Return null on server-side
    }

    return (
        <section className="w-full lg:h-screen overflow-hidden flex items-center justify-center relative">
            <video
                src="/images/animated-video-new.mp4" 
                autoPlay
                loop
                muted
                playsInline
                className="h-full w-full "
            />
        </section>
    );
}