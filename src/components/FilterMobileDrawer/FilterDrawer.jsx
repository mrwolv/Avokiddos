import { useState } from 'react'
import { LiaFilterSolid } from 'react-icons/lia'
import { Drawer } from 'antd'
import FilterRange from './FilterRange'
import FilterBoysAndGirls from './FilterBoysAndGirls'
import { FiltersColors } from './FilterColor'
import { FilterSizes } from './FilterSizes'

const FilterDrawer = () => {
    const [open, setOpen] = useState(false)

    const showDrawer = () => {
        setOpen(true)
    }
    const onClose = () => {
        setOpen(false)
    }

    return (
        <div className='mt-4 ml-4 md:hidden'>
            <div
                className='flex items-center justify-center gap-2 px-4 py-2 bg-[#3a3a3a] '
                onClick={showDrawer}
            >
                <LiaFilterSolid size={30} />
                <span className='text-white'>Filters</span>
            </div>
            <Drawer
                onClose={onClose}
                open={open}
                style={{
                    width: '75%',
                    position: 'fixed',
                    zIndex: 1,
                }}
                placement='left'
                getContainer={false}
                maskClosable={false}
                mask={true}
            >
                <FilterRange />
                <FilterBoysAndGirls />
                <FiltersColors />
                <FilterSizes />
            </Drawer>
        </div>
    )
}

export default FilterDrawer
