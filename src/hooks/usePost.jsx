import { useEffect, useState } from "react"

import axios from "../utils/axios"

export default function usePost(uuid) {
  const [post, setPost] = useState({ title: undefined, content: undefined })

  async function fetchPost(uuid) {
    try {
      const { data } = await axios.get(`/posts/${uuid}`)

      setPost({ title: data.title, content: data.content })
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => fetchPost(uuid), [uuid])

  return post
}