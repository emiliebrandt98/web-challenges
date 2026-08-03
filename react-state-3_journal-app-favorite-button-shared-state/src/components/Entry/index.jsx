import FavoriteButton from "../FavoriteButton";
import "./Entry.css";

export default function Entry({
  onToggleFavorite,
  isFavorite,
  id,
  date,
  motto,
  notes,
}) {
  return (
    <article className="entry">
      <time className="entry__date">{date}</time>
      <div className="entry__content">
        <div className="entry__motto-container">
          <h2 className="entry__motto">
            <q>{motto}</q>
          </h2>
          <FavoriteButton
            isFavorite={isFavorite}
            id={id}
            onToggleFavorite={onToggleFavorite}
          />
        </div>
        <p className="entry__notes">{notes}</p>
      </div>
    </article>
  );
}
