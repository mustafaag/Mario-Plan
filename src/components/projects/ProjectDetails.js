import React from 'react'

const ProjectDetails = (props) => {
    const id = props.match.params.id;
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="content">
                    <span className='card-title'>
                    Project title - {id}                     
                    </span>
                    <p>
                        Lorem ipsum
                    </p>
                </div>
                <div className="card-action gret lighten-4 grey-text">
                    <div>Posted by maga</div>
                    <div>2nd September, 2Pm</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails
