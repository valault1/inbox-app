<template>
  <div class="settings">
    Welcome to settings!
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
export default class SettingComponent extends Vue {

}
</script>

<style scoped lang="scss">


</style>