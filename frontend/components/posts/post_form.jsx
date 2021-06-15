import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPencilAlt} from '@fortawesome/free-solid-svg-icons';
import {withRouter} from 'react-router-dom';


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

    
    componentDidUpdate () {
      debugger
        if (!this.props.match.params.userId && (this.state.wall_id !== this.props.author.id)) {
          debugger
          this.setState({wall_id: this.props.author.id })
        }
        else if (this.props.match.params.userId && (this.state.wall_id !== this.props.match.params.userId)) {
          debugger
          this.setState({wall_id: this.props.match.params.userId});
        }
        
    }


    clearField() {
        this.setState({body: "", author_id: this.props.author.id, wall_id: this.props.post.wall_id})
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
                <h3>Create Post</h3> 
              </div>

              <div className='post-area'>
                  <div className={`post${this.props.author.avatar}avatar`}></div>
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

export default withRouter(PostForm);