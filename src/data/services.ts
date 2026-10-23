export type MenuItem = {
  name: string;
  note?: string;
  price: string;
};

export type MenuGroup = {
  title?: string;
  items: MenuItem[];
};

export type WaxRow = {
  service: string;
  note?: string;
  aloeVera: string;
  whiteChocolate: string;
  rica: string;
};

export type ServiceSectionData = {
  id: string;
  number: string;
  title: string;
  groups?: MenuGroup[];
  waxTable?: WaxRow[];
};

export const SERVICE_SECTIONS: ServiceSectionData[] = [
  {
    id: "face-treatment",
    number: "1",
    title: "Face Treatment",
    groups: [
      {
        title: "Threading",
        items: [
          { name: "Threading", price: "₹30" },
          { name: "Upper Lips", price: "₹20" },
          { name: "Forehead", price: "₹20" },
          { name: "Chin", price: "₹20" },
        ],
      },
      {
        title: "Bleach",
        items: [
          { name: "Face", price: "₹100" },
          { name: "Face & Neck", price: "₹150" },
          { name: "Face, Neck & Back", price: "₹200" },
        ],
      },
      {
        title: "Clean Up",
        items: [
          { name: "Fruit", price: "₹300" },
          { name: "Aroma", price: "₹400" },
        ],
      },
      {
        title: "D-Tan",
        items: [
          { name: "Face, Neck & Back", price: "₹250" },
          { name: "Hands (Full)", price: "₹300" },
          { name: "Legs (Half)", price: "₹300" },
          { name: "Back", price: "₹500" },
        ],
      },
    ],
  },
  {
    id: "facial",
    number: "2",
    title: "Facial",
    groups: [
      {
        items: [
          { name: "Fruit", price: "₹500" },
          { name: "Gold", price: "₹600" },
          { name: "Lotus", price: "₹700" },
          { name: "Aroma", price: "₹800" },
        ],
      },
    ],
  },
  {
    id: "waxing",
    number: "3",
    title: "Waxing",
    waxTable: [
      { service: "Full Hands", aloeVera: "₹200", whiteChocolate: "₹300", rica: "₹400" },
      { service: "Half Legs", aloeVera: "₹200", whiteChocolate: "₹300", rica: "₹400" },
      { service: "Full Legs", aloeVera: "₹400", whiteChocolate: "₹600", rica: "₹700" },
      { service: "Underarms", aloeVera: "₹50", whiteChocolate: "₹50", rica: "₹80" },
      {
        service: "Combo",
        note: "Full Hands + Full Legs + Underarms",
        aloeVera: "₹600",
        whiteChocolate: "₹900",
        rica: "₹1100",
      },
    ],
  },
  {
    id: "massage-hair",
    number: "4",
    title: "Massage & Hair Treatment",
    groups: [
      {
        title: "Massage",
        items: [
          { name: "Head Massage", price: "₹200" },
          { name: "Body Massage", price: "₹1000" },
          { name: "Body Massage with Tummy", price: "₹1200" },
        ],
      },
      {
        title: "Hair Treatment",
        items: [
          { name: "Flicker Cuts (One Side)", price: "₹50" },
          { name: "Flicker Cuts (Two Side)", price: "₹100" },
          { name: "Straight Cut", price: "₹100" },
          { name: "V-Cut", price: "₹150" },
          { name: "U-Cut", price: "₹150" },
          { name: "Step Cut", price: "₹350" },
          { name: "Blow Dry", price: "₹100" },
          { name: "Straightening (Normal)", price: "₹300" },
        ],
      },
      {
        title: "Hair Dye & Colouring",
        items: [
          { name: "Dye Touch-up", price: "₹200" },
          { name: "Hair Mehndi", price: "₹200" },
          { name: "Dye Global", price: "₹500" },
        ],
      },
    ],
  },
  {
    id: "spa-mani-pedi",
    number: "5",
    title: "Hair Spa, Manicure & Pedicure",
    groups: [
      {
        title: "Hair Spa",
        items: [{ name: "Aroma Hair Spa", price: "₹500", note: "or according to length" }],
      },
      {
        title: "Manicure & Pedicure",
        items: [
          { name: "Manicure", price: "₹400" },
          { name: "Pedicure", price: "₹600" },
          { name: "Body Polishing", price: "₹2000" },
        ],
      },
    ],
  },
];
