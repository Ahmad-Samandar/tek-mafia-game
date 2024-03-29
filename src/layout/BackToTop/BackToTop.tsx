import React, { FC, Fragment } from 'react';

interface BackToTopProps {}

const BackToTop: FC<BackToTopProps> = () => (
  <Fragment>
	{/* <!-- Back to top --> */}
	<a href="#top" id="back-to-top"><i className="fe fe-chevron-up"></i></a>
  </Fragment>
);

export default BackToTop;
