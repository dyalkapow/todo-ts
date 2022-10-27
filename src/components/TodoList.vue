<template>
  <TodoItem v-for="todo in todos" :key="todo.id" v-bind="todo" />
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { store } from "../store";
import TodoItem from "./TodoItem.vue";

export default defineComponent({
  components: { TodoItem },
  props: {
    type: {
      required: true,
      type: String,
    },
  },
  setup(props) {
    const todos = computed(() => store.getters[checkTodoType.value]);

    const checkTodoType = computed(() => {
      switch (props.type) {
        case "all":
          return "allTodos";
        case "active":
          return "activeTodos";
        case "completed":
          return "completedTodos";

        default:
          return store.getters.allTodos;
      }
    });

    return {
      todos,
      checkTodoType,
    };
  },
});
</script>
