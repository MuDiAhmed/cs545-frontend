import FavoriteList from "./FavoriteList";
import TopPanel from "./FavoriteListTopPanel";
import FooterInfo from "./FooterInfo";

export default function CustomerFavoriteList() {
  return (
    <div
      class="container"
      style={{ minHeight: 100 + "vh", marginTop: 70 + "px" }}
    >
      <div class="d-flex justify-content-start align-items-center row ">
        <div class="col-sm-7">
          {" "}
          <TopPanel />
        </div>
        <div>
          <h3 class="d-flex p-1  "> Your Favorite List</h3>
        </div>
        <div>
            <FavoriteList/>
        </div>
        <div>
            <FooterInfo/>
        </div>
      </div>
    </div>
  );
}
