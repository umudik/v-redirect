<template>
    <div>
    </div>
</template>

<script>
export default {
    props: ['to'],
    data() {
        return {
        };
    },
    mounted() {
        this.$router.push(this.to);
    },
};
</script>
