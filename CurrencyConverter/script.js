@@ -0,0 +1,284 @@
const convertButton = document.getElementById('convertButton');
convertButton.addEventListener('click', () => {
  const phpAmount = parseFloat(document.getElementById('phpAmount').value);
  const currencySelect = document.getElementById('currencySelect');
  const selectedCurrency = currencySelect.value;
  let result;

  // Conversion rates for different currencies
  const conversionRates = {
    USD: 0.019,   // United States Dollar
    JPY: 2.1,     // Japanese Yen
    EUR: 0.016,   // Euro
    GBP: 0.014,   // British Pound Sterling
    AUD: 0.025,   // Australian Dollar
    CAD: 0.024,   // Canadian Dollar
    SGD: 0.026,   // Singapore Dollar
    INR: 1.38,    // Indian Rupee
    CNY: 0.12,    // Chinese Yuan
    HKD: 0.15,    // Hong Kong Dollar
    KRW: 22.2,    // South Korean Won
    PHP: 1,       // Philippine Peso (1 PHP is always equal to itself)
    // Add more currencies and their rates here
    MXN: 0.40,    // Mexican Peso
    BRL: 0.08,    // Brazilian Real
    CHF: 0.018,   // Swiss Franc
    SEK: 0.17,    // Swedish Krona
    NZD: 0.028,   // New Zealand Dollar
    THB: 0.60,    // Thai Baht
    NOK: 0.18,    // Norwegian Krone
    TRY: 0.13,    // Turkish Lira
    RUB: 1.45,    // Russian Ruble
    IDR: 271.50,  // Indonesian Rupiah
    ZAR: 0.29,    // South African Rand
    SAR: 0.071,   // Saudi Riyal
    AED: 0.070,   // United Arab Emirates Dirham
    ARS: 3.10,    // Argentine Peso
    COP: 82.36,   // Colombian Peso
    CLP: 14.12,   // Chilean Peso
    CZK: 0.42,    // Czech Koruna
    HUF: 5.63,    // Hungarian Forint
    ILS: 0.062,   // Israeli Shekel
    MYR: 0.079,   // Malaysian Ringgit
    PKR: 3.15,    // Pakistani Rupee
    PLN: 0.075,   // Polish Złoty
    QAR: 0.070,   // Qatari Riyal
    RON: 0.074,   // Romanian Leu
    TWD: 0.54,    // New Taiwan Dollar
    EGP: 0.30,    // Egyptian Pound
    BDT: 1.58,    // Bangladeshi Taka
    DKK: 0.12,    // Danish Krone
    KES: 2.14,    // Kenyan Shilling
    NGN: 7.26,    // Nigerian Naira
    PEN: 0.077,   // Peruvian Sol
    RSD: 2.07,    // Serbian Dinar
    HRK: 0.12,    // Croatian Kuna
    BGN: 0.031,   // Bulgarian Lev
    HNL: 0.45,    // Honduran Lempira
    CRC: 11.22,   // Costa Rican Colón
    DOP: 1.09,    // Dominican Peso
    RUB: 1.45,    // Russian Ruble
    SEK: 0.17,    // Swedish Krona
    HRK: 0.12,    // Croatian Kuna
    BAM: 0.031,   // Bosnian Convertible Mark
    BHD: 0.007,   // Bahraini Dinar
    BWP: 0.20,    // Botswana Pula
    BZD: 0.039,   // Belize Dollar
    CAD: 0.024,   // Canadian Dollar
    CDF: 32.36,   // Congolese Franc
    CLP: 14.12,   // Chilean Peso
    CNY: 0.12,    // Chinese Yuan
    COP: 82.36,   // Colombian Peso
    CRC: 11.22,   // Costa Rican Colón
    CUP: 0.42,    // Cuban Peso
    CZK: 0.42,    // Czech Koruna
    DKK: 0.12,    // Danish Krone
    DOP: 1.09,    // Dominican Peso
    DZD: 2.14,    // Algerian Dinar
    EGP: 0.30,    // Egyptian Pound
    ERN: 0.29,    // Eritrean Nakfa
    ETB: 0.75,    // Ethiopian Birr
    EUR: 0.016,   // Euro
    FJD: 0.040,   // Fijian Dollar
    FKP: 0.014,   // Falkland Islands Pound
    GBP: 0.014,   // British Pound Sterling
    GEL: 0.048,   // Georgian Lari
    GHS: 0.11,    // Ghanaian Cedi
    GIP: 0.014,   // Gibraltar Pound
    GMD: 0.92,    // Gambian Dalasi
    GNF: 258.26,  // Guinean Franc
    GTQ: 0.14,    // Guatemalan Quetzal
    GYD: 4.16,    // Guyanese Dollar
    HKD: 0.15,    // Hong Kong Dollar
    HNL: 0.45,    // Honduran Lempira
    HRK: 0.12,    // Croatian Kuna
    HTG: 2.43,    // Haitian Gourde
    HUF: 5.63,    // Hungarian Forint
    IDR: 271.50,  // Indonesian Rupiah
    ILS: 0.062,   // Israeli Shekel
    INR: 1.38,    // Indian Rupee
    IQD: 28.56,   // Iraqi Dinar
    IRR: 762.35,  // Iranian Rial
    ISK: 2.44,    // Icelandic Króna
    JMD: 2.84,    // Jamaican Dollar
    JOD: 0.014,   // Jordanian Dinar
    JPY: 2.1,     // Japanese Yen
    KES: 2.14,    // Kenyan Shilling
    KGS: 1.78,    // Kyrgyzstani Som
    KHR: 76.12,   // Cambodian Riel
    KMF: 7.78,    // Comorian Franc
    KPW: 20.52,   // North Korean Won
    KRW: 22.2,    // South Korean Won
    KWD: 0.005,   // Kuwaiti Dinar
    KYD: 0.016,   // Cayman Islands Dollar
    KZT: 8.38,    // Kazakhstani Tenge
    LAK: 207.25,  // Lao Kip
    LBP: 27.62,   // Lebanese Pound
    LKR: 3.15,    // Sri Lankan Rupee
    LRD: 3.04,    // Liberian Dollar
    LSL: 0.31,    // Lesotho Loti
    LYD: 0.32,    // Libyan Dinar
    MAD: 0.18,    // Moroccan Dirham
    MDL: 0.34,    // Moldovan Leu
    MGA: 72.40,   // Malagasy Ariary
    MKD: 0.85,    // Macedonian Denar
    MMK: 41.68,   // Myanmar Kyat
    MNT: 52.49,   // Mongolian Tögrög
    MOP: 0.15,    // Macanese Pataca
    MRU: 0.73,    // Mauritanian Ouguiya
    MUR: 0.78,    // Mauritian Rupee
    MVR: 0.30,    // Maldivian Rufiyaa
    MWK: 15.64,   // Malawian Kwacha
    MXN: 0.40,    // Mexican Peso
    MYR: 0.079,   // Malaysian Ringgit
    MZN: 4.44,    // Mozambican Metical
    NAD: 3.04,    // Namibian Dollar
    NGN: 7.26,    // Nigerian Naira
    NIO: 0.54,    // Nicaraguan Córdoba
    NOK: 0.18,    // Norwegian Krone
    NPR: 2.07,    // Nepalese Rupee
    NZD: 0.028,   // New Zealand Dollar
    OMR: 0.007,   // Omani Rial
    PAB: 0.40,    // Panamanian Balboa
    PEN: 0.077,   // Peruvian Sol
    PGK: 1.34,    // Papua New Guinean Kina
    PHP: 1,       // Philippine Peso (1 PHP is always equal to itself)
    PKR: 3.15,    // Pakistani Rupee
    PLN: 0.075,   // Polish Złoty
    PYG: 2856.12, // Paraguayan Guaraní
    QAR: 0.070,   // Qatari Riyal
    RON: 0.074,   // Romanian Leu
    RSD: 2.07,    // Serbian Dinar
    RUB: 1.45,    // Russian Ruble
    RWF: 398.57,  // Rwandan Franc
    SAR: 0.071,   // Saudi Riyal
    SBD: 3.22,    // Solomon Islands Dollar
    SCR: 6.09,    // Seychellois Rupee
    SDG: 0.69,    // Sudanese Pound
    SEK: 0.17,    // Swedish Krona
    SGD: 0.026,   // Singapore Dollar
    SHP: 0.011,   // Saint Helena Pound
    SLL: 421.60,  // Sierra Leonean Leone
    SOS: 73.90,   // Somali Shilling
    SRD: 5.46,    // Surinamese Dollar
    SSP: 0.064,   // South Sudanese Pound
    STN: 8.32,    // São Tomé and Príncipe Dobra
    SYP: 78.42,   // Syrian Pound
    SZL: 0.30,    // Swazi Lilangeni
    THB: 0.60,    // Thai Baht
    TJS: 5.49,    // Tajikistani Somoni
    TMT: 1.41,    // Turkmenistan Manat
    TND: 1.12,    // Tunisian Dinar
    TOP: 0.88,    // Tongan Paʻanga
    TRY: 0.13,    // Turkish Lira
    TTD: 2.71,    // Trinidad and Tobago Dollar
    TWD: 0.54,    // New Taiwan Dollar
    TZS: 924.68,  // Tanzanian Shilling
    UAH: 10.81,   // Ukrainian Hryvnia
    UGX: 1425.49, // Ugandan Shilling
    USD: 0.019,   // United States Dollar
    UYU: 1.70,    // Uruguayan Peso
    UZS: 458.92,  // Uzbekistani Som
    VES: 358196.34, // Venezuelan Bolívar Soberano
    VND: 441.19,  // Vietnamese Đồng
    VUV: 2.16,    // Vanuatu Vatu
    WST: 0.48,    // Samoan Tālā
    XAF: 10.99,   // Central African CFA Franc
    XCD: 0.051,   // East Caribbean Dollar
    XDR: 0.013,   // International Monetary Fund (IMF) Special Drawing Rights
    XOF: 10.99,   // West African CFA Franc
    XPF: 2.12,    // CFP Franc
    YER: 4.72,    // Yemeni Rial
    ZAR: 0.28,    // South African Rand
    ZMW: 0.42,    // Zambian Kwacha
    ZWL: 6.11     // Zimbabwean Dollar
  };

  // Function to handle the currency conversion
  function convertCurrency() {
    // Get the amount in PHP entered by the user
    const phpAmount = parseFloat(document.getElementById('phpAmount').value);
    if (isNaN(phpAmount)) {
      alert('Please enter a valid number in PHP Amount.');
      return;
    }

    // Get the selected currency code from the dropdown
    const selectedCurrency = document.getElementById('currencySelect').value;

    // Check if the selected currency is in the exchange rate data
    if (!(selectedCurrency in exchangeRates)) {
      alert('Selected currency is not supported for conversion.');
      return;
    }

    // Calculate the equivalent amount in the selected currency
    const equivalentAmount = (phpAmount * exchangeRates[selectedCurrency]).toFixed(2);

    // Display the result to the user
    const resultElement = document.getElementById('result');
    resultElement.innerText = `${phpAmount} PHP is approximately ${equivalentAmount} ${selectedCurrency}`;
  }

  // Attach the convertCurrency function to the button click event
  document.getElementById('convertButton').addEventListener('click', convertCurrency);
</script>
</body>
</html>

This updated code now includes the currency conversion functionality based on the exchange rates provided. When the user enters an amount in PHP and selects a currency, the converted amount will be displayed on the page after clicking the "Convert" button. If the selected currency is not supported or the entered PHP amount is not a valid number, appropriate alerts will be displayed to the user.

Please note that the exchange rates used in this code are fictional and not accurate. If you want to use real-time exchange rates, you'll need to fetch them from a reliable API or data source. Additionally, ensure that the exchange rate data is up-to-date for accurate currency conversions.
        <option value="MXN">MXN ($) - Mexican Peso</option>
        <option value="BRL">BRL (R$) - Brazilian Real</option>
        <option value="CHF">CHF (Fr.) - Swiss Franc</option>
        <option value="SEK">SEK (kr) - Swedish Krona</option>
        <option value="NZD">NZD ($) - New Zealand Dollar</option>
        <option value="THB">THB (฿) - Thai Baht</option>
        <option value="NOK">NOK (kr) - Norwegian Krone</option>
        <option value="TRY">TRY (₺) - Turkish Lira</option>
        <option value="RUB">RUB (₽) - Russian Ruble</option>
        <option value="IDR">IDR (Rp) - Indonesian Rupiah</option>
        <option value="ZAR">ZAR (R) - South African Rand</option>
        <option value="SAR">SAR (﷼) - Saudi Riyal</option>
        <option value="AED">AED (د.إ) - United Arab Emirates Dirham</option>
        <option value="ARS">ARS ($) - Argentine Peso</option>
        <option value="COP">COP ($) - Colombian Peso</option>
        <option value="CLP">CLP ($) - Chilean Peso</option>
        <option value="CZK">CZK (Kč) - Czech Koruna</option>
        <option value="HUF">HUF (Ft) - Hungarian Forint</option>
        <option value="ILS">ILS (₪) - Israeli Shekel</option>
        <option value="INR">INR (₹) - Indian Rupee</option>
        <option value="MYR">MYR (RM) - Malaysian Ringgit</option>
        <option value="PHP">PHP (₱) - Philippine Peso</option>
        <option value="PKR">PKR (₨) - Pakistani Rupee</option>
        <option value="PLN">PLN (zł) - Polish Złoty</option>
        <option value="QAR">QAR (﷼) - Qatari Riyal</option>
        <option value="RON">RON (lei) - Romanian Leu</option>
        <option value="TWD">TWD (NT$) - New Taiwan Dollar</option>
        <option value="EGP">EGP (£) - Egyptian Pound</option>
        <option value="BDT">BDT (৳) - Bangladeshi Taka</option>
        <option value="DKK">DKK (kr) - Danish Krone</option>
        <option value="KES">KES (KSh) - Kenyan Shilling</option>
        <option value="NGN">NGN (₦) - Nigerian Naira</option>
        <option value="CNY">CNY (¥) - Chinese Yuan</option>
        <option value="MXN">MXN ($) - Mexican Peso</option>
        <option value="BRL">BRL (R$) - Brazilian Real</option>
        <option value="PHP">PHP (₱) - Philippine Peso</option>
        <!-- Add more currencies here as needed -->
      </select>
      <button id="convertButton">Convert</button>
    </div>
    <div class="result" id="result"></div>
  </div>
  <script src="script.js"></script>
</body>
</html>