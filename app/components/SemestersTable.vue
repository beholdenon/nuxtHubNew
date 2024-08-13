<script setup lang="ts">
const { data: semesters, refresh } = await useFetch('/api/semesters')
const sessions = ['Fall', 'Winter']
const years = ['2024', '2025', '2026', '2027', '2028']

const columns = [
{
  key: 'id',
  label: 'ID',
  class: 'bg-slate-600'
},
{
  key: 'session',
  label: 'Session',
  class: 'bg-slate-600'
}, {
  key: 'year',
  label: 'Year',
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
    click: () => deleteSemester(row.id)
  }]
]

async function deleteSemester (id){
  if (!id) return;
  await useFetch('/api/semesters/' + id, {
    method: 'DELETE'
  });
  await refresh();
}

</script>

<template>
  <div>
    <UTable :rows="semesters" :columns="columns" :ui="{ th: { color: 'bg-black' }}" class="border border-slate-800">
    


    <template #actions-data="{ row }">
      <UDropdown :items="items(row)">
        <UButton icon="i-heroicons-ellipsis-horizontal-20-solid"  color="primary" variant="solid"/>
      </UDropdown>
    </template>
  </UTable>

  </div>
</template>


