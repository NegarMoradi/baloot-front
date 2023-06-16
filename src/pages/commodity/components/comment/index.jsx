import like from "../../../../assets/icons/like.svg";
import dislike from "../../../../assets/icons/dislike.svg";
import UseApi from "../../../../hooks/api";

const Comment = ({ comment, getCommentFn }) => {
  const { apiCall } = UseApi();

  const onVoteSuccess = (res) => {
    getCommentFn();
  };

  const voteApiCall = (query) => {
    apiCall({
      url: `http://localhost:5432/api/comments/vote/${comment.id}`,
      query,
      method: "post",
      sucessCallback: onVoteSuccess,
    });
  };

  const onLike = () => {
    voteApiCall({ vote: 1 });
  };
  const onDislike = () => {
    voteApiCall({ vote: -1 });
  };
  return (
    <div className="row comment-row">
      <div className="col-xxl-8">
        <p className="comment py-3">{comment.text}</p>
        <div className="comment-details d-flex">
          <p>{comment.date}</p>
          <ul>
            <li>{comment.username}</li>
          </ul>
        </div>
      </div>
      <div className="col-xxl-4 d-flex justify-content-end align-items-end">
        <p className="comment-rate d-flex align-items-center">
          Is this comment helpful? <span>{comment.numberOfLikes}</span>{" "}
          <img src={like} alt="like icon" onClick={onLike} /> <span>{comment.numberOfDisLikes}</span>{" "}
          <img src={dislike} alt="dislike icon" onClick={onDislike} />
        </p>
      </div>
    </div>
  );
};

export default Comment;
