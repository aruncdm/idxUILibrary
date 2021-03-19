<template>
  <v-select

    :items="items"
    :disabled="disabled"
    :filled="filled"
    :dense="dense"
    :outlined="outlined"
  ></v-select>
</template>

<script>
export default {
  props: {
    model: {
      default: "",
    },
    items: {
      default: () => [],
    },
    disabled: {
      default: false,
    },
    filled: {
      default: false,
    },
    outlined: {
      default: false,
    },
    dense: {
      default: false,
    },
  },
};
</script>