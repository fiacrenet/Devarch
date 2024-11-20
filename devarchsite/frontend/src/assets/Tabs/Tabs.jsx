import React, { startTransition } from 'react'
import '../Tab/Tab.css'
import { assets, tabDataService } from '../../assets/assets'
import { useState, useTransition } from 'react'

function Tab() {

  const [selectedTab, setSelectedTab] = useState(0)

  return (
    <div className='service-tab'>
        <div className="service-tab-content">
            {tabDataService.map((obj, index) =>
            <button 
             key={index}
             onClick={() => setSelectedTab(index)}
             className='btn-tab'
             >
             {tabDataService[index].buttonContent}
             
             </button>

            )}
        </div>
        <div className="service-tab-description">
            <h2>
                {tabDataService[selectedTab].tabHeading}
            </h2>
            <div className="p-description">
                <p className="description">
                    {tabDataService[selectedTab].txt}
                </p>

            </div>
           
        </div>
    </div>
  )
}

export default Tab