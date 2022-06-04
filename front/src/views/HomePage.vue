<template>
    <!-- BODY PAGE -->
    <div class="content">
        <!-- Working Area -->
        <div class="card padding_bottom overflow scroller">
            <div class="tasks">
                <!-- Title area -->
                <h1 class="tasks_title fredericka">My Tasks</h1>
                <!-- A task exemple fix -->
                <div class="mini_task">
                    <!-- Icon Check -->
                    <div class="mini_task_icon i_check">
                        <i v-if="mode == 'check'" class="far fa-check-square"></i>
                        <i v-else class="far fa-square"></i>
                    </div> 
                    <!-- Title task -->
                    <div class="mini_task_title">
                        <a :href="'./task'">
                            <p>Task 1</p> 
                        </a>
                    </div> 
                    <!-- Icon Supp -->
                    <div class="mini_task_icon i_supp">
                        <i class="fa-regular fa-trash-can gray"></i>
                    </div> 
                </div>
                <!-- A task -->
                <div v-for="task in tasks" :key="task._id" class="mini_task">
                    <!-- Icon Check -->
                    <div class="mini_task_icon i_check">
                        <i v-if="task.check == true" class="far fa-check-square"></i>
                        <i v-else class="far fa-square"></i>
                    </div> 
                    <!-- Title task -->
                    <div class="mini_task_title">
                        <a :href="'./task/' + task._id">
                            <p>{{task.name}}</p> 
                        </a>
                    </div> 
                    <!-- Icon Supp -->
                    <div class="mini_task_icon i_supp">
                        <i class="fa-regular fa-trash-can gray"></i>
                    </div> 
                </div>
                <!-- Button new task -->
                <div class="new_task">
                    <a :href="'./newtask'">
                        <div class="task_icon"><i class="fas fa-plus-circle"></i></div>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
//Importation module Vuex
import { mapState } from "vuex";

export default {
    name: 'HomePage',
    mounted: function () {
        //Importation des données à afficher
        this.$store.dispatch("getAllTasks");
    },
    //Déclaration de variables
    data: function () {
        return {
            mode: "noCheck"
        };
    },
    computed: {
    //Permet de récupérer les données du state du store 
        ...mapState([
            "tasks"
        ])

    },
    // Méthode Task  
    methods: {
        //Fonction de suppression
        
    }  
}
</script>

<style>
/***** CARD *****/
.overflow {
    overflow: auto;
}
.padding_bottom {
    padding-bottom: 45px;
}

 /***** SCROLLBAR CARD STYLE *****/
.overflow::-webkit-scrollbar {
    width: 15px;
}
.overflow::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px #8d6e63; 
    border-radius: 10px;
}
.overflow::-webkit-scrollbar-thumb {
    background: #8d6e63 ; 
    border-radius: 10px;
}

/***** LIST TASK *****/
.tasks{
    display: flex;
    flex-direction: column;
    
}
.tasks_title {
    font-size: 40px;
    font-weight: 500;
    margin: 0px 0px 20px 0px;
    text-align: center;
}

/***** TASKS *****/
.mini_task{
    display: flex;
    flex-direction: row;
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
    margin-bottom: 10px;
}

.mini_task_title {
    flex: 90%;
    font-size: 16px;
    text-align: left;
    cursor: pointer;
}

/***** CHANGE AFTER CLICK *****/
.mini_task:active {
    background: #978f8c;
    text-decoration:line-through;
}

/***** ICONS *****/
.mini_task_icon {
    align-self: center;
    cursor: pointer;
}
.i_check {
    flex: 5%;
    margin-right: 5px;
}
.i_supp{
    flex: 5%;
    margin-left: 5px;
}
.gray {
    color: #d8d3d1;
}
.gray:hover{
    color: #8d6e63;

}
.new_task{
    position: absolute;
    right: 7px;
    bottom: 5px;   
    color:#8d6e63 ;
    font-size: 24px;
}
/******************** RESPONSIVE ********************/
/***** MOBILE *****/
@media screen and (max-width: 505px){
    body{
        margin: 5px;
    } 
    .card {
        width: 100%;
        max-height: 160vw;
    }
    .card .card__subtitle{
        display: flex;
        flex-direction: column;
    }
}
</style>
