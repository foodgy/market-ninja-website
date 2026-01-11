// src/components/shared/Video.jsx
'use client';

import { useRef, useState, useCallback } from 'react';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

export default function Video({
    src,
    poster,
    className,
    loop = false,
    muted = true,
    playsInline = true,
    controlsList = 'nodownload',
    autoPlay = false,
    controls = true, // <--- Новый проп: разрешены ли контролы в принципе
    ...rest
}) {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(autoPlay);

    const togglePlay = useCallback(() => {
        const video = videoRef.current;
        if (!video) return;

        if (video.paused) {
            video.play().catch((err) => {
                console.warn('Автовоспроизведение заблокировано или ошибка:', err);
                setIsPlaying(false);
            });
        } else {
            video.pause();
        }
    }, []);

    // Логика отображения нативных контролов
    const shouldShowNativeControls = (() => {
        // 1. Если это AutoPlay видео -> контролы скрыты всегда
        if (autoPlay) return false;

        // 2. Если контролы глобально отключены пропом -> скрыты
        if (!controls) return false;

        // 3. Если видео на паузе -> скрываем (чтобы показать наш оверлей с кнопкой Play)
        //    Если видео играет -> показываем (чтобы дать пользователю управление)
        return isPlaying;
    })();

    return (
        <div
            className={classNames(
                'relative group bg-white rounded-2xl border border-slate-200',
                'shadow-xl overflow-hidden z-10',
                className
            )}
        >
            <div className="aspect-video bg-slate-100 relative">
                <video
                    ref={videoRef}
                    className={classNames(
                        "size-full object-cover",
                        // Добавляем курсор pointer только если контролов нет (чтобы кликнуть для старта)
                        !shouldShowNativeControls ? "cursor-pointer" : ""
                    )}
                    src={src}
                    poster={poster}
                    loop={loop}
                    muted={muted}
                    playsInline={playsInline}
                    controlsList={controlsList}
                    autoPlay={autoPlay}
                    
                    // Динамическое управление атрибутом controls
                    controls={shouldShowNativeControls}

                    // Важно: suppressHydrationWarning нужен, так как autoPlay может отличаться на сервере/клиенте
                    suppressHydrationWarning={true} 

                    // Если показаны нативные контролы, мы убираем наш onClick, 
                    // чтобы браузер сам управлял паузой/кликами по таймлайну
                    onClick={shouldShowNativeControls ? undefined : togglePlay}
                    
                    // Синхронизация стейта
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}

                    {...rest}
                />

                {/* Оверлей с кнопкой Play */}
                {/* Рендерим его только если видео НЕ играет ИЛИ (если это autoplay но почему-то встало на паузу) */}
                {/* Логика простая: скрываем, когда играет */}
                <button
                    type="button"
                    onClick={togglePlay}
                    aria-label={isPlaying ? "Пауза" : "Воспроизвести видео"}
                    className={classNames(
                        "absolute inset-0 w-full h-full flex items-center justify-center bg-black/20 transition-all duration-300 cursor-pointer border-none outline-hidden",
                        // Скрываем оверлей, если видео играет
                        isPlaying
                            ? "opacity-0 pointer-events-none"
                            : "opacity-100 hover:bg-black/30"
                    )}
                >
                    <div className="flex size-20 items-center justify-center rounded-full bg-white/90 shadow-lg transition-transform group-hover:scale-110">
                        <FontAwesomeIcon icon={faPlay} className="ml-1 text-4xl text-gray-600" />
                    </div>
                </button>
            </div>
        </div>
    );
}