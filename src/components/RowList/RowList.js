import React from 'react';
import Row from './Row';
import requests, { getData, requestData } from '../../Request';


const RowList = ({movieDetails}) => {


    

    return (
        <React.Fragment>

            <Row
                title='Trending Now'
                fetchUrl={requests.fetchTrending}
                isLargeRow
            />

            <Row
                title='Top Rated'
                fetchUrl={requests.fetchTopRated}
            />

            <Row
                title='Action Movies'
                fetchUrl={requests.fetchActionMovies}
            />

            <Row
                title='Comedy Movies'
                fetchUrl={requests.fetchComedyMovies}
            />

            <Row
                title='Horror Movies'
                fetchUrl={requests.fetchHorrorMovies}
            />
            <Row
                title='Romance Movies'
                fetchUrl={requests.fetchRomanceMovies}
            />

            <Row
                title='Documentaries'
                fetchUrl={requests.fetchDocumentaries}
            />


        </React.Fragment>
    )
}

console.log()

export const loader = async () => {
    const movies = requestData.map(request => {
        const data = {
            title: request.title,
            posters: getData(request.fetchUrl)
        }

        return data;
    })

    return movies;
}

export default RowList;