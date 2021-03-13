import { connect } from 'react-redux';
import Gallery from '../components/AttractionsGallery';
import { IRootState } from '../store/redusers';

const mapStateToProps = (state: IRootState) => {
  const { id} = state.country.country;

  return {  id };
};

export default connect(mapStateToProps)(Gallery);
