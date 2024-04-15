
function Life() {
  return (
    <div>
    <h1 className='pt-24 md:text-4xl lg:text-5xl text-center font-bold'>Discover Life in Timbuktu: Where Culture, Community, and Opportunity Flourish</h1>
      <div className="relative bg-white py-0 sm:py-24">
        <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:items-start lg:gap-24 lg:px-8 lg:py-12">
            <div className="relative sm:py-8 lg:py-0">
                <div aria-hidden="true" className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen">
                    <div className="absolute inset-y-0 right-1/2 w-full rounded-r-3xl bg-gray-50 lg:right-72" />
                </div>
                <div className="relative mx-auto max-w-md px-6 sm:max-w-3xl lg:max-w-none lg:px-0 lg:py-16">
                    {/* Testimonial card*/}
                    <div className="relative overflow-hidden rounded-2xl pt-60 pb-10 shadow-2xl">
                    <img
                        className="absolute inset-0 h-full w-full object-cover"
                        src="images/female-president.png"
                        alt=""
                    />
                    <div className="absolute inset-0 bg-sky-800 mix-blend-multiply" />
                    <div className="absolute inset-0 bg-gradient-to-t from-sky-600 via-sky-700 opacity-90" />
                    <div className="relative px-8">
                        <blockquote className="mt-8">
                        <div className="relative text-lg font-medium text-white md:flex-grow">
                            <svg
                            className="absolute top-0 left-0 h-8 w-8 -translate-x-3 -translate-y-2 transform text-sky-800"
                            fill="currentColor"
                            viewBox="0 0 32 32"
                            aria-hidden="true"
                            >
                            <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                            </svg>
                            <p className="relative">"I'm pleased to confirm that our city is safe and secure. With effective security measures in place and a welcoming community spirit, residents and visitors can enjoy peace of mind while exploring all that Timbuktu has to offer."
                            </p>
                        </div>

                        <footer className="mt-4">
                            <p className="text-base font-semibold text-sky-200">Sarah Williams, President of Timbuktu</p>
                        </footer>
                        </blockquote>
                    </div>
                    </div>
                </div>
            </div>
            <div className="relative mx-auto max-w-md px-6 sm:max-w-3xl lg:px-0">
            {/* Content area */}
            <div className="pt-4 sm:pt-16 lg:pt-20">
                <h2 className="text-3xl font-bold tracking-tight  text-gray-900 sm:text-4xl">
                Thriving Trades and Timeless Crafts
                </h2>
                <h2 className="text-2xl mt-4 font-bold tracking-tight  text-gray-900 sm:text-xl">
                Work In Timbuktu
                </h2>
                <div className="mt-6 space-y-6 text-gray-500">
                <p className="text-base leading-7">
                    Experience the dynamic professional landscape of Timbuktu, where innovation meets opportunity. From traditional trades to emerging industries, our city offers a diverse range of employment prospects. Whether you're seeking entrepreneurial ventures, corporate careers, or artisanal craftsmanship, Timbuktu provides a nurturing environment for growth and success.
                </p>
                <h2 className="text-2xl font-bold tracking-tight  text-gray-900 sm:text-xl">
                Education In Timbuktu
                </h2>
                <p className="text-base  leading-7">
                    Ignite your curiosity and pursue your academic aspirations in Timbuktu's esteemed educational institutions. From primary schools to higher learning centers, our city prioritizes quality education and fosters a culture of lifelong learning. With a rich history of scholarship and a commitment to excellence, Timbuktu offers students a transformative educational experience.   
                </p>
                <h2 className="text-2xl font-bold tracking-tight  text-gray-900 sm:text-xl">
                    Healthcare In Timbuktu
                </h2>
                <p className="text-base  leading-7">
                    Prioritize your well-being and access top-notch healthcare services in Timbuktu's modern medical facilities. With a focus on preventive care, specialized treatments, and compassionate patient care, our city's healthcare system ensures the health and vitality of residents and visitors alike. From routine check-ups to emergency services, Timbuktu provides comprehensive healthcare solutions to meet your needs.
                </p>
                </div>
            </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Life
