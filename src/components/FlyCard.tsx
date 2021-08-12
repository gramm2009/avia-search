import { observer } from 'mobx-react-lite';
import React from 'react';
import { FlightType } from '../mobX/State';

type FlyCardPropsType = {
    el: FlightType;
};

const FlyCard: React.FC<FlyCardPropsType> = observer(({ el }) => {
    console.log(el);

    return (
        <div className="fly-card">
            <div className="fly-card__header  fly-card--info-block">
                <div className="fly-card__header__aviacompany-logo">LOGO</div>
                <div className="fly-card__header__price">
                    <p>21049 р</p>
                    <p>Стоимость для одного взрослого пассажира</p>
                </div>
            </div>

            <div className="fly-card-container">
                <div className="fly-card__block-1  fly-card--info-block">
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                </div>

                <div className="fly-card__block-2 fly-card--info-block"></div>
                <div className="fly-card__block-3 fly-card--info-block"></div>
                <div className="fly-card__block-4 fly-card--info-block"></div>
                <div className="fly-card__block-5 fly-card--info-block"></div>
                <div className="fly-card__block-6 fly-card--info-block"></div>
            </div>

            <button className="fly-card__btn fly-card--info-block">ВЫБРАТЬ</button>
        </div>
    );
});
export default FlyCard;
