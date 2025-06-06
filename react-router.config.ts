import type { Config } from '@react-router/dev/config';

export default {
    // Enable SPA mode for GitHub Pages deployment
    ssr: false,
    basename: process.env.NODE_ENV === 'production' ? '/make-it-flowers' : '/',
} satisfies Config;
