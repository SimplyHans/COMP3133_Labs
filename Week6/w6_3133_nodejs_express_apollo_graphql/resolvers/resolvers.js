import MovieModel from '../models/movie.js';

// Resolvers define the technique for fetching the types defined in the schema.
const movieResolvers = {
    Query: {
        movies: async () => {
            return await MovieModel.find();
        },
        movie: async (parent, args) => { 
            return await MovieModel.findById(args.id);
        },
        moviesByDirector: async (_, { director_name }) =>  {
            return await MovieModel.find({ director_name });
        }
    },
    Mutation: {
        createMovie: async (parent, args) => {
            const newMovie = new MovieModel(args);
            return await newMovie.save();
        },
        updateMovie: async (parent, args) => {
            const { id, ...updateData } = args;
            return await MovieModel.findByIdAndUpdate(id, updateData, { new: true });
        },
        deleteMovie: async (parent, args) => {
            return await MovieModel.findByIdAndDelete(args.id);
        }
    }
}

export default movieResolvers