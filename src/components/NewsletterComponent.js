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
      <Flex className="newsletter" flexDirection='column' >
            <img src={this.props.blogImgUrl} alt=""></img>
            <h3>{this.props.blogName}</h3>
            <h5>{this.props.blogDescAndDate}</h5>
            <p>
              {this.props.blogContent}
            </p>
        <Flex flexDirection='column' class="commentSection">
          <Flex justifyContent='space-between' p='2'>
              <Button variant='outline' size='md'>Read More &gt; &gt;</Button>
              <span onClick={this.isCommentSectionClosed}> <b><u>Comments</u> &nbsp;</b><span class="w3-tag">{this.state.commentsCounter}</span></span>
          </Flex>
          <Flex justifyContent='space-between' p='2' hidden={this.state.isCommentSectionClosed ? true : false}>
              <Input placeholder='Comment Section --->' onChange={this.writeComment.bind(this)} value = {this.state.commentInput} />
              <Button variant='outline' size='md' onClick={this.saveComment.bind(this)}>Save Comment</Button>
          </Flex>
          <Flex justifyContent='flex-end'>
            <Box variant='outline' size='md' bg='lightgreen' onClick={this.showAllComment.bind(this)}><b><u>Show All Comments</u></b></Box>
            <Box hidden={this.state.isCommentsHidden ? true : false}>
                Below are comments posted yet:
                {this.state.commentStore.map((value, index) => {
                 return <li key={index}>{value}</li>
              })}
            </Box>
          </Flex>
        </Flex>
      </Flex>
    );
  }
}

export default NewsletterComponent;
