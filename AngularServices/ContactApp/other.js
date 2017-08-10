// app.controller("HeaderCtrl", HeaderCtrl);
// app.controller("FooterCtrl", FooterCtrl);








// function HeaderCtrl(AppDataSvc, LoggingSvc, AppDataFactorySvc) {
  // function HeaderCtrl(AppDataFactorySvc) {
    function HeaderCtrl(AppDataService) {
  // this.appTitle="ContactsApp";
  this.appTitle = AppDataService.name;
  // LoggingSvc();
  console.log("HeaderCtrl:" + AppDataService.name);
}

// function FooterCtrl(AppDataSvc, LoggingSvc, AppDataFactorySvc) {
  // function FooterCtrl(AppDataFactorySvc) {
    function FooterCtrl(AppDataService) {
  this.appTitle = AppDataService.name;
  // LoggingSvc();
  console.log("FooterCtrl:" + AppDataService.version);
   this.contacts = [
            {
                "gender": "female",
                "name": {
                    "title": "miss",
                    "first": "eva",
                    "last": "lambert"
                },
                "location": {
                    "street": "7648 queens road",
                    "city": "newcastle upon tyne",
                    "state": "highlands and islands",
                    "postcode": "N30 2LQ"
                },
                "email": "eva.lambert@example.com",
                "login": {
                    "username": "ticklishdog995",
                    "password": "hallo",
                    "salt": "DkoN87TW",
                    "md5": "e836946529b9d823bc0029830a0a17b8",
                    "sha1": "961abfdaa16e54a1589f59494ec3456b11243034",
                    "sha256": "fbfff7e99fff0617ff0e62e1a372ef99be6ebfcad0b5e81c0e7d9731e10e5bf3"
                },
                "dob": "1963-03-01 11:41:45",
                "registered": "2015-04-17 05:29:09",
                "phone": "017683 51519",
                "cell": "0740-563-077",
                "id": {
                    "name": "NINO",
                    "value": "NW 15 78 76 U"
                },
                "picture": {
                    "large": "https://randomuser.me/api/portraits/women/58.jpg",
                    "medium": "https://randomuser.me/api/portraits/med/women/58.jpg",
                    "thumbnail": "https://randomuser.me/api/portraits/thumb/women/58.jpg"
                },
                "nat": "GB"
            },
            {
                "gender": "female",
                "name": {
                    "title": "mrs",
                    "first": "kristin",
                    "last": "harper"
                },
                "location": {
                    "street": "5080 tara street",
                    "city": "kells",
                    "state": "carlow",
                    "postcode": 91864
                },
                "email": "kristin.harper@example.com",
                "login": {
                    "username": "crazysnake217",
                    "password": "internal",
                    "salt": "pKILZh6M",
                    "md5": "8bed233b2401010fbb2815247689405f",
                    "sha1": "a20a9695da4af5e2b331727c8763e2c3cd71cbc9",
                    "sha256": "0d61c04e45faf8bab1c28ed7c774b3f321756360e96ceb2ce1bfac5d988a4088"
                },
                "dob": "1961-09-22 15:19:30",
                "registered": "2006-06-26 01:56:41",
                "phone": "071-806-3874",
                "cell": "081-996-6779",
                "id": {
                    "name": "PPS",
                    "value": "6691701T"
                },
                "picture": {
                    "large": "https://randomuser.me/api/portraits/women/61.jpg",
                    "medium": "https://randomuser.me/api/portraits/med/women/61.jpg",
                    "thumbnail": "https://randomuser.me/api/portraits/thumb/women/61.jpg"
                },
                "nat": "IE"
            },
            {
                "gender": "male",
                "name": {
                    "title": "mr",
                    "first": "nils",
                    "last": "durand"
                },
                "location": {
                    "street": "1586 rue de l'abbé-rousselot",
                    "city": "nantes",
                    "state": "pas-de-calais",
                    "postcode": 83368
                },
                "email": "nils.durand@example.com",
                "login": {
                    "username": "smallsnake965",
                    "password": "494949",
                    "salt": "SxOy8Vhe",
                    "md5": "fd37ec498ebb8f8d92d71bd449649b67",
                    "sha1": "ef3a4df03bf05e7f9a58d958054cc18e1d69ec9e",
                    "sha256": "c6da3ffea52a04a25c277bdad42a34695d32948420246385c0d6c5181ef014ea"
                },
                "dob": "1967-09-14 03:38:02",
                "registered": "2009-01-18 19:52:26",
                "phone": "04-37-70-15-74",
                "cell": "06-97-81-46-85",
                "id": {
                    "name": "INSEE",
                    "value": "167848328559 26"
                },
                "picture": {
                    "large": "https://randomuser.me/api/portraits/men/19.jpg",
                    "medium": "https://randomuser.me/api/portraits/med/men/19.jpg",
                    "thumbnail": "https://randomuser.me/api/portraits/thumb/men/19.jpg"
                },
                "nat": "FR"
            },
            {
                "gender": "male",
                "name": {
                    "title": "mr",
                    "first": "daniel",
                    "last": "lehtola"
                },
                "location": {
                    "street": "2101 pyynikintie",
                    "city": "naantali",
                    "state": "satakunta",
                    "postcode": 11324
                },
                "email": "daniel.lehtola@example.com",
                "login": {
                    "username": "brownlion143",
                    "password": "evelyn",
                    "salt": "rNGrPR92",
                    "md5": "dec1fa4f2667c2abd8aa1d8c5ea0a317",
                    "sha1": "9db99eac59d7dc91bcce3c7f01efed81d4eb7092",
                    "sha256": "8b38f5ed6aa5876f1f9c1cebb886404dfd16e4cfe86f8ad57a43e44196ed76cf"
                },
                "dob": "1945-03-20 15:02:31",
                "registered": "2004-01-12 13:50:53",
                "phone": "08-803-787",
                "cell": "048-865-39-72",
                "id": {
                    "name": "HETU",
                    "value": "445-399P"
                },
                "picture": {
                    "large": "https://randomuser.me/api/portraits/men/87.jpg",
                    "medium": "https://randomuser.me/api/portraits/med/men/87.jpg",
                    "thumbnail": "https://randomuser.me/api/portraits/thumb/men/87.jpg"
                },
                "nat": "FI"
            },
            {
                "gender": "female",
                "name": {
                    "title": "miss",
                    "first": "patricia",
                    "last": "brewer"
                },
                "location": {
                    "street": "7980 o'connell avenue",
                    "city": "wexford",
                    "state": "south dublin",
                    "postcode": 26553
                },
                "email": "patricia.brewer@example.com",
                "login": {
                    "username": "heavybutterfly285",
                    "password": "jethro",
                    "salt": "eNttGm6Y",
                    "md5": "48be69524648dba9242e1bd5816ff8a4",
                    "sha1": "375aba37c8526eb11705a26cacb08bbc69099df0",
                    "sha256": "bd701123252d079089bcf95e04b11a5ec2255baa63c0bfa53bae3f2b58d977a4"
                },
                "dob": "1978-11-02 23:58:00",
                "registered": "2002-10-31 18:10:48",
                "phone": "041-771-4374",
                "cell": "081-373-9555",
                "id": {
                    "name": "PPS",
                    "value": "9138581T"
                },
                "picture": {
                    "large": "https://randomuser.me/api/portraits/women/1.jpg",
                    "medium": "https://randomuser.me/api/portraits/med/women/1.jpg",
                    "thumbnail": "https://randomuser.me/api/portraits/thumb/women/1.jpg"
                },
                "nat": "IE"
            },
            {
                "gender": "male",
                "name": {
                    "title": "mr",
                    "first": "guilherme",
                    "last": "nascimento"
                },
                "location": {
                    "street": "6038 rua primeiro de maio ",
                    "city": "presidente prudente",
                    "state": "maranhão",
                    "postcode": 43068
                },
                "email": "guilherme.nascimento@example.com",
                "login": {
                    "username": "heavymeercat642",
                    "password": "hotrod",
                    "salt": "BFtauqOq",
                    "md5": "90ccdf9cc3fa3463a48d91d6b464ca14",
                    "sha1": "80d46c24c2d747b33bfd4a127491d2cb5e9d9640",
                    "sha256": "f576887528830fbce9c60a9df82de57e82bbae81beb84e24e2163700f133ad9b"
                },
                "dob": "1983-07-09 00:58:36",
                "registered": "2014-09-23 21:18:19",
                "phone": "(42) 7990-2255",
                "cell": "(68) 3269-3311",
                "id": {
                    "name": "",
                    "value": null
                },
                "picture": {
                    "large": "https://randomuser.me/api/portraits/men/68.jpg",
                    "medium": "https://randomuser.me/api/portraits/med/men/68.jpg",
                    "thumbnail": "https://randomuser.me/api/portraits/thumb/men/68.jpg"
                },
                "nat": "BR"
            },
            {
                "gender": "female",
                "name": {
                    "title": "miss",
                    "first": "ayşe",
                    "last": "özbey"
                },
                "location": {
                    "street": "4762 kushimoto sk",
                    "city": "rize",
                    "state": "aydın",
                    "postcode": 20448
                },
                "email": "ayşe.özbey@example.com",
                "login": {
                    "username": "purpledog860",
                    "password": "cartoon",
                    "salt": "ahvvYMwX",
                    "md5": "146d72dac9db538223451dd2551be1e1",
                    "sha1": "865b2b53540e8e7081e7a21157730bf50353539e",
                    "sha256": "4ffdcddd469220d43d4d9e4179f07019d9ac8bcdd2f4ecd8c5ef0a0e2663e2e7"
                },
                "dob": "1955-03-18 03:21:59",
                "registered": "2002-11-23 00:16:21",
                "phone": "(054)-924-7566",
                "cell": "(515)-568-5439",
                "id": {
                    "name": "",
                    "value": null
                },
                "picture": {
                    "large": "https://randomuser.me/api/portraits/women/21.jpg",
                    "medium": "https://randomuser.me/api/portraits/med/women/21.jpg",
                    "thumbnail": "https://randomuser.me/api/portraits/thumb/women/21.jpg"
                },
                "nat": "TR"
            },
            {
                "gender": "female",
                "name": {
                    "title": "mrs",
                    "first": "mackenzie",
                    "last": "walker"
                },
                "location": {
                    "street": "1023 armagh street",
                    "city": "rotorua",
                    "state": "otago",
                    "postcode": 45312
                },
                "email": "mackenzie.walker@example.com",
                "login": {
                    "username": "yellowgorilla916",
                    "password": "whiplash",
                    "salt": "WHKqCmzq",
                    "md5": "f7e26f7f9dbb11192f8dbd8a4c8c4e1d",
                    "sha1": "1e89a56b988a8af6282d8bbd2267ccaddd760fc5",
                    "sha256": "d16070f09578f403ac34b038149c1489bac129322949e7d9e3fb256ea4b61811"
                },
                "dob": "1951-11-10 10:17:27",
                "registered": "2005-08-31 11:29:37",
                "phone": "(956)-629-8275",
                "cell": "(423)-611-2986",
                "id": {
                    "name": "",
                    "value": null
                },
                "picture": {
                    "large": "https://randomuser.me/api/portraits/women/13.jpg",
                    "medium": "https://randomuser.me/api/portraits/med/women/13.jpg",
                    "thumbnail": "https://randomuser.me/api/portraits/thumb/women/13.jpg"
                },
                "nat": "NZ"
            },
                    {
                        "gender": "male",
                        "name": {
                            "title": "mr",
                            "first": "vidaúl",
                            "last": "da cunha"
                        },
                        "location": {
                            "street": "2418 rua santa maria ",
                            "city": "colombo",
                            "state": "rondônia",
                            "postcode": 93456
                        },
                        "email": "vidaúl.dacunha@example.com",
                        "login": {
                            "username": "whitebird193",
                            "password": "mannn",
                            "salt": "TFdNOM0o",
                            "md5": "ea1cfcd735cfcb8b90e353f933141ac2",
                            "sha1": "b5d6e3cd97c7859e878733815eea22446e2565cb",
                            "sha256": "60c28da583d4ca73f6f0e638b374b9217a27892138bcbb92a5096250d1c2ffcf"
                        },
                        "dob": "1967-04-17 03:50:50",
                        "registered": "2011-09-04 06:33:01",
                        "phone": "(23) 2986-6582",
                        "cell": "(18) 7916-0228",
                        "id": {
                            "name": "",
                            "value": null
                        },
                        "picture": {
                            "large": "https://randomuser.me/api/portraits/men/58.jpg",
                            "medium": "https://randomuser.me/api/portraits/med/men/58.jpg",
                            "thumbnail": "https://randomuser.me/api/portraits/thumb/men/58.jpg"
                        },
                        "nat": "BR"
                    }
        ];
}