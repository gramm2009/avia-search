import { observer } from 'mobx-react-lite';
import React from 'react';
import { FlightType } from '../mobX/State';
import { timePoint, durationFly } from '../utils/helpers';

type FlyCardPropsType = {
    el: FlightType;
};

const FlyCard: React.FC<FlyCardPropsType> = observer(({ el }) => {
    const fly = el.flight;

    let transfer = 0;
    let transferBack = 0;

    if (fly.legs[0].segments.length === 2) {
        transfer = 1;
    } else {
        transfer = 0;
    }

    if (fly.legs[1].segments.length === 2) {
        transferBack = 1;
    } else {
        transferBack = 0;
    }

    return (
        <div className="fly-card">
            <div className="fly-card__header  fly-card--info-block">
                <div className="fly-card__header__aviacompany-logo">{fly.carrier.uid}</div>
                <div className="fly-card__header__price">
                    <p>{fly.price.total.amount} р</p>
                    <p>Стоимость для одного взрослого пассажира</p>
                </div>
            </div>

            <div className="fly-card-container">
                <div className="fly-card__block-1  fly-card--info-block">
                    <div className="fly-card--info-block--left">
                        <span>{fly.legs[0].segments[0].departureCity?.caption},</span>
                        <span>{fly.legs[0].segments[0].departureAirport.caption}</span>
                        <span className="fly-card___blue">({fly.legs[0].segments[0].departureAirport.uid})</span>
                    </div>
                    <div>
                        <span className="fly-card--arrow"> &#129046;</span>
                    </div>
                    <div className="fly-card--info-block--right">
                        <span> {fly.legs[0].segments[transfer].arrivalCity?.caption}</span>
                        <span> {fly.legs[0].segments[transfer].arrivalAirport.caption}</span>
                        <span className="fly-card___blue"> ({fly.legs[0].segments[transfer].arrivalAirport.uid})</span>
                    </div>
                </div>

                <div className="fly-card__block-2 fly-card--info-block">
                    <div className="fly-card--info-block--left">
                        <span>
                            {timePoint(fly.legs[0].segments[0].departureDate).time}
                            <span className="fly-card___blue-mar-fs">{timePoint(fly.legs[0].segments[0].departureDate).day}</span>{' '}
                        </span>
                    </div>
                    <div>
                        <span className="fly-card--info-block__duration">{durationFly(fly.legs[0].duration)}</span>
                    </div>

                    <div className="fly-card--info-block--right">
                        <span>
                            {timePoint(fly.legs[0].segments[0].arrivalDate).day}
                            <span className="fly-card___blue-mar-fs">{timePoint(fly.legs[0].segments[transfer].arrivalDate).time}</span>
                        </span>
                    </div>
                    <div className="fly-card__block-2__transfer">{transfer ? transfer + ' пересадка' : null}</div>
                    <div className="fly-card__block-2__line"></div>
                </div>

                <div className="fly-card__block-3 fly-card--info-block">
                    <div className="fly-card--info-block--left">
                        <span>Рейс выполняет: </span>
                        <span>{fly.legs[0].segments[0].airline.caption}</span>
                    </div>
                </div>
            </div>

            <hr />

            <div className="fly-card-container">
                <div className="fly-card__block-4 fly-card--info-block">
                    <div className="fly-card--info-block--left">
                        <span>{fly.legs[1].segments[0].departureCity?.caption},</span>
                        <span>{fly.legs[1].segments[0].departureAirport.caption}</span>
                        <span className="fly-card___blue">({fly.legs[1].segments[0].departureAirport.uid})</span>
                    </div>
                    <div>
                        <span className="fly-card--arrow"> &#129046;</span>
                    </div>
                    <div className="fly-card--info-block--right">
                        <span> {fly.legs[1].segments[transferBack].arrivalCity?.caption}</span>
                        <span> {fly.legs[1].segments[transferBack].arrivalAirport.caption}</span>
                        <span className="fly-card___blue"> ({fly.legs[1].segments[transferBack].arrivalAirport.uid})</span>
                    </div>
                </div>

                <div className="fly-card__block-5 fly-card--info-block">
                    <div className="fly-card--info-block--left">
                        <span>
                            {timePoint(fly.legs[1].segments[0].departureDate).time}
                            <span className="fly-card___blue-mar-fs">{timePoint(fly.legs[1].segments[0].departureDate).day}</span>{' '}
                        </span>
                    </div>
                    <div>
                        <span className="fly-card--info-block__duration">{durationFly(fly.legs[1].duration)}</span>
                    </div>

                    <div className="fly-card--info-block--right">
                        <span>
                            {timePoint(fly.legs[1].segments[transferBack].arrivalDate).day}
                            <span className="fly-card___blue-mar-fs">{timePoint(fly.legs[1].segments[transferBack].arrivalDate).time}</span>
                        </span>
                    </div>
                    <div className="fly-card__block-5__transfer">{transferBack ? transferBack + '  пересадка' : null}</div>
                    <div className="fly-card__block-5__line"></div>
                </div>

                <div className="fly-card__block-6 fly-card--info-block">
                    <div className="fly-card--info-block--left">
                        <span>Рейс выполняет: </span>
                        <span>{fly.legs[1].segments[transferBack].airline.caption}</span>
                    </div>
                </div>
            </div>

            <button className="fly-card__btn fly-card--info-block">ВЫБРАТЬ</button>
        </div>
    );
});
export default FlyCard;
