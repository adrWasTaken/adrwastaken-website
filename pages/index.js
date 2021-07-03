import Head from 'next/head'
import { getBlogPosts } from '../lib/blog';

import Page__PolkaDots from '../components/home/features/polka/Page'

import styles from './index.module.css'
import Section from '../components/structure/Section';
import { useRouter } from 'next/router'

export default function Home({ blogPosts, onChangeThemeButtonClick }) {
  const query = useRouter().query || {}
  const from404 = query.from === "404"

  return (
    <div>
      <Head>
        <title>adr</title>
        <meta name="description" content="Portfolio and blog for adr." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className={styles.ChangeThemeButton} onClick={onChangeThemeButtonClick}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 180"><rect width="180" height="180" rx="13.55"/><circle cx="90" cy="90" r="18.39"/><circle cx="135.12" cy="45.24" r="18.39"/><circle cx="45.12" cy="135.24" r="18.39"/></svg>
        </div>

        {
          from404 ? <Section id="404">
            <p style={{paddingTop:10,paddingBottom:10}}>
              Sorry, that page doesn't exist.
            </p>
          </Section> : <></>
        }

        <Page__PolkaDots bio={
          /* Biography */ "Hey! I'm a student software engineer working on Minecraft plugins, web development, and more."
        } socials={{
          'twitter': ['adrWasTaken', 'https://github.com/adrWasTaken', (
            /* From Icon Monstr */ <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          )],
          'discord': ['adr#0169', 'https://discord.com', (
            /* From Icon Monstr */ <path d="M19.54 0c1.356 0 2.46 1.104 2.46 2.472v21.528l-2.58-2.28-1.452-1.344-1.536-1.428.636 2.22h-13.608c-1.356 0-2.46-1.104-2.46-2.472v-16.224c0-1.368 1.104-2.472 2.46-2.472h16.08zm-4.632 15.672c2.652-.084 3.672-1.824 3.672-1.824 0-3.864-1.728-6.996-1.728-6.996-1.728-1.296-3.372-1.26-3.372-1.26l-.168.192c2.04.624 2.988 1.524 2.988 1.524-1.248-.684-2.472-1.02-3.612-1.152-.864-.096-1.692-.072-2.424.024l-.204.024c-.42.036-1.44.192-2.724.756-.444.204-.708.348-.708.348s.996-.948 3.156-1.572l-.12-.144s-1.644-.036-3.372 1.26c0 0-1.728 3.132-1.728 6.996 0 0 1.008 1.74 3.66 1.824 0 0 .444-.54.804-.996-1.524-.456-2.1-1.416-2.1-1.416l.336.204.048.036.047.027.014.006.047.027c.3.168.6.3.876.408.492.192 1.08.384 1.764.516.9.168 1.956.228 3.108.012.564-.096 1.14-.264 1.74-.516.42-.156.888-.384 1.38-.708 0 0-.6.984-2.172 1.428.36.456.792.972.792.972zm-5.58-5.604c-.684 0-1.224.6-1.224 1.332 0 .732.552 1.332 1.224 1.332.684 0 1.224-.6 1.224-1.332.012-.732-.54-1.332-1.224-1.332zm4.38 0c-.684 0-1.224.6-1.224 1.332 0 .732.552 1.332 1.224 1.332.684 0 1.224-.6 1.224-1.332 0-.732-.54-1.332-1.224-1.332z"/>
          )]

        }} blogPosts={
          blogPosts
        }/>



        {/* <h1>adr</h1>
        <p>Hey! I'm a student software engineer working on Minecraft plugins, web development, and more.</p>
        {
          blogPosts.map(post => {
            return (
              <ArticlePreview data={post}/>
            )
          })
        } */}
      </main>

      <div>
      </div>
    </div>
  )
}

export async function getStaticProps(context) {
  const blogPosts = getBlogPosts();

  return {
    props: {
      blogPosts
    }
  }
}