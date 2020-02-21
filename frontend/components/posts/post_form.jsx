import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCamera} from '@fortawesome/free-solid-svg-icons';
import {faPencilAlt} from '@fortawesome/free-solid-svg-icons';
import {faImages} from '@fortawesome/free-solid-svg-icons';
import {faUserTag} from '@fortawesome/free-solid-svg-icons';
import {faGrin} from '@fortawesome/free-solid-svg-icons';



class PostForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = this.props.post;

      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleSubmit(e) {
      e.preventDefault();
      this.props.createPost(this.state);
    }
  
    update(field) {
      return e => this.setState({ [field]: e.currentTarget.value });
    }
    
    render () {
      debugger
      return(
        <div className='create-post'>
           
            <form onSubmit={ this.handleSubmit }> 
              <div className='form-top'>
              <FontAwesomeIcon className='icon-pencil' icon={faPencilAlt} />
                <h3>Create Post</h3> <div className='post-forum-separators' />
                <button className='photo-button'>
                  <FontAwesomeIcon className='icon-camera' icon={faCamera} />
                  <p>Photo/Video</p>
                </button>
              </div>

              <div className='post-area'>
                  <div className='post-avatar'></div>
                <div className='post-textarea'>
                  <input  type="form-textarea" onChange={this.update('body')}/>
                </div>
              </div>

              <div className='form-icon-buttons'>
                <button className='photo-button-ico'>
                  <FontAwesomeIcon className='icon-images' icon={faImages} />
                  Photo
                </button>
                <button className='tag-button-ico'>
                  <FontAwesomeIcon className='icon-tag' icon={faUserTag} />
                  Tag Friends
                </button>
                <button className='location-button-ico'>
                  <FontAwesomeIcon className='icon-grin' icon={faGrin} />
                  Feeling/Activity
                </button> 
                <button id='submit-post' >Post</button>
              </div> 
            </form>
        </div>
      )

    }
}

export default PostForm;