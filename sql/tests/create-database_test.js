export const tests = []
const t = (f) => tests.push(f)
import fs from 'fs'
import path from 'path'

t(({ eq }) => {
  const filePath = path.resolve(__dirname, 'create_database.sql')

  const exists = fs.existsSync(filePath)
  eq(exists, true)

  if (exists) {
    const content = fs.readFileSync(filePath, 'utf8').trim()
    eq(content, 'CREATE DATABASE library;')
  }
})
