type Relation = {
  id: string;
  name: string;
}

export type User =   {
    id: string; 
    picture: string; 
    name: string; 
    company: string; 
    email: string; 
    phone: string; 
    address: string; 
    about: string;
    registered: string;
    relations: Relation[];
    favoriteStack: string;
  };

export const data: User[] = [
  {
    "id": "6ef15400-236d-4d24-a33c-4badd1ed16e5",
    "picture": "http://placehold.it/32x32",
    "name": "Gordon Eaton",
    "company": "RUGSTARS",
    "email": "gordoneaton@rugstars.com",
    "phone": "+1 (888) 472-3632",
    "address": "643 Reeve Place, Hiwasse, Mississippi, 3778",
    "about": "Sit excepteur reprehenderit ad adipisicing. Consequat mollit cupidatat proident in non amet proident velit non fugiat deserunt dolore anim sit. In fugiat aliquip aliquip nisi tempor ad sit eu minim do.\r\n",
    "registered": "2018-11-21T03:41:28 -01:00",
    "relations": [
      {
        "id": "e9982e48-dcde-48ac-8632-1f80e22732c5",
        "name": "Helene Hobbs"
      }
    ],
    "favoriteStack": "Gatsby"
  },
  {
    "id": "ea4846de-0b65-4ba1-a86f-a2492bc15c26",
    "picture": "http://placehold.it/32x32",
    "name": "Terry Pitts",
    "company": "EXOTERIC",
    "email": "terrypitts@exoteric.com",
    "phone": "+1 (992) 438-2673",
    "address": "757 Lewis Avenue, Rehrersburg, Colorado, 7971",
    "about": "Exercitation mollit enim pariatur ad proident non adipisicing nisi qui id et deserunt elit sit. Sit quis cillum aliquip laborum amet non aliquip dolore tempor fugiat minim. Commodo velit eiusmod in deserunt consequat aliqua. Culpa sint voluptate sint in est magna magna amet tempor eiusmod nisi. Irure ullamco pariatur deserunt reprehenderit. Reprehenderit enim ad sunt dolore eu consectetur veniam qui Lorem enim do laborum veniam.\r\n",
    "registered": "2020-10-26T11:48:12 -01:00",
    "relations": [],
    "favoriteStack": "Remix"
  },
  {
    "id": "08292301-db9a-47c3-876b-bf6122094f07",
    "picture": "http://placehold.it/32x32",
    "name": "Jeanine Tate",
    "company": "XELEGYL",
    "email": "jeaninetate@xelegyl.com",
    "phone": "+1 (848) 463-3717",
    "address": "975 Bushwick Court, Thynedale, District Of Columbia, 2167",
    "about": "Anim sunt proident ut excepteur. Eu velit exercitation ipsum adipisicing in amet eu. Eiusmod tempor minim dolor cupidatat non ullamco adipisicing deserunt aliquip nostrud sunt. Irure laborum cillum aliqua amet sunt proident irure reprehenderit laboris consectetur ad.\r\n",
    "registered": "2014-04-29T05:28:16 -02:00",
    "relations": [
      {
        "id": "6b909208-3cef-4eca-859e-2303ba0d5fd2",
        "name": "Day Drake"
      },
      {
        "id": "b56069b5-108e-43eb-9a1b-f2cd5845ef92",
        "name": "Noel Roth"
      },
      {
        "id": "0c2d7d4d-9184-47ff-9869-518abc0d522c",
        "name": "Marion Booth"
      }
    ],
    "favoriteStack": "Gatsby"
  },
  {
    "id": "c30facea-c5f5-4c82-b24f-ca7008b992b4",
    "picture": "http://placehold.it/32x32",
    "name": "Nola Finley",
    "company": "INCUBUS",
    "email": "nolafinley@incubus.com",
    "phone": "+1 (890) 466-2954",
    "address": "150 Love Lane, Rowe, New York, 8296",
    "about": "Veniam laborum elit ipsum aliqua ut non ullamco. Duis et est Lorem cillum aute eu ipsum non commodo. Ipsum ullamco mollit nulla ullamco aliquip nisi eiusmod quis ut culpa. Ad labore nulla velit nulla culpa pariatur sint est ad sit ipsum duis. Laboris velit nulla ullamco exercitation incididunt ipsum dolore irure in laboris excepteur nisi.\r\n",
    "registered": "2019-09-09T09:56:22 -02:00",
    "relations": [
      {
        "id": "889236f9-273c-408f-8ba7-11c1082754ee",
        "name": "Leah Raymond"
      },
      {
        "id": "c2f39d3d-97e8-4c67-8d5b-30b934f2e0a9",
        "name": "Sampson Beach"
      }
    ],
    "favoriteStack": "Remix"
  },
  {
    "id": "840c1d00-4f4b-4fc7-9958-fbedb198aa87",
    "picture": "http://placehold.it/32x32",
    "name": "Hester Rivas",
    "company": "BEADZZA",
    "email": "hesterrivas@beadzza.com",
    "phone": "+1 (944) 495-2918",
    "address": "193 Hendrix Street, Sanborn, Northern Mariana Islands, 2184",
    "about": "Amet et reprehenderit ullamco ipsum fugiat cillum. Cupidatat et nulla aliquip nulla culpa veniam mollit aliquip qui nisi duis aliqua. Exercitation nostrud sit et officia. Nisi ex dolore sint pariatur enim nostrud labore aute ex est ea. Voluptate ut ut mollit aliqua sunt veniam quis aliquip non occaecat dolor duis sunt. Adipisicing cillum mollit aliquip duis ut exercitation sit quis ullamco exercitation quis exercitation.\r\n",
    "registered": "2015-04-09T10:27:43 -02:00",
    "relations": [],
    "favoriteStack": "Remix"
  },
  {
    "id": "6a3aeca1-0020-454f-8531-eb5bbf1a5f83",
    "picture": "http://placehold.it/32x32",
    "name": "Susan Sanders",
    "company": "KIDSTOCK",
    "email": "susansanders@kidstock.com",
    "phone": "+1 (962) 416-3167",
    "address": "893 Tudor Terrace, Villarreal, Missouri, 4747",
    "about": "Nulla occaecat reprehenderit elit non quis aliqua reprehenderit veniam exercitation labore nostrud quis reprehenderit. Eiusmod amet consequat tempor amet ex commodo excepteur nostrud velit ipsum eu do. Nisi sunt duis nulla deserunt nisi ex ea. Ea in est fugiat occaecat anim incididunt laboris proident. Eu laboris do enim laboris culpa. Consectetur incididunt officia sint voluptate veniam minim.\r\n",
    "registered": "2019-12-29T11:41:51 -01:00",
    "relations": [
      {
        "id": "1c1742ea-eef0-4d1d-8521-7259ee6c2e3c",
        "name": "Wilder Hoffman"
      },
      {
        "id": "4d7a963a-438a-4119-a127-43a357c1c10d",
        "name": "Hinton Downs"
      },
      {
        "id": "d13f4891-89d0-43d7-8aeb-ef76bd6c3512",
        "name": "Abigail Chang"
      }
    ],
    "favoriteStack": "Svelte"
  },
  {
    "id": "d30f27e6-410a-4bfb-a074-9687a53e217b",
    "picture": "http://placehold.it/32x32",
    "name": "Gaines Velazquez",
    "company": "PANZENT",
    "email": "gainesvelazquez@panzent.com",
    "phone": "+1 (903) 442-3011",
    "address": "527 Pine Street, Bridgetown, Illinois, 7253",
    "about": "Officia in aliqua sit eiusmod Lorem nulla et eiusmod cillum sint ipsum nostrud. Irure velit est nostrud tempor aliquip ad. Ex tempor incididunt in est culpa consequat pariatur ex deserunt qui pariatur. Irure do pariatur culpa cillum consectetur quis occaecat.\r\n",
    "registered": "2021-12-10T08:40:08 -01:00",
    "relations": [],
    "favoriteStack": "Remix"
  }
]

