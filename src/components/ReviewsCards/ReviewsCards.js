import s from './ReviewsCards.module.css'

function ReviewsCards({reviewsContent}){

    return(
        <ul>
            {reviewsContent.map(review => {
                return(
                    <li key={review.author}>
                        <p className={s.author}>Author: {review.author}</p>
                        <p>{review.content}</p>
                    </li>
                )
            })}
        </ul>
    )
}

export default ReviewsCards