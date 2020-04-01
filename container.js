import {connect} from 'react-redux';
import Content from './content';
import {fetchMoviesAction} from './src/actions/index';

const mapStateToProps = state => {
  return {
    movies: state.contentReducer,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchMovies: () => {
      dispatch(fetchMoviesAction());
    },
  };
};

const DataContainer = connect(mapStateToProps, mapDispatchToProps)(Content);
export default DataContainer;
