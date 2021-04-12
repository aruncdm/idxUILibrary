<template>
  <v-btn
    v-bind="$attrs"
    :color="color"
    :class="btnClass"
    :depressed="depressed"
    :raised="raised"
    :outlined="outlined"
    :rounded="rounded"
    :text="text"
    :fab="fab"
    :icon="icon"
    :tile="tile"
    :disabled="disabled"
    :small="small"
    :medium="medium"
    :large="large"
    :block="block"
    @click="click"
  >
    <slot /> {{ title }}
  </v-btn>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    title: {
      default: "",
    },
    color: {
      default: "",
    },
    depressed: {
      default: false,
    },
    raised: {
      default: false,
    },
    outlined: {
      default: false,
    },
    rounded: {
      default: false,
    },
    text: {
      default: false,
    },
    fab: {
      default: false,
    },
    icon: {
      default: false,
    },
    tile: {
      default: false,
    },
    disabled: {
      default: false,
    },
    small: {
      default: false,
    },
    medium: {
      default: true,
    },
    large: {
      default: false,
    },
    block: {
      default: false,
    },
    btnClass: {
      default: "idx-button",
    },
  },
  methods: {
    click(e) {
      this.$emit("click", e);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "_variables.scss";

.idx-button.v-btn.theme--light {
  text-transform: capitalize;
  font-weight: 500;
}

.idx-button.v-btn.theme--light.home-btn {
  width: 220px;
}

.idx-button.v-btn.v-btn--outlined.theme--light.v-size--default.primary--text {
  padding: 8px 32px;
  height: 36px;
}
button.secondary-btn.v-btn.v-size--default {
  background: $secondary-btn-bg;
  height: auto;
  padding: 6px 10px;

  &:before {
    background: $secondary-btn-hover;
  }
  &:hover {
    background: $secondary-btn-hover;
  }
}
button.icon-btn.secondary-btn.v-btn.v-size--default {
  &:hover {
    background: transparent;
  }
}
button.iconic-btn.v-btn.v-size--default.idx-button {
  border: 1px solid $search-btn-border;

  ::v-deep .v-btn__content span {
    font-size: 12px;
    padding-left: 5px;
    font-weight: 400;
  }
}
</style>
