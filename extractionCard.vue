<template>

 <v-card class="idx-card extraction-card"
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

<style scoped>

.idx-card.card-shadow.extraction-card.v-card.v-sheet.theme--light { 
  box-shadow: 0px 3px 8px rgb(0 0 0 / 20%), 0px 3px 8px rgb(0 0 0 / 14%), 0px 3px 8px rgb(0 0 0 / 12%);
  padding: 15px 20px;
}
</style>