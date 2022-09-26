import Carousel from 'react-bootstrap/Carousel';

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://bobbyhadz.com/images/blog/react-prevent-multiple-button-clicks/thumbnail.webp"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Master Bed Room</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://bobbyhadz.com/images/blog/react-prevent-multiple-button-clicks/thumbnail.webp"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>living room</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://bobbyhadz.com/images/blog/react-prevent-multiple-button-clicks/thumbnail.webp"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>bed room</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;