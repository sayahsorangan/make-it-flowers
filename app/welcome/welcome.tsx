import { useState } from 'react';

export function Welcome() {
    const [selectedCategory, setSelectedCategory] = useState('all');

    const flowers = [
        {
            id: 1,
            name: 'Pink Rose',
            image: '🌹',
            category: 'roses',
            description: 'Beautiful pink roses symbolizing love and gratitude',
            meaning: 'Appreciation and admiration',
        },
        {
            id: 2,
            name: 'Cherry Blossom',
            image: '🌸',
            category: 'seasonal',
            description: 'Delicate cherry blossoms representing the beauty of life',
            meaning: 'Renewal and the fleeting nature of life',
        },
        {
            id: 3,
            name: 'Tulip',
            image: '🌷',
            category: 'tulips',
            description: 'Colorful tulips that herald the arrival of spring',
            meaning: 'Perfect love and elegance',
        },
        {
            id: 4,
            name: 'Hibiscus',
            image: '🌺',
            category: 'tropical',
            description: 'Exotic hibiscus flowers from tropical paradises',
            meaning: 'Delicate beauty and femininity',
        },
        {
            id: 5,
            name: 'Sunflower',
            image: '🌻',
            category: 'sunflowers',
            description: 'Bright sunflowers that always face the sun',
            meaning: 'Loyalty, adoration, and positivity',
        },
        {
            id: 6,
            name: 'Daisy',
            image: '🌼',
            category: 'daisies',
            description: 'Pure white daisies representing innocence',
            meaning: 'New beginnings and purity',
        },
    ];

    const categories = [
        { id: 'all', name: 'All Flowers' },
        { id: 'roses', name: 'Roses' },
        { id: 'tulips', name: 'Tulips' },
        { id: 'seasonal', name: 'Seasonal' },
        { id: 'tropical', name: 'Tropical' },
        { id: 'sunflowers', name: 'Sunflowers' },
        { id: 'daisies', name: 'Daisies' },
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
                            <h1 className='text-3xl font-bold text-white'>Blooming Dreams</h1>
                        </div>
                        <nav className='hidden md:flex space-x-8'>
                            <a
                                href='#'
                                className='text-white hover:text-pink-100 transition-colors font-medium'
                            >
                                Home
                            </a>
                            <a
                                href='#gallery'
                                className='text-white hover:text-pink-100 transition-colors font-medium'
                            >
                                Gallery
                            </a>
                            <a
                                href='#about'
                                className='text-white hover:text-pink-100 transition-colors font-medium'
                            >
                                About
                            </a>
                            <a
                                href='#contact'
                                className='text-white hover:text-pink-100 transition-colors font-medium'
                            >
                                Contact
                            </a>
                        </nav>
                        <div className='hidden md:flex items-center space-x-3'>
                            <span className='text-white text-sm'>🌸 Discover Nature's Beauty</span>
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
                            Discover the Beauty <br />
                            <span className='text-pink-600'>of Nature's Flowers</span>
                        </h2>
                        <p className='text-xl text-pink-700 mb-8 max-w-2xl mx-auto'>
                            Explore our beautiful collection of flowers and learn about their meanings, origins, and the
                            joy they bring to our lives.
                        </p>
                        <button className='bg-gradient-to-r from-pink-500 to-rose-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-pink-600 hover:to-rose-600 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1'>
                            Explore Gallery 🌸
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
                    <h3 className='text-3xl font-bold text-pink-800 text-center mb-8'>Flower Gallery</h3>
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
                                            <span className='font-semibold'>Meaning:</span> {flower.meaning}
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
                    <h3 className='text-4xl font-bold text-pink-800 text-center mb-12'>About Flowers</h3>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                        <div className='text-center bg-white p-8 rounded-2xl shadow-lg'>
                            <span className='text-5xl mb-4 block'>🌱</span>
                            <h4 className='text-xl font-bold text-pink-800 mb-4'>Nature's Art</h4>
                            <p className='text-pink-600'>
                                Flowers are nature's masterpieces, each one unique and beautiful in its own way
                            </p>
                        </div>
                        <div className='text-center bg-white p-8 rounded-2xl shadow-lg'>
                            <span className='text-5xl mb-4 block'>💝</span>
                            <h4 className='text-xl font-bold text-pink-800 mb-4'>Meaningful Symbols</h4>
                            <p className='text-pink-600'>
                                Every flower carries deep meaning and has been used to express emotions throughout
                                history
                            </p>
                        </div>
                        <div className='text-center bg-white p-8 rounded-2xl shadow-lg'>
                            <span className='text-5xl mb-4 block'>🌍</span>
                            <h4 className='text-xl font-bold text-pink-800 mb-4'>Global Beauty</h4>
                            <p className='text-pink-600'>
                                From tropical paradises to temperate gardens, flowers bloom across every continent
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Newsletter */}
            <section className='py-16 bg-gradient-to-r from-pink-500 to-rose-500'>
                <div className='max-w-4xl mx-auto text-center px-4'>
                    <span className='text-5xl mb-6 block'>💌</span>
                    <h3 className='text-3xl font-bold text-white mb-4'>Stay Connected with Nature</h3>
                    <p className='text-pink-100 mb-8 text-lg'>
                        Subscribe to get flower facts, seasonal blooms, and nature photography
                    </p>
                    <div className='flex flex-col sm:flex-row max-w-md mx-auto gap-4'>
                        <input
                            type='email'
                            placeholder='Enter your email'
                            className='flex-1 px-4 py-3 rounded-full border-none outline-none text-pink-800'
                        />
                        <button className='bg-white text-pink-500 px-6 py-3 rounded-full font-semibold hover:bg-pink-50 transition-colors'>
                            Subscribe
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
                                <h4 className='text-xl font-bold'>Blooming Dreams</h4>
                            </div>
                            <p className='text-pink-200'>
                                Celebrating the beauty and wonder of flowers from around the world.
                            </p>
                        </div>
                        <div>
                            <h5 className='font-semibold mb-4'>Explore</h5>
                            <ul className='space-y-2'>
                                <li>
                                    <a
                                        href='#'
                                        className='text-pink-200 hover:text-white transition-colors'
                                    >
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href='#gallery'
                                        className='text-pink-200 hover:text-white transition-colors'
                                    >
                                        Gallery
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href='#about'
                                        className='text-pink-200 hover:text-white transition-colors'
                                    >
                                        About
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href='#contact'
                                        className='text-pink-200 hover:text-white transition-colors'
                                    >
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h5 className='font-semibold mb-4'>Flower Types</h5>
                            <ul className='space-y-2'>
                                <li>
                                    <a
                                        href='#'
                                        className='text-pink-200 hover:text-white transition-colors'
                                    >
                                        Roses
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href='#'
                                        className='text-pink-200 hover:text-white transition-colors'
                                    >
                                        Tulips
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href='#'
                                        className='text-pink-200 hover:text-white transition-colors'
                                    >
                                        Seasonal Blooms
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href='#'
                                        className='text-pink-200 hover:text-white transition-colors'
                                    >
                                        Tropical Flowers
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h5 className='font-semibold mb-4'>Connect</h5>
                            <ul className='space-y-2 text-pink-200'>
                                <li>🌐 www.bloomingdreams.com</li>
                                <li>📧 hello@bloomingdreams.com</li>
                                <li>📱 Follow us on social media</li>
                            </ul>
                        </div>
                    </div>
                    <div className='border-t border-pink-800 mt-8 pt-8 text-center'>
                        <p className='text-pink-200'>
                            &copy; 2025 Blooming Dreams. All rights reserved. Made with 💖 for flower lovers
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
