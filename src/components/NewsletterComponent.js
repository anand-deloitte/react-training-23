import React, { Component } from "react";
import { Flex, Button, Box, Input } from "@chakra-ui/react";

// StateFul Component
class NewsletterComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCommentSectionClosed: true,
      commentsCounter: 0,
      commentInput: '',
      commentStore: [],
      isCommentsHidden: true
      }
  }
  isCommentSectionClosed = () => {
    if (this.state.isCommentSectionClosed) {
      this.setState( () => {return this.state.isCommentSectionClosed = false} );
    } else {
      this.setState( () => {return this.state.isCommentSectionClosed = true} );
    }
  };

  writeComment = ( e ) => {
    this.setState({
      commentInput: e.target.value
    });
}

  saveComment = () => {
    console.log('SaveComment', this.state.commentInput);
    if(this.state.commentInput != null && this.state.commentInput != '' ) {
      this.setState ( (prevState) => ({commentsCounter:  prevState.commentsCounter + 1 }) );
      this.state.commentStore.push(this.state.commentInput);
    }
  };

  showAllComment = () => {
    if (this.state.isCommentsHidden) {
      this.setState( () => {return this.state.isCommentsHidden = false} );
    } else {
      this.setState( () => {return this.state.isCommentsHidden = true} );
    }
  };

  render() {
    return (
      <Flex className="newsletter w3-card-4 w3-margin w3-white" flexDirection='column' bg='white' m='16px' >
            <img src={this.props.blogImgUrl} alt=""></img>
            <div class="w3-container">
              <h3><b>{this.props.blogName}</b></h3>
              <h5>{this.props.blogDescAndDate}</h5>
            </div>
            <div className="w3-container">
            <p>
              {this.props.blogContent}
            </p>
            <Flex flexDirection='column' class="commentSection">
              <Flex justifyContent='space-between' pb='16px'>
                  <Button variant='outline' size='md' className="error-button">Read More &gt; &gt;</Button>
                  <span onClick={this.isCommentSectionClosed}> <b><u>Comments</u> &nbsp;</b><span class="w3-tag">{this.state.commentsCounter}</span></span>
              </Flex>
              <Flex justifyContent='space-between' hidden={this.state.isCommentSectionClosed ? true : false} pb='16px'>
                  <Input placeholder='Comment Section --->' onChange={this.writeComment.bind(this)} value = {this.state.commentInput} /> &nbsp; &nbsp;
                  <Button variant='outline' size='md' className="error-button" onClick={this.saveComment.bind(this)}>Save Comment</Button>
              </Flex>
              <Flex flexDirection='column' justifyContent='center' pb='4'>
                <Button variant='outline' className="show-all-comments"  size='md' bg='cadetblue' onClick={this.showAllComment.bind(this)}><b><u>Show All Comments</u></b></Button>
                <Box hidden={this.state.isCommentsHidden ? true : false} mt='4px' >
                  <Box bg='powderblue'>
                    Below are comments posted yet:
                    {this.state.commentStore.map((value, index) => {
                    return <li key={index}>{value}</li>
                  })}
                  </Box>
                </Box>
              </Flex>
            </Flex>
          </div>
      </Flex>
    );
  }
}

export default NewsletterComponent;
