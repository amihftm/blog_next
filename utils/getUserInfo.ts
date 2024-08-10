export async function getUserInfo(userId:string) {
    const res = await fetch(`${process.env.HOST_URL}/api/userinfo/?user=${userId}`, {cache:'no-cache'});
    const res_json = await res.json() as {id:string, name: string, image:string}
  
    if (!res.ok) throw new Error("failed");
  
    return res_json;
  }
