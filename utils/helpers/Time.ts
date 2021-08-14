type dateTimeType = {
    day: string;
    time: string;
};

export const time = (dateTime: string): dateTimeType => {
    let date = new Date(dateTime).toUTCString();

    let day = date.substr(5, 6) + '.' + date.substr(0, 2);
    let time = date.substr(17, 5);

    return {
        day,
        time,
    };
};
