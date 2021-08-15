import { Wrapper } from "./styles";
import { SuitHeart, SuitHeartFill } from "react-bootstrap-icons";
import { useHistory } from "react-router-dom";

function DealItem({ dealObj }) {
  let history = useHistory();
  const dealCreatedTime = timeForToday(dealObj.dealCreatedAt);
  function timeForToday(value) {
    const today = new Date();
    const timeValue = new Date(value);

    const betweenTime = Math.floor(
      (today.getTime() - timeValue.getTime()) / 1000 / 60
    );
    if (betweenTime < 1) return "방금 전";
    if (betweenTime < 60) {
      return `${betweenTime}분 전`;
    }

    const betweenTimeHour = Math.floor(betweenTime / 60);
    if (betweenTimeHour < 24) {
      return `${betweenTimeHour}시간 전`;
    }

    const betweenTimeDay = Math.floor(betweenTime / 60 / 24);
    if (betweenTimeDay < 365) {
      return `${betweenTimeDay}일 전`;
    }

    return `${Math.floor(betweenTimeDay / 365)}년 전`;
  }
  function textSlicer(text) {
    if (text.length > 18) {
      return text.slice(0, 15) + "...";
    }
    return text;
  }
  return (
    <Wrapper onClick={() => history.push(`/deal/${dealObj.dealId}`)}>
      <div className="image-container">
        <img
          className="book-image"
          src={dealObj.dealImage}
          alt="book"
          onError={(e) => {
            e.target.src =
              "https://historyexplorer.si.edu/sites/default/files/book-348.jpg";
          }}
        />
      </div>
      <div className="content">
        <h2 className="deal-title">{textSlicer(dealObj.dealTitle)}</h2>
        <h2 className="book-title">
          {textSlicer(dealObj.bookTitle)}
          <span className="quality">{dealObj.dealQuality}</span>
        </h2>
        <div className="detail">
          <div>
            <div>
              <span className="author">{dealObj.bookAuthor}</span>
              <span className="publisher">{dealObj.bookPublisher}</span>
            </div>
            <span className="created">{dealCreatedTime}</span>
          </div>
          <div>
            <strong className="price">{dealObj.dealPrice}원</strong>
            {dealObj.isLikeDeal ? (
              <SuitHeartFill className="heart-filled" />
            ) : (
              <SuitHeart className="heart" />
            )}
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default DealItem;
