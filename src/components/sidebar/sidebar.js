import React from "react"
import Img from "gatsby-image"
import Skills from "./skills"
import Social from "./social"

const Sidebar = props => {
  const education = props.data.education
  const skills = props.data.skills
  const keys = Object.keys(props.data.about)
  return (
    <div className="col-md-4">
      <div className="sidebar">
        <h5 className="title">Personal Details</h5>
        <Img
          key={props.image.childImageSharp.id}
          fluid={props.image.childImageSharp.fluid}
        />
        <ul className="personal-info">
          {keys.map(index => {
            const capitalized = index.charAt(0).toUpperCase() + index.slice(1)
            return (
              <li key={index}>
                <p>
                  <span>{capitalized}</span>
                  {props.data.about[index]}
                </p>
              </li>
            )
          })}
        </ul>

        <h5 className="title">Academic Background</h5>
        <div className="padding-25 border-bottom">
          <p className="font-weight-bold">
            <span>{education.period}</span>{" "}
          </p>
          <p className="m-0 p-0">{education.degree}</p>
          <p className="m-0 p-0">{education.location}</p>
        </div>

        <Skills data={skills} />
        <Social />
      </div>
    </div>
  )
}

export default Sidebar
