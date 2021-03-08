<template>

 <v-card id="overiewCard" class="idx-card overview-card"
    v-bind="$attrs"
  >
    <slot />

 </v-card>

</template>

<script>
export default {
    inheritAttrs: false,
}
</script>

<style  lang="scss" scoped>
  @import "_variables.scss";

#overiewCard.idx-card.overview-card.v-card.v-sheet.theme--light{
    -webkit-box-shadow: 1px 1px 11px -1px rgb(0 0 0 / 10%);
    box-shadow: 1px 1px 11px -1px rgb(0 0 0 / 10%);
    border: 1px solid $overview-card-border;
    border-radius: 8px;
}
</style>