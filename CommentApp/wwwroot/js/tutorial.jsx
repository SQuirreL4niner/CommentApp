class CommentBox extends React.Component {
    render() {
        return (
            <div className="commentBox">Hello!! I'm a comment box!</div>
        );
    }
}

ReactDOM.render(<CommentBox />, document.getElementById('content'));