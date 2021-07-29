<template>
  <div class="settings">
    <b-container>
      
      <b-row>
         <b-form-group
            label="Stacked (vertical) switch style checkboxes"
            v-slot="{ ariaDescribedby }"
          >
            <b-form-checkbox-group
              v-model="selected"
              :options="options"
              :aria-describedby="ariaDescribedby"
              switches
              stacked
              @click="test()"
              size="lg"
            ></b-form-checkbox-group>
          </b-form-group>
          <b-button @click="log()">log</b-button>
       
      </b-row>
      
    </b-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import EntryService from '@/services/EntryService';
import InboxEntry from '@/models/InboxEntry';
import router from '@/router/index';


@Component({
  components: {
  },
})
export default class SettingsComponent extends Vue {
  options = [ { text: 'Enter to Submit', value: 'red' }, { text: 'upside-down processing', value: 'upsd' }];
  selected = [];

  log() {
    console.log(this.selected);
  }
  
}
</script>

<style scoped lang="scss">


</style>