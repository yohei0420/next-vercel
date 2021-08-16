import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'
import styles from '../../components/layout.module.css'
import Image from 'next/image'

export default function FirstPost() {
  return ( 
    <Layout> 
      <Head>
        <title>祭り紹介ページ</title>
       </Head> 
       <h1 className={styles.title}>
         お祭り紹介
      </h1>
      <div className={styles.container}>
       <h2>青森ねぶた祭り</h2>
       <p>青森の祭りといえば真っ先に思いつくでしょう！東北三大祭りの一つです。前夜祭があったり、誰でも気軽に踊り手になれたりと青森観光をするなら外せないものの一つです。</p>
       <h2>八戸三社大祭</h2>
       <p>ねぶた祭に並ぶ有名な青森のお祭りです‼ユネスコ無形文化遺産にも登録されるほど歴史が長いお祭りです。虎舞や法霊神楽など見どころがたくさんあります。</p>
       <h2>黒石よされ</h2>
       <p>江戸時代の風情を残す小見世通りを、多くの踊り手が埋め尽くす様子は情緒たっぷりで、タイムスリップしたような感覚を味わえます。</p>
       <h2>立佞武多</h2>
       <p>毎年8月4日から8日まで開催されます。こちらの特徴はなんといっても、山車の高さ。最大で23mもあり、なんと7階建てのビルに相当します。1年をかけて製作される巨大な山車3台を含む、計15台ほどが出陣し、「ヤッテマレ、ヤッテマレ」の掛け声とともに、街中を練り歩く様子は、圧巻のひと言です。</p>
      </div>
     <Image src="/mikoshi.jpg" width={200} height={200} className={styles.image}/>
     <Image src="/dashi.jpg" width={200} height={200} className={styles.image1}/>
     <h2>
       <Link href="/">
         <a>Home</a>
        </Link>
       </h2>
       <p></p>
    </Layout>
  )
}