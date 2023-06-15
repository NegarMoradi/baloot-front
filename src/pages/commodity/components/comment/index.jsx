import like from '../../../../assets/icons/like.svg';
import dislike from '../../../../assets/icons/dislike.svg';

const Comment = ({comment}) => {
    return (
        <div className="row comment-row">
            <div className="col-xxl-8">
                <p className="comment py-3">This was awfulllllllllllllllllll!!!!</p>
                <div className="comment-details d-flex">
                    <p>{comment.date}</p>
                    <ul>
                        <li>{comment.username}</li>
                    </ul>
                </div>
            </div>
            <div className="col-xxl-4 d-flex justify-content-end align-items-end">
                <p className="comment-rate d-flex align-items-center">Is this comment helpful? <span>1 </span> <img src={like} alt="like icon"/> <span>1 </span> <img src={dislike} alt="dislike icon"/></p>
            </div>
        </div>
    )
}

export default Comment;