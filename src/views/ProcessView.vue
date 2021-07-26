<template>
  <div class="process">
    <a>Welcome to the Process view!</a>
    <ProcessComponent/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ProcessComponent from '@/components/ProcessComponent.vue'; // @ is an alias to /src

@Component({
  components: {
    ProcessComponent,
  },
})
export default class ProcessView extends Vue {}
</script>
