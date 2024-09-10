<template>
  <nav>
    <a id="profile" href="/profile">My Profile</a>
    <a v-if="admin" id="admin" href="/admin">Admin</a>
    <ul v-show="shouldShowDropdown" id="user-dropdown">
      <!-- dropdown content -->
    </ul>
  </nav>
</template>

<script lang="ts" setup name="Nav">
import { ref} from 'vue'
const admin = ref<boolean>(false)
const shouldShowDropdown = ref<boolean>(false)
</script>