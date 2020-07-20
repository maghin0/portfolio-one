import React from "react"
import { graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
// import Bio from "../components/bio"
import PostCard from "../components/postCard"

// import "../utils/global.scss"
import "../utils/normalize.css"
import "../utils/css/screen.css"

import tools from "../../content/assets/mytools1.jpg"
import poster from "../../content/assets/hire-me.png"
import hirevideo from "../../content/assets/hire-video.webm"
// import toolswebp from "../../content/assets/mytools.webp"
//TODO: switch to staticQuery, get rid of comments, remove unnecessary components, export as draft template

const BlogIndex = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges
  let postCounter = 0

  return (
    <Layout title={siteTitle}>
      <SEO
        title="web developer and UI designer"
        keywords={[
          `UI`,
          `portfolio`,
          `web design`,
          `freelancer`,
          `remote`,
          `developer`,
          `maghin`,
          `case study`,
        ]}
      />
      {/* <Bio /> */}
      {data.site.siteMetadata.description && (
        <header className="page-head" style={{ marginBottom: "11em" }}>
          <h2 className="page-head-title">
            {data.site.siteMetadata.description}
          </h2>
        </header>
      )}

      <h2 id="work" className="kg-card kg-width-wide">
        PROJECTS
      </h2>

      <div className="post-feed">
        {posts.map(({ node }) => {
          postCounter++
          return (
            <PostCard
              key={node.fields.slug}
              count={postCounter}
              node={node}
              postClass={`post`}
            />
          )
        })}
      </div>
      <article
        className="post-content page-template no-image "
        style={{ marginTop: 20, paddingBottom: 0 }}
        id="about"
      >
        <h2 id="this-is-a-section ">ABOUT ME</h2>

        <p>
          Designed and developed multiple websites and web applications.
          Experienced in creating blazing fast websites with data persistence
          using the latest stack (e.g. JAM stack, and MERN with GraphQL and
          Apollo). Lives on the fuel that comes from making web logic and
          designs come to life with Node and react, while still considering
          himself a "forever student" learning new ways better ways of making
          these websites come to life is so very sublime. Aiming to become a
          great web developer who is able to turn any idea into an amazing
          website lead to building many personal projects and websites. Recently
          he was able to make an open-source website combining many of his
          favorite technologies while maintaining a work-life balance. Maghin
          believes work is faster and clearer when keeping track of his health
          and mindfulness, a tenet he lives out through his passion for tennis,
          meditation, and abstract art. Maghin is currently working as a
          freelance web designer and developer always craving a challenge.
        </p>

        <div class="kg-card kg-image-card">
          <h2>Tools</h2>
          <picture>
            {/* <source srcset={toolswebp} /> */}
            <img src={tools} alt="Tools" />
          </picture>
        </div>
      </article>

      <div class="kg-card kg-image-card kg-width-full">
        <article className="post-content ">
          <header className="page-head">
            <div style={{ zIndex: 10 }}>
              <h1>CONNECT</h1>
              <h2 className="page-head-title">
                <a href="mailto:tarek-maghin@outlook.com">
                  <button
                    className="large"
                    role="button"
                    style={{ marginLeft: 10 }}
                  >
                    Hire me
                  </button>
                </a>
              </h2>
            </div>
          </header>
        </article>
      </div>
    </Layout>
  )
}

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM D, YYYY")
            dates(formatString: "MMMM D, YYYY")
            title
            description
            tags
            thumbnail {
              childImageSharp {
                fluid(maxWidth: 1360) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            hero {
              childImageSharp {
                fluid(maxWidth: 1360) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <BlogIndex location={props.location} props data={data} {...props} />
    )}
  />
)
