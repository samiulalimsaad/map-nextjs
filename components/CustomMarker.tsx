import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Image from "next/image";
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
            <div className="tw-swap-on tw-shadow-xl tw-card tw-w-96 tw-bg-base-100">
                <figure
                    className="tw-relative tw-tooltip"
                    data-tip="click to close"
                >
                    <div className="tw-absolute tw-left-0 tw-top-2 tw-flex tw-items-center tw-justify-center tw-z-50">
                        <CancelOutlinedIcon
                            className="tw-h-12 tw-w-12"
                            style={{ fill: "#0072ea" }}
                        />
                    </div>
                    <Image
                        height={250}
                        width={500}
                        src="https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                        alt="Shoes"
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
