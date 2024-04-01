const path = require('path')
const fs = require('fs')


async function method1() {
    const filename1 = path.resolve(__dirname, './files/a.txt')
    const filename2 = path.resolve(__dirname, './files/a1.txt')

    console.time('方式一')
    const content = await fs.promises.readFile(filename1)
    await fs.promises.writeFile(filename2, content)
    console.timeEnd('方式一')
}

async function method2() {
    const filename1 = path.resolve(__dirname, './files/a.txt')
    const filename2 = path.resolve(__dirname, './files/a1.txt')

    console.time('方式一')
    const fr = fs.createReadStream(filename1, {
        encoding: 'utf-8',
        highWaterMark: 60 * 1024
    })

    const fw = fs.createWriteStream(filename2)

    fr.on('data', (chunk) => {
        let flag = fw.write(chunk)
        if (!flag) {
            fr.pause()
        }
    })

    fw.on('drain', () => {
        fr.resume()
    })
    fr.on('close', () => {
        fw.end()
        console.timeEnd('方式一')
        console.log('复制完成')
    })
}


async function method3() {
    const filename1 = path.resolve(__dirname, './files/a.txt')
    const filename2 = path.resolve(__dirname, './files/a1.txt')

    console.time('方式一')
    const fr = fs.createReadStream(filename1, {
        encoding: 'utf-8',
        highWaterMark: 60 * 1024
    })

    const fw = fs.createWriteStream(filename2)

    fr.pipe(fw)
}

method3()

