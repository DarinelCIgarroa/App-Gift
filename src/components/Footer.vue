<template>
    <footer class="bg-dark text-white text-center">
        <h6 class="py-3 m-1">Darinel Cigarroa De Los Santos  &copy; {{ getTime }}</h6>
    </footer>
</template>

<script>
export default {
    name: "Footer",
    computed:{
        getTime(){
            return new Date().toDateString();
        }
    }
}
</script>

<style scoped>
    footer{
        position: fixed;
        width: 100%;
        bottom: 0;
    }
</style>