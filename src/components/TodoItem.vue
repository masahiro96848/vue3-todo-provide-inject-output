<template>
    <li v-for="todo in todos" class="list">
        <span class="item">{{ todo }}</span>
        <i class="fa fa-trash fa-lg" aria-hidden="true"></i>
    </li>
</template>

<script setup lang="ts"></script>
