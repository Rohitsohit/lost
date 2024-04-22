import React, { useState, useEffect } from 'react';

const GoogleMapComponent = () => {
  const [startPoint, setStartPoint] = useState('');
  const [endPoint, setEndPoint] = useState('');
  const [map, setMap] = useState(null);
  const [directionsService, setDirectionsService] = useState(null);
  const [directionsRenderer, setDirectionsRenderer] = useState(null);
  const [sampleData, setSampleData] = useState([
     
    { id: 1, lat: 43.700734, lng: -79.68938181739026, name: 'San Francisco' },
    { id: 2, lat: 43.66561184715716, lng: -79.55484427506336, name: 'Los Angeles' },
    { id: 3, lat: 40.7128, lng: -74.0060, name: 'New York City' },
    , 
    { id: 4, lat: 43.64465302007994, lng: -79.3806269500272, name: 'New York City' },
    // Add more sample data here...
    ]);

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

    const filteredData = sampleData.filter((place) => {
      const latLng = new google.maps.LatLng(place.lat, place.lng);
      return route.some((pathLatLng) => {
        bounds.extend(pathLatLng);
        return bounds.contains(latLng);
      });
    });

    console.log(filteredData);
  };

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
        Calculate Route
      </button>

      {/* Container of Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {sampleData.map((place) => (
          <div key={place.id} className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">{place.name}</h2>
            <p className="text-gray-600">Latitude: {place.lat}, Longitude: {place.lng}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GoogleMapComponent;
