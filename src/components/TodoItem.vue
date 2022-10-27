<template>
  <div class="flex items-center justify-between">
    <input
      class="cursor-pointer p-2"
      type="checkbox"
      :checked="isCompleted"
      @change="toggleCompletion()"
    />
    <h1 class="flex-grow m-2" :class="{ 'line-through': isCompleted }">
      {{ text }}
    </h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { MutationType } from "../store/mutations";
import { useStore } from "../store";

export default defineComponent({
  props: {
    id: { type: Number, required: true },
    text: { type: String, required: true },
    isCompleted: { type: Boolean, required: true },
  },
  setup(props) {
    const store = useStore();

    const toggleCompletion = () => {
      store.commit(MutationType.CompleteItem, {
        id: props.id,
        isCompleted: !props.isCompleted,
      });
    };

    return { toggleCompletion };
  },
});
</script>
