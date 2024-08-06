// Dependencies
import Echo from 'laravel-echo';
import Pusher from 'pusher-js';

// Assign Pusher to the global window object
window.Pusher = Pusher;

// Initialize Echo with the provided configuration
window.Echo = new Echo({
  broadcaster: 'reverb',
  key: import.meta.env.VITE_REVERB_APP_KEY,
  wsHost: import.meta.env.VITE_REVERB_HOST,
  wsPort: parseInt(import.meta.env.VITE_REVERB_PORT ?? '80', 10),
  wssPort: parseInt(import.meta.env.VITE_REVERB_PORT ?? '443', 10),
  forceTLS: (import.meta.env.VITE_REVERB_SCHEME ?? 'https') === 'https',
  enabledTransports: ['ws', 'wss'],
});
