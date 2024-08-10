export async function writePosts(data: string) {
    const res = await fetch(`/api/posts`,{method:'POST', body:data.toString()})
    return res
}