import { ConfigProvider, Tabs, Image } from 'antd'

const TabComponent = () => {
    // const [size, setSize] = useState('large')

    // const onChange = e => {
    //     setSize(e.target.value)
    // }

    function Label (id) {
        if (id === '1') {
            return <h1 className='text-[1rem] '>Products Details</h1>
        } else if (id === '2') {
            return <h1 className='text-[1rem]'>Size Guide</h1>
        } else {
            return <h1 className='text-[1rem]'>Reviews</h1>
        }
    }

    function TabContent (id) {
        if (id === '1') {
            return (
                <div className='px-10 mb-3'>
                    <ul className='text-[#6c7175]  '>
                        <li className='flex items-center gap-2 text-[1rem] '>
                            <span className='w-[6.5px] h-[6.5px] bg-[#6c7175]  rounded-full '></span>
                            <span>Colos:</span>
                            <span>Red</span>
                        </li>
                        <li className='flex items-center gap-2 text-[1rem]'>
                            <span className='w-[6.5px] h-[6.5px] bg-[#6c7175]  rounded-full '></span>
                            <span className=''>Material:</span>
                            <span>100% Cotton</span>
                        </li>
                    </ul>
                </div>
            )
        } else if (id === '2') {
            return (
                <section className='grid items-center justify-center grid-flow-row px-10 mt-2 md:grid-flow-row md:gap-2 md:grid-cols-2 grid-col-1'>
                    <div className='flex items-center justify-center hover:shadow-2xl md:w-[500px] h-[300px] w-[330px] px-5'>
                        <Image
                            src='/public/sizes/boys-bottom-pants-chart.jpg'
                            visible={false}
                            width={300}
                        />
                        <Image
                            src='/public/sizes/boys-bottom-pants.jpg'
                            width={250}
                            visible={false}
                        />
                    </div>
                    <div className='flex items-center justify-center hover:shadow-2xl md:w-[500px] h-[300px] w-[330px] px-5'>
                        <Image
                            src='/public/sizes/AVOKIDDOS-Boys.jpg'
                            visible={false}
                            height={200}
                        />
                    </div>
                    <div className='flex items-center justify-center hover:shadow-2xl md:w-[500px] h-[300px] w-[330px] px-5'>
                        <Image
                            src='/public/sizes/boys-bottom-pants-chart.jpg'
                            visible={false}
                            width={300}
                        />
                        <Image
                            src='/public/sizes/Boys-bottom-shorts.jpg'
                            width={390}
                            visible={false}
                        />
                    </div>
                    <div className='flex items-center justify-center hover:shadow-2xl md:w-[500px] h-[300px] w-[330px] px-5'>
                        <Image
                            src='/public/sizes/girls-skirt-chart.jpg'
                            visible={false}
                            width={300}
                        />
                        <Image
                            src='/public/sizes/Girls-dress.jpg'
                            width={285}
                            visible={false}
                        />
                    </div>
                    <div className='flex  items-center justify-center hover:shadow-2xl md:w-[500px] h-[300px] w-[330px] px-5'>
                        <Image
                            src='/public/sizes/boys-bottom-pants-chart.jpg'
                            visible={false}
                            width={300}
                        />
                        {/* <Image
                            src='/public/sizes/boys-bottom-pants.jpg'
                            width={250}
                            visible={false}
                        /> */}
                    </div>
                </section>
            )
        } else {
            return (
                <div className='p-3'>
                    <h1 className='text-lg text-red-400 '>
                        This is Review Section
                    </h1>
                </div>
            )
        }
    }

    return (
        <div className='mt-4 mb-4 md:ml-40'>
            <ConfigProvider
                theme={{
                    components: {
                        Tabs: {
                            colorText: 'black',
                            colorBgTextHover: 'rgba(255, 255, 255, 0)',
                            itemActiveColor: 'black',
                            borderRadiusLG: '100px',
                            colorBorder: 'red',
                        },
                    },
                }}
            >
                <Tabs
                    className='mb-8 border-b border-l border-r font-barlow '
                    defaultActiveKey='1'
                    tabBarGutter={10}
                    tabBarStyle={{
                        color: 'black',
                        fontSize: '1.1rem',
                        fontWeight: '600',
                        fontFamily: 'barlow',
                        letterSpacing: '0.1rem',
                    }}
                    type='card'
                    size='medium'
                    items={new Array(3).fill(null).map((_, i) => {
                        const id = String(i + 1)
                        return {
                            label: Label(id),
                            key: id,
                            children: TabContent(id),
                        }
                    })}
                />
            </ConfigProvider>
        </div>
    )
}

export default TabComponent
