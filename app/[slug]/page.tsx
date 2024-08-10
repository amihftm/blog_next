import ArticleTemp from '@/components/article/Article';
import React from 'react'

function SignlePage({params}: {params:{slug:string}}) {
  return (
    <ArticleTemp slug={params.slug}/>
  );
}

export default SignlePage