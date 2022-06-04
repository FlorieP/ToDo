//Importation des modules de Vue
import { createStore } from 'vuex'
const axios = require('axios');

// Création du store
const store = createStore({
    //déclération de variables
    state: {
    // TASK
        // All tasks
        tasks: [],
        //One task
        task: {
            _id: '',
            name: '',
            description:'',
            check: ''
        }
    },
    ////////////////// MUTATIONS TASK //////////////////   
    mutations: {
        //MAJ du state One Task 
        task: function(state, task) {
            //MAJ du state task
            state.task = task;
        },

        //MAJ du state All Tasks 
        tasks: function(state, tasks) {
            //MAJ du state tasks
            state.tasks = tasks;
        },
    },
    ///////////////////  ACTIONS TASK ////////////////// 
    actions: { 
        //Fonction de récupération de toutes les tâches
        getAllTasks : ({commit})=> {
            axios.get(`http://localhost:3000/api/task/`)
                .then(response => {
                    commit('tasks', response.data);
                    console.log(response.data)
                })
                .catch(error => {
                    console.log(error);
                })
        },  

        //Fonction de récupération d'une tâche
        getOneTask : ({commit}, task_Id)=> {
            axios.get(`http://localhost:3000/api/task/${task_Id}`)
                .then(response => {
                    console.log(task_Id);
                    commit('task', response.data);
                    console.log(response.data)
                })
                .catch(error => {
                    console.log(error);
                })
            },
        //Fonction de création d'une tâche

        //Fonction de modification d'une tâche

        //Fonction de suppression d'une tâche

    }   
})

//Permet d'accéder au store depuis la console
window.store = store;

//Exportation du store
export default store;
