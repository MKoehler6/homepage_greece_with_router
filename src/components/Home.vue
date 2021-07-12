<template>
  <div class="hello">
    <div class="menu">
      <div class="menu-item menu-text">
        Griechenland
      </div>
      <div class="menu-item menu-text" onclick="window.location='Malediven';">
        Malediven
      </div>
      <div class="menu-item menu-text">
        Madeira
      </div>
      <div class="menu-item menu-text">
        Tibet
      </div>
      <div class="menu-item menu-text">
        Indien
      </div>
    </div>
    <div class="name">
      <div class="letter">
        <img src="../assets/G.png" height="250"/>
      </div>
      <div class="letter">
        <img src="../assets/R.png" height="250"/>
      </div>
      <div class="letter">
        <img src="../assets/E1.png" height="250"/>
      </div>
      <div class="letter">
        <img src="../assets/E2.png" height="250"/>
      </div>
      <div class="letter">
        <img src="../assets/C.png" height="250"/>
      </div>
      <div class="letter">
        <img src="../assets/E3.png" height="250"/>
      </div>
    </div>
  </div>
  <div class="imageshow">
    <!--
    <div>
      <img class="singleImage" :src="require(`../images/1.jpg`)">
    </div>
    <div>
      <img class="singleImage" :src="require(`../images/1.jpg`)">
    </div>
    <div>
      <img class="singleImage" :src="require(`../images/1.jpg`)">
    </div>
    -->
    <div v-for="(item, i) in 8" :key="item" onclick="window.location='eins';">
      <img class="singleImage" :src="require(`../images/${i+1}.jpg`)">
    </div>
  </div>
</template>

<script>


export default {
  data() {
    return {
      imagearray: ['../images/1.jpg',
                   '../assets/E3.png'],
      index: '../images/1.jpg'
    }
  },
  name: 'Home',
  props: {
    msg: String
  },
  components: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  text-decoration: none;
  text-decoration-color: none;
}

.name {
  display: flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  margin-top: 100px;
  margin-bottom: 100px;
}
.letter {
  margin: 10px;
  transform: scaleY(1.3);
  filter: drop-shadow(0px 0px 10px rgba(99, 159, 248, 0.863));
}
.menu {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.menu-item {
  flex: 1;
  /*border: 1px solid red;*/
  text-align: center;
}
.menu-text {
  font-size: 20px;
  color: #707070;
  padding: 10px;
  cursor: pointer;
  width: fit-content;
}
.menu-text:hover {
  border-bottom: 2px solid white;
  /*font-size: 36px;*/
  color: white;
  padding: 8px;
}
.imageshow {
  display:flex;
}
.singleImage {
  width: 90%;
}
</style>
