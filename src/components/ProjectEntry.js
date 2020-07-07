import React from 'react';

function ProjectEntry(props) {

  return (
    <div className="col-md-4 col-sm-6 margin-top">
      <div className="thumbnail">
        <div class="projEntry">
          <p className="text-center description">{props.description}</p>
          <a href={props.link} className="btn button">
            View project
          </a> 
        </div>
        <img class ="entryImage" src={props.image} alt="Daniel Santaguida's Portfolio" width="390" height="235"></img>
      </div>
    </div>

  );

} export default ProjectEntry;