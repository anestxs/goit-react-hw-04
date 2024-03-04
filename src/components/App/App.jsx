import fetchPhotos from "../../fetchPhotos";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import ImageGallery from "../ImageGallery/ImageGallery";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../ImageModal/ImageModal";
import SearchBar from "../SearchBar/SearchBar";
import { useEffect, useState } from "react";
import { InfinitySpin } from "react-loader-spinner";

export default function App() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [openedImage, setOpenedImage] = useState("");
  const [modalIsOpened, setModalIsOpened] = useState(false);
  const [showBtn, setShowBtn] = useState(false);

  useEffect(() => {
    if (query === "") {
      return;
    }
    const getData = async () => {
      try {
        setIsLoading(true);
        setIsError(false);
        const data = await fetchPhotos(query, page);
        const totalPages = data.total_pages;
        setShowBtn(totalPages && totalPages !== page);
        setArticles((prevArticles) => {
          return [...prevArticles, ...data.results];
        });
      } catch (e) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [page, query]);

  const handleSubmit = (newQuery) => {
    setQuery(newQuery);
    setPage(1);
    setArticles([]);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  const handleOpenModal = (image) => {
    setOpenedImage(image);
  };

  const openModal = () => {
    setModalIsOpened(true);
  };

  const closeModal = () => {
    setModalIsOpened(false);
  };

  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      {articles.length > 0 && (
        <ImageGallery handleOpenModal={handleOpenModal} articles={articles} />
      )}
      {isLoading && (
        <InfinitySpin
          visible={true}
          width="200"
          color="blue"
          ariaLabel="infinity-spin-loading"
        />
      )}
      {isError && <ErrorMessage />}
      {showBtn && <LoadMoreBtn onClick={handleLoadMore} />}
      {openedImage && (
        <ImageModal
          image={openedImage}
          isOpen={openModal}
          onClose={closeModal}
        />
      )}
    </>
  );
}
