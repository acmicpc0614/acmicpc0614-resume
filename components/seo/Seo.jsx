import Head from "next/head";

const Seo = () => {
  const title = "Eugene Garrett - Software Engineer";
  const description = "I'm Eugene Garrett and a Software Engineer";
  const image = "/images/about/avatar.jpg";
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description}/>

      <meta itemProp="name" content={title}/>
      <meta itemProp="description" content={description}/>
      <meta itemProp="image" content={image}/>

      <meta property="og:type" content="website"/>
      <meta property="og:title" content={title}/>
      <meta property="og:description" content={description}/>
      <meta property="og:image" content={image}/>

      <meta name="twitter:card" content="summary_large_image"/>
      <meta name="twitter:title" content={title}/>
      <meta name="twitter:description" content={description}/>
      <meta name="twitter:image" content={image}/>
    </Head>
  )

};

export default Seo;
