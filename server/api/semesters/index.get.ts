export default eventHandler(async () => {
  const db = hubDatabase()

  // TODO: move it a a Server Task
  await db.exec('CREATE TABLE IF NOT EXISTS semesters (id INTEGER PRIMARY KEY, session TEXT, year TEXT, created_at INTEGER)')

  const { results } = await db.prepare('SELECT * FROM semesters ORDER BY created_at DESC').all();
  results.forEach(semester => {
    semester.fullName = semester.session + ' ' + semester.year;
  })
  console.log(results);
  return results
})
