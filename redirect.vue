<template>
    <div>
    </div>
</template>

<script>
export default {
    props: ['to'],
    data() {
        return {
            test: false,
        };
    },
    mounted() {
        this.$router.push(this.to);
    },
    updated() {

    },
};
</script>
