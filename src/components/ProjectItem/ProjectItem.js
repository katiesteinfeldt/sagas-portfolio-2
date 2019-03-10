import React, { Component } from 'react';
import { connect } from 'react-redux';
import './ProjectItem.css';
//import { BrowserRouter as Router } from "react-router-dom";

class ProjectItem extends Component {

    render() {
        let descriptionDisplay;
        let thumbnailDisplay;
        let websiteDisplay;
        let githubDisplay;

        if (this.props.project.description === '') {
            descriptionDisplay = null;
        }
        else {
            descriptionDisplay = this.props.project.description;
        }

        if (this.props.project.thumbnail === '') {
            thumbnailDisplay = <img alt="Empty" src="images/empty-image.png" />
        }
        else {
            thumbnailDisplay = <img alt={this.props.project.description} src={this.props.project.thumbnail} />
        }
        

        if (this.props.project.website === '') {
            websiteDisplay = null;
        }
        else {
            websiteDisplay = null;
        }

        if (this.props.project.github === '') {
            githubDisplay = null;
        }
        else {
            githubDisplay = this.props.project.github;
        }


        return (
        
            <div>
                {this.props.project.name}
                <div>
                    {this.props.project.name}
                    <br/>
                    {descriptionDisplay}
                    <br />
                    {thumbnailDisplay}
                    <br />
                    {websiteDisplay}
                    <br />
                    {githubDisplay}
                </div>
            </div>
        );
    }
}





const mapStateToProps = (reduxState) => {
    return reduxState;
}

export default connect(mapStateToProps)(ProjectItem);
