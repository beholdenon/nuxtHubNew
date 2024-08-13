<script setup lang="ts">
import type { FormError, FormErrorEvent, FormSubmitEvent } from '#ui/types'

const sessions = ['Fall', 'Winter']
const years = ['2024', '2025', '2026', '2027', '2028']

const state = reactive({
  session: undefined,
  year: undefined
})

const validate = (state: any): FormError[] => {
  const errors = []
  if (!state.session) errors.push({ path: 'session', message: 'Required' })
  if (!state.year) errors.push({ path: 'year', message: 'Required' })
  return errors
}

async function onSubmit (event: FormSubmitEvent<any>) {
  // Do something with data
  console.log(event.data);
  console.log(state.year)
  await useFetch('/api/semesters', {
    method: 'POST',
    body: {
      session: state.session,
      year: state.year
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
       <UFormGroup label="Session" name="session">
        <USelect v-model="state.session" :options="sessions" />
      </UFormGroup>
      <UFormGroup label="Year" name="year">
        <USelect v-model="state.year" :options="years" />
      </UFormGroup>
      <UButton type="submit">
      Submit
    </UButton>
    </UForm>
   

  </div>
</template>


