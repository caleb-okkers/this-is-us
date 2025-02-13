<template>
  <div class="home">
    <section class="title-section">
      <h1 class="title">This is us</h1>
      <div class="button-container">
        <button class="story">Our Story</button>
        <button  ><router-link class="moments" to="/moments">Our Moments</router-link></button>
      </div>
    </section>
    <section></section>
  </div>
</template>

<script>

export default {

}
</script>

<style scoped>

.home {
  background: url('https://raw.githubusercontent.com/caleb-okkers/this-is-us-api/master/images/IMG-20241109-WA0026%20-%20edit.jpg') no-repeat center center;
  background-size: 100% auto; /* Ensures the image covers the whole container */
  background-position: center; /* Keeps the image centered */
  background-attachment: fixed;
  width: 100vw; /* Full viewport width */
  height: 100vh; /* Full viewport height */
  margin: 0;
  font-size: 16px;
}

.title {
  font-family: "Tangerine", serif;
  color: var(--primary-light); 
  font-size: 12rem;
  text-align: center;
  padding-top: 10rem;
  font-weight:700;
  text-shadow:
    2px 2px 0px black,   /* Top-Left */
    -2px -2px 0px black, /* Bottom-Right */
    2px -2px 0px black,  /* Top-Right */
    -2px 2px 0px black;  /* Bottom-Left */
}

/* .title-section {
  position: fixed;
  top: 10rem;
  left: 50%;
  transform: translateX(-50%);
} */

.button-container {
  padding-top: 10rem;
  display: flex;
  justify-content: space-between; /* Space buttons apart */
  width: 80%; /* Makes sure buttons are spaced properly */
  /* max-width: 500px; */
  margin: 0 auto;
}

button,
button router-link {
  font-family: "Tangerine", serif;
  font-weight: bold;
  padding: 10px 20px;
  font-size: 1.2rem;
  border: none;
  border-radius: 1px;
  cursor: pointer;
  font-size: 2rem;
  text-decoration: none !important;
  border-bottom: 3px solid var(--primary-dark) !important;
}

.story,
.moments a {
  background-color: var(--primary-light);
  color: var(--primary-dark);
}

a {
  text-decoration: none;
  color: var(--primary-dark);
}
</style>
