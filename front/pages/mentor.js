import React, { useState } from 'react'
import Layout from '../components/Layout'
const Mentor = () => {

    const [num, setNum] = useState(0)
  return (
    <Layout>
        Hello Joe
    </Layout>
  )
}

export default Mentor

export const getStaticProps = async (ctx) => {
    return {
        props: {
            // something
        }
    }
}