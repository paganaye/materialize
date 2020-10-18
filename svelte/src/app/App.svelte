<script lang="ts">
  import Tabs from '../components/Tabs.svelte';
  import Container from '../components/Container.svelte';
  import AboutPage from './AboutPage.svelte';
  import ButtonsPage from './ButtonsPage.svelte';
  import CheckboxesPage from './CheckboxesPage.svelte';
  import ResponsiveGridPage from './ResponsiveGridPage.svelte';
  let tab: number = 0;
</script>
<Container>
  <h2>Svelte Material</h2>      
  <p>by Pascal GANAYE</p>
  <Tabs tabs={["About","Buttons","Checkboxes","Responsive"]} let:tab={tab}>
    {#if tab==0}
      <AboutPage />
    {:else if tab==1}
      <ButtonsPage />
    {:else if tab==2}
      <CheckboxesPage />
    {:else if tab==3}
      <ResponsiveGridPage />
    {/if}
  </Tabs>
</Container>  