import {ref, computed} from 'vue';
import type {TimerStatus, TimerSession} from '../types';

export function useTimer() {
    const seconds = ref(0);
    const status = ref<TimerStatus>('idle');
    const sessions = ref<TimerSession[]>([]);

    let intervalId: number | null = null;

    const displayTime = computed(() => {
        const mins = Math.floor((seconds.value % 3600) / 60);
        const secs = seconds.value % 60;
        return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    });

function start() {
    if (status.value === 'running') return;
    status.value = 'running';
    if (intervalId){
        clearInterval(intervalId);
        intervalId = null;
    }

function stop() {
    if (status.value !== 'running') return;
    status.value = 'paused';
    if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
    }
}

function reset() {
    stop()
    seconds.value = 0
    status.value = 'idle'
  }

}}