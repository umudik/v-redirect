<script>
export default {
    props: ['to'],
    mounted() {
        this.$router.push(this.to);
    },
};
</script>
