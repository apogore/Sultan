import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import MiniCard from "@/app/shared/mini-card/mini-card";
import "./products.scss";

const FilteredProducts = ({ update, sortOrder, productView }) => {
    const MOBILE_MAX_WIDTH = 768;
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [isMobile, setIsMobile] = useState(false);
    const router = useRouter();

    const handleCardClick = (productId) => {
        router.push(`/shared/product/${productId}`);
    };

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("/mini-card/product.json");
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            const fetchedData = await response.json();

            setProducts(fetchedData);
            setFilteredProducts(fetchedData);
        };
        fetchData();
    }, []);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= MOBILE_MAX_WIDTH);
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        const selectedCategoryFilter = JSON.parse(localStorage.getItem('selectedCategory'));
        const selectedManufacturersFilter = JSON.parse(localStorage.getItem('selectedManufacturers'));
        const selectedBrandsFilter = JSON.parse(localStorage.getItem('selectedBrands'));
        const selectedMinPriceFilter = JSON.parse(localStorage.getItem('selectedMinPrice'));
        const selectedMaxPriceFilter = JSON.parse(localStorage.getItem('selectedMaxPrice'));

        const applyFilters = () => {
            let filtered = products;

            if (selectedCategoryFilter !== null && selectedCategoryFilter != '') {
                filtered = filtered.filter(product =>
                    product.category.some(category => selectedCategoryFilter.name.includes(category)));
            };

            if (selectedMinPriceFilter !== null && selectedMinPriceFilter !== '') {
                const minPrice = parseFloat(selectedMinPriceFilter);
                filtered = filtered.filter(product => product.price >= minPrice);
            };

            if (selectedMaxPriceFilter !== null && selectedMaxPriceFilter !== '') {
                const maxPrice = parseFloat(selectedMaxPriceFilter);
                filtered = filtered.filter(product => product.price <= maxPrice);
            };

            if (selectedManufacturersFilter && selectedManufacturersFilter.length > 0) {
                filtered = filtered.filter(product =>
                    selectedManufacturersFilter.some(manufacturer => manufacturer.name === product.manufacturer));
            };

            if (selectedBrandsFilter && selectedBrandsFilter.length > 0) {
                filtered = filtered.filter(product =>
                    selectedBrandsFilter.some(brand => brand.name === product.brand.name));
            };

            setFilteredProducts(filtered);
        };

        applyFilters();
    }, [update]);

    useEffect(() => {
        const sortedProducts = () => {
            const sorted = [...filteredProducts]; // Копируем массив товаров
            if (sortOrder === 'nameAsc') {
                return sorted.sort((a, b) => a.nameRu.localeCompare(b.nameRu)); // Сортировка по имени от А до Я
            }
            else if (sortOrder === 'nameDesc') {
                return sorted.sort((a, b) => b.nameRu.localeCompare(a.nameRu)); // Сортировка по имени от Я до А
            }
            else if (sortOrder === 'priceAsc') {
                return sorted.sort((a, b) => a.price - b.price); // Сортировка по цене от меньшего к большему
            }
            else if (sortOrder === 'priceDesc') {
                return sorted.sort((a, b) => b.price - a.price); // Сортировка по цене от большего к меньшему
            };
            return sorted;
        };

        const sortedArray = sortedProducts();
        setFilteredProducts(sortedArray);
    }, [sortOrder])

    return (
        <div className="catalog-products">
            {filteredProducts.map((product) => (
                <MiniCard
                    className={`${productView ? "card" : "row"}`}
                    key={product.id}
                    product={product}
                    onClick={handleCardClick}
                />
            ))}
        </div>
    );

};

export default FilteredProducts;
