<script lang="ts">
  import Button from '../components/Button.svelte';
  let x = false;

  let newStyle = document.createElement('style');
  document.body.append(newStyle);

  let buttonClicked = 0;
  function onclick(){
    buttonClicked+=1;
  }
</script>


<style>
</style>

<main>
  <!-- svelte-ignore a11y-missing-attribute -->
  <div class="row">
    <h3>Materialize-css buttons</h3>
    <p>Here, I reproduced the button behaviour of Materialcss in svelte.</p>
    <p>We have the nice looking materializecss and also have the super simple svelte binding.</p>

    <b>Full HTML Code:</b>
    <pre>   {`<Button leftIcon="cloud" on:click={onclick}>Save to cloud</Button>
<Button leftIcon="add_a_photo" rightIcon="access_time" on:click={onclick}>Add Photo</Button>
<p>{#if buttonClicked>=1} {buttonClicked} buttons clicked
  {:else}try clicking. This is using the same wave effect than Materialize.{/if}</p>`} 
  </pre>
  <b>Full Javascript code:</b>
  <pre> {`<script>
  let buttonClicked = 0;
  function onclick(){ buttonClicked+=1; }
</script>`}</pre>
    <div>
    <Button leftIcon="cloud" on:click={onclick}>Save to cloud</Button>
    <Button leftIcon="add_a_photo" rightIcon="access_time" on:click={onclick}>Add Photo</Button>
    <p>{#if buttonClicked>=1} {buttonClicked} buttons clicked
    {:else}try clicking. This is using the same wave effect than Materialize.{/if}</p>
  </div>
  <div>

 
</main>
