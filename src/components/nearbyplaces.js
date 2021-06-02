import React,{useState} from 'react';
const NearByPlaces = () =>{
    const result ={
        "results": [
          {
            "business_status": "OPERATIONAL",
            "formatted_address": "3700 Joseph Siewick Dr #302, Fairfax, VA 22033, United States",
            "geometry": {
              "location": {
                "lat": 38.8836196,
                "lng": -77.3811597
              },
              "viewport": {
                "northeast": {
                  "lat": 38.88506702989272,
                  "lng": -77.37998057010726
                },
                "southwest": {
                  "lat": 38.88236737010728,
                  "lng": -77.38268022989271
                }
              }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png",
            "name": "Fair Oaks Skin Care - Fairfax",
            "opening_hours": {
              "open_now": true
            },
            "photos": [
              {
                "height": 3012,
                "html_attributions": [
                  "<a href=\"https://maps.google.com/maps/contrib/110636245389293471532\">Fair Oaks Skin Care Center</a>"
                ],
                "photo_reference": "ATtYBwIt1xKdF5V1cdvSmPJIe5fQTZhRAYpOGu5Zo4pa_MwJkUO0JNmJYno5oX1IY9kE0KglHybMgz3mKoVo6pIie0g6-Byy0jxdAyw5CjbDaPj1NkOyYCWDX1sVR5KvI8-iydESbfEQh6ie0WRReTRxSlcZ8cxib3Qu_3RjIqcW0N21ydUu",
                "width": 2868
              }
            ],
            "place_id": "ChIJ05zriABGtokR5a5CF8mbUpQ",
            "plus_code": {
              "compound_code": "VJM9+CG Fairfax, Virginia",
              "global_code": "87C4VJM9+CG"
            },
            "rating": 4.7,
            "reference": "ChIJ05zriABGtokR5a5CF8mbUpQ",
            "types": [
              "beauty_salon",
              "hair_care",
              "spa",
              "doctor",
              "health",
              "point_of_interest",
              "establishment"
            ],
            "user_ratings_total": 472,
            "url": "https://maps.google.com/?cid=10687776153684586213"
          },
          {
            "business_status": "OPERATIONAL",
            "formatted_address": "1525 Wilson Blvd suite 100 & 125, Arlington, VA 22209, United States",
            "geometry": {
              "location": {
                "lat": 38.895178,
                "lng": -77.07535179999999
              },
              "viewport": {
                "northeast": {
                  "lat": 38.89646072989272,
                  "lng": -77.07395052010727
                },
                "southwest": {
                  "lat": 38.89376107010728,
                  "lng": -77.07665017989272
                }
              }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png",
            "name": "SkinDC",
            "opening_hours": {
              "open_now": false
            },
            "photos": [
              {
                "height": 634,
                "html_attributions": [
                  "<a href=\"https://maps.google.com/maps/contrib/115942963511525210515\">A Google User</a>"
                ],
                "photo_reference": "ATtYBwJGphSDLhLTrZ0ReotPu_QumZu89jGaccuukIQNeAxO77wAzFrlLYXgMJXglW7s30gVHITIHOaRtpvymH4IX6uG1YkrF713ca9OSDkegmwq6kcohpfyaUDmMTOsqPmBqbWpWkI8PnOBF5RnCVNxjeNauI16N2Um3QCAEqGth1QdB2IY",
                "width": 1125
              }
            ],
            "place_id": "ChIJrz5Mnl62t4kROljJgUXgJ14",
            "plus_code": {
              "compound_code": "VWWF+3V Arlington, Virginia",
              "global_code": "87C4VWWF+3V"
            },
            "rating": 4.8,
            "reference": "ChIJrz5Mnl62t4kROljJgUXgJ14",
            "types": [
              "beauty_salon",
              "hair_care",
              "spa",
              "doctor",
              "health",
              "point_of_interest",
              "establishment"
            ],
            "user_ratings_total": 619,
            "url": "https://maps.google.com/?cid=6784637952791763002"
          },
          {
            "business_status": "OPERATIONAL",
            "formatted_address": "4801 Dorsey Hall Dr #204, Ellicott City, MD 21042, United States",
            "geometry": {
              "location": {
                "lat": 39.2425005,
                "lng": -76.8371513
              },
              "viewport": {
                "northeast": {
                  "lat": 39.24375757989272,
                  "lng": -76.83588182010728
                },
                "southwest": {
                  "lat": 39.24105792010727,
                  "lng": -76.83858147989271
                }
              }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png",
            "name": "Medical Skin Therapeutics",
            "opening_hours": {
              "open_now": true
            },
            "photos": [
              {
                "height": 683,
                "html_attributions": [
                  "<a href=\"https://maps.google.com/maps/contrib/105181705482633352587\">Medical Skin Therapeutics</a>"
                ],
                "photo_reference": "ATtYBwL5sFqkYRMjqq4L41Cid9G2W0PnYyTw0Ck5G0t54bz5TjpywdvYhwnVFFSV-LECxX81iOliKgJRTVskR2GOQ4IL_gkXb2OwC_yRp6k-sGCN9sBmjVZduj3_PKsoSRhwVy2J2NxCIS6hMQZYzvGXzWhjwfHNXK27Ran6ok6MOiHzgpa1",
                "width": 1024
              }
            ],
            "place_id": "ChIJr9wnrxogyIkRDCpG8M_DXmQ",
            "plus_code": {
              "compound_code": "65V7+24 Ellicott City, Maryland",
              "global_code": "87F565V7+24"
            },
            "rating": 4.8,
            "reference": "ChIJr9wnrxogyIkRDCpG8M_DXmQ",
            "types": [
              "beauty_salon",
              "spa",
              "health",
              "point_of_interest",
              "establishment"
            ],
            "user_ratings_total": 30,
            "url": "https://maps.google.com/?cid=7232433349460371980"
          },
          {
            "business_status": "OPERATIONAL",
            "formatted_address": "966 Hungerford Dr Suit 13A, Rockville, MD 20850, United States",
            "geometry": {
              "location": {
                "lat": 39.0996751,
                "lng": -77.15489819999999
              },
              "viewport": {
                "northeast": {
                  "lat": 39.10104822989272,
                  "lng": -77.15340542010726
                },
                "southwest": {
                  "lat": 39.09834857010728,
                  "lng": -77.15610507989271
                }
              }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png",
            "name": "Magdalen's Pure Skin Care Waxing and Skin Care",
            "opening_hours": {
              "open_now": true
            },
            "photos": [
              {
                "height": 1198,
                "html_attributions": [
                  "<a href=\"https://maps.google.com/maps/contrib/109092273863015582262\">A Google User</a>"
                ],
                "photo_reference": "ATtYBwIlKpSA6lcMkDFyBaHvppJUdE9a5LQDCrr7mpx_rfrQMo5TrWwGrr8RbOvy4fAcw020eCX85UGxXIolYauAjxOtNExciA0WUDgGSfrp6q5hdWU4KZUBLhwxasgUbmPvEi3AjaiiKi8bjmLZZl3N5uSwRVMyZ0F66AaZs9NUVoxV0_OR",
                "width": 1198
              }
            ],
            "place_id": "ChIJvzWAD3zNt4kRnSks0vH1Lz8",
            "plus_code": {
              "compound_code": "3RXW+V2 Rockville, Maryland",
              "global_code": "87F43RXW+V2"
            },
            "rating": 5,
            "reference": "ChIJvzWAD3zNt4kRnSks0vH1Lz8",
            "types": [
              "beauty_salon",
              "hair_care",
              "spa",
              "health",
              "point_of_interest",
              "establishment"
            ],
            "user_ratings_total": 1113,
            "url": "https://maps.google.com/?cid=4553128167256893853"
          },
          {
            "business_status": "OPERATIONAL",
            "formatted_address": "9000 Crownwood Ct, Burke, VA 22015, United States",
            "geometry": {
              "location": {
                "lat": 38.810089,
                "lng": -77.257667
              },
              "viewport": {
                "northeast": {
                  "lat": 38.81137337989272,
                  "lng": -77.25634427010728
                },
                "southwest": {
                  "lat": 38.80867372010728,
                  "lng": -77.25904392989273
                }
              }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png",
            "name": "Skin Deep Laser Services",
            "opening_hours": {
              "open_now": false
            },
            "photos": [
              {
                "height": 477,
                "html_attributions": [
                  "<a href=\"https://maps.google.com/maps/contrib/118349294423852773226\">A Google User</a>"
                ],
                "photo_reference": "ATtYBwKSNKmbRaviB3-7f03PqD-GyrmoO1Wf9Rpd-EMOl50mn0OKxOq-4hIg3HJMLQWJJxg8t8JE7UjI54PR8KptmFMX0X3W5c9in7u3D34S3jyM-o9mDD7YizpC3dlLetTDgsORov2HvZPd5LyrAwwvjvteMM4iVz9UfHnMBqZQlCjQHMoc",
                "width": 645
              }
            ],
            "place_id": "ChIJSX0_1b1NtokRA2vnME_T1Fc",
            "plus_code": {
              "compound_code": "RP6R+2W Burke, Virginia",
              "global_code": "87C4RP6R+2W"
            },
            "rating": 4.8,
            "reference": "ChIJSX0_1b1NtokRA2vnME_T1Fc",
            "types": [
              "beauty_salon",
              "hair_care",
              "spa",
              "health",
              "point_of_interest",
              "establishment"
            ],
            "user_ratings_total": 128,
            "url": "https://maps.google.com/?cid=6328915713438739203"
          },
          {
            "business_status": "OPERATIONAL",
            "formatted_address": "24560 Southpoint Dr #230, Aldie, VA 20105, United States",
            "geometry": {
              "location": {
                "lat": 38.9378098,
                "lng": -77.54369430000001
              },
              "viewport": {
                "northeast": {
                  "lat": 38.93868117989273,
                  "lng": -77.54230472010728
                },
                "southwest": {
                  "lat": 38.93598152010728,
                  "lng": -77.54500437989273
                }
              }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png",
            "name": "Stone Ridge Dermatology; Asmaa A. Chaudhry, MD FAAD",
            "opening_hours": {
              "open_now": true
            },
            "photos": [
              {
                "height": 2464,
                "html_attributions": [
                  "<a href=\"https://maps.google.com/maps/contrib/103147905430793889382\">A Google User</a>"
                ],
                "photo_reference": "ATtYBwKYoy2hhmdlBeifArqV-JB1Wja-4Q6Cni19UPtQZnU1WqPiq69l437FbCJovA-IfUPqN9u-cgwN66dbyepmFR6AbK4wyuIfcC9VEyarGcsDdPjeGBEjVDZDjh8R4Z2q9xd1Dxfqx5GqW-YdmWj2siChoUYkhKpNBPQbYUYKiKnCB6t3",
                "width": 6856
              }
            ],
            "place_id": "ChIJ24SD6YlBtokRoZodVzbmXzw",
            "plus_code": {
              "compound_code": "WFQ4+4G Aldie, Virginia",
              "global_code": "87C4WFQ4+4G"
            },
            "rating": 4.8,
            "reference": "ChIJ24SD6YlBtokRoZodVzbmXzw",
            "types": [
              "doctor",
              "health",
              "point_of_interest",
              "establishment"
            ],
            "user_ratings_total": 114,
            "url": "https://maps.google.com/?cid=4350448886127368865"
          },
          {
            "business_status": "OPERATIONAL",
            "formatted_address": "8503 Arlington Blvd Suite 150, Fairfax, VA 22031, United States",
            "geometry": {
              "location": {
                "lat": 38.8648887,
                "lng": -77.23930639999999
              },
              "viewport": {
                "northeast": {
                  "lat": 38.86636527989273,
                  "lng": -77.23794572010726
                },
                "southwest": {
                  "lat": 38.86366562010728,
                  "lng": -77.24064537989271
                }
              }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png",
            "name": "Skin Cancer Surgery Center - A Division of Anne Arundel Dermatology",
            "opening_hours": {
              "open_now": true
            },
            "photos": [
              {
                "height": 1200,
                "html_attributions": [
                  "<a href=\"https://maps.google.com/maps/contrib/105839284513772712895\">A Google User</a>"
                ],
                "photo_reference": "ATtYBwJgLw20AaODb7XKiYWjCYOIEG4suAQur1K6X4ZMxTIn0J-0oqs37QBC61Lj9BM3qgbzb-VnnofL2XUoUVXtXO26gEE9RiOa8rW_qqoUkQ035EMj72xollYD6-S7CwLs0tzHCWYpB2Q_ftLeiU2a7azWV8HOhY3cRCtdwXqgO3tRoPRu",
                "width": 2800
              }
            ],
            "place_id": "ChIJV1sCYYBMtokRMddpemwA78w",
            "plus_code": {
              "compound_code": "VQ76+X7 Fairfax, Virginia",
              "global_code": "87C4VQ76+X7"
            },
            "rating": 4.9,
            "reference": "ChIJV1sCYYBMtokRMddpemwA78w",
            "types": [
              "health",
              "point_of_interest",
              "establishment"
            ],
            "user_ratings_total": 216,
            "url": "https://maps.google.com/?cid=14767022169081370417"
          },
          {
            "business_status": "OPERATIONAL",
            "formatted_address": "2 Pidgeon Hill Dr Suite 100, Sterling, VA 20165, United States",
            "geometry": {
              "location": {
                "lat": 39.0378614,
                "lng": -77.41326769999999
              },
              "viewport": {
                "northeast": {
                  "lat": 39.03930947989272,
                  "lng": -77.41201822010727
                },
                "southwest": {
                  "lat": 39.03660982010727,
                  "lng": -77.4147178798927
                }
              }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png",
            "name": "ARIA Medi Spa",
            "opening_hours": {
              "open_now": true
            },
            "photos": [
              {
                "height": 1309,
                "html_attributions": [
                  "<a href=\"https://maps.google.com/maps/contrib/116754839362896502276\">Aria Medispa</a>"
                ],
                "photo_reference": "ATtYBwIWBtTPRym0ZSzO30pPK8Lq8KcSgkYTXP3JR6a4GhaLGj0rnRsjWocP6m_ymwYwBBMnG-LsVk7gRe8tPHAgmTxm6oR1KCmpKaB4NP4yburxe9u625-laDfgsdg7N4zHLJNOls9p2POfWaDxQUaQ29nHCg4wl5KjAV80qyBsC02qf-sr",
                "width": 1284
              }
            ],
            "place_id": "ChIJsRBYfJo5tokRvNpdO4rMTMw",
            "plus_code": {
              "compound_code": "2HQP+4M Sterling, Virginia",
              "global_code": "87F42HQP+4M"
            },
            "rating": 4.4,
            "reference": "ChIJsRBYfJo5tokRvNpdO4rMTMw",
            "types": [
              "beauty_salon",
              "hair_care",
              "spa",
              "gym",
              "health",
              "point_of_interest",
              "establishment"
            ],
            "user_ratings_total": 113,
            "url": "https://maps.google.com/?cid=14721366176040868540"
          },
          {
            "business_status": "OPERATIONAL",
            "formatted_address": "2401 Research Blvd #260, Rockville, MD 20850, United States",
            "geometry": {
              "location": {
                "lat": 39.1049643,
                "lng": -77.18747429999999
              },
              "viewport": {
                "northeast": {
                  "lat": 39.10617517989272,
                  "lng": -77.18620547010727
                },
                "southwest": {
                  "lat": 39.10347552010727,
                  "lng": -77.18890512989272
                }
              }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png",
            "name": "Greater Washington Dermatology - Rockville",
            "opening_hours": {
              "open_now": true
            },
            "photos": [
              {
                "height": 3012,
                "html_attributions": [
                  "<a href=\"https://maps.google.com/maps/contrib/101787557140677768535\">Greater Washington Dermatology</a>"
                ],
                "photo_reference": "ATtYBwKs8j07mNHBv92u64iXo2lX--JFYrTh57aKhFO2ljMvfJMxZwwZp0Ug4A4SvrOhXi0YBW0XYIL3betX9EiCsXik54Szm7tRSoBdkmFrvX6iSdATqcNiE_ViTuiW7m-wAo2QGBiWVqlwixeef0JD1D_1cqAW7ItijH9U6lbddNfZZa3r",
                "width": 2868
              }
            ],
            "place_id": "ChIJq44jklbNt4kRFXB7U4_pPYM",
            "plus_code": {
              "compound_code": "4R37+X2 Rockville, Maryland",
              "global_code": "87F44R37+X2"
            },
            "rating": 4.6,
            "reference": "ChIJq44jklbNt4kRFXB7U4_pPYM",
            "types": [
              "beauty_salon",
              "hair_care",
              "spa",
              "doctor",
              "health",
              "point_of_interest",
              "establishment"
            ],
            "user_ratings_total": 478,
            "url": "https://maps.google.com/?cid=9456971594338103317"
          },
          {
            "business_status": "OPERATIONAL",
            "formatted_address": "11711 E Market Pl Suite 100, Fulton, MD 20759, United States",
            "geometry": {
              "location": {
                "lat": 39.1497345,
                "lng": -76.9071999
              },
              "viewport": {
                "northeast": {
                  "lat": 39.15121982989272,
                  "lng": -76.90564687010728
                },
                "southwest": {
                  "lat": 39.14852017010728,
                  "lng": -76.90834652989273
                }
              }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png",
            "name": "Eternal Dermatology",
            "opening_hours": {
              "open_now": false
            },
            "photos": [
              {
                "height": 1068,
                "html_attributions": [
                  "<a href=\"https://maps.google.com/maps/contrib/108749213604935889428\">A Google User</a>"
                ],
                "photo_reference": "ATtYBwJ1hMaJwCLbHnMYfIpWR_jlWFQGjy92QrK5LxL7_7372qyDN-mbu0yjhGdSraxMVl-5f_3rF5XBIFAkIKGWRRWgo0m8RTOzwQ_G2GuyJJOzBazKp_HCoFupys7tl4bUdXSZ-nVihkdiwDCy8Xs4HjELuntlmAboN-0r9uZ3hrkhWaWW",
                "width": 1899
              }
            ],
            "place_id": "ChIJm7tlEkHdt4kRlZi8HwCwTHs",
            "plus_code": {
              "compound_code": "43XV+V4 Fulton, Maryland",
              "global_code": "87F543XV+V4"
            },
            "rating": 4.8,
            "reference": "ChIJm7tlEkHdt4kRlZi8HwCwTHs",
            "types": [
              "spa",
              "doctor",
              "health",
              "point_of_interest",
              "establishment"
            ],
            "user_ratings_total": 277,
            "url": "https://maps.google.com/?cid=8884669679474088085"
          },
          {
            "business_status": "OPERATIONAL",
            "formatted_address": "11161 New Hampshire Ave Suite 307, Silver Spring, MD 20904, United States",
            "geometry": {
              "location": {
                "lat": 39.0393373,
                "lng": -76.9892826
              },
              "viewport": {
                "northeast": {
                  "lat": 39.04066447989273,
                  "lng": -76.98810917010726
                },
                "southwest": {
                  "lat": 39.03796482010728,
                  "lng": -76.99080882989271
                }
              }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png",
            "name": "Dermatology and Skin Cancer Center: Eleanor Ford, MD",
            "opening_hours": {
              "open_now": true
            },
            "photos": [
              {
                "height": 700,
                "html_attributions": [
                  "<a href=\"https://maps.google.com/maps/contrib/104650042979394439246\">Dr. Eleanor Y. Ford, MD</a>"
                ],
                "photo_reference": "ATtYBwKcYdtznqnE2kUHhBhH3ByaAQ4yewFTkuyek4hpB9kV31DcY_7SPtgVVrT5TBlQezZG9TMJpVRXGhG8I85wOsYw278PIGSwNP09TwtgaNbcA-KacLRJqVCMKtkHhRtCkGhItQi-M5KUhPpaOpRpbWVTcXr-zkVTLU7pzj-nfs9SCaC3",
                "width": 1420
              }
            ],
            "place_id": "ChIJE0rOV1zPt4kR2acruBInyQ4",
            "plus_code": {
              "compound_code": "22Q6+P7 Silver Spring, Maryland",
              "global_code": "87F522Q6+P7"
            },
            "rating": 4.8,
            "reference": "ChIJE0rOV1zPt4kR2acruBInyQ4",
            "types": [
              "doctor",
              "health",
              "point_of_interest",
              "establishment"
            ],
            "user_ratings_total": 302,
            "url": "https://maps.google.com/?cid=1065425748202596313"
          },
          {
            "business_status": "OPERATIONAL",
            "formatted_address": "Suite #115, 21040, Sycolin Rd, Ashburn, VA 20147, United States",
            "geometry": {
              "location": {
                "lat": 39.0418612,
                "lng": -77.52103079999999
              },
              "viewport": {
                "northeast": {
                  "lat": 39.04332842989272,
                  "lng": -77.51968342010727
                },
                "southwest": {
                  "lat": 39.04062877010728,
                  "lng": -77.52238307989272
                }
              }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png",
            "name": "ALURA VEDA / Aveda Concept Salon & MedSpa",
            "opening_hours": {
              "open_now": true
            },
            "photos": [
              {
                "height": 1242,
                "html_attributions": [
                  "<a href=\"https://maps.google.com/maps/contrib/112348704456840371384\">A Google User</a>"
                ],
                "photo_reference": "ATtYBwKbwL7Mw-e-GW2Fi0l60nz_4X7I46K3CJ0uYjjao60EF2V1GYt6UHxi_RyDPBhbUHmZQ2I5Bqr_xrL1GmxIXU0Rx1v-S_pqmw-6tY7XZwohiPw1wgN3Scn2fdMsAow5pAyEiuICtg7eOdhGdDZIP_NySp2cdLLwJ18S3QaNK7BdEbvA",
                "width": 2208
              }
            ],
            "place_id": "ChIJCa-aLgg_tokRQcKfqNvjjT4",
            "plus_code": {
              "compound_code": "2FRH+PH Ashburn, Virginia",
              "global_code": "87F42FRH+PH"
            },
            "rating": 5,
            "reference": "ChIJCa-aLgg_tokRQcKfqNvjjT4",
            "types": [
              "beauty_salon",
              "hair_care",
              "spa",
              "health",
              "point_of_interest",
              "establishment"
            ],
            "user_ratings_total": 46,
            "url": "https://maps.google.com/?cid=4507509334634119745"
          },
          {
            "business_status": "OPERATIONAL",
            "formatted_address": "3833 Fairfax Dr #360, Arlington, VA 22203, United States",
            "geometry": {
              "location": {
                "lat": 38.8827735,
                "lng": -77.1063867
              },
              "viewport": {
                "northeast": {
                  "lat": 38.88412837989272,
                  "lng": -77.10520582010729
                },
                "southwest": {
                  "lat": 38.88142872010727,
                  "lng": -77.10790547989272
                }
              }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png",
            "name": "Forefront Dermatology",
            "opening_hours": {
              "open_now": true
            },
            "photos": [
              {
                "height": 3024,
                "html_attributions": [
                  "<a href=\"https://maps.google.com/maps/contrib/102189185094199682488\">Rhett Kent</a>"
                ],
                "photo_reference": "ATtYBwL2QF1zacLj90NsXukJhZQt2cbVCwCCLNKkE92m5bnYtMvqblIg9HfFUVkVyocNSZ0SSuLoDVmPjMVi6ZpMpjyWZJNqdk5UOPGGHw4ARDV8W29yfNWq-rqZNTPAJICPCCdebqvtSJXw5iHOUh5rgPBbXWJfz7diq7yejZSVHq5VMgec",
                "width": 4032
              }
            ],
            "place_id": "ChIJxWePQNq1t4kRQLIE2NXRdO8",
            "plus_code": {
              "compound_code": "VVMV+4C Arlington, Virginia",
              "global_code": "87C4VVMV+4C"
            },
            "rating": 4.3,
            "reference": "ChIJxWePQNq1t4kRQLIE2NXRdO8",
            "types": [
              "doctor",
              "health",
              "point_of_interest",
              "establishment"
            ],
            "user_ratings_total": 53,
            "url": "https://maps.google.com/?cid=17254646788745638464"
          },
          {
            "business_status": "OPERATIONAL",
            "formatted_address": "8505 Arlington Blvd #210, Fairfax, VA 22031, United States",
            "geometry": {
              "location": {
                "lat": 38.8644427,
                "lng": -77.2399683
              },
              "viewport": {
                "northeast": {
                  "lat": 38.86565992989272,
                  "lng": -77.23866347010728
                },
                "southwest": {
                  "lat": 38.86296027010728,
                  "lng": -77.24136312989272
                }
              }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png",
            "name": "Forefront Dermatology",
            "opening_hours": {
              "open_now": true
            },
            "photos": [
              {
                "height": 607,
                "html_attributions": [
                  "<a href=\"https://maps.google.com/maps/contrib/103684847744541095967\">A Google User</a>"
                ],
                "photo_reference": "ATtYBwKPVsw-mlaTFOI_Uq-X_HH_L48HqoI-Q9qU-QSizyEebyd6qjMkEgBgvttwBgFTgbf-0xPlWsIovCiDW5lBfKLdQILfFkxdgSVxW1aFDGU3ds-NUBm-tEQT0zVIERYzrUa0c_ghLzKEVuMfYVz7S2e4r66VDdIWG9fkX0Ij-2vEHXl-",
                "width": 1080
              }
            ],
            "place_id": "ChIJHRMfj4BMtokRBGuxVtBm3Ew",
            "plus_code": {
              "compound_code": "VQ76+Q2 Fairfax, Virginia",
              "global_code": "87C4VQ76+Q2"
            },
            "rating": 4.7,
            "reference": "ChIJHRMfj4BMtokRBGuxVtBm3Ew",
            "types": [
              "doctor",
              "health",
              "point_of_interest",
              "establishment"
            ],
            "user_ratings_total": 144,
            "url": "https://maps.google.com/?cid=5538414686752566020"
          },
          {
            "business_status": "OPERATIONAL",
            "formatted_address": "19415 Deerfield Ave Suite 314, Leesburg, VA 20176, United States",
            "geometry": {
              "location": {
                "lat": 39.0793673,
                "lng": -77.4775212
              },
              "viewport": {
                "northeast": {
                  "lat": 39.08084667989272,
                  "lng": -77.47615067010729
                },
                "southwest": {
                  "lat": 39.07814702010727,
                  "lng": -77.47885032989272
                }
              }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png",
            "name": "Van Ha, MD",
            "opening_hours": {
              "open_now": true
            },
            "place_id": "ChIJ_2PMuQw8tokRuM-GBEH-yWQ",
            "plus_code": {
              "compound_code": "3GHC+PX Leesburg, Virginia",
              "global_code": "87F43GHC+PX"
            },
            "rating": 4.6,
            "reference": "ChIJ_2PMuQw8tokRuM-GBEH-yWQ",
            "types": [
              "doctor",
              "health",
              "point_of_interest",
              "establishment"
            ],
            "user_ratings_total": 15,
            "url": "https://maps.google.com/?cid=7262615429313908664"
          },
          {
            "business_status": "OPERATIONAL",
            "formatted_address": "174 Waterfront St #200, Oxon Hill, MD 20745, United States",
            "geometry": {
              "location": {
                "lat": 38.7836624,
                "lng": -77.01681839999999
              },
              "viewport": {
                "northeast": {
                  "lat": 38.78510662989272,
                  "lng": -77.01553672010728
                },
                "southwest": {
                  "lat": 38.78240697010727,
                  "lng": -77.01823637989271
                }
              }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png",
            "name": "Advanced Dermatology and Cosmetic Surgery - National Harbor",
            "opening_hours": {
              "open_now": true
            },
            "photos": [
              {
                "height": 2684,
                "html_attributions": [
                  "<a href=\"https://maps.google.com/maps/contrib/110222319589556541744\">A Google User</a>"
                ],
                "photo_reference": "ATtYBwInRGZXw94P-XprQeNkzXyd-oQjBvOPp8W1sqP1sp1HiBscM0MGQ8suWnPeTbMFkRz3366rpWYm-BJVTZwA9QBiXMmmy4r7vzw786MG_7mgDQWcx9rGBLDX8uNB0flhZ3Vwpsz1SYJjKINfsNcQIwWOYDZtTI4vX_wM8ViPKXJAuG1A",
                "width": 3896
              }
            ],
            "place_id": "ChIJ7fZthHOwt4kR4Xg-qwTJBLA",
            "plus_code": {
              "compound_code": "QXMM+F7 Oxon Hill, Maryland",
              "global_code": "87C4QXMM+F7"
            },
            "rating": 4.8,
            "reference": "ChIJ7fZthHOwt4kR4Xg-qwTJBLA",
            "types": [
              "beauty_salon",
              "hair_care",
              "spa",
              "doctor",
              "health",
              "point_of_interest",
              "establishment"
            ],
            "user_ratings_total": 325,
            "url": "https://maps.google.com/?cid=12683483472472209633"
          },
          {
            "business_status": "OPERATIONAL",
            "formatted_address": "4660 Kenmore Ave # 1100, Alexandria, VA 22304, United States",
            "geometry": {
              "location": {
                "lat": 38.8282467,
                "lng": -77.1104644
              },
              "viewport": {
                "northeast": {
                  "lat": 38.82960677989272,
                  "lng": -77.10895802010728
                },
                "southwest": {
                  "lat": 38.82690712010728,
                  "lng": -77.11165767989272
                }
              }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png",
            "name": "Advanced Dermatology and Cosmetic Surgery - Alexandria",
            "opening_hours": {
              "open_now": true
            },
            "photos": [
              {
                "height": 3456,
                "html_attributions": [
                  "<a href=\"https://maps.google.com/maps/contrib/114274263084294305265\">Barry Carroll</a>"
                ],
                "photo_reference": "ATtYBwLPeJOQn1QVkOhHF2YG3aBgD3NAbz4EF17ue3WLzLacrvgbJCKcv31SGROoW3srQ1gbEjERdKZQpBE8c6xsGcFL9-l8venGHcEA5MXvYDzkXDVg94hj7yHACtiCDeF_C67zoMdmiDawgM2lWy0RyaNTktfISUGFPgZgrrOnUIueAKJk",
                "width": 5184
              }
            ],
            "place_id": "ChIJz04uZtyzt4kRqM7RlTHRNHA",
            "plus_code": {
              "compound_code": "RVHQ+7R Alexandria, Virginia",
              "global_code": "87C4RVHQ+7R"
            },
            "rating": 4.2,
            "reference": "ChIJz04uZtyzt4kRqM7RlTHRNHA",
            "types": [
              "beauty_salon",
              "hair_care",
              "spa",
              "doctor",
              "health",
              "point_of_interest",
              "establishment"
            ],
            "user_ratings_total": 748,
            "url": "https://maps.google.com/?cid=8085317241934040744"
          },
          {
            "business_status": "OPERATIONAL",
            "formatted_address": "8890 Centre Park Dr #300, Columbia, MD 21045, United States",
            "geometry": {
              "location": {
                "lat": 39.2288372,
                "lng": -76.8120907
              },
              "viewport": {
                "northeast": {
                  "lat": 39.23015862989272,
                  "lng": -76.81064002010729
                },
                "southwest": {
                  "lat": 39.22745897010728,
                  "lng": -76.81333967989272
                }
              }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png",
            "name": "Dr Natasha Sandy M.D.",
            "opening_hours": {
              "open_now": true
            },
            "photos": [
              {
                "height": 3024,
                "html_attributions": [
                  "<a href=\"https://maps.google.com/maps/contrib/113954152817017317502\">Melissa Witherspoon</a>"
                ],
                "photo_reference": "ATtYBwIbBXFBnUglbNsrW6YEdGxiztlnZq1S00DQAtrKbe3YnRnxwAEPSEwyRKar4da5HViged-KmyUCYDvgeDGi6pumEY_Qn2ItQwjNHnlLOVcltD-N3hzl0OzpvbWJeiLBY5qRQbKcGH82uN97JlrdqBfWgoQJqkQtmFm1JmZ8AIeXrbgM",
                "width": 4032
              }
            ],
            "place_id": "ChIJpRt5WKkhyIkRwTj8bjqazDE",
            "plus_code": {
              "compound_code": "65HQ+G5 Columbia, Maryland",
              "global_code": "87F565HQ+G5"
            },
            "rating": 4.2,
            "reference": "ChIJpRt5WKkhyIkRwTj8bjqazDE",
            "types": [
              "doctor",
              "health",
              "point_of_interest",
              "establishment"
            ],
            "user_ratings_total": 72,
            "url": "https://maps.google.com/?cid=3588412578868246721"
          },
          {
            "business_status": "OPERATIONAL",
            "formatted_address": "2440 M St NW #313, Washington, DC 20037, United States",
            "geometry": {
              "location": {
                "lat": 38.9047714,
                "lng": -77.0521255
              },
              "viewport": {
                "northeast": {
                  "lat": 38.90636352989272,
                  "lng": -77.05071787010728
                },
                "southwest": {
                  "lat": 38.90366387010728,
                  "lng": -77.05341752989271
                }
              }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png",
            "name": "Forefront Dermatology",
            "opening_hours": {
              "open_now": true
            },
            "photos": [
              {
                "height": 1196,
                "html_attributions": [
                  "<a href=\"https://maps.google.com/maps/contrib/108541726683698554695\">Michael Farmer</a>"
                ],
                "photo_reference": "ATtYBwJOXM_aiXdlq73Yg2UzgzWRYTK6DmL_Yr05CX5UgyaScJwS0IvunlOxxTvaweSXlCO5HoBBhyilY1-HyJsxh2zK2gwneqhEfCz21iJcnXi7l98AgypF6R1yN5nkRQ0x7UUCCwRnXojpYlZSPn5RqHP-fd676eUEKaTe5UWNV0S1rBzk",
                "width": 720
              }
            ],
            "place_id": "ChIJndw1RrS3t4kR5G13pCPGmHs",
            "plus_code": {
              "compound_code": "WW3X+W4 Washington, District of Columbia",
              "global_code": "87C4WW3X+W4"
            },
            "rating": 4.5,
            "reference": "ChIJndw1RrS3t4kR5G13pCPGmHs",
            "types": [
              "doctor",
              "health",
              "point_of_interest",
              "establishment"
            ],
            "user_ratings_total": 56,
            "url": "https://maps.google.com/?cid=8906086119510601188"
          },
          {
            "business_status": "OPERATIONAL",
            "formatted_address": "17337 Pickwick Dr #B, Purcellville, VA 20132, United States",
            "geometry": {
              "location": {
                "lat": 39.1364618,
                "lng": -77.6963
              },
              "viewport": {
                "northeast": {
                  "lat": 39.13782737989273,
                  "lng": -77.69491267010727
                },
                "southwest": {
                  "lat": 39.13512772010728,
                  "lng": -77.69761232989272
                }
              }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png",
            "name": "Permanent Makeup & Esthetics, LLC",
            "opening_hours": {
              "open_now": true
            },
            "photos": [
              {
                "height": 3072,
                "html_attributions": [
                  "<a href=\"https://maps.google.com/maps/contrib/109115915258075212502\">Permanent Makeup and Esthetics, LLC</a>"
                ],
                "photo_reference": "ATtYBwKP64gtJOlgc8wOV9KDHOfJAdWRe5DLsjkhNBuC3qVfpZuptdG4AzAPTHd0y3CvFrZ6woZqUdM6-ALjP2ksZhzxcFcUa_lEMRaxWR69TfqYxPG3nMjfq9g9LUfY7eLAS_cHYYBNPPTDK8MUzr5x-neR_fvURm_9pDwJYRkSkddrTQFZ",
                "width": 3072
              }
            ],
            "place_id": "ChIJY1OyBR46tokRIwVCKt7Wj4A",
            "plus_code": {
              "compound_code": "48P3+HF Purcellville, Virginia",
              "global_code": "87F448P3+HF"
            },
            "rating": 5,
            "reference": "ChIJY1OyBR46tokRIwVCKt7Wj4A",
            "types": [
              "health",
              "point_of_interest",
              "establishment"
            ],
            "user_ratings_total": 82,
            "url": "https://maps.google.com/?cid=9263859208204453155"
          }
        ]
    }
    let maxLimit=3;
    const [offset, setOffset] = useState(0);
    const totalPage = Math.ceil(result.results.length / maxLimit);
    let i = 0;
    const getPageNumbers = (current) => {
        let n = 3;
        let m = current - 2;
        const pageNumbers = [];
        if (current === 1) {
            if (totalPage === 0) {
                return [1];
            }
            if (totalPage < 3) {
                n = totalPage;
            }
            for (i = 1; i <= n; i++) {
                pageNumbers.push(i);
            }
        } else if (current < totalPage) {
            for (i = current - 1; i <= current + 1; i++) {
                pageNumbers.push(i);
            }
        } else {
            if (current - 2 < 1) {
                m = 1;
            }
            for (i = m; i <= current; i++) {
                pageNumbers.push(i);
            }
        }
        return pageNumbers;
    };
    const handlePage = (pageNo) => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
        if (pageNo === 1) {
            setPagenumbers(getPageNumbers(1));
        } else {
            setPagenumbers(getPageNumbers(pageNo));
        }
        setOffset((pageNo - 1) * maxLimit);
    };
    const [pageNumbers, setPagenumbers] = useState(getPageNumbers(1));
    return(
        <div className="w-max-prose md:w-full flex flex-col gap-2 justify-center items-center">
        {result.results.slice(offset, offset+maxLimit).map((item) => {
            return(
                <div key={item.place_id} className='w-max-prose md:w-5/12 h-max bg-white shadow-md rounded-lg overflow-hidden mx-auto'>
                    <div className="py-4 px-8 mt-3">
                        <div className="flex flex-col mb-8">
                            <h2 className="text-gray-700 font-semibold text-sm md:text-2xl tracking-wide mb-2">{item.name}</h2>
                            <p className="text-gray-500 text-base">{item.formatted_address}</p>
                        </div>
                        <div className="bg-gray-100 max-w-prose rounded-lg">
                            <div className="py-4 px-4">
                                <div className="flex flex-col">
                                    <h4 className="text-sm md:text-lg font-semibold mb-3">Stats</h4>
                                    <div className="flex flex-col  text-sm text-gray-500">
                                        {item.hasOwnProperty('opening_hours')?<span className={` ${
                                            item.opening_hours.open_now === true 
                                                ? "bg-green-600 hover:bg-green-700 text-white w-28 text-xs md:text-sm px-4 py-2  border rounded-full"
                                                : "bg-red-600 hover:bg-red-700 text-white w-28 text-xs md:text-sm px-4 py-2  border rounded-full"}`}>Open now</span>
                                            :
                                            <span className="bg-red-600 hover:bg-red-700 text-white w-28 text-xs md:text-sm px-4 py-2  border rounded-full">
                                                No data
                                            </span> 
                                            }
                                        
                                        <span className="mb-1">User Ratings : {item.rating}</span>
                                        <span className="mb-1">Total Users Ratings: {item.user_ratings_total}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="py-4">
                            <a href={item.url} target="_blank" rel="noreferrer" className="block tracking-widest uppercase text-center shadow bg-indigo-600 hover:bg-indigo-700 focus:shadow-outline focus:outline-none text-white text-xs py-3 px-10 rounded">Open in maps</a>
                        </div>
                    </div>
                </div>
            )
            
        })
        }
        <div
                className={` ${
                    totalPage === 1
                        ? "hidden"
                        : "sm:flex-1 mt-2 text-center justify-between"
                }`}>
                <div>
                    <nav className="inline-flex shadow-sm">
                        <button
                            type="button"
                            key={`page_first_${1}`}
                            className={`-ml-px  "hover:text-gray-800" relative inline-flex items-center font-semibold px-4 py-3 border border-gray-300 text-sm leading-5 font-medium focus:z-10 focus:outline-none focus:border-green-300 focus:shadow-outline-green transition ease-in-out duration-150 bg-white hover:bg-gray-200'}`}
                            onClick={() => handlePage(1)}>
                            First
                        </button>
                        {pageNumbers.map((pageNo) => (
                            <button
                                type="button"
                                key={`page_${pageNo}`}
                                className={`-ml-px ${
                                    pageNo === offset / maxLimit + 1
                                        ? "bg-indigo-700 hover:bg-indigo-800 text-white"
                                        : "hover:text-gray-800"
                                } relative inline-flex items-center font-semibold px-4 py-3 border border-gray-300 text-sm leading-5 font-medium focus:z-10 focus:outline-none focus:border-green-300 focus:shadow-outline-green transition ease-in-out duration-150 bg-white hover:bg-gray-200'}`}
                                onClick={() => handlePage(pageNo)}>
                                {pageNo}
                            </button>
                        ))}
                        <button
                            type="button"
                            key={`page_last_${totalPage}`}
                            className={`-ml-px  "hover:text-gray-800" relative inline-flex items-center font-semibold px-4 py-3 border border-gray-300 text-sm leading-5 font-medium focus:z-10 focus:outline-none focus:border-green-300 focus:shadow-outline-green transition ease-in-out duration-150 bg-white hover:bg-gray-200'}`}
                            onClick={() => handlePage(totalPage)}>
                            Last
                        </button>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default NearByPlaces;