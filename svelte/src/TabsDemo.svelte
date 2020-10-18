<script lang="ts">
//  export let disabled: boolean = false;
  import Tabs from './Tabs.svelte';
  let tab: String = "";
</script>

<style lang="scss">
</style>

<h2>Tabs</h2>      
<Tabs tabs={["tab1","tab2","tab3"]} let:tab={tab}>
  {#if tab=="tab1"}
    <p>tab one</p>
  {:else if tab=="tab2"}
    <p>tab two</p>
    <p>tab two</p>
  {:else if tab=="tab3"}
    <p>tab three</p>
    <p>tab three</p>
    <p>tab three</p>
  {/if}
</Tabs>
<p>some text after</p>


