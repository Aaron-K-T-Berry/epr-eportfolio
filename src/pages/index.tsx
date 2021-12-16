import * as React from "react"
import { PageProps } from "gatsby"

// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}

const headingAccentStyles = {
  color: "#663399",
}

const paragraphStyles = {
  marginBottom: 48,
}

const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}

const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
}

const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
}

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
}

const docLinkStyle = {
  ...linkStyle,
  listStyleType: "none",
  marginBottom: 24,
}

const descriptionStyle = {
  color: "#232129",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
}

const docLink = {
  text: "Documentation",
  url: "https://www.gatsbyjs.com/docs/",
  color: "#8954A8",
}

// data
const links = [
  {
    text: "Intro about me",
    url: "https://www.gatsbyjs.com/docs/tutorial/",
    description: "I'm Aaron, I'm a software engineering working in the data engineering and DevOps space building and automating software in the cloud.",
    color: "#E95800",
  },
  {
    text: "Some skills I have",
    url: "https://www.gatsbyjs.com/docs/how-to/",
    description: "TODO",
    skills: [
      "Web development Javascript, Typescript using tools like React and express JS and serverless ",
      "Data Engineering with Python, Apache Airflow and Snowflake",
      "DevOps using Terraform and Ansible in the cloud",
    ],
    color: "#1099A8",
  },
  {
    text: "Projects I've worked on",
    url: "https://www.gatsbyjs.com/docs/reference/",
    description: "TODO",
    projects: [
      "Data engineering with airflow and snowflake",
      "Building react applications as tableau extensions",
    ],
    color: "#BC027F",
  },
  {
    text: "Writing I have done",
    url: "https://www.gatsbyjs.com/docs/conceptual/",
    description: "TODO",
    projects: ["article 1", "article 2", "article 3"],
    color: "#0D96F2",
  },
  {
    text: "Get in contact with me",
    url: "https://www.gatsbyjs.com/plugins",
    description: "TODO",
    contactLinks: {
      linkedin: "",
      github: "",
      medium: "",
    },
    color: "#8EB814",
  },
  {
    text: "Build and Host",
    url: "https://www.gatsbyjs.com/cloud",
    description: "TODO",
    color: "#663399",
  },
]

// markup
export default (props: PageProps) => {
  return (
    <main style={pageStyles}>
      <title>Home Page</title>
      <h1 style={headingStyles}>
        Congratulations
        <br />
        <span style={headingAccentStyles}>— you just made a Gatsby site! </span>
        <span role="img" aria-label="Party popper emojis">
          🎉🎉🎉
        </span>
      </h1>
      <p style={paragraphStyles}>
        Edit <code style={codeStyles}>src/pages/index.js</code> to see this page
        update in real-time.{" "}
        <span role="img" aria-label="Sunglasses smiley emoji">
          😎
        </span>
      </p>
      <ul style={listStyles}>
        <li style={docLinkStyle}>
          <a
            style={linkStyle}
            href={`${docLink.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter`}
          >
            {docLink.text}
          </a>
        </li>
        {links.map((link) => (
          <li key={link.url} style={{ ...listItemStyles, color: link.color }}>
            <span>
              <a
                style={linkStyle}
                href={`${link.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter`}
              >
                {link.text}
              </a>
              <p style={descriptionStyle}>{link.description}</p>
            </span>
          </li>
        ))}
      </ul>
    </main>
  )
}
