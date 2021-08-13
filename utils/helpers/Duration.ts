export const Duration = (time: number): string => {
    let hour = Math.floor(+(time/60))  ;
    let min = (time - (hour * 60));

    let duration = `${hour} h ${min} min`;

    return duration;
};

