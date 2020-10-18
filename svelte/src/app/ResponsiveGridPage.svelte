<script lang="ts">
  import Col from '../components/Col.svelte';
  import Row from '../components/Row.svelte';
</script>

<style>
  td {
    border: 1px dotted red;
    text-align: center;
  }
</style>
<h2>Responsive Grid System</h2>
<p>For now I kept a cut down version of the original Materialize grid system. It is based on bootstrap 3, I believe.</p>
<p>The size 6 columns below should be 12 wide on small screens</p>
<pre>{ `<Row>
  <Col size={12}>...</Col>
  <Col size={{s:12, m:6}}>...</Col>
  <Col size={{s:12, m:6}}>...</Col>
</Row>` }
</pre>
<p>This will loke like this on a large screen:</p>
<table><tr><td colspan="2">1</td></tr><tr><td>2</td><td>3</td></tr></table>
<p>And like that on a narrow screen:</p>
<table><tr><td>1</td></tr><tr><td>2</td></tr><tr><td>3</td></tr></table>
<p>You can try it below if you want to resize or rotate your screen.</p>
<Row>
    <Col size={12}>This div is 12-columns wide on all screen sizes</Col>
    <Col size={{s:12, m:6}}>6-columns (one-half)</Col>
    <Col size={{s:12, m:6}}>6-columns (one-half)</Col>
  </Row>  
  <p>Ultimately we should perhaps migrate to bootstrap 4 grid system. It is based on flexbox, is more flexible and allows variable width content.</p>





