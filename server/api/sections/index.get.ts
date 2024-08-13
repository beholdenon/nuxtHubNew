export default eventHandler(async () => {
  const db = hubDatabase()

  // TODO: move it a a Server Task
  await db.exec('CREATE TABLE IF NOT EXISTS sections (id INTEGER PRIMARY KEY, semester_id INTEGER, section_number TEXT, created_at INTEGER)')

  const { results } = await db.prepare('SELECT sections.id, sections.semester_id, sections.section_number, sections.created_at, semesters.session + ' ' + semesters.year AS semester  FROM sections INNER JOIN semesters ON semesters.id = sections.semester_id ORDER BY sections.created_at DESC').all()
 
  return results
})
