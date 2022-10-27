<template>
  <div class="sm:container mx-auto flex flex-col items-center">
    <header class="w-2/5 my-8">
      <ul class="flex items-center justify-between">
        <li
          class="cursor-pointer"
          v-for="tab in tabs"
          :key="tab"
          @click="switchTab(tab)"
        >
          <slot :name="tabHeadSlotName(tab)">
            {{ tab }}
          </slot>
        </li>
      </ul>
    </header>

    <NewTodo />

    <main class="w-2/5 mt-5">
      <slot :name="tabPanelSlotName" />
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import NewTodo from "./NewTodo.vue";

export default defineComponent({
  components: {
    NewTodo,
  },
  props: {
    tabs: {
      type: Array,
    },
    initialTab: {
      type: String,
    },
  },
  setup(props) {
    const activeTab = ref(props.initialTab);
    const switchTab = (tabName: string) => (activeTab.value = tabName);
    const tabHeadSlotName = (tabName: string) => `tab-head-${tabName}`;
    const tabPanelSlotName = computed(() => `tab-panel-${activeTab.value}`);

    return {
      activeTab,
      switchTab,
      tabHeadSlotName,
      tabPanelSlotName,
    };
  },
});
</script>
