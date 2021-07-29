<template>
  <div class="process" v-if="isPopulated">
    <b-container id="inbox">
      <b-row style="justify-content: center">
        <b-button @click="goToProcessInbox()">Write an Entry</b-button>
      </b-row>
      
      
        <b-jumbotron class="jumbo">
          {{entries.length > 0 ? entries[currentIndex].content : "No more entries. :)"}}
        </b-jumbotron>

      
      <b-row style="justify-content: center">
        <label v-if="entries.length > 0">{{currentIndex + 1}}/{{entries.length}}</label>
      </b-row>

      <b-row style="justify-content: center">
        <b-button @click="back()">back</b-button>
        <b-button @click="next()">next</b-button>
        <b-button @click="archiveCurrentEntry()" variant="danger">Archive</b-button>
      </b-row>
      
      
     <!-- <b-card  v-for="entry in entries" :key="entry.id">
        {{ entry.content }}
      </b-card>-->
    </b-container>
    
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import EntryService from '@/services/EntryService';
import { SwipeList, SwipeOut } from 'vue-swipe-actions';
import InboxEntry from '@/models/InboxEntry';
import router from '@/router/index';


@Component({
  components: {
    SwipeOut,
    SwipeList
  },
})
export default class ProcessComponent extends Vue {
  entries : InboxEntry[] = [];
  isPopulated = false;
  currentIndex = 0;
  mounted() {
    this.populateEntries();
  }
  populateEntries() {
    new EntryService().getAllEntries().then((result) => {
      this.entries = result.data;
      this.isPopulated = true;
    });
  }

  goToProcessInbox() {
    router.push({name: "Capture"})
  }

  archiveCurrentEntry() {
    let entry = this.entries[this.currentIndex];
    this.entries = this.entries.filter(i => i !== entry);
    new EntryService().archiveEntry(entry.id);
    if (this.currentIndex > this.entries.length - 1) {
      this.currentIndex -= 1;
    }
    if (this.currentIndex < 0) {
      this.currentIndex = 0;
    }
  }

  next() {
    if (this.currentIndex < this.entries.length - 1) {
      this.currentIndex += 1;
      console.log("increasing index");
    }
      
  }

  back() {
    if (this.currentIndex > 0)
      this.currentIndex -= 1;
  }

}
</script>

<style scoped lang="scss">

.entry {
  align-content: center;
  background-color: $primary;
}

.delete-button {
  background-color: $danger;
}

label {
  color: $primary;
}


.jumbo {
  background-color: gray;
  color: black;
}

</style>