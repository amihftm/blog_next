export async function getTopPosts(cat:string) {
    const res = await fetch(`${process.env.HOST_URL}/api/post/top?cat=${cat}`, {cache:'no-cache'});
  
    if (!res.ok) throw new Error("failed");
  
    return res.json();
  }