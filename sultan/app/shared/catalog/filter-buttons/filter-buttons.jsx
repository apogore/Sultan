import Button from "@/app/ui/button/button";
import "./filter-buttons.scss";

const FilterButtons = ({ toggleUpdate, resetFilter }) => {

    return (
        <div className="filter-buttons">
			<Button
                className="filter-buttons__show-products"
                onClick={toggleUpdate}
                text="Показать"/>

			<Button
            className="filter-buttons__reset-filters"
                onClick={resetFilter}
				icon="/icons/bin_icon.svg"
			/>
		</div>
    );
};

export default FilterButtons;
