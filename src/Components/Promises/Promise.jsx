import React from 'react';
import './Promise.css';
import Card from '../Card/Card';
import RevCard from '../RevCard/RevCard';
import Crown from '../../img/crown.png';
import Glasses from '../../img/glasses.png';

function Promise() {
  return (
    <div className="promise">
        <div className="p-heading">
            <span>Why&nbsp;</span>
            <span>CellFix&nbsp;</span>
            <span>is you trusted partner</span>
        </div>
        <Card
             profile={Crown}
             heading="Lifetime Warranty"
             detail="Number one Android Service in Jabalpur"
        ></Card>
        <RevCard
             profile={Crown}
             heading="Reapairs Done, Right In Front Of You!"
             detail="Figma, Sketch, Adobe, Adobe xd and more photoshopping tools"
        ></RevCard>
        <Card
             profile={Crown}
             heading="Same Day Doorstep Service"
             detail="Figma, Sketch, Adobe, Adobe xd and more photoshopping tools"
        ></Card>
        <RevCard
             profile={Crown}
             heading="Lowest Prices"
             detail="Figma, Sketch, Adobe, Adobe xd and more photoshopping tools"
        ></RevCard>
        <Card
             profile={Crown}
             heading="Expert Technicians"
             detail="Figma, Sketch, Adobe, Adobe xd and more photoshopping tools"
        ></Card>
    </div>
  )
}

export default Promise