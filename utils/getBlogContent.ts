export async function getBlogContent(slug:string) {
    const res = await fetch(`${process.env.HOST_URL}/api/post/?post=${slug}`, {cache:'no-cache'});
  
    return res;
  }