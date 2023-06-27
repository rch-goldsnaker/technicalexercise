function generateUrl(params) {
    const baseUrl = 'http://testurl.bitfinx.com/';

    const queryParams = Object.entries(params)
        .filter(([_, value]) => value)
        .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
        .join('&');

    const url = `${baseUrl}${queryParams ? `?${queryParams}` : ''}`;
    return url;
}

const params = {
    width: 360,
    height: 300,
    locale: 'en',
    toolbar_bg: '',
    interval: '3h',
    pair: 'BTC_USD',
};

const url = generateUrl(params);