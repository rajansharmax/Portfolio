import React, { useEffect, useState } from "react";
import { SewingPinFilledIcon } from "@radix-ui/react-icons";
import { GoogleMap, Marker, LoadScript } from "@react-google-maps/api";

export interface LocationInformation {
    description: string;
    longitude: number;
    latitude: number;
    date: number;
}

const token = process.env.GOOGLE_MAPS_API_KEY;
const MapSection = () => {
    const [location, setLocation] = useState<LocationInformation | null>(null);

    useEffect(() => {
        if (!location) {
            fetch("/api/location")
                .then((response) => response.json() as Promise<LocationInformation>)
                .then(setLocation);
        }
    }, [location]);

    const containerStyle = {
        width: "100%",
        height: "100%",
    };

    const mapCenter = location
        ? {
            lat: location.latitude,
            lng: location.longitude,
        }
        : { lat: 0, lng: 0 };

    return (
        <div className="flex flex-col gap-2 py-10">
            <div
                className="relative flex items-center justify-center w-full overflow-hidden border border-solid rounded-lg h-44 border-neutral-300 dark:border-neutral-700"
                style={{ perspective: "2000px", transformStyle: "preserve-3d" }}
            >
                <div className="absolute inset-0 z-30 opacity-30 dark:opacity-50 bg-gradient-to-tr from-transparent to-neutral-200 dark:to-neutral-800" />
                <div className="absolute z-20 w-[1200px] h-[1200px] transition-transform delay-1000 duration-1000 grayscale dark:brightness-50">
                    {location && (
                        // @ts-ignore
                        <LoadScript googleMapsApiKey={token}>
                            <GoogleMap
                                mapContainerStyle={containerStyle}
                                center={mapCenter}
                                zoom={12}
                                options={{
                                    mapTypeControl: false,
                                    streetViewControl: false,
                                    fullscreenControl: false,
                                    zoomControl: false,
                                }}
                            >
                                <Marker position={mapCenter} />
                            </GoogleMap>
                        </LoadScript>
                    )}
                </div>
                <div className="absolute inset-0 z-10 opacity-40 bg-neutral-300 dark:bg-neutral-800" />
            </div>
            <div className="min-h-[1rem]">
                {location && (
                    <div className="flex items-center justify-between">
                        <SewingPinFilledIcon className="dark:text-neutral-500 text-neutral-600" />
                        <div className="flex items-center gap-4">
                            <p className="text-xs dark:text-neutral-500 text-neutral-600">
                                in {location.description.toLowerCase()}
                            </p>
                            <div className="relative flex items-center justify-center w-1 h-1">
                                <div className="absolute inset-0 w-full h-full bg-green-500 rounded-full" />
                                <div
                                    className="absolute w-4 h-4 bg-green-500 rounded-full animate-ping"
                                    style={{ transform: "scale(0)" }}
                                />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MapSection;
