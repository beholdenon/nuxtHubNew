export default eventHandler(async (event) => {
  const { id } = event.context.params || {}
  const db = hubDatabase();
  await db.prepare('DELETE FROM semesters WHERE id=?1').bind(id).run();
  return {};
})
