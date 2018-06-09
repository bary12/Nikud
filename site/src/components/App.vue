<template>
  <div>
    <div id="editor">
      <textarea
        v-model="code"
      >

      </textarea>
      <div id="buttons">
        <button
          class="md-btn"
          v-for="(operator, character) in operators"
          :key="character"
          v-tooltip="operator.description"
          @click="code += character"
        >
          {{character}}
        </button>
        <button
          class="md-btn" 
          id="run"
          @click="run()"
        >
          Run
        </button>
      </div>
      <input
        type="text"
        readonly
        id="stdout"
        v-model="stdout"
        placeholder="The output of your program will be written here"
      />
    </div>
    <div v-html="readme"></div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import readme from "../../../README.md";
import { operators, interpreter } from "../../../src/";
import VTooltip from "v-tooltip";
import "v-tooltip";

Vue.use(VTooltip);
import "../style.scss";
export default Vue.extend({
  name: "App",
  data() {
    return {
      readme,
      code: "",
      operators,
      stdout: ""
    };
  },
  methods: {
    run() {
      try {
        const result = interpreter(this.code);
        this.stdout = result.stdout;
      } catch (e) {
        this.stdout = `Error: ${e.message}`;
      }
    }
  }
});
</script>

<style scoped>
#editor {
  max-width: 800px;
}
#editor > textarea {
  margin: 0;
  padding: 0;
  width: 100%;
  box-sizing: border-box;
  height: 150px;
  outline: none;
  resize: none;
  font-size: 50px;
}
#buttons {
  display: flex;
  flex-wrap: wrap;
  margin-right: -5px;
  margin-left: -5px;
}
#buttons > button {
  flex: 1;
  margin: 5px;
}

button#run {
  background-color: gainsboro;
  color: black;
  font-size: 16px;
  font-weight: 600;
  min-width: 120px;

  font-family: "Open Sans", Helvetica, sans-serif;
}
input#stdout {
  box-sizing: border-box;
  width: 100%;
  font-size: 15px;
  height: 30px;
}
</style>