import { Stack } from "@mui/material"

import Content from "./components/Content"
import Title from "./components/Title"

export default function Root(props) {
  const title = "A New Post"
  const content = "A long, long time ago,\nin a galaxy far, far away..."


  return <Stack>

    <Title title={title} />

    <Content content={content} />

  </Stack>
}
