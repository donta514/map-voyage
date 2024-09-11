<template>
  <div class="landing-page">
    <nav>
      <h1>Welcome to Map Voyage</h1>
      <div>
        <router-link to="/signup" class="button-primary">Sign Up</router-link>
        <router-link to="/login" class="button-secondary">Login</router-link>
      </div>
    </nav>
    <section class="content">
      <h2>Why Use Map Voyage?</h2>
      <p>
        Plan your perfect road trip by adding and rearranging destinations, and
        discovering points of interest along the way!
      </p>
      <!-- More benefits of the app -->
    </section>
  </div>
</template>

<script>
export default {
  name: "LandingPage",
};
</script>

<style scoped>
/* Add styling for the landing page */
.landing-page {
  text-align: center;
  padding: 20px;
}
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.content {
  margin-top: 50px;
}
</style>
