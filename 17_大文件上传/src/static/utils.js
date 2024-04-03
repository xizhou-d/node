

export function fileSlice(file, size = 1 * 1024 * 1024) {
    const chunks = []
    for (let i = 0; i < file.size; i += size) {
        // file 之所以有 slice 方法，是因为 继承了更底层的 Blob 对象
        chunks.push(file.slice(i, i + size))
    }

    return chunks
}

export function uploadFiles(chunks) {
    const resLists = []
    for (let i = 0; i < chunks.length; i++) {
        const formData = new FormData()
        formData.append('index', i)
        formData.append('filename', 'fengjing')
        formData.append('photo', chunks[i])

        resLists.push(
            fetch('/upload/bigFile', {
                method: 'POST',
                body: formData
            })
        )
    }

    return resLists
}