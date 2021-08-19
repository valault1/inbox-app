<template>
  <div class="capture">
    <b-container style="align-content: center;">
      <b-button @click="goToProcessInbox()">view inbox <b-badge variant="dark">{{numInboxItems}}</b-badge></b-button>
      <b-row>
        <b-form-textarea
        id="captureTextInput"
        v-model="captureText"
        placeholder="Enter something..."
        rows="8"
        max-rows="8"
        sm="12"
        m="6"
        ref='focusMe'
        @keypress="checkForEnter($event)"
      ></b-form-textarea>
      </b-row>
      <b-button variant="success" @click="saveInboxItem()">Submit </b-button>


      <b-row>
        <span v-html="logOutput"></span>
      </b-row>
      
    </b-container>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import EntryService from '@/services/EntryService';
import router from '@/router/index';

@Component
export default class CaptureComponent extends Vue {
  @Prop() private msg!: string;
  private captureText = "";
  private logOutput = "";
  private submitOnEnterKey = true;
  private context = "Personal"
  numInboxItems = 0;
 
  mounted() {

    // Supposed to bring up keyboard. Doesn't work.
    //this.$nextTick(function () {
    //  this.$refs.focusMe?.focus();  
    //})

    this.updateInboxBadge();
  }

  async updateInboxBadge() {
    new EntryService().count().then((result) => {
      this.numInboxItems = result.data;
    })
    
  }

  // Called when user hits enter or presses submit. 
  // Should clear text box and save the current text as inbox item
  async saveInboxItem(){
    if (this.captureText.length == 0)
      return;
    new EntryService().createEntry(this.captureText, this.context).then(() => this.updateInboxBadge());
    document.getElementById("captureTextInput")?.focus();
    this.captureText = "";
    this.numInboxItems += 1;
  }

  toggleEnterAction() : void{
    this.submitOnEnterKey = !this.submitOnEnterKey;
  }

  log(logString : string) : void{
    this.logOutput += logString + "<br>"; 
  }

  clearLog() : void {
    this.logOutput = "";
  }

  checkForEnter(e) : void{
    if (e.key === "Enter" && this.submitOnEnterKey) {
      this.saveInboxItem();
      e.preventDefault(); // stops it from still adding an enter character
    }
    
  }
  // NOTE: Also saves the current text
  goToProcessInbox() {
    this.saveInboxItem().then(() => router.push({name: "Process"}));
    
  }

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.capture {
  align-content: center;
}

</style>
