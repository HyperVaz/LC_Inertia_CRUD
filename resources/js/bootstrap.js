import _ from 'lodash'; // Импорт lodash
import axios from 'axios'; // Импорт axios

// Привязка lodash и axios к глобальному объекту window
window._ = _;
window.axios = axios;

// Настройка заголовков axios
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */

// Импорт и настройка Laravel Echo (раскомментируйте, если используете)
// import Echo from 'laravel-echo';
// import Pusher from 'pusher-js';

// window.Pusher = Pusher;

// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: import.meta.env.VITE_PUSHER_APP_KEY, // Используем переменные окружения Vite
//     cluster: import.meta.env.VITE_PUSHER_APP_CLUSTER,
//     forceTLS: true
// });
