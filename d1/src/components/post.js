import React from 'react';
import PropTypes from 'prop-types';

const Post = (props) => {
  const { children } = props;
  return <div className="postContent">{children}</div>;
};

Post.propTypes = {
  children: PropTypes.string,
};

Post.defaultProps = {
  children: '',
};

export default Post;
