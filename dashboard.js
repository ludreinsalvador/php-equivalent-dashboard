(function () {
  const currencyData = [
    { symbol: "USD", pesoEquivalent: 56.8360 },
    { symbol: "JPY", pesoEquivalent: 0.3801 },
    { symbol: "GBP", pesoEquivalent: 69.4138 },
    { symbol: "HKD", pesoEquivalent: 7.2705 },
    { symbol: "CHF", pesoEquivalent: 63.1651 },
    { symbol: "CAD", pesoEquivalent: 41.7758 },
    { symbol: "SGD", pesoEquivalent: 41.5468 },
    { symbol: "AUD", pesoEquivalent: 36.0170 },
    { symbol: "BHD", pesoEquivalent: 151.0792 },
    { symbol: "KWD", pesoEquivalent: "N/A" },
    { symbol: "SAR", pesoEquivalent: 15.1526 },
    { symbol: "BND", pesoEquivalent: 41.3955 },
    { symbol: "IDR", pesoEquivalent: 0.0036 },
    { symbol: "THB", pesoEquivalent: 1.5683 },
    { symbol: "AED", pesoEquivalent: 15.4757 },
    { symbol: "EUR", pesoEquivalent: 60.0245 },
    { symbol: "KRW", pesoEquivalent: 0.0422 },
    { symbol: "CNY", pesoEquivalent: 7.7743 },
  ];

  new Chart(
    document.getElementById("myChart"),
    {
      type: "line",
      data: {
        labels: currencyData.map(currency => currency.symbol),
        datasets: [
          {
            label: "PHP Equivalent",
            data: currencyData.map(currency => currency.pesoEquivalent),
            borderColor: 'lightgray',                         // Gray line color
            borderWidth: 1.5,                                 // Thin width border
            tension: 0.4,                                     // Smoother tension curve for the line graph
            fill: true,                                       // Fills the shade below the line
            backgroundColor: 'rgba(200, 200, 200, 0.4)',      // Light background shade
            pointRadius: 2,                                   // Radius size for the data points
            pointBackgroundColor: 'rgba(200, 200, 200, 0.5)', // Gray color for data points
          },
        ],
      },
    }
  );
})();
