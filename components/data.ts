export interface markerInterface {
    name: string;
    coordinate: [number, number];
    location: string;
    visited: number;
}

export const restaurant: markerInterface[] = [
    {
        name: "Zafran Restaurant",
        coordinate: [24.362398127383106, 88.62557705041579],
        location: "Bazar, Saheb Bazar Rd, রাজশাহী",
        visited: 36,
    },
    {
        name: "Sumon Hotel And Restaurant",
        coordinate: [24.37572175488805, 88.62181539009195],
        location: "রাজশাহী",
        visited: 12,
    },
    {
        name: "Mostak Hotel & Restaurant",
        coordinate: [24.375221638976747, 88.60796498346505],
        location: "9JF5+P7J, Dhaka Bus Terminal, Seroil, রাজশাহী",
        visited: 120,
    },
    {
        name: "Sunmoon Biriny House And Bangla Restuarant",
        coordinate: [24.377102794102534, 88.59351928589271],
        location:
            "বীরশ্রেষ্ঠ শহীদ ক্যাপ্টেন মহিউদ্দিন জাহাঙ্গীর স্মরণী, রাজশাহী",
        visited: 109,
    },
    {
        name: "Nanna Biriyani House",
        coordinate: [24.36842204644557, 88.5976458207052],
        location: "Beside Sonadighir Mosjid Malopara, Rajshahi 6100",
        visited: 109,
    },
    {
        name: "শাহী বিরিয়ানি হাউজ ও বাংলা রেস্তোরা",
        coordinate: [24.373396900454487, 88.58065304421663],
        location: "Rajshahi laxmipur, Rajshahi",
        visited: 139,
    },
    {
        name: "Captains World",
        coordinate: [23.809014645579865, 90.40342020905572],
        location: "Army Stadium, Tongi Diversion Rd, Dhaka 1212",
        visited: 8139,
    },
];
