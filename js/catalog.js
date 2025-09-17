
const products = [
    // Measuring Tools
    {
        "id":1,
        "name":"Detector ",
        "description":["A measuring Tools used as a detectors to check voltage,current ,resistance,and circle continuity in electrical systems"],
        "price":"2500",
        "category":"POWER & CORDLESS TOOLS",
        "Sub Category":"Measuring Tools",
        "brand":"GAMMASCOUT@ Online",
        "tags":["POWER & CORDLESS TOOLS,Measuring Tools"],
        "image":"https://labshops.com/cdn/shop/products/Online.jpg?v=1559933380 "
    },
    {
        "id":2,
        "name":"Line Lasers",
        "description":"A line laser is a precision measuring tools that projects onr or more straight laser onto a surface.",
        "price":"3500",
        "category":"POWER & CORDLESS TOOLS",
        "Sub category":"Measuring Tools",
        "brand":"DEWALT",
        "tags":["POWER & CORDLESS TOOLS,Measuring Tools"],
        "image":"https://images.thdstatic.com/productImages/3248f328-9453-4d0a-a368-7a8d512cf4b8/svn/dewalt-laser-level-dcle34021b-64_600.jpg "

    },
    {
        "id":3,
        "name":"Laser Distometers ",
        "description":"A laser distometer is a modern electronic measuring detector tools that uses a laser beam to measure distance,area,volume,and height with high accuracy.",
        "price":"3000",
        "category":"POWER & CORDLESS TOOLS",
        "sub category":"Measuring Tools",
        "brand":"BOSCH",
        "tags":["POWER & CORDLESS TOOLS,Measuring Tools"],
        "image":"https://images.thdstatic.com/productImages/e85599de-6408-425c-8f77-15858d20ad26/svn/bosch-laser-distance-measurer-glm165-40-64_1000.jpg"
    },
    {
        "id":4,
        "name":"Rotational Raser ",
        "description":"A Rotational RASER (Rotational Amplification by Stimulated Emission of Radiation) is a theoretical or conceptual device similar in principle to a laser (light amplification) or maser (microwave amplification)",
        "price":"25000",
        "category":"POWER & CORDLESS TOOLS",
        "sub category":"Measuring Tools",
        "brand":"SPECTER",
        "tags":["POWER & CORDLESS TOOLS,Measuring Tools"],
        "image":"https://benchmarksupply.com/cdn/shop/files/TS_ll300N_ALGR.jpg?v=1704991962 "
    },
    {
        "id":5,
        "name":"Angle Measurers",
        "description":"Angle measurers are tools or instruments designed to measure angles between two lines, surfaces, or objects. They are widely used in geometry, construction, engineering, machining, architecture, and many technical fields.",
        "price":"2000",
        "category":"POWER & CORDLESS TOOLS",
        "sub category":"Measuring Tools",
        "brand":"KLEIN TOOLS",
        "tags":["POWER & CORDLESS TOOLS , Measuring Tools"],
        "image":"https://mobileimages.lowes.com/productimages/3e5930c7-6dd6-4b05-a71e-c0c0ff564683/64562191.jpg "
    },
    {
        "id":6,
        "name":"Ponit Lasers",
        "description":"A point laser is a type of laser device designed to emit a narrow, focused beam of light that projects a single dot (or point) onto a surface. It is primarily used for precise alignment, targeting, pointing, or measurement tasks.",
        "price":"11800",
        "category":"POWER & CORDLESS TOOLS",
        "sub category":"Measuring Tools",
        "brand":"MILWAUKEE",
        "tags":["POWER & CORDLESS TOOLS , Measuring Tools"],
        "image":"https://www.hallshardware.com/Data/ItemImage-334865-phhpfmn4bfxxs76wnhprmc3b.jpg?AutoCrop=1&CropHeight=1440&CropWidth=1440&Height=1440&Padding=1&Quality=50&Resize=Auto&Revision=kcDJ&Timestamp=FT2TMG&Width=1440"
    },
    {
        "id":7,
        "name":"Inclinometers",
        "description":"An inclinometer, also known as a tilt sensor, tilt meter, or clinometer, is an instrument used to measure angles of slope (tilt), elevation, or depression of an object relative to gravity.",
        "price":"500",
        "category":"POWER & CORDLESS TOOLS",
        "sub category":"Measuring Tools",
        "brand":"ANGLE FINDER PRACTICAL TTOL",
        "tags":["POWER & CORDLESS TOOLS , Measuring Tools"],
        "image":"https://m.media-amazon.com/images/I/718gr2O4RJL.jpg "
    },
    
    //Power Tools
    {
        "id":8,
        "name":"Chopsaws",
        "description":"A chop saw, also known as a cut-off saw or abrasive saw, is a power tool used to make straight, precise cuts in hard materials like metal, wood, or plastic.",
        "price":"7000",
        "category":"POWER TOOLS & CORDLESS TOOLS",
        "sub category":"Power Tools",
        "brand":"evoMAX",
        "tags":["POWER TOOLS & CORDLESS TOOLS , Power Tools"],
        "image":"https://store.evolutionpowertools.com/cdn/shop/files/Untitled_design_33_1024x1024.jpg?v=1752687977 "

    },
    {
        "id":9,
        "name":"Angle Grinders",
        "description":"An angle grinder—also known as a disc grinder or side grinder—is a versatile handheld power tool used for grinding, cutting, sanding, polishing, and more. It typically uses various discs such as abrasive, cutting, wire brushes, or polishing pads",
        "price":"2000",
        "category":"POWER TOOLS & CORDLESS TOOLS",
        "sub category":"Power Tools",
        "brand":"Tnakita",
        "tags":["POWER TOOLS & CORDLESS TOOLS,Power Tools"],
        "image":"https://images.thdstatic.com/productImages/48e7d9c8-6ab1-427d-93ea-fd4599f98118/svn/makita-angle-grinders-ga7021-64_1000.jpg "
    },
    {
        "id":10,
        "name":"Demolition Hammers",
        "description":"A demolition hammer (also called a concrete breaker or jackhammer) is a powerful, handheld tool used for chiseling, breaking, and demolishing hard materials such as concrete, masonry, and tiles.",
        "price":"5500",
        "category":"POWER TOOLS & CORDLESS TOOLS",
        "sub category":"Power Tools",
        "brand":"AOAEN",
        "tags":["POWER TOOLS & CORDLESS TOOLS,Power Tools"],
        "image":"https://m.media-amazon.com/images/I/71egCRWF7PL.jpg "
    },
    {
        "id":11,
        "name":"Rotary Hammers",
        "description":"A rotary hammer (also known as a rotary hammer drill) is a powerful handheld power tool designed for heavy-duty drilling and chiseling into hard materials like concrete and masonry.",
        "price":"5000",
        "category":"POWER TOOLS & CORDLESS TOOLS",
        "sub category":"Power Tools",
        "brand":"RIDGID",
        "tags":["POWER TOOLS & CORDLESS TOOLS,Power Tools"],
        "image":"https://images.thdstatic.com/productImages/3588a135-4037-4f43-8708-ab3bef6e8f33/svn/ridgid-rotary-hammers-r86712b-64_600.jpg "
    },
    {
        "id":12,
        "name":"Diamond Drill Tools",
        "description":"Diamond drills, also known as diamond core drill bits or diamond hole saws, are specialized drilling tools with industrial-grade diamond-coated tips.",
        "price":"2100",
        "category":"POWER TOOLS & CORDLESS TOOLS",
        "sub category":"Power Tools",
        "brand":"Makita",
        "tags":["POWER TOOLS & CORDLESS TOOLS,Power Tools"],
        "image":"https://mitchtools.com/cdn/shop/files/Thumbnail_1_cc09023c-0d96-437a-ad95-b8574d1f3731.png?v=1709700114 "
    },
    {
        "id":13,
        "name":"Drilling Machines",
        "description":"Drilling machines are tools—either handheld or stationary—designed to create precise holes in materials like wood, metal, plastic, masonry, and more.",
        "price":"1500",
        "category":"POWER TOOLS & CORDLESS TOOLS",
        "sub category":"Power Tools",
        "brand":"Makita",
        "tags":["POWER TOOLS & CORDLESS TOOLS,Power Tools"],
        "image":"https://5.imimg.com/data5/SELLER/Default/2022/4/SC/AY/DU/86915491/13mm-drill-machine-golden-bullet-500x500.jpeg "
    },
    {
        "id":14,
        "name":"Metal Working Tools",
        "description":"Here's a comprehensive guide to metalworking tools—their descriptions, uses, and estimated prices in India—along with some recommended kits and sets you can check out:",
        "price":"1500",
        "category":"POWER TOOLS & CORDLESS TOOLS",
        "sub category":"Power Tools",
        "brand":"RIDGID",
        "tags":["POWER TOOLS & CORDLESS TOOLS,Power Tools"],
        "image":"https://image.made-in-china.com/2f0j00fKRtEiLsuDGo/Professional-Manufacturer-and-Exporter-of-Hand-Tools-WW-HT-.jpg"
    },
    {
        "id":15,
        "name":"High Pressure Washers",
        "description":"Here s a detailed overview of High-Pressure Washers—what they are, how they work, usage insights, plus current price ranges in India accompanied by some product suggestions",
        "price":"4000",
        "category":"POWER TOOLS & CORDLESS TOOLS",
        "sub category":"Power Tools",
        "brand":"Agaro",
        "tags":["POWER TOOLS & CORDLESS TOOLS,Power Tools"],
        "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRctz7wvkjsqCxVgRGM3SfikpDS42Y_oqJ_Wg&s"
    },
    {
        "id":16,
        "name":"Vacuum Cleaners",
        "description":"Here’s a complete guide to vacuum cleaners—covering their types, key features, and up-to-date price ranges in India—plus top-product picks to suit various needs and budgets.",
        "price":"5000",
        "category":"POWER TOOLS & CORDLESS TOOLS",
        "sub category":"Power Tools",
        "brand":"Pestige",
        "tags":["POWER TOOLS & CORDLESS TOOLS,Power Tools"],
        "image":"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQ_IwUvys9qJw6_NCr-RmWRqr7uOoM4OWcjavrnWhwCWI1b6ujGxwNIeCg1OHwv2fvkUGNKgnbgowqO2IdYx1EFqt8Qc0w_WiLgM3qCdTw7PBKVp6DyfP4a"
    },
    {
        "id":17,
        "name":"Blowers",
        "description":"Blowers are powered tools that generate strong, focused streams of air.",
        "price":"4000",
        "category":"POWER TOOLS & CORDLESS TOOLS",
        "sub category":"Power Tools",
        "brand":"bosch",
        "tags":["POWER TOOLS & CORDLESS TOOLS,Power Tools"],
        "image":"https://m.media-amazon.com/images/I/61RKarHQqHL._SL1500_.jpg"
    },
    {
        "id":18,
        "name":"Polishing Machines",
        "description":"Here’s a comprehensive guide to Polishing Machines—what they are, how they function, and the current price ranges in India (INR)—along with some top product recommendations across various categories",
        "price":"6000",
        "category":"POWER TOOLS & CORDLESS TOOLS",
        "sub category":"Power Tools",
        "brand":"Bosch",
        "tags":["POWER TOOLS & CORDLESS TOOLS,Power Tools"],
        "image":"https://tse3.mm.bing.net/th/id/OIP.f3fDq7y_ut4OW2xeJMXAbAHaEx?r=0&rs=1&pid=ImgDetMain&o=7&rm=3 "
    },
    {
        "id":19,
        "name":"Circlur Saw",
        "description":"A circular saw is a versatile power tool that employs a spinning toothed or abrasive blade to cut through materials such as wood, metal, plastic, masonry,",
        "price":"3500",
        "category":"POWER TOOLS & CORDLESS TOOLS",
        "sub category":"Power Tools",
        "brand":"DEWALT",
        "tags":["POWER TOOLS & CORDLESS TOOLS,Power Tools"],
        "image":"https://th.bing.com/th/id/R.0a844b0c1588226bfed8c57040c61878?rik=IXVcdoTuSXk1aw&riu=http%3a%2f%2fg-ecx.images-amazon.com%2fimages%2fG%2f01%2fth%2faplus%2fdewalt%2fdewalt_dw368k_saw._V165188546_.jpg&ehk=oiYYnOQzmD4inqG37%2b4Me0oonmUOChcJNVfbilOZkSA%3d&risl=&pid=ImgRaw&r=0"
    
    },
    {
        "id":20,
        "name":"Jigsaw",
        "description":"A jigsaw is a handheld powered saw with a slender, vertical blade that moves up-and-down (reciprocates) to cut intricate shapes and curves in materials like wood, plastic, drywall, and metal",
        "price":"2000",
        "category":"POWER TOOLS & CORDLESS TOOLS",
        "sub category":"Power Tools",
        "brand":"INCCO",
        "tags":["POWER TOOLS & CORDLESS TOOLS,Power Tools"],
        "image":"https://www.discounttrader.com.au/wp-content/uploads/2018/10/JS7508S.jpg"
    },
    {
        "id":21,
        "name":"Orbits Sander",
        "description":"An orbital sander is a power tool designed for smoothing surfaces by abrasion with sandpaper",
        "price":"3500",
        "category":"POWER TOOLS & CORDLESS TOOLS",
        "sub category":"Power Tools",
        "brand":"Bosch",
        "tags":["POWER TOOLS & CORDLESS TOOLS,Power Tools"],
        "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3AQir9DsHkGkT1UjVlpCl2pjGFcdHO9cqNQ&s"
    },
    {
        "id":22,
        "name":"Planer Router",
        "description":"A planer router combines the functions of a router and a planer. It is primarily used",
        "price":"2000",
        "category":"POWER TOOLS & CORDLESS TOOLS",
        "sub category":"Power Tools",
        "brand":"Bosch",
        "tags":["POWER TOOLS & CORDLESS TOOLS,Power Tools"],
        "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw03PNX_malPlhOxdVVjA2i9ukJyxnoFG03w&s "
    },
    //Construction Equipment
    {
        "id":23,
        "name":"Petrol Vibrators",
        "description":"petrol (gasoline) concrete vibrators—also called petrol needle vibrators—including their definition, applications, typical pricing in India",
        "price":"8500",
        "category":"Construction Equipments",
        "sub category":"",
        "brand":"Soham",
        "tags":["Construction Equipments"],
        "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW8RsO1mzwR0SZi4dPFexM54rrwP1ddkVjxg&s "
    },
    {
        "id":24,
        "name":"Earth Compactors",
        "description":"An earth compactor is a construction tool engineered to increase soil density by applying vibration, impact, or static weight.",
        "price":"24,000",
        "category":"Construction Equipments",
        "sub category":"",
        "brand":"Icon",
        "tags":["Construction Equipments"],
        "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqXAVu-w54axO-WIJOpIEilxHHNAsODNV9tQ&s "
    },
    {
        "id":25,
        "name":"Wheel Borrow",
        "description":"HEAVY-DUTY CONSTRUCTION: Robust steel frame construction with a spacious red tray, designed for demanding garden and construction tasks",
        "price":"5000",
        "category":"Construction Equipments",
        "sub category":"",
        "brand":"ESI",
        "tags":["Construction Equipments"],
        "image":"https://5.imimg.com/data5/SELLER/Default/2023/10/349434007/SJ/YO/EH/2023408/single-wheel-barrow-500x500.jpg"
    },
    {
        "id":26,
        "name":"Power Trowel",
        "description":"A wheelbarrow is a simple, hand-operated vehicle designed to transport heavy or bulk materials efficiently.",
        "price":"2500",
        "category":"Construction Equipments",
        "sub category":"",
        "brand":"ESI",
        "tags":["Construction Equipments"],
        "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnP_5WtcrMrJ0P7ynBxxEjl9jmXr6ZdyNTqg&s "
    },
    {
        "id":27,
        "name":"Weigh Batchers",
        "description":"A Weigh Batcher is a machine used to accurately weigh multiple components (such as aggregates, cement, or admixtures) before mixing, ensuring precise, consistent batching in construction, industrial mixing, or manufacturing.",
        "price":"37,000",
        "category":"Construction Equipments",
        "sub category":"",
        "brand":"ESI",
        "tags":["Construction Equipments"],
        "image":"https://5.imimg.com/data5/SELLER/Default/2023/10/349971477/ZH/AI/DZ/2023408/scale-type-weigh-batcher-500x500.jpg "
    },
    {
        "id":28,
        "name":"Swievel Coupler",
        "description":"A swivel coupler is a crucial scaffolding accessory that joins two scaffold tubes at virtually any angle, offering unmatched flexibility in structure configuration.",
        "price":"75",
        "category":"Construction Equipments",
        "sub category":"",
        "brand":"ESI",
        "tags":["Construction Equipments"],
        "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdioRnTZjhnk8MsliEWHngImldc29nwQbRMw&s "
    },
    {
       "id":29,
        "name":"Electric Vibration",
        "description":"An electric concrete vibrator—also known as an internal or needle vibrator—is a handheld device used to eliminate air bubbles and ensure uniform settling of freshly poured concrete.",
        "price":"4500 ",
        "category":"Construction Equipments",
        "sub category":"",
        "brand":"ESI",
        "tags":["Construction Equipments"],
        "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk5ct_ubbS_hQxIpfj9O7RE-yUBGZPsrBYfw&s " 
    },
    {
        "id":30,
        "name":"Concrete Buckets",
        "description":"A concrete bucket is a heavy-duty steel container designed to transport and pour wet concrete at construction sites where direct pouring or pumping may be challenging.",
        "price":"14000",
        "category":"Construction Equipments",
        "sub category":"",
        "brand":"Star",
        "tags":["Construction Equipments"],
        "image":"https://starindustries.com/wp-content/uploads/2023/12/concrete-bucket-7.jpg "
    },
    {
        "id":31,
        "name":"Ride on Rollers",
        "description":"A ride-on roller is a compact, operator-driven compaction vehicle designed for efficient leveling and densification of soil, asphalt, and gravel. These machines typically feature double or single steel drums",
        "price":"2,40,000",
        "category":"Construction Equipments",
        "sub category":"",
        "brand":"icon",
        "tags":["Construction Equipments"],
        "image":"https://iconmachinery.com/wp-content/uploads/2021/05/Ride-on-Roller_1.jpg "
    },
    {
        "id":32,
        "name":"Ring Making Machine",
        "description":"Designed to bend steel or TMT bars into rings used for concrete reinforcement (like column ties, beam stirrups)",
        "price":"25000",
        "category":"Construction Equipments",
        "sub category":"",
        "brand":"ICON",
        "tags":["Construction Equipments"],
        "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsYLILzzDZ99E4pIjpxJOShWGaC7ykeoZEGQ&s "
    },
    {
        "id":33,
        "name":"Sand Sieving Machine",
        "description":"A sand sieving machine is a mechanical device used to filter and grade sand by particle size. It typically employs a vibrating or rotating screen surface to separate fine sand from coarse particles, debris, and contaminants.",
        "price":"18,550",
        "category":"Construction Equipments",
        "sub category":"",
        "brand":"ESI",
        "tags":["Construction Equipments"],
        "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJy6wM3uEgE2ocYyiQqWU2b79GkrJLoowplw&s "
    },
    {
        "id":34,
        "name":"Jackey",
        "description":"In construction, “jacky”  commonly refers to adjustable prop jacks—vertical supports used in shuttering (formwork).",
        "price":"60-1500",
        "category":"Construction Equipments",
        "sub category":"",
        "brand":"Y'2 LEATHER",
        "tags":["Construction Equipments"],
        "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwTh_h3rXSXVZzONG6lSbVsl_lzMnXfS2LJg&s "
    },
    {
        "id":35,
        "name":"Portable Vibrators",
        "description":"Portable (or handheld) concrete vibrators, often called needle, poker, or internal vibrators, are crucial for ensuring strong, void-free concrete.",
        "price":"2600",
        "category":"Construction Equipments",
        "sub category":"",
        "brand":"JPT",
        "tags":["Construction Equipments"],
        "image":"https://jpttools.com/cdn/shop/files/Untitled_design_1_7e7cac26-4756-4378-944c-f388735a2d5b_1024x1024.png?v=1740387800 "
    },
    {
        "id":36,
        "name":"Walk Behind Rollers",
        "description":"Walk-behind rollers are compact, operator-guided machines designed for compaction of soil, gravel, asphalt, and other materials in areas where larger, ride-on rollers can't access.",
        "price":"2,00,000",
        "category":"Construction Equipments",
        "sub category":"",
        "brand":"DURO",
        "tags":["Construction Equipments"],
        "image":"https://www.dynamiteduro.com/wp-content/uploads/2024/10/Walk-Behind-Babby-Roller.png "
    },
    {
        "id":37,
        "name":"PVC Water Stoper",
        "description":"A PVC water stopper (also known as a waterstop or water bar) is a flexible sealing strip embedded within concrete joints—especially in construction or expansion joints between different pours.",
        "price":"80-480",
        "category":"Construction Equipments",
        "sub category":"",
        "brand":"Softech",
        "tags":["Construction Equipments"],
        "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV1VLqAcQhcBMQJJsily2zOUC2yJiSO6GMYQ&s "
    },
    {
        "id":38,
        "name":"Water Dispensers",
        "description":"Looking for a reliable water dispenser? Here's a comprehensive guide to types, key features,",
        "price":"6500",
        "category":"Construction Equipments",
        "sub category":"",
        "brand":"Aqua",
        "tags":["Construction Equipments"],
        "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVG8p933Y_FU9I8hQMUAP_A_tYd4oMSvVFNA&s "
    },
    {
        "id":39,
        "name":"Gogo Nut",
        "description":"A Gogo Nut (also referenced as a Gogo Clamp or scaffolding nut) is a specialized hardware component used primarily in scaffolding and shuttering systems.",
        "price":"33",
        "category":"Construction Equipments",
        "sub category":"",
        "brand":"IndiaMart",
        "tags":["Construction Equipments"],
        "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyjNYb7NJyxQkWxqsqN-lg6gG_gc782QtRRQ&s "
    },
    {
        "id":40,
        "name":"Bar Bending Machine",
        "description":"A bar bending machine (also known as a rebar or TMT bending machine) is a construction tool used to bend steel rods (rebars) into shapes required for reinforced concrete structures",
        "price":"20000",
        "category":"Construction Equipments",
        "sub category":"",
        "brand":"JAYMAC",
        "tags":["Construction Equipments"],
        "image":"https://www.jaypee.in/wp-content/uploads/2020/11/Bar-Bending-Machine.png "
    },
    {
        "id":41,
        "name":"Mini Lifts",
        "description":"Mini lifts (commonly referred to as monkey hoists) are compact, portable lifting machines used on construction sites to elevate building materials—such as bricks, cement, or sand—vertically between floors.",
        "price":"49000",
        "category":"Construction Equipments",
        "sub category":"Brio Elevators",
        "tags":["Construction Equipments"],
        "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXND2d41IElIcxhTzCJ4KX-10AhbCBctyjwA&s "
    },
    {
        "id":42,
        "name":"Power trowel",
        "description":"A power trowel, also known as a power float or troweling machine, is a motorized tool used to apply a smooth, polished finish to concrete surfaces.",
        "price":"28500",
        "category":"Construction Equipments",
        "sub category":"",
        "brand":"Ingco power",
        "tags":["Construction Equipments"],
        "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnP_5WtcrMrJ0P7ynBxxEjl9jmXr6ZdyNTqg&s "
    },
    {
        "id":43,
        "name":"Mastic Pad/Tar Pad",
        "description":"Here s a detailed look at Mastic Pads (also known as Tar Pads or Expansion Joint Filler Boards), highlighting their use in construction and providing",
        "price":"380-760",
        "category":"Construction Equipments",
        "sub category":"",
        "brand":"BITUMAN",
        "tags":["Construction Equipments"],
        "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK8PNI-NRRHt1FqwxQMecZ9NH6ICrJtShOLQ&s "
    },
    {
        "id":44,
        "name":"De-Watering Pumpsets",
        "description":"Dewatering pumpsets are essential tools in construction and industrial applications for removing water from excavations, basements, trenches, and other areas prone to water accumulation.",
        "price":"55000",
        "category":"Construction Equipments",
        "sub category":"",
        "brand":"CosMos",
        "tags":["Construction Equipments"],
        "image":"https://5.imimg.com/data5/CP/IU/IS/SELLER-8627793/dewatering-pump-1000x1000.jpg"
    },
    {
        "id":45,
        "name":"Bar Cutting Machine",
        "description":"A Bar Cutting Machine is a vital piece of equipment in construction and steel fabrication, designed to efficiently cut reinforcement bars (rebars) of various diameters.",
        "price":"45000",
        "category":"Construction Equipments",
        "sub category":"",
        "brand":"BHARAT",
        "tags":["Construction Equipments"],
        "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLcLs8X5muJxTVuEMXpXgbQpiN5waRiZaIQw&s "
    },
    {
        "id":46,
        "name":"Building Hoist",
        "description":"A Building Hoist, also known as a construction hoist or material lift, is a vertical transportation system used on construction sites to efficiently move workers and materials between different building levels.",
        "price":"46000",
        "category":"Construction Equipments",
        "sub category":"",
        "brand":"Innomac ",
        "tags":["Construction Equipments"],
        "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkWoXgIiwfp9Wm-YrsBP3NcUD_AbghWONtvA&s "
    },
    {
        "id":47,
        "name":"Bull Float",
        "description":"A Bull Float is a flat, long-handled tool used in concrete finishing to smooth and level freshly poured concrete surfaces. It's typically employed after screeding to eliminate ridges and fill voids",
        "price":"39500",
        "category":"Construction Equipments",
        "sub category":"",
        "brand":"Bon Tool",
        "tags":["Construction Equipments"],
        "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgwfxHhuL_Ryo2TPl1K-lCwAviL7LWy_L6iA&s"
    },
    {
        "id":48,
        "name":"Rubber Pad",
        "description":"A rubber pad is a versatile component used across various industries to provide cushioning, reduce vibration",
        "price":"20000",
        "category":"Construction Equipments",
        "sub category":"",
        "brand":"Amazan",
        "tags":["Construction Equipments"],
        "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnseyb3XSAHkt6ExOeyOP7Nt_bsfa9TPHBcA&s "
    },
    {
        "id":49,
        "name":"Shuttering Mate",
        "description":"A Shuttering Mate is a construction material used to protect and cure freshly poured concrete by moisture and  preventing surface damage.its commonly used in framework application",
        "price":"800",
        "category":"Construction Equipments",
        "sub category":"",
        "brand":"TRICO",
        "tags":["Construction Equipments"],
        "image":"https://image.made-in-china.com/2f0j00aTcolkiBaVrb/Q235-Shuttering-F-Type-Clamps-Building-Construction-Tools.jpg"
    },
    //Aggregates Testing equipments
    {
        "id":50,
        "name":"Flakiness Gauges",
        "description":"A flakiness gauge is a metal frame with precise slots used to assess the thickness of aggregate particles, identifying those that are flaky—defined as having a thickness less than 0.6 times their nominal size",
        "price":"300",
        "category":"Civil Lab",
        "sub category":"Aggregates Testing Equipments",
        "brand":"WAXCON VENTURES",
        "tags":["civil Lab,Aggregates Testing Equipments"],
        "image":"https://5.imimg.com/data5/XU/IR/WG/SELLER-97113561/aggregate-flakiness-and-elongation-indextester-500x500.jpg"
    },
    {
        "id":51,
        "name":"Density Basket",
        "description":"Density Basket Knitted for specific gravity or Buoyancy Balance",
        "price":"1200",
        "category":"Civil Lab",
        "sub category":"Aggregates Testing Equipments",
        "brand":"ELE INTERNATIONAL",
        "tags":["civil Lab,Aggregates Testing Equipments"],
        "image":"https://www.matest.com/contents/products/3796_v41.jpg "
    },
    {
        "id":52,
        "name":"Elongation Gauges",
        "description":"A density basket is a cylindrical wire-mesh basket, typically 20 cm in diameter and height, used in civil engineering and material testing to determine the specific gravity and water absorption of aggregates and bituminous mixtures.",
        "price":"500",
        "category":"Civil Lab",
        "sub Category":"Aggregates Testing Equipments",
        "brand":"Microteknic",
        "tags":["civil Lab,Aggregates Testing Equipments"],
        "image":"https://image.made-in-china.com/2f0j00ByqiUpfgYJrG/Flakiness-and-Elongation-Gauge-Test.webp "
    },
    {
        "id":53,
        "name":"Los Angeles Testing",
        "description":"The Los Angeles Abrasion Test determines an aggregate's resistance to wear by measuring the percentage of loss after being tumbled in a rotating steel drum with abrasive balls.",
        "price":"47000",
        "category":"Civil Lab",
        "sub Category":"Aggregates Testing Equipments",
        "brand":"Humboldt",
        "tags":["civil Lab,Aggregates Testing Equipments"],
        "image":"https://amvscientific.com/wp-content/uploads/2023/12/Los-Angeles-Abrasion-Testing-Machine.jpg "
    },
    {
        "id":54,
        "name":"Riffle Sample Divider",
        "description":"A riffle sample divider is a fractional sub-sampling instrument used for dividing the sample (dry and free-flowing granular particles)",
        "price":"13000",
        "category":"Civil Lab",
        "sub Category":"Aggregates Testing Equipments",
        "brand":"Aimil Ltd.india",
        "tags":["civil Lab,Aggregates Testing Equipments"],
        "image":"https://www.vertexinstruments.com/wp-content/uploads/2017/06/Riffle-Sample-Spliter-IS.jpg "
    },
    {
        "id":55,
        "name":"Aggregate Impack Value",
        "description":"The Aggregate Impact Value (AIV) apparatus is a machine for testing the resistance of coarse aggregates to sudden shock or impact, determining their toughness for construction.",
        "price":"65000",
        "category":"civil Lab",
        "sub category":"Aggregates Testing Equipments",
        "barnd":"Matest",
        "tags":["civil Lab,Aggregates Testing Equipments"],
        "image":"https://testmak.com/uploads/Aggregates-Impact-Value-Apparatus.jpg "
    },
    {
        "id":56,
        "name":"Bulk Density Jar",
        "description":"It is a microprocessor-based apparatus that consists of a 4-digit preset counter with 30 strokes per minute. It has a capacity of 5 kilograms and requires a",
        "price":"27000",
        "category":"civil Lab",
        "sub Category":"Aggregates Testing Equipments",
        "brand":"Matest",
        "tags":["civil Lab,Aggregates Testing Equipments"],
        "image":"https://www.matest.com/contents/products/144_a069-01-bulk-density-measures1.jpg "
    },
    {
        "id":57,
        "name":"Aggregate Crushing Value",
        "description":"The Aggregate Crushing Value (ACV) test determines an aggregate's resistance to crushing under a gradually applied load, indicating its strength and suitability for road construction and other heavy-duty applications",
        "price":"6300",
        "category":"civil Lab",
        "sub Category":"Aggregates Testing Equipments",
        "brand":"Matest",
        "tags":["civil Lab,Aggregates Testing Equipments"],
        "image":"https://www.vertexinstruments.com/wp-content/uploads/2017/06/Aggregate-Crushing-Value-Apparatus-1.jpg"
    },
    //Bitumen Testing Equipment
    {
        "id":58,
        "name":"Benzene",
        "description":"Benzene is a colorless, sweet-smelling liquid hydrocarbon (C₆H₆) primarily used as an industrial solvent and a precursor in the chemical industry for manufacturing plastics, resins, drugs, dyes, and detergents.",
        "price":"491",
        "category":"civil Lab",
        "sub Category":"Bitumen Testing Equipment",
        "brand":"Chevron phillips chemical",
        "tags":["civil Lab,Bitumen Testing Equipment"],
        "image":"https://www.acs.org/content/dam/acsorg/molecule/archive-new/b/benzene-3d.png "
    },
    {
        "id":59,
        "name":"Flash Point",
        "description":"The cost of a Flash Point Apparatus, a laboratory instrument,",
        "price":"15000",
        "category":"civil Lab",
        "sub Category":"Bitumen Testing Equipment",
        "brand":"PMA series",
        "tags":["civil Lab,Bitumen Testing Equipment"],
        "image":"https://tse2.mm.bing.net/th/id/OIP.qPYDML9S4IuiqjddktrZpAHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    {
        "id":60,
        "name":"Bitumen Extractors",
        "description":"Metal Mild Steel Electrically Operated Bitumen Extractor",
        "price":"13000",
        "category":"civil Lab",
        "sub Category":"Bitumen Testing Equipment",
        "brand":"Ray Export India",
        "tags":["civil Lab,Bitumen Testing Equipment"],
        "image":"https://controls-group.com/wp-content/uploads/2023/04/5900942195c5f5b9fbedd6cbfbea33e1c0b60cd6.png "
    },
    {
        "id":61,
        "name":"Fire Point",
        "description":"the temperature at which a fat or oil sample can first be induced to burn for a minimum of 5 seconds when a flame is applied.",
        "price":"7500",
        "category":"civil Lab",
        "sub Category":"Bitumen Testing Equipment",
        "brand":"Anton paar",
        "tags":["civil Lab,Bitumen Testing Equipment"],
        "image":"https://tse2.mm.bing.net/th/id/OIP.u3-b0IZ6hc09Fks0Ddd2dAHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    {
        "id":62,
        "name":"Ductility Testing Apparatus",
        "description":"A Ductility Testing Apparatus is a lab device that measures a material's ability to deform without fracturing, often used for bitumen in road construction.",
        "price":"11000",
        "category":"civil Lab",
        "sub Category":"Bitumen Testing Equipment",
        "brand":"HUMBOLDT",
        "tags":["civil Lab,Bitumen Testing Equipment"],
        "image":"https://www.humboldtmfg.com/product-originals/_mainLg%401x/H-1068X.png "
    },
    {
        "id":63,
        "name":"Ring & Ball Apparatus",
        "description":"The Ball & Ring Apparatus is a demonstration tool used to illustrate the effects of thermal expansion. It consists of a metal ball that fits through a ring at room temperature but won't pass through when heated, due to the expansion of the metal",
        "price":"18000",
        "category":"civil Lab",
        "sub Category":"Bitumen Testing Equipment",
        "brand":"ELE Instrument India",
        "tags":["civil Lab,Bitumen Testing Equipment"],
        "image":"https://www.matest.com/contents/products/b072-dett-72dpi.jpg "
    },
    {
        "id":64,
        "name":"Tar Viscometer",
        "description":"A Tar Viscometer is a testing apparatus, typically made of stainless steel or mild steel, used to measure the viscosity of road oils and cutback bitumen by determining the flow time of a specific volume of liquid through a defined orifice at a controlled temperature.",
        "price":"5500",
        "category":"civil Lab",
        "sub Category":"Bitumen Testing Equipment",
        "brand":"Aimil Ltd India",
        "tags":["civil Lab,Bitumen Testing Equipment"],
        "image":"https://sunlabtech.com/wp-content/uploads/2018/08/Tar-Viscometer-Apparatus-Standard.jpg"
    },
    {
        "id":65,
        "name":"Core Drilling Machine",
        "description":"Core Drill Machines ; Portable Diamond Core Drill Machine Supercut 135D, 1650 W · Portable Diamond Core Drill Machine Supercut 135D,",
        "price":"25000",
        "category":"civil Lab",
        "sub Category":"Bitumen Testing Equipment",
        "brand":"Matest",
        "tags":["civil Lab,Bitumen Testing Equipment"],
        "image":"https://www.matest.com/contents/products/b040-20-72dpi.jpg "
    },
    {
        "id":66,
        "name":"Marshall Stability Apparatus",
        "description":"It is used for measurement of resistance to plastic flow of cylindrical specimens of bituminous paving mixture loaded on the lateral surface",
        "price":"89500",
        "category":"civil Lab",
        "sub Category":"Bitumen Testing Equipment",
        "brand":"Gilson MS-series",
        "tags":["civil Lab,Bitumen Testing Equipment"],
        "image":"https://www.tiniusolsen.com/wp-content/uploads/2021/08/MSTD-slider.jpg "
    },
    {
        "id":67,
        "name":"Softening Point",
        "description":"The Softening Point is the temperature at which a bitumen or asphalt material, when heated under specific conditions, loses its rigidity and begins to soften.",
        "price":"3500",
        "category":"civil Lab",
        "sub Category":"Bitumen Testing Equipment",
        "brand":"Matest",
        "tags":["civil Lab,Bitumen Testing Equipment"],
        "image":"https://www.globalgilson.com/content/images/thumbs/0023740_softening-point-ring-and-ball-apparatus_600.jpeg "
    }
]


// Elements

const productContainer = document.getElementById("productContainer");
const searchInput = document.getElementById("search");
const modal = document.getElementById("productModal");
const modalBody = document.getElementById("modalBody");
const closeModal = document.getElementById("closeModal");
const categoryBar = document.getElementById("categoryBar");
const sortSelect = document.getElementById("sortSelect");

// Get unique categories from products
const allCategories = ["All"].concat(
  Array.from(new Set(products.map(p => {
    // Normalize category names
    let category = p.category;
    if (category === "civil Lab") category = "Civil Lab";
    return category;
  })))
);
let activeCategory = "All";
let currentSort = "default";

// Render Products

function renderCategoryBar() {
  categoryBar.innerHTML = "";
  allCategories.forEach(cat => {
    const btn = document.createElement("button");
    btn.className = "category-btn" + (activeCategory === cat ? " active" : "");
    btn.textContent = cat;
    btn.onclick = () => {
      activeCategory = cat;
      renderCategoryBar();
      renderProducts();
    };
    categoryBar.appendChild(btn);
  });
}

function getFilteredSortedProducts() {
  let filtered = products.filter(p => {
    const searchValue = searchInput && searchInput.value ? searchInput.value.trim() : "";
    const matchesText = searchValue === "" ||
      p.name.toLowerCase().includes(searchValue.toLowerCase()) ||
      (p.description && p.description.toLowerCase && p.description.toLowerCase().includes(searchValue.toLowerCase()));
    
    // Normalize category for comparison
    let productCategory = p.category;
    if (productCategory === "civil Lab") productCategory = "Civil Lab";
    
    const matchesCategory = activeCategory === "All" || productCategory === activeCategory;
    return matchesText && matchesCategory;
  });
  // Sorting
  if (sortSelect && sortSelect.value) {
    switch (sortSelect.value) {
      case "price-asc":
        filtered = filtered.slice().sort((a, b) => parseInt(a.price) - parseInt(b.price));
        break;
      case "price-desc":
        filtered = filtered.slice().sort((a, b) => parseInt(b.price) - parseInt(a.price));
        break;
      case "name-asc":
        filtered = filtered.slice().sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "name-desc":
        filtered = filtered.slice().sort((a, b) => b.name.localeCompare(a.name));
        break;
      default:
        break;
    }
  }
  return filtered;
}

function renderProducts() {
  productContainer.innerHTML = "";
  const filtered = getFilteredSortedProducts();
  
  // Update statistics
  updateStatistics(filtered);
  
  if (filtered.length === 0) {
    productContainer.innerHTML = "<p>No products found.</p>";
    return;
  }
  filtered.forEach((p, i) => {
    const card = document.createElement("div");
    card.classList.add("product-card");
    card.style.animationDelay = (i * 0.04) + "s";
    
    // Handle image array or string
    const imageUrl = Array.isArray(p.image) ? p.image[0] : p.image;
    
    card.innerHTML = `
      <img src="${imageUrl}" alt="${p.name}">
      <div class="info">
        <h3>${p.name}</h3>
        <p>${p.description}</p>
      </div>
    `;
    card.addEventListener('click', () => showProductModal(p));
    productContainer.appendChild(card);
  });
}

function updateStatistics(filteredProducts) {
  const totalProducts = filteredProducts.length;
  const totalCategories = new Set(filteredProducts.map(p => {
    let category = p.category;
    if (category === "civil Lab") category = "Civil Lab";
    return category;
  })).size;
  
  // Update the statistics in the hero section
  const productCount = document.querySelector('.stat-number[data-stat="products"]');
  const categoryCount = document.querySelector('.stat-number[data-stat="categories"]');
  
  if (productCount) productCount.textContent = `${totalProducts}+`;
  if (categoryCount) categoryCount.textContent = `${totalCategories}+`;
}

// Modal Logic
function showProductModal(product) {
  let specs = '';
  if (product.specifications) {
    specs = '<ul style="margin:10px 0 0 0;padding:0 0 0 18px;">' + Object.entries(product.specifications).map(([k,v]) => `<li><strong>${k}:</strong> ${v}</li>`).join('') + '</ul>';
  }
  
  // Handle image array or string
  const imageUrl = Array.isArray(product.image) ? product.image[0] : product.image;
  
  modalBody.innerHTML = `
  <div class="modal-display">
    <div class="image-block">
    <img class="modal-product-img" src="${imageUrl}" alt="${product.name}">
    ${product.featured ? '<span class="modal-badge"><i class="fas fa-star"></i> Featured</span>' : ''}
    
    </div>
    <div class="detail-block">
    <div class="modal-product-title">${product.name}</div>
    <div class="modal-product-desc">${product.description}</div>
    <div class="modal-product-price">₹${parseInt(product.price).toLocaleString()}</div>
    <div style="margin-top:10px;">${product.inStock ? '<span style="color:green;font-weight:600;">In Stock</span>' : '<span style="color:red;font-weight:600;">Out of Stock</span>'}</div>
    
    </div>
  </div>
  
  `;
  modal.style.display = 'flex';
}
if (closeModal) closeModal.onclick = () => { modal.style.display = 'none'; };
window.onclick = function(event) {
  if (event.target === modal) modal.style.display = 'none';
};

// Event Listeners
if (searchInput) {
  searchInput.addEventListener("input", () => {
    renderProducts();
  });
}
if (sortSelect) {
  sortSelect.addEventListener("change", () => {
    renderProducts();
  });
}

// Initial Render
renderCategoryBar();
renderProducts();
