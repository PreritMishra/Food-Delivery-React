import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://img.freepik.com/premium-vector/catering-quality-food-design-logo_187482-593.jpg" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>Cart</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                </ul>
            </div>
        </div>
    )
}

const RestaurantCard = (props) => {
    //(props) => {resName,cuisines}(Destructuring of Object)
    const { cloudinaryImageId, name, cuisines, avgRating,costForTwo } = props.resData.info;

    return (
        <div className="restaurant-card" style={{backgroundColor: "#f0f0f0"}}>
            <img 
            className="res-logo"
            alt="logo" src= {"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" 
            + cloudinaryImageId
            }/>
            <h3>{name}</h3>
            <h4>Cuisines: {cuisines.join(", ")}</h4>
            <h4>Avg Rating: {avgRating}</h4>
            <h4>{costForTwo}</h4>
            
        </div>
    )
}

const restaurantList = [
    {
      "info": {
        "id": "147619",
        "name": "Jai Shree Shankar Punjabi Dhaba",
        "cloudinaryImageId": "slfbprrckr7jk1zm58rd",
        "locality": "Mahatma Gandhi Marg",
        "areaName": "Civil Lines",
        "costForTwo": "₹250 for two",
        "cuisines": [
          "Indian",
          "North Indian",
          "Chinese",
          "South Indian",
          "Snacks",
          "Punjabi",
          "Beverages"
        ],
        "avgRating": 3.6,
        "veg": true,
        "feeDetails": {
          "restaurantId": "147619",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 1500
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE",
              "fee": 2000
            }
          ],
          "totalFee": 3500
        },
        "parentId": "108723",
        "avgRatingString": "3.6",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 33,
          "lastMileTravel": 0.6,
          "serviceability": "SERVICEABLE",
          "slaString": "33 mins",
          "lastMileTravelString": "0.6 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-11-29 00:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "v1695133679/badges/Pure_Veg111.png",
              "description": "pureveg"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "pureveg",
                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹125 OFF",
          "subHeader": "ABOVE ₹249",
          "discountTag": "FLAT DEAL"
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        "context": "seo-data-d6dfcf33-6105-4f65-8d09-0ecdc1c91870"
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/jai-shree-shankar-punjabi-dhaba-mahatma-gandhi-marg-civil-lines-allahabad-147619",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      "info": {
        "id": "80426",
        "name": "Gay Time Family Restaurant",
        "cloudinaryImageId": "wjltcbtqeytyhvelx7lg",
        "locality": "Elgin Road",
        "areaName": "Civil Lines",
        "costForTwo": "₹250 for two",
        "cuisines": [
          "Indian",
          "Chinese",
          "North Indian",
          "Mughlai"
        ],
        "avgRating": 3.7,
        "feeDetails": {
          "restaurantId": "80426",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 1500
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE",
              "fee": 2000
            }
          ],
          "totalFee": 3500
        },
        "parentId": "86724",
        "avgRatingString": "3.7",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 27,
          "lastMileTravel": 0.1,
          "serviceability": "SERVICEABLE",
          "slaString": "27 mins",
          "lastMileTravelString": "0.1 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-11-28 23:30:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "50% OFF",
          "subHeader": "UPTO ₹100"
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        "context": "seo-data-d6dfcf33-6105-4f65-8d09-0ecdc1c91870"
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/gay-time-family-restaurant-elgin-road-civil-lines-allahabad-80426",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      "info": {
        "id": "404669",
        "name": "Momos castle",
        "cloudinaryImageId": "lubiprpdt4cgnunga3rr",
        "locality": "Sardar Patel Marg",
        "areaName": "Civil Lines",
        "costForTwo": "₹150 for two",
        "cuisines": [
          "Chinese"
        ],
        "avgRating": 4,
        "feeDetails": {
          "restaurantId": "404669",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 1500
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE",
              "fee": 2000
            }
          ],
          "totalFee": 3500
        },
        "parentId": "250870",
        "avgRatingString": "4.0",
        "totalRatingsString": "1K+",
        "sla": {
          "deliveryTime": 26,
          "lastMileTravel": 0.3,
          "serviceability": "SERVICEABLE",
          "slaString": "26 mins",
          "lastMileTravelString": "0.3 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-11-28 22:45:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "50% OFF",
          "subHeader": "UPTO ₹100"
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        "context": "seo-data-d6dfcf33-6105-4f65-8d09-0ecdc1c91870"
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/momos-castle-sardar-patel-marg-civil-lines-allahabad-404669",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      "info": {
        "id": "80703",
        "name": "Aryan Family's Delight",
        "cloudinaryImageId": "kb34u4pywk49ksbyn4g5",
        "locality": "Sardar Patel Marg",
        "areaName": "Civil Lines",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "North Indian",
          "South Indian",
          "Fast Food",
          "Snacks",
          "Burgers",
          "Chinese"
        ],
        "avgRating": 4.3,
        "feeDetails": {
          "restaurantId": "80703",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 2000
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE",
              "fee": 2000
            }
          ],
          "totalFee": 4000
        },
        "parentId": "6001",
        "avgRatingString": "4.3",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 36,
          "lastMileTravel": 0.3,
          "serviceability": "SERVICEABLE",
          "slaString": "36 mins",
          "lastMileTravelString": "0.3 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-11-28 23:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {
          
        },
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        "context": "seo-data-d6dfcf33-6105-4f65-8d09-0ecdc1c91870"
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/aryan-familys-delight-sardar-patel-marg-civil-lines-allahabad-80703",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      "info": {
        "id": "80312",
        "name": "Raju Kitchen Restaurant",
        "cloudinaryImageId": "u8m5sxxbwuwfjolzdf69",
        "locality": "Tandon Road",
        "areaName": "Civil Lines",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "Indian",
          "Chinese",
          "Mughlai",
          "North Indian",
          "Snacks",
          "Lucknowi",
          "Biryani"
        ],
        "avgRating": 3.6,
        "feeDetails": {
          "restaurantId": "80312",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 1500
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE",
              "fee": 2000
            }
          ],
          "totalFee": 3500
        },
        "parentId": "165971",
        "avgRatingString": "3.6",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 34,
          "lastMileTravel": 1.2,
          "serviceability": "SERVICEABLE",
          "slaString": "34 mins",
          "lastMileTravelString": "1.2 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-11-28 23:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {
          
        },
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        "context": "seo-data-d6dfcf33-6105-4f65-8d09-0ecdc1c91870"
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/raju-kitchen-restaurant-tandon-road-civil-lines-allahabad-80312",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      "info": {
        "id": "690085",
        "name": "Biryani Hazir Ho - By Khansama",
        "cloudinaryImageId": "f594f4f63d3e00e93203f02d40e38d24",
        "locality": "NagarNigamFoodSafetyZone",
        "areaName": "Civil Lines",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "Biryani",
          "Kebabs"
        ],
        "avgRating": 4,
        "feeDetails": {
          "restaurantId": "690085",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 1500
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE",
              "fee": 2000
            }
          ],
          "totalFee": 3500
        },
        "parentId": "471295",
        "avgRatingString": "4.0",
        "totalRatingsString": "500+",
        "sla": {
          "deliveryTime": 28,
          "lastMileTravel": 0.6,
          "serviceability": "SERVICEABLE",
          "slaString": "28 mins",
          "lastMileTravelString": "0.6 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-11-28 22:30:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "20% OFF",
          "subHeader": "UPTO ₹50"
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        "context": "seo-data-d6dfcf33-6105-4f65-8d09-0ecdc1c91870"
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/biryani-hazir-ho-by-khansama-nagarnigamfoodsafetyzone-civil-lines-allahabad-690085",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      "info": {
        "id": "558311",
        "name": "Bati Chokha Wala Family Restaurant",
        "cloudinaryImageId": "fv9qqnvl3elc2dknntwf",
        "locality": "Mahatma Gandhi Marg",
        "areaName": "Civil Lines",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "Indian",
          "Thalis",
          "Sweets",
          "Snacks",
          "North Indian"
        ],
        "avgRating": 4,
        "veg": true,
        "feeDetails": {
          "restaurantId": "558311",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 1500
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE",
              "fee": 2000
            }
          ],
          "totalFee": 3500
        },
        "parentId": "335715",
        "avgRatingString": "4.0",
        "totalRatingsString": "500+",
        "sla": {
          "deliveryTime": 27,
          "lastMileTravel": 0.6,
          "serviceability": "SERVICEABLE",
          "slaString": "27 mins",
          "lastMileTravelString": "0.6 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-11-28 23:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "v1695133679/badges/Pure_Veg111.png",
              "description": "pureveg"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "pureveg",
                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "20% OFF",
          "subHeader": "UPTO ₹50"
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        "context": "seo-data-d6dfcf33-6105-4f65-8d09-0ecdc1c91870"
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/bati-chokha-wala-family-restaurant-mahatma-gandhi-marg-civil-lines-allahabad-558311",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      "info": {
        "id": "591407",
        "name": "Sardar G Malai Chaap Junction",
        "cloudinaryImageId": "sk6saam8uteg0kuoxkas",
        "locality": "Tashkand Marg",
        "areaName": "Civil Lines",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "Indian",
          "Tandoor",
          "Arabian",
          "Punjabi"
        ],
        "avgRating": 3.9,
        "feeDetails": {
          "restaurantId": "591407",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 1500
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE",
              "fee": 2000
            }
          ],
          "totalFee": 3500
        },
        "parentId": "14511",
        "avgRatingString": "3.9",
        "totalRatingsString": "100+",
        "sla": {
          "deliveryTime": 35,
          "lastMileTravel": 0.4,
          "serviceability": "SERVICEABLE",
          "slaString": "35 mins",
          "lastMileTravelString": "0.4 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-11-28 23:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "10% OFF",
          "subHeader": "UPTO ₹40"
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        "context": "seo-data-d6dfcf33-6105-4f65-8d09-0ecdc1c91870"
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/sardar-g-malai-chaap-junction-tashkand-marg-civil-lines-allahabad-591407",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      "info": {
        "id": "201545",
        "name": "Curry Leaf",
        "cloudinaryImageId": "ale88grmsg7uyrt5emxt",
        "locality": "Clive Road",
        "areaName": "Civil Lines",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "South Indian",
          "Indian",
          "North Indian",
          "Beverages",
          "Fast Food"
        ],
        "avgRating": 4.1,
        "veg": true,
        "feeDetails": {
          "restaurantId": "201545",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 1500
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE",
              "fee": 2000
            }
          ],
          "totalFee": 3500
        },
        "parentId": "66911",
        "avgRatingString": "4.1",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 34,
          "lastMileTravel": 0.4,
          "serviceability": "SERVICEABLE",
          "slaString": "34 mins",
          "lastMileTravelString": "0.4 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-11-28 23:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "v1695133679/badges/Pure_Veg111.png",
              "description": "pureveg"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "pureveg",
                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹125 OFF",
          "subHeader": "ABOVE ₹199",
          "discountTag": "FLAT DEAL"
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        "context": "seo-data-d6dfcf33-6105-4f65-8d09-0ecdc1c91870"
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/curry-leaf-clive-road-civil-lines-allahabad-201545",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    }
  ]

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="restaurant-container">
              {
                restaurantList.map((restaurant) => {
                  return <RestaurantCard key={restaurant.info.id} resData={restaurant} />;
                })
              }
            </div>
        </div>
    )
}

const AppLayout = () => {
    return ( 
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />); 
