import React from 'react'

const Skills = (props) => {
  const keys = Object.keys(props.data)
  return(
    <div>
      <h5 className="title">Tech Skills</h5>
      <div className="padding-25 border-bottom">
      { keys.map(index => {
        const customStyle = { width: props.data[index] }
        return (
          <div className="progress" key={index}>
            <div className="progress-bar" role="progressbar" style={customStyle} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">{index}</div>
          </div>
        )
      })}
      </div>
    </div>
  )
}

export default Skills
