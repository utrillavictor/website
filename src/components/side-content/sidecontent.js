import React from "react"
import Experience from "./experience"
import Portfolio from "./portfolio"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"
import "react-tabs/style/react-tabs.css"

const SideContent = props => {
  const logos = props.images
  const experience = props.data.experience
  return (
    <div className="col-md-8">
      <Tabs>
        <TabList>
          <Tab>Experience</Tab>
          <Tab>Portfolio</Tab>
        </TabList>
        <TabPanel>
          <Experience logos={logos} experience={experience} />
        </TabPanel>
        <TabPanel>
          <Portfolio />
        </TabPanel>
      </Tabs>
    </div>
  )
}

export default SideContent
