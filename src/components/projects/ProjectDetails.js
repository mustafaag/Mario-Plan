import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import moment from 'moment';

const ProjectDetails = (props) => {
    const { project } = props;

    if(project){
        return(
        <div className="container section project-details">
        <div className="card z-depth-0">
            <div className="content">
                <span className='card-title'>
                {project.title}                     
                </span>
                <p>
                {project.content}                     
                </p>
            </div>
            <div className="card-action gret lighten-4 grey-text">
            <div>Posted by {project.authorFname} { project.authorLname }</div>
                <div>{ moment(project.createdAt.toDate()).calendar()}</div>
            </div>
        </div>
    </div>)
    }else{
        return(
            <div className='container center'>
                <div> Loading ...</div>
            </div>
        )
    }

   
}
const mapStateToProps = (state, ownProps) =>{
    const id = ownProps.match.params.id
    const projects = state.firestore.data.projects;
    const project = projects? projects[id] : null;
    
    return{
        project: project
    }
}

export default  compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'projects' }
    ])
)
(ProjectDetails)
