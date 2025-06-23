import React from "react";

export default function VideoSection() {
    return (
    <section className="w-full h-screen overflow-hidden flex items-center justify-center relative">
                <video
                    src="/images/animated-video.mp4" 
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="h-full object-cover container"
                />
        </section>
    );
}
