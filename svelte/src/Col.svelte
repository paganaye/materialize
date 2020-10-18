<script lang="ts">
import type { ResponsiveValue, ResponsiveValueInterface } from "./types";

  export let size: ResponsiveValue = 12;
  export let offset: ResponsiveValue = undefined;
  export let push: ResponsiveValue = undefined;
  export let pull: ResponsiveValue = undefined;

  function addClass(classes: string[], prefix: string, value: ResponsiveValue) {
    if (!value) return;
    switch(typeof value) {
      case 'string': 
      case 'number':
        classes.push(prefix + 's' + value);
        break;
      case "object":
        let v = value as ResponsiveValueInterface;
        if (v.s) classes.push(prefix + 's' + v.s)
        if (v.m) classes.push(prefix + 'm' + v.m)
        if (v.l) classes.push(prefix + 'l' + v.l)
        if (v.xl) classes.push(prefix + 'xl' + v.xl)
        break;
    }
  }

  function getClass() {
    let classes:string[]=['col'];
    addClass(classes, '', size);
    addClass(classes, 'offset-', offset);
    addClass(classes, 'push-', push);
    addClass(classes, 'pull-', pull);
    return classes.join(' ');
  }


</script>

<style lang="scss">
.col {  
  margin-left: auto;
  left: auto;
  right: auto;
  border:1px dotted firebrick;
  float: left;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 0 .75rem;
  min-height: 1px;
}
</style>


<div class={getClass()}>
  <slot />
</div>