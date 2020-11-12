const db = require('./_database')

async function updateData() {
    await db.connect()

    await db.query("update participante set nome = 'Carlos Augusto' where id = 1")
    await db.query('delete from evento_participante where id = 1')

    await db.end()

    console.log('Dados atualizados e removido')
}

updateData()