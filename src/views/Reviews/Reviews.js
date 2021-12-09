import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getMovieReviews } from '../../api/api'
import ReviewsCards from '../../components/ReviewsCards/ReviewsCards'
import s from './Reviews.module.css'

function Reviews(){

    const [reviews, setReviews] = useState([])
    const {id} = useParams()

    useEffect(() => {
        getMovieReviews(id).then(response => {
            return response.json()
        }).then(data => {
            setReviews(data.results)
        })
    },[id])


    return(
        <>
        {reviews.length ? <ReviewsCards reviewsContent={reviews} /> : <p className={s.notification}>We don't have any reviews for this movie</p>}
        </>
    )
}

export default Reviews
