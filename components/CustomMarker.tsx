/* eslint-disable @next/next/no-img-element */
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Marker } from "pigeon-maps";
import { useState } from "react";
import { markerInterface } from "./data";

const CustomMarker = ({ payload }: { payload: markerInterface }) => {
    const [hue, setHue] = useState(0);
    const color = `hsl(${hue % 360}deg 39% 70%)`;

    return (
        <label className="tw-swap">
            <input type="checkbox" />
            <div className="tw-swap-off">
                <div className="tw-z-[5000]">
                    <Marker
                        width={50}
                        anchor={payload.coordinate}
                        color={color}
                        onClick={(e) => {
                            console.log(e);
                            setHue(hue + 20);
                        }}
                    />
                </div>
            </div>
            <div className="tw-swap-on tw-shadow-xl tw-card tw-w-96 tw-bg-base-100">
                <figure className="tw-relative">
                    <div className="tw-absolute tw-left-0 tw-top-2 tw-flex tw-items-center tw-justify-center ">
                        <LocationOnIcon
                            className="tw-h-12 tw-w-12"
                            style={{ fill: "#0072ea" }}
                        />
                    </div>
                    <img
                        src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?cs=srgb&dl=pexels-ella-olsson-1640777.jpg&fm=jpg"
                        alt="Shoes"
                        className="tw-rounded-xl"
                    />
                </figure>
                <div className="tw-card-body">
                    <h2 className="tw-card-title">{payload.name}</h2>
                    <p>
                        <LocationOnIcon /> {payload.location}
                    </p>
                    <p>{payload.visited} people visited</p>
                </div>
            </div>
        </label>
    );
};

export default CustomMarker;
