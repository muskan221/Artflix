const products = [
    {
        _id: '1',
        name: '',
        image: '/artflix/public/Images/Drawing/swan',
        artist: 'Shilpa Gupta',
        category: 'Digital Art',
        price: '8000',
        rating: 4.0,
        numReviewa: 12,
    },
    // {
    //     _id: '2',
    //     name: '',
    //     image: '/artflix/public/Images/Digital Art/16078d3aabc508ee84bf147d16e4d8a6.jpg',
    //     artist: 'Nikhil Chopra',
    //     category: 'Digital Art',
    //     price: '7500',
    //     rating: 3.0,
    //     numReviewa: 10,
    // },
    // {
    //     _id: '3',
    //     name: '',
    //     image: '/artflix/public/Images/Digital Art/2ab4e08e6744836be73dac1b2a7da368.jpg',
    //     artist: 'Reena Saini Kallat',
    //     category: 'Digital Art',
    //     price: '9000',
    //     rating: 3.5,
    //     numReviewa: 11,
    // },
    // {
    //     _id: '4',
    //     name: '',
    //     image: '/artflix/public/Images/Digital Art/OMU218.webp',
    //     artist: 'Sheela Gowdat',
    //     category: 'Digital Art',
    //     price: '9500',
    //     rating: 4.5,
    //     numReviewa: 9,
    // },
    // {
    //     _id: '5',
    //     name: '',
    //     image: '/artflix/public/Images/Digital Art/pro.jpg',
    //     artist: 'Anish Kapoor',
    //     category: 'Digital Art',
    //     price: '10000',
    //     rating: 5.0,
    //     numReviewa: 20,
    // },
    // {
    //     _id: '6',
    //     name: '',
    //     image: '/artflix/public/Images/Digital Art/TDR283.webp',
    //     artist: 'Smita Kapoor',
    //     category: 'Digital Art',
    //     price: '2500',
    //     rating: 3.0,
    //     numReviewa: 15,
    // },
    // {
    //     _id: '7',
    //     name: '',
    //     image: '/artflix/public/Images/Drawing/08-Wolf-Faye-Halliday-Animal-Drawings-and-Mandalas-www-designstack-co.jpg',
    //     artist: 'Shreya Bhatt',
    //     category: 'Drawing',
    //     price: '3000',
    //     rating: 3.5,
    //     numReviewa: 14,
    // },
    // {
    //     _id: '8',
    //     name: '',
    //     image: '/artflix/public/Images/Drawing/doodles.jpg',
    //     artist: 'Rishi Bhatt',
    //     category: 'Drawing',
    //     price: '4000',
    //     rating: 2.5,
    //     numReviewa: 9,
    // },
    // {
    //     _id: '9',
    //     name: '',
    //     image: '/artflix/public/Images/Drawing/enrique-bernal-florescent-drawings-1.jpg',
    //     artist: 'Anil Kumar Duttt',
    //     category: 'Drawing',
    //     price: '5000',
    //     rating: 3.0,
    //     numReviewa: 4,
    // },
    // {
    //     _id: '10',
    //     name: '',
    //     image: '/artflix/public/Images/Drawing/mandala.jpg',
    //     artist: 'Kannu Desai',
    //     category: 'Drawing',
    //     price: '8000',
    //     rating: 4.5,
    //     numReviewa: 24,
    // },
    // {
    //     _id: '11',
    //     name: '',
    //     image: '/artflix/public/Images/Drawing/swan.jpg',
    //     artist: 'Bharti Kher',
    //     category: 'Drawing',
    //     price: '7500',
    //     rating: 3.0,
    //     numReviewa: 10,
    // },
    // {
    //     _id: '12',
    //     name: '',
    //     image: '/artflix/public/Images/Metal Art/colosseum-david-bowman.jpg',
    //     artist: 'Dhruvi Acharya',
    //     category: 'Metal Art',
    //     price: '6500',
    //     rating: 1.5,
    //     numReviewa: 14,
    // },
    // {
    //     _id: '13',
    //     name: '',
    //     image: '/artflix/public/Images/Metal Art/empire-state-blue-night-inge-johnsson.jpg',
    //     artist: 'Jacob Tenison',
    //     category: 'Metal Art',
    //     price: '5500',
    //     rating: 2.0,
    //     numReviewa: 13,
    // },
    // {
    //     _id: '14',
    //     name: '',
    //     image: '/artflix/public/Images/Metal Art/indigo-mountains-spacefrog-designs.jpg',
    //     artist: 'Samar Acharya',
    //     category: 'Metal Art',
    //     price: '9500',
    //     rating: 4.5,
    //     numReviewa: 24,
    // },
    // {
    //     _id: '15',
    //     name: '',
    //     image: '/artflix/public/Images/Metal Art/my-dream-place-tithi-luadthong.jpg',
    //     artist: 'Samar Maity',
    //     category: 'Metal Art',
    //     price: '8500',
    //     rating: 4.0,
    //     numReviewa: 16,
    // },
    // {
    //     _id: '15',
    //     name: '',
    //     image: '/artflix/public/Images/Metal Art/paris-cityscape-art-by-linda-woods-linda-woods.jpg',
    //     artist: 'Piraj Sagra',
    //     category: 'Metal Art',
    //     price: '7500',
    //     rating: 3.0,
    //     numReviewa: 12,
    // },
    // {
    //     _id: '16',
    //     name: '',
    //     image: '/artflix/public/Images/Paintings/Ancient Sea View.webp',
    //     artist: 'Sohil Sagra',
    //     category: 'Metal Art',
    //     price: '12500',
    //     rating: 3.5,
    //     numReviewa: 19,
    // },
    // {
    //     _id: '17',
    //     name: '',
    //     image: '/artflix/public/Images/Paintings/floral.webp',
    //     artist: 'Kunal Kataria',
    //     category: 'Paintings',
    //     price: '10300',
    //     rating: 2.5,
    //     numReviewa: 15,
    // },
    // {
    //     _id: '18',
    //     name: '',
    //     image: '/artflix/public/Images/Paintings/Handmade Oil Painting.webp',
    //     artist: 'Lokesh Devnani',
    //     category: 'Paintings',
    //     price: '14000',
    //     rating: 3.5,
    //     numReviewa: 18,
    // },
    // {
    //     _id: '19',
    //     name: '',
    //     image: '/artflix/public/Images/Paintings/Radha Krishna Medival.webp',
    //     artist: 'Drishti Dhameja',
    //     category: 'Paintings',
    //     price: '12000',
    //     rating: 4.2,
    //     numReviewa: 17,
    // },
    // {
    //     _id: '20',
    //     name: '',
    //     image: '/artflix/public/Images/Paintings/underwater-toughened-glass.webp',
    //     artist: 'Anagha Khatri',
    //     category: 'Paintings',
    //     price: '13000',
    //     rating: 4.7,
    //     numReviewa: 19,
    // },
    // {
    //     _id: '21',
    //     name: '',
    //     image: '/artflix/public/Images/Paintings/Wall Art Painting.webp',
    //     artist: 'Roshan Kukreja',
    //     category: 'Paintings',
    //     price: '15000',
    //     rating: 3.7,
    //     numReviewa: 25,
    // },
    // {
    //     _id: '22',
    //     name: '',
    //     image: '/artflix/public/Images/Paintings/Wildlife.jpg',
    //     artist: 'Muskan Singhania',
    //     category: 'Paintings',
    //     price: '13500',
    //     rating: 4.6,
    //     numReviewa: 23,
    // },
    // {
    //     _id: '23',
    //     name: '',
    //     image: '/artflix/public/Images/Photography/1455543492276.jpg',
    //     artist: 'Aarohi Malhotra',
    //     category: 'Photography',
    //     price: '16000',
    //     rating: 3.9,
    //     numReviewa: 27,
    // },
    // {
    //     _id: '24',
    //     name: '',
    //     image: '/artflix/public/Images/Photography/1699239092.jpg',
    //     artist: 'Shraddha Aarya',
    //     category: 'Photography',
    //     price: '16000',
    //     rating: 3.9,
    //     numReviewa: 27,
    // },
    // {
    //     _id: '25',
    //     name: '',
    //     image: '/artflix/public/Images/Photography/_123221978_9085becc-d620-4f83-b6dc-d384efb59c8a.jpg',
    //     artist: 'Ishaan Khanna',
    //     category: 'Photography',
    //     price: '25000',
    //     rating: 4.9,
    //     numReviewa: 30,
    // },
    // {
    //     _id: '26',
    //     name: '',
    //     image: '/artflix/public/Images/Photography/aesthetics-photography-3.jpg',
    //     artist: 'Ashika Sutaria',
    //     category: 'Photography',
    //     price: '20000',
    //     rating: 4.8,
    //     numReviewa: 33,
    // },
    // {
    //     _id: '27',
    //     name: '',
    //     image: '/artflix/public/Images/Photography/architecture-photography_P1_900x420.webp',
    //     artist: 'Tara Malhotra',
    //     category: 'Photography',
    //     price: '18000',
    //     rating: 4.2,
    //     numReviewa: 28,
    // },
    // {
    //     _id: '28',
    //     name: '',
    //     image: '/artflix/public/Images/Photography/nature-landscape-photography-0001-1.jpg',
    //     artist: 'Vedant Raghani',
    //     category: 'Photography',
    //     price: '17000',
    //     rating: 3.9,
    //     numReviewa: 23,
    // },
    // {
    //     _id: '29',
    //     name: '',
    //     image: '/artflix/public/Images/Photography/Paris.jpg',
    //     artist: 'Sahil Ahuja',
    //     category: 'Photography',
    //     price: '13000',
    //     rating: 2.9,
    //     numReviewa: 20,
    // },
    // {
    //     _id: '30',
    //     name: '',
    //     image: '/artflix/public/Images/Photography/photo-1614977570194-56bce4c12322.jpg',
    //     artist: 'Sameer Ahuja',
    //     category: 'Photography',
    //     price: '12500',
    //     rating: 2.8,
    //     numReviewa: 10,
    // },
    // {
    //     _id: '31',
    //     name: '',
    //     image: '/artflix/public/Images/Photography/photography-summer-aesthetic-Favim.com-6319423.jpg',
    //     artist: 'Jash Valecha',
    //     category: 'Photography',
    //     price: '17500',
    //     rating: 3.9,
    //     numReviewa: 19,
    // },
    // {
    //     _id: '32',
    //     name: '',
    //     image: '/artflix/public/Images/Photography/X-Raw-Photos-of-the-Wildlife-5b4cb4c01dc21__880.jpg',
    //     artist: 'Dheeraj Kapur',
    //     category: 'Photography',
    //     price: '19500',
    //     rating: 2.9,
    //     numReviewa: 20,
    // },
]

export default products;