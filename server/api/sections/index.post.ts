export default eventHandler(async (event) => {
  const { semester_id, section_number } = await readBody(event)
  const db = hubDatabase()
  await db
    .prepare('INSERT INTO sections (semester_id, section_number, created_at) VALUES (?1, ?2, ?3)')
    .bind(semester_id, section_number, Date.now())
    .run()

  return {}
})
