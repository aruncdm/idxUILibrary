<template>
    <v-dialog  v-bind="$attrs" class="idx-modal"
    >
        <slot />
        </v-dialog>
</template>

<script>
export default {
    inheritAttrs: false,
}
</script>