import './Explore.css'
import { Carousel, Image } from 'react-bootstrap'
import 'animate.css';


const restaurants = [
    {
      name: 'Sahara Spice Bistro',
      imageUrl: 'images/restaurant-1.jpg'
    },
    {
        name: 'Oasis Cafe',
        imageUrl: 'images/restaurant-3.webp'
      },
      {
        name: 'Nomad\'s Delight Eatery',
        imageUrl: "images/restaurant-2.webp"
      },
      {
        name: 'Dune Diner Grill',
        imageUrl: "images/restaurant-4.webp"
      }
  ]
const sites = [
    {
        title: 'Christ The Redeemer',
        position: '1st',
        image: 'images/christ-the-redeemer.webp'
    },
    {
        title: 'Pyramids Of Giza',
        position: '2nd',
        image: 'images/pyramid-of-giza.webp'
    },
    {
        title: 'Taj Mahal',
        position: '3rd',
        image: 'images/Taj-Mahal.webp'
    },
    {
        title: 'The Colossuem',
        position: '4th',
        image: 'images/colosseum.webp'
    },
    {
        title: 'The Great Wall',
        position: '5th',
        image: 'images/Great-Wall-of-China.webp'
    },
    {
        title: 'Machu Pichu',
        position: '6th',
        image: 'images/machupichu.webp'
    },
    {
        title: 'Petra',
        position: '7th',
        image: 'images/petra.webp'
    },
    {
        title: 'Chichen Itza',
        position: '8th',
        image: 'images/Chichen-Itza.webp'
    },
    // More sites...
  ]

function Explore() {

  return (
    <div>
        <section>
            <div className="bg-black z-10 w-full h-4/5 absolute opacity-60 flex justify-center items-center">
                <h3 className='md:text-9xl overlay-text text-white text-center text-5xl w-4/5 mx-auto animate__animated animate__backInDown'>Discover Timbuktu's Hidden Gems</h3>
            </div>
            <Carousel>
                <Carousel.Item interval={5000}>
                    <Image className='slider-image' src='images/festival.webp' text="First slide" />
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                    <Image className='slider-image aspect-video' src='images/three-burgers.webp' text="First slide" />
                </Carousel.Item>
                <Carousel.Item interval={5000}> 
                    <Image className='slider-image' src='images/artists-collection.webp' text="First slide" />
                </Carousel.Item>
                <Carousel.Item interval={5000}> 
                    <Image className='slider-image' src='images/story-nightclub.webp' text="First slide" />
                </Carousel.Item>
            </Carousel>
        </section>
        <section className='pt-8'>
            <h1 id='text' className='mt-2 text-5xl text-center'>Cultural Tapestry</h1>
            <div className="sm:flex flex-wrap max-w-7xl">
                <div className="py-12 lg:py-8 cardi sm:w-1/3">
                    <div className="relative mx-auto max-w-md px-6 lg:px-8">
                        <div className="relative overflow-hidden rounded-xl h-96 py-24 px-8 shadow-2xl">
                        <div className="absolute inset-0 mix-blend-multiply saturate-0 filter">
                            <img
                            src="images/museum.webp"
                            alt=""
                            className="h-full w-full object-cover"
                            />
                        </div>
                        <div className="absolute top-0 -right-72 sm:-right-full h-full w-full opacity-80 bg-black rounded-xl card-body p-8">
                            <h1 className="text-3xl text-white flex items-center">
                            Museums
                            </h1>
                            <blockquote className="mt-6 text-white">
                            <p className="text-md">              
                            Discover Timbuktu's vibrant past at our museums. From ancient artifacts to contemporary art, each exhibit offers a unique window into our city's rich heritage. Come explore and be inspired by the treasures of Timbuktu!
                            </p>
                            </blockquote>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="py-16 lg:py-8 cardi sm:w-1/3">
                    <div className="relative mx-auto max-w-md px-6 lg:px-8">
                        <div className="relative overflow-hidden rounded-xl h-96 py-24 px-8 shadow-2xl">
                        <div className="absolute inset-0 mix-blend-multiply saturate-0 filter">
                            <img
                            src="images/culture.webp"
                            alt=""
                            className="h-full w-full object-cover"
                            />
                        </div>
                        <div className="absolute top-0 -right-72 sm:-right-full h-full w-full opacity-80 bg-black rounded-xl card-body p-8">
                            <h1 className="text-3xl text-white flex items-center">
                            Culture
                            </h1>
                            <blockquote className="mt-6 text-white">
                            <p className="text-md">              
                                Immerse yourself in Timbuktu's vibrant culture! From traditional music to captivating art, every corner of our city is infused with rich heritage. Join us for a cultural journey in Timbuktu!
                            </p>
                            </blockquote>
                        </div>
                        </div>
                    </div>
                </div>  
                <div className="py-16 lg:py-8 cardi sm:w-1/3">
                    <div className="relative mx-auto max-w-md px-6 lg:px-8">
                        <div className="relative overflow-hidden rounded-xl h-96 py-24 px-8 shadow-2xl">
                        <div className="absolute inset-0 mix-blend-multiply saturate-0 filter">
                            <img
                            src="images/festival-pic-1.jpg"
                            alt=""
                            className="h-full w-full object-cover"
                            />
                        </div>
                        <div className="absolute top-0 -right-72 sm:-right-full h-full w-full opacity-80 bg-black rounded-xl card-body p-8">
                            <h1 className="text-3xl text-white flex items-center">
                            Festivals
                            </h1>
                            <blockquote className="mt-6 text-white">
                            <p className="text-md">              
                                Experience the vibrant spirit of Timbuktu's festivals, where lively music, colorful parades, and cultural showcases unite to create unforgettable celebrations. Join us and be part of the excitement, making lasting memories in Timbuktu!
                            </p>
                            </blockquote>
                            <a href="/events" className='btn bg-sky-600 hover:bg-sky-700 text-white'>Go Now</a>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section>
        <h1 className='mt-3 text-5xl text-center'>Savor Timbuktu's Culinary Delights</h1>
        <div className="bg-white">
            <div className="mx-auto max-w-7xl py-5 px-6 lg:px-8 lg:py-24">
                <div className="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
                <div className="space-y-5 sm:space-y-4">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Check Out The Restaurants</h2>
                    <p className="text-xl text-gray-500">
                    Enjoy the delicious taste of local food, with recipes that have been handed down for generations but now with a modern touch. Feel the friendly atmosphere in cozy restaurants, decorated with bright colors and a lively vibe.
                    </p>
                </div>
                <div className="lg:col-span-2">
                    <ul
                    role="list"
                    className="p-0 space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:gap-x-8"
                    >
                    {restaurants.map((restaurant) => (
                        <li className='list-none' key={restaurant.name}>
                        <div className="space-y-4">
                            <div className="aspect-video w-full">
                            <img className="rounded-lg object-cover w-80 max-h-96 shadow-lg" src={restaurant.imageUrl} alt="" />
                            </div>
                            <div className="space-y-1 text-lg font-medium leading-6">
                            <h3>{restaurant.name}</h3>
                            </div>
                            <div className="text-lg">
                            </div>

                            <ul role="list" className="flex space-x-5">
                            </ul>
                        </div>
                        </li>
                    ))}
                    </ul>
                </div>
                </div>
            </div>
        </div>
        </section>
        <section>
        <h1 className='mt-2 text-5xl text-center'>Experience Timbuktu's Vibrant Nightlife</h1>
        <div>
          <div className='flex flex-col gap-10 p-10 lg:flex-row lg:flex-wrap'>
            <div className=' basis-1/3 flex-1 rounded-lg shadow-lg '>
              <img className='fade rounded-lg object-cover w-full aspect-video' src="images/nightlife-1.webp" alt="" />
            </div>
            <div className=' basis-1/3 flex-1 rounded-lg shadow-lg '>
              <img className='fade rounded-lg object-cover w-full aspect-video' src="images/nightlife-2.webp" alt="" />
            </div>
            <div className=' basis-1/3 flex-1 rounded-lg shadow-lg '>
              <img className='fade rounded-lg object-cover w-full aspect-video' src="images/nightlife-4.webp" alt="" />
            </div>
            <div className=' basis-1/3 flex-1 rounded-lg shadow-lg'>
              <img className='fade rounded-lg object-cover w-full aspect-video' src="images/nightlife-1.jpeg" alt="" />
            </div>
          </div>
        </div>
        </section>
        <section>
            <h1 className='mt-2 text-5xl text-center animate__animated animate__fadeInLeftBig'>Uncover Timbuktu's Top Picks and Local Favorites</h1>
            <ul role="list" className="p-4 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8 py-8 list-none">
                {sites.map((site) => (
                <li key={site.image} className="relative">
                    <div className="group aspect-w-10 aspect-h-7 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                    <img src={site.image} alt="" className="pointer-events-none object-cover group-hover:opacity-75" />
                    </div>
                    <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900">{site.title}</p>
                    <p className="pointer-events-none block text-sm font-medium text-gray-500">{site.position}</p>
                </li>
                ))}
            </ul>
        </section>
    </div>
  )
}

export default Explore
