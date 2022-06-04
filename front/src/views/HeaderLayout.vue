<template>
    <div class="header">
        <div class="title fredericka">
            ToDo
        </div> 
    </div>
</template>

<script>
    export default {
        name: 'HeaderLayout'
    }

</script>

<style>
    .header{
        display: flex;
        align-items: center;
        background-color: #b2dfdb;
        width: 100%;
        box-shadow: 0px 1px 5px 0px #4db6ac;
    }
    .title{
        font-size: 50px;
        flex: 1;
        text-align: center;
    }
</style>
