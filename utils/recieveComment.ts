export async function getComments(blog:string) {
    const res = await fetch(`${process.env.HOST_URL}/api/comment?post=${blog}`, {cache:'no-cache'});
  
    if (!res.ok) throw new Error("failed");
  
    return res.json();
  }