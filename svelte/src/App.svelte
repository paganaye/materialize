<script context="module">
  Waves.init();
</script>

<script lang="ts">
  import * as Waves from 'node-waves';
  import 'node-waves/dist/waves.min.css';
  import Button from './Button.svelte';
  import Checkbox from './Checkbox.svelte';
  import Col from './Col.svelte';
  import Row from './Row.svelte';
  let x = false;

  let newStyle = document.createElement('style');
  document.body.append(newStyle);

  function changeH1() {
    x = !x;
    newStyle.innerText = 'h2 { color: ' + (x ? '#f23' : '#54f') + ' }';
  }
</script>

<style>

</style>



<main>
  <!-- svelte-ignore a11y-missing-attribute -->
  <div class="row">
    <h2>Materialize-css buttons rewritten in svelte</h2>
    <pre>    
&lt;Button leftIcon="cloud"&gt;Hello&lt;/Button&gt;
&lt;Button rightIcon="cloud"&gt;Hello&lt;/Button&gt;
&lt;Button leftIcon="cloud" rightIcon="cloud"&gt;Hello&lt;/Button&gt;
  </pre>
    <div>
    <Button leftIcon="cloud">Hello</Button>
    <Button rightIcon="cloud">Hello</Button>
    <Button leftIcon="cloud" rightIcon="cloud">Hello</Button>
  </div>
  <div>
    <h2>Materialize-css checkboxes rewritten in svelte</h2>
    <pre>
&lt;Checkbox filledIn={true} checked={false}&gt;Hello1&lt;/Checkbox&gt;
&lt;Checkbox filledIn={true} checked={true}&gt;Hello1&lt;/Checkbox&gt;
... </pre>
    <Checkbox filledIn={true} checked={false}>Hello1</Checkbox>
    <Checkbox filledIn={true} checked={true}>Hello2</Checkbox>
    <Checkbox filledIn={true} checked={null}>Hello3</Checkbox>
    <Checkbox checked={false}>Hello4</Checkbox>
    <Checkbox checked={true}>Hello5</Checkbox>
    <Checkbox checked={null}>Hello6</Checkbox>

    <Checkbox>Hello7</Checkbox>
    <Checkbox checked={false} disabled={true}>Hello8</Checkbox>
    <Checkbox checked={true} disabled={true}>Hello9</Checkbox>
    <Checkbox checked={undefined} disabled={true}>Hello10</Checkbox>
  </div>

  <Row>
    <Col size={12}>This div is 12-columns wide on all screen sizes</Col>
    <Col size={{s:12, m:6}}>6-columns (one-half)</Col>
    <Col size={{s:12, m:6}}>6-columns (one-half)</Col>
  </Row>
          
</main>
