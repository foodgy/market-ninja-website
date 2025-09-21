document.addEventListener('DOMContentLoaded', () => {
    const videoContainer = document.getElementById('video-container');
    const video = document.getElementById('custom-video-player');
    const playPauseBtn = document.getElementById('play-pause-btn');
    const bigPlayBtn = document.getElementById('big-play-btn');
    const playOverlay = document.getElementById('play-overlay');
    const progressBar = document.getElementById('progress-bar');
    const timeDisplay = document.getElementById('time-display');
    const volumeBtn = document.getElementById('volume-btn');
    const volumeBar = document.getElementById('volume-bar');
    const fullscreenBtn = document.getElementById('fullscreen-btn');

    // --- Функции ---

    // Форматирование времени (например, 65 секунд -> 01:05)
    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }

    // Включение/выключение воспроизведения
    function togglePlay() {
        if (video.paused || video.ended) {
            video.play();
        } else {
            video.pause();
        }
    }

    // Обновление иконки Play/Pause
    function updatePlayPauseIcon() {
        const icon = playPauseBtn.querySelector('i');
        icon.classList.toggle('fa-play', video.paused);
        icon.classList.toggle('fa-pause', !video.paused);
        // Скрываем большую кнопку, когда видео играет
        playOverlay.style.opacity = video.paused ? '1' : '0';
    }

    // Обновление прогресс-бара и времени
    function updateProgress() {
        const progress = (video.currentTime / video.duration) * 100;
        progressBar.value = progress;
        timeDisplay.textContent = `${formatTime(video.currentTime)} / ${formatTime(video.duration)}`;
    }

    // Перемотка видео
    function scrub(e) {
        const scrubTime = (e.offsetX / progressBar.offsetWidth) * video.duration;
        video.currentTime = scrubTime;
    }

    // Обновление иконки громкости
    function updateVolumeIcon() {
        const icon = volumeBtn.querySelector('i');
        icon.classList.toggle('fa-volume-up', video.volume > 0.5 && !video.muted);
        icon.classList.toggle('fa-volume-down', video.volume <= 0.5 && video.volume > 0 && !video.muted);
        icon.classList.toggle('fa-volume-mute', video.volume === 0 || video.muted);
    }

    // Включение/выключение звука
    function toggleMute() {
        video.muted = !video.muted;
        if (video.muted) {
            volumeBar.value = 0;
        } else {
            volumeBar.value = video.volume;
        }
        updateVolumeIcon();
    }

    // Включение/выключение полноэкранного режима
    function toggleFullscreen() {
        if (!document.fullscreenElement) {
            videoContainer.requestFullscreen().catch(err => {
                alert(`Ошибка: не удалось включить полноэкранный режим: ${err.message}`);
            });
        } else {
            document.exitFullscreen();
        }
    }

    // --- Слушатели событий ---

    playPauseBtn.addEventListener('click', togglePlay);
    bigPlayBtn.addEventListener('click', togglePlay);
    video.addEventListener('click', togglePlay);

    video.addEventListener('play', updatePlayPauseIcon);
    video.addEventListener('pause', updatePlayPauseIcon);
    video.addEventListener('timeupdate', updateProgress);
    video.addEventListener('loadedmetadata', updateProgress);

    progressBar.addEventListener('input', (e) => {
        video.currentTime = (progressBar.value / 100) * video.duration;
    });

    volumeBar.addEventListener('input', (e) => {
        video.muted = false;
        video.volume = e.target.value;
        updateVolumeIcon();
    });

    volumeBtn.addEventListener('click', toggleMute);
    fullscreenBtn.addEventListener('click', toggleFullscreen);

    // Изначальная установка иконки громкости
    updateVolumeIcon();
});