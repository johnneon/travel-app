import { connect } from 'react-redux';
import { MediaPlayer } from '../components/MediaPlayer';
import { IRootState } from '../store/redusers';
import { variables } from '../data/variables';

const mapStateToProps = (state: IRootState) => {
  const { videoUrl } = state?.country?.country;
  
  const parseRegExp = variables.YOUTOBE_REG_EXP;
  
  const persedUrl = videoUrl.match(parseRegExp) || [];

  const videoId = `${persedUrl[1]}`;

  return { videoId };
};

export default connect(
  mapStateToProps
)(MediaPlayer);