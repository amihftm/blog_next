export async function writeComment(data: string) {
    const res = await fetch(`/api/comment`,{method:'POST', body:data.toString()})
    return res
}