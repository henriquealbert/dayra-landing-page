import React from 'react'

export default function Hero() {
  return (
    <section className="text-gray-700 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="https://dummyimage.com/720x600"
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Knausgaard typewriter readymade marfa
          </h1>
          <p className="mb-8 leading-relaxed">
            Chillwave portland ugh, knausgaard fam polaroid iPhone. Man braid
            swag typewriter affogato, hella selvage wolf narwhal dreamcatcher.
          </p>
          <div className="flex w-full md:justify-start justify-center">
            <input
              className="bg-gray-100 rounded mr-4 border border-gray-400 focus:outline-none focus:border-orange-500 text-base px-4 lg:w-full xl:w-1/2 w-2/4"
              placeholder="Placeholder"
              type="text"
            />
            <button className="inline-flex text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 rounded text-lg">
              Button
            </button>
          </div>
          <p className="text-sm mt-2 text-gray-500 mb-8 w-full">
            Neutra shabby chic ramps, viral fixie.
          </p>
        </div>
      </div>
    </section>
  )
}
