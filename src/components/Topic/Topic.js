import React from 'react';
import get from 'lodash/get';
import styled from 'styled-components';
import {connect} from "react-redux";

const Topic = ({setTopic}) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const title = get(e, 'target.title.value', '');
        const category = get(e, 'target.category.value', '');
        const issue = get(e, 'target.issue.value', '');
        setTopic({title,category,issue});
    };

    return (
        <form onSubmit={handleSubmit}>
            <fieldset className='uk-fieldset'>

                <legend className='uk-legend'>Your topic</legend>

                <div className="uk-margin">
                    <input className="uk-input uk-form-large uk-width-1-1" name='title' type="text" placeholder='Title' />
                </div>

                <div className='uk-margin'>
                    <select className='uk-select uk-form-large' style={{color: 'grey'}} name='category'>
                        <option value="" selected disabled hidden>Choose category...</option>
                        <option>Sport</option>
                        <option>Nature</option>
                        <option>Entertainment</option>
                        <option>Children</option>
                        <option>Issue</option>
                        <option>Idea</option>
                    </select>
                </div>

                <div className='uk-margin'>
                    <textarea className='uk-textarea uk-form-large' name='issue' rows='5' placeholder='Issue'></textarea>
                </div>
                
                <div className='uk-margin'>
                    <input type='submit' value='Create topic' className="uk-button uk-button-primary uk-button-large uk-width-1-1" />
                </div>
                
            </fieldset>
        </form>
    );
}

const mapStateToProps = {

}

const mapDispatchToProps = dispatch => ({
    setTopic: data => dispatch.topic.setTopic(data),
});

export default connect(null, mapDispatchToProps)(Topic);