<template>
      <v-expansion-panels
        v-model="panel" id="accordion"
        class="accordion"
    >
      <slot />
    </v-expansion-panels>
</template>

<script>
  export default {
    data: () => ({
      panel: [0, 1],
      disabled: false,
      readonly: false,
    }),
  }
</script>

<style  lang="scss">
#accordion{
  position: static;
  .accordion-header{
    font-size: 0.75rem;
    letter-spacing: 0.0333333333em;
    line-height: 1.25rem;
    font-weight: 600;
        padding-right: 5px;
         border-bottom: 0.2px solid rgb(197, 206, 221);

    &:hover{
      background-color: #ececec;
      border-radius: 4px;
    }
  }
  .accordion-content{
    padding-top: 30px;
  }

}

</style>