import React from 'react'

export default function SearchMap() {
  console.log("inside search-map components")
  return (
    <div className="container mx-auto p-8">
      {/* Google Map Frame */}
      <div className="mb-6 h-96 border rounded-lg overflow-hidden">
        {/* You can use an actual Google Map iframe here */}
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.678910111213!2d-122.084!3d37.421999999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809a805d227b%3A0x70e4bce88b7bf2e7!2sGoogleplex!5e0!3m2!1sen!2sus!4v1613544121552!5m2!1sen!2sus"
          width="100%"
          height="100%"
          frameBorder="0"
          style={{ border: '0' }}
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
        ></iframe>
      </div>

      {/* Input Layout for Start and Destination */}
      <div className="flex justify-between mb-6">
        <div className="w-1/2 pr-2">
          <label htmlFor="start" className="block text-sm font-medium text-gray-700">
            Start Point
          </label>
          <input
            type="text"
            id="start"
            name="start"
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <div className="w-1/2 pl-2">
          <label htmlFor="destination" className="block text-sm font-medium text-gray-700">
            Destination
          </label>
          <input
            type="text"
            id="destination"
            name="destination"
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
      </div>

      {/* Container of Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Card 1</h2>
          <p className="text-gray-600">Some text for card 1.</p>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Card 2</h2>
          <p className="text-gray-600">Some text for card 2.</p>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Card 3</h2>
          <p className="text-gray-600">Some text for card 3.</p>
        </div>
      </div>
    </div>
  )
}
