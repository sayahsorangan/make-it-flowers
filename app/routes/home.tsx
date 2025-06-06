import type { Route } from './+types/home';
import { Welcome } from '../welcome/welcome';

export function meta({}: Route.MetaArgs) {
    return [
        { title: 'Make it Flowers - Temukan Keindahan Bunga' },
        {
            name: 'description',
            content:
                'Jelajahi dunia bunga yang menakjubkan dengan galeri indah kami. Pelajari tentang berbagai jenis bunga, maknanya, dan kebahagiaan yang mereka bawa dalam hidup kita.',
        },
        {
            name: 'keywords',
            content: 'bunga, galeri bunga, makna bunga, alam, botani, mawar, tulip, daisy, bunga matahari',
        },
    ];
}

export default function Home() {
    return <Welcome />;
}
