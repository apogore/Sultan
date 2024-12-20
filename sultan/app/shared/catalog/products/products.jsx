import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import MiniCard from "@/app/shared/mini-card/mini-card";
import "./products.scss";

const FilteredProducts = ({ update }) => {
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
        console.log(selectedCategoryFilter);
        const selectedManufacturersFilter = JSON.parse(localStorage.getItem('selectedManufacturers'));
        console.log(selectedManufacturersFilter);
        const selectedBrandsFilter = JSON.parse(localStorage.getItem('selectedBrands'));
        console.log(selectedBrandsFilter);
        const selectedMinPriceFilter = JSON.parse(localStorage.getItem('selectedMinPrice'));
        console.log(selectedMinPriceFilter);
        const selectedMaxPriceFilter = JSON.parse(localStorage.getItem('selectedMaxPrice'));
        console.log(selectedMaxPriceFilter);

        const applyFilters = () => {
            let filtered = products;

            if (selectedCategoryFilter !== null && selectedCategoryFilter !='') {
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

    return (
        <div className="catalog-products">
                    {filteredProducts.map((product) => (
                        <MiniCard
                            key={product.id}
                            product={product}
                            onClick={handleCardClick}
                        />
                    ))}
        </div>
    );

};

export default FilteredProducts;
