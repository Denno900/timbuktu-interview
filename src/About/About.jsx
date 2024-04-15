const goals = [
    {
      title: 'Our Mission',
      description: 
      'To showcase the beauty, culture, and opportunities of Timbuktu city through an immersive online platform, inspiring visitors to explore, connect, and engage with the vibrant community and rich heritage.',
    },
    {
      title: 'Our Vision',
      description:
        'Our vision is to create an immersive online platform that showcases Timbuktu\'s beauty, culture, and opportunities, inspiring visitors to explore, connect, and engage with the vibrant community and rich heritage.'
    },
    {
      title: 'Our Values',
      description: 'At The Luxe Group, we prioritize excellence, innovation, collaboration, integrity, and sustainability. These values shape our commitment to delivering top-quality services and making a positive impact in all our endeavors.'
    },
]
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  

export default function About() {
    return (
        <div>
            <div className="relative bg-sky-950">
            <div className="relative h-80 overflow-hidden bg-sky-700 md:absolute md:left-0 md:h-full md:w-1/3 lg:w-1/2">
                <img
                className="h-full w-full object-cover"
                src="images/luxegrp.webp"
                alt=""
                />
            </div>
            <div className="relative mx-auto max-w-7xl py-24 sm:py-32 lg:py-40 lg:px-8">
                <div className="pr-6 pl-6 md:ml-auto md:w-2/3 md:pl-16 lg:w-1/2 lg:pl-24 lg:pr-0 xl:pl-32 animate__animated animate__backInRight">
                <p className= "mt-2 text-4xl font-bold tracking-tight text-white">Meet the Luxe Group</p>
                <p className="mt-6 text-base leading-7 text-gray-300">
                    Meet The Luxe Group, the team making Timbuktu even better. We're here to create an amazing experience in the city. By working with others and putting our hearts into it, we're making Timbuktu more special. Join us as we make Timbuktu the best it can be!
                </p>
                <div className="mt-8">
                    <a
                    href="#"
                    className="no-underline inline-flex rounded-md bg-white/10 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    >
                    Learn More
                    </a>
                </div>
                </div>
            </div>
            </div>
            <div className="bg-white px-6 pt-8 pb-0 lg:px-8 lg:pt-24 lg:pb-28">
                <div className="relative mx-auto max-w-lg divide-y-2 divide-gray-200 lg:max-w-7xl">
                <div>
                    <h2 className="text-3xl text-center font-bold tracking-tight text-gray-900 sm:text-4xl">Our Mission, Vision and Values</h2>
                </div>
                <div className="mt-0 grid gap-16 pt-4 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
                    {goals.map((goal) => (
                    <div key={goal.title}>
                        <h3 href={goal.href} className="mt-4 block">
                        <p className="text-xl font-semibold text-gray-900">{goal.title}</p>
                        <p className="mt-3 text-base text-gray-500">{goal.description}</p>
                        </h3>
                    </div>
                    ))}
                </div>
                </div>
            </div>
            <div className="bg-white">
                <div className="mx-auto max-w-7xl py-16 px-6 sm:py-20 lg:px-8">
                    <h2 className="text-3xl text-center font-bold tracking-tight">
                    Trusted Shareholders and Partners
                    </h2>
                    <div className="mt-8 flow-root lg:mt-10">
                    <div className="-mt-4 -ml-8 flex flex-wrap justify-between lg:-ml-4">
                        <div className="mt-4 ml-8 flex flex-shrink-0 flex-grow lg:ml-4 lg:flex-grow-0">
                        <img className="h-12" src="https://tailwindui.com/img/logos/tuple-logo-indigo-300.svg" alt="Tuple" />
                        </div>
                        <div className="mt-4 ml-8 flex flex-shrink-0 flex-grow lg:ml-4 lg:flex-grow-0">
                        <img className="h-12" src="https://tailwindui.com/img/logos/mirage-logo-indigo-300.svg" alt="Mirage" />
                        </div>
                        <div className="mt-4 ml-8 flex flex-shrink-0 flex-grow lg:ml-4 lg:flex-grow-0">
                        <img
                            className="h-12"
                            src="https://tailwindui.com/img/logos/statickit-logo-indigo-300.svg"
                            alt="StaticKit"
                        />
                        </div>
                        <div className="mt-4 ml-8 flex flex-shrink-0 flex-grow lg:ml-4 lg:flex-grow-0">
                        <img
                            className="h-12"
                            src="https://tailwindui.com/img/logos/transistor-logo-indigo-300.svg"
                            alt="Transistor"
                        />
                        </div>
                        <div className="mt-4 ml-8 flex flex-shrink-0 flex-grow lg:ml-4 lg:flex-grow-0">
                        <img
                            className="h-12"
                            src="https://tailwindui.com/img/logos/workcation-logo-indigo-300.svg"
                            alt="Workcation"
                        />
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
      
    )
  }