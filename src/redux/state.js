const state = {
    familyInfo: [
        {
            key: 38,
            ID: 38,
            people: 121,
            SNum: 12
        },
        {
            key: 149,
            ID: 149,
            people: 113,
            SNum: 10
        },
        {
            key: 27251,
            ID: 27251,
            people: 404,
            SNum: 39
        },
        {
            key: 42623,
            ID: 42623,
            people: 81,
            SNum: 10
        },
        {
            key: 68939,
            ID: 68939,
            people: 244,
            SNum: 23
        },
        {
            key: 176860,
            ID: 176860,
            people: 426,
            SNum: 44
        },
        {
            key: 603481,
            ID: 603481,
            people: 181,
            SNum: 19
        },
        {
            key: 791533,
            ID: 791533,
            people: 114,
            SNum: 10
        },
        {
            key: 903988,
            ID: 903988,
            people: 58,
            SNum: 5
        }
        
    ],
    //focusFamily: 903988,
    focusFamily: 68939,
    selectedFamily: [38, 149, 27251, 42623],
    family149: [
        {
          "name": [
            91,
            92
          ],
          "parent": "",
          "fem_deceased": "N",
          "fem_suicide": "N",
          "mal_deceased": "N",
          "mal_suicide": "N",
          "group": "couple"
        },
        {
          "name": [
            94,
            93
          ],
          "parent": [
            91,
            92
          ],
          "group": "couple",
          "fem_deceased": "Y",
          "fem_suicide": "N",
          "mal_deceased": "Y",
          "mal_suicide": "N"
        },
        {
          "name": [
            96,
            97
          ],
          "parent": [
            94,
            93
          ],
          "group": "couple",
          "fem_deceased": "Y",
          "fem_suicide": "N",
          "mal_deceased": "Y",
          "mal_suicide": "N"
        },
        {
          "name": [
            55150,
            55149
          ],
          "parent": [
            96,
            97
          ],
          "group": "couple",
          "fem_deceased": "Y",
          "fem_suicide": "N",
          "mal_deceased": "Y",
          "mal_suicide": "N"
        },
        {
          "name": [
            42385,
            42386
          ],
          "parent": [
            27804,
            27805
          ],
          "group": "couple",
          "fem_deceased": "Y",
          "fem_suicide": "N",
          "mal_deceased": "Y",
          "mal_suicide": "N"
        },
        {
          "name": [
            49840,
            49841
          ],
          "parent": [
            96,
            97
          ],
          "group": "couple",
          "fem_deceased": "Y",
          "fem_suicide": "N",
          "mal_deceased": "Y",
          "mal_suicide": "N"
        },
        {
          "name": [
            27801,
            27800
          ],
          "parent": [
            27804,
            27805
          ],
          "group": "couple",
          "fem_deceased": "Y",
          "fem_suicide": "N",
          "mal_deceased": "Y",
          "mal_suicide": "N"
        },
        {
          "name": [
            27804,
            27805
          ],
          "parent": [
            42341,
            42340
          ],
          "group": "couple",
          "fem_deceased": "Y",
          "fem_suicide": "N",
          "mal_deceased": "Y",
          "mal_suicide": "N"
        },
        {
          "name": [
            27807,
            27806
          ],
          "parent": [
            27801,
            27800
          ],
          "group": "couple",
          "fem_deceased": "N",
          "fem_suicide": "N",
          "mal_deceased": "Y",
          "mal_suicide": "N"
        },
        {
          "name": [
            27808
          ],
          "parent": [
            27801,
            27800
          ],
          "group": "individual",
          "ind_deceased": "Y",
          "ind_suicide": "N"
        },
        {
          "name": [
            27815,
            27814
          ],
          "parent": [
            27801,
            27800
          ],
          "group": "couple",
          "fem_deceased": "N",
          "fem_suicide": "N",
          "mal_deceased": "Y",
          "mal_suicide": "Y",
          "mal_data": {
            "alcohol": 0,
            "psychosis": 0,
            "anxiety-non-trauma": 0,
            "somatic disorder": 0,
            "bipolar spectrum illness": 0,
            "depression": 0,
            "interpersonal trauma": 0,
            "PD-Cluster C-anxiety": 0,
            "PD-Cluster B-emotional": 0,
            "PD": 0,
            "Impulse control disorder": 0,
            "obesity": 0,
            "cardiovascular": 0,
            "COPD": 0,
            "asthma": 0,
            "immune-autoimmune": 0
          }
        },
        {
          "name": [
            27816
          ],
          "parent": [
            27801,
            27800
          ],
          "group": "individual",
          "ind_deceased": "N",
          "ind_suicide": "N"
        },
        {
          "name": [
            7142,
            7141
          ],
          "parent": [
            17989,
            17990
          ],
          "group": "couple",
          "fem_deceased": "Y",
          "fem_suicide": "N",
          "mal_deceased": "Y",
          "mal_suicide": "N"
        },
        {
          "name": [
            57587,
            57588
          ],
          "parent": [
            49840,
            49841
          ],
          "group": "couple",
          "fem_deceased": "Y",
          "fem_suicide": "N",
          "mal_deceased": "Y",
          "mal_suicide": "N"
        },
        {
          "name": [
            66767,
            66768
          ],
          "parent": [
            96,
            97
          ],
          "group": "couple",
          "fem_deceased": "Y",
          "fem_suicide": "N",
          "mal_deceased": "Y",
          "mal_suicide": "N"
        },
        {
          "name": [
            42341,
            42340
          ],
          "parent": [
            91,
            92
          ],
          "group": "couple",
          "fem_deceased": "Y",
          "fem_suicide": "N",
          "mal_deceased": "Y",
          "mal_suicide": "N"
        },
        {
          "name": [
            45552,
            45551
          ],
          "parent": [
            57587,
            57588
          ],
          "group": "couple",
          "fem_deceased": "N",
          "fem_suicide": "N",
          "mal_deceased": "Y",
          "mal_suicide": "N"
        },
        {
          "name": [
            13716,
            35279
          ],
          "parent": [
            55150,
            55149
          ],
          "group": "couple",
          "fem_deceased": "Y",
          "fem_suicide": "N",
          "mal_deceased": "Y",
          "mal_suicide": "N"
        },
        {
          "name": [
            17989,
            17990
          ],
          "parent": [
            27804,
            27805
          ],
          "group": "couple",
          "fem_deceased": "Y",
          "fem_suicide": "N",
          "mal_deceased": "Y",
          "mal_suicide": "N"
        },
        {
          "name": [
            13112,
            13111
          ],
          "parent": [
            66767,
            66768
          ],
          "group": "couple",
          "fem_deceased": "Y",
          "fem_suicide": "N",
          "mal_deceased": "Y",
          "mal_suicide": "N"
        },
        {
          "name": [
            22580,
            22579
          ],
          "parent": [
            55150,
            55149
          ],
          "group": "couple",
          "fem_deceased": "Y",
          "fem_suicide": "N",
          "mal_deceased": "Y",
          "mal_suicide": "N"
        },
        {
          "name": [
            40800,
            40801
          ],
          "parent": [
            22580,
            22579
          ],
          "group": "couple",
          "fem_deceased": "Y",
          "fem_suicide": "N",
          "mal_deceased": "Y",
          "mal_suicide": "N"
        },
        {
          "name": [
            3853,
            3854
          ],
          "parent": [
            13112,
            13111
          ],
          "group": "couple",
          "fem_deceased": "N",
          "fem_suicide": "N",
          "mal_deceased": "N",
          "mal_suicide": "N"
        },
        {
          "name": [
            9474,
            9473
          ],
          "parent": [
            27815,
            27814
          ],
          "group": "couple",
          "fem_deceased": "N",
          "fem_suicide": "N",
          "mal_deceased": "N",
          "mal_suicide": "N"
        },
        {
          "name": [
            62634,
            2303
          ],
          "parent": [
            45552,
            45551
          ],
          "group": "couple",
          "fem_deceased": "N",
          "fem_suicide": "N",
          "mal_deceased": "N",
          "mal_suicide": "N"
        },
        {
          "name": [
            48671,
            2303
          ],
          "parent": [
            45552,
            45551
          ],
          "group": "couple",
          "fem_deceased": "N",
          "fem_suicide": "N",
          "mal_deceased": "N",
          "mal_suicide": "N"
        },
        {
          "name": [
            22889
          ],
          "parent": [
            27815,
            27814
          ],
          "group": "individual",
          "ind_deceased": "N",
          "ind_suicide": "N"
        },
        {
          "name": [
            22893
          ],
          "parent": [
            27815,
            27814
          ],
          "group": "individual",
          "ind_deceased": "N",
          "ind_suicide": "N"
        },
        {
          "name": [
            30890,
            6270
          ],
          "parent": [
            7142,
            7141
          ],
          "group": "couple",
          "fem_deceased": "N",
          "fem_suicide": "N",
          "mal_deceased": "N",
          "mal_suicide": "N"
        },
        {
          "name": [
            6269,
            6270
          ],
          "parent": [
            7142,
            7141
          ],
          "group": "couple",
          "fem_deceased": "N",
          "fem_suicide": "N",
          "mal_deceased": "N",
          "mal_suicide": "N"
        },
        {
          "name": [
            8264
          ],
          "parent": [
            3853,
            3854
          ],
          "group": "individual",
          "ind_deceased": "Y",
          "ind_suicide": "Y",
          "ind_data": {
            "alcohol": 0,
            "psychosis": 0,
            "anxiety-non-trauma": 0,
            "somatic disorder": 0,
            "bipolar spectrum illness": 0,
            "depression": 0,
            "interpersonal trauma": 0,
            "PD-Cluster C-anxiety": 0,
            "PD-Cluster B-emotional": 0,
            "PD": 0,
            "Impulse control disorder": 0,
            "obesity": 0,
            "cardiovascular": 0,
            "COPD": 0,
            "asthma": 0,
            "immune-autoimmune": 0
          }
        },
        {
          "name": [
            8266
          ],
          "parent": [
            3853,
            3854
          ],
          "group": "individual",
          "ind_deceased": "N",
          "ind_suicide": "N"
        },
        {
          "name": [
            858,
            0
          ],
          "parent": [
            13112,
            13111
          ],
          "group": "couple",
          "fem_deceased": "Y",
          "fem_suicide": "N"
        },
        {
          "name": [
            62633
          ],
          "parent": [
            62634,
            2303
          ],
          "group": "individual",
          "ind_deceased": "Y",
          "ind_suicide": "Y",
          "ind_data": {
            "alcohol": 0,
            "psychosis": 0,
            "anxiety-non-trauma": 1,
            "somatic disorder": 0,
            "bipolar spectrum illness": 0,
            "depression": 1,
            "interpersonal trauma": 0,
            "PD-Cluster C-anxiety": 0,
            "PD-Cluster B-emotional": 0,
            "PD": 0,
            "Impulse control disorder": 0,
            "obesity": 0,
            "cardiovascular": 0,
            "COPD": 0,
            "asthma": 0,
            "immune-autoimmune": 0
          }
        },
        {
          "name": [
            22646
          ],
          "parent": [
            9474,
            9473
          ],
          "group": "individual",
          "ind_deceased": "N",
          "ind_suicide": "N"
        },
        {
          "name": [
            66251
          ],
          "parent": [
            65448,
            66253
          ],
          "group": "individual",
          "ind_deceased": "N",
          "ind_suicide": "N"
        },
        {
          "name": [
            65448,
            66253
          ],
          "parent": [
            20337,
            20338
          ],
          "group": "couple",
          "fem_deceased": "N",
          "fem_suicide": "N",
          "mal_deceased": "Y",
          "mal_suicide": "Y",
          "mal_data": {
            "alcohol": 0,
            "psychosis": 0,
            "anxiety-non-trauma": 0,
            "somatic disorder": 0,
            "bipolar spectrum illness": 0,
            "depression": 0,
            "interpersonal trauma": 0,
            "PD-Cluster C-anxiety": 0,
            "PD-Cluster B-emotional": 0,
            "PD": 0,
            "Impulse control disorder": 0,
            "obesity": 0,
            "cardiovascular": 0,
            "COPD": 0,
            "asthma": 0,
            "immune-autoimmune": 0
          }
        },
        {
          "name": [
            66591
          ],
          "parent": [
            20337,
            20338
          ],
          "group": "individual",
          "ind_deceased": "Y",
          "ind_suicide": "N"
        },
        {
          "name": [
            9413
          ],
          "parent": [
            65448,
            66253
          ],
          "group": "individual",
          "ind_deceased": "N",
          "ind_suicide": "N"
        },
        {
          "name": [
            39372,
            65765
          ],
          "parent": [
            9474,
            9473
          ],
          "group": "couple",
          "fem_deceased": "N",
          "fem_suicide": "N",
          "mal_deceased": "Y",
          "mal_suicide": "Y",
          "mal_data": {
            "alcohol": 0,
            "psychosis": 0,
            "anxiety-non-trauma": 0,
            "somatic disorder": 0,
            "bipolar spectrum illness": 1,
            "depression": 1,
            "interpersonal trauma": 0,
            "PD-Cluster C-anxiety": 0,
            "PD-Cluster B-emotional": 0,
            "PD": 0,
            "Impulse control disorder": 1,
            "obesity": 1,
            "cardiovascular": 0,
            "COPD": 0,
            "asthma": 0,
            "immune-autoimmune": 0
          }
        },
        {
          "name": [
            33719
          ],
          "parent": [
            9474,
            9473
          ],
          "group": "individual",
          "ind_deceased": "N",
          "ind_suicide": "N"
        },
        {
          "name": [
            20337,
            20338
          ],
          "parent": [
            13716,
            35279
          ],
          "group": "couple",
          "fem_deceased": "Y",
          "fem_suicide": "N",
          "mal_deceased": "N",
          "mal_suicide": "N"
        },
        {
          "name": [
            57627
          ],
          "parent": [
            48671,
            2303
          ],
          "group": "individual",
          "ind_deceased": "N",
          "ind_suicide": "N"
        },
        {
          "name": [
            6333
          ],
          "parent": [
            9474,
            9473
          ],
          "group": "individual",
          "ind_deceased": "N",
          "ind_suicide": "N"
        },
        {
          "name": [
            66666,
            52220
          ],
          "parent": [
            42385,
            42386
          ],
          "group": "couple",
          "fem_deceased": "N",
          "fem_suicide": "N",
          "mal_deceased": "Y",
          "mal_suicide": "Y",
          "mal_data": {
            "alcohol": 0,
            "psychosis": 0,
            "anxiety-non-trauma": 0,
            "somatic disorder": 0,
            "bipolar spectrum illness": 0,
            "depression": 0,
            "interpersonal trauma": 0,
            "PD-Cluster C-anxiety": 0,
            "PD-Cluster B-emotional": 0,
            "PD": 0,
            "Impulse control disorder": 0,
            "obesity": 0,
            "cardiovascular": 0,
            "COPD": 0,
            "asthma": 0,
            "immune-autoimmune": 0
          }
        },
        {
          "name": [
            54822,
            52220
          ],
          "parent": [
            42385,
            42386
          ],
          "group": "couple",
          "fem_deceased": "N",
          "fem_suicide": "N",
          "mal_deceased": "Y",
          "mal_suicide": "Y",
          "mal_data": {
            "alcohol": 0,
            "psychosis": 0,
            "anxiety-non-trauma": 0,
            "somatic disorder": 0,
            "bipolar spectrum illness": 0,
            "depression": 0,
            "interpersonal trauma": 0,
            "PD-Cluster C-anxiety": 0,
            "PD-Cluster B-emotional": 0,
            "PD": 0,
            "Impulse control disorder": 0,
            "obesity": 0,
            "cardiovascular": 0,
            "COPD": 0,
            "asthma": 0,
            "immune-autoimmune": 0
          }
        },
        {
          "name": [
            10423
          ],
          "parent": [
            10424,
            10425
          ],
          "group": "individual",
          "ind_deceased": "Y",
          "ind_suicide": "Y",
          "ind_data": {
            "alcohol": 0,
            "psychosis": 0,
            "anxiety-non-trauma": 1,
            "somatic disorder": 0,
            "bipolar spectrum illness": 1,
            "depression": 1,
            "interpersonal trauma": 1,
            "PD-Cluster C-anxiety": 0,
            "PD-Cluster B-emotional": 0,
            "PD": 0,
            "Impulse control disorder": 0,
            "obesity": 1,
            "cardiovascular": 0,
            "COPD": 0,
            "asthma": 0,
            "immune-autoimmune": 0
          }
        },
        {
          "name": [
            10424,
            10425
          ],
          "parent": [
            62750,
            61537
          ],
          "group": "couple",
          "fem_deceased": "N",
          "fem_suicide": "N",
          "mal_deceased": "N",
          "mal_suicide": "N"
        },
        {
          "name": [
            4503
          ],
          "parent": [
            66666,
            52220
          ],
          "group": "individual",
          "ind_deceased": "N",
          "ind_suicide": "N"
        },
        {
          "name": [
            42087
          ],
          "parent": [
            42088,
            42089
          ],
          "group": "individual",
          "ind_deceased": "N",
          "ind_suicide": "N"
        },
        {
          "name": [
            42088,
            42089
          ],
          "parent": [
            65690,
            23883
          ],
          "group": "couple",
          "fem_deceased": "N",
          "fem_suicide": "N",
          "mal_deceased": "Y",
          "mal_suicide": "Y",
          "mal_data": {
            "alcohol": 0,
            "psychosis": 0,
            "anxiety-non-trauma": 0,
            "somatic disorder": 0,
            "bipolar spectrum illness": 0,
            "depression": 0,
            "interpersonal trauma": 0,
            "PD-Cluster C-anxiety": 0,
            "PD-Cluster B-emotional": 0,
            "PD": 0,
            "Impulse control disorder": 0,
            "obesity": 0,
            "cardiovascular": 0,
            "COPD": 0,
            "asthma": 0,
            "immune-autoimmune": 0
          }
        },
        {
          "name": [
            11008,
            42089
          ],
          "parent": [
            65690,
            23883
          ],
          "group": "couple",
          "fem_deceased": "N",
          "fem_suicide": "N",
          "mal_deceased": "Y",
          "mal_suicide": "Y",
          "mal_data": {
            "alcohol": 0,
            "psychosis": 0,
            "anxiety-non-trauma": 0,
            "somatic disorder": 0,
            "bipolar spectrum illness": 0,
            "depression": 0,
            "interpersonal trauma": 0,
            "PD-Cluster C-anxiety": 0,
            "PD-Cluster B-emotional": 0,
            "PD": 0,
            "Impulse control disorder": 0,
            "obesity": 0,
            "cardiovascular": 0,
            "COPD": 0,
            "asthma": 0,
            "immune-autoimmune": 0
          }
        },
        {
          "name": [
            23690
          ],
          "parent": [
            27815,
            27814
          ],
          "group": "individual",
          "ind_deceased": "N",
          "ind_suicide": "N"
        },
        {
          "name": [
            10694
          ],
          "parent": [
            10424,
            10425
          ],
          "group": "individual",
          "ind_deceased": "N",
          "ind_suicide": "N"
        },
        {
          "name": [
            65151
          ],
          "parent": [
            65152,
            0
          ],
          "group": "individual",
          "ind_deceased": "N",
          "ind_suicide": "N"
        },
        {
          "name": [
            65152,
            0
          ],
          "parent": [
            6155,
            33108
          ],
          "group": "couple",
          "fem_deceased": "Y",
          "fem_suicide": "Y",
          "fem_data": {
            "alcohol": 0,
            "psychosis": 0,
            "anxiety-non-trauma": 0,
            "somatic disorder": 0,
            "bipolar spectrum illness": 0,
            "depression": 0,
            "interpersonal trauma": 0,
            "PD-Cluster C-anxiety": 0,
            "PD-Cluster B-emotional": 0,
            "PD": 0,
            "Impulse control disorder": 0,
            "obesity": 0,
            "cardiovascular": 0,
            "COPD": 0,
            "asthma": 0,
            "immune-autoimmune": 0
          }
        },
        {
          "name": [
            65152,
            39140
          ],
          "parent": [
            6155,
            33108
          ],
          "group": "couple",
          "fem_deceased": "Y",
          "fem_suicide": "Y",
          "mal_deceased": "N",
          "mal_suicide": "N",
          "fem_data": {
            "alcohol": 0,
            "psychosis": 0,
            "anxiety-non-trauma": 0,
            "somatic disorder": 0,
            "bipolar spectrum illness": 0,
            "depression": 0,
            "interpersonal trauma": 0,
            "PD-Cluster C-anxiety": 0,
            "PD-Cluster B-emotional": 0,
            "PD": 0,
            "Impulse control disorder": 0,
            "obesity": 0,
            "cardiovascular": 0,
            "COPD": 0,
            "asthma": 0,
            "immune-autoimmune": 0
          }
        },
        {
          "name": [
            9070
          ],
          "parent": [
            10424,
            10425
          ],
          "group": "individual",
          "ind_deceased": "N",
          "ind_suicide": "N"
        },
        {
          "name": [
            13977
          ],
          "parent": [
            30890,
            6270
          ],
          "group": "individual",
          "ind_deceased": "Y",
          "ind_suicide": "Y",
          "ind_data": {
            "alcohol": 0,
            "psychosis": 0,
            "anxiety-non-trauma": 0,
            "somatic disorder": 0,
            "bipolar spectrum illness": 0,
            "depression": 0,
            "interpersonal trauma": 0,
            "PD-Cluster C-anxiety": 0,
            "PD-Cluster B-emotional": 0,
            "PD": 0,
            "Impulse control disorder": 0,
            "obesity": 0,
            "cardiovascular": 0,
            "COPD": 0,
            "asthma": 0,
            "immune-autoimmune": 0
          }
        },
        {
          "name": [
            19013
          ],
          "parent": [
            20337,
            20338
          ],
          "group": "individual",
          "ind_deceased": "Y",
          "ind_suicide": "N"
        },
        {
          "name": [
            26326
          ],
          "parent": [
            54822,
            52220
          ],
          "group": "individual",
          "ind_deceased": "N",
          "ind_suicide": "N"
        },
        {
          "name": [
            59766
          ],
          "parent": [
            54822,
            52220
          ],
          "group": "individual",
          "ind_deceased": "N",
          "ind_suicide": "N"
        },
        {
          "name": [
            6155,
            33108
          ],
          "parent": [
            27807,
            27806
          ],
          "group": "couple",
          "fem_deceased": "N",
          "fem_suicide": "N",
          "mal_deceased": "N",
          "mal_suicide": "N"
        },
        {
          "name": [
            19968
          ],
          "parent": [
            54822,
            52220
          ],
          "group": "individual",
          "ind_deceased": "N",
          "ind_suicide": "N"
        },
        {
          "name": [
            54095
          ],
          "parent": [
            6269,
            6270
          ],
          "group": "individual",
          "ind_deceased": "N",
          "ind_suicide": "N"
        },
        {
          "name": [
            54798
          ],
          "parent": [
            6269,
            6270
          ],
          "group": "individual",
          "ind_deceased": "N",
          "ind_suicide": "N"
        },
        {
          "name": [
            13959
          ],
          "parent": [
            65448,
            66253
          ],
          "group": "individual",
          "ind_deceased": "N",
          "ind_suicide": "N"
        },
        {
          "name": [
            4684
          ],
          "parent": [
            65448,
            66253
          ],
          "group": "individual",
          "ind_deceased": "N",
          "ind_suicide": "N"
        },
        {
          "name": [
            37201
          ],
          "parent": [
            62634,
            2303
          ],
          "group": "individual",
          "ind_deceased": "N",
          "ind_suicide": "N"
        },
        {
          "name": [
            18999
          ],
          "parent": [
            6155,
            33108
          ],
          "group": "individual",
          "ind_deceased": "N",
          "ind_suicide": "N"
        },
        {
          "name": [
            58081
          ],
          "parent": [
            10424,
            10425
          ],
          "group": "individual",
          "ind_deceased": "N",
          "ind_suicide": "N"
        },
        {
          "name": [
            37548
          ],
          "parent": [
            65152,
            0
          ],
          "group": "individual",
          "ind_deceased": "N",
          "ind_suicide": "N"
        },
        {
          "name": [
            66660
          ],
          "parent": [
            66666,
            52220
          ],
          "group": "individual",
          "ind_deceased": "N",
          "ind_suicide": "N"
        },
        {
          "name": [
            62750,
            61537
          ],
          "parent": [
            40800,
            40801
          ],
          "group": "couple",
          "fem_deceased": "N",
          "fem_suicide": "N",
          "mal_deceased": "N",
          "mal_suicide": "N"
        },
        {
          "name": [
            14489
          ],
          "parent": [
            6269,
            6270
          ],
          "group": "individual",
          "ind_deceased": "N",
          "ind_suicide": "N"
        },
        {
          "name": [
            65690,
            23883
          ],
          "parent": [
            858,
            0
          ],
          "group": "couple",
          "fem_deceased": "N",
          "fem_suicide": "N",
          "mal_deceased": "N",
          "mal_suicide": "N"
        },
        {
          "name": [
            63435
          ],
          "parent": [
            11008,
            42089
          ],
          "group": "individual",
          "ind_deceased": "N",
          "ind_suicide": "N"
        },
        {
          "name": [
            39093
          ],
          "parent": [
            20337,
            20338
          ],
          "group": "individual",
          "ind_deceased": "N",
          "ind_suicide": "N"
        },
        {
          "name": [
            11711
          ],
          "parent": [
            39372,
            65765
          ],
          "group": "individual",
          "ind_deceased": "N",
          "ind_suicide": "N"
        }
    ],
    family176860: [
      {
        "name": [
          24211,
          31050
        ],
        "parent": "",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N",
        "group": "couple"
      },
      {
        "name": [
          129,
          128
        ],
        "parent": [
          24211,
          31050
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          6471,
          6470
        ],
        "parent": [
          24211,
          31050
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          6477,
          6476
        ],
        "parent": [
          129,
          128
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          13392,
          13390
        ],
        "parent": [
          24211,
          31050
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          52415,
          16142
        ],
        "parent": [
          129,
          128
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          19140,
          19139
        ],
        "parent": [
          129,
          128
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          26226
        ],
        "parent": [
          19438,
          19439
        ],
        "group": "individual",
        "ind_deceased": "Y",
        "ind_suicide": "N"
      },
      {
        "name": [
          31059,
          31060
        ],
        "parent": [
          6471,
          6470
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          44600,
          44599
        ],
        "parent": [
          13392,
          13390
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          56818,
          56817
        ],
        "parent": [
          19438,
          19439
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          56894,
          56893
        ],
        "parent": [
          37022,
          37023
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          62737
        ],
        "parent": [
          4020,
          4019
        ],
        "group": "individual",
        "ind_deceased": "Y",
        "ind_suicide": "N"
      },
      {
        "name": [
          16399
        ],
        "parent": [
          4020,
          4019
        ],
        "group": "individual",
        "ind_deceased": "Y",
        "ind_suicide": "N"
      },
      {
        "name": [
          24214,
          24213
        ],
        "parent": [
          13392,
          13390
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          4032,
          29868
        ],
        "parent": [
          4020,
          4019
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "Y",
        "mal_data": {
          "alcohol": 0,
          "psychosis": 0,
          "anxiety-non-trauma": 0,
          "somatic disorder": 0,
          "bipolar spectrum illness": 0,
          "depression": 0,
          "interpersonal trauma": 0,
          "PD-Cluster C-anxiety": 0,
          "PD-Cluster B-emotional": 0,
          "PD": 0,
          "Impulse control disorder": 0,
          "obesity": 0,
          "cardiovascular": 0,
          "COPD": 0,
          "asthma": 0,
          "immune-autoimmune": 0
        }
      },
      {
        "name": [
          29865,
          29868
        ],
        "parent": [
          4020,
          4019
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "Y",
        "mal_data": {
          "alcohol": 0,
          "psychosis": 0,
          "anxiety-non-trauma": 0,
          "somatic disorder": 0,
          "bipolar spectrum illness": 0,
          "depression": 0,
          "interpersonal trauma": 0,
          "PD-Cluster C-anxiety": 0,
          "PD-Cluster B-emotional": 0,
          "PD": 0,
          "Impulse control disorder": 0,
          "obesity": 0,
          "cardiovascular": 0,
          "COPD": 0,
          "asthma": 0,
          "immune-autoimmune": 0
        }
      },
      {
        "name": [
          32023,
          32022
        ],
        "parent": [
          62141,
          62142
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          36516
        ],
        "parent": [
          4020,
          4019
        ],
        "group": "individual",
        "ind_deceased": "Y",
        "ind_suicide": "N"
      },
      {
        "name": [
          40618
        ],
        "parent": [
          4020,
          4019
        ],
        "group": "individual",
        "ind_deceased": "Y",
        "ind_suicide": "N"
      },
      {
        "name": [
          47635
        ],
        "parent": [
          52424,
          52425
        ],
        "group": "individual",
        "ind_deceased": "Y",
        "ind_suicide": "N"
      },
      {
        "name": [
          55212,
          55210
        ],
        "parent": [
          62141,
          62142
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          60179,
          60180
        ],
        "parent": [
          37022,
          37023
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          66036,
          66037
        ],
        "parent": [
          19140,
          19139
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          4020,
          4019
        ],
        "parent": [
          24211,
          31050
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          4022,
          4023
        ],
        "parent": [
          4020,
          4019
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          4028,
          4030
        ],
        "parent": [
          4020,
          4019
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          4028,
          4029
        ],
        "parent": [
          4020,
          4019
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          4034
        ],
        "parent": [
          4020,
          4019
        ],
        "group": "individual",
        "ind_deceased": "Y",
        "ind_suicide": "N"
      },
      {
        "name": [
          4037
        ],
        "parent": [
          4020,
          4019
        ],
        "group": "individual",
        "ind_deceased": "Y",
        "ind_suicide": "N"
      },
      {
        "name": [
          19438,
          19439
        ],
        "parent": [
          24211,
          31050
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          19444,
          19443
        ],
        "parent": [
          19438,
          19439
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          19445
        ],
        "parent": [
          19438,
          19439
        ],
        "group": "individual",
        "ind_deceased": "Y",
        "ind_suicide": "N"
      },
      {
        "name": [
          19447
        ],
        "parent": [
          19438,
          19439
        ],
        "group": "individual",
        "ind_deceased": "Y",
        "ind_suicide": "N"
      },
      {
        "name": [
          19448
        ],
        "parent": [
          19438,
          19439
        ],
        "group": "individual",
        "ind_deceased": "Y",
        "ind_suicide": "N"
      },
      {
        "name": [
          32218
        ],
        "parent": [
          60511,
          60509
        ],
        "group": "individual",
        "ind_deceased": "Y",
        "ind_suicide": "N"
      },
      {
        "name": [
          37022,
          37023
        ],
        "parent": [
          24211,
          31050
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          37025,
          37024
        ],
        "parent": [
          60179,
          60180
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          45728,
          45727
        ],
        "parent": [
          56894,
          56893
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          45739,
          45738
        ],
        "parent": [
          56894,
          56893
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          47235,
          47236
        ],
        "parent": [
          42078,
          42079
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          48664,
          48663
        ],
        "parent": [
          37022,
          37023
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          33102,
          48667
        ],
        "parent": [
          48664,
          48663
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          53422
        ],
        "parent": [
          4032,
          29868
        ],
        "group": "individual",
        "ind_deceased": "Y",
        "ind_suicide": "N"
      },
      {
        "name": [
          60511,
          60509
        ],
        "parent": [
          19438,
          19439
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "Y",
        "mal_data": {
          "alcohol": 0,
          "psychosis": 0,
          "anxiety-non-trauma": 0,
          "somatic disorder": 0,
          "bipolar spectrum illness": 0,
          "depression": 0,
          "interpersonal trauma": 0,
          "PD-Cluster C-anxiety": 0,
          "PD-Cluster B-emotional": 0,
          "PD": 0,
          "Impulse control disorder": 0,
          "obesity": 0,
          "cardiovascular": 0,
          "COPD": 0,
          "asthma": 0,
          "immune-autoimmune": 0
        }
      },
      {
        "name": [
          60520
        ],
        "parent": [
          60511,
          60509
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          60522
        ],
        "parent": [
          60511,
          60509
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          60525
        ],
        "parent": [
          60511,
          60509
        ],
        "group": "individual",
        "ind_deceased": "Y",
        "ind_suicide": "N"
      },
      {
        "name": [
          60535
        ],
        "parent": [
          4028,
          4030
        ],
        "group": "individual",
        "ind_deceased": "Y",
        "ind_suicide": "N"
      },
      {
        "name": [
          60539
        ],
        "parent": [
          19438,
          19439
        ],
        "group": "individual",
        "ind_deceased": "Y",
        "ind_suicide": "N"
      },
      {
        "name": [
          60824,
          60825
        ],
        "parent": [
          44600,
          44599
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "Y",
        "mal_data": {
          "alcohol": 0,
          "psychosis": 0,
          "anxiety-non-trauma": 0,
          "somatic disorder": 0,
          "bipolar spectrum illness": 0,
          "depression": 0,
          "interpersonal trauma": 0,
          "PD-Cluster C-anxiety": 0,
          "PD-Cluster B-emotional": 0,
          "PD": 0,
          "Impulse control disorder": 0,
          "obesity": 0,
          "cardiovascular": 0,
          "COPD": 0,
          "asthma": 0,
          "immune-autoimmune": 0
        }
      },
      {
        "name": [
          3825
        ],
        "parent": [
          64985,
          66790
        ],
        "group": "individual",
        "ind_deceased": "Y",
        "ind_suicide": "N"
      },
      {
        "name": [
          4338,
          66840
        ],
        "parent": [
          52415,
          16142
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "N",
        "mal_suicide": "N"
      },
      {
        "name": [
          4338,
          4337
        ],
        "parent": [
          52415,
          16142
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          10762
        ],
        "parent": [
          52424,
          52425
        ],
        "group": "individual",
        "ind_deceased": "Y",
        "ind_suicide": "Y",
        "ind_data": {
          "alcohol": 0,
          "psychosis": 0,
          "anxiety-non-trauma": 0,
          "somatic disorder": 0,
          "bipolar spectrum illness": 0,
          "depression": 0,
          "interpersonal trauma": 0,
          "PD-Cluster C-anxiety": 0,
          "PD-Cluster B-emotional": 0,
          "PD": 0,
          "Impulse control disorder": 0,
          "obesity": 0,
          "cardiovascular": 0,
          "COPD": 0,
          "asthma": 0,
          "immune-autoimmune": 0
        }
      },
      {
        "name": [
          14467,
          14466
        ],
        "parent": [
          52555,
          2132
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          19993,
          19994
        ],
        "parent": [
          129,
          128
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          28267,
          28266
        ],
        "parent": [
          19140,
          19139
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          28271,
          28270
        ],
        "parent": [
          28267,
          28266
        ],
        "group": "couple",
        "fem_deceased": "N",
        "fem_suicide": "N",
        "mal_deceased": "N",
        "mal_suicide": "N"
      },
      {
        "name": [
          36877,
          36878
        ],
        "parent": [
          24211,
          31050
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          36882,
          36881
        ],
        "parent": [
          36877,
          36878
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          36885,
          36884
        ],
        "parent": [
          36882,
          36881
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "N",
        "mal_suicide": "N"
      },
      {
        "name": [
          39627
        ],
        "parent": [
          4338,
          66840
        ],
        "group": "individual",
        "ind_deceased": "Y",
        "ind_suicide": "N"
      },
      {
        "name": [
          42078,
          42079
        ],
        "parent": [
          52405,
          52406
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          42504
        ],
        "parent": [
          19438,
          19439
        ],
        "group": "individual",
        "ind_deceased": "Y",
        "ind_suicide": "N"
      },
      {
        "name": [
          44350
        ],
        "parent": [
          60824,
          60825
        ],
        "group": "individual",
        "ind_deceased": "Y",
        "ind_suicide": "N"
      },
      {
        "name": [
          44352
        ],
        "parent": [
          60824,
          60825
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          44354
        ],
        "parent": [
          60824,
          60825
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          44356
        ],
        "parent": [
          60824,
          60825
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          62141,
          62142
        ],
        "parent": [
          19438,
          19439
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          62944,
          62943
        ],
        "parent": [
          37025,
          37024
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "Y",
        "mal_data": {
          "alcohol": 0,
          "psychosis": 0,
          "anxiety-non-trauma": 0,
          "somatic disorder": 0,
          "bipolar spectrum illness": 0,
          "depression": 0,
          "interpersonal trauma": 0,
          "PD-Cluster C-anxiety": 0,
          "PD-Cluster B-emotional": 0,
          "PD": 0,
          "Impulse control disorder": 0,
          "obesity": 0,
          "cardiovascular": 0,
          "COPD": 0,
          "asthma": 0,
          "immune-autoimmune": 0
        }
      },
      {
        "name": [
          63067,
          63066
        ],
        "parent": [
          37022,
          37023
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          63082,
          63083
        ],
        "parent": [
          63067,
          63066
        ],
        "group": "couple",
        "fem_deceased": "N",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          63456,
          63455
        ],
        "parent": [
          4028,
          4030
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          63461,
          63463
        ],
        "parent": [
          63456,
          63455
        ],
        "group": "couple",
        "fem_deceased": "N",
        "fem_suicide": "N",
        "mal_deceased": "N",
        "mal_suicide": "N"
      },
      {
        "name": [
          376,
          375
        ],
        "parent": [
          56818,
          56817
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          377
        ],
        "parent": [
          376,
          375
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          380
        ],
        "parent": [
          376,
          375
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          381
        ],
        "parent": [
          376,
          375
        ],
        "group": "individual",
        "ind_deceased": "Y",
        "ind_suicide": "Y",
        "ind_data": {
          "alcohol": 0,
          "psychosis": 0,
          "anxiety-non-trauma": 0,
          "somatic disorder": 0,
          "bipolar spectrum illness": 0,
          "depression": 0,
          "interpersonal trauma": 0,
          "PD-Cluster C-anxiety": 0,
          "PD-Cluster B-emotional": 0,
          "PD": 1,
          "Impulse control disorder": 0,
          "obesity": 0,
          "cardiovascular": 0,
          "COPD": 1,
          "asthma": 0,
          "immune-autoimmune": 0
        }
      },
      {
        "name": [
          5379,
          5380
        ],
        "parent": [
          19438,
          19439
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          52405,
          52406
        ],
        "parent": [
          129,
          128
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          52423,
          52422
        ],
        "parent": [
          129,
          128
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          52424,
          52425
        ],
        "parent": [
          129,
          128
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          52555,
          2132
        ],
        "parent": [
          6477,
          6476
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          66836,
          66838
        ],
        "parent": [
          52415,
          16142
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          2138,
          55880
        ],
        "parent": [
          6477,
          6476
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          2138,
          2139
        ],
        "parent": [
          6477,
          6476
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          13174
        ],
        "parent": [
          19438,
          19439
        ],
        "group": "individual",
        "ind_deceased": "Y",
        "ind_suicide": "N"
      },
      {
        "name": [
          20099,
          20098
        ],
        "parent": [
          19140,
          19139
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          20975,
          20974
        ],
        "parent": [
          4028,
          4030
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          26146,
          26145
        ],
        "parent": [
          4028,
          4030
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          34028,
          34033
        ],
        "parent": [
          31059,
          31060
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          18887,
          37000
        ],
        "parent": [
          5379,
          5380
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          42514,
          42515
        ],
        "parent": [
          4022,
          4023
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          43215,
          43214
        ],
        "parent": [
          42078,
          42079
        ],
        "group": "couple",
        "fem_deceased": "N",
        "fem_suicide": "N",
        "mal_deceased": "N",
        "mal_suicide": "N"
      },
      {
        "name": [
          34950
        ],
        "parent": [
          44600,
          44599
        ],
        "group": "individual",
        "ind_deceased": "Y",
        "ind_suicide": "N"
      },
      {
        "name": [
          34952,
          34954
        ],
        "parent": [
          44600,
          44599
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          58027,
          58026
        ],
        "parent": [
          14467,
          14466
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          32265,
          32264
        ],
        "parent": [
          52424,
          52425
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          64985,
          66790
        ],
        "parent": [
          52405,
          52406
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          7819,
          7820
        ],
        "parent": [
          19993,
          19994
        ],
        "group": "couple",
        "fem_deceased": "N",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          7826
        ],
        "parent": [
          52424,
          52425
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          9353
        ],
        "parent": [
          4028,
          4030
        ],
        "group": "individual",
        "ind_deceased": "Y",
        "ind_suicide": "Y",
        "ind_data": {
          "alcohol": 0,
          "psychosis": 0,
          "anxiety-non-trauma": 0,
          "somatic disorder": 0,
          "bipolar spectrum illness": 0,
          "depression": 0,
          "interpersonal trauma": 0,
          "PD-Cluster C-anxiety": 0,
          "PD-Cluster B-emotional": 0,
          "PD": 0,
          "Impulse control disorder": 0,
          "obesity": 0,
          "cardiovascular": 0,
          "COPD": 0,
          "asthma": 0,
          "immune-autoimmune": 0
        }
      },
      {
        "name": [
          9357
        ],
        "parent": [
          4028,
          4030
        ],
        "group": "individual",
        "ind_deceased": "Y",
        "ind_suicide": "N"
      },
      {
        "name": [
          15857
        ],
        "parent": [
          64985,
          66790
        ],
        "group": "individual",
        "ind_deceased": "Y",
        "ind_suicide": "N"
      },
      {
        "name": [
          17963
        ],
        "parent": [
          64985,
          66790
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          17965
        ],
        "parent": [
          64985,
          66790
        ],
        "group": "individual",
        "ind_deceased": "Y",
        "ind_suicide": "N"
      },
      {
        "name": [
          17966
        ],
        "parent": [
          64985,
          66790
        ],
        "group": "individual",
        "ind_deceased": "Y",
        "ind_suicide": "N"
      },
      {
        "name": [
          17970,
          17969
        ],
        "parent": [
          64985,
          66790
        ],
        "group": "couple",
        "fem_deceased": "N",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "Y",
        "mal_data": {
          "alcohol": 0,
          "psychosis": 0,
          "anxiety-non-trauma": 0,
          "somatic disorder": 0,
          "bipolar spectrum illness": 0,
          "depression": 0,
          "interpersonal trauma": 0,
          "PD-Cluster C-anxiety": 0,
          "PD-Cluster B-emotional": 0,
          "PD": 0,
          "Impulse control disorder": 0,
          "obesity": 0,
          "cardiovascular": 0,
          "COPD": 0,
          "asthma": 0,
          "immune-autoimmune": 0
        }
      },
      {
        "name": [
          17975
        ],
        "parent": [
          64985,
          66790
        ],
        "group": "individual",
        "ind_deceased": "Y",
        "ind_suicide": "N"
      },
      {
        "name": [
          17976
        ],
        "parent": [
          64985,
          66790
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          17979
        ],
        "parent": [
          64985,
          66790
        ],
        "group": "individual",
        "ind_deceased": "Y",
        "ind_suicide": "N"
      },
      {
        "name": [
          17982
        ],
        "parent": [
          64985,
          66790
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          22761,
          22759
        ],
        "parent": [
          2138,
          55880
        ],
        "group": "couple",
        "fem_deceased": "N",
        "fem_suicide": "N",
        "mal_deceased": "N",
        "mal_suicide": "N"
      },
      {
        "name": [
          25853,
          25854
        ],
        "parent": [
          2138,
          55880
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          26696,
          55143
        ],
        "parent": [
          66036,
          66037
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          26699
        ],
        "parent": [
          4028,
          4030
        ],
        "group": "individual",
        "ind_deceased": "Y",
        "ind_suicide": "N"
      },
      {
        "name": [
          26703
        ],
        "parent": [
          4028,
          4030
        ],
        "group": "individual",
        "ind_deceased": "Y",
        "ind_suicide": "N"
      },
      {
        "name": [
          26706
        ],
        "parent": [
          4028,
          4030
        ],
        "group": "individual",
        "ind_deceased": "Y",
        "ind_suicide": "N"
      },
      {
        "name": [
          13387
        ],
        "parent": [
          4028,
          4030
        ],
        "group": "individual",
        "ind_deceased": "Y",
        "ind_suicide": "N"
      },
      {
        "name": [
          40228
        ],
        "parent": [
          62944,
          62943
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          40609,
          40608
        ],
        "parent": [
          19444,
          19443
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          45073,
          0
        ],
        "parent": [
          20099,
          20098
        ],
        "group": "couple",
        "fem_deceased": "N",
        "fem_suicide": "N"
      },
      {
        "name": [
          45073,
          61913
        ],
        "parent": [
          20099,
          20098
        ],
        "group": "couple",
        "fem_deceased": "N",
        "fem_suicide": "N",
        "mal_deceased": "N",
        "mal_suicide": "N"
      },
      {
        "name": [
          11515,
          11514
        ],
        "parent": [
          32023,
          32022
        ],
        "group": "couple",
        "fem_deceased": "N",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "Y",
        "mal_data": {
          "alcohol": 0,
          "psychosis": 0,
          "anxiety-non-trauma": 0,
          "somatic disorder": 0,
          "bipolar spectrum illness": 0,
          "depression": 0,
          "interpersonal trauma": 0,
          "PD-Cluster C-anxiety": 0,
          "PD-Cluster B-emotional": 0,
          "PD": 0,
          "Impulse control disorder": 0,
          "obesity": 0,
          "cardiovascular": 0,
          "COPD": 0,
          "asthma": 0,
          "immune-autoimmune": 0
        }
      },
      {
        "name": [
          11516
        ],
        "parent": [
          32023,
          32022
        ],
        "group": "individual",
        "ind_deceased": "Y",
        "ind_suicide": "N"
      },
      {
        "name": [
          11517
        ],
        "parent": [
          32023,
          32022
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          11521
        ],
        "parent": [
          32023,
          32022
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          20403,
          20401
        ],
        "parent": [
          33102,
          48667
        ],
        "group": "couple",
        "fem_deceased": "N",
        "fem_suicide": "N",
        "mal_deceased": "N",
        "mal_suicide": "N"
      },
      {
        "name": [
          33348,
          20401
        ],
        "parent": [
          33102,
          48667
        ],
        "group": "couple",
        "fem_deceased": "N",
        "fem_suicide": "N",
        "mal_deceased": "N",
        "mal_suicide": "N"
      },
      {
        "name": [
          38279
        ],
        "parent": [
          4338,
          66840
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          57101,
          17187
        ],
        "parent": [
          26146,
          26145
        ],
        "group": "couple",
        "fem_deceased": "N",
        "fem_suicide": "N",
        "mal_deceased": "N",
        "mal_suicide": "N"
      },
      {
        "name": [
          21081,
          59007
        ],
        "parent": [
          4338,
          66840
        ],
        "group": "couple",
        "fem_deceased": "N",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "Y",
        "mal_data": {
          "alcohol": 0,
          "psychosis": 0,
          "anxiety-non-trauma": 0,
          "somatic disorder": 0,
          "bipolar spectrum illness": 0,
          "depression": 0,
          "interpersonal trauma": 0,
          "PD-Cluster C-anxiety": 0,
          "PD-Cluster B-emotional": 0,
          "PD": 0,
          "Impulse control disorder": 0,
          "obesity": 0,
          "cardiovascular": 0,
          "COPD": 0,
          "asthma": 0,
          "immune-autoimmune": 0
        }
      },
      {
        "name": [
          13608
        ],
        "parent": [
          43215,
          43214
        ],
        "group": "individual",
        "ind_deceased": "Y",
        "ind_suicide": "Y",
        "ind_data": {
          "alcohol": 0,
          "psychosis": 0,
          "anxiety-non-trauma": 0,
          "somatic disorder": 0,
          "bipolar spectrum illness": 0,
          "depression": 0,
          "interpersonal trauma": 0,
          "PD-Cluster C-anxiety": 0,
          "PD-Cluster B-emotional": 0,
          "PD": 0,
          "Impulse control disorder": 0,
          "obesity": 0,
          "cardiovascular": 0,
          "COPD": 0,
          "asthma": 0,
          "immune-autoimmune": 0
        }
      },
      {
        "name": [
          13610
        ],
        "parent": [
          43215,
          43214
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          13611
        ],
        "parent": [
          43215,
          43214
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          13890,
          13889
        ],
        "parent": [
          47235,
          47236
        ],
        "group": "couple",
        "fem_deceased": "N",
        "fem_suicide": "N",
        "mal_deceased": "N",
        "mal_suicide": "N"
      },
      {
        "name": [
          34728
        ],
        "parent": [
          62944,
          62943
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          34731
        ],
        "parent": [
          62944,
          62943
        ],
        "group": "individual",
        "ind_deceased": "Y",
        "ind_suicide": "N"
      },
      {
        "name": [
          49441
        ],
        "parent": [
          20403,
          20401
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          57939
        ],
        "parent": [
          60511,
          60509
        ],
        "group": "individual",
        "ind_deceased": "Y",
        "ind_suicide": "N"
      },
      {
        "name": [
          2819
        ],
        "parent": [
          63461,
          63463
        ],
        "group": "individual",
        "ind_deceased": "Y",
        "ind_suicide": "Y",
        "ind_data": {
          "alcohol": 0,
          "psychosis": 0,
          "anxiety-non-trauma": 0,
          "somatic disorder": 0,
          "bipolar spectrum illness": 0,
          "depression": 0,
          "interpersonal trauma": 0,
          "PD-Cluster C-anxiety": 0,
          "PD-Cluster B-emotional": 0,
          "PD": 0,
          "Impulse control disorder": 0,
          "obesity": 0,
          "cardiovascular": 0,
          "COPD": 0,
          "asthma": 0,
          "immune-autoimmune": 0
        }
      },
      {
        "name": [
          2825
        ],
        "parent": [
          63461,
          63463
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          2827
        ],
        "parent": [
          63461,
          63463
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          24010
        ],
        "parent": [
          19438,
          19439
        ],
        "group": "individual",
        "ind_deceased": "Y",
        "ind_suicide": "N"
      },
      {
        "name": [
          56073
        ],
        "parent": [
          8352,
          8353
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          61225
        ],
        "parent": [
          45073,
          0
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          4294
        ],
        "parent": [
          17970,
          17969
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          5214
        ],
        "parent": [
          5215,
          5216
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          5215,
          5216
        ],
        "parent": [
          7819,
          7820
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "Y",
        "mal_deceased": "N",
        "mal_suicide": "N",
        "fem_data": {
          "alcohol": 0,
          "psychosis": 0,
          "anxiety-non-trauma": 1,
          "somatic disorder": 1,
          "bipolar spectrum illness": 0,
          "depression": 1,
          "interpersonal trauma": 0,
          "PD-Cluster C-anxiety": 0,
          "PD-Cluster B-emotional": 0,
          "PD": 1,
          "Impulse control disorder": 0,
          "obesity": 0,
          "cardiovascular": 0,
          "COPD": 1,
          "asthma": 0,
          "immune-autoimmune": 1
        }
      },
      {
        "name": [
          6785
        ],
        "parent": [
          20975,
          20974
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          14293
        ],
        "parent": [
          20975,
          20974
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          17185
        ],
        "parent": [
          57101,
          17187
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          32586
        ],
        "parent": [
          11515,
          11514
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          12112
        ],
        "parent": [
          20975,
          20974
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          24919,
          14509
        ],
        "parent": [
          14510,
          14511
        ],
        "group": "couple",
        "fem_deceased": "N",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "Y",
        "mal_data": {
          "alcohol": 0,
          "psychosis": 0,
          "anxiety-non-trauma": 0,
          "somatic disorder": 0,
          "bipolar spectrum illness": 0,
          "depression": 0,
          "interpersonal trauma": 0,
          "PD-Cluster C-anxiety": 0,
          "PD-Cluster B-emotional": 0,
          "PD": 0,
          "Impulse control disorder": 0,
          "obesity": 0,
          "cardiovascular": 1,
          "COPD": 0,
          "asthma": 0,
          "immune-autoimmune": 0
        }
      },
      {
        "name": [
          45901,
          14509
        ],
        "parent": [
          14510,
          14511
        ],
        "group": "couple",
        "fem_deceased": "N",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "Y",
        "mal_data": {
          "alcohol": 0,
          "psychosis": 0,
          "anxiety-non-trauma": 0,
          "somatic disorder": 0,
          "bipolar spectrum illness": 0,
          "depression": 0,
          "interpersonal trauma": 0,
          "PD-Cluster C-anxiety": 0,
          "PD-Cluster B-emotional": 0,
          "PD": 0,
          "Impulse control disorder": 0,
          "obesity": 0,
          "cardiovascular": 1,
          "COPD": 0,
          "asthma": 0,
          "immune-autoimmune": 0
        }
      },
      {
        "name": [
          53694,
          14509
        ],
        "parent": [
          14510,
          14511
        ],
        "group": "couple",
        "fem_deceased": "N",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "Y",
        "mal_data": {
          "alcohol": 0,
          "psychosis": 0,
          "anxiety-non-trauma": 0,
          "somatic disorder": 0,
          "bipolar spectrum illness": 0,
          "depression": 0,
          "interpersonal trauma": 0,
          "PD-Cluster C-anxiety": 0,
          "PD-Cluster B-emotional": 0,
          "PD": 0,
          "Impulse control disorder": 0,
          "obesity": 0,
          "cardiovascular": 1,
          "COPD": 0,
          "asthma": 0,
          "immune-autoimmune": 0
        }
      },
      {
        "name": [
          14510,
          14511
        ],
        "parent": [
          10894,
          3765
        ],
        "group": "couple",
        "fem_deceased": "N",
        "fem_suicide": "N",
        "mal_deceased": "N",
        "mal_suicide": "N"
      },
      {
        "name": [
          16598
        ],
        "parent": [
          10894,
          3765
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          18256,
          18257
        ],
        "parent": [
          42514,
          42515
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "N",
        "mal_suicide": "N"
      },
      {
        "name": [
          18491,
          47730
        ],
        "parent": [
          13890,
          13889
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "Y",
        "mal_deceased": "N",
        "mal_suicide": "N",
        "fem_data": {
          "alcohol": 0,
          "psychosis": 0,
          "anxiety-non-trauma": 1,
          "somatic disorder": 0,
          "bipolar spectrum illness": 0,
          "depression": 0,
          "interpersonal trauma": 0,
          "PD-Cluster C-anxiety": 0,
          "PD-Cluster B-emotional": 0,
          "PD": 0,
          "Impulse control disorder": 0,
          "obesity": 0,
          "cardiovascular": 0,
          "COPD": 0,
          "asthma": 0,
          "immune-autoimmune": 0
        }
      },
      {
        "name": [
          18491,
          4992
        ],
        "parent": [
          13890,
          13889
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "Y",
        "mal_deceased": "N",
        "mal_suicide": "N",
        "fem_data": {
          "alcohol": 0,
          "psychosis": 0,
          "anxiety-non-trauma": 1,
          "somatic disorder": 0,
          "bipolar spectrum illness": 0,
          "depression": 0,
          "interpersonal trauma": 0,
          "PD-Cluster C-anxiety": 0,
          "PD-Cluster B-emotional": 0,
          "PD": 0,
          "Impulse control disorder": 0,
          "obesity": 0,
          "cardiovascular": 0,
          "COPD": 0,
          "asthma": 0,
          "immune-autoimmune": 0
        }
      },
      {
        "name": [
          22924
        ],
        "parent": [
          22761,
          22759
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          67347,
          35997
        ],
        "parent": [
          35998,
          35999
        ],
        "group": "couple",
        "fem_deceased": "N",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "Y"
      },
      {
        "name": [
          17210,
          35997
        ],
        "parent": [
          35998,
          35999
        ],
        "group": "couple",
        "fem_deceased": "N",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "Y"
      },
      {
        "name": [
          35998,
          35999
        ],
        "parent": [
          25853,
          25854
        ],
        "group": "couple",
        "fem_deceased": "N",
        "fem_suicide": "N",
        "mal_deceased": "N",
        "mal_suicide": "N"
      },
      {
        "name": [
          42773
        ],
        "parent": [
          42774,
          42775
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          42774,
          42775
        ],
        "parent": [
          28271,
          28270
        ],
        "group": "couple",
        "fem_deceased": "N",
        "fem_suicide": "N",
        "mal_deceased": "N",
        "mal_suicide": "N"
      },
      {
        "name": [
          52885,
          37559
        ],
        "parent": [
          36885,
          36884
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "Y",
        "mal_deceased": "Y",
        "mal_suicide": "N",
        "fem_data": {
          "alcohol": 0,
          "psychosis": 0,
          "anxiety-non-trauma": 0,
          "somatic disorder": 0,
          "bipolar spectrum illness": 0,
          "depression": 1,
          "interpersonal trauma": 0,
          "PD-Cluster C-anxiety": 0,
          "PD-Cluster B-emotional": 0,
          "PD": 1,
          "Impulse control disorder": 0,
          "obesity": 0,
          "cardiovascular": 0,
          "COPD": 1,
          "asthma": 0,
          "immune-autoimmune": 0
        }
      },
      {
        "name": [
          52885,
          6584
        ],
        "parent": [
          36885,
          36884
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "Y",
        "mal_deceased": "N",
        "mal_suicide": "N",
        "fem_data": {
          "alcohol": 0,
          "psychosis": 0,
          "anxiety-non-trauma": 0,
          "somatic disorder": 0,
          "bipolar spectrum illness": 0,
          "depression": 1,
          "interpersonal trauma": 0,
          "PD-Cluster C-anxiety": 0,
          "PD-Cluster B-emotional": 0,
          "PD": 1,
          "Impulse control disorder": 0,
          "obesity": 0,
          "cardiovascular": 0,
          "COPD": 1,
          "asthma": 0,
          "immune-autoimmune": 0
        }
      },
      {
        "name": [
          59324
        ],
        "parent": [
          59325,
          59326
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          59325,
          59326
        ],
        "parent": [
          20975,
          20974
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "Y",
        "mal_deceased": "N",
        "mal_suicide": "N",
        "fem_data": {
          "alcohol": 0,
          "psychosis": 0,
          "anxiety-non-trauma": 0,
          "somatic disorder": 0,
          "bipolar spectrum illness": 0,
          "depression": 1,
          "interpersonal trauma": 0,
          "PD-Cluster C-anxiety": 0,
          "PD-Cluster B-emotional": 0,
          "PD": 0,
          "Impulse control disorder": 0,
          "obesity": 1,
          "cardiovascular": 1,
          "COPD": 0,
          "asthma": 0,
          "immune-autoimmune": 0
        }
      },
      {
        "name": [
          63298
        ],
        "parent": [
          5215,
          5216
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          11299
        ],
        "parent": [
          40609,
          40608
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          11785
        ],
        "parent": [
          57101,
          17187
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          12718
        ],
        "parent": [
          12719,
          12720
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          12719,
          12720
        ],
        "parent": [
          18887,
          37000
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "N",
        "mal_suicide": "N"
      },
      {
        "name": [
          38393,
          12720
        ],
        "parent": [
          18887,
          37000
        ],
        "group": "couple",
        "fem_deceased": "N",
        "fem_suicide": "N",
        "mal_deceased": "N",
        "mal_suicide": "N"
      },
      {
        "name": [
          60055
        ],
        "parent": [
          10894,
          3765
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          62361
        ],
        "parent": [
          62362,
          62363
        ],
        "group": "individual",
        "ind_deceased": "Y",
        "ind_suicide": "Y",
        "ind_data": {
          "alcohol": 0,
          "psychosis": 0,
          "anxiety-non-trauma": 1,
          "somatic disorder": 0,
          "bipolar spectrum illness": 0,
          "depression": 0,
          "interpersonal trauma": 0,
          "PD-Cluster C-anxiety": 0,
          "PD-Cluster B-emotional": 0,
          "PD": 0,
          "Impulse control disorder": 0,
          "obesity": 0,
          "cardiovascular": 0,
          "COPD": 0,
          "asthma": 0,
          "immune-autoimmune": 0
        }
      },
      {
        "name": [
          62362,
          62363
        ],
        "parent": [
          45739,
          45738
        ],
        "group": "couple",
        "fem_deceased": "N",
        "fem_suicide": "N",
        "mal_deceased": "N",
        "mal_suicide": "N"
      },
      {
        "name": [
          33618,
          5299
        ],
        "parent": [
          18256,
          18257
        ],
        "group": "couple",
        "fem_deceased": "N",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "Y",
        "mal_data": {
          "alcohol": 0,
          "psychosis": 0,
          "anxiety-non-trauma": 0,
          "somatic disorder": 0,
          "bipolar spectrum illness": 0,
          "depression": 1,
          "interpersonal trauma": 0,
          "PD-Cluster C-anxiety": 0,
          "PD-Cluster B-emotional": 0,
          "PD": 0,
          "Impulse control disorder": 0,
          "obesity": 0,
          "cardiovascular": 1,
          "COPD": 0,
          "asthma": 0,
          "immune-autoimmune": 0
        }
      },
      {
        "name": [
          13133
        ],
        "parent": [
          13134,
          31262
        ],
        "group": "individual",
        "ind_deceased": "Y",
        "ind_suicide": "Y",
        "ind_data": {
          "alcohol": 0,
          "psychosis": 0,
          "anxiety-non-trauma": 0,
          "somatic disorder": 0,
          "bipolar spectrum illness": 0,
          "depression": 0,
          "interpersonal trauma": 0,
          "PD-Cluster C-anxiety": 0,
          "PD-Cluster B-emotional": 0,
          "PD": 0,
          "Impulse control disorder": 0,
          "obesity": 0,
          "cardiovascular": 0,
          "COPD": 0,
          "asthma": 0,
          "immune-autoimmune": 0
        }
      },
      {
        "name": [
          13134,
          31262
        ],
        "parent": [
          58027,
          58026
        ],
        "group": "couple",
        "fem_deceased": "N",
        "fem_suicide": "N",
        "mal_deceased": "N",
        "mal_suicide": "N"
      },
      {
        "name": [
          14315
        ],
        "parent": [
          29092,
          41040
        ],
        "group": "individual",
        "ind_deceased": "Y",
        "ind_suicide": "N"
      },
      {
        "name": [
          30675,
          30314
        ],
        "parent": [
          42774,
          42775
        ],
        "group": "couple",
        "fem_deceased": "N",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "Y",
        "mal_data": {
          "alcohol": 0,
          "psychosis": 0,
          "anxiety-non-trauma": 0,
          "somatic disorder": 0,
          "bipolar spectrum illness": 0,
          "depression": 0,
          "interpersonal trauma": 0,
          "PD-Cluster C-anxiety": 0,
          "PD-Cluster B-emotional": 0,
          "PD": 0,
          "Impulse control disorder": 0,
          "obesity": 0,
          "cardiovascular": 0,
          "COPD": 0,
          "asthma": 1,
          "immune-autoimmune": 0
        }
      },
      {
        "name": [
          40882,
          30314
        ],
        "parent": [
          42774,
          42775
        ],
        "group": "couple",
        "fem_deceased": "N",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "Y",
        "mal_data": {
          "alcohol": 0,
          "psychosis": 0,
          "anxiety-non-trauma": 0,
          "somatic disorder": 0,
          "bipolar spectrum illness": 0,
          "depression": 0,
          "interpersonal trauma": 0,
          "PD-Cluster C-anxiety": 0,
          "PD-Cluster B-emotional": 0,
          "PD": 0,
          "Impulse control disorder": 0,
          "obesity": 0,
          "cardiovascular": 0,
          "COPD": 0,
          "asthma": 1,
          "immune-autoimmune": 0
        }
      },
      {
        "name": [
          51859
        ],
        "parent": [
          59325,
          59326
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          59674
        ],
        "parent": [
          5215,
          5216
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          1361
        ],
        "parent": [
          13890,
          13889
        ],
        "group": "individual",
        "ind_deceased": "Y",
        "ind_suicide": "Y",
        "ind_data": {
          "alcohol": 1,
          "psychosis": 0,
          "anxiety-non-trauma": 0,
          "somatic disorder": 0,
          "bipolar spectrum illness": 0,
          "depression": 1,
          "interpersonal trauma": 0,
          "PD-Cluster C-anxiety": 0,
          "PD-Cluster B-emotional": 0,
          "PD": 0,
          "Impulse control disorder": 0,
          "obesity": 0,
          "cardiovascular": 1,
          "COPD": 0,
          "asthma": 0,
          "immune-autoimmune": 0
        }
      },
      {
        "name": [
          1660,
          1661
        ],
        "parent": [
          1047,
          1046
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "N",
        "mal_suicide": "N"
      },
      {
        "name": [
          2019
        ],
        "parent": [
          57101,
          17187
        ],
        "group": "individual",
        "ind_deceased": "Y",
        "ind_suicide": "Y",
        "ind_data": {
          "alcohol": 0,
          "psychosis": 0,
          "anxiety-non-trauma": 0,
          "somatic disorder": 0,
          "bipolar spectrum illness": 0,
          "depression": 1,
          "interpersonal trauma": 0,
          "PD-Cluster C-anxiety": 0,
          "PD-Cluster B-emotional": 0,
          "PD": 0,
          "Impulse control disorder": 0,
          "obesity": 0,
          "cardiovascular": 0,
          "COPD": 0,
          "asthma": 0,
          "immune-autoimmune": 0
        }
      },
      {
        "name": [
          10370
        ],
        "parent": [
          58027,
          58026
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          19645
        ],
        "parent": [
          35998,
          35999
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          37557
        ],
        "parent": [
          52885,
          37559
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          48281
        ],
        "parent": [
          17970,
          17969
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          53130
        ],
        "parent": [
          62362,
          62363
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          64638
        ],
        "parent": [
          59325,
          59326
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          65585
        ],
        "parent": [
          1660,
          1661
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          11014
        ],
        "parent": [
          13134,
          31262
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          38392
        ],
        "parent": [
          38393,
          12720
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          54638
        ],
        "parent": [
          5215,
          5216
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          54685
        ],
        "parent": [
          59325,
          59326
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          57384
        ],
        "parent": [
          8352,
          8353
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          59383
        ],
        "parent": [
          24345,
          59385
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          24345,
          59385
        ],
        "parent": [
          34952,
          34954
        ],
        "group": "couple",
        "fem_deceased": "N",
        "fem_suicide": "N",
        "mal_deceased": "N",
        "mal_suicide": "N"
      },
      {
        "name": [
          39159,
          60644
        ],
        "parent": [
          24345,
          59385
        ],
        "group": "couple",
        "fem_deceased": "N",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "Y",
        "mal_data": {
          "alcohol": 0,
          "psychosis": 0,
          "anxiety-non-trauma": 0,
          "somatic disorder": 0,
          "bipolar spectrum illness": 0,
          "depression": 0,
          "interpersonal trauma": 0,
          "PD-Cluster C-anxiety": 0,
          "PD-Cluster B-emotional": 0,
          "PD": 0,
          "Impulse control disorder": 0,
          "obesity": 0,
          "cardiovascular": 1,
          "COPD": 0,
          "asthma": 0,
          "immune-autoimmune": 0
        }
      },
      {
        "name": [
          66329
        ],
        "parent": [
          66330,
          66331
        ],
        "group": "individual",
        "ind_deceased": "Y",
        "ind_suicide": "Y",
        "ind_data": {
          "alcohol": 0,
          "psychosis": 0,
          "anxiety-non-trauma": 0,
          "somatic disorder": 0,
          "bipolar spectrum illness": 0,
          "depression": 0,
          "interpersonal trauma": 0,
          "PD-Cluster C-anxiety": 0,
          "PD-Cluster B-emotional": 0,
          "PD": 0,
          "Impulse control disorder": 0,
          "obesity": 0,
          "cardiovascular": 0,
          "COPD": 0,
          "asthma": 0,
          "immune-autoimmune": 0
        }
      },
      {
        "name": [
          66330,
          66331
        ],
        "parent": [
          55212,
          55210
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "Y",
        "mal_deceased": "N",
        "mal_suicide": "N",
        "fem_data": {
          "alcohol": 0,
          "psychosis": 0,
          "anxiety-non-trauma": 0,
          "somatic disorder": 0,
          "bipolar spectrum illness": 0,
          "depression": 0,
          "interpersonal trauma": 0,
          "PD-Cluster C-anxiety": 0,
          "PD-Cluster B-emotional": 0,
          "PD": 0,
          "Impulse control disorder": 0,
          "obesity": 0,
          "cardiovascular": 0,
          "COPD": 0,
          "asthma": 0,
          "immune-autoimmune": 0
        }
      },
      {
        "name": [
          26090
        ],
        "parent": [
          58027,
          58026
        ],
        "group": "individual",
        "ind_deceased": "Y",
        "ind_suicide": "Y",
        "ind_data": {
          "alcohol": 0,
          "psychosis": 0,
          "anxiety-non-trauma": 0,
          "somatic disorder": 0,
          "bipolar spectrum illness": 0,
          "depression": 0,
          "interpersonal trauma": 0,
          "PD-Cluster C-anxiety": 0,
          "PD-Cluster B-emotional": 0,
          "PD": 0,
          "Impulse control disorder": 0,
          "obesity": 0,
          "cardiovascular": 0,
          "COPD": 0,
          "asthma": 0,
          "immune-autoimmune": 0
        }
      },
      {
        "name": [
          29092,
          41040
        ],
        "parent": [
          55212,
          55210
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          27983,
          41040
        ],
        "parent": [
          55212,
          55210
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          4134
        ],
        "parent": [
          36885,
          36884
        ],
        "group": "individual",
        "ind_deceased": "Y",
        "ind_suicide": "Y",
        "ind_data": {
          "alcohol": 0,
          "psychosis": 0,
          "anxiety-non-trauma": 0,
          "somatic disorder": 0,
          "bipolar spectrum illness": 0,
          "depression": 0,
          "interpersonal trauma": 0,
          "PD-Cluster C-anxiety": 0,
          "PD-Cluster B-emotional": 0,
          "PD": 0,
          "Impulse control disorder": 0,
          "obesity": 0,
          "cardiovascular": 0,
          "COPD": 0,
          "asthma": 0,
          "immune-autoimmune": 0
        }
      },
      {
        "name": [
          36250
        ],
        "parent": [
          11515,
          11514
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          14057
        ],
        "parent": [
          14058,
          14059
        ],
        "group": "individual",
        "ind_deceased": "Y",
        "ind_suicide": "N"
      },
      {
        "name": [
          14058,
          14059
        ],
        "parent": [
          8352,
          8353
        ],
        "group": "couple",
        "fem_deceased": "N",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "Y",
        "mal_data": {
          "alcohol": 0,
          "psychosis": 0,
          "anxiety-non-trauma": 0,
          "somatic disorder": 0,
          "bipolar spectrum illness": 1,
          "depression": 1,
          "interpersonal trauma": 0,
          "PD-Cluster C-anxiety": 0,
          "PD-Cluster B-emotional": 0,
          "PD": 0,
          "Impulse control disorder": 0,
          "obesity": 0,
          "cardiovascular": 0,
          "COPD": 0,
          "asthma": 0,
          "immune-autoimmune": 0
        }
      },
      {
        "name": [
          38705
        ],
        "parent": [
          21081,
          59007
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          54343
        ],
        "parent": [
          58027,
          58026
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          59758
        ],
        "parent": [
          40609,
          40608
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          10894,
          3765
        ],
        "parent": [
          17398,
          10895
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "Y",
        "mal_deceased": "Y",
        "mal_suicide": "N",
        "fem_data": {
          "alcohol": 0,
          "psychosis": 0,
          "anxiety-non-trauma": 0,
          "somatic disorder": 0,
          "bipolar spectrum illness": 0,
          "depression": 0,
          "interpersonal trauma": 0,
          "PD-Cluster C-anxiety": 0,
          "PD-Cluster B-emotional": 0,
          "PD": 0,
          "Impulse control disorder": 0,
          "obesity": 0,
          "cardiovascular": 0,
          "COPD": 0,
          "asthma": 0,
          "immune-autoimmune": 0
        }
      },
      {
        "name": [
          17398,
          10895
        ],
        "parent": [
          24214,
          24213
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          56685
        ],
        "parent": [
          56686,
          56687
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          56686,
          56687
        ],
        "parent": [
          22761,
          22759
        ],
        "group": "couple",
        "fem_deceased": "N",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "Y",
        "mal_data": {
          "alcohol": 1,
          "psychosis": 1,
          "anxiety-non-trauma": 0,
          "somatic disorder": 0,
          "bipolar spectrum illness": 0,
          "depression": 1,
          "interpersonal trauma": 0,
          "PD-Cluster C-anxiety": 0,
          "PD-Cluster B-emotional": 0,
          "PD": 0,
          "Impulse control disorder": 0,
          "obesity": 0,
          "cardiovascular": 0,
          "COPD": 0,
          "asthma": 0,
          "immune-autoimmune": 0
        }
      },
      {
        "name": [
          62035,
          56687
        ],
        "parent": [
          22761,
          22759
        ],
        "group": "couple",
        "fem_deceased": "N",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "Y",
        "mal_data": {
          "alcohol": 1,
          "psychosis": 1,
          "anxiety-non-trauma": 0,
          "somatic disorder": 0,
          "bipolar spectrum illness": 0,
          "depression": 1,
          "interpersonal trauma": 0,
          "PD-Cluster C-anxiety": 0,
          "PD-Cluster B-emotional": 0,
          "PD": 0,
          "Impulse control disorder": 0,
          "obesity": 0,
          "cardiovascular": 0,
          "COPD": 0,
          "asthma": 0,
          "immune-autoimmune": 0
        }
      },
      {
        "name": [
          1132,
          56687
        ],
        "parent": [
          22761,
          22759
        ],
        "group": "couple",
        "fem_deceased": "N",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "Y",
        "mal_data": {
          "alcohol": 1,
          "psychosis": 1,
          "anxiety-non-trauma": 0,
          "somatic disorder": 0,
          "bipolar spectrum illness": 0,
          "depression": 1,
          "interpersonal trauma": 0,
          "PD-Cluster C-anxiety": 0,
          "PD-Cluster B-emotional": 0,
          "PD": 0,
          "Impulse control disorder": 0,
          "obesity": 0,
          "cardiovascular": 0,
          "COPD": 0,
          "asthma": 0,
          "immune-autoimmune": 0
        }
      },
      {
        "name": [
          25725
        ],
        "parent": [
          63461,
          63463
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          42167
        ],
        "parent": [
          1660,
          1661
        ],
        "group": "individual",
        "ind_deceased": "Y",
        "ind_suicide": "Y",
        "ind_data": {
          "alcohol": 0,
          "psychosis": 0,
          "anxiety-non-trauma": 0,
          "somatic disorder": 0,
          "bipolar spectrum illness": 0,
          "depression": 0,
          "interpersonal trauma": 0,
          "PD-Cluster C-anxiety": 0,
          "PD-Cluster B-emotional": 0,
          "PD": 0,
          "Impulse control disorder": 0,
          "obesity": 0,
          "cardiovascular": 0,
          "COPD": 0,
          "asthma": 0,
          "immune-autoimmune": 0
        }
      },
      {
        "name": [
          48957
        ],
        "parent": [
          66330,
          66331
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          60558
        ],
        "parent": [
          35998,
          35999
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          53706
        ],
        "parent": [
          29092,
          41040
        ],
        "group": "individual",
        "ind_deceased": "Y",
        "ind_suicide": "Y",
        "ind_data": {
          "alcohol": 0,
          "psychosis": 0,
          "anxiety-non-trauma": 0,
          "somatic disorder": 0,
          "bipolar spectrum illness": 0,
          "depression": 0,
          "interpersonal trauma": 0,
          "PD-Cluster C-anxiety": 0,
          "PD-Cluster B-emotional": 0,
          "PD": 0,
          "Impulse control disorder": 0,
          "obesity": 0,
          "cardiovascular": 0,
          "COPD": 0,
          "asthma": 0,
          "immune-autoimmune": 0
        }
      },
      {
        "name": [
          2505
        ],
        "parent": [
          42774,
          42775
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          6582
        ],
        "parent": [
          52885,
          37559
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          34585
        ],
        "parent": [
          1660,
          1661
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          64130
        ],
        "parent": [
          14058,
          14059
        ],
        "group": "individual",
        "ind_deceased": "Y",
        "ind_suicide": "Y",
        "ind_data": {
          "alcohol": 0,
          "psychosis": 0,
          "anxiety-non-trauma": 0,
          "somatic disorder": 0,
          "bipolar spectrum illness": 0,
          "depression": 1,
          "interpersonal trauma": 0,
          "PD-Cluster C-anxiety": 0,
          "PD-Cluster B-emotional": 0,
          "PD": 0,
          "Impulse control disorder": 0,
          "obesity": 1,
          "cardiovascular": 1,
          "COPD": 0,
          "asthma": 0,
          "immune-autoimmune": 0
        }
      },
      {
        "name": [
          3593
        ],
        "parent": [
          29092,
          41040
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          17552
        ],
        "parent": [
          12719,
          12720
        ],
        "group": "individual",
        "ind_deceased": "Y",
        "ind_suicide": "N"
      },
      {
        "name": [
          4010
        ],
        "parent": [
          62035,
          56687
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          14486,
          14487
        ],
        "parent": [
          63082,
          63083
        ],
        "group": "couple",
        "fem_deceased": "N",
        "fem_suicide": "N",
        "mal_deceased": "N",
        "mal_suicide": "N"
      },
      {
        "name": [
          30956
        ],
        "parent": [
          45073,
          0
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          18267
        ],
        "parent": [
          14486,
          14487
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          37194
        ],
        "parent": [
          31867,
          31868
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          45518
        ],
        "parent": [
          22640,
          45520
        ],
        "group": "individual",
        "ind_deceased": "Y",
        "ind_suicide": "Y",
        "ind_data": {
          "alcohol": 0,
          "psychosis": 0,
          "anxiety-non-trauma": 0,
          "somatic disorder": 0,
          "bipolar spectrum illness": 0,
          "depression": 0,
          "interpersonal trauma": 0,
          "PD-Cluster C-anxiety": 0,
          "PD-Cluster B-emotional": 0,
          "PD": 0,
          "Impulse control disorder": 0,
          "obesity": 0,
          "cardiovascular": 0,
          "COPD": 0,
          "asthma": 0,
          "immune-autoimmune": 0
        }
      },
      {
        "name": [
          22640,
          45520
        ],
        "parent": [
          26696,
          55143
        ],
        "group": "couple",
        "fem_deceased": "N",
        "fem_suicide": "N",
        "mal_deceased": "N",
        "mal_suicide": "N"
      },
      {
        "name": [
          27712,
          45520
        ],
        "parent": [
          26696,
          55143
        ],
        "group": "couple",
        "fem_deceased": "N",
        "fem_suicide": "N",
        "mal_deceased": "N",
        "mal_suicide": "N"
      },
      {
        "name": [
          46087
        ],
        "parent": [
          14058,
          14059
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          9088
        ],
        "parent": [
          21086,
          9090
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          21086,
          9090
        ],
        "parent": [
          45073,
          0
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "Y",
        "mal_data": {
          "alcohol": 0,
          "psychosis": 0,
          "anxiety-non-trauma": 0,
          "somatic disorder": 0,
          "bipolar spectrum illness": 0,
          "depression": 1,
          "interpersonal trauma": 0,
          "PD-Cluster C-anxiety": 0,
          "PD-Cluster B-emotional": 0,
          "PD": 0,
          "Impulse control disorder": 0,
          "obesity": 0,
          "cardiovascular": 0,
          "COPD": 0,
          "asthma": 0,
          "immune-autoimmune": 0
        }
      },
      {
        "name": [
          58004,
          9090
        ],
        "parent": [
          45073,
          0
        ],
        "group": "couple",
        "fem_deceased": "N",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "Y",
        "mal_data": {
          "alcohol": 0,
          "psychosis": 0,
          "anxiety-non-trauma": 0,
          "somatic disorder": 0,
          "bipolar spectrum illness": 0,
          "depression": 1,
          "interpersonal trauma": 0,
          "PD-Cluster C-anxiety": 0,
          "PD-Cluster B-emotional": 0,
          "PD": 0,
          "Impulse control disorder": 0,
          "obesity": 0,
          "cardiovascular": 0,
          "COPD": 0,
          "asthma": 0,
          "immune-autoimmune": 0
        }
      },
      {
        "name": [
          30266
        ],
        "parent": [
          33348,
          20401
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          32577
        ],
        "parent": [
          57101,
          17187
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          36091
        ],
        "parent": [
          12719,
          12720
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          48860
        ],
        "parent": [
          1132,
          56687
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          47729
        ],
        "parent": [
          18491,
          47730
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          47956
        ],
        "parent": [
          8352,
          8353
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          49400
        ],
        "parent": [
          14486,
          14487
        ],
        "group": "individual",
        "ind_deceased": "Y",
        "ind_suicide": "Y",
        "ind_data": {
          "alcohol": 0,
          "psychosis": 0,
          "anxiety-non-trauma": 0,
          "somatic disorder": 0,
          "bipolar spectrum illness": 0,
          "depression": 0,
          "interpersonal trauma": 0,
          "PD-Cluster C-anxiety": 0,
          "PD-Cluster B-emotional": 0,
          "PD": 0,
          "Impulse control disorder": 0,
          "obesity": 0,
          "cardiovascular": 0,
          "COPD": 0,
          "asthma": 0,
          "immune-autoimmune": 0
        }
      },
      {
        "name": [
          52375
        ],
        "parent": [
          58027,
          58026
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          31631
        ],
        "parent": [
          31632,
          31633
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          31632,
          31633
        ],
        "parent": [
          12719,
          12720
        ],
        "group": "couple",
        "fem_deceased": "N",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "Y"
      },
      {
        "name": [
          59260
        ],
        "parent": [
          1132,
          56687
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          4894
        ],
        "parent": [
          34028,
          34033
        ],
        "group": "individual",
        "ind_deceased": "Y",
        "ind_suicide": "Y",
        "ind_data": {
          "alcohol": 0,
          "psychosis": 0,
          "anxiety-non-trauma": 0,
          "somatic disorder": 0,
          "bipolar spectrum illness": 0,
          "depression": 0,
          "interpersonal trauma": 0,
          "PD-Cluster C-anxiety": 0,
          "PD-Cluster B-emotional": 0,
          "PD": 0,
          "Impulse control disorder": 0,
          "obesity": 0,
          "cardiovascular": 0,
          "COPD": 0,
          "asthma": 0,
          "immune-autoimmune": 0
        }
      },
      {
        "name": [
          37550
        ],
        "parent": [
          20975,
          20974
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          37605
        ],
        "parent": [
          29865,
          29868
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          3606
        ],
        "parent": [
          34028,
          34033
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          48641
        ],
        "parent": [
          20975,
          20974
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          25574
        ],
        "parent": [
          17970,
          17969
        ],
        "group": "individual",
        "ind_deceased": "Y",
        "ind_suicide": "N"
      },
      {
        "name": [
          8352,
          8353
        ],
        "parent": [
          66036,
          66037
        ],
        "group": "couple",
        "fem_deceased": "N",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          11836
        ],
        "parent": [
          29092,
          41040
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          31866
        ],
        "parent": [
          31867,
          31868
        ],
        "group": "individual",
        "ind_deceased": "Y",
        "ind_suicide": "Y",
        "ind_data": {
          "alcohol": 0,
          "psychosis": 0,
          "anxiety-non-trauma": 0,
          "somatic disorder": 0,
          "bipolar spectrum illness": 0,
          "depression": 1,
          "interpersonal trauma": 0,
          "PD-Cluster C-anxiety": 0,
          "PD-Cluster B-emotional": 0,
          "PD": 0,
          "Impulse control disorder": 0,
          "obesity": 0,
          "cardiovascular": 0,
          "COPD": 0,
          "asthma": 0,
          "immune-autoimmune": 0
        }
      },
      {
        "name": [
          31867,
          31868
        ],
        "parent": [
          32265,
          32264
        ],
        "group": "couple",
        "fem_deceased": "N",
        "fem_suicide": "N",
        "mal_deceased": "N",
        "mal_suicide": "N"
      },
      {
        "name": [
          33347
        ],
        "parent": [
          33348,
          20401
        ],
        "group": "individual",
        "ind_deceased": "Y",
        "ind_suicide": "Y",
        "ind_data": {
          "alcohol": 1,
          "psychosis": 0,
          "anxiety-non-trauma": 0,
          "somatic disorder": 0,
          "bipolar spectrum illness": 1,
          "depression": 1,
          "interpersonal trauma": 0,
          "PD-Cluster C-anxiety": 0,
          "PD-Cluster B-emotional": 0,
          "PD": 0,
          "Impulse control disorder": 0,
          "obesity": 0,
          "cardiovascular": 0,
          "COPD": 0,
          "asthma": 0,
          "immune-autoimmune": 0
        }
      },
      {
        "name": [
          43753
        ],
        "parent": [
          1132,
          56687
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          52195
        ],
        "parent": [
          35998,
          35999
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          30602
        ],
        "parent": [
          27983,
          41040
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          24415
        ],
        "parent": [
          35998,
          35999
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          5289
        ],
        "parent": [
          11515,
          11514
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          22510
        ],
        "parent": [
          35998,
          35999
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          17361
        ],
        "parent": [
          14486,
          14487
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          27118
        ],
        "parent": [
          27126,
          27125
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          27120
        ],
        "parent": [
          27126,
          27125
        ],
        "group": "individual",
        "ind_deceased": "Y",
        "ind_suicide": "Y",
        "ind_data": {
          "alcohol": 1,
          "psychosis": 1,
          "anxiety-non-trauma": 0,
          "somatic disorder": 0,
          "bipolar spectrum illness": 0,
          "depression": 1,
          "interpersonal trauma": 0,
          "PD-Cluster C-anxiety": 0,
          "PD-Cluster B-emotional": 1,
          "PD": 1,
          "Impulse control disorder": 0,
          "obesity": 1,
          "cardiovascular": 0,
          "COPD": 0,
          "asthma": 0,
          "immune-autoimmune": 0
        }
      },
      {
        "name": [
          27126,
          27125
        ],
        "parent": [
          66836,
          66838
        ],
        "group": "couple",
        "fem_deceased": "N",
        "fem_suicide": "N",
        "mal_deceased": "N",
        "mal_suicide": "N"
      },
      {
        "name": [
          61137
        ],
        "parent": [
          29092,
          41040
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          3262
        ],
        "parent": [
          8352,
          8353
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          59768
        ],
        "parent": [
          58027,
          58026
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          10609
        ],
        "parent": [
          40609,
          40608
        ],
        "group": "individual",
        "ind_deceased": "Y",
        "ind_suicide": "Y",
        "ind_data": {
          "alcohol": 0,
          "psychosis": 0,
          "anxiety-non-trauma": 0,
          "somatic disorder": 0,
          "bipolar spectrum illness": 0,
          "depression": 0,
          "interpersonal trauma": 0,
          "PD-Cluster C-anxiety": 0,
          "PD-Cluster B-emotional": 0,
          "PD": 0,
          "Impulse control disorder": 0,
          "obesity": 0,
          "cardiovascular": 0,
          "COPD": 0,
          "asthma": 0,
          "immune-autoimmune": 0
        }
      },
      {
        "name": [
          29468
        ],
        "parent": [
          34028,
          34033
        ],
        "group": "individual",
        "ind_deceased": "Y",
        "ind_suicide": "N"
      },
      {
        "name": [
          30057
        ],
        "parent": [
          34028,
          34033
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          10009
        ],
        "parent": [
          58027,
          58026
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          5137
        ],
        "parent": [
          24919,
          14509
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          49461
        ],
        "parent": [
          18491,
          47730
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          49556
        ],
        "parent": [
          45901,
          14509
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          56401
        ],
        "parent": [
          31632,
          31633
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          1047,
          1046
        ],
        "parent": [
          45728,
          45727
        ],
        "group": "couple",
        "fem_deceased": "N",
        "fem_suicide": "N",
        "mal_deceased": "N",
        "mal_suicide": "N"
      },
      {
        "name": [
          47818
        ],
        "parent": [
          14486,
          14487
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          60685
        ],
        "parent": [
          8352,
          8353
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          28625
        ],
        "parent": [
          34028,
          34033
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          28541
        ],
        "parent": [
          31632,
          31633
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          33228
        ],
        "parent": [
          34028,
          34033
        ],
        "group": "individual",
        "ind_deceased": "Y",
        "ind_suicide": "N"
      },
      {
        "name": [
          11375
        ],
        "parent": [
          27712,
          45520
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          61301
        ],
        "parent": [
          33618,
          5299
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          58232
        ],
        "parent": [
          14058,
          14059
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          62382
        ],
        "parent": [
          33618,
          5299
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          20724
        ],
        "parent": [
          53694,
          14509
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          21786
        ],
        "parent": [
          31632,
          31633
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          61449
        ],
        "parent": [
          30675,
          30314
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          14348
        ],
        "parent": [
          18491,
          47730
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          21261
        ],
        "parent": [
          27712,
          45520
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          17282
        ],
        "parent": [
          39159,
          60644
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          36055
        ],
        "parent": [
          33618,
          5299
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          21862
        ],
        "parent": [
          40882,
          30314
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          661
        ],
        "parent": [
          67347,
          35997
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          23217
        ],
        "parent": [
          58004,
          9090
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          54894
        ],
        "parent": [
          17210,
          35997
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          38127
        ],
        "parent": [
          64985,
          66790
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      }
    ],
    family27251: [
    {
      "name": [
        14670,
        14671
      ],
      "parent": "",
      "fem_deceased": "Y",
      "fem_suicide": "N",
      "mal_deceased": "Y",
      "mal_suicide": "N",
      "group": "couple"
    },
    {
      "name": [
        7953,
        7952
      ],
      "parent": [
        37013,
        37012
      ],
      "group": "couple",
      "fem_deceased": "Y",
      "fem_suicide": "N",
      "mal_deceased": "Y",
      "mal_suicide": "N"
    },
    {
      "name": [
        15972,
        15973
      ],
      "parent": [
        35565,
        35566
      ],
      "group": "couple",
      "fem_deceased": "Y",
      "fem_suicide": "N",
      "mal_deceased": "Y",
      "mal_suicide": "N"
    },
    {
      "name": [
        26166,
        26165
      ],
      "parent": [
        15972,
        15973
      ],
      "group": "couple",
      "fem_deceased": "Y",
      "fem_suicide": "N",
      "mal_deceased": "Y",
      "mal_suicide": "N"
    },
    {
      "name": [
        32456,
        32457
      ],
      "parent": [
        35565,
        35566
      ],
      "group": "couple",
      "fem_deceased": "Y",
      "fem_suicide": "N",
      "mal_deceased": "Y",
      "mal_suicide": "N"
    },
    {
      "name": [
        35564,
        35567
      ],
      "parent": [
        35565,
        35566
      ],
      "group": "couple",
      "fem_deceased": "Y",
      "fem_suicide": "N",
      "mal_deceased": "Y",
      "mal_suicide": "N"
    },
    {
      "name": [
        35565,
        35566
      ],
      "parent": [
        14670,
        14671
      ],
      "group": "couple",
      "fem_deceased": "Y",
      "fem_suicide": "N",
      "mal_deceased": "Y",
      "mal_suicide": "N"
    },
    {
      "name": [
        35574,
        35575
      ],
      "parent": [
        35564,
        35567
      ],
      "group": "couple",
      "fem_deceased": "Y",
      "fem_suicide": "N",
      "mal_deceased": "Y",
      "mal_suicide": "N"
    },
    {
      "name": [
        35583,
        35584
      ],
      "parent": [
        35564,
        35567
      ],
      "group": "couple",
      "fem_deceased": "Y",
      "fem_suicide": "N",
      "mal_deceased": "Y",
      "mal_suicide": "N"
    },
    {
      "name": [
        37013,
        37012
      ],
      "parent": [
        37014,
        37015
      ],
      "group": "couple",
      "fem_deceased": "Y",
      "fem_suicide": "N",
      "mal_deceased": "Y",
      "mal_suicide": "N"
    },
    {
      "name": [
        37014,
        37015
      ],
      "parent": [
        14670,
        14671
      ],
      "group": "couple",
      "fem_deceased": "Y",
      "fem_suicide": "N",
      "mal_deceased": "Y",
      "mal_suicide": "N"
    },
    {
      "name": [
        37017,
        37016
      ],
      "parent": [
        37013,
        37012
      ],
      "group": "couple",
      "fem_deceased": "Y",
      "fem_suicide": "N",
      "mal_deceased": "Y",
      "mal_suicide": "N"
    },
    {
      "name": [
        47704,
        47703
      ],
      "parent": [
        35565,
        35566
      ],
      "group": "couple",
      "fem_deceased": "Y",
      "fem_suicide": "N",
      "mal_deceased": "Y",
      "mal_suicide": "N"
    },
    {
      "name": [
        48961,
        48962
      ],
      "parent": [
        40621,
        40622
      ],
      "group": "couple",
      "fem_deceased": "Y",
      "fem_suicide": "N",
      "mal_deceased": "Y",
      "mal_suicide": "N"
    },
    {
      "name": [
        56798,
        56797
      ],
      "parent": [
        56799,
        56800
      ],
      "group": "couple",
      "fem_deceased": "Y",
      "fem_suicide": "N",
      "mal_deceased": "Y",
      "mal_suicide": "N"
    },
    {
      "name": [
        56799,
        56800
      ],
      "parent": [
        14670,
        14671
      ],
      "group": "couple",
      "fem_deceased": "Y",
      "fem_suicide": "N",
      "mal_deceased": "Y",
      "mal_suicide": "N"
    },
    {
      "name": [
        56810,
        56811
      ],
      "parent": [
        56798,
        56797
      ],
      "group": "couple",
      "fem_deceased": "Y",
      "fem_suicide": "N",
      "mal_deceased": "Y",
      "mal_suicide": "N"
    },
    {
      "name": [
        58990,
        58989
      ],
      "parent": [
        37014,
        37015
      ],
      "group": "couple",
      "fem_deceased": "Y",
      "fem_suicide": "N",
      "mal_deceased": "Y",
      "mal_suicide": "N"
    },
    {
      "name": [
        59064,
        47481
      ],
      "parent": [
        15972,
        15973
      ],
      "group": "couple",
      "fem_deceased": "Y",
      "fem_suicide": "N",
      "mal_deceased": "Y",
      "mal_suicide": "N"
    },
    {
      "name": [
        63218,
        63213
      ],
      "parent": [
        47863,
        34743
      ],
      "group": "couple",
      "fem_deceased": "Y",
      "fem_suicide": "N",
      "mal_deceased": "Y",
      "mal_suicide": "N"
    },
    {
      "name": [
        1698,
        1697
      ],
      "parent": [
        35574,
        35575
      ],
      "group": "couple",
      "fem_deceased": "Y",
      "fem_suicide": "N",
      "mal_deceased": "Y",
      "mal_suicide": "N"
    },
    {
      "name": [
        16829
      ],
      "parent": [
        5857,
        5858
      ],
      "group": "individual",
      "ind_deceased": "Y",
      "ind_suicide": "N"
    },
    {
      "name": [
        38646,
        38647
      ],
      "parent": [
        58990,
        58989
      ],
      "group": "couple",
      "fem_deceased": "Y",
      "fem_suicide": "N",
      "mal_deceased": "Y",
      "mal_suicide": "N"
    },
    {
      "name": [
        38690,
        38689
      ],
      "parent": [
        35565,
        35566
      ],
      "group": "couple",
      "fem_deceased": "Y",
      "fem_suicide": "N",
      "mal_deceased": "Y",
      "mal_suicide": "N"
    },
    {
      "name": [
        38698,
        38697
      ],
      "parent": [
        38690,
        38689
      ],
      "group": "couple",
      "fem_deceased": "Y",
      "fem_suicide": "N",
      "mal_deceased": "Y",
      "mal_suicide": "N"
    },
    {
      "name": [
        41068,
        41069
      ],
      "parent": [
        37014,
        37015
      ],
      "group": "couple",
      "fem_deceased": "Y",
      "fem_suicide": "N",
      "mal_deceased": "Y",
      "mal_suicide": "N"
    },
    {
      "name": [
        42192
      ],
      "parent": [
        5857,
        5858
      ],
      "group": "individual",
      "ind_deceased": "Y",
      "ind_suicide": "N"
    },
    {
      "name": [
        55595,
        55596
      ],
      "parent": [
        14670,
        14671
      ],
      "group": "couple",
      "fem_deceased": "Y",
      "fem_suicide": "N",
      "mal_deceased": "Y",
      "mal_suicide": "N"
    },
    {
      "name": [
        55598,
        55597
      ],
      "parent": [
        55595,
        55596
      ],
      "group": "couple",
      "fem_deceased": "Y",
      "fem_suicide": "N",
      "mal_deceased": "Y",
      "mal_suicide": "N"
    },
    {
      "name": [
        55602,
        55601
      ],
      "parent": [
        55598,
        55597
      ],
      "group": "couple",
      "fem_deceased": "Y",
      "fem_suicide": "N",
      "mal_deceased": "Y",
      "mal_suicide": "N"
    },
    {
      "name": [
        64462,
        64463
      ],
      "parent": [
        7953,
        7952
      ],
      "group": "couple",
      "fem_deceased": "Y",
      "fem_suicide": "N",
      "mal_deceased": "Y",
      "mal_suicide": "N"
    },
    {
      "name": [
        20201,
        20202
      ],
      "parent": [
        14670,
        14671
      ],
      "group": "couple",
      "fem_deceased": "Y",
      "fem_suicide": "N",
      "mal_deceased": "Y",
      "mal_suicide": "N"
    },
    {
      "name": [
        20538,
        20539
      ],
      "parent": [
        37017,
        37016
      ],
      "group": "couple",
      "fem_deceased": "Y",
      "fem_suicide": "N",
      "mal_deceased": "Y",
      "mal_suicide": "N"
    },
    {
      "name": [
        25584,
        25585
      ],
      "parent": [
        37014,
        37015
      ],
      "group": "couple",
      "fem_deceased": "Y",
      "fem_suicide": "N",
      "mal_deceased": "Y",
      "mal_suicide": "N"
    },
    {
      "name": [
        31670,
        31669
      ],
      "parent": [
        62513,
        57616
      ],
      "group": "couple",
      "fem_deceased": "Y",
      "fem_suicide": "N",
      "mal_deceased": "N",
      "mal_suicide": "N"
    },
    {
      "name": [
        40621,
        40622
      ],
      "parent": [
        35565,
        35566
      ],
      "group": "couple",
      "fem_deceased": "Y",
      "fem_suicide": "N",
      "mal_deceased": "Y",
      "mal_suicide": "N"
    },
    {
      "name": [
        49266,
        49265
      ],
      "parent": [
        5857,
        5858
      ],
      "group": "couple",
      "fem_deceased": "Y",
      "fem_suicide": "N",
      "mal_deceased": "Y",
      "mal_suicide": "N"
    },
    {
      "name": [
        53238
      ],
      "parent": [
        5857,
        5858
      ],
      "group": "individual",
      "ind_deceased": "Y",
      "ind_suicide": "N"
    },
    {
      "name": [
        9542,
        9543
      ],
      "parent": [
        28702,
        28701
      ],
      "group": "couple",
      "fem_deceased": "Y",
      "fem_suicide": "N",
      "mal_deceased": "Y",
      "mal_suicide": "N"
    },
    {
      "name": [
        10403
      ],
      "parent": [
        26166,
        26165
      ],
      "group": "individual",
      "ind_deceased": "Y",
      "ind_suicide": "N"
    },
    {
      "name": [
        20126,
        20127
      ],
      "parent": [
        1698,
        1697
      ],
      "group": "couple",
      "fem_deceased": "N",
      "fem_suicide": "N",
      "mal_deceased": "N",
      "mal_suicide": "N"
    },
    {
      "name": [
        20657
      ],
      "parent": [
        46569,
        46570
      ],
      "group": "individual",
      "ind_deceased": "N",
      "ind_suicide": "N"
    },
    {
      "name": [
        28355
      ],
      "parent": [
        46569,
        46570
      ],
      "group": "individual",
      "ind_deceased": "Y",
      "ind_suicide": "N"
    },
    {
      "name": [
        32118,
        32117
      ],
      "parent": [
        56810,
        56811
      ],
      "group": "couple",
      "fem_deceased": "Y",
      "fem_suicide": "N",
      "mal_deceased": "Y",
      "mal_suicide": "N"
    },
    {
      "name": [
        32123,
        32122
      ],
      "parent": [
        32118,
        32117
      ],
      "group": "couple",
      "fem_deceased": "N",
      "fem_suicide": "N",
      "mal_deceased": "N",
      "mal_suicide": "N"
    },
    {
      "name": [
        53613,
        32122
      ],
      "parent": [
        32118,
        32117
      ],
      "group": "couple",
      "fem_deceased": "N",
      "fem_suicide": "N",
      "mal_deceased": "N",
      "mal_suicide": "N"
    },
    {
      "name": [
        33960,
        33961
      ],
      "parent": [
        63214,
        63215
      ],
      "group": "couple",
      "fem_deceased": "Y",
      "fem_suicide": "N",
      "mal_deceased": "Y",
      "mal_suicide": "N"
    },
    {
      "name": [
        35646,
        35645
      ],
      "parent": [
        26166,
        26165
      ],
      "group": "couple",
      "fem_deceased": "Y",
      "fem_suicide": "N",
      "mal_deceased": "Y",
      "mal_suicide": "N"
    },
    {
      "name": [
        35661,
        35662
      ],
      "parent": [
        35646,
        35645
      ],
      "group": "couple",
      "fem_deceased": "N",
      "fem_suicide": "N",
      "mal_deceased": "Y",
      "mal_suicide": "N"
    },
    {
      "name": [
        47863,
        34743
      ],
      "parent": [
        35565,
        35566
      ],
      "group": "couple",
      "fem_deceased": "Y",
      "fem_suicide": "N",
      "mal_deceased": "Y",
      "mal_suicide": "N"
    },
    {
      "name": [
        2909,
        2908
      ],
      "parent": [
        43885,
        13800
      ],
      "group": "couple",
      "fem_deceased": "Y",
      "fem_suicide": "N",
      "mal_deceased": "N",
      "mal_suicide": "N"
    },
    {
      "name": [
        5857,
        5858
      ],
      "parent": [
        37017,
        37016
      ],
      "group": "couple",
      "fem_deceased": "Y",
      "fem_suicide": "N",
      "mal_deceased": "Y",
      "mal_suicide": "N"
    },
    {
      "name": [
        5859,
        5860
      ],
      "parent": [
        49266,
        49265
      ],
      "group": "couple",
      "fem_deceased": "N",
      "fem_suicide": "N",
      "mal_deceased": "N",
      "mal_suicide": "N"
    },
    {
      "name": [
        12977,
        12978
      ],
      "parent": [
        56799,
        56800
      ],
      "group": "couple",
      "fem_deceased": "Y",
      "fem_suicide": "N",
      "mal_deceased": "Y",
      "mal_suicide": "N"
    },
    {
      "name": [
        61446,
        61447
      ],
      "parent": [
        20201,
        20202
      ],
      "group": "couple",
      "fem_deceased": "Y",
      "fem_suicide": "N",
      "mal_deceased": "Y",
      "mal_suicide": "N"
    },
    {
      "name": [
        62513,
        57616
      ],
      "parent": [
        41068,
        41069
      ],
      "group": "couple",
      "fem_deceased": "Y",
      "fem_suicide": "N",
      "mal_deceased": "Y",
      "mal_suicide": "N"
    },
    {
      "name": [
        63214,
        63215
      ],
      "parent": [
        25584,
        25585
      ],
      "group": "couple",
      "fem_deceased": "Y",
      "fem_suicide": "N",
      "mal_deceased": "Y",
      "mal_suicide": "N"
    },
    {
      "name": [
        65736
      ],
      "parent": [
        26166,
        26165
      ],
      "group": "individual",
      "ind_deceased": "Y",
      "ind_suicide": "N"
    },
    {
      "name": [
        65737
      ],
      "parent": [
        26166,
        26165
      ],
      "group": "individual",
      "ind_deceased": "Y",
      "ind_suicide": "N"
    },
    {
      "name": [
        65738
      ],
      "parent": [
        26166,
        26165
      ],
      "group": "individual",
      "ind_deceased": "Y",
      "ind_suicide": "N"
    },
    {
      "name": [
        65740,
        65739
      ],
      "parent": [
        26166,
        26165
      ],
      "group": "couple",
      "fem_deceased": "Y",
      "fem_suicide": "N",
      "mal_deceased": "Y",
      "mal_suicide": "Y",
      "mal_data": {
        "alcohol": 0,
        "psychosis": 0,
        "anxiety-non-trauma": 0,
        "somatic disorder": 0,
        "bipolar spectrum illness": 0,
        "depression": 0,
        "interpersonal trauma": 0,
        "PD-Cluster C-anxiety": 0,
        "PD-Cluster B-emotional": 0,
        "PD": 0,
        "Impulse control disorder": 0,
        "obesity": 0,
        "cardiovascular": 0,
        "COPD": 0,
        "asthma": 0,
        "immune-autoimmune": 0
      }
    },
    {
      "name": [
        65741
      ],
      "parent": [
        26166,
        26165
      ],
      "group": "individual",
      "ind_deceased": "Y",
      "ind_suicide": "N"
    },
    {
      "name": [
        43885,
        13800
      ],
      "parent": [
        59064,
        47481
      ],
      "group": "couple",
      "fem_deceased": "Y",
      "fem_suicide": "N",
      "mal_deceased": "Y",
      "mal_suicide": "N"
    },
    {
      "name": [
        17418,
        64364
      ],
      "parent": [
        61446,
        61447
      ],
      "group": "couple",
      "fem_deceased": "Y",
      "fem_suicide": "N",
      "mal_deceased": "Y",
      "mal_suicide": "N"
    },
    {
      "name": [
        17420,
        0
      ],
      "parent": [
        61446,
        61447
      ],
      "group": "couple",
      "fem_deceased": "N",
      "fem_suicide": "N"
    },
    {
      "name": [
        17420,
        17421
      ],
      "parent": [
        61446,
        61447
      ],
      "group": "couple",
      "fem_deceased": "N",
      "fem_suicide": "N",
      "mal_deceased": "Y",
      "mal_suicide": "N"
    },
    {
      "name": [
        29952,
        0
      ],
      "parent": [
        64462,
        64463
      ],
      "group": "couple",
      "fem_deceased": "Y",
      "fem_suicide": "N"
    },
    {
      "name": [
        29956,
        29955
      ],
      "parent": [
        64462,
        64463
      ],
      "group": "couple",
      "fem_deceased": "N",
      "fem_suicide": "N",
      "mal_deceased": "N",
      "mal_suicide": "N"
    },
    {
      "name": [
        34956,
        34955
      ],
      "parent": [
        38646,
        38647
      ],
      "group": "couple",
      "fem_deceased": "N",
      "fem_suicide": "N",
      "mal_deceased": "Y",
      "mal_suicide": "N"
    },
    {
      "name": [
        36244
      ],
      "parent": [
        5857,
        5858
      ],
      "group": "individual",
      "ind_deceased": "Y",
      "ind_suicide": "N"
    },
    {
      "name": [
        36251,
        36252
      ],
      "parent": [
        5857,
        5858
      ],
      "group": "couple",
      "fem_deceased": "Y",
      "fem_suicide": "N",
      "mal_deceased": "Y",
      "mal_suicide": "N"
    },
    {
      "name": [
        36257
      ],
      "parent": [
        5857,
        5858
      ],
      "group": "individual",
      "ind_deceased": "Y",
      "ind_suicide": "Y",
      "ind_data": {
        "alcohol": 0,
        "psychosis": 0,
        "anxiety-non-trauma": 0,
        "somatic disorder": 0,
        "bipolar spectrum illness": 0,
        "depression": 0,
        "interpersonal trauma": 0,
        "PD-Cluster C-anxiety": 0,
        "PD-Cluster B-emotional": 0,
        "PD": 0,
        "Impulse control disorder": 0,
        "obesity": 0,
        "cardiovascular": 0,
        "COPD": 0,
        "asthma": 0,
        "immune-autoimmune": 0
      }
    },
    {
      "name": [
        36714
      ],
      "parent": [
        46569,
        46570
      ],
      "group": "individual",
      "ind_deceased": "N",
      "ind_suicide": "N"
    },
    {
      "name": [
        38467
      ],
      "parent": [
        4288,
        4287
      ],
      "group": "individual",
      "ind_deceased": "N",
      "ind_suicide": "N"
    },
    {
      "name": [
        54023,
        54022
      ],
      "parent": [
        35565,
        35566
      ],
      "group": "couple",
      "fem_deceased": "Y",
      "fem_suicide": "N",
      "mal_deceased": "Y",
      "mal_suicide": "N"
    },
    {
      "name": [
        5787,
        53418
      ],
      "parent": [
        56799,
        56800
      ],
      "group": "couple",
      "fem_deceased": "Y",
      "fem_suicide": "N",
      "mal_deceased": "Y",
      "mal_suicide": "N"
    },
    {
      "name": [
        5790,
        5791
      ],
      "parent": [
        5787,
        53418
      ],
      "group": "couple",
      "fem_deceased": "Y",
      "fem_suicide": "N",
      "mal_deceased": "Y",
      "mal_suicide": "N"
    },
    {
      "name": [
        28702,
        28701
      ],
      "parent": [
        47704,
        47703
      ],
      "group": "couple",
      "fem_deceased": "Y",
      "fem_suicide": "N",
      "mal_deceased": "Y",
      "mal_suicide": "N"
    },
    {
      "name": [
        32909,
        32908
      ],
      "parent": [
        35574,
        35575
      ],
      "group": "couple",
      "fem_deceased": "N",
      "fem_suicide": "N",
      "mal_deceased": "Y",
      "mal_suicide": "N"
    },
    {
      "name": [
        46569,
        46570
      ],
      "parent": [
        39015,
        39013
      ],
      "group": "couple",
      "fem_deceased": "Y",
      "fem_suicide": "N",
      "mal_deceased": "Y",
      "mal_suicide": "N"
    },
    {
      "name": [
        58027,
        58026
      ],
      "parent": [
        33960,
        33961
      ],
      "group": "couple",
      "fem_deceased": "Y",
      "fem_suicide": "N",
      "mal_deceased": "Y",
      "mal_suicide": "N"
    },
    {
      "name": [
        23295,
        23294
      ],
      "parent": [
        47863,
        34743
      ],
      "group": "couple",
      "fem_deceased": "Y",
      "fem_suicide": "N",
      "mal_deceased": "Y",
      "mal_suicide": "N"
    },
    {
      "name": [
        24637,
        24636
      ],
      "parent": [
        12977,
        12978
      ],
      "group": "couple",
      "fem_deceased": "N",
      "fem_suicide": "N",
      "mal_deceased": "Y",
      "mal_suicide": "N"
    },
    {
      "name": [
        39015,
        39013
      ],
      "parent": [
        40621,
        40622
      ],
      "group": "couple",
      "fem_deceased": "Y",
      "fem_suicide": "N",
      "mal_deceased": "Y",
      "mal_suicide": "N"
    },
    {
      "name": [
        39022,
        39021
      ],
      "parent": [
        32456,
        32457
      ],
      "group": "couple",
      "fem_deceased": "Y",
      "fem_suicide": "N",
      "mal_deceased": "Y",
      "mal_suicide": "N"
    },
    {
      "name": [
        41000,
        41004
      ],
      "parent": [
        63214,
        63215
      ],
      "group": "couple",
      "fem_deceased": "Y",
      "fem_suicide": "N",
      "mal_deceased": "Y",
      "mal_suicide": "N"
    },
    {
      "name": [
        62743,
        62744
      ],
      "parent": [
        5790,
        5791
      ],
      "group": "couple",
      "fem_deceased": "Y",
      "fem_suicide": "N",
      "mal_deceased": "Y",
      "mal_suicide": "N"
    },
    {
      "name": [
        3406,
        3405
      ],
      "parent": [
        41000,
        41004
      ],
      "group": "couple",
      "fem_deceased": "Y",
      "fem_suicide": "N",
      "mal_deceased": "N",
      "mal_suicide": "N"
    },
    {
      "name": [
        4140,
        4139
      ],
      "parent": [
        39022,
        39021
      ],
      "group": "couple",
      "fem_deceased": "Y",
      "fem_suicide": "N",
      "mal_deceased": "Y",
      "mal_suicide": "N"
    },
    {
      "name": [
        4288,
        4287
      ],
      "parent": [
        48961,
        48962
      ],
      "group": "couple",
      "fem_deceased": "Y",
      "fem_suicide": "N",
      "mal_deceased": "Y",
      "mal_suicide": "N"
    },
    {
      "name": [
        4302,
        4303
      ],
      "parent": [
        38698,
        38697
      ],
      "group": "couple",
      "fem_deceased": "Y",
      "fem_suicide": "N",
      "mal_deceased": "N",
      "mal_suicide": "N"
    },
    {
      "name": [
        4304,
        4305
      ],
      "parent": [
        38698,
        38697
      ],
      "group": "couple",
      "fem_deceased": "N",
      "fem_suicide": "N",
      "mal_deceased": "Y",
      "mal_suicide": "N"
    },
    {
      "name": [
        5278,
        5277
      ],
      "parent": [
        35574,
        35575
      ],
      "group": "couple",
      "fem_deceased": "Y",
      "fem_suicide": "N",
      "mal_deceased": "Y",
      "mal_suicide": "N"
    },
    {
      "name": [
        5287,
        5288
      ],
      "parent": [
        35574,
        35575
      ],
      "group": "couple",
      "fem_deceased": "N",
      "fem_suicide": "N",
      "mal_deceased": "Y",
      "mal_suicide": "N"
    },
    {
      "name": [
        25529,
        25531
      ],
      "parent": [
        55602,
        55601
      ],
      "group": "couple",
      "fem_deceased": "Y",
      "fem_suicide": "N",
      "mal_deceased": "N",
      "mal_suicide": "N"
    },
    {
      "name": [
        35966,
        35965
      ],
      "parent": [
        56810,
        56811
      ],
      "group": "couple",
      "fem_deceased": "N",
      "fem_suicide": "N",
      "mal_deceased": "Y",
      "mal_suicide": "N"
    },
    {
      "name": [
        55424
      ],
      "parent": [
        2225,
        2224
      ],
      "group": "individual",
      "ind_deceased": "N",
      "ind_suicide": "N"
    },
    {
      "name": [
        32164,
        56402
      ],
      "parent": [
        20538,
        20539
      ],
      "group": "couple",
      "fem_deceased": "N",
      "fem_suicide": "N",
      "mal_deceased": "N",
      "mal_suicide": "N"
    },
    {
      "name": [
        18799
      ],
      "parent": [
        4288,
        4287
      ],
      "group": "individual",
      "ind_deceased": "N",
      "ind_suicide": "N"
    },
    {
      "name": [
        18801
      ],
      "parent": [
        4288,
        4287
      ],
      "group": "individual",
      "ind_deceased": "Y",
      "ind_suicide": "Y",
      "ind_data": {
        "alcohol": 0,
        "psychosis": 0,
        "anxiety-non-trauma": 0,
        "somatic disorder": 0,
        "bipolar spectrum illness": 0,
        "depression": 0,
        "interpersonal trauma": 0,
        "PD-Cluster C-anxiety": 0,
        "PD-Cluster B-emotional": 0,
        "PD": 0,
        "Impulse control disorder": 0,
        "obesity": 0,
        "cardiovascular": 0,
        "COPD": 0,
        "asthma": 0,
        "immune-autoimmune": 0
      }
    },
    {
      "name": [
        18814
      ],
      "parent": [
        4288,
        4287
      ],
      "group": "individual",
      "ind_deceased": "N",
      "ind_suicide": "N"
    },
    {
      "name": [
        18833,
        18834
      ],
      "parent": [
        46569,
        46570
      ],
      "group": "couple",
      "fem_deceased": "Y",
      "fem_suicide": "Y",
      "mal_deceased": "N",
      "mal_suicide": "N",
      "fem_data": {
        "alcohol": 0,
        "psychosis": 0,
        "anxiety-non-trauma": 0,
        "somatic disorder": 0,
        "bipolar spectrum illness": 0,
        "depression": 0,
        "interpersonal trauma": 0,
        "PD-Cluster C-anxiety": 0,
        "PD-Cluster B-emotional": 0,
        "PD": 0,
        "Impulse control disorder": 0,
        "obesity": 0,
        "cardiovascular": 0,
        "COPD": 0,
        "asthma": 0,
        "immune-autoimmune": 0
      }
    },
    {
      "name": [
        18840
      ],
      "parent": [
        46569,
        46570
      ],
      "group": "individual",
      "ind_deceased": "N",
      "ind_suicide": "N"
    },
    {
      "name": [
        22350,
        22352
      ],
      "parent": [
        25529,
        25531
      ],
      "group": "couple",
      "fem_deceased": "N",
      "fem_suicide": "N",
      "mal_deceased": "Y",
      "mal_suicide": "N"
    },
    {
      "name": [
        24406,
        17264
      ],
      "parent": [
        5278,
        5277
      ],
      "group": "couple",
      "fem_deceased": "N",
      "fem_suicide": "N",
      "mal_deceased": "N",
      "mal_suicide": "N"
    },
    {
      "name": [
        49073,
        49072
      ],
      "parent": [
        34956,
        34955
      ],
      "group": "couple",
      "fem_deceased": "N",
      "fem_suicide": "N",
      "mal_deceased": "N",
      "mal_suicide": "N"
    },
    {
      "name": [
        2225,
        2224
      ],
      "parent": [
        24637,
        24636
      ],
      "group": "couple",
      "fem_deceased": "Y",
      "fem_suicide": "N",
      "mal_deceased": "Y",
      "mal_suicide": "N"
    },
    {
      "name": [
        2235
      ],
      "parent": [
        2225,
        2224
      ],
      "group": "individual",
      "ind_deceased": "N",
      "ind_suicide": "N"
    },
    {
      "name": [
        2236
      ],
      "parent": [
        2225,
        2224
      ],
      "group": "individual",
      "ind_deceased": "N",
      "ind_suicide": "N"
    },
    {
      "name": [
        2237
      ],
      "parent": [
        2225,
        2224
      ],
      "group": "individual",
      "ind_deceased": "N",
      "ind_suicide": "N"
    },
    {
      "name": [
        2238
      ],
      "parent": [
        2225,
        2224
      ],
      "group": "individual",
      "ind_deceased": "N",
      "ind_suicide": "N"
    },
    {
      "name": [
        2239
      ],
      "parent": [
        2225,
        2224
      ],
      "group": "individual",
      "ind_deceased": "N",
      "ind_suicide": "N"
    },
    {
      "name": [
        48454,
        2240
      ],
      "parent": [
        2225,
        2224
      ],
      "group": "couple",
      "fem_deceased": "N",
      "fem_suicide": "N",
      "mal_deceased": "Y",
      "mal_suicide": "Y"
    },
    {
      "name": [
        2241
      ],
      "parent": [
        2225,
        2224
      ],
      "group": "individual",
      "ind_deceased": "Y",
      "ind_suicide": "N"
    },
    {
      "name": [
        19047
      ],
      "parent": [
        31670,
        31669
      ],
      "group": "individual",
      "ind_deceased": "N",
      "ind_suicide": "N"
    },
    {
      "name": [
        24348
      ],
      "parent": [
        31670,
        31669
      ],
      "group": "individual",
      "ind_deceased": "N",
      "ind_suicide": "N"
    },
    {
      "name": [
        24353
      ],
      "parent": [
        31670,
        31669
      ],
      "group": "individual",
      "ind_deceased": "Y",
      "ind_suicide": "Y",
      "ind_data": {
        "alcohol": 0,
        "psychosis": 0,
        "anxiety-non-trauma": 0,
        "somatic disorder": 0,
        "bipolar spectrum illness": 0,
        "depression": 0,
        "interpersonal trauma": 0,
        "PD-Cluster C-anxiety": 0,
        "PD-Cluster B-emotional": 0,
        "PD": 0,
        "Impulse control disorder": 0,
        "obesity": 0,
        "cardiovascular": 0,
        "COPD": 0,
        "asthma": 0,
        "immune-autoimmune": 0
      }
    },
    {
      "name": [
        24355
      ],
      "parent": [
        31670,
        31669
      ],
      "group": "individual",
      "ind_deceased": "N",
      "ind_suicide": "N"
    },
    {
      "name": [
        24356
      ],
      "parent": [
        31670,
        31669
      ],
      "group": "individual",
      "ind_deceased": "N",
      "ind_suicide": "N"
    },
    {
      "name": [
        64115
      ],
      "parent": [
        65740,
        65739
      ],
      "group": "individual",
      "ind_deceased": "N",
      "ind_suicide": "N"
    },
    {
      "name": [
        2682
      ],
      "parent": [
        5287,
        5288
      ],
      "group": "individual",
      "ind_deceased": "N",
      "ind_suicide": "N"
    },
    {
      "name": [
        6456
      ],
      "parent": [
        39751,
        6457
      ],
      "group": "individual",
      "ind_deceased": "N",
      "ind_suicide": "N"
    },
    {
      "name": [
        39751,
        6457
      ],
      "parent": [
        17418,
        64364
      ],
      "group": "couple",
      "fem_deceased": "N",
      "fem_suicide": "N",
      "mal_deceased": "Y",
      "mal_suicide": "Y",
      "mal_data": {
        "alcohol": 0,
        "psychosis": 0,
        "anxiety-non-trauma": 0,
        "somatic disorder": 0,
        "bipolar spectrum illness": 0,
        "depression": 0,
        "interpersonal trauma": 0,
        "PD-Cluster C-anxiety": 0,
        "PD-Cluster B-emotional": 0,
        "PD": 0,
        "Impulse control disorder": 0,
        "obesity": 0,
        "cardiovascular": 0,
        "COPD": 0,
        "asthma": 0,
        "immune-autoimmune": 0
      }
    },
    {
      "name": [
        17540
      ],
      "parent": [
        17543,
        17544
      ],
      "group": "individual",
      "ind_deceased": "N",
      "ind_suicide": "N"
    },
    {
      "name": [
        17543,
        17544
      ],
      "parent": [
        4304,
        4305
      ],
      "group": "couple",
      "fem_deceased": "Y",
      "fem_suicide": "N",
      "mal_deceased": "N",
      "mal_suicide": "N"
    },
    {
      "name": [
        25046
      ],
      "parent": [
        32909,
        32908
      ],
      "group": "individual",
      "ind_deceased": "N",
      "ind_suicide": "N"
    },
    {
      "name": [
        25167
      ],
      "parent": [
        32909,
        32908
      ],
      "group": "individual",
      "ind_deceased": "N",
      "ind_suicide": "N"
    },
    {
      "name": [
        25409
      ],
      "parent": [
        32909,
        32908
      ],
      "group": "individual",
      "ind_deceased": "N",
      "ind_suicide": "N"
    },
    {
      "name": [
        99,
        26663
      ],
      "parent": [
        26664,
        26665
      ],
      "group": "couple",
      "fem_deceased": "N",
      "fem_suicide": "N",
      "mal_deceased": "Y",
      "mal_suicide": "Y",
      "mal_data": {
        "alcohol": 0,
        "psychosis": 0,
        "anxiety-non-trauma": 0,
        "somatic disorder": 0,
        "bipolar spectrum illness": 0,
        "depression": 0,
        "interpersonal trauma": 0,
        "PD-Cluster C-anxiety": 0,
        "PD-Cluster B-emotional": 0,
        "PD": 0,
        "Impulse control disorder": 0,
        "obesity": 0,
        "cardiovascular": 0,
        "COPD": 0,
        "asthma": 0,
        "immune-autoimmune": 0
      }
    },
    {
      "name": [
        26664,
        26665
      ],
      "parent": [
        3406,
        3405
      ],
      "group": "couple",
      "fem_deceased": "N",
      "fem_suicide": "N",
      "mal_deceased": "N",
      "mal_suicide": "N"
    },
    {
      "name": [
        28594
      ],
      "parent": [
        9542,
        9543
      ],
      "group": "individual",
      "ind_deceased": "N",
      "ind_suicide": "N"
    },
    {
      "name": [
        33796,
        33797
      ],
      "parent": [
        36251,
        36252
      ],
      "group": "couple",
      "fem_deceased": "N",
      "fem_suicide": "N",
      "mal_deceased": "N",
      "mal_suicide": "N"
    },
    {
      "name": [
        40963
      ],
      "parent": [
        22350,
        22352
      ],
      "group": "individual",
      "ind_deceased": "N",
      "ind_suicide": "N"
    },
    {
      "name": [
        44957
      ],
      "parent": [
        22350,
        22352
      ],
      "group": "individual",
      "ind_deceased": "N",
      "ind_suicide": "N"
    },
    {
      "name": [
        20347
      ],
      "parent": [
        32909,
        32908
      ],
      "group": "individual",
      "ind_deceased": "Y",
      "ind_suicide": "N"
    },
    {
      "name": [
        32163
      ],
      "parent": [
        32164,
        56402
      ],
      "group": "individual",
      "ind_deceased": "N",
      "ind_suicide": "N"
    },
    {
      "name": [
        34718
      ],
      "parent": [
        32909,
        32908
      ],
      "group": "individual",
      "ind_deceased": "N",
      "ind_suicide": "N"
    },
    {
      "name": [
        37881
      ],
      "parent": [
        35820,
        21285
      ],
      "group": "individual",
      "ind_deceased": "N",
      "ind_suicide": "N"
    },
    {
      "name": [
        50966
      ],
      "parent": [
        50967,
        50968
      ],
      "group": "individual",
      "ind_deceased": "N",
      "ind_suicide": "N"
    },
    {
      "name": [
        50967,
        50968
      ],
      "parent": [
        22350,
        22352
      ],
      "group": "couple",
      "fem_deceased": "N",
      "fem_suicide": "N",
      "mal_deceased": "Y",
      "mal_suicide": "Y",
      "mal_data": {
        "alcohol": 0,
        "psychosis": 0,
        "anxiety-non-trauma": 0,
        "somatic disorder": 0,
        "bipolar spectrum illness": 0,
        "depression": 0,
        "interpersonal trauma": 0,
        "PD-Cluster C-anxiety": 0,
        "PD-Cluster B-emotional": 0,
        "PD": 0,
        "Impulse control disorder": 0,
        "obesity": 0,
        "cardiovascular": 0,
        "COPD": 0,
        "asthma": 0,
        "immune-autoimmune": 0
      }
    },
    {
      "name": [
        56540
      ],
      "parent": [
        49073,
        49072
      ],
      "group": "individual",
      "ind_deceased": "N",
      "ind_suicide": "N"
    },
    {
      "name": [
        68060
      ],
      "parent": [
        39751,
        6457
      ],
      "group": "individual",
      "ind_deceased": "N",
      "ind_suicide": "N"
    },
    {
      "name": [
        5197
      ],
      "parent": [
        5287,
        5288
      ],
      "group": "individual",
      "ind_deceased": "N",
      "ind_suicide": "N"
    },
    {
      "name": [
        8111
      ],
      "parent": [
        5287,
        5288
      ],
      "group": "individual",
      "ind_deceased": "N",
      "ind_suicide": "N"
    },
    {
      "name": [
        10288
      ],
      "parent": [
        10289,
        10290
      ],
      "group": "individual",
      "ind_deceased": "N",
      "ind_suicide": "N"
    },
    {
      "name": [
        10289,
        10290
      ],
      "parent": [
        62743,
        62744
      ],
      "group": "couple",
      "fem_deceased": "N",
      "fem_suicide": "N",
      "mal_deceased": "N",
      "mal_suicide": "N"
    },
    {
      "name": [
        13406
      ],
      "parent": [
        19420,
        4544
      ],
      "group": "individual",
      "ind_deceased": "N",
      "ind_suicide": "N"
    },
    {
      "name": [
        13548,
        13549
      ],
      "parent": [
        32909,
        32908
      ],
      "group": "couple",
      "fem_deceased": "N",
      "fem_suicide": "N",
      "mal_deceased": "Y",
      "mal_suicide": "Y",
      "mal_data": {
        "alcohol": 0,
        "psychosis": 0,
        "anxiety-non-trauma": 0,
        "somatic disorder": 0,
        "bipolar spectrum illness": 0,
        "depression": 0,
        "interpersonal trauma": 0,
        "PD-Cluster C-anxiety": 0,
        "PD-Cluster B-emotional": 0,
        "PD": 0,
        "Impulse control disorder": 0,
        "obesity": 0,
        "cardiovascular": 0,
        "COPD": 0,
        "asthma": 0,
        "immune-autoimmune": 0
      }
    },
    {
      "name": [
        39539,
        13549
      ],
      "parent": [
        32909,
        32908
      ],
      "group": "couple",
      "fem_deceased": "N",
      "fem_suicide": "N",
      "mal_deceased": "Y",
      "mal_suicide": "Y",
      "mal_data": {
        "alcohol": 0,
        "psychosis": 0,
        "anxiety-non-trauma": 0,
        "somatic disorder": 0,
        "bipolar spectrum illness": 0,
        "depression": 0,
        "interpersonal trauma": 0,
        "PD-Cluster C-anxiety": 0,
        "PD-Cluster B-emotional": 0,
        "PD": 0,
        "Impulse control disorder": 0,
        "obesity": 0,
        "cardiovascular": 0,
        "COPD": 0,
        "asthma": 0,
        "immune-autoimmune": 0
      }
    },
    {
      "name": [
        13560
      ],
      "parent": [
        23766,
        23767
      ],
      "group": "individual",
      "ind_deceased": "N",
      "ind_suicide": "N"
    },
    {
      "name": [
        13581
      ],
      "parent": [
        60738,
        13582
      ],
      "group": "individual",
      "ind_deceased": "N",
      "ind_suicide": "N"
    },
    {
      "name": [
        60738,
        13582
      ],
      "parent": [
        35661,
        35662
      ],
      "group": "couple",
      "fem_deceased": "N",
      "fem_suicide": "N",
      "mal_deceased": "N",
      "mal_suicide": "N"
    },
    {
      "name": [
        18252
      ],
      "parent": [
        18253,
        18254
      ],
      "group": "individual",
      "ind_deceased": "N",
      "ind_suicide": "N"
    },
    {
      "name": [
        18253,
        18254
      ],
      "parent": [
        4302,
        4303
      ],
      "group": "couple",
      "fem_deceased": "N",
      "fem_suicide": "N",
      "mal_deceased": "N",
      "mal_suicide": "N"
    },
    {
      "name": [
        23026
      ],
      "parent": [
        23027,
        23028
      ],
      "group": "individual",
      "ind_deceased": "N",
      "ind_suicide": "N"
    },
    {
      "name": [
        23027,
        23028
      ],
      "parent": [
        29952,
        0
      ],
      "group": "couple",
      "fem_deceased": "N",
      "fem_suicide": "N",
      "mal_deceased": "N",
      "mal_suicide": "N"
    },
    {
      "name": [
        23027,
        67449
      ],
      "parent": [
        29952,
        0
      ],
      "group": "couple",
      "fem_deceased": "N",
      "fem_suicide": "N",
      "mal_deceased": "N",
      "mal_suicide": "N"
    },
    {
      "name": [
        42880
      ],
      "parent": [
        19420,
        4544
      ],
      "group": "individual",
      "ind_deceased": "N",
      "ind_suicide": "N"
    },
    {
      "name": [
        43043
      ],
      "parent": [
        23766,
        23767
      ],
      "group": "individual",
      "ind_deceased": "N",
      "ind_suicide": "N"
    },
    {
      "name": [
        52509
      ],
      "parent": [
        17543,
        17544
      ],
      "group": "individual",
      "ind_deceased": "N",
      "ind_suicide": "N"
    },
    {
      "name": [
        67296
      ],
      "parent": [
        49073,
        49072
      ],
      "group": "individual",
      "ind_deceased": "N",
      "ind_suicide": "N"
    },
    {
      "name": [
        1517
      ],
      "parent": [
        1518,
        1519
      ],
      "group": "individual",
      "ind_deceased": "N",
      "ind_suicide": "N"
    },
    {
      "name": [
        1518,
        1519
      ],
      "parent": [
        5287,
        5288
      ],
      "group": "couple",
      "fem_deceased": "N",
      "fem_suicide": "N",
      "mal_deceased": "Y",
      "mal_suicide": "Y",
      "mal_data": {
        "alcohol": 0,
        "psychosis": 0,
        "anxiety-non-trauma": 0,
        "somatic disorder": 0,
        "bipolar spectrum illness": 0,
        "depression": 0,
        "interpersonal trauma": 0,
        "PD-Cluster C-anxiety": 0,
        "PD-Cluster B-emotional": 0,
        "PD": 0,
        "Impulse control disorder": 0,
        "obesity": 0,
        "cardiovascular": 0,
        "COPD": 0,
        "asthma": 0,
        "immune-autoimmune": 0
      }
    },
    {
      "name": [
        38236,
        1519
      ],
      "parent": [
        5287,
        5288
      ],
      "group": "couple",
      "fem_deceased": "N",
      "fem_suicide": "N",
      "mal_deceased": "Y",
      "mal_suicide": "Y",
      "mal_data": {
        "alcohol": 0,
        "psychosis": 0,
        "anxiety-non-trauma": 0,
        "somatic disorder": 0,
        "bipolar spectrum illness": 0,
        "depression": 0,
        "interpersonal trauma": 0,
        "PD-Cluster C-anxiety": 0,
        "PD-Cluster B-emotional": 0,
        "PD": 0,
        "Impulse control disorder": 0,
        "obesity": 0,
        "cardiovascular": 0,
        "COPD": 0,
        "asthma": 0,
        "immune-autoimmune": 0
      }
    },
    {
      "name": [
        6920
      ],
      "parent": [
        4140,
        4139
      ],
      "group": "individual",
      "ind_deceased": "N",
      "ind_suicide": "N"
    },
    {
      "name": [
        11872
      ],
      "parent": [
        32123,
        32122
      ],
      "group": "individual",
      "ind_deceased": "N",
      "ind_suicide": "N"
    },
    {
      "name": [
        13133
      ],
      "parent": [
        13134,
        31262
      ],
      "group": "individual",
      "ind_deceased": "Y",
      "ind_suicide": "Y",
      "ind_data": {
        "alcohol": 0,
        "psychosis": 0,
        "anxiety-non-trauma": 0,
        "somatic disorder": 0,
        "bipolar spectrum illness": 0,
        "depression": 0,
        "interpersonal trauma": 0,
        "PD-Cluster C-anxiety": 0,
        "PD-Cluster B-emotional": 0,
        "PD": 0,
        "Impulse control disorder": 0,
        "obesity": 0,
        "cardiovascular": 0,
        "COPD": 0,
        "asthma": 0,
        "immune-autoimmune": 0
      }
    },
    {
      "name": [
        13134,
        31262
      ],
      "parent": [
        58027,
        58026
      ],
      "group": "couple",
      "fem_deceased": "N",
      "fem_suicide": "N",
      "mal_deceased": "N",
      "mal_suicide": "N"
    },
    {
      "name": [
        29350
      ],
      "parent": [
        17418,
        64364
      ],
      "group": "individual",
      "ind_deceased": "N",
      "ind_suicide": "N"
    },
    {
      "name": [
        39401
      ],
      "parent": [
        10289,
        10290
      ],
      "group": "individual",
      "ind_deceased": "N",
      "ind_suicide": "N"
    },
    {
      "name": [
        44521
      ],
      "parent": [
        9542,
        9543
      ],
      "group": "individual",
      "ind_deceased": "N",
      "ind_suicide": "N"
    },
    {
      "name": [
        6159
      ],
      "parent": [
        18253,
        18254
      ],
      "group": "individual",
      "ind_deceased": "N",
      "ind_suicide": "N"
    },
    {
      "name": [
        10370
      ],
      "parent": [
        58027,
        58026
      ],
      "group": "individual",
      "ind_deceased": "N",
      "ind_suicide": "N"
    },
    {
      "name": [
        25231
      ],
      "parent": [
        25232,
        25233
      ],
      "group": "individual",
      "ind_deceased": "N",
      "ind_suicide": "N"
    },
    {
      "name": [
        25232,
        25233
      ],
      "parent": [
        61030,
        61031
      ],
      "group": "couple",
      "fem_deceased": "N",
      "fem_suicide": "N",
      "mal_deceased": "Y",
      "mal_suicide": "Y",
      "mal_data": {
        "alcohol": 0,
        "psychosis": 0,
        "anxiety-non-trauma": 0,
        "somatic disorder": 0,
        "bipolar spectrum illness": 0,
        "depression": 0,
        "interpersonal trauma": 0,
        "PD-Cluster C-anxiety": 0,
        "PD-Cluster B-emotional": 0,
        "PD": 0,
        "Impulse control disorder": 0,
        "obesity": 0,
        "cardiovascular": 0,
        "COPD": 0,
        "asthma": 0,
        "immune-autoimmune": 0
      }
    },
    {
      "name": [
        25311
      ],
      "parent": [
        25312,
        25316
      ],
      "group": "individual",
      "ind_deceased": "N",
      "ind_suicide": "N"
    },
    {
      "name": [
        25312,
        25316
      ],
      "parent": [
        35820,
        21285
      ],
      "group": "couple",
      "fem_deceased": "Y",
      "fem_suicide": "N",
      "mal_deceased": "Y",
      "mal_suicide": "Y",
      "mal_data": {
        "alcohol": 1,
        "psychosis": 0,
        "anxiety-non-trauma": 1,
        "somatic disorder": 0,
        "bipolar spectrum illness": 0,
        "depression": 1,
        "interpersonal trauma": 0,
        "PD-Cluster C-anxiety": 0,
        "PD-Cluster B-emotional": 0,
        "PD": 0,
        "Impulse control disorder": 0,
        "obesity": 0,
        "cardiovascular": 0,
        "COPD": 0,
        "asthma": 0,
        "immune-autoimmune": 0
      }
    },
    {
      "name": [
        25857
      ],
      "parent": [
        50967,
        50968
      ],
      "group": "individual",
      "ind_deceased": "N",
      "ind_suicide": "N"
    },
    {
      "name": [
        36629
      ],
      "parent": [
        10289,
        10290
      ],
      "group": "individual",
      "ind_deceased": "Y",
      "ind_suicide": "Y",
      "ind_data": {
        "alcohol": 0,
        "psychosis": 0,
        "anxiety-non-trauma": 0,
        "somatic disorder": 0,
        "bipolar spectrum illness": 0,
        "depression": 0,
        "interpersonal trauma": 0,
        "PD-Cluster C-anxiety": 0,
        "PD-Cluster B-emotional": 0,
        "PD": 0,
        "Impulse control disorder": 0,
        "obesity": 0,
        "cardiovascular": 0,
        "COPD": 0,
        "asthma": 0,
        "immune-autoimmune": 0
      }
    },
    {
      "name": [
        38682
      ],
      "parent": [
        39751,
        6457
      ],
      "group": "individual",
      "ind_deceased": "N",
      "ind_suicide": "N"
    },
    {
      "name": [
        38948,
        26599
      ],
      "parent": [
        17543,
        17544
      ],
      "group": "couple",
      "fem_deceased": "Y",
      "fem_suicide": "Y",
      "mal_deceased": "N",
      "mal_suicide": "N",
      "fem_data": {
        "alcohol": 1,
        "psychosis": 0,
        "anxiety-non-trauma": 1,
        "somatic disorder": 0,
        "bipolar spectrum illness": 0,
        "depression": 1,
        "interpersonal trauma": 0,
        "PD-Cluster C-anxiety": 0,
        "PD-Cluster B-emotional": 0,
        "PD": 1,
        "Impulse control disorder": 0,
        "obesity": 0,
        "cardiovascular": 0,
        "COPD": 0,
        "asthma": 0,
        "immune-autoimmune": 0
      }
    },
    {
      "name": [
        67284
      ],
      "parent": [
        13548,
        13549
      ],
      "group": "individual",
      "ind_deceased": "N",
      "ind_suicide": "N"
    },
    {
      "name": [
        11014
      ],
      "parent": [
        13134,
        31262
      ],
      "group": "individual",
      "ind_deceased": "N",
      "ind_suicide": "N"
    },
    {
      "name": [
        15910
      ],
      "parent": [
        18833,
        18834
      ],
      "group": "individual",
      "ind_deceased": "N",
      "ind_suicide": "N"
    },
    {
      "name": [
        29725
      ],
      "parent": [
        29726,
        29729
      ],
      "group": "individual",
      "ind_deceased": "N",
      "ind_suicide": "N"
    },
    {
      "name": [
        29726,
        29729
      ],
      "parent": [
        9563,
        9562
      ],
      "group": "couple",
      "fem_deceased": "N",
      "fem_suicide": "N",
      "mal_deceased": "N",
      "mal_suicide": "N"
    },
    {
      "name": [
        36814
      ],
      "parent": [
        5287,
        5288
      ],
      "group": "individual",
      "ind_deceased": "N",
      "ind_suicide": "N"
    },
    {
      "name": [
        19847
      ],
      "parent": [
        29726,
        29729
      ],
      "group": "individual",
      "ind_deceased": "N",
      "ind_suicide": "N"
    },
    {
      "name": [
        20579
      ],
      "parent": [
        17543,
        17544
      ],
      "group": "individual",
      "ind_deceased": "Y",
      "ind_suicide": "N"
    },
    {
      "name": [
        38001
      ],
      "parent": [
        48454,
        2240
      ],
      "group": "individual",
      "ind_deceased": "N",
      "ind_suicide": "N"
    },
    {
      "name": [
        48533
      ],
      "parent": [
        18253,
        18254
      ],
      "group": "individual",
      "ind_deceased": "Y",
      "ind_suicide": "Y",
      "ind_data": {
        "alcohol": 0,
        "psychosis": 1,
        "anxiety-non-trauma": 1,
        "somatic disorder": 1,
        "bipolar spectrum illness": 1,
        "depression": 1,
        "interpersonal trauma": 0,
        "PD-Cluster C-anxiety": 0,
        "PD-Cluster B-emotional": 1,
        "PD": 1,
        "Impulse control disorder": 0,
        "obesity": 0,
        "cardiovascular": 1,
        "COPD": 0,
        "asthma": 0,
        "immune-autoimmune": 0
      }
    },
    {
      "name": [
        26090
      ],
      "parent": [
        58027,
        58026
      ],
      "group": "individual",
      "ind_deceased": "Y",
      "ind_suicide": "Y",
      "ind_data": {
        "alcohol": 0,
        "psychosis": 0,
        "anxiety-non-trauma": 0,
        "somatic disorder": 0,
        "bipolar spectrum illness": 0,
        "depression": 0,
        "interpersonal trauma": 0,
        "PD-Cluster C-anxiety": 0,
        "PD-Cluster B-emotional": 0,
        "PD": 0,
        "Impulse control disorder": 0,
        "obesity": 0,
        "cardiovascular": 0,
        "COPD": 0,
        "asthma": 0,
        "immune-autoimmune": 0
      }
    },
    {
      "name": [
        52797
      ],
      "parent": [
        10289,
        10290
      ],
      "group": "individual",
      "ind_deceased": "N",
      "ind_suicide": "N"
    },
    {
      "name": [
        61030,
        61031
      ],
      "parent": [
        2435,
        33084
      ],
      "group": "couple",
      "fem_deceased": "Y",
      "fem_suicide": "N",
      "mal_deceased": "N",
      "mal_suicide": "N"
    },
    {
      "name": [
        28318
      ],
      "parent": [
        4140,
        4139
      ],
      "group": "individual",
      "ind_deceased": "Y",
      "ind_suicide": "N"
    },
    {
      "name": [
        39827,
        39828
      ],
      "parent": [
        29956,
        29955
      ],
      "group": "couple",
      "fem_deceased": "N",
      "fem_suicide": "N",
      "mal_deceased": "N",
      "mal_suicide": "N"
    },
    {
      "name": [
        39827,
        56933
      ],
      "parent": [
        29956,
        29955
      ],
      "group": "couple",
      "fem_deceased": "N",
      "fem_suicide": "N",
      "mal_deceased": "Y",
      "mal_suicide": "N"
    },
    {
      "name": [
        42403
      ],
      "parent": [
        25312,
        25316
      ],
      "group": "individual",
      "ind_deceased": "N",
      "ind_suicide": "N"
    },
    {
      "name": [
        45020
      ],
      "parent": [
        25232,
        25233
      ],
      "group": "individual",
      "ind_deceased": "Y",
      "ind_suicide": "Y",
      "ind_data": {
        "alcohol": 0,
        "psychosis": 0,
        "anxiety-non-trauma": 0,
        "somatic disorder": 0,
        "bipolar spectrum illness": 1,
        "depression": 0,
        "interpersonal trauma": 0,
        "PD-Cluster C-anxiety": 0,
        "PD-Cluster B-emotional": 0,
        "PD": 0,
        "Impulse control disorder": 0,
        "obesity": 0,
        "cardiovascular": 0,
        "COPD": 0,
        "asthma": 0,
        "immune-autoimmune": 0
      }
    },
    {
      "name": [
        54343
      ],
      "parent": [
        58027,
        58026
      ],
      "group": "individual",
      "ind_deceased": "N",
      "ind_suicide": "N"
    },
    {
      "name": [
        31968
      ],
      "parent": [
        60738,
        13582
      ],
      "group": "individual",
      "ind_deceased": "Y",
      "ind_suicide": "Y",
      "ind_data": {
        "alcohol": 0,
        "psychosis": 0,
        "anxiety-non-trauma": 0,
        "somatic disorder": 0,
        "bipolar spectrum illness": 0,
        "depression": 0,
        "interpersonal trauma": 0,
        "PD-Cluster C-anxiety": 0,
        "PD-Cluster B-emotional": 0,
        "PD": 0,
        "Impulse control disorder": 0,
        "obesity": 0,
        "cardiovascular": 0,
        "COPD": 0,
        "asthma": 0,
        "immune-autoimmune": 0
      }
    },
    {
      "name": [
        39167
      ],
      "parent": [
        49073,
        49072
      ],
      "group": "individual",
      "ind_deceased": "Y",
      "ind_suicide": "Y",
      "ind_data": {
        "alcohol": 0,
        "psychosis": 0,
        "anxiety-non-trauma": 0,
        "somatic disorder": 0,
        "bipolar spectrum illness": 0,
        "depression": 0,
        "interpersonal trauma": 0,
        "PD-Cluster C-anxiety": 0,
        "PD-Cluster B-emotional": 0,
        "PD": 0,
        "Impulse control disorder": 0,
        "obesity": 0,
        "cardiovascular": 0,
        "COPD": 0,
        "asthma": 0,
        "immune-autoimmune": 0
      }
    },
    {
      "name": [
        64306
      ],
      "parent": [
        13548,
        13549
      ],
      "group": "individual",
      "ind_deceased": "N",
      "ind_suicide": "N"
    },
    {
      "name": [
        66690
      ],
      "parent": [
        5859,
        5860
      ],
      "group": "individual",
      "ind_deceased": "Y",
      "ind_suicide": "Y",
      "ind_data": {
        "alcohol": 0,
        "psychosis": 0,
        "anxiety-non-trauma": 0,
        "somatic disorder": 0,
        "bipolar spectrum illness": 0,
        "depression": 0,
        "interpersonal trauma": 0,
        "PD-Cluster C-anxiety": 0,
        "PD-Cluster B-emotional": 0,
        "PD": 0,
        "Impulse control disorder": 0,
        "obesity": 0,
        "cardiovascular": 0,
        "COPD": 0,
        "asthma": 0,
        "immune-autoimmune": 0
      }
    },
    {
      "name": [
        5966
      ],
      "parent": [
        10289,
        10290
      ],
      "group": "individual",
      "ind_deceased": "N",
      "ind_suicide": "N"
    },
    {
      "name": [
        8491
      ],
      "parent": [
        18253,
        18254
      ],
      "group": "individual",
      "ind_deceased": "N",
      "ind_suicide": "N"
    },
    {
      "name": [
        14553
      ],
      "parent": [
        39539,
        13549
      ],
      "group": "individual",
      "ind_deceased": "N",
      "ind_suicide": "N"
    },
    {
      "name": [
        15524
      ],
      "parent": [
        17543,
        17544
      ],
      "group": "individual",
      "ind_deceased": "Y",
      "ind_suicide": "Y",
      "ind_data": {
        "alcohol": 0,
        "psychosis": 0,
        "anxiety-non-trauma": 0,
        "somatic disorder": 0,
        "bipolar spectrum illness": 0,
        "depression": 1,
        "interpersonal trauma": 1,
        "PD-Cluster C-anxiety": 0,
        "PD-Cluster B-emotional": 0,
        "PD": 0,
        "Impulse control disorder": 0,
        "obesity": 0,
        "cardiovascular": 0,
        "COPD": 0,
        "asthma": 0,
        "immune-autoimmune": 0
      }
    },
    {
      "name": [
        43411
      ],
      "parent": [
        39539,
        13549
      ],
      "group": "individual",
      "ind_deceased": "N",
      "ind_suicide": "N"
    },
    {
      "name": [
        14621
      ],
      "parent": [
        32164,
        56402
      ],
      "group": "individual",
      "ind_deceased": "Y",
      "ind_suicide": "Y",
      "ind_data": {
        "alcohol": 0,
        "psychosis": 0,
        "anxiety-non-trauma": 0,
        "somatic disorder": 0,
        "bipolar spectrum illness": 0,
        "depression": 0,
        "interpersonal trauma": 0,
        "PD-Cluster C-anxiety": 0,
        "PD-Cluster B-emotional": 0,
        "PD": 0,
        "Impulse control disorder": 0,
        "obesity": 0,
        "cardiovascular": 0,
        "COPD": 0,
        "asthma": 0,
        "immune-autoimmune": 0
      }
    },
    {
      "name": [
        17866
      ],
      "parent": [
        5859,
        5860
      ],
      "group": "individual",
      "ind_deceased": "Y",
      "ind_suicide": "N"
    },
    {
      "name": [
        60900
      ],
      "parent": [
        2909,
        2908
      ],
      "group": "individual",
      "ind_deceased": "Y",
      "ind_suicide": "Y",
      "ind_data": {
        "alcohol": 0,
        "psychosis": 0,
        "anxiety-non-trauma": 0,
        "somatic disorder": 0,
        "bipolar spectrum illness": 0,
        "depression": 0,
        "interpersonal trauma": 0,
        "PD-Cluster C-anxiety": 0,
        "PD-Cluster B-emotional": 0,
        "PD": 0,
        "Impulse control disorder": 0,
        "obesity": 0,
        "cardiovascular": 0,
        "COPD": 0,
        "asthma": 0,
        "immune-autoimmune": 0
      }
    },
    {
      "name": [
        63452
      ],
      "parent": [
        4140,
        4139
      ],
      "group": "individual",
      "ind_deceased": "Y",
      "ind_suicide": "Y",
      "ind_data": {
        "alcohol": 0,
        "psychosis": 0,
        "anxiety-non-trauma": 0,
        "somatic disorder": 0,
        "bipolar spectrum illness": 0,
        "depression": 0,
        "interpersonal trauma": 0,
        "PD-Cluster C-anxiety": 0,
        "PD-Cluster B-emotional": 0,
        "PD": 0,
        "Impulse control disorder": 0,
        "obesity": 0,
        "cardiovascular": 0,
        "COPD": 0,
        "asthma": 0,
        "immune-autoimmune": 0
      }
    },
    {
      "name": [
        4843
      ],
      "parent": [
        29726,
        29729
      ],
      "group": "individual",
      "ind_deceased": "N",
      "ind_suicide": "N"
    },
    {
      "name": [
        35794
      ],
      "parent": [
        9542,
        9543
      ],
      "group": "individual",
      "ind_deceased": "N",
      "ind_suicide": "N"
    },
    {
      "name": [
        38846
      ],
      "parent": [
        23027,
        23028
      ],
      "group": "individual",
      "ind_deceased": "N",
      "ind_suicide": "N"
    },
    {
      "name": [
        40634
      ],
      "parent": [
        48454,
        2240
      ],
      "group": "individual",
      "ind_deceased": "N",
      "ind_suicide": "N"
    },
    {
      "name": [
        55918
      ],
      "parent": [
        18253,
        18254
      ],
      "group": "individual",
      "ind_deceased": "N",
      "ind_suicide": "N"
    },
    {
      "name": [
        7836
      ],
      "parent": [
        2909,
        2908
      ],
      "group": "individual",
      "ind_deceased": "N",
      "ind_suicide": "N"
    },
    {
      "name": [
        9449
      ],
      "parent": [
        23027,
        23028
      ],
      "group": "individual",
      "ind_deceased": "N",
      "ind_suicide": "N"
    },
    {
      "name": [
        61649
      ],
      "parent": [
        5287,
        5288
      ],
      "group": "individual",
      "ind_deceased": "N",
      "ind_suicide": "N"
    },
    {
      "name": [
        65759
      ],
      "parent": [
        38236,
        1519
      ],
      "group": "individual",
      "ind_deceased": "N",
      "ind_suicide": "N"
    },
    {
      "name": [
        3236
      ],
      "parent": [
        4140,
        4139
      ],
      "group": "individual",
      "ind_deceased": "N",
      "ind_suicide": "N"
    },
    {
      "name": [
        28238
      ],
      "parent": [
        18253,
        18254
      ],
      "group": "individual",
      "ind_deceased": "N",
      "ind_suicide": "N"
    },
    {
      "name": [
        33052
      ],
      "parent": [
        29726,
        29729
      ],
      "group": "individual",
      "ind_deceased": "N",
      "ind_suicide": "N"
    },
    {
      "name": [
        384
      ],
      "parent": [
        39827,
        39828
      ],
      "group": "individual",
      "ind_deceased": "N",
      "ind_suicide": "N"
    },
    {
      "name": [
        4038
      ],
      "parent": [
        4039,
        4040
      ],
      "group": "individual",
      "ind_deceased": "N",
      "ind_suicide": "N"
    },
    {
      "name": [
        4039,
        4040
      ],
      "parent": [
        20126,
        20127
      ],
      "group": "couple",
      "fem_deceased": "Y",
      "fem_suicide": "Y",
      "mal_deceased": "N",
      "mal_suicide": "N",
      "fem_data": {
        "alcohol": 0,
        "psychosis": 0,
        "anxiety-non-trauma": 0,
        "somatic disorder": 0,
        "bipolar spectrum illness": 1,
        "depression": 1,
        "interpersonal trauma": 0,
        "PD-Cluster C-anxiety": 0,
        "PD-Cluster B-emotional": 0,
        "PD": 1,
        "Impulse control disorder": 0,
        "obesity": 0,
        "cardiovascular": 1,
        "COPD": 0,
        "asthma": 0,
        "immune-autoimmune": 0
      }
    },
    {
      "name": [
        37304
      ],
      "parent": [
        23027,
        23028
      ],
      "group": "individual",
      "ind_deceased": "N",
      "ind_suicide": "N"
    },
    {
      "name": [
        53757
      ],
      "parent": [
        29726,
        29729
      ],
      "group": "individual",
      "ind_deceased": "Y",
      "ind_suicide": "Y",
      "ind_data": {
        "alcohol": 0,
        "psychosis": 0,
        "anxiety-non-trauma": 0,
        "somatic disorder": 0,
        "bipolar spectrum illness": 0,
        "depression": 0,
        "interpersonal trauma": 0,
        "PD-Cluster C-anxiety": 0,
        "PD-Cluster B-emotional": 0,
        "PD": 0,
        "Impulse control disorder": 0,
        "obesity": 0,
        "cardiovascular": 0,
        "COPD": 0,
        "asthma": 0,
        "immune-autoimmune": 0
      }
    },
    {
      "name": [
        7283
      ],
      "parent": [
        38236,
        1519
      ],
      "group": "individual",
      "ind_deceased": "N",
      "ind_suicide": "N"
    },
    {
      "name": [
        55771
      ],
      "parent": [
        26664,
        26665
      ],
      "group": "individual",
      "ind_deceased": "N",
      "ind_suicide": "N"
    },
    {
      "name": [
        5673
      ],
      "parent": [
        35820,
        21285
      ],
      "group": "individual",
      "ind_deceased": "N",
      "ind_suicide": "N"
    },
    {
      "name": [
        48242
      ],
      "parent": [
        49073,
        49072
      ],
      "group": "individual",
      "ind_deceased": "N",
      "ind_suicide": "N"
    },
    {
      "name": [
        4129
      ],
      "parent": [
        10289,
        10290
      ],
      "group": "individual",
      "ind_deceased": "N",
      "ind_suicide": "N"
    },
    {
      "name": [
        52375
      ],
      "parent": [
        58027,
        58026
      ],
      "group": "individual",
      "ind_deceased": "N",
      "ind_suicide": "N"
    },
    {
      "name": [
        130
      ],
      "parent": [
        22245,
        133
      ],
      "group": "individual",
      "ind_deceased": "N",
      "ind_suicide": "N"
    },
    {
      "name": [
        22245,
        133
      ],
      "parent": [
        18833,
        18834
      ],
      "group": "couple",
      "fem_deceased": "N",
      "fem_suicide": "N",
      "mal_deceased": "Y",
      "mal_suicide": "Y",
      "mal_data": {
        "alcohol": 0,
        "psychosis": 0,
        "anxiety-non-trauma": 0,
        "somatic disorder": 0,
        "bipolar spectrum illness": 0,
        "depression": 1,
        "interpersonal trauma": 0,
        "PD-Cluster C-anxiety": 0,
        "PD-Cluster B-emotional": 0,
        "PD": 0,
        "Impulse control disorder": 0,
        "obesity": 0,
        "cardiovascular": 0,
        "COPD": 0,
        "asthma": 0,
        "immune-autoimmune": 0
      }
    },
    {
      "name": [
        3400,
        133
      ],
      "parent": [
        18833,
        18834
      ],
      "group": "couple",
      "fem_deceased": "N",
      "fem_suicide": "N",
      "mal_deceased": "Y",
      "mal_suicide": "Y",
      "mal_data": {
        "alcohol": 0,
        "psychosis": 0,
        "anxiety-non-trauma": 0,
        "somatic disorder": 0,
        "bipolar spectrum illness": 0,
        "depression": 1,
        "interpersonal trauma": 0,
        "PD-Cluster C-anxiety": 0,
        "PD-Cluster B-emotional": 0,
        "PD": 0,
        "Impulse control disorder": 0,
        "obesity": 0,
        "cardiovascular": 0,
        "COPD": 0,
        "asthma": 0,
        "immune-autoimmune": 0
      }
    },
    {
      "name": [
        53707
      ],
      "parent": [
        4039,
        4040
      ],
      "group": "individual",
      "ind_deceased": "N",
      "ind_suicide": "N"
    },
    {
      "name": [
        1927
      ],
      "parent": [
        5859,
        5860
      ],
      "group": "individual",
      "ind_deceased": "Y",
      "ind_suicide": "N"
    },
    {
      "name": [
        35820,
        21285
      ],
      "parent": [
        35966,
        35965
      ],
      "group": "couple",
      "fem_deceased": "N",
      "fem_suicide": "N",
      "mal_deceased": "Y",
      "mal_suicide": "N"
    },
    {
      "name": [
        2435,
        33084
      ],
      "parent": [
        54023,
        54022
      ],
      "group": "couple",
      "fem_deceased": "Y",
      "fem_suicide": "N",
      "mal_deceased": "Y",
      "mal_suicide": "N"
    },
    {
      "name": [
        10451
      ],
      "parent": [
        32164,
        56402
      ],
      "group": "individual",
      "ind_deceased": "Y",
      "ind_suicide": "N"
    },
    {
      "name": [
        56523
      ],
      "parent": [
        19420,
        4544
      ],
      "group": "individual",
      "ind_deceased": "Y",
      "ind_suicide": "Y",
      "ind_data": {
        "alcohol": 0,
        "psychosis": 0,
        "anxiety-non-trauma": 0,
        "somatic disorder": 0,
        "bipolar spectrum illness": 0,
        "depression": 0,
        "interpersonal trauma": 0,
        "PD-Cluster C-anxiety": 0,
        "PD-Cluster B-emotional": 0,
        "PD": 0,
        "Impulse control disorder": 0,
        "obesity": 0,
        "cardiovascular": 0,
        "COPD": 0,
        "asthma": 0,
        "immune-autoimmune": 0
      }
    },
    {
      "name": [
        9568
      ],
      "parent": [
        23027,
        23028
      ],
      "group": "individual",
      "ind_deceased": "Y",
      "ind_suicide": "Y",
      "ind_data": {
        "alcohol": 0,
        "psychosis": 0,
        "anxiety-non-trauma": 0,
        "somatic disorder": 0,
        "bipolar spectrum illness": 0,
        "depression": 0,
        "interpersonal trauma": 0,
        "PD-Cluster C-anxiety": 0,
        "PD-Cluster B-emotional": 0,
        "PD": 0,
        "Impulse control disorder": 0,
        "obesity": 0,
        "cardiovascular": 0,
        "COPD": 0,
        "asthma": 0,
        "immune-autoimmune": 0
      }
    },
    {
      "name": [
        55791
      ],
      "parent": [
        65740,
        65739
      ],
      "group": "individual",
      "ind_deceased": "N",
      "ind_suicide": "N"
    },
    {
      "name": [
        56068
      ],
      "parent": [
        5287,
        5288
      ],
      "group": "individual",
      "ind_deceased": "N",
      "ind_suicide": "N"
    },
    {
      "name": [
        57720
      ],
      "parent": [
        9542,
        9543
      ],
      "group": "individual",
      "ind_deceased": "Y",
      "ind_suicide": "Y",
      "ind_data": {
        "alcohol": 0,
        "psychosis": 0,
        "anxiety-non-trauma": 0,
        "somatic disorder": 0,
        "bipolar spectrum illness": 0,
        "depression": 0,
        "interpersonal trauma": 0,
        "PD-Cluster C-anxiety": 0,
        "PD-Cluster B-emotional": 0,
        "PD": 0,
        "Impulse control disorder": 0,
        "obesity": 0,
        "cardiovascular": 0,
        "COPD": 0,
        "asthma": 0,
        "immune-autoimmune": 0
      }
    },
    {
      "name": [
        17741
      ],
      "parent": [
        17420,
        0
      ],
      "group": "individual",
      "ind_deceased": "Y",
      "ind_suicide": "N"
    },
    {
      "name": [
        53891
      ],
      "parent": [
        32909,
        32908
      ],
      "group": "individual",
      "ind_deceased": "N",
      "ind_suicide": "N"
    },
    {
      "name": [
        19420,
        4544
      ],
      "parent": [
        63218,
        63213
      ],
      "group": "couple",
      "fem_deceased": "Y",
      "fem_suicide": "N",
      "mal_deceased": "Y",
      "mal_suicide": "N"
    },
    {
      "name": [
        42365
      ],
      "parent": [
        17420,
        0
      ],
      "group": "individual",
      "ind_deceased": "N",
      "ind_suicide": "N"
    },
    {
      "name": [
        23766,
        23767
      ],
      "parent": [
        23295,
        23294
      ],
      "group": "couple",
      "fem_deceased": "N",
      "fem_suicide": "N",
      "mal_deceased": "N",
      "mal_suicide": "N"
    },
    {
      "name": [
        9563,
        9562
      ],
      "parent": [
        63218,
        63213
      ],
      "group": "couple",
      "fem_deceased": "N",
      "fem_suicide": "N",
      "mal_deceased": "N",
      "mal_suicide": "N"
    },
    {
      "name": [
        63630
      ],
      "parent": [
        5859,
        5860
      ],
      "group": "individual",
      "ind_deceased": "N",
      "ind_suicide": "N"
    },
    {
      "name": [
        1820
      ],
      "parent": [
        9542,
        9543
      ],
      "group": "individual",
      "ind_deceased": "N",
      "ind_suicide": "N"
    },
    {
      "name": [
        10965
      ],
      "parent": [
        39751,
        6457
      ],
      "group": "individual",
      "ind_deceased": "N",
      "ind_suicide": "N"
    },
    {
      "name": [
        51093
      ],
      "parent": [
        61030,
        61031
      ],
      "group": "individual",
      "ind_deceased": "N",
      "ind_suicide": "N"
    },
    {
      "name": [
        65168
      ],
      "parent": [
        32164,
        56402
      ],
      "group": "individual",
      "ind_deceased": "N",
      "ind_suicide": "N"
    },
    {
      "name": [
        25172
      ],
      "parent": [
        49073,
        49072
      ],
      "group": "individual",
      "ind_deceased": "Y",
      "ind_suicide": "Y",
      "ind_data": {
        "alcohol": 0,
        "psychosis": 0,
        "anxiety-non-trauma": 0,
        "somatic disorder": 0,
        "bipolar spectrum illness": 0,
        "depression": 1,
        "interpersonal trauma": 1,
        "PD-Cluster C-anxiety": 0,
        "PD-Cluster B-emotional": 1,
        "PD": 1,
        "Impulse control disorder": 0,
        "obesity": 1,
        "cardiovascular": 0,
        "COPD": 0,
        "asthma": 0,
        "immune-autoimmune": 0
      }
    },
    {
      "name": [
        19896
      ],
      "parent": [
        49073,
        49072
      ],
      "group": "individual",
      "ind_deceased": "N",
      "ind_suicide": "N"
    },
    {
      "name": [
        23338
      ],
      "parent": [
        39539,
        13549
      ],
      "group": "individual",
      "ind_deceased": "N",
      "ind_suicide": "N"
    },
    {
      "name": [
        26368
      ],
      "parent": [
        32164,
        56402
      ],
      "group": "individual",
      "ind_deceased": "N",
      "ind_suicide": "N"
    },
    {
      "name": [
        52167
      ],
      "parent": [
        39751,
        6457
      ],
      "group": "individual",
      "ind_deceased": "N",
      "ind_suicide": "N"
    },
    {
      "name": [
        16926
      ],
      "parent": [
        39827,
        39828
      ],
      "group": "individual",
      "ind_deceased": "Y",
      "ind_suicide": "Y",
      "ind_data": {
        "alcohol": 1,
        "psychosis": 0,
        "anxiety-non-trauma": 0,
        "somatic disorder": 0,
        "bipolar spectrum illness": 0,
        "depression": 0,
        "interpersonal trauma": 0,
        "PD-Cluster C-anxiety": 0,
        "PD-Cluster B-emotional": 1,
        "PD": 1,
        "Impulse control disorder": 0,
        "obesity": 0,
        "cardiovascular": 0,
        "COPD": 0,
        "asthma": 0,
        "immune-autoimmune": 0
      }
    },
    {
      "name": [
        6017
      ],
      "parent": [
        32164,
        56402
      ],
      "group": "individual",
      "ind_deceased": "N",
      "ind_suicide": "N"
    },
    {
      "name": [
        8737
      ],
      "parent": [
        13134,
        31262
      ],
      "group": "individual",
      "ind_deceased": "N",
      "ind_suicide": "N"
    },
    {
      "name": [
        16545
      ],
      "parent": [
        16546,
        16547
      ],
      "group": "individual",
      "ind_deceased": "Y",
      "ind_suicide": "Y"
    },
    {
      "name": [
        16546,
        16547
      ],
      "parent": [
        33796,
        33797
      ],
      "group": "couple",
      "fem_deceased": "N",
      "fem_suicide": "N",
      "mal_deceased": "N",
      "mal_suicide": "N"
    },
    {
      "name": [
        52789
      ],
      "parent": [
        53613,
        32122
      ],
      "group": "individual",
      "ind_deceased": "Y",
      "ind_suicide": "Y",
      "ind_data": {
        "alcohol": 0,
        "psychosis": 0,
        "anxiety-non-trauma": 0,
        "somatic disorder": 0,
        "bipolar spectrum illness": 0,
        "depression": 1,
        "interpersonal trauma": 0,
        "PD-Cluster C-anxiety": 1,
        "PD-Cluster B-emotional": 0,
        "PD": 1,
        "Impulse control disorder": 0,
        "obesity": 0,
        "cardiovascular": 0,
        "COPD": 0,
        "asthma": 0,
        "immune-autoimmune": 0
      }
    },
    {
      "name": [
        23067
      ],
      "parent": [
        23766,
        23767
      ],
      "group": "individual",
      "ind_deceased": "Y",
      "ind_suicide": "Y",
      "ind_data": {
        "alcohol": 0,
        "psychosis": 0,
        "anxiety-non-trauma": 0,
        "somatic disorder": 0,
        "bipolar spectrum illness": 0,
        "depression": 0,
        "interpersonal trauma": 0,
        "PD-Cluster C-anxiety": 0,
        "PD-Cluster B-emotional": 0,
        "PD": 0,
        "Impulse control disorder": 0,
        "obesity": 0,
        "cardiovascular": 1,
        "COPD": 0,
        "asthma": 0,
        "immune-autoimmune": 0
      }
    },
    {
      "name": [
        23080
      ],
      "parent": [
        23766,
        23767
      ],
      "group": "individual",
      "ind_deceased": "N",
      "ind_suicide": "N"
    },
    {
      "name": [
        42846
      ],
      "parent": [
        17420,
        0
      ],
      "group": "individual",
      "ind_deceased": "N",
      "ind_suicide": "N"
    },
    {
      "name": [
        18487
      ],
      "parent": [
        18833,
        18834
      ],
      "group": "individual",
      "ind_deceased": "N",
      "ind_suicide": "N"
    },
    {
      "name": [
        19934
      ],
      "parent": [
        24406,
        17264
      ],
      "group": "individual",
      "ind_deceased": "Y",
      "ind_suicide": "Y",
      "ind_data": {
        "alcohol": 0,
        "psychosis": 0,
        "anxiety-non-trauma": 0,
        "somatic disorder": 0,
        "bipolar spectrum illness": 0,
        "depression": 1,
        "interpersonal trauma": 0,
        "PD-Cluster C-anxiety": 0,
        "PD-Cluster B-emotional": 0,
        "PD": 0,
        "Impulse control disorder": 0,
        "obesity": 0,
        "cardiovascular": 0,
        "COPD": 0,
        "asthma": 0,
        "immune-autoimmune": 0
      }
    },
    {
      "name": [
        59768
      ],
      "parent": [
        58027,
        58026
      ],
      "group": "individual",
      "ind_deceased": "N",
      "ind_suicide": "N"
    },
    {
      "name": [
        12883
      ],
      "parent": [
        2909,
        2908
      ],
      "group": "individual",
      "ind_deceased": "N",
      "ind_suicide": "N"
    },
    {
      "name": [
        25711
      ],
      "parent": [
        4140,
        4139
      ],
      "group": "individual",
      "ind_deceased": "N",
      "ind_suicide": "N"
    },
    {
      "name": [
        50595
      ],
      "parent": [
        35820,
        21285
      ],
      "group": "individual",
      "ind_deceased": "N",
      "ind_suicide": "N"
    },
    {
      "name": [
        5901
      ],
      "parent": [
        2909,
        2908
      ],
      "group": "individual",
      "ind_deceased": "Y",
      "ind_suicide": "N"
    },
    {
      "name": [
        53265
      ],
      "parent": [
        17420,
        0
      ],
      "group": "individual",
      "ind_deceased": "Y",
      "ind_suicide": "Y",
      "ind_data": {
        "alcohol": 0,
        "psychosis": 0,
        "anxiety-non-trauma": 0,
        "somatic disorder": 0,
        "bipolar spectrum illness": 0,
        "depression": 0,
        "interpersonal trauma": 0,
        "PD-Cluster C-anxiety": 0,
        "PD-Cluster B-emotional": 0,
        "PD": 0,
        "Impulse control disorder": 0,
        "obesity": 0,
        "cardiovascular": 0,
        "COPD": 0,
        "asthma": 0,
        "immune-autoimmune": 0
      }
    },
    {
      "name": [
        17930
      ],
      "parent": [
        65740,
        65739
      ],
      "group": "individual",
      "ind_deceased": "Y",
      "ind_suicide": "N"
    },
    {
      "name": [
        54528
      ],
      "parent": [
        3400,
        133
      ],
      "group": "individual",
      "ind_deceased": "N",
      "ind_suicide": "N"
    },
    {
      "name": [
        10407
      ],
      "parent": [
        38948,
        26599
      ],
      "group": "individual",
      "ind_deceased": "N",
      "ind_suicide": "N"
    },
    {
      "name": [
        42606
      ],
      "parent": [
        99,
        26663
      ],
      "group": "individual",
      "ind_deceased": "N",
      "ind_suicide": "N"
    },
    {
      "name": [
        9982
      ],
      "parent": [
        17418,
        64364
      ],
      "group": "individual",
      "ind_deceased": "N",
      "ind_suicide": "N"
    },
    {
      "name": [
        15038
      ],
      "parent": [
        32909,
        32908
      ],
      "group": "individual",
      "ind_deceased": "N",
      "ind_suicide": "N"
    },
    {
      "name": [
        3073
      ],
      "parent": [
        17420,
        0
      ],
      "group": "individual",
      "ind_deceased": "N",
      "ind_suicide": "N"
    }
    ],
    family38: [
      {
        "name": [
          17,
          5
        ],
        "parent": "",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N",
        "group": "couple"
      },
      {
        "name": [
          30,
          31
        ],
        "parent": [
          17,
          5
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          34,
          32
        ],
        "parent": [
          17,
          5
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          35,
          37
        ],
        "parent": [
          17,
          5
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          46702,
          46701
        ],
        "parent": [
          30,
          31
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          46708,
          46707
        ],
        "parent": [
          46702,
          46701
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          46709,
          46710
        ],
        "parent": [
          46702,
          46701
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          62887,
          62888
        ],
        "parent": [
          30,
          31
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          62892,
          62893
        ],
        "parent": [
          62887,
          62888
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          62901,
          62900
        ],
        "parent": [
          62887,
          62888
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          15363,
          15362
        ],
        "parent": [
          39509,
          39510
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          39509,
          39510
        ],
        "parent": [
          30,
          31
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          39514,
          39515
        ],
        "parent": [
          15363,
          15362
        ],
        "group": "couple",
        "fem_deceased": "N",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          39525,
          44862
        ],
        "parent": [
          15363,
          15362
        ],
        "group": "couple",
        "fem_deceased": "N",
        "fem_suicide": "N",
        "mal_deceased": "N",
        "mal_suicide": "N"
      },
      {
        "name": [
          39525,
          24460
        ],
        "parent": [
          15363,
          15362
        ],
        "group": "couple",
        "fem_deceased": "N",
        "fem_suicide": "N",
        "mal_deceased": "N",
        "mal_suicide": "N"
      },
      {
        "name": [
          11575,
          11574
        ],
        "parent": [
          23088,
          23087
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          23088,
          23087
        ],
        "parent": [
          35,
          37
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          18322,
          18323
        ],
        "parent": [
          30,
          31
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          5849,
          20659
        ],
        "parent": [
          18322,
          18323
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          51000,
          16931
        ],
        "parent": [
          5849,
          20659
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          53797,
          53798
        ],
        "parent": [
          66556,
          66557
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "N",
        "mal_suicide": "N"
      },
      {
        "name": [
          66556,
          66557
        ],
        "parent": [
          34,
          32
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          66559
        ],
        "parent": [
          53797,
          53798
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          66560
        ],
        "parent": [
          53797,
          53798
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          65051,
          66561
        ],
        "parent": [
          53797,
          53798
        ],
        "group": "couple",
        "fem_deceased": "N",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "Y",
        "mal_data": {
          "alcohol": 0,
          "psychosis": 0,
          "anxiety-non-trauma": 0,
          "somatic disorder": 0,
          "bipolar spectrum illness": 0,
          "depression": 0,
          "interpersonal trauma": 0,
          "PD-Cluster C-anxiety": 0,
          "PD-Cluster B-emotional": 0,
          "PD": 1,
          "Impulse control disorder": 0,
          "obesity": 0,
          "cardiovascular": 0,
          "COPD": 1,
          "asthma": 0,
          "immune-autoimmune": 0
        }
      },
      {
        "name": [
          778,
          777
        ],
        "parent": [
          11575,
          11574
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          781
        ],
        "parent": [
          778,
          777
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          784
        ],
        "parent": [
          778,
          777
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          65467,
          44856
        ],
        "parent": [
          39514,
          39515
        ],
        "group": "couple",
        "fem_deceased": "N",
        "fem_suicide": "N",
        "mal_deceased": "N",
        "mal_suicide": "N"
      },
      {
        "name": [
          28375,
          705
        ],
        "parent": [
          34,
          32
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          47326
        ],
        "parent": [
          61047,
          22124
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          5444
        ],
        "parent": [
          778,
          777
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          43391
        ],
        "parent": [
          7435,
          7438
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          44854
        ],
        "parent": [
          65467,
          44856
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          44860
        ],
        "parent": [
          39525,
          44862
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          60065
        ],
        "parent": [
          62901,
          62900
        ],
        "group": "individual",
        "ind_deceased": "Y",
        "ind_suicide": "Y",
        "ind_data": {
          "alcohol": 0,
          "psychosis": 0,
          "anxiety-non-trauma": 0,
          "somatic disorder": 0,
          "bipolar spectrum illness": 0,
          "depression": 0,
          "interpersonal trauma": 0,
          "PD-Cluster C-anxiety": 0,
          "PD-Cluster B-emotional": 0,
          "PD": 0,
          "Impulse control disorder": 0,
          "obesity": 0,
          "cardiovascular": 0,
          "COPD": 0,
          "asthma": 0,
          "immune-autoimmune": 0
        }
      },
      {
        "name": [
          40986
        ],
        "parent": [
          65467,
          44856
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          56604
        ],
        "parent": [
          778,
          777
        ],
        "group": "individual",
        "ind_deceased": "Y",
        "ind_suicide": "Y",
        "ind_data": {
          "alcohol": 0,
          "psychosis": 0,
          "anxiety-non-trauma": 0,
          "somatic disorder": 0,
          "bipolar spectrum illness": 0,
          "depression": 0,
          "interpersonal trauma": 0,
          "PD-Cluster C-anxiety": 0,
          "PD-Cluster B-emotional": 0,
          "PD": 0,
          "Impulse control disorder": 0,
          "obesity": 0,
          "cardiovascular": 0,
          "COPD": 0,
          "asthma": 0,
          "immune-autoimmune": 0
        }
      },
      {
        "name": [
          21768
        ],
        "parent": [
          21769,
          21770
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          21769,
          21770
        ],
        "parent": [
          46708,
          46707
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          4033
        ],
        "parent": [
          65051,
          66561
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          24459
        ],
        "parent": [
          39525,
          44862
        ],
        "group": "individual",
        "ind_deceased": "Y",
        "ind_suicide": "Y",
        "ind_data": {
          "alcohol": 0,
          "psychosis": 0,
          "anxiety-non-trauma": 0,
          "somatic disorder": 0,
          "bipolar spectrum illness": 0,
          "depression": 0,
          "interpersonal trauma": 0,
          "PD-Cluster C-anxiety": 0,
          "PD-Cluster B-emotional": 0,
          "PD": 0,
          "Impulse control disorder": 0,
          "obesity": 0,
          "cardiovascular": 0,
          "COPD": 0,
          "asthma": 0,
          "immune-autoimmune": 0
        }
      },
      {
        "name": [
          21697
        ],
        "parent": [
          65467,
          44856
        ],
        "group": "individual",
        "ind_deceased": "Y",
        "ind_suicide": "Y",
        "ind_data": {
          "alcohol": 0,
          "psychosis": 0,
          "anxiety-non-trauma": 0,
          "somatic disorder": 0,
          "bipolar spectrum illness": 0,
          "depression": 0,
          "interpersonal trauma": 0,
          "PD-Cluster C-anxiety": 0,
          "PD-Cluster B-emotional": 0,
          "PD": 0,
          "Impulse control disorder": 0,
          "obesity": 0,
          "cardiovascular": 0,
          "COPD": 0,
          "asthma": 0,
          "immune-autoimmune": 0
        }
      },
      {
        "name": [
          25707
        ],
        "parent": [
          7435,
          7438
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          15409
        ],
        "parent": [
          39525,
          44862
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          41582
        ],
        "parent": [
          65051,
          66561
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          66855,
          0
        ],
        "parent": [
          66856,
          16011
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N"
      },
      {
        "name": [
          66855,
          1629
        ],
        "parent": [
          66856,
          16011
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "N",
        "mal_suicide": "N"
      },
      {
        "name": [
          66856,
          16011
        ],
        "parent": [
          46709,
          46710
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "N",
        "mal_suicide": "N"
      },
      {
        "name": [
          66856,
          0
        ],
        "parent": [
          46709,
          46710
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N"
      },
      {
        "name": [
          7435,
          7438
        ],
        "parent": [
          62887,
          62888
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          10252
        ],
        "parent": [
          65467,
          44856
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          40542
        ],
        "parent": [
          37542,
          37543
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          37541
        ],
        "parent": [
          37542,
          37543
        ],
        "group": "individual",
        "ind_deceased": "Y",
        "ind_suicide": "Y",
        "ind_data": {
          "alcohol": 0,
          "psychosis": 0,
          "anxiety-non-trauma": 0,
          "somatic disorder": 0,
          "bipolar spectrum illness": 0,
          "depression": 0,
          "interpersonal trauma": 0,
          "PD-Cluster C-anxiety": 0,
          "PD-Cluster B-emotional": 0,
          "PD": 0,
          "Impulse control disorder": 0,
          "obesity": 0,
          "cardiovascular": 0,
          "COPD": 0,
          "asthma": 0,
          "immune-autoimmune": 0
        }
      },
      {
        "name": [
          37542,
          37543
        ],
        "parent": [
          62892,
          62893
        ],
        "group": "couple",
        "fem_deceased": "N",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          40786
        ],
        "parent": [
          40787,
          40788
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          40787,
          40788
        ],
        "parent": [
          51000,
          16931
        ],
        "group": "couple",
        "fem_deceased": "N",
        "fem_suicide": "N",
        "mal_deceased": "N",
        "mal_suicide": "N"
      },
      {
        "name": [
          40787,
          42258
        ],
        "parent": [
          51000,
          16931
        ],
        "group": "couple",
        "fem_deceased": "N",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "Y",
        "mal_data": {
          "alcohol": 0,
          "psychosis": 0,
          "anxiety-non-trauma": 0,
          "somatic disorder": 0,
          "bipolar spectrum illness": 0,
          "depression": 0,
          "interpersonal trauma": 0,
          "PD-Cluster C-anxiety": 0,
          "PD-Cluster B-emotional": 0,
          "PD": 0,
          "Impulse control disorder": 0,
          "obesity": 0,
          "cardiovascular": 1,
          "COPD": 0,
          "asthma": 0,
          "immune-autoimmune": 0
        }
      },
      {
        "name": [
          40787,
          0
        ],
        "parent": [
          51000,
          16931
        ],
        "group": "couple",
        "fem_deceased": "N",
        "fem_suicide": "N"
      },
      {
        "name": [
          59289
        ],
        "parent": [
          65467,
          44856
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          54490
        ],
        "parent": [
          39657,
          34847
        ],
        "group": "individual",
        "ind_deceased": "Y",
        "ind_suicide": "Y",
        "ind_data": {
          "alcohol": 0,
          "psychosis": 0,
          "anxiety-non-trauma": 0,
          "somatic disorder": 0,
          "bipolar spectrum illness": 0,
          "depression": 0,
          "interpersonal trauma": 0,
          "PD-Cluster C-anxiety": 0,
          "PD-Cluster B-emotional": 0,
          "PD": 0,
          "Impulse control disorder": 0,
          "obesity": 0,
          "cardiovascular": 0,
          "COPD": 0,
          "asthma": 0,
          "immune-autoimmune": 0
        }
      },
      {
        "name": [
          42257
        ],
        "parent": [
          40787,
          40788
        ],
        "group": "individual",
        "ind_deceased": "Y",
        "ind_suicide": "Y",
        "ind_data": {
          "alcohol": 0,
          "psychosis": 0,
          "anxiety-non-trauma": 0,
          "somatic disorder": 0,
          "bipolar spectrum illness": 0,
          "depression": 0,
          "interpersonal trauma": 0,
          "PD-Cluster C-anxiety": 0,
          "PD-Cluster B-emotional": 0,
          "PD": 0,
          "Impulse control disorder": 0,
          "obesity": 0,
          "cardiovascular": 0,
          "COPD": 0,
          "asthma": 0,
          "immune-autoimmune": 0
        }
      },
      {
        "name": [
          16807
        ],
        "parent": [
          40787,
          40788
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          3388
        ],
        "parent": [
          66856,
          16011
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          9348
        ],
        "parent": [
          61046,
          24070
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          17565
        ],
        "parent": [
          40787,
          40788
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          59713
        ],
        "parent": [
          40787,
          40788
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          49223
        ],
        "parent": [
          49224,
          49225
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          49224,
          49225
        ],
        "parent": [
          21769,
          21770
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "Y",
        "mal_data": {
          "alcohol": 0,
          "psychosis": 0,
          "anxiety-non-trauma": 0,
          "somatic disorder": 0,
          "bipolar spectrum illness": 0,
          "depression": 1,
          "interpersonal trauma": 0,
          "PD-Cluster C-anxiety": 0,
          "PD-Cluster B-emotional": 0,
          "PD": 0,
          "Impulse control disorder": 0,
          "obesity": 0,
          "cardiovascular": 0,
          "COPD": 0,
          "asthma": 0,
          "immune-autoimmune": 0
        }
      },
      {
        "name": [
          35224,
          49225
        ],
        "parent": [
          21769,
          21770
        ],
        "group": "couple",
        "fem_deceased": "N",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "Y",
        "mal_data": {
          "alcohol": 0,
          "psychosis": 0,
          "anxiety-non-trauma": 0,
          "somatic disorder": 0,
          "bipolar spectrum illness": 0,
          "depression": 1,
          "interpersonal trauma": 0,
          "PD-Cluster C-anxiety": 0,
          "PD-Cluster B-emotional": 0,
          "PD": 0,
          "Impulse control disorder": 0,
          "obesity": 0,
          "cardiovascular": 0,
          "COPD": 0,
          "asthma": 0,
          "immune-autoimmune": 0
        }
      },
      {
        "name": [
          39657,
          34847
        ],
        "parent": [
          28375,
          705
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          12307
        ],
        "parent": [
          62901,
          62900
        ],
        "group": "individual",
        "ind_deceased": "Y",
        "ind_suicide": "N"
      },
      {
        "name": [
          55993
        ],
        "parent": [
          62901,
          62900
        ],
        "group": "individual",
        "ind_deceased": "Y",
        "ind_suicide": "N"
      },
      {
        "name": [
          53751
        ],
        "parent": [
          62901,
          62900
        ],
        "group": "individual",
        "ind_deceased": "Y",
        "ind_suicide": "N"
      },
      {
        "name": [
          27839
        ],
        "parent": [
          62901,
          62900
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          23609
        ],
        "parent": [
          62901,
          62900
        ],
        "group": "individual",
        "ind_deceased": "Y",
        "ind_suicide": "N"
      },
      {
        "name": [
          61046,
          24070
        ],
        "parent": [
          61047,
          22124
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "Y",
        "mal_deceased": "Y",
        "mal_suicide": "N",
        "fem_data": {
          "alcohol": 1,
          "psychosis": 0,
          "anxiety-non-trauma": 0,
          "somatic disorder": 0,
          "bipolar spectrum illness": 0,
          "depression": 1,
          "interpersonal trauma": 0,
          "PD-Cluster C-anxiety": 0,
          "PD-Cluster B-emotional": 0,
          "PD": 1,
          "Impulse control disorder": 0,
          "obesity": 0,
          "cardiovascular": 1,
          "COPD": 1,
          "asthma": 0,
          "immune-autoimmune": 0
        }
      },
      {
        "name": [
          61047,
          22124
        ],
        "parent": [
          66556,
          66557
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          3558
        ],
        "parent": [
          37542,
          37543
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          1073
        ],
        "parent": [
          61046,
          24070
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          30603
        ],
        "parent": [
          49224,
          49225
        ],
        "group": "individual",
        "ind_deceased": "Y",
        "ind_suicide": "N"
      },
      {
        "name": [
          51157
        ],
        "parent": [
          7435,
          7438
        ],
        "group": "individual",
        "ind_deceased": "Y",
        "ind_suicide": "N"
      },
      {
        "name": [
          51179
        ],
        "parent": [
          7435,
          7438
        ],
        "group": "individual",
        "ind_deceased": "Y",
        "ind_suicide": "Y",
        "ind_data": {
          "alcohol": 0,
          "psychosis": 0,
          "anxiety-non-trauma": 0,
          "somatic disorder": 0,
          "bipolar spectrum illness": 0,
          "depression": 0,
          "interpersonal trauma": 0,
          "PD-Cluster C-anxiety": 0,
          "PD-Cluster B-emotional": 0,
          "PD": 0,
          "Impulse control disorder": 0,
          "obesity": 0,
          "cardiovascular": 0,
          "COPD": 0,
          "asthma": 0,
          "immune-autoimmune": 0
        }
      },
      {
        "name": [
          16256
        ],
        "parent": [
          66855,
          0
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          61306
        ],
        "parent": [
          35224,
          49225
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          1386
        ],
        "parent": [
          35224,
          49225
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          67960
        ],
        "parent": [
          66855,
          0
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      }
    ],
    family42623: [
      {
        "name": [
          22544,
          22545
        ],
        "parent": "",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N",
        "group": "couple"
      },
      {
        "name": [
          926,
          924
        ],
        "parent": [
          47002,
          47001
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          8555,
          8554
        ],
        "parent": [
          30337,
          30338
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          46892,
          46891
        ],
        "parent": [
          22544,
          22545
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          42933,
          42934
        ],
        "parent": [
          22544,
          22545
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          42936,
          42935
        ],
        "parent": [
          42933,
          42934
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          42940,
          42939
        ],
        "parent": [
          42936,
          42935
        ],
        "group": "couple",
        "fem_deceased": "N",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          30337,
          30338
        ],
        "parent": [
          47002,
          47001
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          17658,
          17657
        ],
        "parent": [
          47002,
          47001
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          24161,
          24162
        ],
        "parent": [
          926,
          924
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          29873,
          29872
        ],
        "parent": [
          47002,
          47001
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          47002,
          47001
        ],
        "parent": [
          22544,
          22545
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          43821,
          66500
        ],
        "parent": [
          29873,
          29872
        ],
        "group": "couple",
        "fem_deceased": "N",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          37851,
          37852
        ],
        "parent": [
          24161,
          24162
        ],
        "group": "couple",
        "fem_deceased": "N",
        "fem_suicide": "N",
        "mal_deceased": "N",
        "mal_suicide": "N"
      },
      {
        "name": [
          62263,
          47563
        ],
        "parent": [
          37851,
          37852
        ],
        "group": "couple",
        "fem_deceased": "N",
        "fem_suicide": "N",
        "mal_deceased": "N",
        "mal_suicide": "N"
      },
      {
        "name": [
          12516,
          12515
        ],
        "parent": [
          17658,
          17657
        ],
        "group": "couple",
        "fem_deceased": "N",
        "fem_suicide": "N",
        "mal_deceased": "N",
        "mal_suicide": "N"
      },
      {
        "name": [
          12524
        ],
        "parent": [
          12516,
          12515
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          12525
        ],
        "parent": [
          12516,
          12515
        ],
        "group": "individual",
        "ind_deceased": "Y",
        "ind_suicide": "N"
      },
      {
        "name": [
          63290,
          63289
        ],
        "parent": [
          46892,
          46891
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          22384,
          47561
        ],
        "parent": [
          62263,
          47563
        ],
        "group": "couple",
        "fem_deceased": "N",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "Y",
        "mal_data": {
          "alcohol": 0,
          "psychosis": 0,
          "anxiety-non-trauma": 0,
          "somatic disorder": 0,
          "bipolar spectrum illness": 0,
          "depression": 0,
          "interpersonal trauma": 0,
          "PD-Cluster C-anxiety": 0,
          "PD-Cluster B-emotional": 0,
          "PD": 0,
          "Impulse control disorder": 0,
          "obesity": 0,
          "cardiovascular": 0,
          "COPD": 0,
          "asthma": 0,
          "immune-autoimmune": 0
        }
      },
      {
        "name": [
          51648
        ],
        "parent": [
          216,
          20110
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          15778
        ],
        "parent": [
          15779,
          15780
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          15779,
          15780
        ],
        "parent": [
          49288,
          53777
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "Y",
        "mal_deceased": "Y",
        "mal_suicide": "Y",
        "fem_data": {
          "alcohol": 0,
          "psychosis": 0,
          "anxiety-non-trauma": 0,
          "somatic disorder": 0,
          "bipolar spectrum illness": 0,
          "depression": 0,
          "interpersonal trauma": 0,
          "PD-Cluster C-anxiety": 0,
          "PD-Cluster B-emotional": 0,
          "PD": 0,
          "Impulse control disorder": 0,
          "obesity": 0,
          "cardiovascular": 0,
          "COPD": 0,
          "asthma": 0,
          "immune-autoimmune": 0
        },
        "mal_data": {
          "alcohol": 1,
          "psychosis": 0,
          "anxiety-non-trauma": 0,
          "somatic disorder": 0,
          "bipolar spectrum illness": 0,
          "depression": 0,
          "interpersonal trauma": 0,
          "PD-Cluster C-anxiety": 0,
          "PD-Cluster B-emotional": 0,
          "PD": 0,
          "Impulse control disorder": 0,
          "obesity": 0,
          "cardiovascular": 1,
          "COPD": 0,
          "asthma": 0,
          "immune-autoimmune": 0
        }
      },
      {
        "name": [
          15779,
          67194
        ],
        "parent": [
          49288,
          53777
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "Y",
        "mal_deceased": "N",
        "mal_suicide": "N",
        "fem_data": {
          "alcohol": 0,
          "psychosis": 0,
          "anxiety-non-trauma": 0,
          "somatic disorder": 0,
          "bipolar spectrum illness": 0,
          "depression": 0,
          "interpersonal trauma": 0,
          "PD-Cluster C-anxiety": 0,
          "PD-Cluster B-emotional": 0,
          "PD": 0,
          "Impulse control disorder": 0,
          "obesity": 0,
          "cardiovascular": 0,
          "COPD": 0,
          "asthma": 0,
          "immune-autoimmune": 0
        }
      },
      {
        "name": [
          15779,
          56426
        ],
        "parent": [
          49288,
          53777
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "Y",
        "mal_deceased": "N",
        "mal_suicide": "N",
        "fem_data": {
          "alcohol": 0,
          "psychosis": 0,
          "anxiety-non-trauma": 0,
          "somatic disorder": 0,
          "bipolar spectrum illness": 0,
          "depression": 0,
          "interpersonal trauma": 0,
          "PD-Cluster C-anxiety": 0,
          "PD-Cluster B-emotional": 0,
          "PD": 0,
          "Impulse control disorder": 0,
          "obesity": 0,
          "cardiovascular": 0,
          "COPD": 0,
          "asthma": 0,
          "immune-autoimmune": 0
        }
      },
      {
        "name": [
          67192,
          0
        ],
        "parent": [
          15779,
          15780
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "Y",
        "fem_data": {
          "alcohol": 0,
          "psychosis": 0,
          "anxiety-non-trauma": 0,
          "somatic disorder": 0,
          "bipolar spectrum illness": 0,
          "depression": 0,
          "interpersonal trauma": 0,
          "PD-Cluster C-anxiety": 0,
          "PD-Cluster B-emotional": 0,
          "PD": 0,
          "Impulse control disorder": 0,
          "obesity": 0,
          "cardiovascular": 0,
          "COPD": 0,
          "asthma": 0,
          "immune-autoimmune": 0
        }
      },
      {
        "name": [
          67192,
          64468
        ],
        "parent": [
          15779,
          15780
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "Y",
        "mal_deceased": "N",
        "mal_suicide": "N",
        "fem_data": {
          "alcohol": 0,
          "psychosis": 0,
          "anxiety-non-trauma": 0,
          "somatic disorder": 0,
          "bipolar spectrum illness": 0,
          "depression": 0,
          "interpersonal trauma": 0,
          "PD-Cluster C-anxiety": 0,
          "PD-Cluster B-emotional": 0,
          "PD": 0,
          "Impulse control disorder": 0,
          "obesity": 0,
          "cardiovascular": 0,
          "COPD": 0,
          "asthma": 0,
          "immune-autoimmune": 0
        }
      },
      {
        "name": [
          39746,
          17748
        ],
        "parent": [
          12516,
          12515
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "Y",
        "mal_deceased": "N",
        "mal_suicide": "N",
        "fem_data": {
          "alcohol": 0,
          "psychosis": 0,
          "anxiety-non-trauma": 0,
          "somatic disorder": 0,
          "bipolar spectrum illness": 0,
          "depression": 0,
          "interpersonal trauma": 0,
          "PD-Cluster C-anxiety": 0,
          "PD-Cluster B-emotional": 0,
          "PD": 0,
          "Impulse control disorder": 0,
          "obesity": 0,
          "cardiovascular": 0,
          "COPD": 0,
          "asthma": 0,
          "immune-autoimmune": 0
        }
      },
      {
        "name": [
          37441
        ],
        "parent": [
          62263,
          47563
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          17747
        ],
        "parent": [
          39746,
          17748
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          51881
        ],
        "parent": [
          51882,
          51883
        ],
        "group": "individual",
        "ind_deceased": "Y",
        "ind_suicide": "Y",
        "ind_data": {
          "alcohol": 0,
          "psychosis": 0,
          "anxiety-non-trauma": 0,
          "somatic disorder": 0,
          "bipolar spectrum illness": 0,
          "depression": 0,
          "interpersonal trauma": 0,
          "PD-Cluster C-anxiety": 0,
          "PD-Cluster B-emotional": 0,
          "PD": 0,
          "Impulse control disorder": 0,
          "obesity": 0,
          "cardiovascular": 0,
          "COPD": 0,
          "asthma": 0,
          "immune-autoimmune": 0
        }
      },
      {
        "name": [
          51882,
          51883
        ],
        "parent": [
          43821,
          66500
        ],
        "group": "couple",
        "fem_deceased": "N",
        "fem_suicide": "N",
        "mal_deceased": "N",
        "mal_suicide": "N"
      },
      {
        "name": [
          59708,
          51883
        ],
        "parent": [
          43821,
          66500
        ],
        "group": "couple",
        "fem_deceased": "N",
        "fem_suicide": "N",
        "mal_deceased": "N",
        "mal_suicide": "N"
      },
      {
        "name": [
          29625
        ],
        "parent": [
          17658,
          17657
        ],
        "group": "individual",
        "ind_deceased": "Y",
        "ind_suicide": "N"
      },
      {
        "name": [
          2077
        ],
        "parent": [
          15779,
          15780
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          8951
        ],
        "parent": [
          8952,
          8953
        ],
        "group": "individual",
        "ind_deceased": "Y",
        "ind_suicide": "Y",
        "ind_data": {
          "alcohol": 0,
          "psychosis": 0,
          "anxiety-non-trauma": 0,
          "somatic disorder": 0,
          "bipolar spectrum illness": 0,
          "depression": 0,
          "interpersonal trauma": 0,
          "PD-Cluster C-anxiety": 0,
          "PD-Cluster B-emotional": 0,
          "PD": 0,
          "Impulse control disorder": 0,
          "obesity": 0,
          "cardiovascular": 0,
          "COPD": 0,
          "asthma": 0,
          "immune-autoimmune": 0
        }
      },
      {
        "name": [
          8952,
          8953
        ],
        "parent": [
          19795,
          55604
        ],
        "group": "couple",
        "fem_deceased": "N",
        "fem_suicide": "N",
        "mal_deceased": "N",
        "mal_suicide": "N"
      },
      {
        "name": [
          16705
        ],
        "parent": [
          12516,
          12515
        ],
        "group": "individual",
        "ind_deceased": "Y",
        "ind_suicide": "N"
      },
      {
        "name": [
          47028
        ],
        "parent": [
          17658,
          17657
        ],
        "group": "individual",
        "ind_deceased": "Y",
        "ind_suicide": "Y",
        "ind_data": {
          "alcohol": 0,
          "psychosis": 0,
          "anxiety-non-trauma": 0,
          "somatic disorder": 0,
          "bipolar spectrum illness": 0,
          "depression": 0,
          "interpersonal trauma": 0,
          "PD-Cluster C-anxiety": 0,
          "PD-Cluster B-emotional": 0,
          "PD": 0,
          "Impulse control disorder": 0,
          "obesity": 0,
          "cardiovascular": 0,
          "COPD": 0,
          "asthma": 0,
          "immune-autoimmune": 0
        }
      },
      {
        "name": [
          49288,
          53777
        ],
        "parent": [
          17658,
          17657
        ],
        "group": "couple",
        "fem_deceased": "N",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          49287
        ],
        "parent": [
          49288,
          53777
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          19795,
          55604
        ],
        "parent": [
          8555,
          8554
        ],
        "group": "couple",
        "fem_deceased": "N",
        "fem_suicide": "N",
        "mal_deceased": "N",
        "mal_suicide": "N"
      },
      {
        "name": [
          32135,
          26928
        ],
        "parent": [
          42940,
          42939
        ],
        "group": "couple",
        "fem_deceased": "N",
        "fem_suicide": "N",
        "mal_deceased": "N",
        "mal_suicide": "N"
      },
      {
        "name": [
          216,
          20110
        ],
        "parent": [
          63290,
          63289
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          216,
          60349
        ],
        "parent": [
          63290,
          63289
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          34988
        ],
        "parent": [
          32135,
          26928
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          16029
        ],
        "parent": [
          32135,
          26928
        ],
        "group": "individual",
        "ind_deceased": "Y",
        "ind_suicide": "Y",
        "ind_data": {
          "alcohol": 0,
          "psychosis": 0,
          "anxiety-non-trauma": 0,
          "somatic disorder": 0,
          "bipolar spectrum illness": 0,
          "depression": 0,
          "interpersonal trauma": 0,
          "PD-Cluster C-anxiety": 0,
          "PD-Cluster B-emotional": 0,
          "PD": 0,
          "Impulse control disorder": 0,
          "obesity": 0,
          "cardiovascular": 0,
          "COPD": 0,
          "asthma": 0,
          "immune-autoimmune": 0
        }
      },
      {
        "name": [
          67343
        ],
        "parent": [
          12516,
          12515
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          10787
        ],
        "parent": [
          216,
          20110
        ],
        "group": "individual",
        "ind_deceased": "Y",
        "ind_suicide": "Y",
        "ind_data": {
          "alcohol": 0,
          "psychosis": 0,
          "anxiety-non-trauma": 0,
          "somatic disorder": 0,
          "bipolar spectrum illness": 0,
          "depression": 0,
          "interpersonal trauma": 0,
          "PD-Cluster C-anxiety": 0,
          "PD-Cluster B-emotional": 0,
          "PD": 1,
          "Impulse control disorder": 0,
          "obesity": 0,
          "cardiovascular": 0,
          "COPD": 1,
          "asthma": 0,
          "immune-autoimmune": 0
        }
      },
      {
        "name": [
          14722
        ],
        "parent": [
          67192,
          0
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          5250
        ],
        "parent": [
          59708,
          51883
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          62561
        ],
        "parent": [
          67192,
          0
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          40923
        ],
        "parent": [
          67192,
          0
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          28476
        ],
        "parent": [
          22384,
          47561
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      }
    ],
    family603481: [
      {
        "name": [
          41603,
          8511
        ],
        "parent": "",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N",
        "group": "couple"
      },
      {
        "name": [
          41207,
          41206
        ],
        "parent": [
          41211,
          41218
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          41211,
          41218
        ],
        "parent": [
          41603,
          8511
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          34929,
          41218
        ],
        "parent": [
          41603,
          8511
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          41223,
          41224
        ],
        "parent": [
          41207,
          41206
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          14793,
          52663
        ],
        "parent": [
          41624,
          41626
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          8123,
          8124
        ],
        "parent": [
          13411,
          13410
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          13408,
          13409
        ],
        "parent": [
          41603,
          8511
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          13411,
          13410
        ],
        "parent": [
          13408,
          13409
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          13430,
          62337
        ],
        "parent": [
          13411,
          13410
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          8585,
          8592
        ],
        "parent": [
          41603,
          8511
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          8598,
          8594
        ],
        "parent": [
          8585,
          8592
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          14842,
          14843
        ],
        "parent": [
          8598,
          8594
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          39435
        ],
        "parent": [
          8092,
          8091
        ],
        "group": "individual",
        "ind_deceased": "Y",
        "ind_suicide": "N"
      },
      {
        "name": [
          45051,
          45048
        ],
        "parent": [
          59218,
          59217
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          51086,
          51085
        ],
        "parent": [
          43616,
          67442
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          53091,
          53088
        ],
        "parent": [
          34929,
          41218
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          59218,
          59217
        ],
        "parent": [
          8585,
          8592
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          65322,
          65323
        ],
        "parent": [
          41223,
          41224
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          16715
        ],
        "parent": [
          44722,
          40117
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          26002,
          26003
        ],
        "parent": [
          53091,
          53088
        ],
        "group": "couple",
        "fem_deceased": "N",
        "fem_suicide": "N",
        "mal_deceased": "N",
        "mal_suicide": "N"
      },
      {
        "name": [
          15613,
          41623
        ],
        "parent": [
          41603,
          8511
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          41624,
          41626
        ],
        "parent": [
          41603,
          8511
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          50535,
          50536
        ],
        "parent": [
          41603,
          8511
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          7536,
          7534
        ],
        "parent": [
          54489,
          54491
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          8090,
          8089
        ],
        "parent": [
          13408,
          13409
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          8092,
          8091
        ],
        "parent": [
          13408,
          13409
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          9797,
          9799
        ],
        "parent": [
          8585,
          8592
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          43616,
          67442
        ],
        "parent": [
          50535,
          50536
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          44722,
          40117
        ],
        "parent": [
          8092,
          8091
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "Y",
        "mal_deceased": "Y",
        "mal_suicide": "N",
        "fem_data": {
          "alcohol": 0,
          "psychosis": 0,
          "anxiety-non-trauma": 0,
          "somatic disorder": 0,
          "bipolar spectrum illness": 0,
          "depression": 1,
          "interpersonal trauma": 0,
          "PD-Cluster C-anxiety": 0,
          "PD-Cluster B-emotional": 0,
          "PD": 0,
          "Impulse control disorder": 0,
          "obesity": 0,
          "cardiovascular": 0,
          "COPD": 0,
          "asthma": 0,
          "immune-autoimmune": 0
        }
      },
      {
        "name": [
          44722,
          44720
        ],
        "parent": [
          8092,
          8091
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "Y",
        "mal_deceased": "N",
        "mal_suicide": "N",
        "fem_data": {
          "alcohol": 0,
          "psychosis": 0,
          "anxiety-non-trauma": 0,
          "somatic disorder": 0,
          "bipolar spectrum illness": 0,
          "depression": 1,
          "interpersonal trauma": 0,
          "PD-Cluster C-anxiety": 0,
          "PD-Cluster B-emotional": 0,
          "PD": 0,
          "Impulse control disorder": 0,
          "obesity": 0,
          "cardiovascular": 0,
          "COPD": 0,
          "asthma": 0,
          "immune-autoimmune": 0
        }
      },
      {
        "name": [
          64365,
          64364
        ],
        "parent": [
          14793,
          52663
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          36029,
          36028
        ],
        "parent": [
          7536,
          7534
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          47544,
          47546
        ],
        "parent": [
          7536,
          7534
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          35068,
          35069
        ],
        "parent": [
          64365,
          64364
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          48859
        ],
        "parent": [
          47544,
          47546
        ],
        "group": "individual",
        "ind_deceased": "Y",
        "ind_suicide": "N"
      },
      {
        "name": [
          48863,
          48862
        ],
        "parent": [
          47544,
          47546
        ],
        "group": "couple",
        "fem_deceased": "N",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "Y",
        "mal_data": {
          "alcohol": 0,
          "psychosis": 0,
          "anxiety-non-trauma": 0,
          "somatic disorder": 0,
          "bipolar spectrum illness": 0,
          "depression": 1,
          "interpersonal trauma": 0,
          "PD-Cluster C-anxiety": 0,
          "PD-Cluster B-emotional": 0,
          "PD": 0,
          "Impulse control disorder": 0,
          "obesity": 0,
          "cardiovascular": 0,
          "COPD": 0,
          "asthma": 0,
          "immune-autoimmune": 0
        }
      },
      {
        "name": [
          48864
        ],
        "parent": [
          47544,
          47546
        ],
        "group": "individual",
        "ind_deceased": "Y",
        "ind_suicide": "N"
      },
      {
        "name": [
          49093
        ],
        "parent": [
          8092,
          8091
        ],
        "group": "individual",
        "ind_deceased": "Y",
        "ind_suicide": "N"
      },
      {
        "name": [
          54489,
          54491
        ],
        "parent": [
          15613,
          41623
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          31184,
          31183
        ],
        "parent": [
          36029,
          36028
        ],
        "group": "couple",
        "fem_deceased": "N",
        "fem_suicide": "N",
        "mal_deceased": "N",
        "mal_suicide": "N"
      },
      {
        "name": [
          33868,
          33869
        ],
        "parent": [
          35068,
          35069
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "N",
        "mal_suicide": "N"
      },
      {
        "name": [
          14762,
          53588
        ],
        "parent": [
          45051,
          45048
        ],
        "group": "couple",
        "fem_deceased": "N",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          942
        ],
        "parent": [
          5419,
          53625
        ],
        "group": "individual",
        "ind_deceased": "Y",
        "ind_suicide": "N"
      },
      {
        "name": [
          58903,
          58702
        ],
        "parent": [
          31184,
          31183
        ],
        "group": "couple",
        "fem_deceased": "N",
        "fem_suicide": "N",
        "mal_deceased": "N",
        "mal_suicide": "N"
      },
      {
        "name": [
          13733,
          52600
        ],
        "parent": [
          65322,
          65323
        ],
        "group": "couple",
        "fem_deceased": "N",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "Y",
        "mal_data": {
          "alcohol": 0,
          "psychosis": 0,
          "anxiety-non-trauma": 0,
          "somatic disorder": 0,
          "bipolar spectrum illness": 0,
          "depression": 0,
          "interpersonal trauma": 0,
          "PD-Cluster C-anxiety": 0,
          "PD-Cluster B-emotional": 0,
          "PD": 0,
          "Impulse control disorder": 0,
          "obesity": 0,
          "cardiovascular": 0,
          "COPD": 0,
          "asthma": 0,
          "immune-autoimmune": 0
        }
      },
      {
        "name": [
          18995
        ],
        "parent": [
          57193,
          57195
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          52598
        ],
        "parent": [
          13733,
          52600
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          26738
        ],
        "parent": [
          26739,
          12886
        ],
        "group": "individual",
        "ind_deceased": "Y",
        "ind_suicide": "N"
      },
      {
        "name": [
          26739,
          12886
        ],
        "parent": [
          2309,
          2178
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "N",
        "mal_suicide": "N"
      },
      {
        "name": [
          49268,
          32807
        ],
        "parent": [
          44722,
          40117
        ],
        "group": "couple",
        "fem_deceased": "N",
        "fem_suicide": "N",
        "mal_deceased": "N",
        "mal_suicide": "N"
      },
      {
        "name": [
          22421
        ],
        "parent": [
          26739,
          12886
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          24299
        ],
        "parent": [
          51086,
          51085
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          52352
        ],
        "parent": [
          51086,
          51085
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          41708
        ],
        "parent": [
          58903,
          58702
        ],
        "group": "individual",
        "ind_deceased": "Y",
        "ind_suicide": "Y",
        "ind_data": {
          "alcohol": 0,
          "psychosis": 0,
          "anxiety-non-trauma": 0,
          "somatic disorder": 0,
          "bipolar spectrum illness": 0,
          "depression": 0,
          "interpersonal trauma": 0,
          "PD-Cluster C-anxiety": 0,
          "PD-Cluster B-emotional": 0,
          "PD": 0,
          "Impulse control disorder": 0,
          "obesity": 0,
          "cardiovascular": 0,
          "COPD": 0,
          "asthma": 0,
          "immune-autoimmune": 0
        }
      },
      {
        "name": [
          16773
        ],
        "parent": [
          51086,
          51085
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          25317
        ],
        "parent": [
          26739,
          12886
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          32003
        ],
        "parent": [
          58903,
          58702
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          54570
        ],
        "parent": [
          57193,
          57195
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          10391,
          15569
        ],
        "parent": [
          15570,
          38562
        ],
        "group": "couple",
        "fem_deceased": "N",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "Y",
        "mal_data": {
          "alcohol": 0,
          "psychosis": 0,
          "anxiety-non-trauma": 0,
          "somatic disorder": 0,
          "bipolar spectrum illness": 0,
          "depression": 0,
          "interpersonal trauma": 0,
          "PD-Cluster C-anxiety": 0,
          "PD-Cluster B-emotional": 0,
          "PD": 0,
          "Impulse control disorder": 0,
          "obesity": 0,
          "cardiovascular": 0,
          "COPD": 0,
          "asthma": 0,
          "immune-autoimmune": 0
        }
      },
      {
        "name": [
          15570,
          38562
        ],
        "parent": [
          26002,
          26003
        ],
        "group": "couple",
        "fem_deceased": "N",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          21545
        ],
        "parent": [
          58903,
          58702
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          57192
        ],
        "parent": [
          57193,
          57195
        ],
        "group": "individual",
        "ind_deceased": "Y",
        "ind_suicide": "Y",
        "ind_data": {
          "alcohol": 0,
          "psychosis": 0,
          "anxiety-non-trauma": 0,
          "somatic disorder": 0,
          "bipolar spectrum illness": 0,
          "depression": 0,
          "interpersonal trauma": 0,
          "PD-Cluster C-anxiety": 0,
          "PD-Cluster B-emotional": 0,
          "PD": 0,
          "Impulse control disorder": 0,
          "obesity": 0,
          "cardiovascular": 0,
          "COPD": 0,
          "asthma": 0,
          "immune-autoimmune": 0
        }
      },
      {
        "name": [
          57193,
          57195
        ],
        "parent": [
          8090,
          8089
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "N",
        "mal_suicide": "N"
      },
      {
        "name": [
          29003
        ],
        "parent": [
          48863,
          48862
        ],
        "group": "individual",
        "ind_deceased": "Y",
        "ind_suicide": "N"
      },
      {
        "name": [
          17664
        ],
        "parent": [
          33868,
          33869
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          40520
        ],
        "parent": [
          14762,
          53588
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          41792,
          41793
        ],
        "parent": [
          14762,
          53588
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "Y",
        "mal_data": {
          "alcohol": 0,
          "psychosis": 0,
          "anxiety-non-trauma": 0,
          "somatic disorder": 0,
          "bipolar spectrum illness": 0,
          "depression": 0,
          "interpersonal trauma": 0,
          "PD-Cluster C-anxiety": 0,
          "PD-Cluster B-emotional": 0,
          "PD": 0,
          "Impulse control disorder": 0,
          "obesity": 0,
          "cardiovascular": 0,
          "COPD": 0,
          "asthma": 0,
          "immune-autoimmune": 0
        }
      },
      {
        "name": [
          41824
        ],
        "parent": [
          33868,
          33869
        ],
        "group": "individual",
        "ind_deceased": "Y",
        "ind_suicide": "Y",
        "ind_data": {
          "alcohol": 0,
          "psychosis": 0,
          "anxiety-non-trauma": 0,
          "somatic disorder": 0,
          "bipolar spectrum illness": 0,
          "depression": 0,
          "interpersonal trauma": 0,
          "PD-Cluster C-anxiety": 0,
          "PD-Cluster B-emotional": 0,
          "PD": 0,
          "Impulse control disorder": 0,
          "obesity": 0,
          "cardiovascular": 0,
          "COPD": 0,
          "asthma": 0,
          "immune-autoimmune": 0
        }
      },
      {
        "name": [
          58912
        ],
        "parent": [
          51086,
          51085
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          16361
        ],
        "parent": [
          58903,
          58702
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          51033
        ],
        "parent": [
          48863,
          48862
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          51863
        ],
        "parent": [
          14762,
          53588
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          35339
        ],
        "parent": [
          41792,
          41793
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          42257
        ],
        "parent": [
          40787,
          42258
        ],
        "group": "individual",
        "ind_deceased": "Y",
        "ind_suicide": "Y",
        "ind_data": {
          "alcohol": 0,
          "psychosis": 0,
          "anxiety-non-trauma": 0,
          "somatic disorder": 0,
          "bipolar spectrum illness": 0,
          "depression": 0,
          "interpersonal trauma": 0,
          "PD-Cluster C-anxiety": 0,
          "PD-Cluster B-emotional": 0,
          "PD": 0,
          "Impulse control disorder": 0,
          "obesity": 0,
          "cardiovascular": 0,
          "COPD": 0,
          "asthma": 0,
          "immune-autoimmune": 0
        }
      },
      {
        "name": [
          40787,
          42258
        ],
        "parent": [
          51086,
          51085
        ],
        "group": "couple",
        "fem_deceased": "N",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "Y",
        "mal_data": {
          "alcohol": 0,
          "psychosis": 0,
          "anxiety-non-trauma": 0,
          "somatic disorder": 0,
          "bipolar spectrum illness": 0,
          "depression": 0,
          "interpersonal trauma": 0,
          "PD-Cluster C-anxiety": 0,
          "PD-Cluster B-emotional": 0,
          "PD": 0,
          "Impulse control disorder": 0,
          "obesity": 0,
          "cardiovascular": 1,
          "COPD": 0,
          "asthma": 0,
          "immune-autoimmune": 0
        }
      },
      {
        "name": [
          43443
        ],
        "parent": [
          58903,
          58702
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          43722
        ],
        "parent": [
          51086,
          51085
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          15343
        ],
        "parent": [
          41792,
          41793
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          3599
        ],
        "parent": [
          3600,
          3603
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          3600,
          3603
        ],
        "parent": [
          48863,
          48862
        ],
        "group": "couple",
        "fem_deceased": "N",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "Y",
        "mal_data": {
          "alcohol": 0,
          "psychosis": 0,
          "anxiety-non-trauma": 0,
          "somatic disorder": 0,
          "bipolar spectrum illness": 0,
          "depression": 1,
          "interpersonal trauma": 0,
          "PD-Cluster C-anxiety": 0,
          "PD-Cluster B-emotional": 0,
          "PD": 0,
          "Impulse control disorder": 0,
          "obesity": 0,
          "cardiovascular": 0,
          "COPD": 0,
          "asthma": 0,
          "immune-autoimmune": 0
        }
      },
      {
        "name": [
          1621
        ],
        "parent": [
          14762,
          53588
        ],
        "group": "individual",
        "ind_deceased": "Y",
        "ind_suicide": "N"
      },
      {
        "name": [
          17565
        ],
        "parent": [
          40787,
          42258
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          35893
        ],
        "parent": [
          24193,
          54134
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          6591,
          53952
        ],
        "parent": [
          53954,
          53955
        ],
        "group": "couple",
        "fem_deceased": "N",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "Y",
        "mal_data": {
          "alcohol": 0,
          "psychosis": 0,
          "anxiety-non-trauma": 0,
          "somatic disorder": 0,
          "bipolar spectrum illness": 0,
          "depression": 0,
          "interpersonal trauma": 0,
          "PD-Cluster C-anxiety": 0,
          "PD-Cluster B-emotional": 0,
          "PD": 0,
          "Impulse control disorder": 0,
          "obesity": 0,
          "cardiovascular": 0,
          "COPD": 0,
          "asthma": 0,
          "immune-autoimmune": 0
        }
      },
      {
        "name": [
          53954,
          53955
        ],
        "parent": [
          49268,
          32807
        ],
        "group": "couple",
        "fem_deceased": "N",
        "fem_suicide": "N",
        "mal_deceased": "N",
        "mal_suicide": "N"
      },
      {
        "name": [
          54067
        ],
        "parent": [
          24193,
          54134
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          62015
        ],
        "parent": [
          53954,
          53955
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          5419,
          53625
        ],
        "parent": [
          9797,
          9799
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          24193,
          54134
        ],
        "parent": [
          44722,
          40117
        ],
        "group": "couple",
        "fem_deceased": "N",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "Y",
        "mal_data": {
          "alcohol": 0,
          "psychosis": 0,
          "anxiety-non-trauma": 0,
          "somatic disorder": 0,
          "bipolar spectrum illness": 0,
          "depression": 0,
          "interpersonal trauma": 0,
          "PD-Cluster C-anxiety": 0,
          "PD-Cluster B-emotional": 0,
          "PD": 0,
          "Impulse control disorder": 0,
          "obesity": 0,
          "cardiovascular": 0,
          "COPD": 0,
          "asthma": 0,
          "immune-autoimmune": 0
        }
      },
      {
        "name": [
          34763,
          23689
        ],
        "parent": [
          14842,
          14843
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "N",
        "mal_suicide": "N"
      },
      {
        "name": [
          66245
        ],
        "parent": [
          48863,
          48862
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          14215
        ],
        "parent": [
          34763,
          23689
        ],
        "group": "individual",
        "ind_deceased": "Y",
        "ind_suicide": "Y",
        "ind_data": {
          "alcohol": 0,
          "psychosis": 0,
          "anxiety-non-trauma": 0,
          "somatic disorder": 0,
          "bipolar spectrum illness": 0,
          "depression": 1,
          "interpersonal trauma": 0,
          "PD-Cluster C-anxiety": 0,
          "PD-Cluster B-emotional": 0,
          "PD": 0,
          "Impulse control disorder": 0,
          "obesity": 1,
          "cardiovascular": 1,
          "COPD": 0,
          "asthma": 0,
          "immune-autoimmune": 0
        }
      },
      {
        "name": [
          16018
        ],
        "parent": [
          57193,
          57195
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          46484
        ],
        "parent": [
          46486,
          8832
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          46486,
          8832
        ],
        "parent": [
          8123,
          8124
        ],
        "group": "couple",
        "fem_deceased": "N",
        "fem_suicide": "N",
        "mal_deceased": "N",
        "mal_suicide": "N"
      },
      {
        "name": [
          66866
        ],
        "parent": [
          46486,
          8832
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          37438
        ],
        "parent": [
          13733,
          52600
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          34564,
          27951
        ],
        "parent": [
          13733,
          52600
        ],
        "group": "couple",
        "fem_deceased": "N",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "Y",
        "mal_data": {
          "alcohol": 0,
          "psychosis": 0,
          "anxiety-non-trauma": 0,
          "somatic disorder": 0,
          "bipolar spectrum illness": 0,
          "depression": 0,
          "interpersonal trauma": 0,
          "PD-Cluster C-anxiety": 0,
          "PD-Cluster B-emotional": 0,
          "PD": 0,
          "Impulse control disorder": 0,
          "obesity": 0,
          "cardiovascular": 0,
          "COPD": 0,
          "asthma": 0,
          "immune-autoimmune": 0
        }
      },
      {
        "name": [
          67992,
          11605
        ],
        "parent": [
          26739,
          12886
        ],
        "group": "couple",
        "fem_deceased": "N",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "Y",
        "mal_data": {
          "alcohol": 0,
          "psychosis": 0,
          "anxiety-non-trauma": 1,
          "somatic disorder": 0,
          "bipolar spectrum illness": 0,
          "depression": 1,
          "interpersonal trauma": 0,
          "PD-Cluster C-anxiety": 0,
          "PD-Cluster B-emotional": 0,
          "PD": 0,
          "Impulse control disorder": 0,
          "obesity": 0,
          "cardiovascular": 1,
          "COPD": 0,
          "asthma": 0,
          "immune-autoimmune": 0
        }
      },
      {
        "name": [
          13990
        ],
        "parent": [
          13992,
          13993
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          13992,
          13993
        ],
        "parent": [
          51086,
          51085
        ],
        "group": "couple",
        "fem_deceased": "N",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "Y",
        "mal_data": {
          "alcohol": 1,
          "psychosis": 0,
          "anxiety-non-trauma": 0,
          "somatic disorder": 0,
          "bipolar spectrum illness": 0,
          "depression": 1,
          "interpersonal trauma": 0,
          "PD-Cluster C-anxiety": 0,
          "PD-Cluster B-emotional": 0,
          "PD": 1,
          "Impulse control disorder": 0,
          "obesity": 0,
          "cardiovascular": 1,
          "COPD": 1,
          "asthma": 0,
          "immune-autoimmune": 0
        }
      },
      {
        "name": [
          22205
        ],
        "parent": [
          13733,
          52600
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          13282
        ],
        "parent": [
          5419,
          53625
        ],
        "group": "individual",
        "ind_deceased": "Y",
        "ind_suicide": "N"
      },
      {
        "name": [
          25245
        ],
        "parent": [
          44722,
          40117
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          15563
        ],
        "parent": [
          57193,
          57195
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          45888
        ],
        "parent": [
          44722,
          40117
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          2309,
          2178
        ],
        "parent": [
          13430,
          62337
        ],
        "group": "couple",
        "fem_deceased": "N",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          44400
        ],
        "parent": [
          5419,
          53625
        ],
        "group": "individual",
        "ind_deceased": "Y",
        "ind_suicide": "N"
      },
      {
        "name": [
          2250
        ],
        "parent": [
          5419,
          53625
        ],
        "group": "individual",
        "ind_deceased": "Y",
        "ind_suicide": "Y",
        "ind_data": {
          "alcohol": 0,
          "psychosis": 0,
          "anxiety-non-trauma": 0,
          "somatic disorder": 0,
          "bipolar spectrum illness": 0,
          "depression": 0,
          "interpersonal trauma": 0,
          "PD-Cluster C-anxiety": 0,
          "PD-Cluster B-emotional": 0,
          "PD": 0,
          "Impulse control disorder": 0,
          "obesity": 0,
          "cardiovascular": 0,
          "COPD": 0,
          "asthma": 0,
          "immune-autoimmune": 0
        }
      },
      {
        "name": [
          44500
        ],
        "parent": [
          14762,
          53588
        ],
        "group": "individual",
        "ind_deceased": "Y",
        "ind_suicide": "N"
      },
      {
        "name": [
          28494
        ],
        "parent": [
          46486,
          8832
        ],
        "group": "individual",
        "ind_deceased": "Y",
        "ind_suicide": "Y",
        "ind_data": {
          "alcohol": 0,
          "psychosis": 0,
          "anxiety-non-trauma": 0,
          "somatic disorder": 0,
          "bipolar spectrum illness": 0,
          "depression": 0,
          "interpersonal trauma": 0,
          "PD-Cluster C-anxiety": 0,
          "PD-Cluster B-emotional": 0,
          "PD": 0,
          "Impulse control disorder": 0,
          "obesity": 0,
          "cardiovascular": 0,
          "COPD": 0,
          "asthma": 0,
          "immune-autoimmune": 0
        }
      },
      {
        "name": [
          4810
        ],
        "parent": [
          67992,
          11605
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          44349
        ],
        "parent": [
          67992,
          11605
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          48861
        ],
        "parent": [
          34564,
          27951
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          62982
        ],
        "parent": [
          53954,
          53955
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          41152
        ],
        "parent": [
          53954,
          53955
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          20058
        ],
        "parent": [
          10391,
          15569
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          3142
        ],
        "parent": [
          6591,
          53952
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          13091
        ],
        "parent": [
          5419,
          53625
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          13099
        ],
        "parent": [
          5419,
          53625
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          13100
        ],
        "parent": [
          5419,
          53625
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      }
    ],
    family68939: [
      {
        "name": [
          36152,
          36153
        ],
        "parent": "",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N",
        "group": "couple"
      },
      {
        "name": [
          31659,
          31660
        ],
        "parent": [
          21773,
          21775
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          36151,
          36150
        ],
        "parent": [
          36152,
          36153
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          36156,
          36157
        ],
        "parent": [
          36151,
          36150
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          62334,
          62331
        ],
        "parent": [
          63553,
          63554
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          67079,
          67080
        ],
        "parent": [
          36152,
          36153
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          67086,
          67085
        ],
        "parent": [
          67079,
          67080
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          67087,
          67085
        ],
        "parent": [
          67079,
          67080
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          67093,
          67094
        ],
        "parent": [
          67079,
          67080
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "N",
        "mal_suicide": "N"
      },
      {
        "name": [
          1688,
          1689
        ],
        "parent": [
          36152,
          36153
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          1690,
          1691
        ],
        "parent": [
          1688,
          1689
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          1698,
          1697
        ],
        "parent": [
          1690,
          1691
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          5805,
          5806
        ],
        "parent": [
          21810,
          21809
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          28453,
          28454
        ],
        "parent": [
          36152,
          36153
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          60623,
          60624
        ],
        "parent": [
          42470,
          42471
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          62883,
          62884
        ],
        "parent": [
          36152,
          36153
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          42470,
          42471
        ],
        "parent": [
          36152,
          36153
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          42477,
          42478
        ],
        "parent": [
          60623,
          60624
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          54933,
          54932
        ],
        "parent": [
          31659,
          31660
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          54938,
          54937
        ],
        "parent": [
          54933,
          54932
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          63553,
          63554
        ],
        "parent": [
          36152,
          36153
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          18997,
          18996
        ],
        "parent": [
          42477,
          42478
        ],
        "group": "couple",
        "fem_deceased": "N",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "Y",
        "mal_data": {
          "alcohol": 0,
          "psychosis": 0,
          "anxiety-non-trauma": 0,
          "somatic disorder": 0,
          "bipolar spectrum illness": 0,
          "depression": 0,
          "interpersonal trauma": 0,
          "PD-Cluster C-anxiety": 0,
          "PD-Cluster B-emotional": 0,
          "PD": 0,
          "Impulse control disorder": 0,
          "obesity": 0,
          "cardiovascular": 0,
          "COPD": 0,
          "asthma": 0,
          "immune-autoimmune": 0
        }
      },
      {
        "name": [
          18998
        ],
        "parent": [
          42477,
          42478
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          19001
        ],
        "parent": [
          42477,
          42478
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          20126,
          20127
        ],
        "parent": [
          1698,
          1697
        ],
        "group": "couple",
        "fem_deceased": "N",
        "fem_suicide": "N",
        "mal_deceased": "N",
        "mal_suicide": "N"
      },
      {
        "name": [
          25320
        ],
        "parent": [
          15383,
          15384
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          33887
        ],
        "parent": [
          30676,
          17919
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          6638,
          6639
        ],
        "parent": [
          21810,
          21809
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          21773,
          21775
        ],
        "parent": [
          36152,
          36153
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          21810,
          21809
        ],
        "parent": [
          36152,
          36153
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          65522,
          65524
        ],
        "parent": [
          62883,
          62884
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          17892,
          17891
        ],
        "parent": [
          63553,
          63554
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          30676,
          17919
        ],
        "parent": [
          17892,
          17891
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          49686,
          35726
        ],
        "parent": [
          67086,
          67085
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          23010,
          23009
        ],
        "parent": [
          6638,
          6639
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          36236,
          36239
        ],
        "parent": [
          31659,
          31660
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          39205,
          39206
        ],
        "parent": [
          36236,
          36239
        ],
        "group": "couple",
        "fem_deceased": "N",
        "fem_suicide": "N",
        "mal_deceased": "N",
        "mal_suicide": "N"
      },
      {
        "name": [
          52543,
          52542
        ],
        "parent": [
          62334,
          62331
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          5654,
          5655
        ],
        "parent": [
          1688,
          1689
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          26429,
          26428
        ],
        "parent": [
          28453,
          28454
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          41369,
          41370
        ],
        "parent": [
          36156,
          36157
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          44070,
          44069
        ],
        "parent": [
          21773,
          21775
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          44092,
          44091
        ],
        "parent": [
          44070,
          44069
        ],
        "group": "couple",
        "fem_deceased": "N",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          59267,
          59268
        ],
        "parent": [
          67087,
          67085
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          3537,
          3535
        ],
        "parent": [
          5654,
          5655
        ],
        "group": "couple",
        "fem_deceased": "N",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          4140,
          4139
        ],
        "parent": [
          5805,
          5806
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          15383,
          15384
        ],
        "parent": [
          49686,
          35726
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "Y",
        "mal_deceased": "Y",
        "mal_suicide": "N",
        "fem_data": {
          "alcohol": 0,
          "psychosis": 0,
          "anxiety-non-trauma": 0,
          "somatic disorder": 0,
          "bipolar spectrum illness": 0,
          "depression": 0,
          "interpersonal trauma": 0,
          "PD-Cluster C-anxiety": 0,
          "PD-Cluster B-emotional": 0,
          "PD": 0,
          "Impulse control disorder": 0,
          "obesity": 0,
          "cardiovascular": 0,
          "COPD": 0,
          "asthma": 0,
          "immune-autoimmune": 0
        }
      },
      {
        "name": [
          15385
        ],
        "parent": [
          49686,
          35726
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          15389,
          15390
        ],
        "parent": [
          49686,
          35726
        ],
        "group": "couple",
        "fem_deceased": "N",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          15391
        ],
        "parent": [
          49686,
          35726
        ],
        "group": "individual",
        "ind_deceased": "Y",
        "ind_suicide": "N"
      },
      {
        "name": [
          15392
        ],
        "parent": [
          49686,
          35726
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          27842,
          27841
        ],
        "parent": [
          67093,
          67094
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          35634,
          35635
        ],
        "parent": [
          65522,
          65524
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "N",
        "mal_suicide": "N"
      },
      {
        "name": [
          64998,
          64999
        ],
        "parent": [
          23010,
          23009
        ],
        "group": "couple",
        "fem_deceased": "N",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          35378,
          35379
        ],
        "parent": [
          41369,
          41370
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          42932,
          35379
        ],
        "parent": [
          41369,
          41370
        ],
        "group": "couple",
        "fem_deceased": "N",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          51000,
          16931
        ],
        "parent": [
          5849,
          20659
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          58793,
          58794
        ],
        "parent": [
          27842,
          27841
        ],
        "group": "couple",
        "fem_deceased": "N",
        "fem_suicide": "N",
        "mal_deceased": "N",
        "mal_suicide": "N"
      },
      {
        "name": [
          66424
        ],
        "parent": [
          18997,
          18996
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          25634,
          25633
        ],
        "parent": [
          64998,
          64999
        ],
        "group": "couple",
        "fem_deceased": "N",
        "fem_suicide": "N",
        "mal_deceased": "N",
        "mal_suicide": "N"
      },
      {
        "name": [
          12419,
          25633
        ],
        "parent": [
          64998,
          64999
        ],
        "group": "couple",
        "fem_deceased": "N",
        "fem_suicide": "N",
        "mal_deceased": "N",
        "mal_suicide": "N"
      },
      {
        "name": [
          52348
        ],
        "parent": [
          35378,
          35379
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          67013,
          67014
        ],
        "parent": [
          59267,
          59268
        ],
        "group": "couple",
        "fem_deceased": "N",
        "fem_suicide": "N",
        "mal_deceased": "N",
        "mal_suicide": "N"
      },
      {
        "name": [
          7554
        ],
        "parent": [
          15383,
          15384
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          34736
        ],
        "parent": [
          15383,
          15384
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          42931
        ],
        "parent": [
          42932,
          35379
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          43920,
          28830
        ],
        "parent": [
          43922,
          60699
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "Y",
        "mal_deceased": "N",
        "mal_suicide": "N",
        "fem_data": {
          "alcohol": 0,
          "psychosis": 0,
          "anxiety-non-trauma": 0,
          "somatic disorder": 0,
          "bipolar spectrum illness": 1,
          "depression": 1,
          "interpersonal trauma": 0,
          "PD-Cluster C-anxiety": 0,
          "PD-Cluster B-emotional": 0,
          "PD": 1,
          "Impulse control disorder": 0,
          "obesity": 0,
          "cardiovascular": 1,
          "COPD": 0,
          "asthma": 0,
          "immune-autoimmune": 0
        }
      },
      {
        "name": [
          13759
        ],
        "parent": [
          13760,
          13761
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          13760,
          13761
        ],
        "parent": [
          15389,
          15390
        ],
        "group": "couple",
        "fem_deceased": "N",
        "fem_suicide": "N",
        "mal_deceased": "N",
        "mal_suicide": "N"
      },
      {
        "name": [
          13760,
          17840
        ],
        "parent": [
          15389,
          15390
        ],
        "group": "couple",
        "fem_deceased": "N",
        "fem_suicide": "N",
        "mal_deceased": "N",
        "mal_suicide": "N"
      },
      {
        "name": [
          13760,
          19717
        ],
        "parent": [
          15389,
          15390
        ],
        "group": "couple",
        "fem_deceased": "N",
        "fem_suicide": "N",
        "mal_deceased": "N",
        "mal_suicide": "N"
      },
      {
        "name": [
          31558
        ],
        "parent": [
          31559,
          31560
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          31559,
          31560
        ],
        "parent": [
          3537,
          3535
        ],
        "group": "couple",
        "fem_deceased": "N",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "Y",
        "mal_data": {
          "alcohol": 0,
          "psychosis": 0,
          "anxiety-non-trauma": 0,
          "somatic disorder": 0,
          "bipolar spectrum illness": 0,
          "depression": 0,
          "interpersonal trauma": 0,
          "PD-Cluster C-anxiety": 0,
          "PD-Cluster B-emotional": 0,
          "PD": 0,
          "Impulse control disorder": 0,
          "obesity": 0,
          "cardiovascular": 0,
          "COPD": 0,
          "asthma": 0,
          "immune-autoimmune": 0
        }
      },
      {
        "name": [
          1984,
          1985
        ],
        "parent": [
          54938,
          54937
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "Y",
        "mal_deceased": "N",
        "mal_suicide": "N",
        "fem_data": {
          "alcohol": 0,
          "psychosis": 0,
          "anxiety-non-trauma": 0,
          "somatic disorder": 0,
          "bipolar spectrum illness": 0,
          "depression": 1,
          "interpersonal trauma": 0,
          "PD-Cluster C-anxiety": 0,
          "PD-Cluster B-emotional": 0,
          "PD": 1,
          "Impulse control disorder": 0,
          "obesity": 0,
          "cardiovascular": 1,
          "COPD": 1,
          "asthma": 0,
          "immune-autoimmune": 0
        }
      },
      {
        "name": [
          47434
        ],
        "parent": [
          13760,
          13761
        ],
        "group": "individual",
        "ind_deceased": "Y",
        "ind_suicide": "Y",
        "ind_data": {
          "alcohol": 0,
          "psychosis": 0,
          "anxiety-non-trauma": 0,
          "somatic disorder": 0,
          "bipolar spectrum illness": 0,
          "depression": 1,
          "interpersonal trauma": 1,
          "PD-Cluster C-anxiety": 0,
          "PD-Cluster B-emotional": 1,
          "PD": 1,
          "Impulse control disorder": 0,
          "obesity": 1,
          "cardiovascular": 1,
          "COPD": 0,
          "asthma": 0,
          "immune-autoimmune": 0
        }
      },
      {
        "name": [
          51359
        ],
        "parent": [
          51360,
          19020
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          51360,
          19020
        ],
        "parent": [
          15389,
          15390
        ],
        "group": "couple",
        "fem_deceased": "N",
        "fem_suicide": "N",
        "mal_deceased": "N",
        "mal_suicide": "N"
      },
      {
        "name": [
          51360,
          50615
        ],
        "parent": [
          15389,
          15390
        ],
        "group": "couple",
        "fem_deceased": "N",
        "fem_suicide": "N",
        "mal_deceased": "N",
        "mal_suicide": "N"
      },
      {
        "name": [
          51360,
          0
        ],
        "parent": [
          15389,
          15390
        ],
        "group": "couple",
        "fem_deceased": "N",
        "fem_suicide": "N"
      },
      {
        "name": [
          51360,
          5558
        ],
        "parent": [
          15389,
          15390
        ],
        "group": "couple",
        "fem_deceased": "N",
        "fem_suicide": "N",
        "mal_deceased": "N",
        "mal_suicide": "N"
      },
      {
        "name": [
          51360,
          48790
        ],
        "parent": [
          15389,
          15390
        ],
        "group": "couple",
        "fem_deceased": "N",
        "fem_suicide": "N",
        "mal_deceased": "N",
        "mal_suicide": "N"
      },
      {
        "name": [
          2555,
          2556
        ],
        "parent": [
          40983,
          40984
        ],
        "group": "couple",
        "fem_deceased": "N",
        "fem_suicide": "N",
        "mal_deceased": "N",
        "mal_suicide": "N"
      },
      {
        "name": [
          6920
        ],
        "parent": [
          4140,
          4139
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          12582
        ],
        "parent": [
          31559,
          31560
        ],
        "group": "individual",
        "ind_deceased": "Y",
        "ind_suicide": "N"
      },
      {
        "name": [
          47029
        ],
        "parent": [
          51360,
          19020
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          3466
        ],
        "parent": [
          39205,
          39206
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          12433
        ],
        "parent": [
          31559,
          31560
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          12436
        ],
        "parent": [
          31559,
          31560
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          43804
        ],
        "parent": [
          25634,
          25633
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          50614
        ],
        "parent": [
          51360,
          19020
        ],
        "group": "individual",
        "ind_deceased": "Y",
        "ind_suicide": "Y",
        "ind_data": {
          "alcohol": 0,
          "psychosis": 0,
          "anxiety-non-trauma": 0,
          "somatic disorder": 0,
          "bipolar spectrum illness": 0,
          "depression": 0,
          "interpersonal trauma": 0,
          "PD-Cluster C-anxiety": 0,
          "PD-Cluster B-emotional": 0,
          "PD": 0,
          "Impulse control disorder": 0,
          "obesity": 0,
          "cardiovascular": 0,
          "COPD": 0,
          "asthma": 0,
          "immune-autoimmune": 0
        }
      },
      {
        "name": [
          63712
        ],
        "parent": [
          1984,
          1985
        ],
        "group": "individual",
        "ind_deceased": "Y",
        "ind_suicide": "N"
      },
      {
        "name": [
          66941
        ],
        "parent": [
          66942,
          66943
        ],
        "group": "individual",
        "ind_deceased": "Y",
        "ind_suicide": "Y",
        "ind_data": {
          "alcohol": 0,
          "psychosis": 0,
          "anxiety-non-trauma": 0,
          "somatic disorder": 0,
          "bipolar spectrum illness": 0,
          "depression": 0,
          "interpersonal trauma": 0,
          "PD-Cluster C-anxiety": 0,
          "PD-Cluster B-emotional": 0,
          "PD": 0,
          "Impulse control disorder": 0,
          "obesity": 0,
          "cardiovascular": 0,
          "COPD": 0,
          "asthma": 0,
          "immune-autoimmune": 0
        }
      },
      {
        "name": [
          66942,
          66943
        ],
        "parent": [
          44092,
          44091
        ],
        "group": "couple",
        "fem_deceased": "N",
        "fem_suicide": "N",
        "mal_deceased": "N",
        "mal_suicide": "N"
      },
      {
        "name": [
          58982
        ],
        "parent": [
          66942,
          66943
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          63621
        ],
        "parent": [
          54938,
          54937
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          11395
        ],
        "parent": [
          9536,
          11398
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          9536,
          11398
        ],
        "parent": [
          58793,
          58794
        ],
        "group": "couple",
        "fem_deceased": "N",
        "fem_suicide": "N",
        "mal_deceased": "N",
        "mal_suicide": "N"
      },
      {
        "name": [
          28479
        ],
        "parent": [
          28480,
          28481
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          28480,
          28481
        ],
        "parent": [
          15383,
          15384
        ],
        "group": "couple",
        "fem_deceased": "N",
        "fem_suicide": "N",
        "mal_deceased": "N",
        "mal_suicide": "N"
      },
      {
        "name": [
          8021,
          28481
        ],
        "parent": [
          15383,
          15384
        ],
        "group": "couple",
        "fem_deceased": "N",
        "fem_suicide": "N",
        "mal_deceased": "N",
        "mal_suicide": "N"
      },
      {
        "name": [
          61044
        ],
        "parent": [
          54938,
          54937
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          24190
        ],
        "parent": [
          1984,
          1985
        ],
        "group": "individual",
        "ind_deceased": "Y",
        "ind_suicide": "N"
      },
      {
        "name": [
          5849,
          20659
        ],
        "parent": [
          26429,
          26428
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          10625
        ],
        "parent": [
          67013,
          67014
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          28318
        ],
        "parent": [
          4140,
          4139
        ],
        "group": "individual",
        "ind_deceased": "Y",
        "ind_suicide": "N"
      },
      {
        "name": [
          39584
        ],
        "parent": [
          1984,
          1985
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          41044
        ],
        "parent": [
          35378,
          35379
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          8020
        ],
        "parent": [
          8021,
          28481
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          40787,
          42258
        ],
        "parent": [
          51000,
          16931
        ],
        "group": "couple",
        "fem_deceased": "N",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "Y",
        "mal_data": {
          "alcohol": 0,
          "psychosis": 0,
          "anxiety-non-trauma": 0,
          "somatic disorder": 0,
          "bipolar spectrum illness": 0,
          "depression": 0,
          "interpersonal trauma": 0,
          "PD-Cluster C-anxiety": 0,
          "PD-Cluster B-emotional": 0,
          "PD": 0,
          "Impulse control disorder": 0,
          "obesity": 0,
          "cardiovascular": 1,
          "COPD": 0,
          "asthma": 0,
          "immune-autoimmune": 0
        }
      },
      {
        "name": [
          40787,
          0
        ],
        "parent": [
          51000,
          16931
        ],
        "group": "couple",
        "fem_deceased": "N",
        "fem_suicide": "N"
      },
      {
        "name": [
          66220
        ],
        "parent": [
          43922,
          60699
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          58598
        ],
        "parent": [
          58599,
          58600
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          58599,
          58600
        ],
        "parent": [
          30676,
          17919
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "Y",
        "mal_deceased": "N",
        "mal_suicide": "N",
        "fem_data": {
          "alcohol": 0,
          "psychosis": 0,
          "anxiety-non-trauma": 0,
          "somatic disorder": 0,
          "bipolar spectrum illness": 0,
          "depression": 0,
          "interpersonal trauma": 0,
          "PD-Cluster C-anxiety": 0,
          "PD-Cluster B-emotional": 0,
          "PD": 0,
          "Impulse control disorder": 0,
          "obesity": 0,
          "cardiovascular": 0,
          "COPD": 0,
          "asthma": 0,
          "immune-autoimmune": 0
        }
      },
      {
        "name": [
          67959
        ],
        "parent": [
          2555,
          2556
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          22460
        ],
        "parent": [
          25634,
          25633
        ],
        "group": "individual",
        "ind_deceased": "Y",
        "ind_suicide": "Y",
        "ind_data": {
          "alcohol": 0,
          "psychosis": 0,
          "anxiety-non-trauma": 0,
          "somatic disorder": 0,
          "bipolar spectrum illness": 1,
          "depression": 1,
          "interpersonal trauma": 0,
          "PD-Cluster C-anxiety": 0,
          "PD-Cluster B-emotional": 0,
          "PD": 0,
          "Impulse control disorder": 0,
          "obesity": 0,
          "cardiovascular": 0,
          "COPD": 0,
          "asthma": 0,
          "immune-autoimmune": 0
        }
      },
      {
        "name": [
          61340
        ],
        "parent": [
          61341,
          61343
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          61341,
          61343
        ],
        "parent": [
          35378,
          35379
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "Y",
        "mal_deceased": "N",
        "mal_suicide": "N",
        "fem_data": {
          "alcohol": 0,
          "psychosis": 0,
          "anxiety-non-trauma": 0,
          "somatic disorder": 0,
          "bipolar spectrum illness": 0,
          "depression": 1,
          "interpersonal trauma": 0,
          "PD-Cluster C-anxiety": 0,
          "PD-Cluster B-emotional": 1,
          "PD": 1,
          "Impulse control disorder": 0,
          "obesity": 0,
          "cardiovascular": 0,
          "COPD": 0,
          "asthma": 0,
          "immune-autoimmune": 0
        }
      },
      {
        "name": [
          61341,
          31001
        ],
        "parent": [
          35378,
          35379
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "Y",
        "mal_deceased": "N",
        "mal_suicide": "N",
        "fem_data": {
          "alcohol": 0,
          "psychosis": 0,
          "anxiety-non-trauma": 0,
          "somatic disorder": 0,
          "bipolar spectrum illness": 0,
          "depression": 1,
          "interpersonal trauma": 0,
          "PD-Cluster C-anxiety": 0,
          "PD-Cluster B-emotional": 1,
          "PD": 1,
          "Impulse control disorder": 0,
          "obesity": 0,
          "cardiovascular": 0,
          "COPD": 0,
          "asthma": 0,
          "immune-autoimmune": 0
        }
      },
      {
        "name": [
          61341,
          174
        ],
        "parent": [
          35378,
          35379
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "Y",
        "mal_deceased": "N",
        "mal_suicide": "N",
        "fem_data": {
          "alcohol": 0,
          "psychosis": 0,
          "anxiety-non-trauma": 0,
          "somatic disorder": 0,
          "bipolar spectrum illness": 0,
          "depression": 1,
          "interpersonal trauma": 0,
          "PD-Cluster C-anxiety": 0,
          "PD-Cluster B-emotional": 1,
          "PD": 1,
          "Impulse control disorder": 0,
          "obesity": 0,
          "cardiovascular": 0,
          "COPD": 0,
          "asthma": 0,
          "immune-autoimmune": 0
        }
      },
      {
        "name": [
          39809
        ],
        "parent": [
          39205,
          39206
        ],
        "group": "individual",
        "ind_deceased": "Y",
        "ind_suicide": "Y",
        "ind_data": {
          "alcohol": 0,
          "psychosis": 0,
          "anxiety-non-trauma": 0,
          "somatic disorder": 0,
          "bipolar spectrum illness": 0,
          "depression": 0,
          "interpersonal trauma": 0,
          "PD-Cluster C-anxiety": 0,
          "PD-Cluster B-emotional": 0,
          "PD": 0,
          "Impulse control disorder": 0,
          "obesity": 0,
          "cardiovascular": 0,
          "COPD": 0,
          "asthma": 0,
          "immune-autoimmune": 0
        }
      },
      {
        "name": [
          43922,
          60699
        ],
        "parent": [
          35634,
          35635
        ],
        "group": "couple",
        "fem_deceased": "N",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "Y",
        "mal_data": {
          "alcohol": 0,
          "psychosis": 0,
          "anxiety-non-trauma": 0,
          "somatic disorder": 0,
          "bipolar spectrum illness": 0,
          "depression": 0,
          "interpersonal trauma": 0,
          "PD-Cluster C-anxiety": 0,
          "PD-Cluster B-emotional": 0,
          "PD": 0,
          "Impulse control disorder": 0,
          "obesity": 0,
          "cardiovascular": 0,
          "COPD": 0,
          "asthma": 0,
          "immune-autoimmune": 0
        }
      },
      {
        "name": [
          61032
        ],
        "parent": [
          54938,
          54937
        ],
        "group": "individual",
        "ind_deceased": "Y",
        "ind_suicide": "Y",
        "ind_data": {
          "alcohol": 0,
          "psychosis": 0,
          "anxiety-non-trauma": 0,
          "somatic disorder": 0,
          "bipolar spectrum illness": 0,
          "depression": 0,
          "interpersonal trauma": 0,
          "PD-Cluster C-anxiety": 0,
          "PD-Cluster B-emotional": 0,
          "PD": 0,
          "Impulse control disorder": 0,
          "obesity": 0,
          "cardiovascular": 0,
          "COPD": 0,
          "asthma": 0,
          "immune-autoimmune": 0
        }
      },
      {
        "name": [
          63452
        ],
        "parent": [
          4140,
          4139
        ],
        "group": "individual",
        "ind_deceased": "Y",
        "ind_suicide": "Y",
        "ind_data": {
          "alcohol": 0,
          "psychosis": 0,
          "anxiety-non-trauma": 0,
          "somatic disorder": 0,
          "bipolar spectrum illness": 0,
          "depression": 0,
          "interpersonal trauma": 0,
          "PD-Cluster C-anxiety": 0,
          "PD-Cluster B-emotional": 0,
          "PD": 0,
          "Impulse control disorder": 0,
          "obesity": 0,
          "cardiovascular": 0,
          "COPD": 0,
          "asthma": 0,
          "immune-autoimmune": 0
        }
      },
      {
        "name": [
          17216
        ],
        "parent": [
          67013,
          67014
        ],
        "group": "individual",
        "ind_deceased": "Y",
        "ind_suicide": "Y",
        "ind_data": {
          "alcohol": 0,
          "psychosis": 0,
          "anxiety-non-trauma": 0,
          "somatic disorder": 0,
          "bipolar spectrum illness": 0,
          "depression": 0,
          "interpersonal trauma": 0,
          "PD-Cluster C-anxiety": 0,
          "PD-Cluster B-emotional": 0,
          "PD": 0,
          "Impulse control disorder": 0,
          "obesity": 0,
          "cardiovascular": 0,
          "COPD": 0,
          "asthma": 0,
          "immune-autoimmune": 0
        }
      },
      {
        "name": [
          23038,
          44128
        ],
        "parent": [
          54938,
          54937
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "Y",
        "mal_deceased": "N",
        "mal_suicide": "N",
        "fem_data": {
          "alcohol": 0,
          "psychosis": 0,
          "anxiety-non-trauma": 0,
          "somatic disorder": 0,
          "bipolar spectrum illness": 0,
          "depression": 0,
          "interpersonal trauma": 0,
          "PD-Cluster C-anxiety": 0,
          "PD-Cluster B-emotional": 0,
          "PD": 0,
          "Impulse control disorder": 0,
          "obesity": 0,
          "cardiovascular": 0,
          "COPD": 0,
          "asthma": 0,
          "immune-autoimmune": 0
        }
      },
      {
        "name": [
          18479
        ],
        "parent": [
          51360,
          19020
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          42257
        ],
        "parent": [
          40787,
          42258
        ],
        "group": "individual",
        "ind_deceased": "Y",
        "ind_suicide": "Y",
        "ind_data": {
          "alcohol": 0,
          "psychosis": 0,
          "anxiety-non-trauma": 0,
          "somatic disorder": 0,
          "bipolar spectrum illness": 0,
          "depression": 0,
          "interpersonal trauma": 0,
          "PD-Cluster C-anxiety": 0,
          "PD-Cluster B-emotional": 0,
          "PD": 0,
          "Impulse control disorder": 0,
          "obesity": 0,
          "cardiovascular": 0,
          "COPD": 0,
          "asthma": 0,
          "immune-autoimmune": 0
        }
      },
      {
        "name": [
          8064
        ],
        "parent": [
          8021,
          28481
        ],
        "group": "individual",
        "ind_deceased": "Y",
        "ind_suicide": "Y",
        "ind_data": {
          "alcohol": 0,
          "psychosis": 0,
          "anxiety-non-trauma": 0,
          "somatic disorder": 0,
          "bipolar spectrum illness": 0,
          "depression": 0,
          "interpersonal trauma": 0,
          "PD-Cluster C-anxiety": 0,
          "PD-Cluster B-emotional": 0,
          "PD": 0,
          "Impulse control disorder": 0,
          "obesity": 0,
          "cardiovascular": 0,
          "COPD": 0,
          "asthma": 0,
          "immune-autoimmune": 0
        }
      },
      {
        "name": [
          54688
        ],
        "parent": [
          8021,
          28481
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          56715
        ],
        "parent": [
          56716,
          56717
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          56716,
          56717
        ],
        "parent": [
          2555,
          2556
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "Y",
        "mal_deceased": "N",
        "mal_suicide": "N",
        "fem_data": {
          "alcohol": 0,
          "psychosis": 0,
          "anxiety-non-trauma": 1,
          "somatic disorder": 0,
          "bipolar spectrum illness": 0,
          "depression": 1,
          "interpersonal trauma": 1,
          "PD-Cluster C-anxiety": 0,
          "PD-Cluster B-emotional": 0,
          "PD": 0,
          "Impulse control disorder": 0,
          "obesity": 0,
          "cardiovascular": 1,
          "COPD": 0,
          "asthma": 0,
          "immune-autoimmune": 0
        }
      },
      {
        "name": [
          67788
        ],
        "parent": [
          12419,
          25633
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          3236
        ],
        "parent": [
          4140,
          4139
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          3339
        ],
        "parent": [
          39205,
          39206
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          16807
        ],
        "parent": [
          40787,
          42258
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          24894
        ],
        "parent": [
          9536,
          11398
        ],
        "group": "individual",
        "ind_deceased": "Y",
        "ind_suicide": "Y",
        "ind_data": {
          "alcohol": 0,
          "psychosis": 0,
          "anxiety-non-trauma": 0,
          "somatic disorder": 0,
          "bipolar spectrum illness": 0,
          "depression": 1,
          "interpersonal trauma": 0,
          "PD-Cluster C-anxiety": 0,
          "PD-Cluster B-emotional": 0,
          "PD": 0,
          "Impulse control disorder": 0,
          "obesity": 0,
          "cardiovascular": 1,
          "COPD": 0,
          "asthma": 0,
          "immune-autoimmune": 0
        }
      },
      {
        "name": [
          38226
        ],
        "parent": [
          13760,
          13761
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          4038
        ],
        "parent": [
          4039,
          4040
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          4039,
          4040
        ],
        "parent": [
          20126,
          20127
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "Y",
        "mal_deceased": "N",
        "mal_suicide": "N",
        "fem_data": {
          "alcohol": 0,
          "psychosis": 0,
          "anxiety-non-trauma": 0,
          "somatic disorder": 0,
          "bipolar spectrum illness": 1,
          "depression": 1,
          "interpersonal trauma": 0,
          "PD-Cluster C-anxiety": 0,
          "PD-Cluster B-emotional": 0,
          "PD": 1,
          "Impulse control disorder": 0,
          "obesity": 0,
          "cardiovascular": 1,
          "COPD": 0,
          "asthma": 0,
          "immune-autoimmune": 0
        }
      },
      {
        "name": [
          37285
        ],
        "parent": [
          51360,
          19020
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          63563
        ],
        "parent": [
          13760,
          13761
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          66683
        ],
        "parent": [
          1984,
          1985
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          67346
        ],
        "parent": [
          2555,
          2556
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          3705
        ],
        "parent": [
          51360,
          19020
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          31000
        ],
        "parent": [
          61341,
          61343
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          59713
        ],
        "parent": [
          40787,
          42258
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          63718
        ],
        "parent": [
          9536,
          11398
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          172
        ],
        "parent": [
          61341,
          61343
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          15052
        ],
        "parent": [
          58599,
          58600
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          3149
        ],
        "parent": [
          35634,
          35635
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          15871
        ],
        "parent": [
          15383,
          15384
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          64153
        ],
        "parent": [
          35634,
          35635
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          40983,
          40984
        ],
        "parent": [
          52543,
          52542
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          9328
        ],
        "parent": [
          30676,
          17919
        ],
        "group": "individual",
        "ind_deceased": "Y",
        "ind_suicide": "N"
      },
      {
        "name": [
          55570
        ],
        "parent": [
          58599,
          58600
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          28233
        ],
        "parent": [
          35634,
          35635
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          47065
        ],
        "parent": [
          18997,
          18996
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          44126
        ],
        "parent": [
          23038,
          44128
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          49606
        ],
        "parent": [
          1984,
          1985
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          8004
        ],
        "parent": [
          18997,
          18996
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          168
        ],
        "parent": [
          51360,
          19020
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          55871
        ],
        "parent": [
          28480,
          28481
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          60665
        ],
        "parent": [
          1984,
          1985
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          982
        ],
        "parent": [
          39205,
          39206
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          25495
        ],
        "parent": [
          4039,
          4040
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          36350
        ],
        "parent": [
          61341,
          61343
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          50815
        ],
        "parent": [
          18997,
          18996
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          54801
        ],
        "parent": [
          3537,
          3535
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          25711
        ],
        "parent": [
          4140,
          4139
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          27787
        ],
        "parent": [
          39205,
          39206
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          61774
        ],
        "parent": [
          35634,
          35635
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          14031
        ],
        "parent": [
          8021,
          28481
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          21413
        ],
        "parent": [
          43920,
          28830
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          35484
        ],
        "parent": [
          13760,
          13761
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          19155
        ],
        "parent": [
          35634,
          35635
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          46005
        ],
        "parent": [
          15383,
          15384
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      }
    ],
    family791533: [
      {
        "name": [
          2780,
          2781
        ],
        "parent": "",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N",
        "group": "couple"
      },
      {
        "name": [
          6577,
          6576
        ],
        "parent": [
          48770,
          42741
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          30975,
          30974
        ],
        "parent": [
          62109,
          52519
        ],
        "group": "couple",
        "fem_deceased": "N",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          7712,
          4242
        ],
        "parent": [
          27702,
          27703
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          39983
        ],
        "parent": [
          58846,
          58847
        ],
        "group": "individual",
        "ind_deceased": "Y",
        "ind_suicide": "N"
      },
      {
        "name": [
          58846,
          58847
        ],
        "parent": [
          2780,
          2781
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          2782,
          58847
        ],
        "parent": [
          2780,
          2781
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          58849,
          58848
        ],
        "parent": [
          58846,
          58847
        ],
        "group": "couple",
        "fem_deceased": "N",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "Y",
        "mal_data": {
          "alcohol": 0,
          "psychosis": 0,
          "anxiety-non-trauma": 0,
          "somatic disorder": 0,
          "bipolar spectrum illness": 0,
          "depression": 0,
          "interpersonal trauma": 0,
          "PD-Cluster C-anxiety": 0,
          "PD-Cluster B-emotional": 0,
          "PD": 0,
          "Impulse control disorder": 0,
          "obesity": 0,
          "cardiovascular": 0,
          "COPD": 0,
          "asthma": 0,
          "immune-autoimmune": 0
        }
      },
      {
        "name": [
          58854
        ],
        "parent": [
          58849,
          58848
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          58859,
          58858
        ],
        "parent": [
          58849,
          58848
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          58860
        ],
        "parent": [
          58849,
          58848
        ],
        "group": "individual",
        "ind_deceased": "Y",
        "ind_suicide": "N"
      },
      {
        "name": [
          58864
        ],
        "parent": [
          58849,
          58848
        ],
        "group": "individual",
        "ind_deceased": "Y",
        "ind_suicide": "N"
      },
      {
        "name": [
          58868,
          58867
        ],
        "parent": [
          58849,
          58848
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          58870
        ],
        "parent": [
          58849,
          58848
        ],
        "group": "individual",
        "ind_deceased": "Y",
        "ind_suicide": "N"
      },
      {
        "name": [
          58872
        ],
        "parent": [
          58849,
          58848
        ],
        "group": "individual",
        "ind_deceased": "Y",
        "ind_suicide": "N"
      },
      {
        "name": [
          58876
        ],
        "parent": [
          58849,
          58848
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          31671
        ],
        "parent": [
          58846,
          58847
        ],
        "group": "individual",
        "ind_deceased": "Y",
        "ind_suicide": "N"
      },
      {
        "name": [
          45115
        ],
        "parent": [
          58859,
          58858
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          27702,
          27703
        ],
        "parent": [
          62109,
          52519
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          43448,
          43447
        ],
        "parent": [
          7712,
          4242
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "N",
        "mal_suicide": "N"
      },
      {
        "name": [
          52276
        ],
        "parent": [
          58846,
          58847
        ],
        "group": "individual",
        "ind_deceased": "Y",
        "ind_suicide": "N"
      },
      {
        "name": [
          62109,
          52519
        ],
        "parent": [
          2782,
          58847
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          39118,
          14187
        ],
        "parent": [
          6577,
          6576
        ],
        "group": "couple",
        "fem_deceased": "N",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          17245,
          17244
        ],
        "parent": [
          30975,
          30974
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "Y",
        "mal_deceased": "Y",
        "mal_suicide": "N",
        "fem_data": {
          "alcohol": 0,
          "psychosis": 0,
          "anxiety-non-trauma": 0,
          "somatic disorder": 0,
          "bipolar spectrum illness": 0,
          "depression": 0,
          "interpersonal trauma": 0,
          "PD-Cluster C-anxiety": 0,
          "PD-Cluster B-emotional": 0,
          "PD": 0,
          "Impulse control disorder": 0,
          "obesity": 0,
          "cardiovascular": 0,
          "COPD": 0,
          "asthma": 0,
          "immune-autoimmune": 0
        }
      },
      {
        "name": [
          48770,
          42741
        ],
        "parent": [
          2782,
          58847
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          57350
        ],
        "parent": [
          2782,
          58847
        ],
        "group": "individual",
        "ind_deceased": "Y",
        "ind_suicide": "N"
      },
      {
        "name": [
          2803
        ],
        "parent": [
          2782,
          58847
        ],
        "group": "individual",
        "ind_deceased": "Y",
        "ind_suicide": "N"
      },
      {
        "name": [
          2805
        ],
        "parent": [
          2782,
          58847
        ],
        "group": "individual",
        "ind_deceased": "Y",
        "ind_suicide": "N"
      },
      {
        "name": [
          2852
        ],
        "parent": [
          58846,
          58847
        ],
        "group": "individual",
        "ind_deceased": "Y",
        "ind_suicide": "N"
      },
      {
        "name": [
          26569,
          26570
        ],
        "parent": [
          39118,
          14187
        ],
        "group": "couple",
        "fem_deceased": "N",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          45317,
          45315
        ],
        "parent": [
          39118,
          14187
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          45316,
          45315
        ],
        "parent": [
          39118,
          14187
        ],
        "group": "couple",
        "fem_deceased": "N",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          35026,
          35025
        ],
        "parent": [
          58868,
          58867
        ],
        "group": "couple",
        "fem_deceased": "N",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          13221
        ],
        "parent": [
          35026,
          35025
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          14731,
          14730
        ],
        "parent": [
          58859,
          58858
        ],
        "group": "couple",
        "fem_deceased": "N",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          14735,
          11769
        ],
        "parent": [
          14731,
          14730
        ],
        "group": "couple",
        "fem_deceased": "N",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          14735,
          9146
        ],
        "parent": [
          14731,
          14730
        ],
        "group": "couple",
        "fem_deceased": "N",
        "fem_suicide": "N",
        "mal_deceased": "N",
        "mal_suicide": "N"
      },
      {
        "name": [
          11181
        ],
        "parent": [
          11182,
          9327
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          11182,
          9327
        ],
        "parent": [
          26569,
          26570
        ],
        "group": "couple",
        "fem_deceased": "N",
        "fem_suicide": "N",
        "mal_deceased": "N",
        "mal_suicide": "N"
      },
      {
        "name": [
          11182,
          67529
        ],
        "parent": [
          26569,
          26570
        ],
        "group": "couple",
        "fem_deceased": "N",
        "fem_suicide": "N",
        "mal_deceased": "N",
        "mal_suicide": "N"
      },
      {
        "name": [
          26801
        ],
        "parent": [
          23300,
          28400
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          669
        ],
        "parent": [
          45317,
          45315
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          25724
        ],
        "parent": [
          23300,
          28400
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          32830,
          0
        ],
        "parent": [
          32831,
          32833
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "Y",
        "fem_data": {
          "alcohol": 1,
          "psychosis": 0,
          "anxiety-non-trauma": 0,
          "somatic disorder": 0,
          "bipolar spectrum illness": 0,
          "depression": 1,
          "interpersonal trauma": 0,
          "PD-Cluster C-anxiety": 0,
          "PD-Cluster B-emotional": 0,
          "PD": 0,
          "Impulse control disorder": 0,
          "obesity": 0,
          "cardiovascular": 0,
          "COPD": 0,
          "asthma": 0,
          "immune-autoimmune": 0
        }
      },
      {
        "name": [
          32830,
          22705
        ],
        "parent": [
          32831,
          32833
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "Y",
        "mal_deceased": "N",
        "mal_suicide": "N",
        "fem_data": {
          "alcohol": 1,
          "psychosis": 0,
          "anxiety-non-trauma": 0,
          "somatic disorder": 0,
          "bipolar spectrum illness": 0,
          "depression": 1,
          "interpersonal trauma": 0,
          "PD-Cluster C-anxiety": 0,
          "PD-Cluster B-emotional": 0,
          "PD": 0,
          "Impulse control disorder": 0,
          "obesity": 0,
          "cardiovascular": 0,
          "COPD": 0,
          "asthma": 0,
          "immune-autoimmune": 0
        }
      },
      {
        "name": [
          32831,
          32833
        ],
        "parent": [
          60859,
          60860
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "N",
        "mal_suicide": "N"
      },
      {
        "name": [
          32831,
          213
        ],
        "parent": [
          60859,
          60860
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "Y",
        "mal_data": {
          "alcohol": 0,
          "psychosis": 0,
          "anxiety-non-trauma": 0,
          "somatic disorder": 0,
          "bipolar spectrum illness": 0,
          "depression": 0,
          "interpersonal trauma": 0,
          "PD-Cluster C-anxiety": 0,
          "PD-Cluster B-emotional": 0,
          "PD": 0,
          "Impulse control disorder": 0,
          "obesity": 0,
          "cardiovascular": 0,
          "COPD": 0,
          "asthma": 0,
          "immune-autoimmune": 0
        }
      },
      {
        "name": [
          11768
        ],
        "parent": [
          14735,
          11769
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          16291
        ],
        "parent": [
          23300,
          28400
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          1703
        ],
        "parent": [
          35026,
          35025
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          2726
        ],
        "parent": [
          32831,
          32833
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          25841
        ],
        "parent": [
          35026,
          35025
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          65343
        ],
        "parent": [
          43448,
          43447
        ],
        "group": "individual",
        "ind_deceased": "Y",
        "ind_suicide": "Y",
        "ind_data": {
          "alcohol": 0,
          "psychosis": 0,
          "anxiety-non-trauma": 0,
          "somatic disorder": 0,
          "bipolar spectrum illness": 0,
          "depression": 1,
          "interpersonal trauma": 0,
          "PD-Cluster C-anxiety": 0,
          "PD-Cluster B-emotional": 0,
          "PD": 0,
          "Impulse control disorder": 0,
          "obesity": 0,
          "cardiovascular": 0,
          "COPD": 0,
          "asthma": 0,
          "immune-autoimmune": 0
        }
      },
      {
        "name": [
          9145
        ],
        "parent": [
          14735,
          11769
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          36896
        ],
        "parent": [
          36897,
          36898
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          36897,
          36898
        ],
        "parent": [
          35026,
          35025
        ],
        "group": "couple",
        "fem_deceased": "N",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "Y",
        "mal_data": {
          "alcohol": 0,
          "psychosis": 0,
          "anxiety-non-trauma": 0,
          "somatic disorder": 1,
          "bipolar spectrum illness": 0,
          "depression": 1,
          "interpersonal trauma": 0,
          "PD-Cluster C-anxiety": 0,
          "PD-Cluster B-emotional": 0,
          "PD": 0,
          "Impulse control disorder": 0,
          "obesity": 0,
          "cardiovascular": 0,
          "COPD": 0,
          "asthma": 0,
          "immune-autoimmune": 0
        }
      },
      {
        "name": [
          12656
        ],
        "parent": [
          11182,
          9327
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          25773
        ],
        "parent": [
          45317,
          45315
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          16789
        ],
        "parent": [
          46566,
          16790
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          46566,
          16790
        ],
        "parent": [
          45317,
          45315
        ],
        "group": "couple",
        "fem_deceased": "N",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "Y",
        "mal_data": {
          "alcohol": 0,
          "psychosis": 0,
          "anxiety-non-trauma": 0,
          "somatic disorder": 0,
          "bipolar spectrum illness": 0,
          "depression": 0,
          "interpersonal trauma": 0,
          "PD-Cluster C-anxiety": 0,
          "PD-Cluster B-emotional": 0,
          "PD": 0,
          "Impulse control disorder": 0,
          "obesity": 0,
          "cardiovascular": 0,
          "COPD": 0,
          "asthma": 0,
          "immune-autoimmune": 0
        }
      },
      {
        "name": [
          23300,
          28400
        ],
        "parent": [
          58859,
          58858
        ],
        "group": "couple",
        "fem_deceased": "N",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "Y",
        "mal_data": {
          "alcohol": 0,
          "psychosis": 0,
          "anxiety-non-trauma": 0,
          "somatic disorder": 0,
          "bipolar spectrum illness": 0,
          "depression": 0,
          "interpersonal trauma": 0,
          "PD-Cluster C-anxiety": 0,
          "PD-Cluster B-emotional": 0,
          "PD": 0,
          "Impulse control disorder": 0,
          "obesity": 0,
          "cardiovascular": 0,
          "COPD": 0,
          "asthma": 0,
          "immune-autoimmune": 0
        }
      },
      {
        "name": [
          36368
        ],
        "parent": [
          45317,
          45315
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          65243
        ],
        "parent": [
          58859,
          58858
        ],
        "group": "individual",
        "ind_deceased": "Y",
        "ind_suicide": "N"
      },
      {
        "name": [
          64360
        ],
        "parent": [
          45317,
          45315
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          38047
        ],
        "parent": [
          45317,
          45315
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          61779
        ],
        "parent": [
          35026,
          35025
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          5123
        ],
        "parent": [
          5124,
          5125
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          5124,
          5125
        ],
        "parent": [
          14735,
          11769
        ],
        "group": "couple",
        "fem_deceased": "N",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "Y",
        "mal_data": {
          "alcohol": 0,
          "psychosis": 0,
          "anxiety-non-trauma": 0,
          "somatic disorder": 0,
          "bipolar spectrum illness": 0,
          "depression": 0,
          "interpersonal trauma": 0,
          "PD-Cluster C-anxiety": 0,
          "PD-Cluster B-emotional": 0,
          "PD": 0,
          "Impulse control disorder": 0,
          "obesity": 0,
          "cardiovascular": 0,
          "COPD": 0,
          "asthma": 0,
          "immune-autoimmune": 0
        }
      },
      {
        "name": [
          13915
        ],
        "parent": [
          32831,
          32833
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          17091
        ],
        "parent": [
          32830,
          0
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          48105
        ],
        "parent": [
          36897,
          36898
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          23341
        ],
        "parent": [
          35026,
          35025
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          47043
        ],
        "parent": [
          36897,
          36898
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          8941
        ],
        "parent": [
          30975,
          30974
        ],
        "group": "individual",
        "ind_deceased": "Y",
        "ind_suicide": "N"
      },
      {
        "name": [
          36143
        ],
        "parent": [
          30975,
          30974
        ],
        "group": "individual",
        "ind_deceased": "Y",
        "ind_suicide": "N"
      },
      {
        "name": [
          43452
        ],
        "parent": [
          17245,
          17244
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          39978
        ],
        "parent": [
          17245,
          17244
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          45160
        ],
        "parent": [
          45316,
          45315
        ],
        "group": "individual",
        "ind_deceased": "Y",
        "ind_suicide": "N"
      },
      {
        "name": [
          60859,
          60860
        ],
        "parent": [
          58859,
          58858
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          14878
        ],
        "parent": [
          11182,
          9327
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          34234
        ],
        "parent": [
          11182,
          9327
        ],
        "group": "individual",
        "ind_deceased": "Y",
        "ind_suicide": "Y",
        "ind_data": {
          "alcohol": 0,
          "psychosis": 0,
          "anxiety-non-trauma": 0,
          "somatic disorder": 0,
          "bipolar spectrum illness": 0,
          "depression": 0,
          "interpersonal trauma": 0,
          "PD-Cluster C-anxiety": 0,
          "PD-Cluster B-emotional": 0,
          "PD": 0,
          "Impulse control disorder": 0,
          "obesity": 0,
          "cardiovascular": 0,
          "COPD": 0,
          "asthma": 0,
          "immune-autoimmune": 0
        }
      },
      {
        "name": [
          21271
        ],
        "parent": [
          32831,
          32833
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          25155
        ],
        "parent": [
          23300,
          28400
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          68000
        ],
        "parent": [
          43448,
          43447
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          7078
        ],
        "parent": [
          5124,
          5125
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          8507
        ],
        "parent": [
          32830,
          0
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          7548
        ],
        "parent": [
          32830,
          0
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      }
    ],
    family903988: [
      {
        "name": [
          61318,
          61319
        ],
        "parent": "",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N",
        "group": "couple"
      },
      {
        "name": [
          17581,
          62036
        ],
        "parent": [
          47083,
          47087
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          62034,
          62036
        ],
        "parent": [
          47083,
          47087
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          18524
        ],
        "parent": [
          17581,
          62036
        ],
        "group": "individual",
        "ind_deceased": "Y",
        "ind_suicide": "N"
      },
      {
        "name": [
          65491
        ],
        "parent": [
          17581,
          62036
        ],
        "group": "individual",
        "ind_deceased": "Y",
        "ind_suicide": "N"
      },
      {
        "name": [
          24277,
          24276
        ],
        "parent": [
          62034,
          62036
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          24279,
          9363
        ],
        "parent": [
          24277,
          24276
        ],
        "group": "couple",
        "fem_deceased": "N",
        "fem_suicide": "N",
        "mal_deceased": "N",
        "mal_suicide": "N"
      },
      {
        "name": [
          67004,
          67006
        ],
        "parent": [
          47083,
          47087
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          9278,
          67703
        ],
        "parent": [
          53386,
          53387
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          47083,
          47087
        ],
        "parent": [
          61318,
          61319
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          54564,
          54563
        ],
        "parent": [
          67004,
          67006
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          6436,
          65130
        ],
        "parent": [
          62034,
          62036
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "Y",
        "mal_data": {
          "alcohol": 0,
          "psychosis": 0,
          "anxiety-non-trauma": 0,
          "somatic disorder": 0,
          "bipolar spectrum illness": 0,
          "depression": 0,
          "interpersonal trauma": 0,
          "PD-Cluster C-anxiety": 0,
          "PD-Cluster B-emotional": 0,
          "PD": 0,
          "Impulse control disorder": 0,
          "obesity": 0,
          "cardiovascular": 0,
          "COPD": 0,
          "asthma": 0,
          "immune-autoimmune": 0
        }
      },
      {
        "name": [
          65129,
          65130
        ],
        "parent": [
          62034,
          62036
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "Y",
        "mal_data": {
          "alcohol": 0,
          "psychosis": 0,
          "anxiety-non-trauma": 0,
          "somatic disorder": 0,
          "bipolar spectrum illness": 0,
          "depression": 0,
          "interpersonal trauma": 0,
          "PD-Cluster C-anxiety": 0,
          "PD-Cluster B-emotional": 0,
          "PD": 0,
          "Impulse control disorder": 0,
          "obesity": 0,
          "cardiovascular": 0,
          "COPD": 0,
          "asthma": 0,
          "immune-autoimmune": 0
        }
      },
      {
        "name": [
          4547
        ],
        "parent": [
          17581,
          62036
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          39045
        ],
        "parent": [
          17581,
          62036
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          4551
        ],
        "parent": [
          17581,
          62036
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          4556
        ],
        "parent": [
          17581,
          62036
        ],
        "group": "individual",
        "ind_deceased": "Y",
        "ind_suicide": "N"
      },
      {
        "name": [
          6428
        ],
        "parent": [
          62034,
          62036
        ],
        "group": "individual",
        "ind_deceased": "Y",
        "ind_suicide": "N"
      },
      {
        "name": [
          5170
        ],
        "parent": [
          6436,
          65130
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          5171,
          5172
        ],
        "parent": [
          6436,
          65130
        ],
        "group": "couple",
        "fem_deceased": "N",
        "fem_suicide": "N",
        "mal_deceased": "N",
        "mal_suicide": "N"
      },
      {
        "name": [
          5181
        ],
        "parent": [
          6436,
          65130
        ],
        "group": "individual",
        "ind_deceased": "Y",
        "ind_suicide": "N"
      },
      {
        "name": [
          43983
        ],
        "parent": [
          6436,
          65130
        ],
        "group": "individual",
        "ind_deceased": "Y",
        "ind_suicide": "N"
      },
      {
        "name": [
          53386,
          53387
        ],
        "parent": [
          61318,
          61319
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          60995,
          40440
        ],
        "parent": [
          54564,
          54563
        ],
        "group": "couple",
        "fem_deceased": "N",
        "fem_suicide": "N",
        "mal_deceased": "N",
        "mal_suicide": "N"
      },
      {
        "name": [
          9361
        ],
        "parent": [
          24279,
          9363
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          10841
        ],
        "parent": [
          65129,
          65130
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          49985
        ],
        "parent": [
          49986,
          49989
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          49986,
          49989
        ],
        "parent": [
          48154,
          54315
        ],
        "group": "couple",
        "fem_deceased": "N",
        "fem_suicide": "N",
        "mal_deceased": "N",
        "mal_suicide": "N"
      },
      {
        "name": [
          1967
        ],
        "parent": [
          5171,
          5172
        ],
        "group": "individual",
        "ind_deceased": "Y",
        "ind_suicide": "Y",
        "ind_data": {
          "alcohol": 0,
          "psychosis": 0,
          "anxiety-non-trauma": 0,
          "somatic disorder": 0,
          "bipolar spectrum illness": 0,
          "depression": 0,
          "interpersonal trauma": 0,
          "PD-Cluster C-anxiety": 0,
          "PD-Cluster B-emotional": 0,
          "PD": 0,
          "Impulse control disorder": 0,
          "obesity": 0,
          "cardiovascular": 0,
          "COPD": 0,
          "asthma": 0,
          "immune-autoimmune": 0
        }
      },
      {
        "name": [
          40439
        ],
        "parent": [
          60995,
          40440
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          40329
        ],
        "parent": [
          24279,
          9363
        ],
        "group": "individual",
        "ind_deceased": "Y",
        "ind_suicide": "Y",
        "ind_data": {
          "alcohol": 0,
          "psychosis": 0,
          "anxiety-non-trauma": 0,
          "somatic disorder": 0,
          "bipolar spectrum illness": 0,
          "depression": 1,
          "interpersonal trauma": 0,
          "PD-Cluster C-anxiety": 0,
          "PD-Cluster B-emotional": 0,
          "PD": 0,
          "Impulse control disorder": 0,
          "obesity": 0,
          "cardiovascular": 0,
          "COPD": 0,
          "asthma": 0,
          "immune-autoimmune": 0
        }
      },
      {
        "name": [
          26695
        ],
        "parent": [
          60995,
          40440
        ],
        "group": "individual",
        "ind_deceased": "Y",
        "ind_suicide": "Y",
        "ind_data": {
          "alcohol": 0,
          "psychosis": 0,
          "anxiety-non-trauma": 0,
          "somatic disorder": 0,
          "bipolar spectrum illness": 0,
          "depression": 0,
          "interpersonal trauma": 0,
          "PD-Cluster C-anxiety": 0,
          "PD-Cluster B-emotional": 0,
          "PD": 0,
          "Impulse control disorder": 0,
          "obesity": 0,
          "cardiovascular": 0,
          "COPD": 0,
          "asthma": 0,
          "immune-autoimmune": 0
        }
      },
      {
        "name": [
          139
        ],
        "parent": [
          5171,
          5172
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          42479
        ],
        "parent": [
          5171,
          5172
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          13785
        ],
        "parent": [
          13788,
          13789
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          13788,
          13789
        ],
        "parent": [
          49986,
          49989
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "Y",
        "mal_data": {
          "alcohol": 0,
          "psychosis": 0,
          "anxiety-non-trauma": 0,
          "somatic disorder": 0,
          "bipolar spectrum illness": 0,
          "depression": 1,
          "interpersonal trauma": 0,
          "PD-Cluster C-anxiety": 0,
          "PD-Cluster B-emotional": 0,
          "PD": 0,
          "Impulse control disorder": 0,
          "obesity": 0,
          "cardiovascular": 0,
          "COPD": 0,
          "asthma": 0,
          "immune-autoimmune": 0
        }
      },
      {
        "name": [
          48154,
          54315
        ],
        "parent": [
          9278,
          67703
        ],
        "group": "couple",
        "fem_deceased": "Y",
        "fem_suicide": "N",
        "mal_deceased": "Y",
        "mal_suicide": "N"
      },
      {
        "name": [
          63449
        ],
        "parent": [
          24279,
          9363
        ],
        "group": "individual",
        "ind_deceased": "Y",
        "ind_suicide": "N"
      },
      {
        "name": [
          35342
        ],
        "parent": [
          24279,
          9363
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          1510
        ],
        "parent": [
          13788,
          13789
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          12915
        ],
        "parent": [
          24279,
          9363
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      },
      {
        "name": [
          66710
        ],
        "parent": [
          65129,
          65130
        ],
        "group": "individual",
        "ind_deceased": "N",
        "ind_suicide": "N"
      }
    ],
    familytest: [
      {
        "name": 47083,
        "parent": "",
        "sex": "F",
        "is_deceased": "Y",
        "is_suicide": "N",
        "group": "couple",
        "spouse": {
          "name": 45321,
          "parent": "",
          "sex": "M",
          "is_deceased": "Y",
          "is_suicide": "N",
        }
      },
      {
        "name": 321,
        "parent": 47083,
        "sex": "F",
        "is_deceased": "Y",
        "is_suicide": "Y",
        "clinical_data": {
          "alcohol": 0,
          "psychosis": 0,
          "anxiety-non-trauma": 0,
          "somatic disorder": 0,
          "bipolar spectrum illness": 0,
          "depression": 0,
          "interpersonal trauma": 0,
          "PD-Cluster C-anxiety": 0,
          "PD-Cluster B-emotional": 1,
          "PD": 0,
          "Impulse control disorder": 2,
          "obesity": 0,
          "cardiovascular": 0,
          "COPD": 0,
          "asthma": 0,
          "immune-autoimmune": 0
        },
        "group": "couple",
        "spouse": {
          "name": 45321,
          "parent": "",
          "sex": "M",
          "is_deceased": "Y",
          "is_suicide": "N",
          "clinical_data": {
            "alcohol": 0,
            "psychosis": 0,
            "anxiety-non-trauma": 1,
            "somatic disorder": 0,
            "bipolar spectrum illness": 0,
            "depression": 2,
            "interpersonal trauma": 0,
            "PD-Cluster C-anxiety": 1,
            "PD-Cluster B-emotional": 2,
            "PD": 0,
            "Impulse control disorder": 0,
            "obesity": 0,
            "cardiovascular": 0,
            "COPD": 0,
            "asthma": 0,
            "immune-autoimmune": 2
          },
        },
      },
      {
        "name": 123,
        "parent": 47083,
        "sex": "M",
        "is_deceased": "Y",
        "is_suicide": "N",
        "group": "couple",
        "spouse": {
          "name": 999,
          "parent": "",
          "sex": "M",
          "is_deceased": "Y",
          "is_suicide": "N",
        }
      },
      {
        "name": 222,
        "parent": 123,
        "sex": "M",
        "is_deceased": "N",
        "is_suicide": "N",
        "group": "couple",
        "spouse": {
          "name": 999,
          "parent": "",
          "sex": "M",
          "is_deceased": "Y",
          "is_suicide": "Y",
        }
      },
      {
        "name": 333,
        "parent": 123,
        "sex": "M",
        "is_deceased": "Y",
        "is_suicide": "N",
        "group": "individual",
      },
    ]
    
}

export default state;