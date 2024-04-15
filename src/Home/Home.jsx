import React from 'react'
import { Carousel, Image } from 'react-bootstrap'
import 'animate.css'
import './Home.css'

function Home() {
  return (
    <div>
        <Carousel>
            <Carousel.Item interval={5000}>
                <div className="bg-black w-full h-full absolute opacity-60"></div>
                <Image className='slider-image' src='images/amalfi-1.jpg' text="First slide" />
                <Carousel.Caption className='bottom-1/3 md:bottom-1/3  w-full left-0'>
                <div>
                    <h3 className='animate__animated animate__tada text-6xl md:text-8xl'>Welcome to Timbuktu!</h3>
                </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={5000}>
            <div className="bg-black w-full h-full absolute opacity-60"></div>
                <Image className='slider-image aspect-video' src='images/amalfi-2.jpg' text="First slide" />
                <Carousel.Caption className='bottom-1/3 sm:bottom-1/3 w-full left-0'>
                <h3 className='md:text-8xl text-6xl'>Beautiful City</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={5000}> 
            <div className="bg-black w-full h-full absolute opacity-60"></div>
                <Image className='slider-image' src='images/amalfi-3.jpg' text="First slide" />
                <Carousel.Caption className='bottom-1/3 md:bottom-1/3 w-full left-0 '>
                <h3 className='md:text-8xl text-6xl'>Awesome Adventure</h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        <section>
        <div className="relative overflow-hidden bg-white">
          <div className="pt-12 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-24">
            <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
              <div className="sm:max-w-lg">
                <h1 className="font text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Discover the Timeless Beauty of Timbuktu City with The Luxe Group
                </h1>
                <p className="mt-4 text-xl text-gray-500">
                    Experience Timbuktu's ancient charm and modern amenities. Explore historic alleyways, vibrant markets, and top-notch healthcare. Timbuktu is more than a destination—it's a lively community of warmth, culture, and opportunity. Embrace the magic of every moment in Timbuktu.
                </p>
                <a href="/explore" className='btn hover:bg-sky-700 hover:text-white bg-sky-600 text-white'>Explore Timbuktu</a>
              </div>
              <div>
                <div className="mt-10">
                  {/* Decorative image grid */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                  >
                    <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-4 lg:-translate-y-1/2 lg:translate-x-8">
                      <div className="flex items-center space-x-6 lg:space-x-8">
                        <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                          <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                            <img
                              src="./images/grid-photo-1.webp"
                              alt=""
                              className="h-full w-full object-cover object-center"
                            />
                          </div>
                          <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <img
                              src="./images/grid-photo-2.webp"
                              alt=""
                              className="h-full w-full object-cover object-center"
                            />
                          </div>
                        </div>
                        <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                          <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <img
                              src="./images/grid-photo-3.webp"
                              alt=""
                              className="h-full w-full object-cover object-center"
                            />
                          </div>
                          <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <img
                              src="./images/grid-photo-4.webp"
                              alt=""
                              className="h-full w-full object-cover object-center"
                            />
                          </div>
                          <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <img
                              src="./images/grid-photo-5.webp"
                              alt=""
                              className="h-full w-full object-cover object-center"
                            />
                          </div>
                        </div>
                        <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                          <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <img
                              src="./images/grid-photo-6.webp"
                              alt=""
                              className="h-full w-full object-cover object-center"
                            />
                          </div>
                          <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <img
                              src="./images/grid-photo-7.webp"
                              alt=""
                              className="h-full w-full object-cover object-center"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </section>
    </div>
  )
}

export default Home
