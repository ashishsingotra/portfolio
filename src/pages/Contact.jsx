/* eslint-disable react/no-unknown-property */
import { Suspense, useState } from "react"
import emailjs from '@emailjs/browser'
import { Canvas } from "@react-three/fiber";
import Loader from "../components/Loader";
import Fox from "../models/Fox";
import useAlert from "../hooks/useAlert";
import Alert from "../components/Alert";

const Contact = () => {

  const [form, setform] = useState({name:"" , email: "" , message : ""})

  const [isLoading, setisLoading] = useState(false)

  const [currentAnimation, setcurrentAnimation] = useState('idle')

  const {alert , showAlert , hideAlert} = useAlert() ;
  const handleChange = (e) => {
    setform({...form , [e.target.name] : e.target.value})
  };
  const handleFocus = () => setcurrentAnimation('walk');
  const handleBlur = () => setcurrentAnimation('idle');
  const handleSubmit = (e) => {
    e.preventDefault();
    setisLoading(true)
    setcurrentAnimation('hit');
    
    emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICEID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATEID,{
        from_name :form.name,
        to_name: "Ashish kumar",
        form_email : form.email,
        to_email : 'ashishk6621@gmail.com',
        message : form.message
      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
    ).then(() =>{
      setisLoading(false);
      setform({name : '' , email : '' , message : ''});
      showAlert({show:true , text : '' , type : 'success'})

      setTimeout(()=>{
        setcurrentAnimation('idle');
        hideAlert();
      },3000)
    }).catch((error)=>{
      showAlert({show:true , text : 'I didnt recieve your message' , type : 'danger'})
      setisLoading(false);
      setcurrentAnimation('idle');
      console.log(error)
    })
  };


  return (
    <section className="relative flex lg:flex-row flex-col max-container lg:h-[100vh]">
      {alert.show && <Alert {...alert} /> }
      <div className="flex-1 min-w-[50%]">
        <h1 className="head-text"> Get in touch</h1>

        <form 
          className="w-full flex flex-col gap-7 mt-14"
          onSubmit={handleSubmit}>
          <label className="text-black-500 font-semibold">
            Name
            <input
              type="text"
              name="name"
              className="input"
              placeholder="Mike"
              required
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur ={handleBlur}
            />

          </label>
          <label className="text-black-500 font-semibold">
            Email
            <input
              type="email"
              name="email"
              className="input"
              placeholder="mike@gmail.com"
              required
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur ={handleBlur}
            />

          </label>
          <label className="text-black-500 font-semibold">
            Your Message
            <textarea
              name="message"
              rows={4}
              className="textarea"
              placeholder="Let me know how i can help you?"
              required
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur ={handleBlur}
            />

          </label>
          <button 
            type="submit" 
            className="btn" 
            onFocus={handleFocus}
            onBlur ={handleBlur}
            >
              {isLoading ? 'Sending' : 'Send Meassage'}
          </button>
        </form>
      </div>
      <div className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]">
          <Canvas
          camera ={{
              position :[0,0,5],
              fov :75,
              near:0.1,
              far:1000
            }}
            >
            <directionalLight intensity={2.5} position={[0,0,1]}/>
            <ambientLight intensity={0.5}/>
            <Suspense fallback={<Loader/>}>
              <Fox
              currentAnimation ={currentAnimation}
              position={[0.5,0.35,0]}
              rotation={[12.6,-0.6,0]}
              scale={[0.5,0.5,0.5]}
              />
            </Suspense>
          </Canvas>
        </div>
    </section>
  )
}

export default Contact