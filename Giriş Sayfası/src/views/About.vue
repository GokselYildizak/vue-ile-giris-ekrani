<template>
  <div class="about">
    <div class="top">
      <p v-if="loginControl">{{ isIdleControl }}</p>

      <ul class="nav nav-pills"></ul>
      <a class="username" v-if="loginControl"> {{ kAdi }}</a>
      <a href="/about" class="action" v-if="loginControl"> Çıkış </a>
      <a href="/login" class="action" v-if="(loginControl = !loginControl)">
        Giriş
      </a>
    </div>
    <div class="center">
      <h2 v-if="loginControl">Hoşgeldiniz,{{ kAdi }}</h2>
      <h2 v-if="(loginControl = !loginControl)">Anasayfa</h2>
    </div>
    <button class="actionButton" @click="yonlendirBtn" v-if="loginControl">
      Çıkış...
    </button>
    <button
      class="actionButton"
      @click="yonlendirBtn"
      v-if="(loginControl = !loginControl)"
    >
      Giriş...
    </button>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: mapState({
    loginControl(state) {
      return state.loginSuccess;
    },
    kAdi(state) {
      return state.username;
    },
    isIdle() {
      return this.$store.state.idleVue.isIdle;
    },
    isIdleControl() {
      if (this.isIdle == true) {
        this.$router.push("/login");
      }
    },
  }),

  methods: {
    yonlendirBtn() {
      this.$router.push("/login");
    },
  },
};
</script>

<style >
.about {
  background-color: white;
  border-radius: 10px;
  width: 600px;
  height: 400px;
  position: absolute;
  text-align: center;
  top: 30%;
  left: 30%;
  border: solid palegreen;
}

.top {
  border: dashed red;
  border-radius: 10px;
  height: 40px;
  text-align: end;
}

.username {
  padding-right: 10px;
  text-decoration: none;
}

.action {
  text-decoration: none;
  margin-right: 10px;
  letter-spacing: 1px;
  font-family: "Times New Roman", Times, serif;
}

.center {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  font-family: "Times New Roman", Times, serif;
}

.actionButton {
  text-align: center;
  padding: 15px 30px;
  border-radius: 10px;
  font-family: "Times New Roman", Times, serif;
  font-size: 16px;
  transition: 0.25s;
  border: 2px solid green;
}

.actionButton:hover {
  background: green;
}
</style>
