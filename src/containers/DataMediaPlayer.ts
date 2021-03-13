import { connect } from 'react-redux';
import { MediaPlayer } from '../components/MediaPlayer';
import { IRootState } from '../store/redusers';

const mapStateToProps = (state: IRootState) => {
  const { videoUrl } = state.country.country;

  const parseRegExp = /.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#&?]*).*/;
  
  const persedUrl = videoUrl.match(parseRegExp) || [];

  const videoId = `${persedUrl[1]}`;

  return { videoId };
};

export default connect(
  mapStateToProps
)(MediaPlayer);