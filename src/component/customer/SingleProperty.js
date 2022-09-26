import PropertyDescription from "./PropertyDescription";

export default function SingleProerty() {
  return (
    <div class="container text-center">
      <div class="row row-cols-2">
        <div class="col">
          <img
            className="img1"
            src="https://yourintegrityhome.com/wp-content/uploads/2021/03/Home-Cover-Image-1.jpg"
            alt="Property1"
            width="280"
            height="170"
          />
        </div>
        <div class="col">
          <PropertyDescription />{" "}
        </div>
      </div>
    </div>
  );
}
