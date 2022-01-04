import * as React from "react"
import { Layout } from "../layout"

export const Contact: React.FunctionComponent<{
  heading: string
  headingId: string
}> = (props) => {
  return (
    <Layout
      heading={props.heading}
      headingId={props.headingId}
      extraClasses={["contact"]}
    >
      TODO placeholder content
    </Layout>
  )
}
