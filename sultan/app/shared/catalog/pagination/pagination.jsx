import { useEffect, useState } from 'react';
import { useRouter } from "next/navigation";
import MiniCard from "@/app/shared/mini-card/mini-card";
import Button from "@/app/ui/button/button";
import "./pagination.scss";

const Pagination = ({ filteredProducts, productView }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;
  const router = useRouter();

  const handleCardClick = (productId) => {
      router.push(`/shared/product/${productId}`);
  };

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  const currentItems = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  if (currentItems.length == 0) return (
    <div className="pagination__empty">
        Подходящие товары не найдены
    </div>
  )

  return (
    <div className="pagination">
        <div className="pagination__slide">
            {currentItems.map((product) => (
                <MiniCard
                    className={`${productView ? "card" : "row"}`}
                    key={product.id}
                    product={product}
                    onClick={handleCardClick}
                />
            ))}
        </div>

      <nav className="pagination__nav">
          {pageNumbers.map((number) => (
            <Button
              key={number}
              className={`pagination__nav__button ${currentPage === number && 'active'}`}
              onClick={() => handlePageClick(number)}
              text={number}
            />
          ))}
      </nav>
    </div>
  );
};

export default Pagination;