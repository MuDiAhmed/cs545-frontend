import OnClickFavoriteList, { OnClickRequest } from "./OnButtonClick";
import { Button } from "react-bootstrap";

export default function FavoriteList() {
  return (
    <div>
      <div>
        <p>
          <Button variant="primary" onClick={OnClickFavoriteList}>
            Add to Favorite List
          </Button>
        </p>
      </div>
    </div>
  );
}
export function Request() {
  return (
    <div>
      <div>
        <p>
          <Button variant="primary" onClick={OnClickRequest}>
            Request for Rent/Buy
          </Button>
        </p>
      </div>
    </div>
  );
}
