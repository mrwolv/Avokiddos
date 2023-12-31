import { useState } from 'react'
import { FiltersColors } from '../FilterMobileDrawer/FilterColor'
import { FilterSizes } from '../FilterMobileDrawer/FilterSizes'
import FilterDrawer from '../FilterMobileDrawer/FilterDrawer'
import FilterBoysAndGirls from '../FilterMobileDrawer/FilterBoysAndGirls'
import FilterRange from '../FilterMobileDrawer/FilterRange'

const FilterShopping = () => {
    const [inputValue, setInputValue] = useState(0)

    const onChange = newValue => {
        setInputValue(newValue)
    }

    function handleReset () {
        setInputValue(0)
    }

    return (
        <div className='mb-4 md:mb-0 '>
            <FilterDrawer
                onChange={onChange}
                inputValue={inputValue}
                handleReset={handleReset}
            />
            <div className='hidden md:flex md:flex-col md:justify-center '>
                <FilterRange
                    onChange={onChange}
                    inputValue={inputValue}
                    handleReset={handleReset}
                />
                {/* This is for the boys and girls items to show  */}
                <FilterBoysAndGirls />

                {/* Colors list */}
                <FiltersColors />
                {/* Sizes */}
                <FilterSizes />
            </div>
        </div>
    )
}

export default FilterShopping
