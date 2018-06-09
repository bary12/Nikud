declare module '*.vue' {
  import Vue from 'vue';
  export default Vue;
}

declare module '*.md' {
  const content: string;
  export = content;
}