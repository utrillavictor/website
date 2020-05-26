import React from 'react'
import Img from 'gatsby-image'

const Experience = (props) => {
  const logos = props.logos
  const experience = props.experience
  return (
    <div className="side-content">
      <div className="inside-sec">
        <h5 className="title">Here's what I've done so far</h5>
        <div className="padding-25">
          {experience.map((data, index) => {
            const items = data.descriptions.map((item) => <li>{item}</li>)
            return (
              <div className="experience" key={index}>
                <div className="media-left">
                  <span className="sun">{data.period}</span>
                </div>
                <div className="media-body">
                  <div className="company-logo">
                    <Img
                      fixed={logos.nodes[index].childImageSharp.fixed}
                      alt="{data.company}"
                    />
                  </div>
                  <h6>{data.company}</h6>
                  <p className="m-0 font-weight-bold">{data.position}</p>
                  <p>{data.location}</p>
                  <ul>{items}</ul>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Experience
