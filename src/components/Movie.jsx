import React,{useState} from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { UserAuth } from '../context/authContext';
import { db } from '../firebase';
import { arrayUnion, doc, updateDoc } from 'firebase/firestore';

const Movie = ({movie}) => {
    const [like, setLike] = useState(false)
    const [saved, setSaved] = useState(false)
    const {user} = UserAuth()

    const movieId = doc(db, 'users', `${user?.email}`)

    const saveShow = async () => {
        if(user?.email){
            setLike(!like)
            setSaved(true)
            await updateDoc(movieId, {
                savedShows: arrayUnion({
                    id: movie.id,
                    img: movie.backdrop_path,
                    title: movie.title,
                })
            })
        } else {
            alert(`please log in to save a movie`)
        }
    }
    
    return (
        <>
            <div className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2'>
                <img
                    className='w-full h-auto block'
                    src={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`}
                    alt={movie?.title}
                />
                <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>
                    <div onClick={saveShow}>{like ? <FaHeart className='absolute top-4 left-4 text-red-500' /> : <FaRegHeart className='absolute top-4 left-4 text-gray-300' />}</div>
                    <p className='white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center'>
                        {movie?.title}
                    </p>
                </div>
            </div>
        </>
    )
}

export default Movie
