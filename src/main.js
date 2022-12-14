import { provide, createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { todoStateKey, todoState } from './store/todo/todo'

createApp(App).provide(todoStateKey, todoState()).mount('#app')
