<template>
  <h1 class="text-center text-lg">#simple-todo-ts</h1>

  <TodoTabs :tabs="tabs" :initialTab="initialTab">
    <template v-slot:tab-head-all> All </template>
    <template v-slot:tab-head-active> Active </template>
    <template v-slot:tab-head-completed> Completed </template>


    <template v-slot:tab-panel-all>
      <TodoList type="all"></TodoList>
    </template>
    <template v-slot:tab-panel-active>
      <TodoList type="active"></TodoList>
    </template>
    <template v-slot:tab-panel-completed>
      <TodoList type="completed"></TodoList>
    </template>
  </TodoTabs>
</template>

<script lang="ts">
import { computed, defineComponent, ref, watch } from "vue";
import { useStore } from "./store/";
import { ActionTypes } from "./store/actions";
import TodoTabs from "./components/TodoTabs.vue";
import TodoList from "./components/TodoList.vue";
// import Todo from "./types/Todo";

export default defineComponent({
  components: {
    TodoTabs,
    TodoList,
  },
  setup() {
    const store = useStore();
    const initialTab = ref("all");
    const tabs = ref(["all", "active", "completed"]);
    const allTodos = computed(() => store.getters.allTodos);
    const completedTodos = computed(() => store.getters.completedTodos);
    const activeTodos = computed(() => store.getters.activeTodos);

    watch(
      () => allTodos,
      async () => {
        await store.dispatch(ActionTypes.GetTodoItems);
      },
      { immediate: true }
    );

    return { initialTab, tabs, allTodos, completedTodos, activeTodos };
  },
});
</script>

<!--<style scoped>-->
<!--h1 {-->
<!--  text-align: center;-->
<!--}-->
<!--</style>-->
