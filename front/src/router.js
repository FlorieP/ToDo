//Importation des modules du routeur
import { createWebHistory, createRouter } from "vue-router";

//Importation des routes
import HomePage from "@/views/HomePage.vue";
import TaskPage from "@/views/TaskPage.vue";
import NewTaskPage from "@/views/NewTaskPage.vue";
import UpdateTaskPage from "@/views/UpdateTaskPage.vue";

//Création du tableau de routes
const routes = [
    //route home
    {
        name: 'home',
        path: '/',
        component: HomePage,
    },
    //route get one task
    {
        name: 'task',
        path: '/task/:id',
        component: TaskPage,
    },
    //route new task
    {
        name: 'newtask',
        path: '/newtask',
        component: NewTaskPage,
    },
    //route update task
    {
        name: 'updatetask',
        path: '/updatetask/:id',
        component: UpdateTaskPage,
    },
]

//Création du router
const router = createRouter({
  history: createWebHistory(),
  routes,
})

//Exportation du router
export default router;