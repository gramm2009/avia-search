type dateTimeType = {
    day: string;
    time: string;
};

export const timePoint = (dateTime: string): dateTimeType => {
    const date = new Date(dateTime).toUTCString();

    const day = date.substr(5, 6) + '.' + date.substr(0, 2);
    const time = date.substr(17, 5);

    return {
        day,
        time,
    };
};
