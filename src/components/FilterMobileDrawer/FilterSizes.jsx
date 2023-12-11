import { sizes } from "../../constants/constant"
import { CheckBox } from "../../ui/CheckBox"


export const FilterSizes = () => (
    <div className='mt-4'>
        <h2 className='font-barlow  text-[1.5rem]  mb-1.5 text-[#365644] '>
            Sizes
        </h2>
        {sizes.map(size => (
            <div className='flex items-center gap-4' key={size.id}>
                <CheckBox />
                {size.name}
            </div>
        ))}
    </div>
)
