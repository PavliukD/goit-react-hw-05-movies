

function ReviewsCards({reviewsContent}){
    return(
        <ul>
            {reviews.map(review => {
                <li>
                    <p>Author: {reviewsContent.author}</p>
                    <p>{reviewsContent.content}</p>
                </li>
            })}
        </ul>
    )
}

export default ReviewsCards