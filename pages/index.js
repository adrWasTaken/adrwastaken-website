import Head from 'next/head'
import { getBlogPosts } from '../lib/blog';
import Section from '../components/structure/Section';
import LeftRightSplit from '../components/structure/LeftRightSplit';
import Side from '../components/structure/Side';
import PolkaDotArray from '../components/home/features/polka/PolkaDotArray'
import QueryController from '../components/structure/QueryController';

export default function Home({ blogPosts }) {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Section id="about">
          <LeftRightSplit maxWidth={1800}>

            {/* Controller for left panel */}
            <QueryController queries={{
              
              /*********/
              '(min-width:400px)': <Side key="left" side="left" style={{maxWidth:360}}>
                <QueryController queries={{
                  '(min-width: 800px)': <div style={{paddingLeft:100,paddingTop:80}}><h1 style={{fontSize:75}}>adr</h1><p style={{fontSize:14,lineHeight:2,paddingTop:20}}>Hey! I'm a student software engineer working on Minecraft plugins, web development, and more.</p></div>,
                  '(min-width: 600px)': <div style={{paddingLeft:75,paddingTop:80}}><h1 style={{fontSize:75}}>adr</h1><p style={{fontSize:14,lineHeight:2,paddingTop:20}}>Hey! I'm a student software engineer working on Minecraft plugins, web development, and more.</p></div>,
                  '(min-width: 360px)': <div style={{paddingLeft:50,paddingTop:80}}><h1 style={{fontSize:75}}>adr</h1><p style={{fontSize:14,lineHeight:2,paddingTop:20}}>Hey! I'm a student software engineer working on Minecraft plugins, web development, and more.</p></div>,
                  '': <div style={{paddingLeft:35,paddingRight:35,paddingTop:80}}><h1 style={{fontSize:75}}>adr</h1><p style={{fontSize:14,lineHeight:2,paddingTop:20}}>Hey! I'm a student software engineer working on Minecraft plugins, web development, and more.</p></div>
                }}/>
              </Side>,

              /*********/
              '': <div style={{width:'100%',display:'block',paddingLeft:50,paddingRight:50,paddingTop:80}}>
                <h1 style={{fontSize:75}}>adr</h1><p style={{fontSize:14,lineHeight:2,paddingTop:20}}>Hey! I'm a student software engineer working on Minecraft plugins, web development, and more.</p>                
              </div>
            }}/>

            {/* Controller for right panel */}
            <QueryController queries={{
              '(min-width:600px)': <Side key="right" side="right" style={{maxWidth:360,paddingRight:100,paddingTop:80}}>
                <QueryController queries={{
                  '(min-width:1050px)': <PolkaDotArray size={5}/>,
                  '(min-width:950px)': <PolkaDotArray size={4}/>,
                  '': <PolkaDotArray size={3}/>
                }}/>
              </Side>
            }}/>







            {/* <Side key="left" side="left" style={{maxWidth:360}} queries={{
              '(min-width: 800px)': <div style={{paddingLeft:100,paddingTop:80}}>
                  <h1 style={{fontSize:75}}>adr</h1>
                  <p style={{fontSize:14,lineHeight:2,paddingTop:20}}>Hey! I'm a student software engineer working on Minecraft plugins, web development, and more.</p>
                </div>,
              '(min-width: 600px)': <div style={{paddingLeft:75,paddingTop:80}}>
                  <h1 style={{fontSize:75}}>adr</h1>
                  <p style={{fontSize:14,lineHeight:2,paddingTop:20}}>Hey! I'm a student software engineer working on Minecraft plugins, web development, and more.</p>
                </div>,
              '(min-width: 360px)': <div style={{paddingLeft:50,paddingTop:80}}>
                  <QueryController queries={{
                    '(min-width: 400px)': <h1 style={{fontSize:75}}>adr</h1>  
                  }}/>
                  <h1 style={{fontSize:75}}>adr</h1>
                  <p style={{fontSize:14,lineHeight:2,paddingTop:20}}>Hey! I'm a student software engineer working on Minecraft plugins, web development, and more.</p>
                </div>,
              '': <div style={{paddingLeft:35,paddingRight:35,paddingTop:80}}>
                  <h1 style={{fontSize:75}}>adr</h1>
                  <p style={{fontSize:14,lineHeight:2,paddingTop:20}}>Hey! I'm a student software engineer working on Minecraft plugins, web development, and more.</p>
                </div>
            }}></Side>
            <Side key="right" side="right" style={{maxWidth:360}} queries={{
              '(min-width: 1000px)': <div style={{maxWidth:360,paddingRight:100,paddingTop:80}}>
                  <PolkaDotArray size={5}/>
                </div>,
              '': <></>
            }}></Side> */}
            {/* <Left style={{paddingLeft:100,maxWidth:360,paddingTop:80}}>
              
            </Left>
            <Right style={{maxWidth:360,paddingRight:100,paddingTop:80}} queries={
              {
                '(min-width: 500px)': <PolkaDotArray size={5}/>,
                '': <div></div>
              } 
            }></Right> */}
          </LeftRightSplit>
        </Section>



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