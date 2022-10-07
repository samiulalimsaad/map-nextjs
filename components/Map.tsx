import { Map, Marker, ZoomControl } from "pigeon-maps";

import { osm } from "pigeon-maps/providers";
import CustomMarker from "./CustomMarker";
import { restaurant } from "./data";

export default function MyMap() {
    const color = `hsl(${0 % 360}deg 39% 70%)`;

    return (
        <div className="tw-p-4">
            <Map
                provider={osm}
                height={660}
                defaultCenter={restaurant[0].coordinate}
                defaultZoom={14}
            >
                <ZoomControl />

                {restaurant.map((r) => (
                    <Marker
                        key={r.name}
                        width={50}
                        anchor={r.coordinate}
                        color={color}
                    >
                        <CustomMarker payload={r} />
                    </Marker>
                ))}
            </Map>
        </div>
    );
}
