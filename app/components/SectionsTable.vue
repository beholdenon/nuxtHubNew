<script setup lang="ts">
const { data: sections, refresh } = await useFetch('/api/sections')

const columns = [
{
  key: 'id',
  label: 'ID',
  class: 'bg-slate-600'
},
{
  key: 'section_number',
  label: 'Section ID',
  class: 'bg-slate-600'
}, {
  key: 'semester',
  label: 'Semester',
  class: 'bg-slate-600'
},
{
  key: 'actions',
  class: 'bg-slate-600'
}]

const items = (row) => [
  [{
    label: 'Delete',
    icon: 'i-heroicons-trash-20-solid',
    click: () => deleteSection(row.id)
  }]
]

async function deleteSection (id){
  if (!id) return;
  await useFetch('/api/sections/' + id, {
    method: 'DELETE'
  });
  await refresh();
}

</script>

<template>
  <div>
    <UTable :rows="sections" :columns="columns" :ui="{ th: { color: 'bg-black' }}" class="border border-slate-800">
    


    <template #actions-data="{ row }">
      <UDropdown :items="items(row)">
        <UButton icon="i-heroicons-ellipsis-horizontal-20-solid"  color="primary" variant="solid"/>
      </UDropdown>
    </template>
  </UTable>

  </div>
</template>


