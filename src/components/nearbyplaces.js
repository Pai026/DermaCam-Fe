import React,{useState} from 'react';

const NearByPlaces = () =>{
    const result ={"result":[
              {
                "business_status": "OPERATIONAL",
                "formatted_address": "Indraprastha Building, Desabhimani Rd, near Bhavan's School, Elamakkara, Kochi, Kerala 682026, India",
                "geometry": {
                  "location": {
                    "lat": 10.016171,
                    "lng": 76.29205619999999
                  },
                  "viewport": {
                    "northeast": {
                      "lat": 10.01752782989272,
                      "lng": 76.29343522989271
                    },
                    "southwest": {
                      "lat": 10.01482817010728,
                      "lng": 76.29073557010727
                    }
                  }
                },
                "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png",
                "name": "Indyu Skin Care Clinic & Cosmetology Centre",
                "opening_hours": {
                  "open_now": false
                },
                "photos": [
                  {
                    "height": 365,
                    "html_attributions": [
                      "<a href=\"https://maps.google.com/maps/contrib/110532211095622968437\">A Google User</a>"
                    ],
                    "photo_reference": "ATtYBwL0sm-DEmYrzL1R2mz-4-Tb35YLvkvyTQzSEw3s0lPwgBC7TUoSAN_3Ml39wjfddmJRcaXkswfg-ODK5fiDK-9-e7sbpZCe7Llm_BYuLoFgUmyZsLvSnvnzrbptqHSkJrpvNkQomdwsTfstuaG8uHZs7swIDh0lcw-7ZWYelOecs0Fq",
                    "width": 960
                  }
                ],
                "place_id": "ChIJb9i06-wNCDsRCk98POhSYe8",
                "plus_code": {
                  "compound_code": "278R+FR Kochi, Kerala",
                  "global_code": "7J2R278R+FR"
                },
                "rating": 4.7,
                "reference": "ChIJb9i06-wNCDsRCk98POhSYe8",
                "types": [
                  "health",
                  "point_of_interest",
                  "establishment"
                ],
                "user_ratings_total": 34
              },
              {
                "business_status": "OPERATIONAL",
                "formatted_address": "Panorama Arcade, Palarivattom - Edappally Rd, Ponekkara, Edappally, Kochi, Kerala 682024, India",
                "geometry": {
                  "location": {
                    "lat": 10.020976,
                    "lng": 76.3056697
                  },
                  "viewport": {
                    "northeast": {
                      "lat": 10.02228307989272,
                      "lng": 76.30710392989272
                    },
                    "southwest": {
                      "lat": 10.01958342010728,
                      "lng": 76.30440427010728
                    }
                  }
                },
                "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png",
                "name": "Skin Care Clinic",
                "opening_hours": {
                  "open_now": false
                },
                "photos": [
                  {
                    "height": 3024,
                    "html_attributions": [
                      "<a href=\"https://maps.google.com/maps/contrib/114912525426432222273\">George Kuruvilla</a>"
                    ],
                    "photo_reference": "ATtYBwK3t-2T1HmeAAfWvk9lUtzQk0RJ_rk7h0CdnLEZgcKAj2vIGdHsOWqDNjlFHbFrelLzvxAmX1emySJzalvpkMa8uoUNmISTYQSEHtW3PTrQjKODlv6n-B13mOwBCmd85cK9UXGJ_ZzwoRknzxKwxQAUZTbVqxLTNMBR6D2bV2NulRey",
                    "width": 4032
                  }
                ],
                "place_id": "ChIJCXOMKaYNCDsRjcdFCarN938",
                "plus_code": {
                  "compound_code": "28C4+97 Kochi, Kerala",
                  "global_code": "7J2R28C4+97"
                },
                "rating": 3.5,
                "reference": "ChIJCXOMKaYNCDsRjcdFCarN938",
                "types": [
                  "health",
                  "point_of_interest",
                  "establishment"
                ],
                "user_ratings_total": 2
              },
              {
                "business_status": "OPERATIONAL",
                "formatted_address": "Mamangalam, Ernakulam, Kerala 680025, India",
                "geometry": {
                  "location": {
                    "lat": 10.0110637,
                    "lng": 76.3043625
                  },
                  "viewport": {
                    "northeast": {
                      "lat": 10.01242477989272,
                      "lng": 76.30573592989272
                    },
                    "southwest": {
                      "lat": 10.00972512010728,
                      "lng": 76.30303627010727
                    }
                  }
                },
                "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png",
                "name": "Skin Clinic",
                "place_id": "ChIJ____Pw8NCDsRxAnColWgbFE",
                "plus_code": {
                  "compound_code": "2863+CP Ernakulam, Kerala",
                  "global_code": "7J2R2863+CP"
                },
                "rating": 0,
                "reference": "ChIJ____Pw8NCDsRxAnColWgbFE",
                "types": [
                  "health",
                  "point_of_interest",
                  "establishment"
                ],
                "user_ratings_total": 0
              },
              {
                "business_status": "OPERATIONAL",
                "formatted_address": "Amrita Institute of Medical Sciences, Department of Dermatology, Kochi, Kerala 682041, India",
                "geometry": {
                  "location": {
                    "lat": 10.0336154,
                    "lng": 76.2910004
                  },
                  "viewport": {
                    "northeast": {
                      "lat": 10.03491227989272,
                      "lng": 76.29236457989272
                    },
                    "southwest": {
                      "lat": 10.03221262010728,
                      "lng": 76.28966492010727
                    }
                  }
                },
                "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png",
                "name": "Dr Soumya Jagadeesan (Vivek) Dermatologist & Cosmetologist",
                "opening_hours": {
                  "open_now": false
                },
                "photos": [
                  {
                    "height": 960,
                    "html_attributions": [
                      "<a href=\"https://maps.google.com/maps/contrib/112167111428233212513\">A Google User</a>"
                    ],
                    "photo_reference": "ATtYBwJlrw9vBifXxmmX13ZxtvjZWll8s-284Kxzyaa3tLG4Yx6cQ37PFUlLYa_W0Ivt9P5cIcvL7vFkc-0dRqqGZFA0JbwOBaiviwnHA_Dl_JBFBZ182j00UycSNMQGtwI79F_hB2riq8BKlE7mc3RrjYB6kiWaSSPCMknSV1H65pGzN9Pm",
                    "width": 1440
                  }
                ],
                "place_id": "ChIJp42pTp8NCDsRW2taqXULIzc",
                "plus_code": {
                  "compound_code": "27MR+CC Kochi, Kerala",
                  "global_code": "7J2R27MR+CC"
                },
                "rating": 5,
                "reference": "ChIJp42pTp8NCDsRW2taqXULIzc",
                "types": [
                  "doctor",
                  "health",
                  "point_of_interest",
                  "establishment"
                ],
                "user_ratings_total": 43
              },
              {
                "business_status": "OPERATIONAL",
                "formatted_address": "Metro Pillar 474 High School Junction, Palarivattom - Edappally Rd, Mamangalam, Edappally, Kochi, Kerala 682024, India",
                "geometry": {
                  "location": {
                    "lat": 10.0131876,
                    "lng": 76.3029529
                  },
                  "viewport": {
                    "northeast": {
                      "lat": 10.01450172989272,
                      "lng": 76.30416707989272
                    },
                    "southwest": {
                      "lat": 10.01180207010728,
                      "lng": 76.30146742010727
                    }
                  }
                },
                "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png",
                "name": "Skinsecrets: Dr Anjana Mohan",
                "opening_hours": {
                  "open_now": false
                },
                "photos": [
                  {
                    "height": 4032,
                    "html_attributions": [
                      "<a href=\"https://maps.google.com/maps/contrib/111841530214487490851\">Anjana Mohan</a>"
                    ],
                    "photo_reference": "ATtYBwISFp75D5v2R3FqL-LKXCoFzV0C0fZEiZ6xn_UacR5fOrY25nLxHuvX3dH0mAw0itzyvHPIc4I6Y5jCgPv2zt6AmDvASA26isPG19Mr-mUrUnPrZzDcJK86XBZ7eI5hhbgpMRA1An7kf77pONsU8W4xBzkJvURiSJafpPPtfbLAqnCs",
                    "width": 3024
                  }
                ],
                "place_id": "ChIJGZlSKAkNCDsR7gT73Ns_1QU",
                "plus_code": {
                  "compound_code": "2873+75 Kochi, Kerala",
                  "global_code": "7J2R2873+75"
                },
                "rating": 4.7,
                "reference": "ChIJGZlSKAkNCDsR7gT73Ns_1QU",
                "types": [
                  "health",
                  "point_of_interest",
                  "establishment"
                ],
                "user_ratings_total": 237
              },
              {
                "business_status": "OPERATIONAL",
                "formatted_address": "Lulu Jn, First Floor, TKA Tower, Near Metro Pillar No: 410, Edappally, Kochi, Kerala 682024, India",
                "geometry": {
                  "location": {
                    "lat": 10.0239203,
                    "lng": 76.3073431
                  },
                  "viewport": {
                    "northeast": {
                      "lat": 10.02524132989272,
                      "lng": 76.30874492989273
                    },
                    "southwest": {
                      "lat": 10.02254167010728,
                      "lng": 76.30604527010728
                    }
                  }
                },
                "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png",
                "name": "Novocare Dental & Skin Clinic - Dental Clinic in Kochi Edappally, Skin Clinic in Edappally Kochi, Hair Care | Hair Loss | Hair Transplant Kochi | PRP Hair Treatments Edappally Kochi",
                "opening_hours": {
                  "open_now": false
                },
                "photos": [
                  {
                    "height": 3256,
                    "html_attributions": [
                      "<a href=\"https://maps.google.com/maps/contrib/107814809656012693703\">A Google User</a>"
                    ],
                    "photo_reference": "ATtYBwLFqMfIRvsKjpHykn9WXpCC4xYIDqXHYNWY7xGZYW0MDNJaGGWdHOuQJHaeOF1seg0Zzxhz0jupVDJs3maybvuffJeBpRbhMv7kaeft6V63qvqHM48VjTWgdl3CHpYW5hpFMECHG1rdO-EBoax7LfPV9PzYjUlndlyC6_1dn6jGMU5F",
                    "width": 4984
                  }
                ],
                "place_id": "ChIJ18b0tvUNCDsR56Y6e4Vzeyw",
                "plus_code": {
                  "compound_code": "28F4+HW Kochi, Kerala",
                  "global_code": "7J2R28F4+HW"
                },
                "rating": 4.9,
                "reference": "ChIJ18b0tvUNCDsR56Y6e4Vzeyw",
                "types": [
                  "dentist",
                  "health",
                  "point_of_interest",
                  "establishment"
                ],
                "user_ratings_total": 141
              },
              {
                "business_status": "OPERATIONAL",
                "formatted_address": "PNVM Hospital, Madhava Pharmacy Jn,Banerji Road, Ernakulam, Kochi, Kerala 682018, India",
                "geometry": {
                  "location": {
                    "lat": 9.9856214,
                    "lng": 76.28095669999999
                  },
                  "viewport": {
                    "northeast": {
                      "lat": 9.986974979892723,
                      "lng": 76.28230587989273
                    },
                    "southwest": {
                      "lat": 9.98427532010728,
                      "lng": 76.2796062201073
                    }
                  }
                },
                "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png",
                "name": "PNVM Cosmo Derma Centre, Skin and Hair Clinic",
                "opening_hours": {
                  "open_now": false
                },
                "photos": [
                  {
                    "height": 375,
                    "html_attributions": [
                      "<a href=\"https://maps.google.com/maps/contrib/113562574599759441705\">A Google User</a>"
                    ],
                    "photo_reference": "ATtYBwJQkjRn92WNOsfwYTY4ddyQYKpuRGCl_ltVCmqvs2_uyZocd9jZ5J-LWGtba6zkmfbE9GWtQ47cV9GwYefmU5Qo9El54v4AxFqEuP88ADRdwyqyZSXzNE1fIkvQZoV7YY7SXm5VJHxhtiAZDP3zI4pK3V-AbePGZeu3G_Df5jFvU2aL",
                    "width": 888
                  }
                ],
                "place_id": "ChIJZdzrw1oNCDsRxF1UzCSf7Fo",
                "plus_code": {
                  "compound_code": "X7PJ+69 Kochi, Kerala",
                  "global_code": "6JXRX7PJ+69"
                },
                "rating": 4.3,
                "reference": "ChIJZdzrw1oNCDsRxF1UzCSf7Fo",
                "types": [
                  "beauty_salon",
                  "hair_care",
                  "doctor",
                  "health",
                  "point_of_interest",
                  "establishment"
                ],
                "user_ratings_total": 15
              },
              {
                "business_status": "OPERATIONAL",
                "formatted_address": "A J Residency, Ground, behind Lenin Center, Kaloor, Kochi, Kerala 682017, India",
                "geometry": {
                  "location": {
                    "lat": 9.9965073,
                    "lng": 76.29301079999999
                  },
                  "viewport": {
                    "northeast": {
                      "lat": 9.99781302989272,
                      "lng": 76.29427507989271
                    },
                    "southwest": {
                      "lat": 9.995113370107276,
                      "lng": 76.29157542010728
                    }
                  }
                },
                "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png",
                "name": "Laser Skin & Cosmetology Clinic",
                "opening_hours": {
                  "open_now": false
                },
                "photos": [
                  {
                    "height": 3120,
                    "html_attributions": [
                      "<a href=\"https://maps.google.com/maps/contrib/107235844282914618118\">A Google User</a>"
                    ],
                    "photo_reference": "ATtYBwLY2QtX7iowP5aWhh7A0NITrrUIAo39YROuRSJv9V4ZD-hrVj8d2Wxc2os5K9KvM4JWMQri0yCKsnAzzfrSia5s8U_TWIBFPPKfMwfrg3VMMizzFEOJapvhkG3tsgiFRP8TjgFv1-lZYyW0KO9-58WWwa34AXuDIVU_N1U8yQ-R2tTI",
                    "width": 4160
                  }
                ],
                "place_id": "ChIJ_____z4NCDsRULLKYAaeM6s",
                "plus_code": {
                  "compound_code": "X7WV+J6 Kochi, Kerala",
                  "global_code": "6JXRX7WV+J6"
                },
                "rating": 5,
                "reference": "ChIJ_____z4NCDsRULLKYAaeM6s",
                "types": [
                  "doctor",
                  "health",
                  "point_of_interest",
                  "establishment"
                ],
                "user_ratings_total": 3
              },
              {
                "business_status": "OPERATIONAL",
                "formatted_address": "Grace Villa, Chammany Towers, Kattakkara Junction, Kathrikadavu, Kaloor, Ernakulam, Kerala 682017, India",
                "geometry": {
                  "location": {
                    "lat": 9.990192,
                    "lng": 76.29453989999999
                  },
                  "viewport": {
                    "northeast": {
                      "lat": 9.991499179892724,
                      "lng": 76.29584422989272
                    },
                    "southwest": {
                      "lat": 9.98879952010728,
                      "lng": 76.29314457010727
                    }
                  }
                },
                "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png",
                "name": "Dr. Mushtaq's Skin Clinic And Cosmetology Centre",
                "opening_hours": {
                  "open_now": false
                },
                "photos": [
                  {
                    "height": 4032,
                    "html_attributions": [
                      "<a href=\"https://maps.google.com/maps/contrib/111506868386694253052\">AMAL Prasad</a>"
                    ],
                    "photo_reference": "ATtYBwIUZSpIEOZFhiP2g1Cm47tU_6ktHwzLVOD_edi--vuEKILBRy-YPwjd8X6P99xww8md3N2gDGAgKc24RFNUi_z_HrCq9FdtzD3ge-zVp9HItfwX7lwtHWEyMSQNkK-ksRYFWUwz6ABmoYzzRtTCeDNQ2qKVrV1WSUhXkiqyHBrG9WX2",
                    "width": 3024
                  }
                ],
                "place_id": "ChIJBbgtYEANCDsRgwDmHjJgKQs",
                "plus_code": {
                  "compound_code": "X7RV+3R Ernakulam, Kerala",
                  "global_code": "6JXRX7RV+3R"
                },
                "rating": 3.1,
                "reference": "ChIJBbgtYEANCDsRgwDmHjJgKQs",
                "types": [
                  "beauty_salon",
                  "hair_care",
                  "doctor",
                  "health",
                  "point_of_interest",
                  "establishment"
                ],
                "user_ratings_total": 14
              },
              {
                "business_status": "OPERATIONAL",
                "formatted_address": "5th floor, T.B.P.L Building Edapally Bypass Near Pipline Flyover, Palarivattom Jct, Kochi, Kerala 682028, India",
                "geometry": {
                  "location": {
                    "lat": 10.004843,
                    "lng": 76.31353709999999
                  },
                  "viewport": {
                    "northeast": {
                      "lat": 10.00631302989272,
                      "lng": 76.31484737989273
                    },
                    "southwest": {
                      "lat": 10.00361337010728,
                      "lng": 76.31214772010728
                    }
                  }
                },
                "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png",
                "name": "Doctors Aesthetics Centre",
                "opening_hours": {
                  "open_now": false
                },
                "photos": [
                  {
                    "height": 410,
                    "html_attributions": [
                      "<a href=\"https://maps.google.com/maps/contrib/108243928678133463038\">A Google User</a>"
                    ],
                    "photo_reference": "ATtYBwIaLeWvkGKJFA4a0TroG4fxwypZUWRD2CgQ1l2rs5klRY6Q6tQGNzB9wI_dXX2cNaM-tH6WZs0l7zULaGhVxcFCZ6CF61BJUUew3dYf3lsrWKtrKn3mSrekoRzbeEolwoJN00nr7RJLLckcgjpe1u3ki3nYHDSLzBL0sA6W7Hu-qAL-",
                    "width": 1024
                  }
                ],
                "place_id": "ChIJ6-4O9BwNCDsRIu1QXDEaz1g",
                "plus_code": {
                  "compound_code": "2837+WC Kochi, Kerala",
                  "global_code": "7J2R2837+WC"
                },
                "rating": 4.5,
                "reference": "ChIJ6-4O9BwNCDsRIu1QXDEaz1g",
                "types": [
                  "beauty_salon",
                  "hair_care",
                  "doctor",
                  "health",
                  "point_of_interest",
                  "establishment"
                ],
                "user_ratings_total": 204
              },
              {
                "business_status": "OPERATIONAL",
                "formatted_address": "1st Floor, Ravi Tower, Vennala P O, NH Bypass, Palarivattom, Kochi, Kerala 682028, India",
                "geometry": {
                  "location": {
                    "lat": 10.0014391,
                    "lng": 76.31382169999999
                  },
                  "viewport": {
                    "northeast": {
                      "lat": 10.00278047989272,
                      "lng": 76.31512347989272
                    },
                    "southwest": {
                      "lat": 10.00008082010728,
                      "lng": 76.31242382010727
                    }
                  }
                },
                "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png",
                "name": "Almeka Medical Centre",
                "opening_hours": {
                  "open_now": false
                },
                "photos": [
                  {
                    "height": 640,
                    "html_attributions": [
                      "<a href=\"https://maps.google.com/maps/contrib/116040734609238232444\">A Google User</a>"
                    ],
                    "photo_reference": "ATtYBwJr_fXbd6CVLvEwagSSGVgP_F0cyBb8bPuUyAgQ8vMxx9fHLGDfEYAAcSP-OyFomwgw9UtaBv_Hys9MknZErYBcSQgCSjGSbwQGYLxe58y1ElCiV3JH0YOx3-gCT5ivKIEIM67znK34lY3D3LExJicygaIccamwt5EUpc01tnMuIPAD",
                    "width": 960
                  }
                ],
                "place_id": "ChIJI-XdhB4NCDsRx1nmK13bCV8",
                "plus_code": {
                  "compound_code": "2827+HG Kochi, Kerala",
                  "global_code": "7J2R2827+HG"
                },
                "rating": 4.4,
                "reference": "ChIJI-XdhB4NCDsRx1nmK13bCV8",
                "types": [
                  "beauty_salon",
                  "hair_care",
                  "doctor",
                  "health",
                  "point_of_interest",
                  "establishment"
                ],
                "user_ratings_total": 195
              },
              {
                "business_status": "OPERATIONAL",
                "formatted_address": "Palarivattom Edappally Rd, Kochi Metro Pillar No 505/506 at Mamangalam., Kochi, Kerala 682025, India",
                "geometry": {
                  "location": {
                    "lat": 10.0074672,
                    "lng": 76.3044681
                  },
                  "viewport": {
                    "northeast": {
                      "lat": 10.00882262989272,
                      "lng": 76.30583517989271
                    },
                    "southwest": {
                      "lat": 10.00612297010728,
                      "lng": 76.30313552010728
                    }
                  }
                },
                "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png",
                "name": "Dr. K.N. Jaya's Skin Clinic.",
                "opening_hours": {
                  "open_now": true
                },
                "photos": [
                  {
                    "height": 2448,
                    "html_attributions": [
                      "<a href=\"https://maps.google.com/maps/contrib/101362829736750026374\">akhil nl</a>"
                    ],
                    "photo_reference": "ATtYBwIiYAT8fuD9oanJG76L16Sil3jDtT7NMdxaDI1ROtASjNL2gJmKwXdhUmknXXaxOd_UgStcP58HxG5oYmNF26aYXW8SgNcg3upFVPvrkEMXs0ddIh1loVj-RAc3BfnuZipCiwj4B6GBVbfzku_fZAg4oML73DyHUVMmKEquD6p2ZHLO",
                    "width": 3264
                  }
                ],
                "place_id": "ChIJRX9xHBANCDsRV1q43JnvsH4",
                "plus_code": {
                  "compound_code": "2843+XQ Kochi, Kerala",
                  "global_code": "7J2R2843+XQ"
                },
                "rating": 2.8,
                "reference": "ChIJRX9xHBANCDsRV1q43JnvsH4",
                "types": [
                  "health",
                  "point_of_interest",
                  "establishment"
                ],
                "user_ratings_total": 20
              },
              {
                "business_status": "OPERATIONAL",
                "formatted_address": "Pavoor Rd, Padivattom, Edappally, Ernakulam, Kerala 682024, India",
                "geometry": {
                  "location": {
                    "lat": 10.0097252,
                    "lng": 76.3190418
                  },
                  "viewport": {
                    "northeast": {
                      "lat": 10.01107237989272,
                      "lng": 76.32036772989274
                    },
                    "southwest": {
                      "lat": 10.00837272010728,
                      "lng": 76.31766807010729
                    }
                  }
                },
                "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png",
                "name": "Chalissery Skin & ENT Clinic",
                "photos": [
                  {
                    "height": 1920,
                    "html_attributions": [
                      "<a href=\"https://maps.google.com/maps/contrib/104373575992741266459\">Mathew Joseph</a>"
                    ],
                    "photo_reference": "ATtYBwLpAxYq5aPnTDu9i_XvAymw_8CDui-r8mJqY57gv4FCUoFlVux3BBhvm-oMO9vaYpKGnlRi07TgGlFu5l-oiu2alsHGhHmNzS_sbX9DJ5O4umaf2CdZmBzwB2G3uLZKHoDzHDu6c-qinQoSJhthOJ1s0RfBnpZYerFQiPEW6uzx305E",
                    "width": 1080
                  }
                ],
                "place_id": "ChIJQQLjXv0MCDsR64QP3062ZN8",
                "plus_code": {
                  "compound_code": "2859+VJ Ernakulam, Kerala",
                  "global_code": "7J2R2859+VJ"
                },
                "rating": 4.7,
                "reference": "ChIJQQLjXv0MCDsR64QP3062ZN8",
                "types": [
                  "doctor",
                  "health",
                  "point_of_interest",
                  "establishment"
                ],
                "user_ratings_total": 16
              },
              {
                "business_status": "OPERATIONAL",
                "formatted_address": "Near Karukappilly junction,, Deshabhimani road, Kaloor - Kadavanthara Rd, Mamangalam, Elamakkara, Kochi, Kerala 682026, India",
                "geometry": {
                  "location": {
                    "lat": 10.0080466,
                    "lng": 76.2937275
                  },
                  "viewport": {
                    "northeast": {
                      "lat": 10.00939162989272,
                      "lng": 76.29507717989271
                    },
                    "southwest": {
                      "lat": 10.00669197010728,
                      "lng": 76.29237752010728
                    }
                  }
                },
                "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png",
                "name": "SKIN & SMILE DENTAL & SKIN CLINIC",
                "photos": [
                  {
                    "height": 3120,
                    "html_attributions": [
                      "<a href=\"https://maps.google.com/maps/contrib/101577074483655700668\">Rishi DS</a>"
                    ],
                    "photo_reference": "ATtYBwIynvYkv4MPmfQAffa9U1P2wcWCA7E_AQ1B6g_r4AZow_0SULwDySIR1oZ_YhVsLdlPOeWLhp8Rqr5YPf0d83gYvlzu_wjTDcy6YxFBwdVmRai_bK4N76COj6LBWxyt-zPstq0Cw5o-MVWE0mmrviwDqvceZgXDqhneKjL2EYqyKzlW",
                    "width": 4160
                  }
                ],
                "place_id": "ChIJ6-09XYkNCDsR3LwUkCdzid4",
                "plus_code": {
                  "compound_code": "275V+6F Kochi, Kerala",
                  "global_code": "7J2R275V+6F"
                },
                "rating": 0,
                "reference": "ChIJ6-09XYkNCDsR3LwUkCdzid4",
                "types": [
                  "dentist",
                  "health",
                  "point_of_interest",
                  "establishment"
                ],
                "user_ratings_total": 0
              },
              {
                "business_status": "OPERATIONAL",
                "formatted_address": "2nd Hayath Towers Civil Line Road, near Juma Masjid Road, Padamughal, Vazhakkala, Kochi, Kerala 682021, India",
                "geometry": {
                  "location": {
                    "lat": 10.0140537,
                    "lng": 76.33253739999999
                  },
                  "viewport": {
                    "northeast": {
                      "lat": 10.01537517989272,
                      "lng": 76.33394202989271
                    },
                    "southwest": {
                      "lat": 10.01267552010728,
                      "lng": 76.33124237010726
                    }
                  }
                },
                "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png",
                "name": "Twacha Skin and Hair Clinic",
                "opening_hours": {
                  "open_now": false
                },
                "photos": [
                  {
                    "height": 864,
                    "html_attributions": [
                      "<a href=\"https://maps.google.com/maps/contrib/106318914295435805885\">A Google User</a>"
                    ],
                    "photo_reference": "ATtYBwLaWR5TXsZ0TRqvb6BsbjtVqS8PvFkdhCO7EBeXVXg_IDMc2Wi2KLabbWceYIBUn3BlZXoNRxYEFnEjo_RRdCyxnm9QhTuNlme4MdM8Q5vf5LXpLVfBNFA_Cq2FsYb4x39HH2gwT6gwXDr2-LdRChXz2HfVrhhzRybeprapV6RDXXPr",
                    "width": 1152
                  }
                ],
                "place_id": "ChIJ2-6W0fYMCDsR463fpBH8IOk",
                "plus_code": {
                  "compound_code": "287M+J2 Kochi, Kerala",
                  "global_code": "7J2R287M+J2"
                },
                "rating": 4.3,
                "reference": "ChIJ2-6W0fYMCDsR463fpBH8IOk",
                "types": [
                  "doctor",
                  "health",
                  "point_of_interest",
                  "establishment"
                ],
                "user_ratings_total": 115
              },
              {
                "business_status": "OPERATIONAL",
                "formatted_address": "2nd Floor, Imperial Greens opposite Skyline Imperial Gardens near IMA HOUSE, Stadium Link Rd, Kochi, Kerala 682036, India",
                "geometry": {
                  "location": {
                    "lat": 9.987584799999999,
                    "lng": 76.3022513
                  },
                  "viewport": {
                    "northeast": {
                      "lat": 9.988918929892723,
                      "lng": 76.30353017989272
                    },
                    "southwest": {
                      "lat": 9.986219270107279,
                      "lng": 76.30083052010728
                    }
                  }
                },
                "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png",
                "name": "Beau Aesthetica Skin Clinic",
                "opening_hours": {
                  "open_now": false
                },
                "place_id": "ChIJUyzW381yCDsRzN8TqN2DKN8",
                "plus_code": {
                  "compound_code": "X8Q2+2W Kochi, Kerala",
                  "global_code": "6JXRX8Q2+2W"
                },
                "rating": 2.9,
                "reference": "ChIJUyzW381yCDsRzN8TqN2DKN8",
                "types": [
                  "health",
                  "point_of_interest",
                  "establishment"
                ],
                "user_ratings_total": 7
              },
              {
                "business_status": "OPERATIONAL",
                "formatted_address": "S.N.Junction, Civil Line Rd, Sonia Nagar, Palarivattom, Ernakulam, Kerala 682025, India",
                "geometry": {
                  "location": {
                    "lat": 10.0043103,
                    "lng": 76.30550509999999
                  },
                  "viewport": {
                    "northeast": {
                      "lat": 10.00564502989272,
                      "lng": 76.30675142989271
                    },
                    "southwest": {
                      "lat": 10.00294537010728,
                      "lng": 76.30405177010728
                    }
                  }
                },
                "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png",
                "name": "Dr.Prasad's Cosmetic & Skin Clinic",
                "opening_hours": {
                  "open_now": false
                },
                "photos": [
                  {
                    "height": 2000,
                    "html_attributions": [
                      "<a href=\"https://maps.google.com/maps/contrib/103496852381072962215\">Augustine Simon</a>"
                    ],
                    "photo_reference": "ATtYBwKfVl0kW3licWLwLjZ0FJsbJWeCZlKLXHfRw7cY6hrAyfFgmeqc4wm1205Zz3EowbHVwSoAHO7hvmabNSniseSpyG-cwHosSW5rJSFKEjRrjweqO_uJrlcr5epWnGmzxMA5RcCfhExDbDYQAPUhRxIeAYDFObCnmgRbbV7GmGVLklqi",
                    "width": 4000
                  }
                ],
                "place_id": "ChIJVVVVFRoNCDsRZH4F0r1d5kM",
                "rating": 2.2,
                "reference": "ChIJVVVVFRoNCDsRZH4F0r1d5kM",
                "types": [
                  "doctor",
                  "health",
                  "point_of_interest",
                  "establishment"
                ],
                "user_ratings_total": 18
              },
              {
                "business_status": "OPERATIONAL",
                "formatted_address": "Syda Building, Nra J Hali, Kaloor, Kaloor, Ernakulam, Kerala 680017, India",
                "geometry": {
                  "location": {
                    "lat": 9.9984313,
                    "lng": 76.29707839999999
                  },
                  "viewport": {
                    "northeast": {
                      "lat": 9.999892329892722,
                      "lng": 76.29832952989273
                    },
                    "southwest": {
                      "lat": 9.997192670107278,
                      "lng": 76.29562987010728
                    }
                  }
                },
                "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png",
                "name": "Dr Musthaqs Skin Clinic",
                "place_id": "ChIJVVVVVRQNCDsR3oLwqwx4BX8",
                "plus_code": {
                  "compound_code": "X7XW+9R Ernakulam, Kerala",
                  "global_code": "6JXRX7XW+9R"
                },
                "rating": 0,
                "reference": "ChIJVVVVVRQNCDsR3oLwqwx4BX8",
                "types": [
                  "doctor",
                  "health",
                  "point_of_interest",
                  "establishment"
                ],
                "user_ratings_total": 0
              },
              {
                "business_status": "OPERATIONAL",
                "formatted_address": "2nd Floor, JN Corner, Subash Chandra Bose Road, Near Abad Silver Crest, Jawahar Nagar, Kadavantra, Kochi, Kerala 682020, India",
                "geometry": {
                  "location": {
                    "lat": 9.972323,
                    "lng": 76.30413399999999
                  },
                  "viewport": {
                    "northeast": {
                      "lat": 9.973702779892722,
                      "lng": 76.30552857989271
                    },
                    "southwest": {
                      "lat": 9.971003120107278,
                      "lng": 76.30282892010727
                    }
                  }
                },
                "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png",
                "name": "Skinessence, Skin and Hair Laser Aesthetic Clinic",
                "opening_hours": {
                  "open_now": false
                },
                "photos": [
                  {
                    "height": 960,
                    "html_attributions": [
                      "<a href=\"https://maps.google.com/maps/contrib/102804942733412503162\">Skinessence. Skin and Hair Laser Aesthetic Clinic</a>"
                    ],
                    "photo_reference": "ATtYBwJIchXksWQ_YpHjEKgVESCF8h_6i0-jqJG4j_D6gQRb5_jq5QocqkOLvPQyKIRkUBp55b-k_QmpueNgoIg1-c067qiNFGPOiyryq7Gror0YddARTyH_kYj-g8OOzCEgKmAtTYyi8CNHuRl0KH9ypQZqqY9ImbU2P78AtkPV4JFRurSF",
                    "width": 960
                  }
                ],
                "place_id": "ChIJ-VBJEs1yCDsRVwljeU35xzk",
                "plus_code": {
                  "compound_code": "X8C3+WM Kochi, Kerala",
                  "global_code": "6JXRX8C3+WM"
                },
                "rating": 4,
                "reference": "ChIJ-VBJEs1yCDsRVwljeU35xzk",
                "types": [
                  "health",
                  "point_of_interest",
                  "establishment"
                ],
                "user_ratings_total": 100
              },
              {
                "business_status": "OPERATIONAL",
                "formatted_address": "South kalamassery Cusat signal junction Pathuvana building, Kerala 682033, India",
                "geometry": {
                  "location": {
                    "lat": 10.0478607,
                    "lng": 76.31839889999999
                  },
                  "viewport": {
                    "northeast": {
                      "lat": 10.04923157989272,
                      "lng": 76.31980207989271
                    },
                    "southwest": {
                      "lat": 10.04653192010728,
                      "lng": 76.31710242010728
                    }
                  }
                },
                "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png",
                "name": "Highway skin clinic",
                "place_id": "ChIJXeSHrnANCDsR2oeg3DRsh6I",
                "plus_code": {
                  "compound_code": "28X9+49 Kochi, Kerala",
                  "global_code": "7J2R28X9+49"
                },
                "rating": 0,
                "reference": "ChIJXeSHrnANCDsR2oeg3DRsh6I",
                "types": [
                  "health",
                  "point_of_interest",
                  "establishment"
                ],
                "user_ratings_total": 0
            }
        ]
    }
    let maxLimit=3;
    const [offset, setOffset] = useState(0);
    const totalPage = Math.ceil(result.result.length / maxLimit);
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
        if (pageNo === 1) {
            setPagenumbers(getPageNumbers(1));
        } else {
            setPagenumbers(getPageNumbers(pageNo));
        }
        setOffset((pageNo - 1) * maxLimit);
    };
    const [pageNumbers, setPagenumbers] = useState(getPageNumbers(1));
    return(
        <div className="w-full flex flex-col gap-2 justify-center items-center">
        {result.result.slice(offset, offset+maxLimit).map((item) => {
            return(
                <div key={item.place_id} className='w-5/12 h-max bg-white shadow-md rounded-lg overflow-hidden mx-auto'>
                    <div className="py-4 px-8 mt-3">
                        <div className="flex flex-col mb-8">
                            <h2 className="text-gray-700 font-semibold text-2xl tracking-wide mb-2">{item.name}</h2>
                            <p className="text-gray-500 text-base">{item.formatted_address}</p>
                        </div>
                        <div className="bg-gray-100 max-w-prose rounded-lg">
                            <div className="py-4 px-4">
                                <div className="flex flex-col">
                                    <h4 className="text-lg font-semibold mb-3">Stats</h4>
                                    <div className="flex flex-col  text-sm text-gray-500">
                                        {item.hasOwnProperty('opening_hours')?<span className={` ${
                                            item.opening_hours.open_now === true 
                                                ? "bg-green-600 hover:bg-green-700 text-white w-28 text-sm px-4 py-2  border rounded-full"
                                                : "bg-red-600 hover:bg-red-700 text-white w-28 text-sm px-4 py-2  border rounded-full"}`}>Open now</span>
                                            :
                                            <span className="bg-red-600 hover:bg-red-700 text-white w-28 text-sm px-4 py-2  border rounded-full">
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
                            <a href={`https://www.google.com/maps/place/?place_id=${item.place_id}&key=AIzaSyBYkqutku5mDQk8tfLlv2ewKOkY1nyNGaU`} className="block tracking-widest uppercase text-center shadow bg-indigo-600 hover:bg-indigo-700 focus:shadow-outline focus:outline-none text-white text-xs py-3 px-10 rounded">Open in maps</a>
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