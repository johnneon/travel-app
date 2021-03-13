import { connect } from 'react-redux';
import Map from '../components/Map';
import { IRootState } from '../store/redusers';

const mapStateToProps = (state: IRootState) => {
  const { coordinates } = state.country.country.capitalLocation;
  
  return { coordinates };
};

export default connect(
  mapStateToProps
)(Map);