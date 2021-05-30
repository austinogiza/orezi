import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import inv from '../assets/Inv.svg'
import ni from '../assets/Ni.svg'
import { themes } from '../styles/ColorStyles'
import {textCopy,tinyTexts} from '../styles/Textsyles'
import SearchIcon from '../assets/Search.svg'
import PageLoading from '../Components/PageLoading'
import axios from 'axios'
import { blogUrl, searchUrl } from '../constants'
const Blog = () => {

  const [blog,setBlog] = useState([])
const [search, setSearch] = useState("")
const [loading, setLoading] = useState(false)

const handleChange = e=> {
  setSearch(e.target.value)
}

const handleSubmit = e =>{
  e.preventDefault();
  setLoading(true)
  axios
  .get((searchUrl), {params: {search}})
  .then(res=>{
    console.log(res.data)
    setBlog(res.data)
    setLoading(false)
  }).catch(err=>{
    setLoading(false)
  })

}
  const fetchBlogPost =()=>{
    setLoading(true)
    axios
    .get(blogUrl)
    .then(res=>{
      setBlog(res.data)
      setLoading(false)
    })
    .catch(res=>{
      setLoading(false)

    })
  }

  useEffect(() => {
 fetchBlogPost()
  }, [])
  return (
  <Blogbody>


    <Container>

      <Search>
<Searchform onSubmit={handleSubmit}>
  <Searchinput onChange={handleChange} name="search" value={search} placeholder="Search blog" />
</Searchform>
      </Search>
      <Blogcover>
      {loading && <Pagecenter><PageLoading/></Pagecenter>}
      {blog && blog.length > 0 && blog.map(blog =>{
        return(
  
<Blogpost key={blog.id}>
          <Blogimg src={blog.image} alt={`The creative Mena Blog ${blog.title}`}/>
          <Blogwrap>
         <Blogtitle>{blog.title}</Blogtitle>
          <Blogdesc>{blog.description}</Blogdesc>
         </Blogwrap>
          <Bloglink to={`/blog/${blog.slug}`}/>
        </Blogpost>
       
    
        )
      }) }

      {blog && blog.length <0 && <Blogno>
        <Blognoh1>No post available</Blognoh1>
      </Blogno>}
        
      </Blogcover>

    </Container>
  </Blogbody>
  )
}
const Blogno = styled.div`
min-height: 600px;
width:100%;
padding: 10px 25px;
display: flex;
flex-direction: column;
`
const Blognoh1 = styled(textCopy)`

`

const Pagecenter = styled.div`
width: 100%;
height: 100px;
display: flex;
align-items: center;
justify-content: center;
`
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

const Search = styled.div`
width:100%;
min-height: 200px;
margin: 17px 0;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
const Blogcover = styled.div`
min-height: 600px;
width: 100%;
display: grid;
grid-template-columns: repeat(2,1fr);
grid-gap: 56px;
grid-auto-rows:minmax(550px,auto);

@media only screen and (max-width: 650px){
  grid-template-columns: repeat(1,1fr);
  grid-gap: 22px;
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

const Searchform = styled.form`
height:80px;
width: 100%;
max-width:584px;
margin: 0 auto;
`
const Searchinput = styled.input`
height:100%;
width: 100%;
background: transparent;
border: none;
outline: none;
border-bottom: 4px solid #E2E7E3;
font-size: 24px;
font-weight: 400;
text-align: left;
color: ${themes.primary};
background-image: url(${SearchIcon});
background-size: 5%;
background-repeat: no-repeat;
background-position: right 15px top 20px;
padding: 10px 12px;
::placeholder{

font-size: 24px;
font-weight: 400;
text-align: left;
color: ${themes.primary};
}
`

export default Blog
