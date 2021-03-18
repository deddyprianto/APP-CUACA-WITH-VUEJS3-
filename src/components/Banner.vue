<template>
  <div class="container">
    <!-- image -->
    <div class="konta" v-if="$store.state.keadaanAwal">
      <div v-if="$store.state.keadaanAwal.weather[0].main === 'Clouds'">
        <img class="gambar__awan" src="../assets/cerah.jpg" alt="" />
      </div>
      <div v-else-if="$store.state.keadaanAwal.weather[0].main === 'Rain'">
        <img class="gambar__awan" src="../assets/Hujan.jpg" alt="" />
      </div>
      <div v-else-if="$store.state.keadaanAwal.weather[0].main === 'Drizzle'">
        <img class="gambar__awan" src="../assets/gerimis.jpg" alt="" />
      </div>
      <div
        v-else-if="
          $store.state.keadaanAwal.weather[0].description === 'awan mendung'
        "
      >
        <img class="gambar__awan" src="../assets/mendung.jpg" alt="" />
      </div>
      <div v-else>
        <img class="gambar__awan" src="../assets/Haze.jpg" alt="" />
      </div>
    </div>
    <!-- description -->

    <h1 id="text-status" :class="{ text__color: $store.state.keadaanAwal }">
      Cek Status Cuaca di KOTA mu
    </h1>
    <div class="input__container">
      <input
        type="text"
        v-model="dataInput"
        placeholder="Cek Cuaca Sebelum pergi"
      />
    </div>
    <div class="show" v-if="$store.state.loading">
      <p :class="{ text__color: $store.state.keadaanAwal }">Loading</p>
    </div>
    <div class="container__error" v-if="$store.state.error">
      <p :class="{ text__color: $store.state.keadaanAwal }">
        {{ $store.state.error }}
      </p>
    </div>
    <div class="container__button">
      <button @click="handleButton">Cek</button>
    </div>
    <div v-if="$store.state.keadaanAwal">
      <p :class="{ text__color: $store.state.keadaanAwal }">
        Nama Kota: {{ $store.state.keadaanAwal.name }}
      </p>
      <p :class="{ text__color: $store.state.keadaanAwal }">
        Cuaca: {{ $store.state.keadaanAwal.weather[0].description }}
      </p>
      <p :class="{ text__color: $store.state.keadaanAwal }">
        kelembaban: {{ $store.state.keadaanAwal.main.humidity }}
      </p>
      <p :class="{ text__color: $store.state.keadaanAwal }">
        Kecepatan Angin: {{ $store.state.keadaanAwal.wind.speed }}
      </p>
    </div>
  </div>
</template>

<script>
import { DATA_LOAD, DATA_SUCC, DATA_FAIL } from "../const/const";

export default {
  name: "Banner",
  data() {
    return {
      dataInput: "",
    };
  },
  methods: {
    handleButton() {
      this.$store.dispatch({
        type: "takeData",
        dataLoad: DATA_LOAD,
        dataSucc: DATA_SUCC,
        dataFail: DATA_FAIL,
        inputan: this.dataInput,
      });
    },
  },
};
</script>

<style>
.container {
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.text__color {
  color: white;
}
.gambar__awan {
  transition: 2s;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100vh;
}
.input__container {
  width: 70%;
  height: 50px;
  border-radius: 20px;
  background-color: #eee;
}
.input__container > input {
  width: 99%;
  background-color: #eee;
  height: 50px;
  border-radius: 20px;
  border: none;
  outline: none;
  text-align: center;
}
.input__container > input::placeholder {
  text-align: center;
  color: gray;
}
.container__button {
  margin-top: 40px;
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
}
.container__button > button {
  width: 70%;
  height: 30px;
  border: none;
  border-radius: 20px;
  background-color: coral;
  cursor: pointer;
  outline: none;
}
.container__error > p {
  margin-top: 20px;
}
@media (max-width: 576px) {
  .container h1 {
    margin-top: 30px;
    font-size: 23px;
    text-align: center;
  }
  .input__container {
    width: 93%;
  }
  .container p {
    font-size: 16px;
  }
  .input__container > input {
    width: 93%;
  }
}
</style>
