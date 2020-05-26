import React from 'react'
import { faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Social = () => {
  return(
    <div>
      <h5 className="title">Social Profiles</h5>
      <div className="social-icon border-bottomm padding-25">
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/victor-c-utrilla">
              <FontAwesomeIcon
                icon={faLinkedin}
                className='icon-class' />
            </a>
          </li>
          <li>
            <a href="https://github.com/utrillavictor">
              <FontAwesomeIcon
                icon={faGithub}
                className='icon-class' />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/code4mobile">
              <FontAwesomeIcon
                icon={faTwitter}
                className='icon-class' />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Social
