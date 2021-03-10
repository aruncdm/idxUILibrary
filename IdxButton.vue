<template>

    <v-btn
    v-bind="$attrs"
      color="primary"
      class="idx-button"
      @click="click"
    > {{title}}
    </v-btn>

</template>

<script>
export default {
    inheritAttrs: false,
    props: ['title'],
    methods: {
      click(e){
        this.$emit("click", e)
      }
    }
}
</script>

<style lang="scss" scoped>
  @import "_variables.scss";

.idx-button.v-btn.theme--light{
  color: $primary!important;
  text-transform: capitalize;
  font-weight: 500;

}

.idx-button.v-btn.theme--light.home-btn{
  width: 220px;
}

.idx-button.v-btn.v-btn--outlined.theme--light.v-size--default.primary--text{
  padding: 8px 32px;
  height: 36px;
}

.idx-button.v-btn.v-btn--outlined.theme--light {
    background-color: $button-bg;
}

</style>