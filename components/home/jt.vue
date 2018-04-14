<template>
    <div>
        VIP会员
    </div>
</template>

<script>
    export default{
        mounted(){
            console.log(this.$route);
            console.log(this.$route.query.id);
        }
    }
</script>

<style>
</style>