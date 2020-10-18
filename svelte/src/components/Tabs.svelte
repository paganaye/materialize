<script lang="ts">
import { onMount } from "svelte";

let selectedTabHeight=100;
  export let tabs: string[]
  export let selectedTab = 0;
	import { slide } from 'svelte/transition';

  let indicatorLeft=0, indicatoWidth = 100;

  function onTabClick(e: MouseEvent, tabNo: number) {    
    let target = (e.target as HTMLAnchorElement).parentElement as HTMLUListElement;
    selectTab(target, tabNo);
  }

  let ulElement: HTMLUListElement;

  onMount(()=>{
    selectTab((ulElement as any).children[selectedTab], selectedTab);
  })

  function selectTab(target: HTMLUListElement, tabNo: number) {
    selectedTab = tabNo;
    let elt = document.getElementById("tab-content-"+tabs[tabNo]);
    elt.style.display='block';
    selectedTabHeight = elt.clientHeight;
    indicatorLeft = target.offsetLeft
    indicatoWidth = target.offsetWidth;
  }
  function onTransitionEnd(e) {
    let t = e.target;
    let isSelected = t.classList.contains("selected")
    if (!isSelected) t.style.display="none";    
  }
</script>

<style lang="scss">
  ul {
    display:flex;
    position: relative;
    padding: 0;
    overflow-x: auto;
    width: 100%;
  }
  li {
    text-transform: uppercase;
    white-space: nowrap;
    list-style-type: none;
    flex-grow: 1;
    text-align: center;
    display: inline-block;
    line-height: 48px;
  }
  li a {
    text-decoration: none;
    padding: 0 12px;
    color: rgba(238,110,115,0.7);
    display: block;
    width: 100%;
    height: 100%;
    font-size: 14px;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  li.indicator {
    height: 2px;
    background-color: #f6b2b5;
    will-change: left, right;
    bottom:0;
    position: absolute;
    color: rgba(238,110,115,0.7);
    transition: color .28s ease, background-color .28s ease, left 0.5s ease, width 0.5s ease;
    text-decoration: none;
  }
  div.tab-content {
    transition: opacity 0.5s linear;
    opacity: 0.0;
    position: absolute;
  }
  div.tab-content.selected {
    opacity: 1;
    display: block;
  }
  div.tab-content-containers {
    position: relative;
    transition: height 0.5s ease;
  }
</style>
<div class="row">
  <div class="col s12">
    <ul class="tabs" bind:this={ulElement}>
      {#each tabs as tab,i }
        <li class="tab col"><a href="#tab-content-{tab}" on:click|preventDefault={(e)=>onTabClick(e, i)}>{tab}</a></li>
      {/each}
      <li class="indicator" transition:slide style="left: {indicatorLeft}px; width: {indicatoWidth}px;" />
    </ul>
  </div>
  <div class="tab-content-containers" style="height:{selectedTabHeight}px">
    {#each tabs as tab,i }
      <div id="tab-content-{tab}" class="tab-content" class:selected={i==selectedTab} on:transitionend={onTransitionEnd}>
        <slot tab={i} />
      </div>
    {/each}
  </div>
</div>
