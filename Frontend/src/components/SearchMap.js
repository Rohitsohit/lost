import React, { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { format } from "timeago.js";

const GoogleMapComponent = () => {
  const [startPoint, setStartPoint] = useState('');
  const [endPoint, setEndPoint] = useState('');
  const [map, setMap] = useState(null);
  const [directionsService, setDirectionsService] = useState(null);
  const [directionsRenderer, setDirectionsRenderer] = useState(null);
  const [items, setItems] = useState();
  const history = useNavigate();

    const data = useSelector((state) => state.items);
    
  useEffect(() => {
    const google = window.google;
    const map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: 37.7749, lng: -122.4194 },
      zoom: 8,
    });

    const directionsService = new google.maps.DirectionsService();
    const directionsRenderer = new google.maps.DirectionsRenderer();
    directionsRenderer.setMap(map);

    setMap(map);
    setDirectionsService(directionsService);
    setDirectionsRenderer(directionsRenderer);
  }, []);

  const handleCalculateRoute = () => {
    const google = window.google;
    directionsService.route(
      {
        origin: startPoint,
        destination: endPoint,
        travelMode: google.maps.TravelMode.DRIVING,
      },
      (result, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          directionsRenderer.setDirections(result);
          const route = result.routes[0].overview_path.map((point) => ({
            lat: point.lat(),
            lng: point.lng(),
          }));
          filterNearbyPlaces(route);
        } else {
          console.error(`Error fetching directions: ${status}`);
        }
      }
    );
  };

  const filterNearbyPlaces = (route) => {
    
    const google = window.google;
    const bounds = new google.maps.LatLngBounds();

    const filteredData = data.filter((place) => {
      console.log(place)
      const latLng = new google.maps.LatLng(place.location.latitude, place.location.longitude);
      return route.some((pathLatLng) => {
        bounds.extend(pathLatLng);
        return bounds.contains(latLng);
      });
    });

    console.log(filteredData);
    setItems(filteredData);
    
  };

  const handleClick = (item) => {
    history(`/details/${item._id}`);
}


  return (
    <div className="container mx-auto p-8">
      {/* Google Map Frame */}
      <div id="map" className="mb-6 h-96 border rounded-lg"></div>

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
            value={startPoint}
            onChange={(e) => setStartPoint(e.target.value)}
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
            value={endPoint}
            onChange={(e) => setEndPoint(e.target.value)}
          />
        </div>
      </div>

      {/* Calculate Route Button */}
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={handleCalculateRoute}
      >
        Items on this Route.
      </button>

      {/* Container of Cards */}
      <div >
     { !items ? (
       <>
       </>
    ) : (
        <>
            <section id="Projects" className="w-full mx-3 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-y-10 gap-x-2 mt-10 mb-5">
            {items.map((item) => (
    <div key={item._id} className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl cursor-pointer" onClick={() => handleClick(item)}>
        <a>
            <img 
                src={item.images[0]}
                alt="Product"
                className="h-80 w-72 object-cover rounded-t-xl"
            />
            <div className="px-4 py-3 w-72">
                <span className="text-gray-400 mr-3 uppercase text-xs">{item.category}</span>
                <p className="text-lg font-bold text-black truncate block capitalize">{item.details}</p>
                <div className="flex items-center">
                    {/* <p className="text-sm text-gray-600 cursor-auto ml-2">{`${item.location.latitude}, ${item.location.longitude}`}</p> */}
                    <div className="ml-auto">
                        {/* Date placeholder */}
                        {format(item.createdAt)}
                    </div>
                </div>
            </div>
        </a>
    </div>
))}
            </section>
        </>
    )}
      </div>
    </div>
  );
};

export default GoogleMapComponent;
