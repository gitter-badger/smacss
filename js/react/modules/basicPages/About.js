import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
export default class About extends React.Component {
	render() {
		return (
      <section className="main">
        <div className="main--banner clearfix">
          <img src="http://lorempixel.com/image_output/business-q-c-1398-582-6.jpg" />
        <ReactCSSTransitionGroup
          component="div"
          transitionName="route"
          className="main--banner-content"
          transitionEnterTimeout={600}
          transitionAppearTimeout={600}
          transitionLeaveTimeout={400}
          transitionAppear={true}
        >
        <div className="main--banner-content-inner">
            <h2>The Crew</h2>
            <p>is the master mind of dope warfare Curabitur non lectus tellus. Aenean a augue facilisis, dignissim odio ac, commodo arcu. Sed nec ultrices erat, in porttitor leo. Donec non arcu sed dui sagittis mollis eget quis metus. Ut tempor sit amet ipsum vel congue. Nunc fermentum purus sem, et placerat mauris malesuada non. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed et tellus at quam sodales mollis. Fusce mi ipsum, ultricies non molestie id, faucibus at eros. Maecenas ac urna id justo tempus ullamcorper. Praesent tincidunt elit a nibh accumsan, vel fringilla eros tristique.</p>
        </div>
          </ReactCSSTransitionGroup>
        </div>
        <div className="main--inner">
          <div class="team--member">
            <h2>Jose Lo Jr. - <span>Full Stack JS Developer / Founder</span></h2>
            <img src="http://dummyimage.com/150x150/000/fff.png" />
            <p>is the master mind of dope warfare Curabitur non lectus tellus. Aenean a augue facilisis, dignissim odio ac, commodo arcu. Sed nec ultrices erat, in porttitor leo. Donec non arcu sed dui sagittis mollis eget quis metus. Ut tempor sit amet ipsum vel congue. Nunc fermentum purus sem, et placerat mauris malesuada non. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed et tellus at quam sodales mollis. Fusce mi ipsum, ultricies non molestie id, faucibus at eros. Maecenas ac urna id justo tempus ullamcorper. Praesent tincidunt elit a nibh accumsan, vel fringilla eros tristique.</p>
          </div>
          <div class="team--member">
            <h2>Jeu Guarino - <span>Full Stack JS Developer / Co-Founder</span></h2>
            <img src="http://dummyimage.com/150x150/000/fff.png" />
            <p>is the master mind of dope warfare Curabitur non lectus tellus. Aenean a augue facilisis, dignissim odio ac, commodo arcu. Sed nec ultrices erat, in porttitor leo. Donec non arcu sed dui sagittis mollis eget quis metus. Ut tempor sit amet ipsum vel congue. Nunc fermentum purus sem, et placerat mauris malesuada non. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed et tellus at quam sodales mollis. Fusce mi ipsum, ultricies non molestie id, faucibus at eros. Maecenas ac urna id justo tempus ullamcorper. Praesent tincidunt elit a nibh accumsan, vel fringilla eros tristique.</p>
          </div>
          <div class="team--member">
            <h2>Jose Maria Jocom - <span>Project Manager / Co-founder</span></h2>
            <img src="http://dummyimage.com/150x150/000/fff.png" />
            <p>is the master mind of dope warfare Curabitur non lectus tellus. Aenean a augue facilisis, dignissim odio ac, commodo arcu. Sed nec ultrices erat, in porttitor leo. Donec non arcu sed dui sagittis mollis eget quis metus. Ut tempor sit amet ipsum vel congue. Nunc fermentum purus sem, et placerat mauris malesuada non. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed et tellus at quam sodales mollis. Fusce mi ipsum, ultricies non molestie id, faucibus at eros. Maecenas ac urna id justo tempus ullamcorper. Praesent tincidunt elit a nibh accumsan, vel fringilla eros tristique.</p>
          </div>
          <div class="team--member">
            <h2>Michael Landas - <span>UX Design / Graphics / Co-Founder</span></h2>
            <img src="http://dummyimage.com/150x150/000/fff.png" />
            <p>is the master mind of dope warfare Curabitur non lectus tellus. Aenean a augue facilisis, dignissim odio ac, commodo arcu. Sed nec ultrices erat, in porttitor leo. Donec non arcu sed dui sagittis mollis eget quis metus. Ut tempor sit amet ipsum vel congue. Nunc fermentum purus sem, et placerat mauris malesuada non. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed et tellus at quam sodales mollis. Fusce mi ipsum, ultricies non molestie id, faucibus at eros. Maecenas ac urna id justo tempus ullamcorper. Praesent tincidunt elit a nibh accumsan, vel fringilla eros tristique.</p>
          </div>
				</div>
			</section>
		);
	}
}