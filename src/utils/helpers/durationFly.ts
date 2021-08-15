export const durationFly = (time: number): string => {
    const hour = Math.floor(+(time / 60));
    const min = time - hour * 60;

    const duration = `${hour} h ${min} min`;

    return duration;
};
