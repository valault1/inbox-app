<template>
  <div class="capture">
    <SettingsComponent/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import SettingsComponent from '@/components/SettingsComponent.vue'; // @ is an alias to /src

@Component({
  components: {
    SettingsComponent,
  },
})
export default class SettingsView extends Vue {}
</script>
