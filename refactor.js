var volumeSetup = function () {
    // Get the current volume unit configuration
    var volumeUnit = window.APP.util.getSettings('ticker_vol_unit').toUpperCase();

    // Map volume units to corresponding selectors
    var unitToSelectorMap = {
        'FIRSTCCY': '#tickervolccy_0',
        'USD': '#tickervolccy_USD',
        'BTC': '#tickervolccy_BTC',
        'ETH': '#tickervolccy_ETH'
    };

    // Check if the volume unit has a corresponding selector
    if (unitToSelectorMap.hasOwnProperty(volumeUnit)) {
        var selector = unitToSelectorMap[volumeUnit];
        var element = $(selector);

        // Check the element if found
        if (element) {
            element.prop("checked", true);
        }
    }

    // Initialize the currencies list
    var result = window.APP.util.initCurrenciesList();

    // Return the initialization result
    return result;
};