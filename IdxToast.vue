<template>
  <div class="snackbar-wrapper">
    <v-snackbar v-model="show" 
      :timeout="timeout" 
      :color="color"
      :top="top"
      :right="right"
      :absolute="absolute"
      :bottom="bottom"
      :left="left"
      :multi-line="multiLine"
      :vertical="vertical"
    >

        <div class="content">
          <strong>
            {{text}}
          </strong>
          <idx-button color="white" text @click="showToast = false">Close</idx-button>
        </div>
      
    </v-snackbar>
  </div>
</template> 

<script>
import IdxButton from './IdxButton.vue'
  export default {
	components: { IdxButton },
    data: () => ({

    }),
    props:{
      value: Boolean,
    text: {
      type: String,
      required: true,
    },
    color: {
      required: false,
      default: "error"
    },
    top: {
      required: false,
      default: true
    },
    right: {
      required: false,
      default: false
    },
    absolute: {
      required: false,
      default: false
    },
    bottom: {
      required: false,
      default: false
    },
    left: {
      required: false,
      default: false
    },
    multiLine: {
      required: false,
      default: false
    },
    vertical: {
      required: false,
      default: false
    },
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


<style  scoped lang="scss">

.snackbar-wrapper {
  z-index: 99999;
  position: fixed;
  ::v-deep .v-snack {
    font-size: 14px;
      .v-sheet{
          box-shadow: 0px 3px 8px rgb(0 0 0 / 20%), 0px 3px 8px rgb(0 0 0 / 14%), 0px 3px 8px rgb(0 0 0 / 12%);

      }
      .content {
          font-size: 12px;
          color: #5d6a71;
          strong {
            color: #272727;
          }
      }
  }
}
</style>
