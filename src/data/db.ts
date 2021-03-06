const data = [
    {
        "id": "aes",
        "title": {
            "name": "AES Encryption and Decryption",
            "picture": "https://i.imgur.com/pLzk6MD.png"
        },
        "authors": [
            {
                "name": "Walid",
                "id": "0",
                "githubAccount": "https://github.com/Walid-Kh"
            },
            {
                "name": "Kirollos",
                "id": "1",
                "githubAccount": "https://github.com/kirobaghdad"
            },
            {
                "name": "Malk",
                "id": "2",
                "githubAccount": "https://github.com/Malek-2002"
            },
            {
                "name": "Kareem",
                "id": "3",
                "githubAccount": "https://github.com/KareemAlaa1"
            }
        ],
        "summary": "AES or Advanced Encryption Standard is used for Encryption and Decryption, the encryption and decryption each had 4 algorithms: subBytes, shiftRow, mixColumns, addRoundKey and keyExpansion, these algorithms were also inverted during the decryption process. the project was a requirement of the Advanced Logic Design course. Verilog was used to develop this project and it was Simulated using modelsim virtually and physically using DE1-SOC",
        "body": "On systems with 32-bit or larger words, it is possible to speed up execution of this cipher by combining the SubBytes and ShiftRows steps with the MixColumns step by transforming them into a sequence of table lookups. This requires four 256-entry 32-bit tables (together occupying 4096 bytes). A round can then be performed with 16 table lookup operations and 12 32-bit exclusive-or operations, followed by four 32-bit exclusive-or operations in the AddRoundKey step.[10] Alternatively, the table lookup operation can be performed with a single 256-entry 32-bit table (occupying 1024 bytes) followed by circular rotation operations. On systems with 32-bit or larger words, it is possible to speed up execution of this cipher by combining the SubBytes and ShiftRows steps with the MixColumns step by transforming them into a sequence of table lookups. This requires four 256-entry 32-bit tables (together occupying 4096 bytes). A round can then be performed with 16 table lookup operations and 12 32-bit exclusive-or operations, followed by four 32-bit exclusive-or operations in the AddRoundKey step.[10] Alternatively, the table lookup operation can be performed with a single 256-entry 32-bit table (occupying 1024 bytes) followed by circular rotation operations.  On systems with 32-bit or larger words, it is possible to speed up execution of this cipher by combining the SubBytes and ShiftRows steps with the MixColumns step by transforming them into a sequence of table lookups. This requires four 256-entry 32-bit tables (together occupying 4096 bytes). A round can then be performed with 16 table lookup operations and 12 32-bit exclusive-or operations, followed by four 32-bit exclusive-or operations in the AddRoundKey step.[10] Alternatively, the table lookup operation can be performed with a single 256-entry 32-bit table (occupying 1024 bytes) followed by circular rotation operations.  On systems with 32-bit or larger words, it is possible to speed up execution of this cipher by combining the SubBytes and ShiftRows steps with the MixColumns step by transforming them into a sequence of table lookups. This requires four 256-entry 32-bit tables (together occupying 4096 bytes). A round can then be performed with 16 table lookup operations and 12 32-bit exclusive-or operations, followed by four 32-bit exclusive-or operations in the AddRoundKey step.[10] Alternatively, the table lookup operation can be performed with a single 256-entry 32-bit table (occupying 1024 bytes) followed by circular rotation operations. ",
        "createdAt": "2022 5 25",
        "infos": [
            {
                "text": "Project on GitHub",
                "icon": "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMzAgMzAiIHdpZHRoPSIzMHB4IiBoZWlnaHQ9IjMwcHgiPgo8ZyBpZD0ic3VyZmFjZTQ1NDI5MTc2Ij4KPHBhdGggc3R5bGU9IiBzdHJva2U6bm9uZTtmaWxsLXJ1bGU6bm9uemVybztmaWxsOnJnYigxMDAlLDEwMCUsMTAwJSk7ZmlsbC1vcGFjaXR5OjE7IiBkPSJNIDE1IDMgQyA4LjM3MTA5NCAzIDMgOC4zNzEwOTQgMyAxNSBDIDMgMjAuNjIxMDk0IDYuODcxMDk0IDI1LjMyODEyNSAxMi4wOTM3NSAyNi42Mjg5MDYgQyAxMi4wMzUxNTYgMjYuNDY4NzUgMTIgMjYuMjgxMjUgMTIgMjYuMDQ2ODc1IEwgMTIgMjMuOTk2MDk0IEMgMTEuNTExNzE5IDIzLjk5NjA5NCAxMC42OTUzMTIgMjMuOTk2MDk0IDEwLjQ5MjE4OCAyMy45OTYwOTQgQyA5LjY3MTg3NSAyMy45OTYwOTQgOC45NDE0MDYgMjMuNjQ0NTMxIDguNTg1OTM4IDIyLjk4ODI4MSBDIDguMTk1MzEyIDIyLjI1NzgxMiA4LjEyNSAyMS4xNDQ1MzEgNy4xNTIzNDQgMjAuNDYwOTM4IEMgNi44NjMyODEgMjAuMjM0Mzc1IDcuMDgyMDMxIDE5Ljk3NjU2MiA3LjQxNDA2MiAyMC4wMTE3MTkgQyA4LjAzMTI1IDIwLjE4MzU5NCA4LjUzOTA2MiAyMC42MDU0NjkgOS4wMTk1MzEgMjEuMjMwNDY5IEMgOS41IDIxLjg1OTM3NSA5LjcyMjY1NiAyMiAxMC42MTcxODggMjIgQyAxMS4wNTA3ODEgMjIgMTEuNjk5MjE5IDIxLjk3NjU2MiAxMi4zMDg1OTQgMjEuODc4OTA2IEMgMTIuNjM2NzE5IDIxLjA0Njg3NSAxMy4yMDMxMjUgMjAuMjgxMjUgMTMuODk0NTMxIDE5LjkxNzk2OSBDIDkuODk4NDM4IDE5LjUwNzgxMiA3Ljk5MjE4OCAxNy41MTk1MzEgNy45OTIxODggMTQuODIwMzEyIEMgNy45OTIxODggMTMuNjU2MjUgOC40ODgyODEgMTIuNTM1MTU2IDkuMzI4MTI1IDExLjU4NTkzOCBDIDkuMDU0Njg4IDEwLjY0ODQzOCA4LjcwNzAzMSA4LjczMDQ2OSA5LjQzMzU5NCA4IEMgMTEuMjM0Mzc1IDggMTIuMzIwMzEyIDkuMTY0MDYyIDEyLjU4MjAzMSA5LjQ4MDQ2OSBDIDEzLjQ3NjU2MiA5LjE3NTc4MSAxNC40NjA5MzggOSAxNS40OTYwOTQgOSBDIDE2LjUzMTI1IDkgMTcuNTE5NTMxIDkuMTc1NzgxIDE4LjQxNzk2OSA5LjQ4NDM3NSBDIDE4LjY3NTc4MSA5LjE3MTg3NSAxOS43NjE3MTkgOCAyMS41NjY0MDYgOCBDIDIyLjI5Njg3NSA4LjczMDQ2OSAyMS45NDUzMTIgMTAuNjU2MjUgMjEuNjY3OTY5IDExLjU5Mzc1IEMgMjIuNTAzOTA2IDEyLjUzOTA2MiAyMi45OTYwOTQgMTMuNjYwMTU2IDIyLjk5NjA5NCAxNC44MjAzMTIgQyAyMi45OTYwOTQgMTcuNTE1NjI1IDIxLjA4OTg0NCAxOS41MDM5MDYgMTcuMTAxNTYyIDE5LjkxNzk2OSBDIDE4LjE5OTIxOSAyMC40ODgyODEgMTkgMjIuMTAxNTYyIDE5IDIzLjMxMjUgTCAxOSAyNi4wNDY4NzUgQyAxOSAyNi4xNTIzNDQgMTguOTc2NTYyIDI2LjIyNjU2MiAxOC45NjQ4NDQgMjYuMzE2NDA2IEMgMjMuNjQwNjI1IDI0LjY3NTc4MSAyNyAyMC4yMzQzNzUgMjcgMTUgQyAyNyA4LjM3MTA5NCAyMS42Mjg5MDYgMyAxNSAzIFogTSAxNSAzICIvPgo8L2c+Cjwvc3ZnPgo=",
                "link": "https://github.com/Walid-Kh/AES-Verilog"
            }
        ],
        "markdown": "# AES in Verilog \n ## Summary \n AES or Advanced Encryption Standard is used for Encryption and Decryption, the encryption and decryption each had 5 algorithms: subBytes, shiftRow, mixColumns, addRoundKey and keyExpansion, these algorithms were also inverted during the decryption process. the project was a requirement of the Advanced Logic Design course. Verilog was used to develop this project and it was Simulated using ModelSim virtually and physically using DE1-SOC\n## Introduction \nAES encrypt a 128 bit data with a key, the key could be 128, 192, 256 bit the difference in security application between the key sizes is minimal, using 128bit key requires 10 rounds 192bit requires 12 rounds and 256bit 14 rounds.\na round is the steps taken in each stage.  \nin the beginning the data is organized in matrix 4x4 each cell contains a byte of data beginning with the most significant byte at the top right and descending downward until all cells are filled.  \n\n![4x4 matrix](https://github.com/Walid-Kh/AES-Verilog/raw/master/imgs/4x4-matrix.png)\n\n## SubByte \nSubByte or Substitute byte is an algorithm which replaces each byte in the matrix with another byte from a pre-computed 16x16 matrix according to the value in the data cell.   \n\n![SubByte](https://github.com/Walid-Kh/AES-Verilog/raw/master/imgs/subByte.png)\n\n## ShiftRows \nShiftRow the process of shifting each row according to its number for example the first row never gets shifted the second row gets shift by 1 byte to the left, the third get shift by 2 bytes to the left and so on. \n\n![ShiftRows](https://github.com/Walid-Kh/AES-Verilog/raw/master/imgs/shiftRows.png)\n\n## MixColumns \nMixColumns is the third step carried out in each round, MixColumns multiply the resulting matrix from ShiftRow by a matrix, the multiplication is a modular multiplication which means that each type you multiply you may have to use a modulus 1b, other than that it's a normal matrix multiplication.\n\n![MixColumns](https://github.com/Walid-Kh/AES-Verilog/raw/master/imgs/Mixcolumns.png)"
    },
    {
        "id": "shipping-company",
        "title": {
            "name": "Shipping Company",
            "picture": "https://i.imgur.com/CSnI90k.png"
        },
        "authors": [
            {
                "name": "Walid",
                "id": "0",
                "githubAccount": "https://github.com/Walid-Kh"
            },
            {
                "name": "Yousef",
                "id": "4",
                "githubAccount": "https://github.com/yousefosama654"
            },
            {
                "name": "Malk",
                "id": "2",
                "githubAccount": "https://github.com/Malek-2002"
            }
        ],
        "summary": "This project was done as a part of our Data structure and algorithms course, the project itself is a simulation of a shipping company full with trucks and maintenance and delivery and roads. it's a detailed log of a operation that these companies do hour by hour.",
        "body": "",
        "createdAt": "2022 2 5",
        "infos": [
            {
                "text": "Project on GitHub",
                "icon": "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMzAgMzAiIHdpZHRoPSIzMHB4IiBoZWlnaHQ9IjMwcHgiPgo8ZyBpZD0ic3VyZmFjZTQ1NDI5MTc2Ij4KPHBhdGggc3R5bGU9IiBzdHJva2U6bm9uZTtmaWxsLXJ1bGU6bm9uemVybztmaWxsOnJnYigxMDAlLDEwMCUsMTAwJSk7ZmlsbC1vcGFjaXR5OjE7IiBkPSJNIDE1IDMgQyA4LjM3MTA5NCAzIDMgOC4zNzEwOTQgMyAxNSBDIDMgMjAuNjIxMDk0IDYuODcxMDk0IDI1LjMyODEyNSAxMi4wOTM3NSAyNi42Mjg5MDYgQyAxMi4wMzUxNTYgMjYuNDY4NzUgMTIgMjYuMjgxMjUgMTIgMjYuMDQ2ODc1IEwgMTIgMjMuOTk2MDk0IEMgMTEuNTExNzE5IDIzLjk5NjA5NCAxMC42OTUzMTIgMjMuOTk2MDk0IDEwLjQ5MjE4OCAyMy45OTYwOTQgQyA5LjY3MTg3NSAyMy45OTYwOTQgOC45NDE0MDYgMjMuNjQ0NTMxIDguNTg1OTM4IDIyLjk4ODI4MSBDIDguMTk1MzEyIDIyLjI1NzgxMiA4LjEyNSAyMS4xNDQ1MzEgNy4xNTIzNDQgMjAuNDYwOTM4IEMgNi44NjMyODEgMjAuMjM0Mzc1IDcuMDgyMDMxIDE5Ljk3NjU2MiA3LjQxNDA2MiAyMC4wMTE3MTkgQyA4LjAzMTI1IDIwLjE4MzU5NCA4LjUzOTA2MiAyMC42MDU0NjkgOS4wMTk1MzEgMjEuMjMwNDY5IEMgOS41IDIxLjg1OTM3NSA5LjcyMjY1NiAyMiAxMC42MTcxODggMjIgQyAxMS4wNTA3ODEgMjIgMTEuNjk5MjE5IDIxLjk3NjU2MiAxMi4zMDg1OTQgMjEuODc4OTA2IEMgMTIuNjM2NzE5IDIxLjA0Njg3NSAxMy4yMDMxMjUgMjAuMjgxMjUgMTMuODk0NTMxIDE5LjkxNzk2OSBDIDkuODk4NDM4IDE5LjUwNzgxMiA3Ljk5MjE4OCAxNy41MTk1MzEgNy45OTIxODggMTQuODIwMzEyIEMgNy45OTIxODggMTMuNjU2MjUgOC40ODgyODEgMTIuNTM1MTU2IDkuMzI4MTI1IDExLjU4NTkzOCBDIDkuMDU0Njg4IDEwLjY0ODQzOCA4LjcwNzAzMSA4LjczMDQ2OSA5LjQzMzU5NCA4IEMgMTEuMjM0Mzc1IDggMTIuMzIwMzEyIDkuMTY0MDYyIDEyLjU4MjAzMSA5LjQ4MDQ2OSBDIDEzLjQ3NjU2MiA5LjE3NTc4MSAxNC40NjA5MzggOSAxNS40OTYwOTQgOSBDIDE2LjUzMTI1IDkgMTcuNTE5NTMxIDkuMTc1NzgxIDE4LjQxNzk2OSA5LjQ4NDM3NSBDIDE4LjY3NTc4MSA5LjE3MTg3NSAxOS43NjE3MTkgOCAyMS41NjY0MDYgOCBDIDIyLjI5Njg3NSA4LjczMDQ2OSAyMS45NDUzMTIgMTAuNjU2MjUgMjEuNjY3OTY5IDExLjU5Mzc1IEMgMjIuNTAzOTA2IDEyLjUzOTA2MiAyMi45OTYwOTQgMTMuNjYwMTU2IDIyLjk5NjA5NCAxNC44MjAzMTIgQyAyMi45OTYwOTQgMTcuNTE1NjI1IDIxLjA4OTg0NCAxOS41MDM5MDYgMTcuMTAxNTYyIDE5LjkxNzk2OSBDIDE4LjE5OTIxOSAyMC40ODgyODEgMTkgMjIuMTAxNTYyIDE5IDIzLjMxMjUgTCAxOSAyNi4wNDY4NzUgQyAxOSAyNi4xNTIzNDQgMTguOTc2NTYyIDI2LjIyNjU2MiAxOC45NjQ4NDQgMjYuMzE2NDA2IEMgMjMuNjQwNjI1IDI0LjY3NTc4MSAyNyAyMC4yMzQzNzUgMjcgMTUgQyAyNyA4LjM3MTA5NCAyMS42Mjg5MDYgMyAxNSAzIFogTSAxNSAzICIvPgo8L2c+Cjwvc3ZnPgo=",
                "link": "https://github.com/Walid-Kh/shippingCompany"
            }
        ],
        "markdown": "# Shipping Company \n## Summary \nThis project was done as a part of our Data structure and algorithms course, the project itself is a simulation of a shipping company full with trucks and maintenance and delivery and roads. it's a detailed log of a operation that these companies do hour by hour, it's the project is systems and rules to get good use of the trucks and to get the delivery to the customer as efficiently as possible.  \nThe Initial state of the company is depended on the input file.  \n\n## Trucks \nthere are 3 types of trucks Normal, Special, Vip each truck is responsible for their respective cargos.  \nfor each truck the following info is available :\n-  ID : A unique token for each truck given in the initial state.\n-  Speed : the speed of the truck km/h.\n-  Capacity : the total amount of cargo that can be loaded on the truck.\n-  Active Time : is used for maintaining the truck.\n-  Delivery Interval : the need for the truck to go from the company to the customer.\n### Normal Trucks \nNormal trucks can load Normal Cargo and Vip Cargo with the priority to the vip Cargo they generally have large capacities and they're generally slower than the other types of trucks.\n### Special Trucks \nSpecial trucks can only load Special Cargo. \n### Vip Trucks \nVip trucks can load Vip Cargo and Normal Cargo with the priority to the vip Cargo, they generally have small capacities and they're generally faster than the other types of trucks. \n\n## Events \nthere are 3 types of Events in this simulation\n- Ready Event : Initializes a new Cargo and provides the following information the Cargo type, the event time, the ID of the Cargo, the distance, Loading Time and the cost. \n- Cancellation Events : Cancels the order if the it hasn't been loaded yet providing the event time and the ID of the Cargo that has to be canceled.  \n- Promotion Event : promote a normal cargo to become a Vip Cargo, providing the event time, the ID of the Cargo, and the extra money for the promotion. "
    }
]
export default data; 