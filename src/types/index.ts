export interface TimerSession {
    id: number;
    duration: number; // in seconds
    timestamp: Date;
}

export type TimerStatus = 'idle' | 'running' | 'paused';