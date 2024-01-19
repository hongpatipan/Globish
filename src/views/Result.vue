<template>
  <div class="card-container">
    <div class="card">
      <h1>ผลลัพธ์ของคุณคือ</h1>
      <div
        v-show="
          selectedChoiceFromEx6 &&
          selectedChoiceFromEx6 >= 131 &&
          selectedChoiceFromEx6 <= 180
        "
        class="r1"
      >
        <img class="custom-image" alt="r1" src="../assets/common/r1.svg" />
      </div>
      <div
        class="r2"
        v-show="
          selectedChoiceFromEx6 &&
          selectedChoiceFromEx6 >= 91 &&
          selectedChoiceFromEx6 <= 130
        "
      >
        <img class="custom-image" alt="r2" src="../assets/common/r2.svg" />
      </div>
      <div
        class="r3"
        v-show="
          selectedChoiceFromEx6 &&
          selectedChoiceFromEx6 >= 60 &&
          selectedChoiceFromEx6 <= 90
        "
      >
        <img class="custom-image" alt="r3" src="../assets/common/r3.svg" />
      </div>
      <div class="contentText">
        <p>คุณรู้จัก Globish ผ่าน</p>
      </div>
      <div class="contentTextValue">
        <p>
          {{ userInput }}
        </p>
      </div>
    </div>
    <div class="btn-footer">
      <router-link to="/"
        ><button class="btn2" type="submit">เริ่มใหม่</button></router-link
      >
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "HelloWorld",
  setup() {
    const store = useStore();
    const selectedChoiceFromEx6 = ref<number | null>(null);
    const setUserInput = ref("");
    const userInput = computed(() => store.getters.getUserInput);
    // console.log("userInput", userInput.value);

    if (store.getters.getUserInput && store.getters.getSelectedChoice6) {
      setUserInput.value = store.getters.getUserInput;
      selectedChoiceFromEx6.value = store.getters.getSelectedChoice6;
    }

    console.log("rrrrr", selectedChoiceFromEx6.value);

    return {
      userInput,
      selectedChoiceFromEx6,
    };
  },
  computed: {
    limitedUserInput() {
      const lines = this.userInput.split("\n");
      const limitedLines = lines.slice(0, this.maxWords);
      return limitedLines.join("\n");
    },
  },
  data() {
    return {
      maxWords: 12,
    };
  },
  props: {
    msg: String,
  },
});
</script>

<style lang="scss" scoped>
.card-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.r1 {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.r2 {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.r3 {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.custom-image {
  width: 300px;
  height: auto;
}

h1 {
  color: #333;
  text-align: center;
  font-family: "IBM Plex Sans Thai";
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
h2 {
  color: #000;
  font-family: IBM Plex Sans Thai;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  padding: 0px 10px;
  margin-top: -10px;
}

.contentText {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  p {
    color: #333;
    text-align: center;
    font-family: "IBM Plex Sans Thai";
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
}

.contentTextValue {
  justify-content: space-between;
  width: 100%;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  text-align: center;
  margin-top: -30px;
  /* white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis; */
  p {
    /* white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis; */
    color: #333;
    text-align: center;
    font-family: "IBM Plex Sans Thai";
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    justify-content: space-between;
    width: 100%;
  }
}

.card {
  padding: 2rem 1rem;
  background: white;
  border: 1px solid #000000;
  border-radius: 20px;
  width: 280px;
  height: 500px;
  text-align: left;
}

.btn2 {
  padding: 5px 70px;
  border-radius: 20px;
  border: 1px solid #000000;
  background: #f7c116;
  color: #000;
  font-family: IBM Plex Sans Thai;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  cursor: pointer;
}

.btn-footer {
  margin-top: 50px;
  display: flex;
  justify-content: center;
  width: 100%;
}
</style>
