/* eslint-disable */

export const displayMap = (locations) => {
  mapboxgl.accessToken =
    'pk.eyJ1IjoieDFjb2RpYXMiLCJhIjoiY2w0NGJzamd0MDFpbjNrbW1rcXA0a2dqZCJ9.3MALRlmRjojBWRJcdFVBnw';

  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/x1codias/cl44c72v0000f16o7gnjlvlno',
    scrollZoom: false,
    //center: [-118.113491, 34.111745],
    //zoom: 4,
  });

  const bounds = new mapboxgl.LngLatBounds();

  locations.forEachs((loc) => {
    // Create marker
    const el = document.createElement('div');
    el.className = 'marker';

    // Add marker
    new mapboxgl.Marker({
      element: el,
      anchor: 'bottom',
    })
      .setLngLat(loc.coordinates)
      .addTo(map);

    // Add popup
    new mapboxgl.Popup({
      offset: 30,
    })
      .setLngLat(loc.coordinates)
      .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
      .addTo(map);

    // Extend map bounds to include current location
    bounds.extend(loc.coordinates);
  });

  map.fitBounds(bounds, {
    padding: {
      top: 200,
      bottom: 150,
      left: 100,
      right: 100,
    },
  });
};
