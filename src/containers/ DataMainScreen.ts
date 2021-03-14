import { connect } from 'react-redux';
import MainScreen from '../components/MainScreen';
import { IRootState } from '../store/redusers';

const mapStateToProps = (state: IRootState) => {
  const { description, imageUrl, name, capital } = state?.country?.country;

  return { description, imageUrl, name, capital };
};

export default connect(
  mapStateToProps
)(MainScreen);