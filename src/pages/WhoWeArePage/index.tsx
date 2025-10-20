import React from 'react';
import { Footer } from '../../design-system/organisms';
import './WhoWeArePage.css';

const WhoWeArePage: React.FC = () => {
  return (
    <div className="who-we-are-page">
      {/* Hero Section with Overlay Title */}
      <div className="who-we-are-hero">
        <div className="who-we-are-hero__image">
          <img 
            src="https://images.unsplash.com/photo-1577083552431-6e5fd01988ec?w=1600" 
            alt="Art & Venture Foundation Gallery" 
          />
        </div>
        
        <div className="who-we-are-hero__overlay">
          <h1 className="who-we-are-hero__title">
            Art & Venture Foundation:<br />
            Who we are
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="who-we-are-content">
        <div className="who-we-are-content__container">
          <p className="who-we-are-content__paragraph">
            Lorem ipsum dolor sit amet consectetur. Massa turpis ullamcorper eget elementum feugiat sit quam dolor. Mauris in convallis interdum facilisis platea sapien. Scelerisque porttitor iaculis in mauris elementum eu vulputate. Viverra neque sit ridiculus orci amet quisque sodales sapien sollicitudin.
          </p>

          <p className="who-we-are-content__paragraph">
            Lorem ipsum dolor sit amet consectetur. Pellentesque viverra adipiscing vel dignissim elementum sed. Cum nec morbi posuere in hendrerit semper a ac massa. Blandit enim eu mauris lacus accumsan. Sit integer magna purus tincidunt in ipsum. Egestas nam nec suscipit dignissim tincidunt ac. Consequat volutpat odio tortor a nulla volutpat vehicula quis pharetra. Orci cursus consectetur vitae sit pulvinar tellus. Amet tortor.
          </p>

          <p className="who-we-are-content__paragraph">
            Lorem ipsum dolor sit amet consectetur. Leo morbi tincidunt integer consectetur nam eget vel gravida sem. Consectetur blandit suspendisse dui nulla ut purus sit. Volutpat iaculis ut mauris gravida. Amet in arcu purus leo maecenas euismod commodo. Aenean adipiscing pulvinar lectus urna tristique viverra a. Elit blandit venenatis ornare enim morbi maecenas et ultricies. Sed tortor facilisis nulla integer. Turpis habitasse nec aliquam nulla elementum sapien viverra feugiat et. Molestie mus tincidunt rhoncus.
          </p>

          <p className="who-we-are-content__paragraph">
            Aenean adipiscing pulvinar lectus urna tristique viverra a. Elit blandit venenatis ornare enim morbi maecenas et ultricies. Sed tortor facilisis nulla integer. Turpis habitasse nec aliquam nulla elementum sapien viverra feugiat et. Molestie mus tincidunt rhoncus.
          </p>

          <p className="who-we-are-content__paragraph">
            Lorem ipsum dolor sit amet consectetur. Amet eu convallis vivamus tortor urna magna tristique consectetur. Ornare ipsum sem phasellus non. Id semper auctor ut est tincidunt pellentesque eu ac. Felis nisi duis dictum euismod urna erat egestas malesuada sit. Sed cras nulla senectus urna urna.
          </p>

          <p className="who-we-are-content__paragraph">
            Lorem ipsum dolor sit amet consectetur. Facilisis justo nullam nulla consequat vulputate mi in sed mattis. Gravida augue mi suspendisse convallis. Varius nulla urna quis massa. Purus fermentum nunc faucibus felis tellus leo orci vulputate. Faucibus nunc nullam sit nulla. Vitae amet adipiscing etiam volutpat est libero eu et. Tellus nulla.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default WhoWeArePage;

