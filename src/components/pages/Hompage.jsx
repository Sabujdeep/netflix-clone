import React from 'react'
import Main from '../Main'
import Row from '../Row'
import request from '../Request'

const Hompage = () => {
  return (
    <div>
            <Main/>
            <Row rowId='1' title='Up Coming' url={request.requestUpcoming} />
            <Row rowId='2' title='Popular' url={request.requestPopular} />
            <Row rowId='3' title='Top Rated' url={request.requestTopRated} />
            <Row rowId='4' title='Trending' url={request.requestTrending} />
            <Row rowId='5' title='Horror' url={request.requestHorror} />
    </div>
  )
}

export default Hompage
