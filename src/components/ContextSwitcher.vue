<template>
<div>
    <b-form-group style="text-align: left" label="" v-slot="{ ariaDescribedby }">
      <b-form-radio v-model="selected" :aria-describedby="ariaDescribedby" name="some-radios" value="Personal">Personal</b-form-radio>
      <b-form-radio v-model="selected" :aria-describedby="ariaDescribedby" name="some-radios" value="Work">Work</b-form-radio>
    </b-form-group>
</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import EntryService from '@/services/EntryService';
import router from '@/router/index';

@Component
export default class ContextSwitcher extends Vue {
  @Prop() private msg!: string;
  selected = "Personal";
  
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.capture {
  align-content: center;
}

</style>
