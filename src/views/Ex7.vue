<template>
  <div class="card-container">
    <div class="slider">
      <div class="box2"></div>
      <div class="box2"></div>
      <div class="box2"></div>
      <div class="box2"></div>
      <div class="box2"></div>
      <div class="box2"></div>
      <div class="box"></div>
    </div>
    <div class="card">
      <h1>Q7</h1>
      <h2>คุณรู้จัก Globish ผ่านช่องทางใด (เลือกได้มากกว่า 1 ข้อ)</h2>
      <div class="choices">
        <div class="choice" v-for="choice in choices" :key="choice.id">
          <div
            class="radio-card"
            :class="{ selected: selectedChoice === choice.id }"
            @click="selectChoice(choice.id, choice.value)"
          >
            <input
              type="radio"
              :id="choice.id"
              name="answer"
              v-model="selectedChoice"
              :value="choice.id"
            />
            <label :for="choice.id" class="label-center">{{
              choice.label
            }}</label>
          </div>
        </div>
      </div>
      <div class="input" v-show="selectedChoice === 'choice_3'">
        <input v-model="text" placeholder="ความคิดเห็น" />
      </div>
    </div>
    <div class="btn-footer">
      <router-link to="/ex6"
        ><button class="btn1" type="submit">กลับ</button></router-link
      >
      <router-link to="/result" :class="{ 'non-clickable': !selectedChoice }">
        <button class="btn2" type="submit" :disabled="!selectedChoice">
          ดูผลลัพธ์
        </button>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "HelloWorld",
  setup() {
    const choices = [
      {
        id: "choice_1",
        label: "Instagram",
        value: 0,
      },
      {
        id: "choice_2",
        label: "Facebook",
        value: 0,
      },
      {
        id: "choice_3",
        label: "อื่นๆ (โปรดระบุ)",
        value: 0,
      },
    ];

    const store = useStore();
    const selectedChoiceFromEx6 = ref(null);

    if (store.getters.getSelectedChoice6) {
      selectedChoiceFromEx6.value = store.getters.getSelectedChoice6;
    }

    console.log("selectedChoiceFromEx6", selectedChoiceFromEx6.value);

    const selectedChoice = ref<string | null>(null);
    const selectedChoiceValue = ref<number | null>(null);
    const totalValue = ref<number | null>(null);
    const text = ref<string | null>(null);

    const selectChoice = (choiceId: string, choiceValue: number) => {
      selectedChoice.value = choiceId;
      selectedChoiceValue.value = choiceValue;
      if (
        selectedChoiceFromEx6.value !== null &&
        selectedChoice.value !== null
      ) {
        totalValue.value =
          selectedChoiceFromEx6.value + selectedChoiceValue.value;
        store.dispatch("updateSelectedChoice6", totalValue);
        store.dispatch("updateUserInput", text);
        console.log("Total Value:", totalValue.value);
      }
    };

    store.dispatch("updateUserInput", text);

    return {
      choices,
      selectedChoice,
      selectChoice,
      text,
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
  height: 460px;
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
  padding: 5px 60px;
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
  margin-top: 20px;
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
    display: none;
  }

  input[type="radio"]:checked + label {
    color: white;
  }

  .label-center {
    margin: 0;
  }
}

.input {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;

  input {
    font-family: "IBM Plex Sans Thai";
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    border-radius: 0;
    border: none;
    background: none;
    padding: 5px;
    width: 100%;
    box-sizing: border-box;
    cursor: text;
    color: #10153c;
    border-bottom: 1px solid #10153c;
  }
}
</style>
