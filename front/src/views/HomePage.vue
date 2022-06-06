<template>
    <!-- BODY PAGE -->
    <div class="content">
        <!-- Working Area -->
        <div class="card padding_bottom overflow scroller">
            <div class="tasks">
                <!-- Title area -->
                <h1 class="tasks_title fredericka">My Tasks</h1>
                <!-- Task ToDo -->
                <div v-for="(task, taskIdx) in tasks" :key="task._id"  class="mini_task"
                :id="task._id"> 
                    <div v-if="task.check == false" class="mini_tasks_todo">
                        <!-- Icon Check -->
                        <div class="mini_task_icon i_check">
                            <input
                                @change="(e) => updateCheckStatus(e, taskIdx)"
                                type="checkbox"
                                class="check"
                                :checked=task.check
                            >
                        </div> 
                        <!-- Title task -->
                        <div class="mini_task_title">
                            <a :href="'./task/' + task._id">
                                <p>{{task.name}}</p> 
                            </a>
                        </div> 
                        <!-- Icon Supp -->
                        <div class="mini_task_icon i_supp">
                            <i @click="deleteTask(task._id)" class="fa-regular fa-trash-can gray">
                            </i>
                        </div> 
                    </div>
    
                </div>
                <!-- Task Finish -->
                <div v-for="(task, taskIdx) in tasks" :key="task._id" class="mini_task">
                    <div v-if="task.check == true" class="mini_tasks_finish"> 
                        <!-- Icon Check -->
                         <div class="mini_task_icon i_check">
                            <input
                                @change="(e) => updateCheckStatus(e, taskIdx)"
                                type="checkbox"
                                class="check"                                :checked=task.check
                            >
                        </div> 
                        <!-- Title task -->
                        <div class="mini_task_title">
                            <a :href="'./task/' + task._id">
                                <strike><p>{{task.name}}</p></strike> 
                            </a>
                        </div> 
                        <!-- Icon Supp -->
                        <div class="mini_task_icon i_supp">
                            <i @click="deleteTask(task._id)" class="fa-regular fa-trash-can gray">
                            </i>
                        </div> 
                    </div>
                </div>
                <!-- Button new task -->
                <div class="new_task">
                    <a :href="'./newtask'">
                        <div class="task_icon">
                            <i class="fas fa-plus-circle"></i>
                        </div>
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

    computed: {
    //Permet de récupérer les données du state du store 
        ...mapState([
            "tasks"
        ]),
    },
  
    methods: {
        //Fonction de suppression
        deleteTask: function (task_id) {
            this.$store.dispatch("deleteTask", task_id);
            this.$router.go()	// Rafraichir la page
        },
        //fonction qui récupère le nom des champs et les valeurs pour les envoyer au mutateur
        updateCheckStatus(e, taskIdx) {
            this.$store.commit("updateCheckStatus", {
                taskIdx: taskIdx,
                newValue: e.target.checked,
            });
            const task_id = this.$store.state.tasks[taskIdx]._id;
            this.$store.dispatch("updateTask", task_id);
        }
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
    flex-direction: column;
}
.mini_tasks_todo, .mini_tasks_finish {
    display: flex;
    flex-direction: row;
    align-items: center;
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

/***** CHECKBOX *****/
input[type=checkbox] {
    -webkit-appearance: none;
    -moz-appearance: none;
    -ms-appearance: none;
}
input[type=checkbox] {
   width: 15px;
    height: 15px;
  border: 2px solid #8d6e63;
  border-radius: 3px;
}
input[type="checkbox"]:checked {
background-color: #8d6e63;
}
.i_check {
    flex: 5%;
    margin-right: 5px;
}

/***** ICONS *****/
.mini_task_icon {
    align-items: center;
    cursor: pointer;
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
