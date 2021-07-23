<template>
  <div class="capture">
    <p class="test"> Welcome to the capture component! </p>
    <textarea autofocus v-model="captureText"></textarea>
    <button @click="save()">Submit </button>
    <textarea v-model="text2"></textarea>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class CaptureComponent extends Vue {
  @Prop() private msg!: string;
  private captureText = "";
  private text2 = "";

  save() {
    console.log(this.captureText);
    this.text2 = this.captureText;
  }

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
//@import '../app.scss';
.test {
  //color: #002BFF;
  color: $color-primary-1;
}
</style>
