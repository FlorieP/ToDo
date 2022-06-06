//Importation des modules de Vue
import { createStore } from 'vuex'
const axios = require('axios');

// Création du store
const store = createStore({
    //déclération de variables
    state: {
        status: '',
    // TASK
        // All tasks
        tasks: [],
        //One task
        task: {
            _id: '',
            name: '',
            description:'',
            check: false,
        }
    },
    ////////////////// MUTATIONS TASK //////////////////   
    mutations: {
        //MAJ du status du state
        setStatus: function (state, status) {
            state.status = status;
        },
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
        //MAJ du state task après modification tâche
        updateTaskField (state, {newValue, fieldName }) {
            state.task[fieldName] = newValue
        },
        //MAJ du state tasks après modification du status d'une tâche
        updateCheckStatus (state, {taskIdx, newValue}) {
            state.tasks[taskIdx].check = newValue
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
        newTask : ({commit}, taskInfos) => {
            return new Promise ((resolve, reject) => {
                axios.post(`http://localhost:3000/api/task/new`, taskInfos)
                    .then(response => {
                            console.log(response),
                            commit('setStatus', 'created');
                            resolve(response);
                    })
                   .catch(error => {
                        console.log(error),
                        commit('setStatus', 'error_create');
                        reject(error);
                    })
            })
        },
        //Fonction de modification du status d'une tâche
        updateTask : ({commit, state}, task_Id) => {  
            //Récupération de la seule tâche modifée dans le state 
            let task = state.task;
            if (task._id != task_Id) {
                for (const one_task of state.tasks) {
                    if (one_task._id == task_Id) {
                        task = one_task;
                        break;
                    }
                }
                if (task) {
                    commit('task', task);
                } else {
                    return;
                }
            }
            return new Promise ((resolve, reject) => {
                commit;
                axios.put(`http://localhost:3000/api/task/${task_Id}`, task)
                .then(response => {
                    resolve(response);
                })
               .catch(error => {
                    console.log(error.message)
                    reject(error.message);
                })
            })  
        },

        //Fonction de suppression d'une tâche
        deleteTask : ({commit}, task_Id) => {
            return new Promise ((resolve, reject) => {
                commit;
                axios.delete(`http://localhost:3000/api/task/${task_Id}`)
                .then(response => {
                    resolve(response);
                })
               .catch(error => {
                    console.log(error.message)
                    reject(error.message);
                })
            })  
        },
    }   
})

//Permet d'accéder au store depuis la console
window.store = store;

//Exportation du store
export default store;
