'use client';

import { useCallback, useEffect,useRef, useState } from 'react';

import classNames from 'classnames';
import { Play } from 'lucide-react';

export default function Video({
    src,
    poster,
    className,
    loop = false,
    muted = true,
    playsInline = true,
    controlsList = 'nodownload',
    autoPlay = false,
    controls = true,
    ...rest
}) {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            const isTouch = (('ontouchstart' in window) ||
                (navigator.maxTouchPoints > 0) ||
                (navigator.msMaxTouchPoints > 0));

            setIsMobile(isTouch);
        };

        checkMobile();
    }, []);

    const shouldShowNativeControls = (() => {
        if (autoPlay) return false;
        if (!controls) return false;
        if (isMobile) return true;
        return isPlaying;
    })();

    const handlePlayClick = useCallback(() => {
        if (isMobile && controls) return;

        const video = videoRef.current;
        if (!video) return;

        if (shouldShowNativeControls) return;

        if (video.paused) {
            video.play().catch((err) => {
                console.warn('Playback failed:', err);
                setIsPlaying(false);
            });
        } else {
            video.pause();
        }
    }, [shouldShowNativeControls, isMobile, controls]);

    const showOverlay = !isMobile || !controls;


    return (
        <div
            className={classNames(
                'relative group bg-white rounded-2xl border border-slate-200',
                'shadow-xl overflow-hidden z-10',
                className
            )}
        >
            <div
                className="aspect-video bg-slate-100 relative cursor-pointer"
                onClick={showOverlay ? handlePlayClick : undefined}
            >
                <video
                    ref={videoRef}
                    className="size-full object-cover"
                    poster={poster}
                    loop={loop}
                    muted={muted}
                    playsInline={playsInline}
                    controlsList={controlsList}
                    autoPlay={autoPlay}
                    controls={shouldShowNativeControls}
                    suppressHydrationWarning={true}
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}

                    {...rest}
                >
                    <source src={`${src}#t=0.1`} type="video/mp4" />
                </video>
                
                {showOverlay && (
                    <div
                        className={classNames(
                            'absolute inset-0 w-full h-full flex items-center justify-center bg-black/20 transition-all duration-300 border-none outline-hidden pointer-events-none',
                            isPlaying ? "opacity-0" : "opacity-100 hover:bg-black/30"
                        )}
                    >
                        <div className="flex size-20 text-gray-600 items-center justify-center rounded-full bg-white/90 shadow-lg transition-transform group-hover:scale-110">
                            <Play strokeWidth={0} fill="currentColor" size={42} />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}