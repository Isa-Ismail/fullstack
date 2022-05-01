import Layout from "../components/Layout";
import { Button } from '@mui/material';
import { useState } from "react";
import TextField from '@mui/material/TextField';
import Link from 'next/link'
import { signup } from "../actions/auth";

const Signup = () => {

  const [form, setForm] = useState({name: "", email:"", password:"", confirmPassword:""})

  const handleChange = (e) => {
      setForm({...form, [e.target.name]: e.target.value})
  }

  const handleSubmit = async (e) => {
      e.preventDefault()
      if(form.password === form.confirmPassword&&form.email&&form.name&&form.password){
          const user = {
            name: form.name,
            email: form.email,
            password: form.password
          }
          const data = await signup(user)
          console.log(data)
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
                type="email"
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
                name="password"
                type="password"
                value={form.password}
                onChange={handleChange}
                />
                </div>

                <div>
                <TextField
                fullWidth
                id="outlined-flexible"
                label="Confirm password"
                name="confirmPassword"
                type="password"
                value={form.confirmPassword}
                onChange={handleChange}
                />
                </div>

                <Button variant="contained" type="submit" color="success" onClick={handleSubmit}>Submit</Button>
            
            </div>
          </div>
        </Layout>
  )
}

export default Signup