<script>
  import { ping } from "./lib";
  export let data = [];

  ping().then(_data => {
    console.log(_data);
    data = _data;
  });
  let headers = ["Name", "imige", "Value"];
</script>
<style global>
</style>

<table class="border-collapse table-auto w-full whitespace-no-wrap bg-white table-striped relative">
    <thead>
      <tr class="text-left">
        {#each headers as item, i}
          <th
            class="bg-gray-100 sticky top-0 border-b border-gray-200 px-6 py-2 text-gray-600 font-bold tracking-wider uppercase text-xs"
            >{item}</th
          >
        {/each}
      </tr>
    </thead>
{#each data as d}
<tr class="border-dashed border-b border-gray-200 hover:bg-gray-100 cursor-pointer">
<td>{d.name} <small>{d.symbol}</small></td>
<td><img src={d.image.thumb} alt={d.name}/></td>
<td>
{d.zar}
</td>
</tr>
{/each}

</table>
<pre class="bg-red-300">
{JSON.stringify(data[0],null,2)}
</pre>
