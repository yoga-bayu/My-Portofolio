// components/SeoHead.js
import Head from 'next/head';

export default function SeoHead({ title, description, keywords }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="UTF-8" />
      <meta name="robots" content="index, follow" />
    </Head>
  );
}
