<template>
    <Header/>
        <div class="content">
            <router-view />
        </div>
</template>

<script>
    import Header from './views/HeaderLayout.vue'

    export default {
        name: 'App',
        components: {
            Header,
        }
    }
</script>

<style>
    /***** IMPORTATION FONT *****/
    @import url('https://fonts.googleapis.com/css2?family=Fredericka+the+Great&display=swap');
    /***** GENERALITY *****/
    html {
        height: 100%;
    }
    body {
        margin:  0px;
        height: 100%;
    }
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: stretch;
    }
    .content {
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 88vh;
        flex: 1;
        overflow: auto;
    }

    .fredericka {
        font-family: 'Fredericka the Great', cursive;
    }
    a{
      text-decoration: none;
      color: black;
    }
    p{
        padding: 0px;
        margin: 0px;
    }
    i {
        color:#8d6e63 ;
        margin-left: 5px;
    }  

    /***** CARD BASE *****/
    .card {
    max-width: 100%;
    width: 500px;
    background-color: #b2dfdb;
    border-radius: 16px;
    padding:32px;
    max-height: 40vw;
    position: relative;
}
</style>
