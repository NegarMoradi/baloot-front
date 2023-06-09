const Comment = ({comment}) => {
    return (
        <div className="row comment-row">
            <div className="col-xxl-8">
                <p className="comment py-3">This was awfulllllllllllllllllll!!!!</p>
                <div className="comment-details d-flex">
                    <p>2023-03-20</p>
                    <ul>
                        <li>#username</li>
                    </ul>
                </div>
            </div>
            <div className="col-xxl-4 d-flex justify-content-end align-items-end">
                <p className="comment-rate d-flex align-items-center">Is this comment helpful? <span>1 </span> <img src="/ballot-front/assets/icons/like.svg" alt="like icon"/> <span>1 </span> <img src="/ballot-front/assets/icons/dislike.svg" alt="dislike icon"/></p>
            </div>
        </div>
    )
}

export default Comment;