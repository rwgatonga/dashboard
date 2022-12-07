import React from 'react'
import Chart from '../../components/chart/Chart'
import FeaturedInfo from '../../components/featuredinfo/FeaturedInfo'
import './home.css'
import { userData } from '../../DummyData'
import WidgetLg from '../../components/widgetLg/WidgetLg'
import WidgetSm from '../../components/widgetSm/WidgetSm'

export default function Home() {
    return (
        <div className='home'>
            <FeaturedInfo/>
            <Chart data={userData} title="User Analytics" grid dataKey="Active Users"/>
            <div className="homeWidget">
                <WidgetSm />
                <WidgetLg />
            </div>
        </div>
    )
}
