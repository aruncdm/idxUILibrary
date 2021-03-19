<template>

    <v-chip
      v-if="chip"
      :class="chipClass"
      :close="close"
      :outlined="outlined"
      :close-icon="closeIcon"
      :input-value="inputValue"
      @click:close="chip = false"
    >
     <slot />
    </v-chip>
</template>

<script>
export default {
    props:{
        chipClass:{
            default: 'idx-chip'
        },
        close:{
            default: false
        },
        outlined:{
            default: false
        },
        closeIcon:{
            default: ''
        },
        inputValue:{
            default: false
        }
    },
    data () {
      return {
        chip: true,
        active: false,
      }
    },
}
</script>

<style lang="scss">
@import "_variables.scss";

.action-chip.v-chip.v-chip--outlined.v-chip--active.idx-chip{
    border-color: $input-border-clr;
    background-color: rgb(121 197 253 / 12%) !important;

    .v-chip__content{
        i.v-icon.v-icon--left.mdi.mdi-check-circle-outline{
            color: $input-border-clr;
        }
    }
}
</style>