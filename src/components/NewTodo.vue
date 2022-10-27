<template>
  <form
    class="w-2/5 flex items-center justify-between"
    @submit.prevent="createTodo()"
  >
    <input
      v-model="text"
      type="text"
      class="border rounded w-9/12 py-2 px-4 text-sm"
      placeholder="add details"
    />
    <button
      type="submit"
      class="py-2 px-4 bg-blue-500 text-white text-sm rounded"
    >
      Add
    </button>
  </form>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

import { useStore } from "../store";
import { TodoItem } from "../store/state";
import { MutationType } from "../store/mutations";

export default defineComponent({
  setup() {
    const text = ref("");
    const store = useStore();

    const createTodo = () => {
      if (text.value === "") return;

      const item: TodoItem = {
        id: Date.now(),
        text: text.value,
        isCompleted: false,
      };

      store.commit(MutationType.CreateItem, item);
      text.value = "";
    };

    return {
      text,
      createTodo,
    };
  },
});
</script>
