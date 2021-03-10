<template>
    <v-dialog v-model="show" v-bind="$attrs" class="idx-modal"
    >
        <slot />
        </v-dialog>
</template>

<script>
export default {
    inheritAttrs: false,

    props: {
     value: Boolean
    },
  computed: {
    show: {
      get () {
        return this.value
      },
      set (value) {
         this.$emit('input', value)
      }
    }
  }
}
</script>