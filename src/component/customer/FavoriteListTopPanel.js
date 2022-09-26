import News from "./CarouselNews";
import UncontrolledExample from "./Slider";

export default function TopPanel() {
  return (
    <div class="d-flex justify-content-between">
      <div>
        <img
          className="img1"
          src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/brewster-mcleod-architects-1486154143.jpg"
          alt="Property1"
          class="rounded float-left opacity-75" 
          width="250" height="170"
          
        />
      </div>
      <div>
       <News/>
      </div>
      <div>
        <img
          className="img1"
          src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/brewster-mcleod-architects-1486154143.jpg"
          alt="Property1"
          class="rounded float-left opacity-75"
          width="250" height="170"
        />
      </div>
    </div>
  );
}
