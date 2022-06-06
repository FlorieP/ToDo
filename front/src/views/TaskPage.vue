<template>
    <!-- BODY PAGE -->
    <div class="content">
        <!-- Working Area -->
        <div class="card padding_top">
            <!-- Button return -->
            <a :href="'../'">
                <div class="return">
                    <i class="return far fa-arrow-alt-circle-left"></i>
                </div>
            </a>
            <!-- Button modify -->
            <a :href="'/UpdateTask/' + this.$route.params.id">
                <div class="modif">
                    <i class="far fa-edit"></i>
                </div>
            </a>
            <!-- Task -->
            <div class="task">
                <!-- Task items -->
                <h2>Task</h2>
                <div class="task_item">
                    <p>{{task.name}}</p>
                </div>
                <h2>Description</h2>
                <div class="task_item">
                    <p>{{task.description}}</p> 
                </div> 
                <h2>Status</h2>
                <div class="task_item">
                    <p v-if="task.check == true">Finish</p> 
                    <p v-else>To Do</p> 
                </div> 
            </div>
        </div>
    </div>
</template>

<script>
//Importation module Vuex
import { mapState } from "vuex";

export default {
    name: 'taskPage',

    mounted: function () {
        //Importation des données à afficher
        this.$store.dispatch("getOneTask", this.$route.params.id);
    },

    computed: {
    //Permet de récupérer les données du state du store 
        ...mapState([
            "task"
        ]),

    },
}
</script>

<style>
/***** CARD *****/
.padding_top{
    padding-top: 45px;
}

/***** ICONS RETURN & MODIF ******/
.return{
    position: absolute;
    top : 4px;
    left: 2px;
    font-size: 22px;
}
.modif{
    position: absolute;
    top : 6px;
    right: 7px;
    font-size: 22px;
}

/***** TASK *****/
.task{
    display: flex;
    flex-direction: column;
}
.task_item {
    padding:8px;
    border: 1px solid transparent;
    border-radius: 8px;
    background:white;
    font-weight: 500;
    font-size: 16px;
    flex:1;
    min-width: 100px;
    color: black;
    outline: none;
    box-sizing: border-box;
    margin-bottom: 5px;
    display: flex;
}
.space{
    margin: 5px ;
}
h2{
    font-size: 16px;
    margin: 15px 2px 2px 5px;
}

/******************** RESPONSIVE ********************/
/***** MOBILE *****/
@media screen and (max-width: 505px){
    body{
        margin: 5px;
    } 
    .card {
        width: 100%;
    }
    .card .card__subtitle{
        display: flex;
        flex-direction: column;
    }
}
</style>
