// ============================================================
//  config.js  -  THE ONLY FILE YOU NEED TO EDIT
// ============================================================
const CONFIG = {
  BUS_ID: "bus1",            // unique id of this bus (use bus2, bus3... later)
  STALE_SECONDS: 60,         // no update for this long = "outdated"
  AVG_SPEED_KMH: 20,         // assumed average bus speed (for ETA)
  ROAD_FACTOR: 1.3,          // roads are longer than straight lines
  SEND_EVERY_MS: 5000,       // driver sends location every 5 seconds
  SHOW_COORDINATE_HELPER: true, // tap the map to see lat/lng (use it to fix your stops)

  // Paste your Firebase settings here (Firebase Console > Project settings > Your apps)
  firebase: {
    apiKey: "AIzaSyDu0Lk1VJPAM3QDrs_-2ay8k58rHzZJxGw",
    authDomain: "gehu-bus-tracker-26e50.firebaseapp.com",
    databaseURL: "https://gehu-bus-tracker-26e50-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "gehu-bus-tracker-26e50",
    appId: "1:984200166515:web:8c5854b3554aff52bc3e06"
  },

  // Bus stops IN ORDER of travel. Campus coordinates come from public map data.
  // The OTHER stops are APPROXIMATE, check them and replace with your real bus route.
  STOPS: [
    { name: "GEHU Campus (Clement Town)", lat: 30.2675, lng: 77.9959 },
    { name: "ISBT Dehradun (approx.)",    lat: 30.2890, lng: 77.9990 },
    { name: "Railway Station (approx.)",  lat: 30.3165, lng: 78.0322 },
    { name: "Clock Tower (approx.)",      lat: 30.3243, lng: 78.0420 }
  ]
};

// Straight-line (haversine) distance between two points, in km
function distKm(a, b) {
  const R = 6371, r = Math.PI / 180;
  const dLat = (b.lat - a.lat) * r, dLng = (b.lng - a.lng) * r;
  const x = Math.sin(dLat / 2) ** 2 +
            Math.cos(a.lat * r) * Math.cos(b.lat * r) * Math.sin(dLng / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(x));
}
