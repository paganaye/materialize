<script lang="ts">
  import Col from '../components/Col.svelte';
  import Row from '../components/Row.svelte';
</script>

<style>
  td {
    padding:20px;
    border: 1px dotted red;
    text-align: center;
  }
</style>
<h3>Responsive Grid System</h3>
<p>I show here a cut down version of the original Materialize grid system. It is based on bootstrap 3, I believe.</p>
<p>In materializecss, a 'row' has always 12 columns. It can then contains up to 12 'col'.</p>
<p>In this Svelte-Materialize experiment, I kept the same concept.</p>
<p>The use of specific Row and Col elements look nice doesn'it?</p>
<pre>{ `<Row>
  <Col size={12}>One</Col>
  <Col size={{s:12, m:6}}>Two</Col>
  <Col size={{s:12, m:6}}>Three</Col>
</Row>` }
</pre>
<p>Here we say than "One" is shown full screen width and then Two and Three are shown full width on a small screen and half width on medium or larger screens.</p>
<p>So it will look like this on a large screen:</p>
<table><tr><td colspan="2">One</td></tr><tr><td>Two</td><td>Three</td></tr></table>
<p>And like that on a narrow screen:</p>
<table><tr><td>One</td></tr><tr><td>Two</td></tr><tr><td>Three</td></tr></table>
<p>You can try it below if you want to resize or rotate your screen.</p>
<Row>
    <Col size={12}>This div is 12-columns wide on all screen sizes</Col>
    <Col size={{s:12, m:6}}>6-columns (one-half)</Col>
    <Col size={{s:12, m:6}}>6-columns (one-half)</Col>
</Row>  





