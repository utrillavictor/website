import React from "react"
import SEO from "../components/SEO/seo"
import Layout from "../components/layout"
import Sidebar from "../components/sidebar/sidebar"
import SideContent from "../components/side-content/sidecontent"
import JSONData from "../../content/info.json"
import { useSiteImage } from "../hooks/use-site-image"

const IndexPage = () => {
  const { image, images } = useSiteImage()
  return (
    <div>
      <SEO />
      <Layout>
        <Sidebar image={image} data={JSONData} />
        <SideContent images={images} data={JSONData} />
      </Layout>
    </div>
  )
}

export default IndexPage
