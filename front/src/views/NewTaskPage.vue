<template>
    <!-- BODY PAGE -->
    <div class="content">
        <!-- Working Area -->
        <div class="card padding_top">
            <!-- Buttons -->
            <a :href="'./'">
                <div class="return">
                    <i class="return far fa-arrow-alt-circle-left"></i>
                </div>
            </a>
            <!-- Task -->
            <div class="task">
                <!-- Task items -->
                <div class="form_item">
                    <input v-model="name_task" class="form_input" type="text" placeholder="Name Task"/>
                </div>
                <div class="form_item">
                    <input v-model="description_task" class="form_input" type="text" placeholder="Description Task"/>
                </div> 
            </div>
            <div class="task_button">
                <button @click="newTask()" class="button">
                    <span>Create</span>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NewTaskPage',

    //Importation des données à afficher

    //Déclaration de variables
    data: function () {
        return {
        };
    },
    computed: {
    //Permet de récupérer les données du state du store 
        //...mapState([

       // ]),

    },
    // Méthode Task  
    methods: {
        //Création d'une nouvelle tâche
        newTask: function () {
            console.log("name :" + this.name_task)
            console.log("description :" + this.description_task)
            this.$store.dispatch("newTask", {
                name: this.name_task,
                description: this.description_task,
            })
            .then(
            (response) => {
                console.log(response);
                this.$router.push("./")	// Rafraichir la page
            },
            (error) => {
                console.log(error.message);
            }
            );
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
