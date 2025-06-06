import { useState } from 'react';

export function Welcome() {
    const [selectedCategory, setSelectedCategory] = useState('all');

    const flowers = [
        {
            id: 1,
            name: 'Mawar Pink',
            image: '🌹',
            category: 'roses',
            description: 'Mawar pink yang indah melambangkan cinta dan rasa syukur',
            meaning: 'Penghargaan dan kekaguman',
        },
        {
            id: 2,
            name: 'Bunga Sakura',
            image: '🌸',
            category: 'seasonal',
            description: 'Bunga sakura yang lembut mewakili keindahan hidup',
            meaning: 'Pembaharuan dan sifat sementara kehidupan',
        },
        {
            id: 3,
            name: 'Tulip',
            image: '🌷',
            category: 'tulips',
            description: 'Tulip berwarna-warni yang menandakan kedatangan musim semi',
            meaning: 'Cinta yang sempurna dan keelegan',
        },
        {
            id: 4,
            name: 'Hibiscus',
            image: '🌺',
            category: 'tropical',
            description: 'Bunga hibiscus eksotis dari surga tropis',
            meaning: 'Keindahan halus dan feminitas',
        },
        {
            id: 5,
            name: 'Bunga Matahari',
            image: '🌻',
            category: 'sunflowers',
            description: 'Bunga matahari cerah yang selalu menghadap matahari',
            meaning: 'Kesetiaan, pemujaan, dan positivitas',
        },
        {
            id: 6,
            name: 'Daisy',
            image: '🌼',
            category: 'daisies',
            description: 'Daisy putih murni yang mewakili kepolosan',
            meaning: 'Awal yang baru dan kemurnian',
        },
    ];

    const categories = [
        { id: 'all', name: 'Semua Bunga' },
        { id: 'roses', name: 'Mawar' },
        { id: 'tulips', name: 'Tulip' },
        { id: 'seasonal', name: 'Musiman' },
        { id: 'tropical', name: 'Tropis' },
        { id: 'sunflowers', name: 'Bunga Matahari' },
        { id: 'daisies', name: 'Daisy' },
    ];

    const filteredFlowers =
        selectedCategory === 'all' ? flowers : flowers.filter((flower) => flower.category === selectedCategory);

    return (
        <div className='min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100'>
            {/* Header */}
            <header className='bg-gradient-to-r from-pink-400 via-rose-400 to-pink-500 shadow-lg'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className='flex justify-between items-center py-6'>
                        <div className='flex items-center space-x-3'>
                            <span className='text-4xl'>🌸</span>
                            <h1 className='text-3xl font-bold text-white'>Make it Flowers</h1>
                        </div>
                        <nav className='hidden md:flex space-x-8'>
                            <a
                                href='#'
                                className='text-white hover:text-pink-100 transition-colors font-medium'
                            >
                                Beranda
                            </a>
                            <a
                                href='#gallery'
                                className='text-white hover:text-pink-100 transition-colors font-medium'
                            >
                                Galeri
                            </a>
                            <a
                                href='#about'
                                className='text-white hover:text-pink-100 transition-colors font-medium'
                            >
                                Tentang
                            </a>
                            <a
                                href='#contact'
                                className='text-white hover:text-pink-100 transition-colors font-medium'
                            >
                                Kontak
                            </a>
                        </nav>
                        <div className='hidden md:flex items-center space-x-3'>
                            <span className='text-white text-sm'>🌸 Temukan Keindahan Alam</span>
                        </div>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className='relative py-20 px-4'>
                <div className='max-w-7xl mx-auto text-center'>
                    <div className='mb-8'>
                        <span className='text-6xl mb-4 block'>🌺</span>
                        <h2 className='text-5xl md:text-6xl font-bold text-pink-800 mb-6'>
                            Temukan Keindahan <br />
                            <span className='text-pink-600'>Bunga-bunga Alam</span>
                        </h2>
                        <p className='text-xl text-pink-700 mb-8 max-w-2xl mx-auto'>
                            Jelajahi koleksi bunga-bunga indah kami dan pelajari tentang makna, asal-usul, dan kebahagiaan yang mereka bawa dalam hidup kita.
                        </p>
                        <button className='bg-gradient-to-r from-pink-500 to-rose-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-pink-600 hover:to-rose-600 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1'>
                            Jelajahi Galeri 🌸
                        </button>
                    </div>
                </div>
            </section>

            {/* Categories */}
            <section
                id='gallery'
                className='py-12 px-4'
            >
                <div className='max-w-7xl mx-auto'>
                    <h3 className='text-3xl font-bold text-pink-800 text-center mb-8'>Galeri Bunga</h3>
                    <div className='flex flex-wrap justify-center gap-4 mb-12'>
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setSelectedCategory(category.id)}
                                className={`px-6 py-3 rounded-full font-medium transition-all ${
                                    selectedCategory === category.id
                                        ? 'bg-pink-500 text-white shadow-lg'
                                        : 'bg-white text-pink-600 hover:bg-pink-100 shadow-md'
                                }`}
                            >
                                {category.name}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Flower Gallery */}
            <section className='py-12 px-4'>
                <div className='max-w-7xl mx-auto'>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                        {filteredFlowers.map((flower) => (
                            <div
                                key={flower.id}
                                className='bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden'
                            >
                                <div className='bg-gradient-to-br from-pink-100 to-rose-100 p-8 text-center'>
                                    <span className='text-6xl mb-4 block'>{flower.image}</span>
                                </div>
                                <div className='p-6'>
                                    <h4 className='text-xl font-bold text-pink-800 mb-2'>{flower.name}</h4>
                                    <p className='text-pink-600 mb-3'>{flower.description}</p>
                                    <div className='bg-pink-50 p-3 rounded-lg'>
                                        <p className='text-sm text-pink-700'>
                                            <span className='font-semibold'>Makna:</span> {flower.meaning}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section
                id='about'
                className='py-20 bg-gradient-to-r from-pink-200 via-rose-200 to-pink-300'
            >
                <div className='max-w-7xl mx-auto px-4'>
                    <h3 className='text-4xl font-bold text-pink-800 text-center mb-12'>Tentang Bunga</h3>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                        <div className='text-center bg-white p-8 rounded-2xl shadow-lg'>
                            <span className='text-5xl mb-4 block'>🌱</span>
                            <h4 className='text-xl font-bold text-pink-800 mb-4'>Seni Alam</h4>
                            <p className='text-pink-600'>
                                Bunga adalah karya agung alam, masing-masing unik dan indah dengan caranya sendiri
                            </p>
                        </div>
                        <div className='text-center bg-white p-8 rounded-2xl shadow-lg'>
                            <span className='text-5xl mb-4 block'>💝</span>
                            <h4 className='text-xl font-bold text-pink-800 mb-4'>Simbol Bermakna</h4>
                            <p className='text-pink-600'>
                                Setiap bunga memiliki makna mendalam dan telah digunakan untuk mengekspresikan emosi sepanjang sejarah
                            </p>
                        </div>
                        <div className='text-center bg-white p-8 rounded-2xl shadow-lg'>
                            <span className='text-5xl mb-4 block'>🌍</span>
                            <h4 className='text-xl font-bold text-pink-800 mb-4'>Keindahan Global</h4>
                            <p className='text-pink-600'>
                                Dari surga tropis hingga taman beriklim sedang, bunga mekar di setiap benua
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Newsletter */}
            <section className='py-16 bg-gradient-to-r from-pink-500 to-rose-500'>
                <div className='max-w-4xl mx-auto text-center px-4'>
                    <span className='text-5xl mb-6 block'>💌</span>
                    <h3 className='text-3xl font-bold text-white mb-4'>Tetap Terhubung dengan Alam</h3>
                    <p className='text-pink-100 mb-8 text-lg'>
                        Berlangganan untuk mendapatkan fakta bunga, mekar musiman, dan fotografi alam
                    </p>
                    <div className='flex flex-col sm:flex-row max-w-md mx-auto gap-4'>
                        <input
                            type='email'
                            placeholder='Masukkan email Anda'
                            className='flex-1 px-4 py-3 rounded-full border-none outline-none text-pink-800'
                        />
                        <button className='bg-white text-pink-500 px-6 py-3 rounded-full font-semibold hover:bg-pink-50 transition-colors'>
                            Berlangganan
                        </button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer
                id='contact'
                className='bg-pink-900 text-pink-100 py-12'
            >
                <div className='max-w-7xl mx-auto px-4'>
                    <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
                        <div>
                            <div className='flex items-center space-x-2 mb-4'>
                                <span className='text-2xl'>🌸</span>
                                <h4 className='text-xl font-bold'>Make it Flowers</h4>
                            </div>
                            <p className='text-pink-200'>
                                Merayakan keindahan dan keajaiban bunga dari seluruh dunia.
                            </p>
                        </div>
                        <div>
                            <h5 className='font-semibold mb-4'>Jelajahi</h5>
                            <ul className='space-y-2'>
                                <li>
                                    <a
                                        href='#'
                                        className='text-pink-200 hover:text-white transition-colors'
                                    >
                                        Beranda
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href='#gallery'
                                        className='text-pink-200 hover:text-white transition-colors'
                                    >
                                        Galeri
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href='#about'
                                        className='text-pink-200 hover:text-white transition-colors'
                                    >
                                        Tentang
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href='#contact'
                                        className='text-pink-200 hover:text-white transition-colors'
                                    >
                                        Kontak
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h5 className='font-semibold mb-4'>Jenis Bunga</h5>
                            <ul className='space-y-2'>
                                <li>
                                    <a
                                        href='#'
                                        className='text-pink-200 hover:text-white transition-colors'
                                    >
                                        Mawar
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href='#'
                                        className='text-pink-200 hover:text-white transition-colors'
                                    >
                                        Tulip
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href='#'
                                        className='text-pink-200 hover:text-white transition-colors'
                                    >
                                        Bunga Musiman
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href='#'
                                        className='text-pink-200 hover:text-white transition-colors'
                                    >
                                        Bunga Tropis
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h5 className='font-semibold mb-4'>Hubungi</h5>
                            <ul className='space-y-2 text-pink-200'>
                                <li>🌐 www.makeitflowers.com</li>
                                <li>📧 hello@makeitflowers.com</li>
                                <li>📱 Ikuti kami di media sosial</li>
                            </ul>
                        </div>
                    </div>
                    <div className='border-t border-pink-800 mt-8 pt-8 text-center'>
                        <p className='text-pink-200'>
                            &copy; 2025 Make it Flowers. Semua hak dilindungi. Dibuat dengan 💖 untuk pecinta bunga
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
