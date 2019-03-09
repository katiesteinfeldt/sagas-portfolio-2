import React, { Component } from 'react';
import { connect } from 'react-redux';
import TagsListItem from '../TagsListItem/TagsListItem';

class TagsList extends Component {

    render() {
        return (
                <select>
                    {this.props.tags.map(tag =>
                        <TagsListItem key={tag.name} tag={tag} />
                    )}
                </select>
        );
    }
}

const mapStateToProps = (reduxState) => {
    return reduxState;
}

export default (connect(mapStateToProps)(TagsList));