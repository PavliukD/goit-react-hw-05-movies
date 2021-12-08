import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getMovieReviews } from '../../api/api'
import { ReviewsCards } from '../../components/Reviews/ReviewsCards'

function Reviews(){

    const [reviews, setReviews] = useState([])
    const {id} = useParams()

    useEffect(() => {
        getMovieReviews(id).then(response => {
            return response.json()
        }).then(data => {
            console.log(data.results)
            console.log(data.results.length ? true : false)
            setReviews(data.results)
        })
    },[id])


    return(
        <>
        <ReviewsCards reviewsContent={reviews} />
        </>
        // {if (reviews) {
        //     <p>We don't have any reviews for this movie</p>
        //     return
        // }
        // } />}
    )
}

export default Reviews
