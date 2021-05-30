import React, { useState } from 'react'
import styled from 'styled-components'
import real from '../assets/A.svg'
import { themes } from '../styles/ColorStyles'
import { Header} from '../styles/Textsyles'
import Loader from '../Components/Loader'
import axios from 'axios'
import {RiMapPin2Fill} from 'react-icons/ri'
import {MdEmail} from 'react-icons/md'
import {CgPhone} from 'react-icons/cg'
import { contactUrl } from '../constants'


const Contact = () => {

  const initial={
    name: "",
    email: "",
    subject:"",
    message:""
  }
const [loading,setLoading]= useState(false)
const [sent,setSent]= useState(false)
const [form,setForm] = useState(initial)

const {
  name,
email,
subject,
message
}=form

const onChange = e=>{
  const{name,value} = e.target;
  setForm({...form, [name]:value})
}
  const formSubmit = e=>{

    e.preventDefault()
    setLoading(true)
    setSent(false)
    axios
    .post(contactUrl, {name, subject, email, message})
    .then(res=>{

      setLoading(false)
      setSent(true)
    })
    .catch(err=>{
      setSent(false)
      setLoading(false)
    })


  }
  return (
<Contactpage >

<Container>
{sent? null : <Title>
<Titleh1> Lets Talk</Titleh1>
</Title>}
<ContactForm>
{sent ? <div>
<Deliverytitle>
<Deliveryh1>  I have received your mail and will reply shortly</Deliveryh1>
</Deliverytitle>
<Delivery src="https://res.cloudinary.com/dimrd8ott/image/upload/v1622341130/DELIVERY_1_io7z6e.png" alt="The creative mena" />

</div>:<div><Form onSubmit={formSubmit}>

<Formrow>
  <Label>Full Name</Label>
  <Forminput required  type="text" name="name" value={name} onChange={onChange}/>
</Formrow>

<Formrow>
  <Label>Email Address</Label>
  <Forminput required  type="email" name="email" value={email}  onChange={onChange}/>
</Formrow>
<Formrow>
  <Label>Subject</Label>
  <Forminput  required type="text" name="subject" value={subject}  onChange={onChange}/>
</Formrow>
<Formrow>
  <Label>Message</Label>
  <Formtextarea  required name="message" value={message}  onChange={onChange}/>
</Formrow>
<Formrow>
 <Formbutton type="submit">{ loading ? <Loader /> : "Send message"}</Formbutton>
</Formrow>
</Form></div>}

</ContactForm>
<Social>
<Socialcover>
  <Socialicons>
<Map/>
  </Socialicons>
  <Socialtext>Lagos, Nigeria</Socialtext>
</Socialcover>
<Socialcover>
  <Socialicons>

  <a rel="noopener noreferrer" target="_blank" href="mailto:thecreativemena.com"><Email/></a>
  </Socialicons>
  <Socialtext>
  <a href="mailto:hello@thecreativemena.com">hello@thecreativemena.com</a>
 </Socialtext>
</Socialcover>
<Socialcover>
  <Socialicons>
<Phone/>
  </Socialicons>
  <Socialtext><a rel="noopener noreferrer" target="_blank"  href="tel:+22200000000">+234 813 787 1513</a></Socialtext>
</Socialcover>


</Social>


</Container></Contactpage>
  )
}

const Contactpage = styled.div`
min-height: 600px;
width: 100%;
display: flex;
flex-direction: column;
background-image: url(${real});
background-position: left -5% top 50%;
background-size: 15%;
background-repeat: no-repeat;
`
const Container= styled.div`
max-width: 1100px;
margin: 0 auto;
width: 100%;
padding: 20px 25px;
`
const Title = styled.div`
min-height: 100px;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin: 0 0 60px 0;
text-align: center;
`
const Titleh1 = styled(Header)`
margin: 22px 0;
color: ${themes.yellow};
span{
  font-weight: 700;
}
`


const ContactForm = styled.div`
min-height: 500px;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
div{
  height:100%;
width: 100%;
}
`
const Form = styled.form`
max-width: 600px;
margin: 0 auto;
width: 100%;
`
const Formrow = styled.div`
min-height: 90px;
width: 100%;
margin: 16px 0;
`
const Label = styled.label`

font-size: 20px;
font-weight: 400;
line-height: 25px;
text-align: left;

`
const Forminput = styled.input`
outline: none;
padding: 10px ;
max-width: 584px;
width: 100%;
height: 55px;
background: transparent;
margin: 12px 0 0 0;
color: ${themes.white};
border: 1px solid ${themes.yellow};
box-sizing: border-box;
border-radius: 12px;
font-size: 18px;
`

const Formtextarea = styled.textarea`
outline: none;
font-size: 18px;
padding: 10px ;
max-width: 584px;
width: 100%;
color: ${themes.white};
height: 347px;
resize: none;

background: transparent;
margin: 12px 0 0 0;
border: 1px solid ${themes.yellow};
box-sizing: border-box;
border-radius: 12px;


`

const Formbutton = styled.button`
max-width: 584px;
width: 100%;
height: 74px;
display: flex;
align-items: center;
cursor: pointer;
justify-content: center;
background: ${themes.yellow};
font-size: 20px;
font-weight: 600;
color: ${themes.black};
line-height: 25px;

transition: all 0.3s ease-in;
:hover{
  border: none;
  background: ${themes.primary};
  color: ${themes.black};
}

box-sizing: border-box;
border-radius: 12px;
outline: none;
border: none;

@media only screen and (max-width: 650px){

font-size: 21px;
}
`
const Social = styled.div`
display: grid;
grid-template-columns: repeat(3, minmax(10px,1fr));
grid-gap: 30px;
width: 100%;
min-height: 200px;
@media only screen and (max-width: 800px){
  grid-template-columns: repeat(1,1fr);
}
`

const Socialcover = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
a{
  color: ${themes.primary};
}
` 
const Socialicons = styled.div`
display: flex;
align-items: center;
justify-content: center;
border-radius: 50%;
height: 40px;
width: 40px;
margin: 20px 0;
border: 1px solid ${themes.yellow};
` 
const Map = styled(RiMapPin2Fill)`
width: 18px;
height: 18px;
color: ${themes.yellow};
` 
const Socialtext = styled.p`

font-size: 20px;
font-style: normal;
font-weight: 400;
line-height: 25px;
text-align: center;

` 

const Email = styled(MdEmail)`
width: 18px;
height: 18px;
color: ${themes.yellow};
`
const Phone = styled(CgPhone)`

width: 18px;
height: 18px;
color: ${themes.yellow};

`



const Deliverytitle = styled.div`
width: 100%;
min-height: 50px;
`
const Deliveryh1 = styled(Header)`
text-align: center;
`
const Delivery = styled.img`
max-width: 700px;
width: 100%;
height: 100%;
margin: 0 auto;
display: flex;
align-items: center;
justify-content: center;
`
export default Contact
