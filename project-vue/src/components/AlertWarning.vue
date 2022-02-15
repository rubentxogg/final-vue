<template>
    <div class="alert alert-warning alert-dismissible fade show w-75 mt-5" role="alert">
        {{ mensaje }}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" @click="cerrarWarning"></button>
    </div>
</template>

<script>
export default {
    name: "AlertWarning",
    props: ["mensaje"],
    events: ["cerrarWarning"],
    methods: {
        cerrarWarning() {
            this.$emit("cerrarWarning");
        }
    }
}
</script>

<style>

</style>