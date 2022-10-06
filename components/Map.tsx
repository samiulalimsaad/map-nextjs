import { Map, Marker, ZoomControl } from "pigeon-maps";
import { useState } from "react";

import { osm } from "pigeon-maps/providers";

export default function MyMap() {
    const [state, setState] = useState<[number, number]>([50.879, 4.6997]);

    const [hue, setHue] = useState(0);
    const color = `hsl(${hue % 360}deg 39% 70%)`;

    return (
        <div>
            <Map
                provider={osm}
                height={200}
                defaultCenter={state}
                defaultZoom={11}
                onClick={(e) => console.log(e)}
            >
                <ZoomControl />

                <Marker
                    width={50}
                    anchor={[50.879, 4.6997]}
                    color={color}
                    onClick={(e) => {
                        console.log(e);
                        setHue(hue + 20);
                    }}
                />
                <Marker
                    width={50}
                    anchor={[40.879, 14.6997]}
                    color={color}
                    onClick={(e) => {
                        console.log(e);
                        setHue(hue + 20);
                    }}
                />
            </Map>
        </div>
    );
}
