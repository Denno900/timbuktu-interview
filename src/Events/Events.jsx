import React from 'react'
import { FaStar } from "react-icons/fa";
import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'


const options = [
    {
        id: 1,
        name: 'Popularity High to Low',
    },
    {
        id: 2,
        name: 'Popularity Low to High',
    },
    {
        id: 4,
        name: 'Clear Filters',
    },
  ]
const defaultFestivals = [
    {
        title: 'Coachella',
        date: '17/2/2024',
        image: 'images/coachella.webp',
        rating: 3.7
    },
    {
        title: 'Jazz Fest',
        date: '3/4/2024',
        image: 'images/jazz-fest.webp',
        rating: 4.6
    },
    {
        title: 'Kids Festival',
        date: '23/7/2024',
        image: 'images/Kids-Fest.webp',
        rating: 3.9
    },
    {
        title: 'Color Festival',
        date: '12/9/2024',
        image: 'images/color-fest.webp',
        rating: 4.7
    },
    {
        title: 'Reggae Campout',
        date: '5/3/2024',
        image: 'images/reggae.webp',
        rating: 4.0
    },
    {
        title: 'Wonderfront',
        date: '16/12/2024',
        image: 'images/waterfront.webp',
        rating: 3.6
    },
    {
        title: 'Bluegrass',
        date: '7/6/2024',
        image: 'images/bluegrass.webp',
        rating: 3.8
    },
    {
        title: 'Music Festival',
        date: '8/5/2024',
        image: 'images/music-fest.png',
        rating: 4.6
    },
    {
        title: 'Independence Day',
        date: '18/2/2024',
        image: 'images/independence-day.webp',
        rating: 4.1
    },
    {
        title: 'Tree Planting Day',
        date: '9/11/2024',
        image: 'images/tree-planting.webp',
        rating: 4.2
    },
    {
        title: 'Health Day',
        date: '8/5/2024',
        image: 'images/World-Health-Day.webp',
        rating: 4.6
    },
    {
        title: 'Car Fest',
        date: '12/2/2024',
        image: 'images/carfest-south.webp',
        rating: 4.2
    },
]
  
function Events() {
const [selected, setSelected] = useState(options[2])
const [festivals, setFestivals] = useState([
    {
        title: 'Coachella',
        date: '17/2/2024',
        image: 'images/coachella.webp',
        rating: 3.7
    },
    {
        title: 'Jazz Fest',
        date: '3/4/2024',
        image: 'images/jazz-fest.webp',
        rating: 4.6
    },
    {
        title: 'Kids Festival',
        date: '23/7/2024',
        image: 'images/Kids-Fest.webp',
        rating: 3.9
    },
    {
        title: 'Color Festival',
        date: '12/9/2024',
        image: 'images/color-fest.webp',
        rating: 4.7
    },
    {
        title: 'Reggae Campout',
        date: '5/3/2024',
        image: 'images/reggae.webp',
        rating: 4.0
    },
    {
        title: 'Wonderfront',
        date: '16/12/2024',
        image: 'images/waterfront.webp',
        rating: 3.6
    },
    {
        title: 'Bluegrass',
        date: '7/6/2024',
        image: 'images/bluegrass.webp',
        rating: 3.8
    },
    {
        title: 'Music Festival',
        date: '8/5/2024',
        image: 'images/music-fest.png',
        rating: 3.8
    },
    {
        title: 'Independence Day',
        date: '18/2/2024',
        image: 'images/independence-day.webp',
        rating: 4.1
    },
    {
        title: 'Tree Planting Day',
        date: '9/11/2024',
        image: 'images/tree-planting.webp',
        rating: 4.2
    },
    {
        title: 'Health Day',
        date: '8/5/2024',
        image: 'images/World-Health-Day.webp',
        rating: 4.6
    },
    {
        title: 'Car Fest',
        date: '12/2/2024',
        image: 'images/carfest-south.webp',
        rating: 4.2
    },

])
const [query, setQuery] = useState("")

const filteredFestivals = festivals.filter(item => {
   return item.title.toLowerCase().includes(query.toLowerCase())
})

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function sorting(option) {
    if (option.name == 'Popularity High to Low') {
        setFestivals(festivals.sort((a, b) => b.rating - a.rating))
    } else if (option.name == 'Popularity Low to High') {
        setFestivals(festivals.sort((a, b) => a.rating - b.rating))
    } else if (option.name == 'Clear Filters') {
        setFestivals(defaultFestivals)
    }
}


      

  return (
    <div>
      <div className="bg-white">
        <div className="mx-auto max-w-7xl py-20 px-6 lg:pt-20 lg:pb-8 lg:px-8">
            <div className="rounded-2xl bg-sky-700 py-4 px-6 sm:py-16 sm:px-12 lg:flex lg:items-center lg:p-20 animate__animated animate__fadeInDown">
            <div className="lg:w-0 lg:flex-1">
                <h2 className="text-3xl m-0 p-0 font-bold tracking-tight text-white">Want to know the Next Event?</h2>
            </div>
            <div className="mt-12 sm:w-full sm:max-w-md lg:mt-0 lg:ml-8 lg:flex-1">
                <form className="sm:flex">
                <label htmlFor="Search" className="sr-only">
                    Search
                </label>
                <input
                    id="Search"
                    name="Search"
                    type="search"
                    required
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                    className="w-full rounded-lg border-white mb-1 px-2 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-sky-700"
                    placeholder="Search Here"
                />
                </form>
            </div>
            </div>
        </div>
      </div>
      <section className='lg:px-4'>
        <div className='md:flex justify-between items-center'>
            <h1 className='mt-2 pl-4 text-4xl'>Upcoming Events</h1>
            <Listbox value={selected} onChange={setSelected}>
                {({ open }) => (
                    <>
                        <div className="relative mx-4 md:pr-5">
                        <Listbox.Label className="block text-sm font-medium leading-6 text-gray-900">Sort by</Listbox.Label>
                            <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-500 sm:text-sm sm:leading-6">
                            <span className="flex items-center">
                                <span className="ml-3 block truncate">{selected.name}</span>
                            </span>
                            <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                                <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                            </span>
                            </Listbox.Button>

                            <Transition
                            show={open}
                            as={Fragment}
                            leave="transition ease-in duration-100"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                            >
                            <Listbox.Options className="absolute list-none px-0 z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                {options.map((option) => (
                                <Listbox.Option
                                    key={option.id}
                                    className={({ active }) =>
                                    classNames(
                                        active ? 'bg-sky-600 text-white' : 'text-gray-900',
                                        'relative cursor-default select-none py-2 pl-3 pr-9'
                                    )
                                    }
                                    value={option}
                                >
                                    {({ selected, active }) => (
                                    <>
                                        <div className="flex items-center">
                                        <span
                                            className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
                                            onClick={() => sorting(option)}
                                        >
                                            {option.name}
                                        </span>
                                        </div>

                                        {selected ? (
                                        <span
                                            className={classNames(
                                            active ? 'text-white' : 'text-sky-600',
                                            'absolute inset-y-0 right-0 flex items-center pr-4'
                                            )}
                                        >
                                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                        </span>
                                        ) : null}
                                    </>
                                    )}
                                </Listbox.Option>
                                ))}
                            </Listbox.Options>
                            </Transition>
                        </div>
                    </>
                )}
            </Listbox>
        </div>
        <ul role="list" className="p-4 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8 py-8 list-none">
                {filteredFestivals.map((festival) => (
                <li key={festival.image} className="relative">
                    <div className="group aspect-w-10 aspect-h-7 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-sky-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                    <img src={festival.image} alt="" className="pointer-events-none object-cover group-hover:opacity-75" />
                    </div>
                    <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900">{festival.title}</p>
                    <div className='flex justify-between items-center'>
                        <p className="md:m-0 pointer-events-none block text-sm font-medium text-gray-500">{festival.date}</p>
                        <p className="md:m-0 flex items-center pointer-events-none text-sm font-medium text-gray-500">{festival.rating}<FaStar className='ml-1'/></p>                    
                    </div>
                </li>
                ))}
        </ul>
      </section>
    </div>
  )
}

export default Events
