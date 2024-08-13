<script setup lang="ts">
const route = useRoute()

const links = [{
  label: 'Admin',
  icon: 'i-heroicons-chart-bar',
  to: '/admin/semesters'
  }
]

const adminLinks = [
{
  label: 'Semesters',
  icon: 'i-heroicons-book-open',
  to: '/admin/semesters'
},
{
  label: 'Add Semester',
  icon: 'i-heroicons-book-open',
  to: '/admin/semesters/add'
},
{
  label: 'Sections',
  icon: 'i-heroicons-book-open',
  to: '/admin/sections'
},
{
  label: 'Add Section',
  icon: 'i-heroicons-book-open',
  to: '/admin/sections/add'
}
]
</script>

<template>
  <div>
  <UHorizontalNavigation :links="links" class="flex justify-center border-b border-gray-200 dark:border-gray-800 bg-slate-800 sticky top-0 b-5"  />
  <UContainer>
  <UDashboardToolbar >
    <UHorizontalNavigation :links="adminLinks" class="justify-center" />
  </UDashboardToolbar>
    <slot />
    </UContainer>
  </div>
</template>