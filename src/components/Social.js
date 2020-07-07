import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function social(props){

  return(

    <a class="social btn btn-social-icon btn-sm btn-primary" href={props.link}>
      <FontAwesomeIcon icon={['fab', props.icon]} fixedWidth />
    </a>

  );

} 
export default social;