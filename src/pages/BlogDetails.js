import React, { useEffect, useState} from 'react'
import styled from 'styled-components'
import inv from '../assets/Inv.svg'
import ni from '../assets/Ni.svg'

import { Body,bodyHead,Header,bodyText,textCopy,tinyTexts } from '../styles/Textsyles'
import {FaFacebookF,FaTwitter,FaLinkedinIn} from 'react-icons/fa'
import { themes } from '../styles/ColorStyles'
import { Link, useParams, } from 'react-router-dom'
import { blogPostUrl,tagUrl,baseURL } from '../constants'
import axios from 'axios'
import SmallPageLoading from '../Components/SmallPageLoading'
import PageLoader from '../Components/PageLoader'



const BlogDetails = () => {


  const {slug} = useParams();
  const [post,setPost] = useState(null)
  const [loading,setLoading] = useState(false)
  const [tags, setTags] = useState([])

  const fetchPost = ()=>{
    setLoading(true)
axios
.get(blogPostUrl(slug))
.then(res=>{
  setPost(res.data)
  setLoading(false)
})
.catch(err=>{
  setLoading(false)

})

  }



  const fetchTags =()=>{
    axios
  .get((tagUrl), {params: {slug}})
  .then(res=>{
    setTags(res.data)
    console.log(tags)
  })
  .catch(err=>{
  
  })
  }
  const fetchNewPost = () =>{
    fetchPost()
    fetchTags()
  }

  useEffect(() => {
    fetchPost()
    fetchTags()

  }, [slug])

  return (
    <Blogbody>

      <Container>

{loading ? 
<>
<PageLoader/>
<SmallPageLoading/>
<SmallPageLoading/>
<SmallPageLoading/>
</>

:<>
{post &&  <BlogDetail>
        <Blogmaintitle>{post.title}</Blogmaintitle>
     
        {console.log(post.description)}

        <Blogdate>{new Date(`${post.date}`).toLocaleString()}</Blogdate>
        <Blogimage src={post.image} alt={`The creative mena blog ${post.title}`} />
        <Blogpostp dangerouslySetInnerHTML={{__html:post.post}}/>


        <Author>
          <Authorname>
          <Authorh1>{post.username.username}</Authorh1>
          <Authorwritten>Written By</Authorwritten>

          </Authorname>
          <Socials>
            <Socialul>
            {post.facebook &&     <Socialli><Socialhref  rel="noopener noreferrer" target="_blank" href={`${post.facebook}`}><Facebook/> </Socialhref></Socialli>}
              {post.twitter &&   <Socialli><Socialhref  rel="noopener noreferrer" target="_blank" href={`${post.twitter}`}><Twitter/> </Socialhref></Socialli> }
            
              {post.linkedin &&  <Socialli><Socialhref  rel="noopener noreferrer" target="_blank" href={`${post.linkedin}`}><Linkedin/> </Socialhref></Socialli>}
            </Socialul>
          </Socials>
        </Author>
      </BlogDetail>
}
      <Related>
        <Relatedtitle><Relatedh1>Related</Relatedh1></Relatedtitle>
        <Relatedcover>
     {tags && tags.map(tags =>{

      return (

        <Blogpost key={tags.id}>
          <Blogimg src={`${baseURL}${tags.image}`} alt="The creative Mena Blog"/>
          <Blogwrap>
         <Blogtitle>{tags.title}</Blogtitle>
          <Blogdesc>{tags.description}</Blogdesc>
         </Blogwrap>
          <Bloglink onClick={fetchNewPost} to={`/blog/${tags.slug}`}/>
        </Blogpost>
      )
     })}
      
        </Relatedcover>
      </Related>


</>
}

     
      </Container>
    </Blogbody>
  )
}

const Blogbody = styled.div`
min-height: 600px;
width:100%;
padding: 10px 24px;
overflow-x: hidden;
word-wrap: break-word;

background-image: url(${inv}),url(${ni});
background-size: 20%,20%;
background-repeat: no-repeat, no-repeat;
background-position: left -10px top 20%, right -5% top 65%;
`
const Container = styled.div`
max-width: 1100px;
width:100%;
height: 100%;
margin: 0 auto;
display: flex;
flex-direction: column;
`
const BlogDetail = styled.div`
min-height: 300px;
width:100%;
max-width: 900px;
margin: 40px auto;
display: flex;
flex-direction: column;
align-items: flex-start;

`
const Blogmaintitle  =styled(Header)`
`

const Blogdate = styled(bodyHead)`
`
const Blogimage = styled.img`
margin: 40px 0 20px 0;
width:100%;
height: 400px;

@media only screen and (max-width: 650px){
  height: 200px;
}
`
const Blogpostp = styled.div`
line-height: 1.5;
max-width: 900px;
width: 100%;
overflow-x: hidden;

img{
  max-width: 900px;
  width: 100%;
  margin: 8px 0  !important;
}

a{
  color: ${themes.yellow};
  transition: 0.3s ease-in;
  :hover{
    
  color: ${themes.primary};
  }
}

p{
  line-height: 1.6  !important;
  font-size: 16px  !important;
  margin: 4px 0  !important;
  text-align: left  !important;
  
}
h1, h2,h3,h4{
  margin: 4px 0  !important;
}
`

const Author = styled.div`
width:100%;
min-height: 100px;
margin: 50px 0 0 0;
border-top: 4px solid #E2E7E3;
display: flex;
flex-direction: row;
justify-content: space-between;

@media only screen and (max-width: 650px){
  flex-direction: column;
}
`
const Authorname = styled.div`
width:100%;
height: 100%;
display: flex;
flex-direction: column;
margin: 20px 0 0 0;
`
const Authorh1 = styled(Body)`
text-transform: capitalize;
`
const Authorwritten = styled(bodyText)``
const Socials = styled.div`
margin: 20px 0 0 0;
height: 100%;
display: flex;
flex-direction: column;
justify-content: flex-end;
`
const Socialul = styled.ul`
display: flex;
flex-direction: row;
`
const Socialli = styled.li``
const Socialhref = styled.a`
color:${themes.primary};
`
const Facebook = styled(FaFacebookF)`
height: 25px;
width: 20px;
`
const Twitter = styled(FaTwitter)`
height: 25px;
width: 20px;
margin: 0 30px;
`
const Linkedin = styled(FaLinkedinIn)`
height: 25px;
width: 20px;
`

const Related = styled.div`
min-height: 600px;
width: 100%;
`
const Relatedtitle = styled.div`
min-height: 70px;
width: 100%;
margin: 20px 0;
`
const Relatedh1 = styled(Header)``
const Relatedcover = styled.div`
min-height: 600px;
width: 100%;
display: grid;
grid-template-columns: repeat(2,1fr);
grid-gap: 56px;
grid-auto-rows:minmax(550px,auto);

@media only screen and (max-width: 650px){
  grid-template-columns: repeat(1,1fr);
  grid-gap:20px;
  grid-auto-rows:minmax(350px,auto);
}
`
const Blogpost = styled.div`
background: ${themes.primary};
color: ${themes.black};
position: relative;
width: 100%;
height: 100%;
`
const Blogimg = styled.img`
height: 350px;
width: 100%;
@media only screen and (max-width: 650px){
  height: 200px;
}
`
const Blogwrap = styled.div`
min-height: 120px;
width: 100%;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;
padding: 26px;
`
const Blogtitle = styled(textCopy)``
const Blogdesc = styled(tinyTexts)``
const Bloglink = styled(Link)`
position: absolute;
object-fit: cover;
top: 0;
left:0;
height:100%;
width: 100%;
`

export default BlogDetails
