import { Collapse, Slider } from 'antd'
import { useState } from 'react'
import { FiltersColors } from '../FilterMobileDrawer/FilterColor'
import { FilterSizes } from '../FilterMobileDrawer/FilterSizes'
import FilterDrawer from '../FilterMobileDrawer/FilterDrawer'
import FilterBoysAndGirls from '../FilterMobileDrawer/FilterBoysAndGirls'
import FilterRange from '../FilterMobileDrawer/FilterRange'

const FilterShopping = () => {
    const [inputValue, setInputValue] = useState(0)
    // // const [isChecked, setIsChecked] = useState(false)
    // const [checkedItems, setCheckedItems] = useState({})

    // const handleCheckboxClick = key => {
    //     setCheckedItems(prevCheckedItems => ({
    //         ...prevCheckedItems,
    //         [key]: !prevCheckedItems[key],
    //     }))
    // }

    /* Making a checkbox Compoent for the checkbox */

    const onChange = newValue => {
        setInputValue(newValue)
    }

    function handleReset () {
        setInputValue(0)
    }

    return (
        <div className='mb-4 md:mb-0 '>
            <FilterDrawer />
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
                <FilterSizes />
            </div>
        </div>
    )
}

export default FilterShopping
