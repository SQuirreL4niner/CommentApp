/*class CommentBox extends React.Component {
    render() {
        return (
            <div className="commentBox">Hello!! I'm a comment box!</div>
        );
    }
}*/
function createRemarkable() {
    var remarkable = 
        'undefined' != typeof global && global.Remarkable
                    ? global.Remarkable
                    : window.Remarkable;
    return new remarkable();
}

class CommentList extends React.Component {
    render() {
          const commentNodes = this.props.data.map(comment => (
              <Comment author={comment.author} key={comment.id}>
                  {comment.text}
              </Comment>
          ));
          return <div className="commentList">{commentNodes}</div>;
    }
}

class CommentForm extends React.Component {
    render() {
        return (
            <div className="commentForm">Hello!! I am a comment form!</div>
        )
    }
}

class Comment extends React.Component {
    rawMarkup() {
        const md = new Remarkable();
        const rawMarkup = md.render(this.props.children.toString());
        return { __html: rawMarkup };
    }
    render() {
        return(
            <div className="comment">
                <h2 className="commentAuthor">{this.props.author}</h2>
                <span dangerouslySetInnerHTML={this.rawMarkup()}/>
            </div>
        );
    }
}

class CommentBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: [] };
    }
    componentWillMount() {
        const xhr = new XMLHttpRequest();
        xhr.open('get', this.props.url, true);
        xhr.onload = () => {
            const data = JSON.parse(xhr.responseText);
            this.setState({ data: data });
        };
        xhr.send();
    }
    render() {
        return (
            <div className="commentBox">
                <h1>Comments</h1>
                <CommentList data={this.state.data}/>
                <CommentForm />
            </div>
        );
    }
}

const data = [
    { id: 1, author: 'Daniel Lo Nigro', text: 'Hello ReactJS.NET World!'},
    { id: 2, author: 'Pete Hunt', text: 'This is one comment'},
    { id: 3, author: 'Jordan Walke', text: 'This is *another* comment'}
]

ReactDOM.render(
    <CommentBox url="/comments" />,
    document.getElementById('content')
);