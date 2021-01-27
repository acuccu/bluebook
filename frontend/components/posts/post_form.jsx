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
      this.clearField = this.clearField.bind(this);
    }
    
    handleSubmit(e) {
      e.preventDefault();
      this.props.createPost(this.state).then(() => this.clearField());
    }

    clearField() {
        debugger
        this.setState({body: "", title: "", author_id: ""})
    }
  
    update(field) {
      return e => this.setState({ [field]: e.currentTarget.value });
    }
    
    render () {
      
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
                  <input  type="form-textarea" value={`${this.state.body}`} onChange={this.update('body')}/>
                </div>
              </div>

              <div className='form-icon-buttons'>
                <button id='submit-post' >Post</button>
              </div> 
            </form>
        </div>
      )

    }
}

export default PostForm;