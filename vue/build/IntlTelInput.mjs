import { mergeModels as v, useModel as k, ref as w, onMounted as T, watch as P, onUnmounted as x, withDirectives as E, openBlock as M, createElementBlock as B, vModelText as O } from "vue";
const L = [
  [
    "af",
    // Afghanistan
    "93"
  ],
  [
    "ax",
    // Åland Islands
    "358",
    1,
    ["18"]
  ],
  [
    "al",
    // Albania
    "355"
  ],
  [
    "dz",
    // Algeria
    "213"
  ],
  [
    "as",
    // American Samoa
    "1",
    5,
    ["684"]
  ],
  [
    "ad",
    // Andorra
    "376"
  ],
  [
    "ao",
    // Angola
    "244"
  ],
  [
    "ai",
    // Anguilla
    "1",
    6,
    ["264"]
  ],
  [
    "ag",
    // Antigua and Barbuda
    "1",
    7,
    ["268"]
  ],
  [
    "ar",
    // Argentina
    "54"
  ],
  [
    "am",
    // Armenia
    "374"
  ],
  [
    "aw",
    // Aruba
    "297"
  ],
  [
    "ac",
    // Ascension Island
    "247"
  ],
  [
    "au",
    // Australia
    "61",
    0
  ],
  [
    "at",
    // Austria
    "43"
  ],
  [
    "az",
    // Azerbaijan
    "994"
  ],
  [
    "bs",
    // Bahamas
    "1",
    8,
    ["242"]
  ],
  [
    "bh",
    // Bahrain
    "973"
  ],
  [
    "bd",
    // Bangladesh
    "880"
  ],
  [
    "bb",
    // Barbados
    "1",
    9,
    ["246"]
  ],
  [
    "by",
    // Belarus
    "375"
  ],
  [
    "be",
    // Belgium
    "32"
  ],
  [
    "bz",
    // Belize
    "501"
  ],
  [
    "bj",
    // Benin
    "229"
  ],
  [
    "bm",
    // Bermuda
    "1",
    10,
    ["441"]
  ],
  [
    "bt",
    // Bhutan
    "975"
  ],
  [
    "bo",
    // Bolivia
    "591"
  ],
  [
    "ba",
    // Bosnia and Herzegovina
    "387"
  ],
  [
    "bw",
    // Botswana
    "267"
  ],
  [
    "br",
    // Brazil
    "55"
  ],
  [
    "io",
    // British Indian Ocean Territory
    "246"
  ],
  [
    "vg",
    // British Virgin Islands
    "1",
    11,
    ["284"]
  ],
  [
    "bn",
    // Brunei
    "673"
  ],
  [
    "bg",
    // Bulgaria
    "359"
  ],
  [
    "bf",
    // Burkina Faso
    "226"
  ],
  [
    "bi",
    // Burundi
    "257"
  ],
  [
    "kh",
    // Cambodia
    "855"
  ],
  [
    "cm",
    // Cameroon
    "237"
  ],
  [
    "ca",
    // Canada
    "1",
    1,
    ["204", "226", "236", "249", "250", "263", "289", "306", "343", "354", "365", "367", "368", "382", "387", "403", "416", "418", "428", "431", "437", "438", "450", "584", "468", "474", "506", "514", "519", "548", "579", "581", "584", "587", "604", "613", "639", "647", "672", "683", "705", "709", "742", "753", "778", "780", "782", "807", "819", "825", "867", "873", "879", "902", "905"]
  ],
  [
    "cv",
    // Cape Verde
    "238"
  ],
  [
    "bq",
    // Caribbean Netherlands
    "599",
    1,
    ["3", "4", "7"]
  ],
  [
    "ky",
    // Cayman Islands
    "1",
    12,
    ["345"]
  ],
  [
    "cf",
    // Central African Republic
    "236"
  ],
  [
    "td",
    // Chad
    "235"
  ],
  [
    "cl",
    // Chile
    "56"
  ],
  [
    "cn",
    // China
    "86"
  ],
  [
    "cx",
    // Christmas Island
    "61",
    2,
    ["89164"]
  ],
  [
    "cc",
    // Cocos (Keeling) Islands
    "61",
    1,
    ["89162"]
  ],
  [
    "co",
    // Colombia
    "57"
  ],
  [
    "km",
    // Comoros
    "269"
  ],
  [
    "cg",
    // Congo (Brazzaville)
    "242"
  ],
  [
    "cd",
    // Congo (Kinshasa)
    "243"
  ],
  [
    "ck",
    // Cook Islands
    "682"
  ],
  [
    "cr",
    // Costa Rica
    "506"
  ],
  [
    "ci",
    // Côte d'Ivoire
    "225"
  ],
  [
    "hr",
    // Croatia
    "385"
  ],
  [
    "cu",
    // Cuba
    "53"
  ],
  [
    "cw",
    // Curaçao
    "599",
    0
  ],
  [
    "cy",
    // Cyprus
    "357"
  ],
  [
    "cz",
    // Czech Republic
    "420"
  ],
  [
    "dk",
    // Denmark
    "45"
  ],
  [
    "dj",
    // Djibouti
    "253"
  ],
  [
    "dm",
    // Dominica
    "1",
    13,
    ["767"]
  ],
  [
    "do",
    // Dominican Republic
    "1",
    2,
    ["809", "829", "849"]
  ],
  [
    "ec",
    // Ecuador
    "593"
  ],
  [
    "eg",
    // Egypt
    "20"
  ],
  [
    "sv",
    // El Salvador
    "503"
  ],
  [
    "gq",
    // Equatorial Guinea
    "240"
  ],
  [
    "er",
    // Eritrea
    "291"
  ],
  [
    "ee",
    // Estonia
    "372"
  ],
  [
    "sz",
    // Eswatini
    "268"
  ],
  [
    "et",
    // Ethiopia
    "251"
  ],
  [
    "fk",
    // Falkland Islands (Malvinas)
    "500"
  ],
  [
    "fo",
    // Faroe Islands
    "298"
  ],
  [
    "fj",
    // Fiji
    "679"
  ],
  [
    "fi",
    // Finland
    "358",
    0
  ],
  [
    "fr",
    // France
    "33"
  ],
  [
    "gf",
    // French Guiana
    "594"
  ],
  [
    "pf",
    // French Polynesia
    "689"
  ],
  [
    "ga",
    // Gabon
    "241"
  ],
  [
    "gm",
    // Gambia
    "220"
  ],
  [
    "ge",
    // Georgia
    "995"
  ],
  [
    "de",
    // Germany
    "49"
  ],
  [
    "gh",
    // Ghana
    "233"
  ],
  [
    "gi",
    // Gibraltar
    "350"
  ],
  [
    "gr",
    // Greece
    "30"
  ],
  [
    "gl",
    // Greenland
    "299"
  ],
  [
    "gd",
    // Grenada
    "1",
    14,
    ["473"]
  ],
  [
    "gp",
    // Guadeloupe
    "590",
    0
  ],
  [
    "gu",
    // Guam
    "1",
    15,
    ["671"]
  ],
  [
    "gt",
    // Guatemala
    "502"
  ],
  [
    "gg",
    // Guernsey
    "44",
    1,
    ["1481", "7781", "7839", "7911"]
  ],
  [
    "gn",
    // Guinea
    "224"
  ],
  [
    "gw",
    // Guinea-Bissau
    "245"
  ],
  [
    "gy",
    // Guyana
    "592"
  ],
  [
    "ht",
    // Haiti
    "509"
  ],
  [
    "hn",
    // Honduras
    "504"
  ],
  [
    "hk",
    // Hong Kong SAR China
    "852"
  ],
  [
    "hu",
    // Hungary
    "36"
  ],
  [
    "is",
    // Iceland
    "354"
  ],
  [
    "in",
    // India
    "91"
  ],
  [
    "id",
    // Indonesia
    "62"
  ],
  [
    "ir",
    // Iran
    "98"
  ],
  [
    "iq",
    // Iraq
    "964"
  ],
  [
    "ie",
    // Ireland
    "353"
  ],
  [
    "im",
    // Isle of Man
    "44",
    2,
    ["1624", "74576", "7524", "7924", "7624"]
  ],
  [
    "il",
    // Israel
    "972"
  ],
  [
    "it",
    // Italy
    "39",
    0
  ],
  [
    "jm",
    // Jamaica
    "1",
    4,
    ["876", "658"]
  ],
  [
    "jp",
    // Japan
    "81"
  ],
  [
    "je",
    // Jersey
    "44",
    3,
    ["1534", "7509", "7700", "7797", "7829", "7937"]
  ],
  [
    "jo",
    // Jordan
    "962"
  ],
  [
    "kz",
    // Kazakhstan
    "7",
    1,
    ["33", "7"]
  ],
  [
    "ke",
    // Kenya
    "254"
  ],
  [
    "ki",
    // Kiribati
    "686"
  ],
  [
    "xk",
    // Kosovo
    "383"
  ],
  [
    "kw",
    // Kuwait
    "965"
  ],
  [
    "kg",
    // Kyrgyzstan
    "996"
  ],
  [
    "la",
    // Laos
    "856"
  ],
  [
    "lv",
    // Latvia
    "371"
  ],
  [
    "lb",
    // Lebanon
    "961"
  ],
  [
    "ls",
    // Lesotho
    "266"
  ],
  [
    "lr",
    // Liberia
    "231"
  ],
  [
    "ly",
    // Libya
    "218"
  ],
  [
    "li",
    // Liechtenstein
    "423"
  ],
  [
    "lt",
    // Lithuania
    "370"
  ],
  [
    "lu",
    // Luxembourg
    "352"
  ],
  [
    "mo",
    // Macao SAR China
    "853"
  ],
  [
    "mg",
    // Madagascar
    "261"
  ],
  [
    "mw",
    // Malawi
    "265"
  ],
  [
    "my",
    // Malaysia
    "60"
  ],
  [
    "mv",
    // Maldives
    "960"
  ],
  [
    "ml",
    // Mali
    "223"
  ],
  [
    "mt",
    // Malta
    "356"
  ],
  [
    "mh",
    // Marshall Islands
    "692"
  ],
  [
    "mq",
    // Martinique
    "596"
  ],
  [
    "mr",
    // Mauritania
    "222"
  ],
  [
    "mu",
    // Mauritius
    "230"
  ],
  [
    "yt",
    // Mayotte
    "262",
    1,
    ["269", "639"]
  ],
  [
    "mx",
    // Mexico
    "52"
  ],
  [
    "fm",
    // Micronesia
    "691"
  ],
  [
    "md",
    // Moldova
    "373"
  ],
  [
    "mc",
    // Monaco
    "377"
  ],
  [
    "mn",
    // Mongolia
    "976"
  ],
  [
    "me",
    // Montenegro
    "382"
  ],
  [
    "ms",
    // Montserrat
    "1",
    16,
    ["664"]
  ],
  [
    "ma",
    // Morocco
    "212",
    0
  ],
  [
    "mz",
    // Mozambique
    "258"
  ],
  [
    "mm",
    // Myanmar (Burma)
    "95"
  ],
  [
    "na",
    // Namibia
    "264"
  ],
  [
    "nr",
    // Nauru
    "674"
  ],
  [
    "np",
    // Nepal
    "977"
  ],
  [
    "nl",
    // Netherlands
    "31"
  ],
  [
    "nc",
    // New Caledonia
    "687"
  ],
  [
    "nz",
    // New Zealand
    "64"
  ],
  [
    "ni",
    // Nicaragua
    "505"
  ],
  [
    "ne",
    // Niger
    "227"
  ],
  [
    "ng",
    // Nigeria
    "234"
  ],
  [
    "nu",
    // Niue
    "683"
  ],
  [
    "nf",
    // Norfolk Island
    "672"
  ],
  [
    "kp",
    // North Korea
    "850"
  ],
  [
    "mk",
    // North Macedonia
    "389"
  ],
  [
    "mp",
    // Northern Mariana Islands
    "1",
    17,
    ["670"]
  ],
  [
    "no",
    // Norway
    "47",
    0
  ],
  [
    "om",
    // Oman
    "968"
  ],
  [
    "pk",
    // Pakistan
    "92"
  ],
  [
    "pw",
    // Palau
    "680"
  ],
  [
    "ps",
    // Palestinian Territories
    "970"
  ],
  [
    "pa",
    // Panama
    "507"
  ],
  [
    "pg",
    // Papua New Guinea
    "675"
  ],
  [
    "py",
    // Paraguay
    "595"
  ],
  [
    "pe",
    // Peru
    "51"
  ],
  [
    "ph",
    // Philippines
    "63"
  ],
  [
    "pl",
    // Poland
    "48"
  ],
  [
    "pt",
    // Portugal
    "351"
  ],
  [
    "pr",
    // Puerto Rico
    "1",
    3,
    ["787", "939"]
  ],
  [
    "qa",
    // Qatar
    "974"
  ],
  [
    "re",
    // Réunion
    "262",
    0
  ],
  [
    "ro",
    // Romania
    "40"
  ],
  [
    "ru",
    // Russia
    "7",
    0
  ],
  [
    "rw",
    // Rwanda
    "250"
  ],
  [
    "ws",
    // Samoa
    "685"
  ],
  [
    "sm",
    // San Marino
    "378"
  ],
  [
    "st",
    // São Tomé & Príncipe
    "239"
  ],
  [
    "sa",
    // Saudi Arabia
    "966"
  ],
  [
    "sn",
    // Senegal
    "221"
  ],
  [
    "rs",
    // Serbia
    "381"
  ],
  [
    "sc",
    // Seychelles
    "248"
  ],
  [
    "sl",
    // Sierra Leone
    "232"
  ],
  [
    "sg",
    // Singapore
    "65"
  ],
  [
    "sx",
    // Sint Maarten
    "1",
    21,
    ["721"]
  ],
  [
    "sk",
    // Slovakia
    "421"
  ],
  [
    "si",
    // Slovenia
    "386"
  ],
  [
    "sb",
    // Solomon Islands
    "677"
  ],
  [
    "so",
    // Somalia
    "252"
  ],
  [
    "za",
    // South Africa
    "27"
  ],
  [
    "kr",
    // South Korea
    "82"
  ],
  [
    "ss",
    // South Sudan
    "211"
  ],
  [
    "es",
    // Spain
    "34"
  ],
  [
    "lk",
    // Sri Lanka
    "94"
  ],
  [
    "bl",
    // St. Barthélemy
    "590",
    1
  ],
  [
    "sh",
    // St. Helena
    "290"
  ],
  [
    "kn",
    // St. Kitts & Nevis
    "1",
    18,
    ["869"]
  ],
  [
    "lc",
    // St. Lucia
    "1",
    19,
    ["758"]
  ],
  [
    "mf",
    // St. Martin
    "590",
    2
  ],
  [
    "pm",
    // St. Pierre & Miquelon
    "508"
  ],
  [
    "vc",
    // St. Vincent & Grenadines
    "1",
    20,
    ["784"]
  ],
  [
    "sd",
    // Sudan
    "249"
  ],
  [
    "sr",
    // Suriname
    "597"
  ],
  [
    "sj",
    // Svalbard & Jan Mayen
    "47",
    1,
    ["79"]
  ],
  [
    "se",
    // Sweden
    "46"
  ],
  [
    "ch",
    // Switzerland
    "41"
  ],
  [
    "sy",
    // Syria
    "963"
  ],
  [
    "tw",
    // Taiwan
    "886"
  ],
  [
    "tj",
    // Tajikistan
    "992"
  ],
  [
    "tz",
    // Tanzania
    "255"
  ],
  [
    "th",
    // Thailand
    "66"
  ],
  [
    "tl",
    // Timor-Leste
    "670"
  ],
  [
    "tg",
    // Togo
    "228"
  ],
  [
    "tk",
    // Tokelau
    "690"
  ],
  [
    "to",
    // Tonga
    "676"
  ],
  [
    "tt",
    // Trinidad & Tobago
    "1",
    22,
    ["868"]
  ],
  [
    "tn",
    // Tunisia
    "216"
  ],
  [
    "tr",
    // Turkey
    "90"
  ],
  [
    "tm",
    // Turkmenistan
    "993"
  ],
  [
    "tc",
    // Turks & Caicos Islands
    "1",
    23,
    ["649"]
  ],
  [
    "tv",
    // Tuvalu
    "688"
  ],
  [
    "ug",
    // Uganda
    "256"
  ],
  [
    "ua",
    // Ukraine
    "380"
  ],
  [
    "ae",
    // United Arab Emirates
    "971"
  ],
  [
    "gb",
    // United Kingdom
    "44",
    0
  ],
  [
    "us",
    // United States
    "1",
    0
  ],
  [
    "uy",
    // Uruguay
    "598"
  ],
  [
    "vi",
    // U.S. Virgin Islands
    "1",
    24,
    ["340"]
  ],
  [
    "uz",
    // Uzbekistan
    "998"
  ],
  [
    "vu",
    // Vanuatu
    "678"
  ],
  [
    "va",
    // Vatican City
    "39",
    1,
    ["06698"]
  ],
  [
    "ve",
    // Venezuela
    "58"
  ],
  [
    "vn",
    // Vietnam
    "84"
  ],
  [
    "wf",
    // Wallis & Futuna
    "681"
  ],
  [
    "eh",
    // Western Sahara
    "212",
    1,
    ["5288", "5289"]
  ],
  [
    "ye",
    // Yemen
    "967"
  ],
  [
    "zm",
    // Zambia
    "260"
  ],
  [
    "zw",
    // Zimbabwe
    "263"
  ]
], g = [];
for (let l = 0; l < L.length; l++) {
  const t = L[l];
  g[l] = {
    name: "",
    // this is now populated in the plugin
    iso2: t[0],
    dialCode: t[1],
    priority: t[2] || 0,
    areaCodes: t[3] || null,
    nodeById: {}
  };
}
const V = {
  ad: "Andorra",
  ae: "United Arab Emirates",
  af: "Afghanistan",
  ag: "Antigua & Barbuda",
  ai: "Anguilla",
  al: "Albania",
  am: "Armenia",
  ao: "Angola",
  ar: "Argentina",
  as: "American Samoa",
  at: "Austria",
  au: "Australia",
  aw: "Aruba",
  ax: "Åland Islands",
  az: "Azerbaijan",
  ba: "Bosnia & Herzegovina",
  bb: "Barbados",
  bd: "Bangladesh",
  be: "Belgium",
  bf: "Burkina Faso",
  bg: "Bulgaria",
  bh: "Bahrain",
  bi: "Burundi",
  bj: "Benin",
  bl: "St. Barthélemy",
  bm: "Bermuda",
  bn: "Brunei",
  bo: "Bolivia",
  bq: "Caribbean Netherlands",
  br: "Brazil",
  bs: "Bahamas",
  bt: "Bhutan",
  bw: "Botswana",
  by: "Belarus",
  bz: "Belize",
  ca: "Canada",
  cc: "Cocos (Keeling) Islands",
  cd: "Congo - Kinshasa",
  cf: "Central African Republic",
  cg: "Congo - Brazzaville",
  ch: "Switzerland",
  ci: "Côte d’Ivoire",
  ck: "Cook Islands",
  cl: "Chile",
  cm: "Cameroon",
  cn: "China",
  co: "Colombia",
  cr: "Costa Rica",
  cu: "Cuba",
  cv: "Cape Verde",
  cw: "Curaçao",
  cx: "Christmas Island",
  cy: "Cyprus",
  cz: "Czechia",
  de: "Germany",
  dj: "Djibouti",
  dk: "Denmark",
  dm: "Dominica",
  do: "Dominican Republic",
  dz: "Algeria",
  ec: "Ecuador",
  ee: "Estonia",
  eg: "Egypt",
  eh: "Western Sahara",
  er: "Eritrea",
  es: "Spain",
  et: "Ethiopia",
  fi: "Finland",
  fj: "Fiji",
  fk: "Falkland Islands",
  fm: "Micronesia",
  fo: "Faroe Islands",
  fr: "France",
  ga: "Gabon",
  gb: "United Kingdom",
  gd: "Grenada",
  ge: "Georgia",
  gf: "French Guiana",
  gg: "Guernsey",
  gh: "Ghana",
  gi: "Gibraltar",
  gl: "Greenland",
  gm: "Gambia",
  gn: "Guinea",
  gp: "Guadeloupe",
  gq: "Equatorial Guinea",
  gr: "Greece",
  gt: "Guatemala",
  gu: "Guam",
  gw: "Guinea-Bissau",
  gy: "Guyana",
  hk: "Hong Kong SAR China",
  hn: "Honduras",
  hr: "Croatia",
  ht: "Haiti",
  hu: "Hungary",
  id: "Indonesia",
  ie: "Ireland",
  il: "Israel",
  im: "Isle of Man",
  in: "India",
  io: "British Indian Ocean Territory",
  iq: "Iraq",
  ir: "Iran",
  is: "Iceland",
  it: "Italy",
  je: "Jersey",
  jm: "Jamaica",
  jo: "Jordan",
  jp: "Japan",
  ke: "Kenya",
  kg: "Kyrgyzstan",
  kh: "Cambodia",
  ki: "Kiribati",
  km: "Comoros",
  kn: "St. Kitts & Nevis",
  kp: "North Korea",
  kr: "South Korea",
  kw: "Kuwait",
  ky: "Cayman Islands",
  kz: "Kazakhstan",
  la: "Laos",
  lb: "Lebanon",
  lc: "St. Lucia",
  li: "Liechtenstein",
  lk: "Sri Lanka",
  lr: "Liberia",
  ls: "Lesotho",
  lt: "Lithuania",
  lu: "Luxembourg",
  lv: "Latvia",
  ly: "Libya",
  ma: "Morocco",
  mc: "Monaco",
  md: "Moldova",
  me: "Montenegro",
  mf: "St. Martin",
  mg: "Madagascar",
  mh: "Marshall Islands",
  mk: "North Macedonia",
  ml: "Mali",
  mm: "Myanmar (Burma)",
  mn: "Mongolia",
  mo: "Macao SAR China",
  mp: "Northern Mariana Islands",
  mq: "Martinique",
  mr: "Mauritania",
  ms: "Montserrat",
  mt: "Malta",
  mu: "Mauritius",
  mv: "Maldives",
  mw: "Malawi",
  mx: "Mexico",
  my: "Malaysia",
  mz: "Mozambique",
  na: "Namibia",
  nc: "New Caledonia",
  ne: "Niger",
  nf: "Norfolk Island",
  ng: "Nigeria",
  ni: "Nicaragua",
  nl: "Netherlands",
  no: "Norway",
  np: "Nepal",
  nr: "Nauru",
  nu: "Niue",
  nz: "New Zealand",
  om: "Oman",
  pa: "Panama",
  pe: "Peru",
  pf: "French Polynesia",
  pg: "Papua New Guinea",
  ph: "Philippines",
  pk: "Pakistan",
  pl: "Poland",
  pm: "St. Pierre & Miquelon",
  pr: "Puerto Rico",
  ps: "Palestinian Territories",
  pt: "Portugal",
  pw: "Palau",
  py: "Paraguay",
  qa: "Qatar",
  re: "Réunion",
  ro: "Romania",
  rs: "Serbia",
  ru: "Russia",
  rw: "Rwanda",
  sa: "Saudi Arabia",
  sb: "Solomon Islands",
  sc: "Seychelles",
  sd: "Sudan",
  se: "Sweden",
  sg: "Singapore",
  sh: "St. Helena",
  si: "Slovenia",
  sj: "Svalbard & Jan Mayen",
  sk: "Slovakia",
  sl: "Sierra Leone",
  sm: "San Marino",
  sn: "Senegal",
  so: "Somalia",
  sr: "Suriname",
  ss: "South Sudan",
  st: "São Tomé & Príncipe",
  sv: "El Salvador",
  sx: "Sint Maarten",
  sy: "Syria",
  sz: "Eswatini",
  tc: "Turks & Caicos Islands",
  td: "Chad",
  tg: "Togo",
  th: "Thailand",
  tj: "Tajikistan",
  tk: "Tokelau",
  tl: "Timor-Leste",
  tm: "Turkmenistan",
  tn: "Tunisia",
  to: "Tonga",
  tr: "Turkey",
  tt: "Trinidad & Tobago",
  tv: "Tuvalu",
  tw: "Taiwan",
  tz: "Tanzania",
  ua: "Ukraine",
  ug: "Uganda",
  us: "United States",
  uy: "Uruguay",
  uz: "Uzbekistan",
  va: "Vatican City",
  vc: "St. Vincent & Grenadines",
  ve: "Venezuela",
  vg: "British Virgin Islands",
  vi: "U.S. Virgin Islands",
  vn: "Vietnam",
  vu: "Vanuatu",
  wf: "Wallis & Futuna",
  ws: "Samoa",
  ye: "Yemen",
  yt: "Mayotte",
  za: "South Africa",
  zm: "Zambia",
  zw: "Zimbabwe"
}, F = {
  selectedCountryAriaLabel: "Selected country",
  noCountrySelected: "No country selected",
  countryListAriaLabel: "List of countries",
  searchPlaceholder: "Search",
  zeroSearchResults: "No results found",
  oneSearchResult: "1 result found",
  multipleSearchResults: "${count} results found",
  // additional countries (not supported by country-list library)
  ac: "Ascension Island",
  xk: "Kosovo"
}, A = { ...V, ...F };
for (let l = 0; l < g.length; l++)
  g[l].name = A[g[l].iso2];
let R = 0;
const S = {
  //* Whether or not to allow the dropdown.
  allowDropdown: !0,
  //* Add a placeholder in the input with an example number for the selected country.
  autoPlaceholder: "polite",
  //* Modify the parentClass.
  containerClass: "",
  //* The order of the countries in the dropdown. Defaults to alphabetical.
  countryOrder: null,
  //* Add a country search input at the top of the dropdown.
  countrySearch: !0,
  //* Modify the auto placeholder.
  customPlaceholder: null,
  //* Append menu to specified element.
  dropdownContainer: null,
  //* Don't display these countries.
  excludeCountries: [],
  //* Fix the dropdown width to the input width (rather than being as wide as the longest country name).
  fixDropdownWidth: !0,
  //* Format the number as the user types
  formatAsYouType: !0,
  //* Format the input value during initialisation and on setNumber.
  formatOnDisplay: !0,
  //* geoIp lookup function.
  geoIpLookup: null,
  //* Inject a hidden input with the name returned from this function, and on submit, populate it with the result of getNumber.
  hiddenInput: null,
  //* Internationalise the plugin text e.g. search input placeholder, country names.
  i18n: {},
  //* Initial country.
  initialCountry: "",
  //* National vs international formatting for numbers e.g. placeholders and displaying existing numbers.
  nationalMode: !0,
  //* Display only these countries.
  onlyCountries: [],
  //* Number type to use for placeholders.
  placeholderNumberType: "MOBILE",
  //* Show flags - for both the selected country, and in the country dropdown
  showFlags: !0,
  //* Display the international dial code next to the selected flag.
  separateDialCode: !1,
  //* Only allow certain chars e.g. a plus followed by numeric digits, and cap at max valid length.
  strictMode: !1,
  //* Use full screen popup instead of dropdown for country list.
  useFullscreenPopup: typeof navigator < "u" && typeof window < "u" ? (
    //* We cannot just test screen size as some smartphones/website meta tags will report desktop resolutions.
    //* Note: to target Android Mobiles (and not Tablets), we must find 'Android' and 'Mobile'
    /Android.+Mobile|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    ) || window.innerWidth <= 500
  ) : !1,
  //* Specify the path to the libphonenumber script to enable validation/formatting.
  utilsScript: "",
  //* The number type to enforce during validation.
  validationNumberType: "MOBILE"
}, z = [
  "800",
  "822",
  "833",
  "844",
  "855",
  "866",
  "877",
  "880",
  "881",
  "882",
  "883",
  "884",
  "885",
  "886",
  "887",
  "888",
  "889"
], I = (l) => l.replace(/\D/g, ""), D = (l = "") => l.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase(), N = (l) => {
  const t = I(l);
  if (t.charAt(0) === "1") {
    const e = t.substr(1, 3);
    return z.indexOf(e) !== -1;
  }
  return !1;
}, $ = (l, t, e, i) => {
  if (e === 0 && !i)
    return 0;
  let s = 0;
  for (let n = 0; n < t.length; n++) {
    if (/[+0-9]/.test(t[n]) && s++, s === l && !i)
      return n + 1;
    if (i && s === l + 1)
      return n;
  }
  return t.length;
}, m = (l, t, e) => {
  const i = document.createElement(l);
  return t && Object.entries(t).forEach(([s, n]) => i.setAttribute(s, n)), e && e.appendChild(i), i;
}, _ = (l) => {
  const { instances: t } = r;
  Object.values(t).forEach((e) => e[l]());
};
class j {
  constructor(t, e = {}) {
    this.id = R++, this.telInput = t, this.highlightedItem = null, this.options = Object.assign({}, S, e), this.hadInitialPlaceholder = !!t.getAttribute("placeholder");
  }
  //* Can't be private as it's called from intlTelInput convenience wrapper.
  _init() {
    this.options.useFullscreenPopup && (this.options.fixDropdownWidth = !1), this.options.onlyCountries.length === 1 && (this.options.initialCountry = this.options.onlyCountries[0]), this.options.separateDialCode && (this.options.nationalMode = !1, this.options.countrySearch = !0), this.options.allowDropdown && !this.options.showFlags && !this.options.separateDialCode && (this.options.nationalMode = !1), this.options.useFullscreenPopup && !this.options.dropdownContainer && (this.options.dropdownContainer = document.body), this.isAndroid = typeof navigator < "u" ? /Android/i.test(navigator.userAgent) : !1, this.isRTL = !!this.telInput.closest("[dir=rtl]");
    const t = this.options.allowDropdown || this.options.separateDialCode;
    this.showSelectedCountryOnLeft = this.isRTL ? !t : t, this.options.separateDialCode && (this.isRTL ? this.originalPaddingRight = this.telInput.style.paddingRight : this.originalPaddingLeft = this.telInput.style.paddingLeft), this.options.i18n = { ...A, ...this.options.i18n };
    const e = new Promise((s, n) => {
      this.resolveAutoCountryPromise = s, this.rejectAutoCountryPromise = n;
    }), i = new Promise((s, n) => {
      this.resolveUtilsScriptPromise = s, this.rejectUtilsScriptPromise = n;
    });
    this.promise = Promise.all([e, i]), this.selectedCountryData = {}, this._processCountryData(), this._generateMarkup(), this._setInitialState(), this._initListeners(), this._initRequests();
  }
  //********************
  //*  PRIVATE METHODS
  //********************
  //* Prepare all of the country data, including onlyCountries, excludeCountries, countryOrder options.
  _processCountryData() {
    this._processAllCountries(), this._processDialCodes(), this._translateCountryNames(), this._sortCountries();
  }
  //* Sort countries by countryOrder option (if present), then name.
  _sortCountries() {
    this.options.countryOrder && (this.options.countryOrder = this.options.countryOrder.map((t) => t.toLowerCase())), this.countries.sort((t, e) => {
      const { countryOrder: i } = this.options;
      if (i) {
        const s = i.indexOf(t.iso2), n = i.indexOf(e.iso2), a = s > -1, o = n > -1;
        if (a || o)
          return a && o ? s - n : a ? -1 : 1;
      }
      return t.name.localeCompare(e.name);
    });
  }
  //* Add a dial code to this.dialCodeToIso2Map.
  _addToDialCodeMap(t, e, i) {
    e.length > this.dialCodeMaxLen && (this.dialCodeMaxLen = e.length), this.dialCodeToIso2Map.hasOwnProperty(e) || (this.dialCodeToIso2Map[e] = []);
    for (let n = 0; n < this.dialCodeToIso2Map[e].length; n++)
      if (this.dialCodeToIso2Map[e][n] === t)
        return;
    const s = i !== void 0 ? i : this.dialCodeToIso2Map[e].length;
    this.dialCodeToIso2Map[e][s] = t;
  }
  //* Process onlyCountries or excludeCountries array if present.
  _processAllCountries() {
    const { onlyCountries: t, excludeCountries: e } = this.options;
    if (t.length) {
      const i = t.map(
        (s) => s.toLowerCase()
      );
      this.countries = g.filter(
        (s) => i.indexOf(s.iso2) > -1
      );
    } else if (e.length) {
      const i = e.map(
        (s) => s.toLowerCase()
      );
      this.countries = g.filter(
        (s) => i.indexOf(s.iso2) === -1
      );
    } else
      this.countries = g;
  }
  //* Translate Countries by object literal provided on config.
  _translateCountryNames() {
    for (let t = 0; t < this.countries.length; t++) {
      const e = this.countries[t].iso2.toLowerCase();
      this.options.i18n.hasOwnProperty(e) && (this.countries[t].name = this.options.i18n[e]);
    }
  }
  //* Generate this.dialCodes and this.dialCodeToIso2Map.
  _processDialCodes() {
    this.dialCodes = {}, this.dialCodeMaxLen = 0, this.dialCodeToIso2Map = {};
    for (let t = 0; t < this.countries.length; t++) {
      const e = this.countries[t];
      this.dialCodes[e.dialCode] || (this.dialCodes[e.dialCode] = !0), this._addToDialCodeMap(e.iso2, e.dialCode, e.priority);
    }
    for (let t = 0; t < this.countries.length; t++) {
      const e = this.countries[t];
      if (e.areaCodes) {
        const i = this.dialCodeToIso2Map[e.dialCode][0];
        for (let s = 0; s < e.areaCodes.length; s++) {
          const n = e.areaCodes[s];
          for (let a = 1; a < n.length; a++) {
            const o = e.dialCode + n.substr(0, a);
            this._addToDialCodeMap(i, o), this._addToDialCodeMap(e.iso2, o);
          }
          this._addToDialCodeMap(e.iso2, e.dialCode + n);
        }
      }
    }
  }
  //* Generate all of the markup for the plugin: the selected country overlay, and the dropdown.
  _generateMarkup() {
    var d;
    this.telInput.classList.add("iti__tel-input"), !this.telInput.hasAttribute("autocomplete") && !(this.telInput.form && this.telInput.form.hasAttribute("autocomplete")) && this.telInput.setAttribute("autocomplete", "off");
    const {
      allowDropdown: t,
      separateDialCode: e,
      showFlags: i,
      containerClass: s,
      hiddenInput: n,
      dropdownContainer: a,
      fixDropdownWidth: o,
      useFullscreenPopup: u,
      countrySearch: p,
      i18n: h
    } = this.options;
    let c = "iti";
    t && (c += " iti--allow-dropdown"), i && (c += " iti--show-flags"), s && (c += ` ${s}`), u || (c += " iti--inline-dropdown");
    const C = m("div", { class: c });
    if ((d = this.telInput.parentNode) == null || d.insertBefore(C, this.telInput), t || i || e) {
      this.countryContainer = m(
        "div",
        {
          class: "iti__country-container",
          style: this.showSelectedCountryOnLeft ? "left: 0" : "right: 0"
        },
        C
      ), t ? (this.selectedCountry = m(
        "button",
        {
          type: "button",
          class: "iti__selected-country",
          "aria-expanded": "false",
          "aria-label": this.options.i18n.selectedCountryAriaLabel,
          "aria-haspopup": "true",
          "aria-controls": `iti-${this.id}__dropdown-content`,
          role: "combobox"
        },
        this.countryContainer
      ), this.telInput.disabled && this.selectedCountry.setAttribute("disabled", "true")) : this.selectedCountry = m(
        "div",
        { class: "iti__selected-country" },
        this.countryContainer
      );
      const y = m("div", { class: "iti__selected-country-primary" }, this.selectedCountry);
      if (this.selectedCountryInner = m("div", { class: "iti__flag" }, y), this.selectedCountryA11yText = m(
        "span",
        { class: "iti__a11y-text" },
        this.selectedCountryInner
      ), t && (this.dropdownArrow = m(
        "div",
        { class: "iti__arrow", "aria-hidden": "true" },
        y
      )), e && (this.selectedDialCode = m(
        "div",
        { class: "iti__selected-dial-code" },
        this.selectedCountry
      )), t) {
        const f = o ? "" : "iti--flexible-dropdown-width";
        if (this.dropdownContent = m("div", {
          id: `iti-${this.id}__dropdown-content`,
          class: `iti__dropdown-content iti__hide ${f}`
        }), p && (this.searchInput = m(
          "input",
          {
            type: "text",
            class: "iti__search-input",
            placeholder: h.searchPlaceholder,
            role: "combobox",
            "aria-expanded": "true",
            "aria-label": h.searchPlaceholder,
            "aria-controls": `iti-${this.id}__country-listbox`,
            "aria-autocomplete": "list",
            autocomplete: "off"
          },
          this.dropdownContent
        ), this.searchResultsA11yText = m(
          "span",
          { class: "iti__a11y-text" },
          this.dropdownContent
        )), this.countryList = m(
          "ul",
          {
            class: "iti__country-list",
            id: `iti-${this.id}__country-listbox`,
            role: "listbox",
            "aria-label": h.countryListAriaLabel
          },
          this.dropdownContent
        ), this._appendListItems(), p && this._updateSearchResultsText(), a) {
          let b = "iti iti--container";
          u ? b += " iti--fullscreen-popup" : b += " iti--inline-dropdown", this.dropdown = m("div", { class: b }), this.dropdown.appendChild(this.dropdownContent);
        } else
          this.countryContainer.appendChild(this.dropdownContent);
      }
    }
    if (C.appendChild(this.telInput), this._updateInputPadding(), n) {
      const y = this.telInput.getAttribute("name") || "", f = n(y);
      f.phone && (this.hiddenInput = m("input", {
        type: "hidden",
        name: f.phone
      }), C.appendChild(this.hiddenInput)), f.country && (this.hiddenInputCountry = m("input", {
        type: "hidden",
        name: f.country
      }), C.appendChild(this.hiddenInputCountry));
    }
  }
  //* For each country: add a country list item <li> to the countryList <ul> container.
  _appendListItems() {
    for (let t = 0; t < this.countries.length; t++) {
      const e = this.countries[t], i = t === 0 ? "iti__highlight" : "", s = m(
        "li",
        {
          id: `iti-${this.id}__item-${e.iso2}`,
          class: `iti__country ${i}`,
          tabindex: "-1",
          role: "option",
          "data-dial-code": e.dialCode,
          "data-country-code": e.iso2,
          "aria-selected": "false"
        },
        this.countryList
      );
      e.nodeById[this.id] = s;
      let n = "";
      this.options.showFlags && (n += `<div class='iti__flag iti__${e.iso2}'></div>`), n += `<span class='iti__country-name'>${e.name}</span>`, n += `<span class='iti__dial-code'>+${e.dialCode}</span>`, s.insertAdjacentHTML("beforeend", n);
    }
  }
  //* Set the initial state of the input value and the selected country by:
  //* 1. Extracting a dial code from the given number
  //* 2. Using explicit initialCountry
  _setInitialState(t = !1) {
    const e = this.telInput.getAttribute("value"), i = this.telInput.value, n = e && e.charAt(0) === "+" && (!i || i.charAt(0) !== "+") ? e : i, a = this._getDialCode(n), o = N(n), { initialCountry: u, geoIpLookup: p } = this.options, h = u === "auto" && p;
    if (a && !o)
      this._updateCountryFromNumber(n);
    else if (!h || t) {
      const c = u ? u.toLowerCase() : "";
      c && this._getCountryData(c, !0) ? this._setCountry(c) : a && o ? this._setCountry("us") : this._setCountry();
    }
    n && this._updateValFromNumber(n);
  }
  //* Initialise the main event listeners: input keyup, and click selected country.
  _initListeners() {
    this._initTelInputListeners(), this.options.allowDropdown && this._initDropdownListeners(), (this.hiddenInput || this.hiddenInputCountry) && this.telInput.form && this._initHiddenInputListener();
  }
  //* Update hidden input on form submit.
  _initHiddenInputListener() {
    var t;
    this._handleHiddenInputSubmit = () => {
      this.hiddenInput && (this.hiddenInput.value = this.getNumber()), this.hiddenInputCountry && (this.hiddenInputCountry.value = this.getSelectedCountryData().iso2 || "");
    }, (t = this.telInput.form) == null || t.addEventListener(
      "submit",
      this._handleHiddenInputSubmit
    );
  }
  //* initialise the dropdown listeners.
  _initDropdownListeners() {
    this._handleLabelClick = (e) => {
      this.dropdownContent.classList.contains("iti__hide") ? this.telInput.focus() : e.preventDefault();
    };
    const t = this.telInput.closest("label");
    t && t.addEventListener("click", this._handleLabelClick), this._handleClickSelectedCountry = () => {
      this.dropdownContent.classList.contains("iti__hide") && !this.telInput.disabled && !this.telInput.readOnly && this._openDropdown();
    }, this.selectedCountry.addEventListener("click", this._handleClickSelectedCountry), this._handleCountryContainerKeydown = (e) => {
      this.dropdownContent.classList.contains("iti__hide") && ["ArrowUp", "ArrowDown", " ", "Enter"].includes(e.key) && (e.preventDefault(), e.stopPropagation(), this._openDropdown()), e.key === "Tab" && this._closeDropdown();
    }, this.countryContainer.addEventListener(
      "keydown",
      this._handleCountryContainerKeydown
    );
  }
  //* Init many requests: utils script / geo ip lookup.
  _initRequests() {
    const { utilsScript: t, initialCountry: e, geoIpLookup: i } = this.options;
    t && !r.utils ? r.documentReady() ? r.loadUtils(t) : window.addEventListener("load", () => {
      r.loadUtils(t);
    }) : this.resolveUtilsScriptPromise(), e === "auto" && i && !this.selectedCountryData.iso2 ? this._loadAutoCountry() : this.resolveAutoCountryPromise();
  }
  //* Perform the geo ip lookup.
  _loadAutoCountry() {
    r.autoCountry ? this.handleAutoCountry() : r.startedLoadingAutoCountry || (r.startedLoadingAutoCountry = !0, typeof this.options.geoIpLookup == "function" && this.options.geoIpLookup(
      (t = "") => {
        const e = t.toLowerCase();
        e && this._getCountryData(e, !0) ? (r.autoCountry = e, setTimeout(() => _("handleAutoCountry"))) : (this._setInitialState(!0), _("rejectAutoCountryPromise"));
      },
      () => {
        this._setInitialState(!0), _("rejectAutoCountryPromise");
      }
    ));
  }
  _openDropdownWithPlus() {
    this._openDropdown(), this.searchInput.value = "+", this._filterCountries("", !0);
  }
  //* Initialize the tel input listeners.
  _initTelInputListeners() {
    const { strictMode: t, formatAsYouType: e, separateDialCode: i, formatOnDisplay: s, allowDropdown: n } = this.options;
    let a = !1;
    new RegExp("\\p{L}", "u").test(this.telInput.value) && (a = !0), this._handleInputEvent = (o) => {
      if (this.isAndroid && (o == null ? void 0 : o.data) === "+" && i && n) {
        const c = this.telInput.selectionStart || 0, C = this.telInput.value.substring(0, c - 1), d = this.telInput.value.substring(c);
        this.telInput.value = C + d, this._openDropdownWithPlus();
        return;
      }
      this._updateCountryFromNumber(this.telInput.value) && this._triggerCountryChange();
      const u = (o == null ? void 0 : o.data) && /[^+0-9]/.test(o.data), p = (o == null ? void 0 : o.inputType) === "insertFromPaste" && this.telInput.value;
      u || p && !t ? a = !0 : /[^+0-9]/.test(this.telInput.value) || (a = !1);
      const h = (o == null ? void 0 : o.detail) && o.detail.isSetNumber && !s;
      if (e && !a && !h) {
        const c = this.telInput.selectionStart || 0, d = this.telInput.value.substring(0, c).replace(/[^+0-9]/g, "").length, y = (o == null ? void 0 : o.inputType) === "deleteContentForward", f = this._formatNumberAsYouType(), b = $(d, f, c, y);
        this.telInput.value = f, this.telInput.setSelectionRange(b, b);
      }
    }, this.telInput.addEventListener("input", this._handleInputEvent), (t || i) && (this._handleKeydownEvent = (o) => {
      if (o.key && o.key.length === 1 && !o.altKey && !o.ctrlKey && !o.metaKey) {
        if (i && n && o.key === "+") {
          o.preventDefault(), this._openDropdownWithPlus();
          return;
        }
        if (t) {
          const u = this.telInput.selectionStart === 0 && o.key === "+", p = /^[0-9]$/.test(o.key), h = i ? p : u || p, c = this._getFullNumber(), C = r.utils.getCoreNumber(c, this.selectedCountryData.iso2), d = this.maxCoreNumberLength && C.length >= this.maxCoreNumberLength, y = this.telInput.value.substring(this.telInput.selectionStart, this.telInput.selectionEnd), f = /\d/.test(y);
          (!h || d && !f) && o.preventDefault();
        }
      }
    }, this.telInput.addEventListener("keydown", this._handleKeydownEvent));
  }
  //* Adhere to the input's maxlength attr.
  _cap(t) {
    const e = parseInt(this.telInput.getAttribute("maxlength") || "", 10);
    return e && t.length > e ? t.substr(0, e) : t;
  }
  //* Trigger a custom event on the input.
  _trigger(t, e = {}) {
    const i = new CustomEvent(t, {
      bubbles: !0,
      cancelable: !0,
      detail: e
    });
    this.telInput.dispatchEvent(i);
  }
  //* Open the dropdown.
  _openDropdown() {
    const { fixDropdownWidth: t, countrySearch: e } = this.options;
    if (t && (this.dropdownContent.style.width = `${this.telInput.offsetWidth}px`), this.dropdownContent.classList.remove("iti__hide"), this.selectedCountry.setAttribute("aria-expanded", "true"), this._setDropdownPosition(), e) {
      const i = this.countryList.firstElementChild;
      i && (this._highlightListItem(i, !1), this.countryList.scrollTop = 0), this.searchInput.focus();
    }
    this._bindDropdownListeners(), this.dropdownArrow.classList.add("iti__arrow--up"), this._trigger("open:countrydropdown");
  }
  //* Set the dropdown position
  _setDropdownPosition() {
    if (this.options.dropdownContainer && this.options.dropdownContainer.appendChild(this.dropdown), !this.options.useFullscreenPopup) {
      const t = this.telInput.getBoundingClientRect(), e = this.telInput.offsetHeight;
      this.options.dropdownContainer && (this.dropdown.style.top = `${t.top + e}px`, this.dropdown.style.left = `${t.left}px`, this._handleWindowScroll = () => this._closeDropdown(), window.addEventListener("scroll", this._handleWindowScroll));
    }
  }
  //* We only bind dropdown listeners when the dropdown is open.
  _bindDropdownListeners() {
    this._handleMouseoverCountryList = (s) => {
      var a;
      const n = (a = s.target) == null ? void 0 : a.closest(".iti__country");
      n && this._highlightListItem(n, !1);
    }, this.countryList.addEventListener(
      "mouseover",
      this._handleMouseoverCountryList
    ), this._handleClickCountryList = (s) => {
      var a;
      const n = (a = s.target) == null ? void 0 : a.closest(".iti__country");
      n && this._selectListItem(n);
    }, this.countryList.addEventListener("click", this._handleClickCountryList);
    let t = !0;
    this._handleClickOffToClose = () => {
      t || this._closeDropdown(), t = !1;
    }, document.documentElement.addEventListener(
      "click",
      this._handleClickOffToClose
    );
    let e = "", i = null;
    if (this._handleKeydownOnDropdown = (s) => {
      ["ArrowUp", "ArrowDown", "Enter", "Escape"].includes(s.key) && (s.preventDefault(), s.stopPropagation(), s.key === "ArrowUp" || s.key === "ArrowDown" ? this._handleUpDownKey(s.key) : s.key === "Enter" ? this._handleEnterKey() : s.key === "Escape" && this._closeDropdown()), !this.options.countrySearch && /^[a-zA-ZÀ-ÿа-яА-Я ]$/.test(s.key) && (s.stopPropagation(), i && clearTimeout(i), e += s.key.toLowerCase(), this._searchForCountry(e), i = setTimeout(() => {
        e = "";
      }, 1e3));
    }, document.addEventListener("keydown", this._handleKeydownOnDropdown), this.options.countrySearch) {
      const s = () => {
        const a = this.searchInput.value.trim();
        a ? this._filterCountries(a) : this._filterCountries("", !0);
      };
      let n = null;
      this._handleSearchChange = () => {
        n && clearTimeout(n), n = setTimeout(() => {
          s(), n = null;
        }, 100);
      }, this.searchInput.addEventListener("input", this._handleSearchChange), this.searchInput.addEventListener("click", (a) => a.stopPropagation());
    }
  }
  //* Hidden search (countrySearch disabled): Find the first list item whose name starts with the query string.
  _searchForCountry(t) {
    for (let e = 0; e < this.countries.length; e++) {
      const i = this.countries[e];
      if (i.name.substr(0, t.length).toLowerCase() === t) {
        const n = i.nodeById[this.id];
        this._highlightListItem(n, !1), this._scrollTo(n);
        break;
      }
    }
  }
  //* Country search enabled: Filter the countries according to the search query.
  _filterCountries(t, e = !1) {
    let i = !0;
    this.countryList.innerHTML = "";
    const s = D(t);
    for (let n = 0; n < this.countries.length; n++) {
      const a = this.countries[n], o = D(a.name), u = a.name.split(/[^a-zA-ZÀ-ÿа-яА-Я]/).map((h) => h[0]).join("").toLowerCase(), p = `+${a.dialCode}`;
      if (e || o.includes(s) || p.includes(s) || a.iso2.includes(s) || u.includes(s)) {
        const h = a.nodeById[this.id];
        h && this.countryList.appendChild(h), i && (this._highlightListItem(h, !1), i = !1);
      }
    }
    i && this._highlightListItem(null, !1), this.countryList.scrollTop = 0, this._updateSearchResultsText();
  }
  //* Update search results text (for a11y).
  _updateSearchResultsText() {
    const { i18n: t } = this.options, e = this.countryList.childElementCount;
    let i;
    e === 0 ? i = t.zeroSearchResults : e === 1 ? i = t.oneSearchResult : i = t.multipleSearchResults.replace("${count}", e.toString()), this.searchResultsA11yText.textContent = i;
  }
  //* Highlight the next/prev item in the list (and ensure it is visible).
  _handleUpDownKey(t) {
    var i, s;
    let e = t === "ArrowUp" ? (i = this.highlightedItem) == null ? void 0 : i.previousElementSibling : (s = this.highlightedItem) == null ? void 0 : s.nextElementSibling;
    !e && this.countryList.childElementCount > 1 && (e = t === "ArrowUp" ? this.countryList.lastElementChild : this.countryList.firstElementChild), e && (this._scrollTo(e), this._highlightListItem(e, !1));
  }
  //* Select the currently highlighted item.
  _handleEnterKey() {
    this.highlightedItem && this._selectListItem(this.highlightedItem);
  }
  //* Update the input's value to the given val (format first if possible)
  //* NOTE: this is called from _setInitialState, handleUtils and setNumber.
  _updateValFromNumber(t) {
    let e = t;
    if (this.options.formatOnDisplay && r.utils && this.selectedCountryData) {
      const i = this.options.nationalMode || e.charAt(0) !== "+" && !this.options.separateDialCode, { NATIONAL: s, INTERNATIONAL: n } = r.utils.numberFormat, a = i ? s : n;
      e = r.utils.formatNumber(
        e,
        this.selectedCountryData.iso2,
        a
      );
    }
    e = this._beforeSetNumber(e), this.telInput.value = e;
  }
  //* Check if need to select a new country based on the given number
  //* Note: called from _setInitialState, keyup handler, setNumber.
  _updateCountryFromNumber(t) {
    const e = t.indexOf("+");
    let i = e ? t.substring(e) : t;
    const s = this.selectedCountryData.dialCode;
    i && s === "1" && i.charAt(0) !== "+" && (i.charAt(0) !== "1" && (i = `1${i}`), i = `+${i}`), this.options.separateDialCode && s && i.charAt(0) !== "+" && (i = `+${s}${i}`);
    const a = this._getDialCode(i, !0), o = I(i);
    let u = null;
    if (a) {
      const p = this.dialCodeToIso2Map[I(a)], h = p.indexOf(this.selectedCountryData.iso2) !== -1 && o.length <= a.length - 1;
      if (!(s === "1" && N(o)) && !h) {
        for (let C = 0; C < p.length; C++)
          if (p[C]) {
            u = p[C];
            break;
          }
      }
    } else i.charAt(0) === "+" && o.length ? u = "" : (!i || i === "+") && !this.selectedCountryData.iso2 && (u = this.defaultCountry);
    return u !== null ? this._setCountry(u) : !1;
  }
  //* Remove highlighting from other list items and highlight the given item.
  _highlightListItem(t, e) {
    const i = this.highlightedItem;
    if (i && (i.classList.remove("iti__highlight"), i.setAttribute("aria-selected", "false")), this.highlightedItem = t, this.highlightedItem) {
      this.highlightedItem.classList.add("iti__highlight"), this.highlightedItem.setAttribute("aria-selected", "true");
      const s = this.highlightedItem.getAttribute("id") || "";
      this.selectedCountry.setAttribute("aria-activedescendant", s), this.options.countrySearch && this.searchInput.setAttribute("aria-activedescendant", s);
    }
    e && this.highlightedItem.focus();
  }
  //* Find the country data for the given iso2 code
  //* the ignoreOnlyCountriesOption is only used during init() while parsing the onlyCountries array
  _getCountryData(t, e) {
    for (let i = 0; i < this.countries.length; i++)
      if (this.countries[i].iso2 === t)
        return this.countries[i];
    if (e)
      return null;
    throw new Error(`No country data for '${t}'`);
  }
  //* Update the selected country, dial code (if separateDialCode), placeholder, title, and active list item.
  //* Note: called from _setInitialState, _updateCountryFromNumber, _selectListItem, setCountry.
  _setCountry(t) {
    const { separateDialCode: e, showFlags: i, i18n: s } = this.options, n = this.selectedCountryData.iso2 ? this.selectedCountryData : {};
    if (this.selectedCountryData = t ? this._getCountryData(t, !1) || {} : {}, this.selectedCountryData.iso2 && (this.defaultCountry = this.selectedCountryData.iso2), this.selectedCountryInner) {
      let a = "", o = "";
      t && i ? (a = `iti__flag iti__${t}`, o = `${this.selectedCountryData.name} +${this.selectedCountryData.dialCode}`) : (a = "iti__flag iti__globe", o = s.noCountrySelected), this.selectedCountryInner.className = a, this.selectedCountryA11yText.textContent = o;
    }
    if (this._setSelectedCountryTitleAttribute(t, e), e) {
      const a = this.selectedCountryData.dialCode ? `+${this.selectedCountryData.dialCode}` : "";
      this.selectedDialCode.innerHTML = a, this._updateInputPadding();
    }
    return this._updatePlaceholder(), this._updateMaxLength(), n.iso2 !== t;
  }
  //* Update the input padding to make space for the selected country/dial code.
  _updateInputPadding() {
    const e = (this.selectedCountry.offsetWidth || this._getHiddenSelectedCountryWidth()) + 6;
    this.showSelectedCountryOnLeft ? this.telInput.style.paddingLeft = `${e}px` : this.telInput.style.paddingRight = `${e}px`;
  }
  //* Update the maximum valid number length for the currently selected country.
  _updateMaxLength() {
    const { strictMode: t, placeholderNumberType: e, validationNumberType: i } = this.options;
    if (t && r.utils)
      if (this.selectedCountryData.iso2) {
        const s = r.utils.numberType[e];
        let n = r.utils.getExampleNumber(
          this.selectedCountryData.iso2,
          !1,
          s,
          !0
        ), a = n;
        for (; r.utils.isPossibleNumber(n, this.selectedCountryData.iso2, i); )
          a = n, n += "0";
        const o = r.utils.getCoreNumber(a, this.selectedCountryData.iso2);
        this.maxCoreNumberLength = o.length;
      } else
        this.maxCoreNumberLength = null;
  }
  _setSelectedCountryTitleAttribute(t = null, e) {
    if (!this.selectedCountry)
      return;
    let i;
    t && !e ? i = `${this.selectedCountryData.name}: +${this.selectedCountryData.dialCode}` : t ? i = this.selectedCountryData.name : i = "Unknown", this.selectedCountry.setAttribute("title", i);
  }
  //* When the input is in a hidden container during initialisation, we must inject some markup
  //* into the end of the DOM to calculate the correct offsetWidth.
  //* NOTE: this is only used when separateDialCode is enabled, so countryContainer and selectedCountry
  //* will definitely exist.
  _getHiddenSelectedCountryWidth() {
    if (this.telInput.parentNode) {
      const t = this.telInput.parentNode.cloneNode(!1);
      t.style.visibility = "hidden", document.body.appendChild(t);
      const e = this.countryContainer.cloneNode();
      t.appendChild(e);
      const i = this.selectedCountry.cloneNode(!0);
      e.appendChild(i);
      const s = i.offsetWidth;
      return document.body.removeChild(t), s;
    }
    return 0;
  }
  //* Update the input placeholder to an example number from the currently selected country.
  _updatePlaceholder() {
    const {
      autoPlaceholder: t,
      placeholderNumberType: e,
      nationalMode: i,
      customPlaceholder: s
    } = this.options, n = t === "aggressive" || !this.hadInitialPlaceholder && t === "polite";
    if (r.utils && n) {
      const a = r.utils.numberType[e];
      let o = this.selectedCountryData.iso2 ? r.utils.getExampleNumber(
        this.selectedCountryData.iso2,
        i,
        a
      ) : "";
      o = this._beforeSetNumber(o), typeof s == "function" && (o = s(o, this.selectedCountryData)), this.telInput.setAttribute("placeholder", o);
    }
  }
  //* Called when the user selects a list item from the dropdown.
  _selectListItem(t) {
    const e = this._setCountry(
      t.getAttribute("data-country-code")
    );
    this._closeDropdown(), this._updateDialCode(t.getAttribute("data-dial-code")), this.telInput.focus(), e && this._triggerCountryChange();
  }
  //* Close the dropdown and unbind any listeners.
  _closeDropdown() {
    this.dropdownContent.classList.add("iti__hide"), this.selectedCountry.setAttribute("aria-expanded", "false"), this.selectedCountry.removeAttribute("aria-activedescendant"), this.highlightedItem && this.highlightedItem.setAttribute("aria-selected", "false"), this.options.countrySearch && this.searchInput.removeAttribute("aria-activedescendant"), this.dropdownArrow.classList.remove("iti__arrow--up"), document.removeEventListener("keydown", this._handleKeydownOnDropdown), this.options.countrySearch && this.searchInput.removeEventListener("input", this._handleSearchChange), document.documentElement.removeEventListener(
      "click",
      this._handleClickOffToClose
    ), this.countryList.removeEventListener(
      "mouseover",
      this._handleMouseoverCountryList
    ), this.countryList.removeEventListener("click", this._handleClickCountryList), this.options.dropdownContainer && (this.options.useFullscreenPopup || window.removeEventListener("scroll", this._handleWindowScroll), this.dropdown.parentNode && this.dropdown.parentNode.removeChild(this.dropdown)), this._trigger("close:countrydropdown");
  }
  //* Check if an element is visible within it's container, else scroll until it is.
  _scrollTo(t) {
    const e = this.countryList, i = document.documentElement.scrollTop, s = e.offsetHeight, n = e.getBoundingClientRect().top + i, a = n + s, o = t.offsetHeight, u = t.getBoundingClientRect().top + i, p = u + o, h = u - n + e.scrollTop;
    if (u < n)
      e.scrollTop = h;
    else if (p > a) {
      const c = s - o;
      e.scrollTop = h - c;
    }
  }
  //* Replace any existing dial code with the new one
  //* Note: called from _selectListItem and setCountry
  _updateDialCode(t) {
    const e = this.telInput.value, i = `+${t}`;
    let s;
    if (e.charAt(0) === "+") {
      const n = this._getDialCode(e);
      n ? s = e.replace(n, i) : s = i, this.telInput.value = s;
    }
  }
  //* Try and extract a valid international dial code from a full telephone number.
  //* Note: returns the raw string inc plus character and any whitespace/dots etc.
  _getDialCode(t, e) {
    let i = "";
    if (t.charAt(0) === "+") {
      let s = "";
      for (let n = 0; n < t.length; n++) {
        const a = t.charAt(n);
        if (!isNaN(parseInt(a, 10))) {
          if (s += a, e)
            this.dialCodeToIso2Map[s] && (i = t.substr(0, n + 1));
          else if (this.dialCodes[s]) {
            i = t.substr(0, n + 1);
            break;
          }
          if (s.length === this.dialCodeMaxLen)
            break;
        }
      }
    }
    return i;
  }
  //* Get the input val, adding the dial code if separateDialCode is enabled.
  _getFullNumber() {
    const t = this.telInput.value.trim(), { dialCode: e } = this.selectedCountryData;
    let i;
    const s = I(t);
    return this.options.separateDialCode && t.charAt(0) !== "+" && e && s ? i = `+${e}` : i = "", i + t;
  }
  //* Remove the dial code if separateDialCode is enabled also cap the length if the input has a maxlength attribute
  _beforeSetNumber(t) {
    let e = t;
    if (this.options.separateDialCode) {
      let i = this._getDialCode(e);
      if (i) {
        i = `+${this.selectedCountryData.dialCode}`;
        const s = e[i.length] === " " || e[i.length] === "-" ? i.length + 1 : i.length;
        e = e.substr(s);
      }
    }
    return this._cap(e);
  }
  //* Trigger the 'countrychange' event.
  _triggerCountryChange() {
    this._trigger("countrychange");
  }
  //* Format the number as the user types.
  _formatNumberAsYouType() {
    const t = this._getFullNumber(), e = r.utils ? r.utils.formatNumberAsYouType(t, this.selectedCountryData.iso2) : t, { dialCode: i } = this.selectedCountryData;
    return this.options.separateDialCode && this.telInput.value.charAt(0) !== "+" && e.includes(`+${i}`) ? (e.split(`+${i}`)[1] || "").trim() : e;
  }
  //**************************
  //*  SECRET PUBLIC METHODS
  //**************************
  //* This is called when the geoip call returns.
  handleAutoCountry() {
    this.options.initialCountry === "auto" && r.autoCountry && (this.defaultCountry = r.autoCountry, this.selectedCountryData.iso2 || this.selectedCountryInner.classList.contains("iti__globe") || this.setCountry(this.defaultCountry), this.resolveAutoCountryPromise());
  }
  //* This is called when the utils request completes.
  handleUtils() {
    r.utils && (this.telInput.value && this._updateValFromNumber(this.telInput.value), this.selectedCountryData.iso2 && (this._updatePlaceholder(), this._updateMaxLength())), this.resolveUtilsScriptPromise();
  }
  //********************
  //*  PUBLIC METHODS
  //********************
  //* Remove plugin.
  destroy() {
    var n, a;
    const { allowDropdown: t, separateDialCode: e } = this.options;
    if (t) {
      this._closeDropdown(), this.selectedCountry.removeEventListener(
        "click",
        this._handleClickSelectedCountry
      ), this.countryContainer.removeEventListener(
        "keydown",
        this._handleCountryContainerKeydown
      );
      const o = this.telInput.closest("label");
      o && o.removeEventListener("click", this._handleLabelClick);
    }
    const { form: i } = this.telInput;
    this._handleHiddenInputSubmit && i && i.removeEventListener("submit", this._handleHiddenInputSubmit), this.telInput.removeEventListener("input", this._handleInputEvent), this._handleKeydownEvent && this.telInput.removeEventListener("keydown", this._handleKeydownEvent), this.telInput.removeAttribute("data-intl-tel-input-id"), e && (this.isRTL ? this.telInput.style.paddingRight = this.originalPaddingRight : this.telInput.style.paddingLeft = this.originalPaddingLeft);
    const s = this.telInput.parentNode;
    (n = s == null ? void 0 : s.parentNode) == null || n.insertBefore(this.telInput, s), (a = s == null ? void 0 : s.parentNode) == null || a.removeChild(s), delete r.instances[this.id];
  }
  //* Get the extension from the current number.
  getExtension() {
    return r.utils ? r.utils.getExtension(
      this._getFullNumber(),
      this.selectedCountryData.iso2
    ) : "";
  }
  //* Format the number to the given format.
  getNumber(t) {
    if (r.utils) {
      const { iso2: e } = this.selectedCountryData;
      return r.utils.formatNumber(
        this._getFullNumber(),
        e,
        t
      );
    }
    return "";
  }
  //* Get the type of the entered number e.g. landline/mobile.
  getNumberType() {
    return r.utils ? r.utils.getNumberType(
      this._getFullNumber(),
      this.selectedCountryData.iso2
    ) : -99;
  }
  //* Get the country data for the currently selected country.
  getSelectedCountryData() {
    return this.selectedCountryData;
  }
  //* Get the validation error.
  getValidationError() {
    if (r.utils) {
      const { iso2: t } = this.selectedCountryData;
      return r.utils.getValidationError(this._getFullNumber(), t);
    }
    return -99;
  }
  //* Validate the input val
  isValidNumber() {
    const t = this._getFullNumber(), e = t.search(new RegExp("\\p{L}", "u"));
    if (e > -1) {
      const i = t.substring(0, e), s = this._utilsIsPossibleNumber(i), n = this._utilsIsPossibleNumber(t);
      return s && n;
    }
    return this._utilsIsPossibleNumber(t);
  }
  _utilsIsPossibleNumber(t) {
    return r.utils ? r.utils.isPossibleNumber(t, this.selectedCountryData.iso2, this.options.validationNumberType) : null;
  }
  //* Validate the input val (precise)
  isValidNumberPrecise() {
    const t = this._getFullNumber(), e = t.search(new RegExp("\\p{L}", "u"));
    if (e > -1) {
      const i = t.substring(0, e), s = this._utilsIsValidNumber(i), n = this._utilsIsValidNumber(t);
      return s && n;
    }
    return this._utilsIsValidNumber(t);
  }
  _utilsIsValidNumber(t) {
    return r.utils ? r.utils.isValidNumber(t, this.selectedCountryData.iso2) : null;
  }
  //* Update the selected country, and update the input val accordingly.
  setCountry(t) {
    const e = t == null ? void 0 : t.toLowerCase(), i = this.selectedCountryData.iso2;
    (t && e !== i || !t && i) && (this._setCountry(e), this._updateDialCode(this.selectedCountryData.dialCode), this._triggerCountryChange());
  }
  //* Set the input value and update the country.
  setNumber(t) {
    const e = this._updateCountryFromNumber(t);
    this._updateValFromNumber(t), e && this._triggerCountryChange(), this._trigger("input", { isSetNumber: !0 });
  }
  //* Set the placeholder number typ
  setPlaceholderNumberType(t) {
    this.options.placeholderNumberType = t, this._updatePlaceholder();
  }
  setDisabled(t) {
    this.telInput.disabled = t, t ? this.selectedCountry.setAttribute("disabled", "true") : this.selectedCountry.removeAttribute("disabled");
  }
}
const K = (l) => !r.utils && !r.startedLoadingUtilsScript ? (r.startedLoadingUtilsScript = !0, new Promise((t, e) => {
  import(
    /* webpackIgnore: true */
    /* @vite-ignore */
    l
  ).then(({ default: i }) => {
    r.utils = i, _("handleUtils"), t(!0);
  }).catch(() => {
    _("rejectUtilsScriptPromise"), e();
  });
})) : null, r = Object.assign(
  (l, t) => {
    const e = new j(l, t);
    return e._init(), l.setAttribute("data-intl-tel-input-id", e.id.toString()), r.instances[e.id] = e, e;
  },
  {
    defaults: S,
    //* Using a static var like this allows us to mock it in the tests.
    documentReady: () => document.readyState === "complete",
    //* Get the country data object.
    getCountryData: () => g,
    //* A getter for the plugin instance.
    getInstance: (l) => {
      const t = l.getAttribute("data-intl-tel-input-id");
      return t ? r.instances[t] : null;
    },
    //* A map from instance ID to instance object.
    instances: {},
    loadUtils: K,
    version: process.env.VERSION
  }
), H = {
  __name: "IntlTelInput",
  props: /* @__PURE__ */ v({
    options: {
      type: Object,
      default: () => ({})
    },
    value: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean
    }
  }, {
    modelValue: {
      type: String,
      default: ""
    },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ v(["changeNumber", "changeCountry", "changeValidity", "changeErrorCode"], ["update:modelValue"]),
  setup(l, { expose: t, emit: e }) {
    const i = k(l, "modelValue"), s = l, n = e, a = w(), o = w(), u = w(!1), p = () => o.value ? s.options.strictMode ? o.value.isValidNumberPrecise() : o.value.isValidNumber() : null, h = () => {
      let d = p();
      u.value !== d && (u.value = d, n("changeValidity", !!d), n("changeErrorCode", d ? null : o.value.getValidationError()));
    }, c = () => {
      var d;
      n("changeNumber", ((d = o.value) == null ? void 0 : d.getNumber()) ?? ""), h();
    }, C = () => {
      var d;
      n("changeCountry", ((d = o.value) == null ? void 0 : d.getSelectedCountryData().iso2) ?? ""), c(), h();
    };
    return T(() => {
      a.value && (o.value = r(a.value, s.options), s.value && o.value.setNumber(s.value), s.disabled && o.value.setDisabled(s.disabled));
    }), P(
      () => s.disabled,
      (d) => {
        var y;
        return (y = o.value) == null ? void 0 : y.setDisabled(d);
      }
    ), x(() => {
      var d;
      return (d = o.value) == null ? void 0 : d.destroy();
    }), t({ instance: o, input: a }), (d, y) => E((M(), B("input", {
      ref_key: "input",
      ref: a,
      "onUpdate:modelValue": y[0] || (y[0] = (f) => i.value = f),
      type: "tel",
      onCountrychange: C,
      onInput: c
    }, null, 544)), [
      [O, i.value]
    ]);
  }
};
export {
  H as default
};
