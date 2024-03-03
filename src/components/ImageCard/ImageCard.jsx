import css from "./ImageCard.module.css";

export default function ImageCard({ article, handleOpenModal }) {
  return (
    <li className={css.item}>
      <img
        className={css.image}
        width="200"
        height="150"
        onClick={() => {
          handleOpenModal(article.urls.regular);
        }}
        src={article.urls.small}
        alt={article["alt_description"]}
      />
    </li>
  );
}
