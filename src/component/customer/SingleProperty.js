import PropertyDescription from "./PropertyDescription";

export default function SingleProerty() {
  return (
    <div class="container text-center">
      <div class="row row-cols-2">
        <div class="col">
          <img
            className="img1"
            src="https://bobbyhadz.com/images/blog/react-prevent-multiple-button-clicks/thumbnail.webp"
            alt="Property1"
            width="200"
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
