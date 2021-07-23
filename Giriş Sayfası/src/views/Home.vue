<template>
  <div class="container">
    <div class="loading" v-if="isLoad">
      <div class="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </div>

    <div class="row">
      <h4>Kullanıcı İşlemleri</h4>
    </div>

    <div class="formgroup">
      <label for="email"></label>
      <input
        type="text"
        id="username"
        class="id"
        placeholder="KullanıcıAdı"
        v-model="username"
      />
    </div>

    <div class="formgroup">
      <label for="password"></label>
      <input
        type="password"
        class="password"
        placeholder="Şifre"
        v-model="password"
      />
    </div>
    <button class="btn-primary" @click="kontrol()">Giriş</button>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState } from "vuex";

export default {
  computed: mapState({
    isLoad(state) {
      return state.isLoading;
    },
  }),

  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    kontrol() {
      this.$store.dispatch("login", {
        username: this.username,
        password: this.password,
      });
    },
  },
};
</script>
<style>
body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  background: rgb(0, 0, 0);
}
.container {
  width: 300px;
  padding: 40px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: black;
  text-align: center;
}
.container h4 {
  color: white;
  text-transform: uppercase;
  font-weight: 500;
}
.container input[type="text"],
.container input[type="password"] {
  border: 0;
  background: none;
  display: block;
  margin: 20px auto;
  text-align: center;
  border: 2px solid orange;
  padding: 14px 10px;
  width: 200px;
  outline: none;
  color: white;
  border-radius: 34px;
  transition: 0.25s;
}
.container input[type="text"]:focus,
.container input[type="password"]:focus {
  width: 280px;
  border-color: green;
}
.container button[class="btn-primary"] {
  border: 0;
  background: none;
  display: block;
  margin: 20px auto;
  text-align: center;
  border: 2px solid green;
  padding: 14px 40px;
  outline: none;
  color: white;
  border-radius: 34px;
  transition: 0.25s;
  cursor: pointer;
}
.container button[class="btn-primary"]:hover {
  background: green;
}
.loading {
  background-color: rgba(0, 0, 0, 0.6);
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 70%;
  z-index: 999999;
}
.lds-ripple {
  display: inline-block;
  position: relative;
  width: 64px;
  height: 64px;
  top: calc(100% / 2);
  left: calc(100% / 2);
}
.lds-ripple div {
  position: absolute;
  border: 4px solid #fff;
  opacity: 1;
  border-radius: 50%;
  animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}
.lds-ripple div:nth-child(2) {
  animation-delay: -0.5s;
}
@keyframes lds-ripple {
  0% {
    top: 28px;
    left: 28px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: -1px;
    left: -1px;
    width: 58px;
    height: 58px;
    opacity: 0;
  }
}
</style>
