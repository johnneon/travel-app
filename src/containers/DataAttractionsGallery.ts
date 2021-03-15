import { connect } from 'react-redux';
import Gallery from '../components/AttractionsGallery';
import { IRootState } from '../store/redusers';

const mapStateToProps = (state: IRootState) => {
  const { places} = state.country.country;

  return {  places };
};

export default connect(mapStateToProps)(Gallery);
