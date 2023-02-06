import React, { Component} from "react";
//ES6
class Comment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: [],
            value: '',
            showCommentBox: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    openCommentBox = () => {
        this.setState({showCommentBox: true});
        if (this.state.showCommentBox) {
            this.setState({showCommentBox: false});
        }
    };

    handleSubmit(event) {
        this.setState({comments: [...this.state.comments, this.state.value]});
        this.setState({showCommentBox: false});
        event.preventDefault();
    };

    handleChange(event) {
        this.setState({value: event.target.value});
    };

    render() {
        return (
            <div>
                <button className="comments" onClick={this.openCommentBox}>Comments</button>
                <span  className="comment-count">{this.state.comments.length}</span>
                {this.state.showCommentBox &&
                    <div>
                        <input type="text" value={this.state.value} onChange={this.handleChange} />
                        <input type="submit" value="Save" onClick={this.handleSubmit} />
                        {this.state.comments.map((value, index) => {
                            return <p key={index}>{value}</p>
                        })
                        }
                    </div>
                }
            </div>
        );
    }
}

export default Comment;
