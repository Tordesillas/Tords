import {ref} from "vue";
import {defineStore} from "pinia";

export const useAudio = defineStore('audio', () => {
    const audioElement = ref<HTMLAudioElement | null>(null);
    const currentAudio = ref('');
    const isPlaying = ref(false);
    const progress = ref(0);

    function setAudioElement(element: HTMLAudioElement) {
        audioElement.value = element;
    }

    function playAudio(track: string) {
        if (audioElement.value) {
            const audioUrl = new URL(`../assets/audios/${track}.ogg`, import.meta.url).href;

            if (audioElement.value.src !== audioUrl) {
                audioElement.value.src = audioUrl;
            }
            audioElement.value.play();
            audioElement.value.ontimeupdate = () => {
                if (audioElement.value) {
                    const duration = audioElement.value.duration;
                    const currentTime = audioElement.value.currentTime;
                    if (duration > 0) {
                        progress.value = (currentTime / duration) * 100;
                    }
                }
            };

            isPlaying.value = true;
            currentAudio.value = track;
        }
    }

    function pauseAudio() {
        if (audioElement.value && isPlaying.value) {
            audioElement.value.pause();
            audioElement.value.ontimeupdate = null;

            progress.value = 0;
            isPlaying.value = false;
        }
    }

    function stopAudio() {
        if (audioElement.value) {
            audioElement.value.pause();
            audioElement.value.currentTime = 0;

            progress.value = 0;
            isPlaying.value = false;
        }
    }

    return {
        audioElement,
        currentAudio,
        isPlaying,
        progress,
        setAudioElement,
        playAudio,
        pauseAudio,
        stopAudio
    };
});
