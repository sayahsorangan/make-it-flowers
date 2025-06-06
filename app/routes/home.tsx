import type { Route } from './+types/home';
import { Welcome } from '../welcome/welcome';

export function meta({}: Route.MetaArgs) {
    return [
        { title: 'Blooming Dreams - Discover the Beauty of Flowers' },
        {
            name: 'description',
            content:
                'Explore the wonderful world of flowers with our beautiful gallery. Learn about different flower types, their meanings, and the joy they bring to our lives.',
        },
        {
            name: 'keywords',
            content: 'flowers, flower gallery, flower meanings, nature, botanical, roses, tulips, daisies, sunflowers',
        },
    ];
}

export default function Home() {
    return <Welcome />;
}
