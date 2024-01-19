<template>
  <div class="card-container">
    <div class="slider">
      <div class="box"></div>
      <div class="box2"></div>
      <div class="box2"></div>
      <div class="box2"></div>
      <div class="box2"></div>
      <div class="box2"></div>
      <div class="box2"></div>
    </div>
    <div class="card">
      <h1>Q1</h1>
      <h2>ถ้าวันนี้เป็นวันหยุด คุณจะ...</h2>
      <div class="choices">
        <div class="choice" v-for="choice in choices" :key="choice.id">
          <div
            class="radio-card"
            :class="{ selected: selectedChoice === choice.value }"
            @click="selectChoice(choice.value)"
          >
            <input
              type="radio"
              :id="choice.id"
              name="answer"
              v-model="selectedChoice"
              :value="choice.value"
            />
            <label :for="choice.id" class="label-center">{{
              choice.label
            }}</label>
          </div>
        </div>
      </div>
    </div>
    <div class="btn-footer">
      <router-link to="/"
        ><button class="btn1" type="submit">กลับ</button></router-link
      >
      <!-- <router-link to="/ex2"
        ><button class="btn2" type="submit">ต่อไป</button></router-link
      > -->
      <router-link to="/ex2" :class="{ 'non-clickable': !selectedChoice }">
        <button class="btn2" type="submit" :disabled="!selectedChoice">
          ต่อไป
        </button>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "HelloWorld",
  setup() {
    const store = useStore();

    const choices = [
      { id: "choice_1", label: "นอนเล่น พักผ่อน", value: 10 },
      { id: "choice_2", label: "ดูหนัง ดูซีรี่ส์ เล่นเกม", value: 20 },
      { id: "choice_3", label: "เรียนรู้อะไรใหม่ ๆ", value: 30 },
    ];

    const selectedChoice = ref<number | null>(null);

    const selectChoice = (choiceValue: number) => {
      selectedChoice.value = choiceValue;
      store.dispatch("updateSelectedChoice", choiceValue);
      console.log("Selected Choice Value:", selectedChoice.value);
    };

    onMounted(() => {
      console.log(
        "Component Mounted. Initial Selected Choice Value:",
        selectedChoice.value
      );
    });

    return {
      choices,
      selectedChoice,
      selectChoice,
    };
  },
  props: {
    msg: String,
  },
});
</script>

<style lang="scss" scoped>
.slider {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.box {
  padding: 3px 20px;
  border-radius: 20px;
  background-color: #333333;
  margin-bottom: 20px;
  margin-left: 2px;
}
.box2 {
  padding: 3px 20px;
  border-radius: 20px;
  background-color: white;
  margin-bottom: 20px;
  margin-left: 2px;
}
.content {
  display: flex;
  /* align-items: center; */
  justify-content: center;
  padding: 2rem 1rem;
  background: #39b7e8;
  border: 1px solid #000000;
  border-radius: 20px;
  width: 360px;
  height: 780px;
}
.card-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

h1 {
  align-items: start;
  color: #c8c8c8;
  font-family: Gloria Hallelujah;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding: 0px 10px;
  margin-top: -10px;
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

.card {
  padding: 2rem 1rem;
  background: white;
  border: 1px solid #000000;
  border-radius: 20px;
  width: 280px;
  height: 400px;
  text-align: left;
}

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
  color: $primary-color;
}

.btn1 {
  padding: 5px 30px;
  border-radius: 20px;
  border: 1px solid #000000;
  background: white;
  color: #000;
  font-family: IBM Plex Sans Thai;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  cursor: pointer;
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
  justify-content: space-between;
  width: 100%;
}

.choices {
  margin-top: 45px;
}

.radio-card {
  display: flex;
  align-items: center;
  /* justify-content: center; */
  border: 1px solid #d9d9d9;
  border-radius: 20px;
  padding: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 14px;
  height: 50px;
  color: #10153c;
  font-family: IBM Plex Sans Thai;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  &.selected {
    background-color: #f57c4a;
    color: white;
    border: 1px solid #000000;
  }

  input[type="radio"] {
    display: none; // ซ่อน radio element
  }

  input[type="radio"]:checked + label {
    color: white;
  }

  .label-center {
    margin: 0;
  }
}
</style>
