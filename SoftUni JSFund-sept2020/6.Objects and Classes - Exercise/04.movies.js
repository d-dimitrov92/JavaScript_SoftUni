function movies(array) {
    let movies = [];
    for (const line of array) {
        if(line.includes('addMovie')){
            let currentMovie = {};
            let name = line.substring(9);
            currentMovie.name = name;
            movies.push(currentMovie);
        } else if(line.includes('directedBy')){
            let [movieName, movieDirector] = line.split(' directedBy ');
            let myMovie = movies.find(x => x.name == movieName);
            if(myMovie){
                myMovie.director = movieDirector;
            }
        } else {
            let [movieName, movieDate] = line.split(' onDate ');
            let myMovie = movies.find(x => x.name == movieName);
            if(myMovie){
                myMovie.date = movieDate;
            }
        }
    }
    movies.forEach(movie => {
        if(movie.name && movie.date && movie.director){
            console.log(JSON.stringify(movie));
        }
    })
}

movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
    ]
    );