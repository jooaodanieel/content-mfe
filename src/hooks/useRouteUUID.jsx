import { useEffect } from "react"
import { useState } from "react"

export default function useRouteUUID() {
  const [uuid, setUUID] = useState(null)

  useEffect(() => {
    const segments = window.location.pathname
      .split("/")
      .filter((seg) => seg !== "")

    setUUID(segments[1])
  }, [])

  return uuid
}