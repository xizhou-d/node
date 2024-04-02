import crypto from 'node:crypto'
import fs from 'node:fs'

export default function(filename) {
    return crypto.createHash('sha256').update(fs.readFileSync(filename)).digest('hex')
}