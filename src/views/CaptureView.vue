<template>
  <div class="capture">
    <CaptureComponent/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import CaptureComponent from '@/components/CaptureComponent.vue'; // @ is an alias to /src

@Component({
  components: {
    CaptureComponent,
  },
})
export default class CaptureView extends Vue {

  
}
</script>
