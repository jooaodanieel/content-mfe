import { Stack } from "@mui/material"
import { useEffect, useState } from "react"

import Content from "./components/Content"
import { Title } from "@digidojo-blog/design-system"
import usePost from "./hooks/usePost"
import useRouteUUID from "./hooks/useRouteUUID"

export default function Root(props) {
  const uuid = useRouteUUID()

  const [loaded, setLoaded] = useState(false)
  const { title, content } = usePost(uuid)

  useEffect(() => {
    if (!loaded) {
      setLoaded(true)
      return
    }

    if (title === undefined || content === undefined)
      window.location.pathname = "/"
  }, [title, content])

  return <Stack>
    <Title>{ title }</Title>
    <Content content={content} />
  </Stack>
}
