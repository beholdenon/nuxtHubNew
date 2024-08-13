export default eventHandler(async (event) => {
  const { session, year } = await readBody(event)
  const db = hubDatabase()
  await db
    .prepare('INSERT INTO semesters (session, year, created_at) VALUES (?1, ?2, ?3)')
    .bind(session, year, Date.now())
    .run()

  return {}
})
