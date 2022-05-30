import PropTypes from 'prop-types';

function Content(props) {
  return <div>{props.title}{props.lname}</div>
}

Content.defaultProps={
  lname: 'ram'
}

Content.propTypes={
  lname:PropTypes.string
}

export default Content;