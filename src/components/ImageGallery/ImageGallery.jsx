import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

export default function ImageGallery({ articles, handleOpenModal }) {
  return (
    <ul className={css.list}>
      {articles.map((article) => {
        return (
          <ImageCard
            handleOpenModal={handleOpenModal}
            key={article.id}
            article={article}
          />
        );
      })}
    </ul>
  );
}
