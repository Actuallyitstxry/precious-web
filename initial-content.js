(function(){
/* Original PreciousT catalogue and content, retained for one-time import. */
const CATEGORIES = [
  { key: "Signature Dresses", tagline: "Our most requested, one-of-a-kind pieces" },
  { key: "Premium Dresses",   tagline: "Top-tier gowns for standout occasions" },
  { key: "Standard Dresses",  tagline: "Everyday rental essentials" }
];

const PRICING_TIERS = [
  { tier: "Standard Dresses",  price: "R2 500" },
  { tier: "Premium Dresses",   price: "R3 500" },
  { tier: "Signature Dresses", price: "R4 000" },
  { tier: "Security Deposit (refundable)", price: "R500 KZN · R1000 Out of Province" },
  { tier: "Courier Fee",       price: "R150" }
];

const GUIDELINE_SECTIONS = [
  {
    heading: "About PreciousT Collection",
    type: "paragraph",
    text: "At PreciousT Collection, each dress is chosen for its elegance, quality, and ability to make you feel unforgettable. All dresses are maintained with professional care to ensure they arrive in pristine condition for your event."
  },
  {
    heading: "Booking Requirements",
    type: "list",
    items: [
      "A 50% deposit (or full payment)",
      "Contact details",
      "Confirmed event date",
      "A courier fee of R150 applies to all deliveries",
      "Bookings are secured once payments have been made"
    ]
  },
  {
    heading: "Fittings",
    type: "list",
    items: [
      "Fittings will be scheduled upon request to ensure the dress suits you perfectly",
      "We do your alterations"
    ]
  },
  {
    heading: "Rental Duration",
    type: "list",
    items: [
      "All rentals follow the standard PreciousT Collection period: 3–5 days (depending on the event)",
      "Pick-up and return dates will be confirmed during booking",
      "Late returns incur a late fee per day"
    ]
  },
  {
    heading: "Cancellations & Refunds",
    type: "list",
    items: [
      "No refunds will be issued for cancellations made within 10 days of the event date",
      "Cancellations made more than 10 days before the event date may be eligible for a refund, at PreciousT Collection's discretion",
      "All deposits and payments are non-refundable once a booking falls inside the 10-day window"
    ]
  },
  {
    heading: "Contact Info",
    type: "list",
    items: [
      "PreciousT Collection — Elegant Custom & Rental Dresses",
      "Phone: +27 72 029 1850",
      "Email: Precioustcollections@gmail.com",
      "Location: 237 Bartle Road, Umbilo, Durban",
      "Instagram: @precioust_collection",
      "TikTok: @precioustcollection"
    ]
  }
];

const dresses = [
    /* premium dresses */
  {
    name: "Anelisa Dress",
    category: "Premium Dresses",
    colour: "Royale Blue",
    sizes: ["S","M"],
    price: 3500,
    available: false,
    images:  ["https://lh3.googleusercontent.com/d/1Dzqa-N2KR1EbRiPBg3_362yPoFL4gd3F",
             "https://lh3.googleusercontent.com/d/1_67o6V_FDlA92EjtyV0jzGlqP_yQJXsB",],
    bookings: [ { start: "2026-08-01",days: 5 },{start:"2026-09-23",days:5} ]
  },
  {
    name: "Enhle's Dress",
    category: "Premium Dresses",
    colour: "Black",
    sizes: ["L","XL"],
    price: 3500,
    available: false,
    images: ["https://lh3.googleusercontent.com/d/1g256Xa0iyOClW__frk_20_uhzucj5BeT",
             "https://lh3.googleusercontent.com/d/1yQtcDd99POgvIoCIAymu6s7HE1CzRLE4",],
    bookings: [ { start: "2026-09-27",days: 5 } ]         
    
  },
  {
    name: "Imani Dress",
    category: "Premium Dresses",
    colour: "Rose Gold",
    sizes: ["XS","S"],
    price: 3500,
    available: false,
    images:["https://lh3.googleusercontent.com/d/1Y88Oisa9lPhNJTsu_8vKuxarYZL36DHy",
            "https://lh3.googleusercontent.com/d/1pac25diS7aakZYrE-ga6DB644rObz39F",],
  },
  {
    name: "Precious Black Opal ",
    category: "Premium Dresses",
    colour: "Black",
    sizes: ["M",""],
    price: 3500,
    available: false,
    images:["https://lh3.googleusercontent.com/d/1AJa1O9xa_2gpcTXbNZBjeWfI2_-1dcdJ",
            "https://lh3.googleusercontent.com/d/187tuNGHcdsEpdUNFZhYvCLNMIbzw1kSz",],
            bookings:[{start:"2026-09-25",days:5}]
  },
  
  {
    name: "Nosi Dress",
    category: "Premium Dresses",
    colour: "Navy",
    sizes: ["S","M"],
    price: 3500,
    available: false,
    images: ["https://lh3.googleusercontent.com/d/1WLjZ2uwCKNdJAZWAdWQPCQRyCU08QwS5",
             "https://lh3.googleusercontent.com/d/1ykgKOqYs6lj1SsR7ZdOdvfoMt8an1oe7",],
             bookings: [ { start: "2026-08-28",days: 5 },{ start: "2026-08-08",days: 5 },
                         {start:"2026-09-26",days:5}]
  },
  {
    name: "Precious Amelia",
    category: "Premium Dresses",
    colour: "Petal Pink",
    sizes: ["S","M"],
    price: 3500,
    available: false,
    images:["https://lh3.googleusercontent.com/d/1ghI171xLkGyN66dFfzhT0eCHYekR2Ql-"],
  },
  {
    name: "Precious Aurelia",
    category: "Premium Dresses",
    colour: "Nude",
    sizes: ["S","M"],
    price: 3500,
    available: false,
    images:["https://lh3.googleusercontent.com/d/1dpHPmElXz9Wo9ZplQYNXEHwsJVZDLHHq"],
  },

   {
    name: "Precious Aurora Blush",
    category: "Premium Dresses",
    colour: "Aurora Blush",
    sizes: ["S","M"],
    price: 3500,
    available: false,
    images: ["https://lh3.googleusercontent.com/d/1ge_DHd2JIix_Z5c3oruuhnx_meR9aRpB",
             "https://lh3.googleusercontent.com/d/1zFD1woAn_NpYB5Wkvj0yFO6kYZFsi99K",],
  },
   {
    name: "Precious Azzura",
    category: "Premium Dresses",
    colour: "sky blue",
    sizes: ["S","M"],
    price: 3500,
    available: false,
    images:["https://lh3.googleusercontent.com/d/1mQ9gzZhX8WkwBFb5khwOfiY5w91KJHdj",
            "https://lh3.googleusercontent.com/d/1GgUa-dy40VbxgWjwuINlHHnn7HNsVcI4",
            "https://lh3.googleusercontent.com/d/13fZNbpzoO90uFD7y8EP1gtuOQbSvreFU",
            "https://lh3.googleusercontent.com/d/1gZF9xNJXUOY10XpU2ks5dEN7skc2yqQ5",],
            bookings:[{start:"2026-09-25",days:5}]
  },
   {
    name: "Precious Black",
    category: "Standard Dresses",
    colour: "Black",
    sizes: ["S","M"],
    price: 3000,
    available: false,
    images:["https://lh3.googleusercontent.com/d/1-WvEr0Mo5VZfIKg9cXv6N3_eKuo4JS5Y",
            "https://lh3.googleusercontent.com/d/1GUS1mZpAtcEKvr1Ct665P9HN9uNZSzV3",],
  },
  {
    name: "Precious Onyx Dress",
    category: "Premium Dresses",
    colour: "Black",
    sizes: ["M","L"],
    price: 3500,
    available: false,
    images:["https://lh3.googleusercontent.com/d/1G8VN8tUyrAMU6fggXUTzL3oMDxKueHI3",
            "https://lh3.googleusercontent.com/d/1RzdYnzkx5zdJsJuhl-NbQ45DNVK7KMQK",],
            bookings:[{start:"2026-09-23",days:5},
                      {start:"2026-09-04",days:5}]
  },
   {
    name: "Precious Bloom",
    category: "Premium Dresses",
    colour: "Pale Pink",
    sizes: ["M","L"],
    price: 3500,
    available: false,
    images: ["https://lh3.googleusercontent.com/d/1hRVrqsTlhCeYA8UAuhP91vhIt4PakM-6",
             "https://lh3.googleusercontent.com/d/1bnuGy3kNlbPUO8odwIBvhzL6mH1hoaHV",],
             bookings: [ { start: "2026-09-23",days: 5 } ]
  },
   {
    name: "Precious Blue",
    category: "Premium Dresses",
    colour: "Blue",
    sizes: ["S","M"],
    price: 3500,
    available: false,
    images: ["https://lh3.googleusercontent.com/d/1ZRoygog7uKbCX5xuAtlnQSpGcY8EQpko",
             "https://lh3.googleusercontent.com/d/1p4eIKkyZ9HksL9VmGFAX6S1py8jo-kob",],
    bookings:[{ start: "2026-07-31",days: 5 } ]
  },
   {
    name: "Precious Cascade ",
    category: "Premium Dresses",
    colour: "Cascade",
    sizes: ["M","L"],
    price: 3500,
    available: false,
    images: ["https://lh3.googleusercontent.com/d/1bneKMQPCkTmiJRXEbJZPdYRXFdfBZw66",
             "https://lh3.googleusercontent.com/d/1uNsRnh8r-xr6pT5cA2R_Gm1NhlyfVYbi",]
  },
   {
    name: "Precious Earthy Brown",
    category: "Premium Dresses",
    colour: "Earthly Brown",
    sizes: ["XS","S"],
    price: 3500,
    available: false,
    images: ["https://lh3.googleusercontent.com/d/17NQHMMVbGuyhKME0FGQWxdFtXsQNBFyT",
             "https://lh3.googleusercontent.com/d/1omi1pWVU6pWddslIXOL1A2RscVbHTQog",]
  },
   {
    name: "Precious Fleur",
    category: "Premium Dresses",
    colour: "pale pink",
    sizes: ["S","M"],
    price: 3500,
    available: false,
    images: ["https://lh3.googleusercontent.com/d/11MbBYr5CnOqeFA4npw__fgaXe9hVHxE3",
             "https://lh3.googleusercontent.com/d/11cfJliXmjJt29njRPN32WolVnXTdPsiJ",
             "https://lh3.googleusercontent.com/d/1KgpvfAGLa1MlXRjG8sOqoAZF2dZ-gTUH",]
  },
   {
    name: "Helen Dress",
    category: "Premium Dresses",
    colour: "Nude",
    sizes: ["XS","S"],
    price: 3500,
    available: false,
    images: ["https://lh3.googleusercontent.com/d/1e5JQmyMq_NRHmnqLucQ6xnIWDLVBAJBT",
             "https://lh3.googleusercontent.com/d/13jYTcZV-8wW2-zG8QfodHBB43zL4Wyz3",
             "https://lh3.googleusercontent.com/d/1kMqckT2sNmflXEyZvMRN-iuQQBrRrVuJ",],
    bookings: [ { start: "2026-09-23",days: 5 } , { start: "2026-10-08",days: 5 } ]
  },
   {
    name: "Precious Maroon",
    category: "Premium Dresses",
    colour: "Maroon",
    sizes: ["S","M"],
    price: 3500,
    available: false,
    images: ["https://lh3.googleusercontent.com/d/18vwdxD-_yT17Ozfv8u790YPWJtAPf1Vy",
             "https://lh3.googleusercontent.com/d/1EAzgm59q-1lvvXgQTeezUNQLmffzlYRe",],
             bookings: [ { start: "2026-09-22",days: 5 } ]
  },
   {
    name: "Precious Naledi",
    category: "Premium Dresses",
    colour: "Baby blue",
    sizes: ["S","M"],
    price: 3500,
    available: false,
    images: ["https://lh3.googleusercontent.com/d/1aPx7yt80dnqM4V1EloYQ6MsBEi7un-U9",
             "https://lh3.googleusercontent.com/d/1ABI9RZrRCilAKwhVv-6C6ot5tmQbrEu3",],
             bookings: [ { start: "",days: 5 } ]
  },
   {
    name: "Precious Navy",
    category: "Premium Dresses",
    colour: "Navy",
    sizes: ["S","M"],
    price: 3500,
    available: false,
    images: ["https://lh3.googleusercontent.com/d/1d2xGDlzaUVoDohrbZBKgtXVU4xdrZsLH",
             "https://lh3.googleusercontent.com/d/1Dc1kulL8vNLJmsRJ_-XGmTq2JAwgqsUb",],
    bookings:[{ start: "2026-08-09",days: 5 } ]
  },
   {
    name: "Precious Nude Elan",
    category: "Premium Dresses",
    colour: "Nude",
    sizes: ["S","M"],
    price: 3500,
    available: false,
    images: ["https://lh3.googleusercontent.com/d/1qfVmrYyqZ5b3CZjLHqATgsVKxa70vyr8",
             "https://lh3.googleusercontent.com/d/1fiOoUc1UrlWolzgI7GAY2yUvBkcyIBEE",]
  },
   {
    name: "Precious Nude Dress",
    category: "Premium Dresses",
    colour: "Nude",
    sizes: ["S","M"],
    price: 3500,
    available: false,
    images: ["https://lh3.googleusercontent.com/d/1ovqUYGixA5dkVpvAcL_1ek4sXKS7azd4",
             "https://lh3.googleusercontent.com/d/1bTphlTyitOFheyrlRW93aEcELLiDdFH0",]
  },

   {
    name: "Precious Purple", 
    category: "Premium Dresses",
    colour: "Purple",
    sizes: ["XS","S"],
    price: 3500,
    available: false,
    images: ["https://lh3.googleusercontent.com/d/1B-hY25YdXTxpsu4VSeTQ_LGVmeSYkgXq",
             "https://lh3.googleusercontent.com/d/1xdbyaAvsqU9kGHJhCtdJBnVnA9gAsvMT"],
             bookings: [ { start: "2026-09-23",days: 5 } ]
  },
   {
    name: "Precious Red", 
    category: "Premium Dresses",
    colour: "Red",
    sizes: ["S","M"],
    price: 3500,
    available: false,
    images: ["https://lh3.googleusercontent.com/d/1eqwVNPe9xq3TeUswmmlvlJ72L25bW3eh",
             "https://lh3.googleusercontent.com/d/1qTVHuv35ZpmL74r7xWX1ZUDsyYZOIAqb"],
             bookings: [ { start: "2026-09-23",days: 5 } ]
  },
 {
    name: "Precious Rose Royale", 
    category: "Premium Dresses",
    colour: "Rose Pink",
    sizes: ["M","L"],
    price: 3500,
    available: false,
    images: ["https://lh3.googleusercontent.com/d/1T-H9l-u83N5SIdfqrEe5n_MXqOutVZEA",
             "https://lh3.googleusercontent.com/d/1syTXfGXf565udXcoVX_Kyvt5t1cUtuq3"]
  },
 {
    name: "Precious Seraphine", 
    category: "Premium Dresses",
    colour: "Nude",
    sizes: ["S","M"],
    price: 3500,
    available: false,
    images: ["https://lh3.googleusercontent.com/d/19SFPiURWPs-p2wams8P2Fu_CwP2KswZR",
             "https://lh3.googleusercontent.com/d/1OoTgZvPR0H4eherjeHeMo5TLmhvqz9sa"],
    bookings:[{ start: "2026-08-13",days: 5 } ]         
  },
 {
    name: "Precious Silver", 
    category: "Premium Dresses",
    colour: "Silver",
    sizes: ["S","M"],
    price: 3500,
    available: false,
    images: ["https://lh3.googleusercontent.com/d/1IN9W6jWSdGEwjx4UiOUNv_4C7uPYStkQ",
             "https://lh3.googleusercontent.com/d/1M6LwvkIBs_YokQduDT8EF-3eLVULlN_j"]
  },
  {
    name: "Precious Silverstone", 
    category: "Premium Dresses",
    colour: "Silverstone",
    sizes: ["S","M"],
    price: 3500,
    available: false,
    images: ["https://lh3.googleusercontent.com/d/1mZrGH61ikaJ05jZfMQsgq4L4cF4NeFti",
             "https://lh3.googleusercontent.com/d/1dm4IHdzPl4OUDRMbI4wEYjoO4UVcqo7N"],
             bookings: [ { start: "2026-09-22",days: 5 } ,{ start: "2026-09-23",days: 5 } ]
  },

  {
    name: "Precious Vesper", 
    category: "Premium Dresses",
    colour: "Maroon",
    sizes: ["S","M"],
    price: 4000,
    available: false,
    images: ["https://lh3.googleusercontent.com/d/1zxsbbVra92WJHFd38Hu1h7GfZohkd8RJ",
             "https://lh3.googleusercontent.com/d/1U1foeY7QWRuSWjV1lWlw_slRSnaYjx8m",
             "https://lh3.googleusercontent.com/d/15MSOTNlmDQ61lsfeKiacUGdzRegEA-73",
             "https://lh3.googleusercontent.com/d/1kKwswSBm_C5uyXEt4zEWv5CsyslUMf0M",
             "https://lh3.googleusercontent.com/d/1JcAfahQiRbyaMykbnNJNn9dvllGMwJLp"],
             bookings: [ { start: "2026-09-22",days: 5 } ]
  },
 
   {
    name: "Precious Greystone", 
    category: "Premium Dresses",
    colour: "Greystone",
    sizes: ["M","L"],
    price: 3500,
    available: false,
    images: ["https://lh3.googleusercontent.com/d/1-Cr8hPvr2sRl3cNDPgvnTj90op_kYjvV",
             "https://lh3.googleusercontent.com/d/1o1jZJTDvhHgcxUlyieDgA607gfBiPKJS"],
             bookings: [ { start: "2026-09-26",days: 1 },{ start: "2026-08-01",days: 5 }
                        ,{ start: "2026-08-07",days: 3 },{ start: "2026-08-10",days: 5 }]
  },
  {
    name: "Precious Bluestone", 
    category: "Premium Dresses",
    colour: "Bluestone",
    sizes: ["S","M"],
    price: 3500,
    available: false,
    images: ["https://lh3.googleusercontent.com/d/12T6LlAsGF5S0P1uIgkxf1YkG2-1NDBd-",
             "https://lh3.googleusercontent.com/d/1tu_ihMrv7T0S5-MJyNjXuMlsFm5l1RF4"],
             bookings: [ { start: "2026-09-24",days: 5 } ]
  },
  {
    name: "Thimna Dress", 
    category: "Premium Dresses",
    colour: "Navy Blue",
    sizes: ["S","M"],
    price: 3500,
    available: false,
    images: ["https://lh3.googleusercontent.com/d/1fWEIyfNBjTqrKC__n0X0wzQlbHR7_MIg",
             "https://lh3.googleusercontent.com/d/1ceVasq-TYkBRL8fd7zcvxIu__zYwBjae"]
  },
  {
    name: "Umi Dress", 
    category: "Premium Dresses",
    colour: "Cherry Red",
    sizes: ["XS","S"],
    price: 3500,
    available: false,
    images: ["https://lh3.googleusercontent.com/d/1HyxbaQw11TA7l0CmanvgVZ2xQXYxLgsG",
             "https://lh3.googleusercontent.com/d/1YaXf5TpPvF36xs3F23ZPkg-vyVv2WCJt"],
             bookings: [ { start: "2026-07-31", days: 5 } , { start: "2026-09-25", days: 5 } ]
  },
 

  /* signature dresses */
  {
    name: "Precious Diamond  Frost",
    category: "Signature Dresses",
    colour: "Ice Blue",
    sizes: ["S","M"],
    price: 4000,
    available: false,
    images: ["https://lh3.googleusercontent.com/d/1ZwiJDVUgtaqipJOMmkManScqlZoG8Y0n",
             "https://lh3.googleusercontent.com/d/1I1cWrMIQte5tzFIYBO3mSx_UMfwwqZ9j"]
  },    
   {
    name: "Precious Golden heiress Dress",
    category: "Signature Dresses",
    colour: "Gold",
    sizes: ["XS","S"],
    price: 4000,
    available: false,
    images: ["https://lh3.googleusercontent.com/d/131didy52WmcuGZ2jbFk3iAd3LAwi6eOy",
             "https://lh3.googleusercontent.com/d/1kxIWjoIHsSs94h_tHhBYo8U4onUUTkZ1"]
  },
   {
    name: "Precious Lavendor Noir",
    category: "Signature Dresses",
    colour: "lavender",
    sizes: ["M","L"],
    price: 4000,
    available: false,
    images: ["https://lh3.googleusercontent.com/d/1_3I6V6yA-tobHmoubn0Ndxnm74UeKrw8",
             "https://lh3.googleusercontent.com/d/1gB4EDxF9dJIl1satv4mr30rK94uZH67G"]
  },
   {
    name: "Precious Lumiere",
    category: "Signature Dresses",
    colour: "Rose Gold",
    sizes: ["S","M"],
    price: 4000,
    available: false,
    images: ["https://lh3.googleusercontent.com/d/1h16m_20-FRA3j6iuDrTyPK1uOUBUdXGC",
              "https://lh3.googleusercontent.com/d/1nrVPqBNdSE0o7VHYNuwFiTS3ovByBWr1"],
    bookings:[{ start: "2026-08-07",days: 5 }]
  },
   { name: "Precious Versailles ", 
    category: "Signature Dresses",
    colour: "Silver",
    sizes: ["M","L"],
    price: 4000,
    available: false,
    images: ["https://lh3.googleusercontent.com/d/10LWn5uCejnqh5LW8zt_EqjAtv7ft9UUS",
             "https://lh3.googleusercontent.com/d/1ZUkG3GrthOVRQXB7RzqrqL1tfWbmNnCJ"],
            
  },

  { name: "Precious Valour ", 
    category: "Signature Dresses",
    colour: "Black",
    sizes: ["S","M"],
    price: 4000,
    available: false,
    images: ["https://lh3.googleusercontent.com/d/1-SgjaDCermm-OkRnEZrG3tP7V8pU37AF",
             "https://lh3.googleusercontent.com/d/1D8pHwoPTsD8XZHBVeEqX8RSbRiECHo3_"],
            
  },

  { name: "Lusanele Dress", 
    category: "Signature Dresses",
    colour: "Gold",
    sizes: ["S","M"],
    price: 4000,
    available: false,
    images: ["https://lh3.googleusercontent.com/d/15rkXCV3KQix9nQ2dZ5P7kqd_LmZkDor_",
             "https://lh3.googleusercontent.com/d/1u0m-qiFIXGOWoTJcvXQMHgszJ4LWR23X",
             "https://lh3.googleusercontent.com/d/1QS1_QIp53aAOe16-5PvnfU28pNwAGfuY"],
             bookings: [ { start: "2026-09-25",days: 5 }]
            
  },

   {
    name: "Precious Mandisa",
    category: "Signature Dresses",
    colour: "Nude",
    sizes: ["M","L"],
    price: 4000,
    available: false,
    images: ["https://lh3.googleusercontent.com/d/1t_IzASTJOKhA8vmoIPXnbV1DmPZJYYlq",
             "https://lh3.googleusercontent.com/d/1CcKfj6adKTItANV9_tGEbrzywDaq8E-o",
             "https://lh3.googleusercontent.com/d/1P8VXE1JF9qaNApvzr1jC6cHfxq74kYoE"],
             bookings: [ { start: "2026-09-23",days: 5 },{ start: "2026-09-05",days: 5 }
                        ,{ start: "2026-10-08",days: 5 },{start: "2026-10-02",days: 5 } ]
  },
   {
    name: "Precious Midnight Sapphire",
    category: "Signature Dresses",
    colour: "Midnight Sapphire",
    sizes: ["S","M"],
    price: 4000,
    available: false,
    images: ["https://lh3.googleusercontent.com/d/1oxF0lL3Y955dPqki68YGnJ6x2NeOOWTE",
             "https://lh3.googleusercontent.com/d/15jadS3xnj0RHOVB8IJhjTaBxjdxSRgnC"]
  },
   {
    name: "Precious Monaco ",
    category: "Signature Dresses",
    colour: "Silver",
    sizes: ["M","L"],
    price: 4000,
    available: false,
    images: ["https://lh3.googleusercontent.com/d/1XYlz-jTBLF9SBgqF3soiGegN5DXMhPUr",
             "https://lh3.googleusercontent.com/d/1rnCmfgZvb4PYUQyrjTKKIee-MzQeK8zn"],
    bookings:[{ start: "2026-09-25",days: 5 } ]         
  },
   {
    name: "Precious Silver Tassle",
    category: "Signature Dresses",
    colour: "Silver",
    sizes: ["S","M"],
    price: 4000,
    available: false,
    images: ["https://lh3.googleusercontent.com/d/1qc6xOLlc566u6fgp6mpoywM7VPt_XNe1",
             "https://lh3.googleusercontent.com/d/1Mb7YLGbLSTvN982if_QJfmY68GywrSvl"],
    bookings:[{ start: "2026-08-31",days: 5 },{ start: "2026-08-14",days: 5 } 
             ,{ start: "2026-09-25",days: 5 }]         
  },
   {
    name: "Precious Yolanda",
    category: "Signature Dresses",
    colour: "Silver",
    sizes: ["S","M"],
    price: 4000,
    available: false,
    images: ["https://lh3.googleusercontent.com/d/11KlFKF5yQMOMssLDdeIeNLdYKjaOmbPy",
             "https://lh3.googleusercontent.com/d/1FnaMn0X1fmOCZN1ttecQh9dtcGoBAqAL"]
  },
  {
    name: "Precious Celestine Dress",
    category: "Signature Dresses",
    colour: "Silver",
    sizes: ["S","M"],
    price: 4000,
    available: false,
    images: ["https://lh3.googleusercontent.com/d/1-48ACR72vKjTjnh6_g6gIG9vBgUezExf",
             "https://lh3.googleusercontent.com/d/1Bq79UCeilOareYR9IpsenY45eQmStX_z"],
    bookings:[{ start: "2026-09-23",days: 5 }]         
  },

 /* standard dresses */
  {
    name: "Babalwa Dress",
    category: "Standard Dresses",
    colour: "Light Blue",
    sizes: ["M","L"],
    price: 2500,
    available: false,
    images: ["https://lh3.googleusercontent.com/d/1m3NxHSJ1S1T0AuhSfHaT3CVadhfLUyhv",
             "https://lh3.googleusercontent.com/d/15KBmn7UoaEPDw0b2vASG1o4MREH4ZUPJ"],
             bookings: [ { start: "2026-07-31",days: 5 } ]
  },
  {
    name: "Baphiwe Dress",
    category: "Standard Dresses",
    colour: "Nude",
    sizes: ["S","M"],
    price: 2500,
    available: false,
    images: ["https://lh3.googleusercontent.com/d/1pqGifyULYnhCy4j170gwsyE2jmkygY4V",
             "https://lh3.googleusercontent.com/d/1qeJpzWDA16yqJb65vEN2nhP6g9nLOCiN"]
  },

   {
    name: "Precious Asteria Dress",
    category: "Standard Dresses",
    colour: "White",
    sizes: ["M","L"],
    price: 3000,
    available: false,
    images: ["https://lh3.googleusercontent.com/d/1oC5zPHd9STqZM38o4FCyAruUJE1I53jS",
             "https://lh3.googleusercontent.com/d/16MQ02gNwZoYKteuLZLIRBYbifTKSxEM1"],
      bookings:[{ start: "2026-08-01",days: 5 }]       
  },
  {
    name: "Precious Blue Aurora",
    category: "Standard Dresses",
    colour: "Aurora Blue",
    sizes: ["XS","S"],
    price: 3000,
    available: false,
    images: ["https://lh3.googleusercontent.com/d/1wvt7haE7KkLtCdcbLrK0FKL_ps3OHfZL",
             "https://lh3.googleusercontent.com/d/1TG4_MxEfw_t-J7NDp2fXKQ6M5IqzlfQ2"]
  },
  {
    name: "Precious Vivienne ",
    category: "Standard Dresses",
    colour: "Gold",
    sizes: ["S","M"],
    price: 2500,
    available: false,
    images: ["https://lh3.googleusercontent.com/d/1GJ7mH2MVu_8BhDfKo9xVvtvWvhNg92pf",
             "https://lh3.googleusercontent.com/d/1_kqzNqNMUR-cLQZv2-x3yRChcL99Yceo"]
  },
  {
    name: "Twin 1 Dress",
    category: "Standard Dresses",
    colour: "Nude",
    sizes: ["XS","S"],
    price: 2500,
    available: false,
    images: ["https://lh3.googleusercontent.com/d/1XOn0hMOfQaRBCbLBcDAL9BYR6v92ZLUj",
             "https://lh3.googleusercontent.com/d/1L4PS6qaUWHjg8gpl7nvCZOpj-nTFgq4Q"]
  },
  {
    name: "Twin 2 Dress",
    category: "Standard Dresses",
    colour: "Nude",
    sizes: ["S","M"],
    price: 2500,
    available: false,
    images: ["https://lh3.googleusercontent.com/d/1zKKi2MvM3W0gOTFmsNazaUGS5opxhM1s",]
  },
  {
    name: "Twin Gold Dress",
    category: "Standard Dresses",
    colour: "Gold",
    sizes: ["S","M"],
    price: 2500,
    available: false,
    images: ["https://lh3.googleusercontent.com/d/1rwSfMazvB7MBDX7dAjRx-FsXmpeSXD8M",
             "https://lh3.googleusercontent.com/d/1exEkjKIuN9MxROYwFMcg9LGRBr3XMDyf"]
  },
  {
    name: "Twin Red Dress",
    category: "Standard Dresses",
    colour: "Red",
    sizes: ["M","L"],
    price: 2500,
    available: false,
    images: ["https://lh3.googleusercontent.com/d/1rSxCwtStmuJo9ZwvvuR8W_WHxLkwW6-h",
             "https://lh3.googleusercontent.com/d/1nTAvHK_62L3AD7b0TfRNr10IXd-D6yGv"]
  },
];
window.PRECIOUST_INITIAL_DATA = {
  settings: {
    brandName: "PreciousT Collection",
    heroTitle: "The Wardrobe",
    heroSubtitle: "Choose a category to browse. Tap Reserve on any dress — your request goes straight to us on WhatsApp.",
    whatsappNumber: "27720291850",
    bookingDurationDays: 4,
    footerText: "PreciousT Collection · Rentals by request · Updated regularly",
    poweredBy: "Powered by Urus Vision",
    guidelinesButtonText: "Prices & Rental Guidelines →",
    guidelinesTitle: "Prices & Rental Guidelines",
    guidelinesSubtitle: "Everything to know before you book — please read this before reserving a dress."
  },
  categories: CATEGORIES,
  pricingTiers: PRICING_TIERS,
  guidelineSections: GUIDELINE_SECTIONS,
  dresses: dresses.map((d, i) => ({ id: `legacy-${i+1}`, published: true, ...d }))
};

})();
