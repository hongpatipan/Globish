import { createStore } from "vuex";

export default createStore({
  state: {
    ex1: {
      selectedChoice: null,
    },
    ex2: {
      selectedChoice: null,
    },
    ex3: {
      selectedChoice: null,
    },
    ex4: {
      selectedChoice: null,
    },
    ex5: {
      selectedChoice: null,
    },
    ex6: {
      selectedChoice: null,
    },
    ex7: {
      selectedChoice: null,
    },
    result: {
      userInput: null,
    },
  },
  mutations: {
    setSelectedChoice(state, choice) {
      state.ex1.selectedChoice = choice;
    },
    setSelectedChoice2(state, choice) {
      state.ex2.selectedChoice = choice;
    },
    setSelectedChoice3(state, choice) {
      state.ex3.selectedChoice = choice;
    },
    setSelectedChoice4(state, choice) {
      state.ex4.selectedChoice = choice;
    },
    setSelectedChoice5(state, choice) {
      state.ex5.selectedChoice = choice;
    },
    setSelectedChoice6(state, choice) {
      state.ex6.selectedChoice = choice;
    },
    setSelectedChoice7(state, choice) {
      state.ex7.selectedChoice = choice;
    },
    setUserInput(state, choice) {
      state.result.userInput = choice;
    },
  },
  actions: {
    updateSelectedChoice({ commit }, choice) {
      commit("setSelectedChoice", choice);
    },
    updateSelectedChoice2({ commit }, choice) {
      commit("setSelectedChoice2", choice);
    },
    updateSelectedChoice3({ commit }, choice) {
      commit("setSelectedChoice3", choice);
    },
    updateSelectedChoice4({ commit }, choice) {
      commit("setSelectedChoice4", choice);
    },
    updateSelectedChoice5({ commit }, choice) {
      commit("setSelectedChoice5", choice);
    },
    updateSelectedChoice6({ commit }, choice) {
      commit("setSelectedChoice6", choice);
    },
    updateUserInput({ commit }, choice) {
      commit("setUserInput", choice);
    },
  },
  getters: {
    getSelectedChoice: (state) => state.ex1.selectedChoice,
    getSelectedChoice2: (state) => state.ex2.selectedChoice,
    getSelectedChoice3: (state) => state.ex3.selectedChoice,
    getSelectedChoice4: (state) => state.ex4.selectedChoice,
    getSelectedChoice5: (state) => state.ex5.selectedChoice,
    getSelectedChoice6: (state) => state.ex6.selectedChoice,
    getUserInput: (state) => state.result.userInput,
  },
});

// import { createStore } from "vuex";

// export default createStore({
//   state: {
//     ex1: {
//       selectedChoice: null,
//     },
//     ex2: {
//       selectedChoice: null,
//     },
//     totalValue: null,
//   },
//   mutations: {
//     setEx1SelectedChoice(state, value) {
//       state.ex1.selectedChoice = value;
//     },
//     setEx2SelectedChoice(state, value) {
//       state.ex2.selectedChoice = value;
//     },
//     setTotalValue(state, value) {
//       state.totalValue = value;
//     },
//   },
//   actions: {
//     setSelectedChoice({ commit }, { page, value }) {
//       if (page === "ex1") {
//         commit("setEx1SelectedChoice", value);
//       } else if (page === "ex2") {
//         commit("setEx2SelectedChoice", value);
//       }
//     },
//     setTotalValue({ commit }, value) {
//       commit("setTotalValue", value);
//     },
//   },
//   getters: {
//     getEx1SelectedChoice: (state) => state.ex1.selectedChoice,
//     getEx2SelectedChoice: (state) => state.ex2.selectedChoice,
//     getTotalValue: (state) => state.totalValue,
//   },
// });
