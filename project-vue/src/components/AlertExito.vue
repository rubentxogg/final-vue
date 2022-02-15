<template>
    <div class="alert alert-success alert-dismissible fade show w-75 mt-5" role="alert">
        {{ mensaje }}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" @click="cerrarExito"></button>
    </div>
</template>

<script>
export default {
    name: "AlertExito",
    props: ["mensaje"],
    events: ["cerrarExito"],
    methods: {
        cerrarExito() {
            this.$emit("cerrarExito");
        }
    }
}
</script>

<style>

</style>