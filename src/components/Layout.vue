<template>
  <div>
    <header>
      <slot name="header" />
    </header>

    <main>
      <slot name="main" />
      <div class="scoped">
        <slot name="scoped" v-bind="{ msg }" />
      </div>
    </main>
    <footer>
      <slot name="footer" />
    </footer>
  </div>
</template>
<script setup lang="ts" name="Layout">
import { ref } from 'vue'
const msg = ref('hello world')
</script>