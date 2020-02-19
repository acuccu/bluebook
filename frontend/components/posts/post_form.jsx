import React from 'react';


class PostForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = this.props.post;
  
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleSubmit(e) {
      e.preventDefault();
      this.props.action(this.state);
    }
  
    update(field) {
      return e => this.setState({ [field]: e.currentTarget.value });
    }
    
    render () {
        <div cassName='create-post'>
           
            <form onSubmit={ this.handleSubmit }> <h3>create post</h3> 
                <button className='photo-button' />
                <div className='post-area'><input type="textarea" onChange={this.update('body')}/>
                </div>
                <div classname='icon-buttons'>
                    <button className='photo-button-ico'>Photo</button>
                    <button className='tag-button-ico'>Tag Friends</button>
                    <button className='location-button-ico'>Check in</button>
                </div> 
                <input type="submit" value="Post"/>
                </form>
        </div>

    }
}

export default PostForm;