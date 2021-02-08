import React, { useEffect, useState} from 'react'
import styled from 'styled-components'
import inv from '../assets/Inv.svg'
import ni from '../assets/Ni.svg'
import pic from '../assets/pic.png'
import { Body,bodyHead,Header,bodyText,textCopy,tinyTexts } from '../styles/Textsyles'
import {FaFacebookF,FaTwitter,FaLinkedinIn} from 'react-icons/fa'
import { themes } from '../styles/ColorStyles'
import { Link, useParams, } from 'react-router-dom'
import { blogPostUrl,tagUrl } from '../constants'
import axios from 'axios'


const BlogDetails = () => {

  const {slug} = useParams();
  const [post,setPost] = useState(null)
  const [tags, setTags]=useState(null)

  const fetchPost = ()=>{
axios
.get(blogPostUrl(slug))
.then(res=>{
  setPost(res.data)
})
.catch(err=>{

})

  }


  const fetchTags =()=>{
    axios
  .get(tagUrl(slug))
  .then(res=>{
    setTags(res.data)
    console.log(tags)
  })
  .catch(err=>{
  
  })
  }
  useEffect(() => {
    fetchPost()
    fetchTags()
  }, [])

  return (
    <Blogbody>

      <Container>
     {post &&  <BlogDetail>
        <Blogmaintitle>{post.title}</Blogmaintitle>
        <Blogdescription>{post.description}.</Blogdescription>
        <Blogdate>{new Date(`${post.date}`).toLocaleDateString()}</Blogdate>
        <Blogimage src={post.image} alt={`The creative mena blog ${post.title}`} />
        <Blogpostp>
        {post.post}
        </Blogpostp>

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
        <Blogpost>
          <Blogimg src={pic} alt="The creative Mena Blog"/>
          <Blogwrap>
         <Blogtitle>Brand That Matters</Blogtitle>
          <Blogdesc>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl egestas mauris, feugiat varius sed nisl. Et ullamcorper nulla proin amet. In et nunc nullam nisl. Varius mauris adipiscing</Blogdesc>
         </Blogwrap>
          <Bloglink/>
        </Blogpost>
        <Blogpost>
          <Blogimg/>
         <Blogwrap>
         <Blogtitle>Brand That Matters</Blogtitle>
          <Blogdesc>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl egestas mauris, feugiat varius sed nisl. Et ullamcorper nulla proin amet. In et nunc nullam nisl. Varius mauris adipiscing</Blogdesc>
         </Blogwrap>
          <Bloglink/>
        </Blogpost>
        </Relatedcover>
      </Related>

      </Container>
    </Blogbody>
  )
}

const Blogbody = styled.div`
min-height: 600px;
width:100%;
padding: 10px 25px;

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
const Blogdescription = styled(Body)`
margin: 20px 0;
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
const Blogpostp = styled(Body)`
line-height: 1.5;
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
