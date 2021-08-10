import { useState } from 'react';
import { Accordion, Card } from 'react-bootstrap';
import { BsChevronUp, BsChevronDown, BsBookmark, BsBookmarkFill } from 'react-icons/bs';

const JobCard = (props) => { 
  const [collapse, setCollapse] = useState(true);

  let regExp = /&nbsp;/g;
  let description = props.description.replace(regExp,"");
  let regExp2 = /(<([^>]+)>)/ig;
  description = description.replace(regExp2, "");

  const collapseCard = () => {
    setCollapse(!collapse);
  }

  return (
    <div className='job-card-container'>
      <Accordion>
        <Card>
          <Accordion.Toggle 
            as={Card.Header} 
            eventKey='0' 
            className='job-card-header'
            onClick={collapseCard}
          >
              <div className='header-content'>
                <h2>{props.title}</h2>
                <h3>{props.company}</h3>
                <h4>{props.location}</h4>
              </div>
            <div>
              {collapse ? <BsChevronDown/> : <BsChevronUp/>}
            </div>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey='0'>
            <Card.Body>
              <p className='card-body'>{description}</p>
              <a href={props.link} target='blank' className='btn sm-btn'>MORE INFO</a>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  )
}

export default JobCard;