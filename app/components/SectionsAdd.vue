<script setup lang="ts">
import type { FormError, FormErrorEvent, FormSubmitEvent } from '#ui/types'
const { data: semesters, refresh } = await useFetch('/api/semesters')


const state = reactive({
  semester_id: undefined,
  section_number: undefined
})

const validate = (state: any): FormError[] => {
  const errors = []
  if (!state.semester_id) errors.push({ path: 'semester_id', message: 'Required' })
  if (!state.section_number) errors.push({ path: 'section_number', message: 'Required' })
  return errors
}

async function onSubmit (event: FormSubmitEvent<any>) {
  // Do something with data
  await useFetch('/api/sections', {
    method: 'POST',
    body: {
      semester_id: state.semester_id,
      section_number: state.section_number
    }
  })
  await refresh()
}

async function onError (event: FormErrorEvent) {
  const element = document.getElementById(event.errors[0].id)
  element?.focus()
  element?.scrollIntoView({ behavior: 'smooth', block: 'center' })
}
</script>

<template>
  <div>
 <UForm :validate="validate" :state="state" class="space-y-4" @submit="onSubmit" @error="onError">
       <UFormGroup label="Semester" name="semester_id">
        <USelect v-model="state.semester_id" :options="semesters" option-attribute="fullName" value-attribute="id" />
      </UFormGroup>
      <UFormGroup label="Section Id" name="section_number">
        <UInput v-model="state.section_number" />
      </UFormGroup>
      <UButton type="submit">
      Submit
    </UButton>
    </UForm>
   

  </div>
</template>


