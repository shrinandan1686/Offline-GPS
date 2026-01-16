export const convertSpeed = (speedMps, unit) => {
    if (speedMps === null || speedMps === undefined) return 0;
    // Filter noise
    if (speedMps < 0.5) return 0;

    if (unit === 'mph') {
        return (speedMps * 2.23694).toFixed(1);
    }
    // Default km/h
    return (speedMps * 3.6).toFixed(1);
};

export const convertAltitude = (altitudeMeters, unit) => {
    if (altitudeMeters === null || altitudeMeters === undefined) return '---';

    if (unit === 'ft') {
        return (altitudeMeters * 3.28084).toFixed(0);
    }
    // Default meters
    return altitudeMeters.toFixed(1);
};
