import fs from 'node:fs'

export default function(filename) {
    console.log('filename', filename)
    return fs.statSync(filename).mtime.toISOString()
}