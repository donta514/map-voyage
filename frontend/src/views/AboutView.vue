const mapboxAccessToken = process.env.VUE_APP_MAPBOX_ACCESS_TOKEN;


<template>
    <div id="map" class="map" style="width: 100%; height: 400px"></div>
</template>

<script>
import mapboxgl from "mapbox-gl";

export default {
  name: "MapView",
  mounted() {
    mapboxgl.accessToken = "MY_MAPBOX_ACCESS_TOKEN";
    const map = new mapboxgl.Map({
      container: "map", // container ID
      style: "mapbox://styles/mapbox/streets-v11", // style URL
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: 9, // starting zoom
    });
  },
};
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
