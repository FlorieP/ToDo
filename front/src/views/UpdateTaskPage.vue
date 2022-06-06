<template>
    <!-- BODY PAGE -->
    <div class="content">
        <!-- Working Area -->
        <div class="card padding_top">
            <!-- Button return -->
            <a :href="'../task/' + task._id">
                <div class="return">
                    <i class="return far fa-arrow-alt-circle-left"></i>
                </div>
            </a>
            <!-- Task -->
            <div class="task">
                <!-- Task items -->
                <div class="form_item">
                    <input class="form_input" name="name" type="text" :value="task.name" @input="updateTaskField"/>
                </div>
                <div class="form_item">
                    <input class="form_input" name="description" type="text" :value="task.description" @input="updateTaskField"/>
                </div> 
            </div>
            <!-- Button save -->
            <div class="task_button">
                <button @click="updateTask()" class="button">
                    <span>Save</span>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
//Importation module Vuex
import { mapState } from "vuex";

export default {
    name: 'UpdateTaskPage',

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
  
    methods: {
        //Fonction qui récupère le nom des champs et les valeurs pour les envoyer au mutateur
        updateTaskField(e) {
            this.$store.commit("updateTaskField", {
                newValue: e.target.value,
                fieldName: e.target.name,
            });
        },
        //Modification d'un message
        updateTask: function () {
            //Renvoie à la fonction du Store
            this.$store.dispatch("updateTask", this.$route.params.id);
            //Réinitialise le localeStorage 
            localStorage.clear(); 
            //Renvoie à la page d'affichage d'une tâche
            this.$router.push('/task/' + this.$route.params.id);
        },        
    }  
}
</script>

<style>
/***** CARD *****/
.padding_top{
    padding-top: 45px;
}

/***** ICONS RETURN ******/
.return{
    position: absolute;
    top : 4px;
    left: 2px;
    font-size: 22px;
}

/***** TASK *****/
.task{
    display: flex;
    flex-direction: column;

}

/***** FORM *****/
.form_input {
    padding:8px;
    border: 1px solid transparent;
    border-radius: 8px;
    background:white;
    font-weight: 500;
    font-size: 16px;
    flex:1;
    min-width: 100px;
    width: 100%;
    color: black;
    outline: none;
    box-sizing: border-box;
    margin-bottom: 5px;
}
.form_input::placeholder {
  color: #5c5c5c;
}
.space{
    margin: 5px ;
}

/***** BUTTON *****/
.task_button {
    display: flex;
    justify-content: center;
}
.button {
    background: white;
    color:#8d6e63;
    border-radius: 8px;
    font-weight: 600;
    font-size: 16px;
    border: 1px solid #8d6e63;
    width: 100px;
    padding: 8px;
    margin-top: 10px;
    transition: .4s background-color;
    
}
.button:hover {
    cursor:pointer;
    background: #8d6e63;
    color:  white;
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
