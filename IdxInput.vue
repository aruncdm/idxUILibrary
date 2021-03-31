<template>
  <v-text-field
    v-model="model"
    :label="label"
    :placeholder="placeholder"
    :outlined="outlined"
    :rounded="rounded"
    :solo="solo"
    :single-line="singleLine"
    :filled="filled"
    :clearable="clearable"
    :dense="dense"
    :class="inputClass"
  ></v-text-field>
</template>

<script>
export default {
  props: {
    model: {
      default: "",
    },
    label: {
      default: "",
    },
    placeholder: {
      default: "",
    },
    outlined: {
      default: false,
    },
    rounded: {
      default: false,
    },
    solo: {
      default: false,
    },
    singleLine: {
      default: false,
    },
    filled: {
      default: false,
    },
    clearable: {
      default: false,
    },
    dense: {
      default: false,
    },
    inputClass:{
        default: "idx-input"
    }
  },
};
</script>

<style lang="scss" scoped>
@import "_variables.scss";

.v-input.v-text-field.idx-input.v-input--is-focused fieldset {
    border: 1px solid $input-border-clr!important;
    
}
.v-input.v-text-field.idx-input .v-input__slot{
    &:hover{
            border: 1px solid $input-border-clr!important;
    }
}
.theme--light.idx-input.v-text-field--outlined:not(.v-input--is-focused):not(.v-input--has-state):not(.v-input--is-disabled) > .v-input__control > .v-input__slot:hover fieldset{
    border: 1px solid $input-border-clr!important
}
</style>
