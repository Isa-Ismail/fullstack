import Layout from "../components/Layout";
import { Button } from '@mui/material';
import { useState } from "react";
import TextField from '@mui/material/TextField';
import Link from 'next/link'

const Signup = () => {

  const [form, setForm] = useState({name: "", email:"", password:"", confirmPassword:""})

  const handleChange = (e) => {
      setForm({...form, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
      e.preventDefault()
      if(form.password === form.confirmPassword){
          alert("success")
      }else{
          alert("Password didn't matched")
      }
  }

  return (
        <Layout>
          <div className="flex justify-center items-center">
            <div className="w-[30rem] space-y-5">

                <h2>Sign Up</h2>

                <div>
                <TextField
                fullWidth
                id="outlined-multiline-flexible"
                label="name"
                multiline
                maxRows={4}
                name="name"
                value={form.name}
                onChange={handleChange}
                />
                </div>

                <div>
                <TextField
                fullWidth
                id="outlined-multiline-flexible"
                label="email"
                multiline
                maxRows={4}
                name="email"
                value={form.email}
                onChange={handleChange}
                />
                </div>

                <div>
                <TextField
                fullWidth
                id="outlined-multiline-flexible"
                label="password"
                multiline
                maxRows={4}
                name="password"
                value={form.password}
                onChange={handleChange}
                />
                </div>

                <div>
                <TextField
                fullWidth
                id="outlined-multiline-flexible"
                label="Confirm password"
                multiline
                maxRows={4}
                name="confirmPassword"
                value={form.confirmPassword}
                onChange={handleChange}
                />
                </div>

            <Button variant="contained" color="success" onClick={handleSubmit}>Submit</Button>
            
            </div>
          </div>
        </Layout>
  )
}

export default Signup