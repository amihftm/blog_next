export async function getBlogInfo(blog:string) {
    const res = await fetch(`${process.env.HOST_URL}/api/categories/getCatInfo?blog=${blog}`, {cache:'no-cache'});
  
    if (!res.ok) throw new Error("failed");
  
    return res.json();
  }