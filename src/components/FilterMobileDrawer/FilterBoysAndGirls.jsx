import { Collapse } from 'antd'
import { CheckBox } from '../../ui/CheckBox'

const { Panel } = Collapse

const FilterBoysAndGirls = () => {
    /* Component to show the girls Item  for filters */
    const girlsItem = (
        <>
            <div className='flex flex-col justify-center gap-4 ml-2 text-[.9rem]'>
                <div className='flex items-center gap-2'>
                    <CheckBox />

                    <span>Co-ord sets</span>
                </div>

                <div className='flex items-center gap-2 '>
                    <CheckBox />

                    <span>Dresses</span>
                </div>
                <div className='flex items-center gap-2 '>
                    <CheckBox />

                    <span>Jackets</span>
                </div>

                <div className='flex items-center gap-2'>
                    <CheckBox />

                    <span>Shirts</span>
                </div>
                <div className='flex items-center gap-2'>
                    <CheckBox />

                    <span>Winter Wear</span>
                </div>
            </div>
        </>
    )

    /* Component to show the boys item in filter */
    const boysItem = (
        <>
            <div className='flex flex-col justify-center gap-4 ml-2 text-[.9rem]'>
                <div className='flex items-center gap-2'>
                    <CheckBox />
                    <span>Co-ord sets</span>
                </div>

                <div className='flex items-center gap-2 '>
                    <CheckBox />
                    <span>Playsuits and Playsets</span>
                </div>
                <div className='flex items-center gap-2 '>
                    <CheckBox />
                    <span>Shirts</span>
                </div>

                <div className='flex items-center gap-2'>
                    <CheckBox />
                    <span>Winter wear</span>
                </div>
            </div>
        </>
    )

    /* Item arrar to render the components of boys and girls to show for filters */
    const items = [
        {
            key: '1',
            label: 'Boy',
            children: boysItem,
        },
        {
            key: '2',
            label: 'Girls',
            children: girlsItem,
        },
    ]

    return (
        <div className='mt-4'>
            <h2 className='font-barlow  text-[1.5rem]  mb-1.5 text-[#365644] '>
                Categories
            </h2>
            <Collapse bordered={false} expandIconPosition='right' ghost>
                {items.map(item => (
                    <Panel
                        header={
                            <div
                                className='flex items-center gap-4 text-[.9rem] relative'
                                key={item.key}
                            >
                                {' '}
                                <div className='flex items-center w-full gap-6 '>
                                    <CheckBox />
                                    <span className='hover:text-[#075fcb] text-[1rem]'>
                                        {item.label}
                                    </span>
                                </div>
                            </div>
                        }
                        key={item.key}
                    >
                        {item.children}
                    </Panel>
                ))}
            </Collapse>
        </div>
    )
}

export default FilterBoysAndGirls
