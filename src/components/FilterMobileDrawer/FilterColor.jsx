import {colors } from '../../constants/constant'
import { CheckBox } from '../../ui/CheckBox'

export const FiltersColors = () => (
    <div className='mt-4'>
        <h2 className=' font-barlow  text-[1.5rem]  mb-1.5 text-[#365644] '>
            Colors
        </h2>
        {colors.map(color => (
            <div className='flex items-center gap-4' key={color.id}>
                <CheckBox />
                {color.name}
            </div>
        ))}
    </div>
)
