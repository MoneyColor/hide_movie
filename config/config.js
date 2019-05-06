/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information how you can configurate this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	address: "localhost", // Address to listen on, can be:
	                      // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
	                      // - another specific IPv4/6 to listen on a specific interface
	                      // - "", "0.0.0.0", "::" to listen on any interface
	                      // Default, when address config is left out, is "localhost"
	port: 8080,
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], // Set [] to allow all IP addresses
	                                                       // or add a specific IPv4 of 192.168.1.5 :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
	                                                       // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	language: "en",
	timeFormat: 24,
	units: "metric",

	/*modules: [
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_left"
		},
		{
			module: "calendar",
			header: "US Holidays",
			position: "top_left",
			config: {
				calendars: [
					{
						symbol: "calendar-check",
						url: "webcal://www.calendarlabs.com/templates/ical/US-Holidays.ics"
					}
				]
			}
		},
		{
			module: "compliments",
			position: "lower_third"
		},
		{
			module: "currentweather",
			position: "top_right",
			config: {
				location: "New York",
				locationID: "",  //ID from http://bulk.openweathermap.org/sample/; unzip the gz file and find your city
				appid: "YOUR_OPENWEATHER_API_KEY"
			}
		},
		{
			module: "weatherforecast",
			position: "top_right",
			header: "Weather Forecast",
			config: {
				location: "New York",
				locationID: "5128581",  //ID from https://openweathermap.org/city
				appid: "YOUR_OPENWEATHER_API_KEY"
			}
		},
		{
			module: "newsfeed",
			position: "bottom_bar",
			config: {
				feeds: [
					{
						title: "New York Times",
						url: "http://www.nytimes.com/services/xml/rss/nyt/HomePage.xml"
					}
				],
				showSourceTitle: true,
				showPublishDate: true
			}
		},
		{
            module: 'MMM-Carousel',
            position: 'bottom_bar', // Required only for navigation controls
            config: {
                transitionInterval: 10000,
                ignoreModules: ['clock', 'alert'],
                mode: 'slides',
                showPageIndicators: true,
                showPageControls: true,
                slides: {
                    main: ['calendar', 'compliments', 'currentweather'],
                    "Slide 2": ['weatherforecast', 'MMM-Trello', 'planetrise', 'newsfeed'],
                    "Slide 3": ['MMM-fitbit'],
                    "Slide 4": ['']
                },
                keyBindings: { 
                    enabled: true,
                    map: {
                        NextSlide: "ArrowRight", 
                        PrevSlide: "ArrowLeft", 
                        Slide0:    "Home"
                    },
                    mode: "DEFAULT"
                }
            }
            
		},
		  
	]*/
	modules: [
		/*{
            module: 'MMM-Carousel',
            position: 'bottom_bar', // Required only for navigation controls
            config: {
                //transitionInterval: 10000,
                ignoreModules: ['clock', 'alert'],
                mode: 'slides',
                showPageIndicators: true,
                showPageControls: true,
                slides: {
                    main: ['calendar', 'compliments', 'currentweather'],
                    "Slide 2": ['MMM-Test', 'MMM-Trello', 'planetrise', 'newsfeed'],
                    "Slide 3": ['MMM-fitbit'],
                    "Slide 4": ['']
                },
                keyBindings: { 
                    enabled: true,
                    map: {
                        NextSlide: "ArrowRight", 
                        PrevSlide: "ArrowLeft", 
                        Slide0:    "Home"
                    },
                    mode: "DEFAULT"
                }
            }
            
		},*/
		{
			module: 'mm-hide-all',
			position: 'bottom_right'
		},
		
		/*{
			module: "MMM-News",
			position: "bottom_bar",
			config: {
			  apiKey : "8b84fa7aa3d2444fb16eeecaa29e1631",
			  type: "horizontal",
			  query : [
				{
				  sources: "cbs-news",
				},
				{
				  country: "us",
				  className: "redTitle",
				},
				
			  ],
			}
		  },*/
		  {
			module: 'MMM-MovieInfo',
			position: 'top_right',
			config: {
				api_key: "08f29ef45bc98817d77bf4c03c8a6664",
				discover: {
					"sort_by": "popularity.desc"
				},
				useLanguage: "ko",
			}
		},

			
		
		/*{
			module: 'MMM-TwitterTrendsByPlace',
			position: 'bottom_left',
			config: {
			// visit the url below for the twitter keys/tokens
			// https://dev.twitter.com/oauth/overview/application-owner-access-tokens
				consumer_key: 'tSizabHHxjMhRWv9ZWG5ZTCN3 ',
				consumer_secret: 'KcwKcli8QWj2FPnQSV4zLR3B50Dl74ezjGwYSOFY9650hj31ih',
				access_token_key: '1123146156337315840-SqINcuSLL9WAKkt4TZjByFYKiVie9T',
				access_token_secret: 'RIuni9sPkR2vq9BOHyYk1iVyfKmDSK4BvtaHUtNR3ovhT',
			// set the display name/title for the place		
				placeName: 'New York, NY',
			// set the woeid for the place, see documentation for more
			// http://woeid.rosselliot.co.nz/lookup/
				placeWoeid: '1132599',
			}
		}*/
		
		/*{
			module: 'twitControl',
			position: 'top_left',
			config: {
				maxNumTweets: 5,
				streamType: 'followings',
				api_keys: {
					consumer_key: 'X2M5yOkxd7ZqCTbfisZv8xHCI   ',
				consumer_secret: 'dbCR8JDWXfwFVP4WD7DCX8B32HCquMD229LVGolR23o71rzOw1   ',
				access_token_key: '1123146156337315840-1UhCxLYz8wlwuaz3xrC4qWHpk3Dcf5',
				access_token_secret: '2efbjrfXrJyCdKk9vwem0XhyxEGutcXTMNS676gayruGV',
				}
			}
		},*/

		/*{
			module: 'MMM-TweetsByTimelineOrList',
			position: 'top_left',
			config: {
			// visit the url below for the twitter keys/tokens
			// https://dev.twitter.com/oauth/overview/application-owner-access-tokens
				consumer_key: 'X2M5yOkxd7ZqCTbfisZv8xHCI   ',
				consumer_secret: 'dbCR8JDWXfwFVP4WD7DCX8B32HCquMD229LVGolR23o71rzOw1   ',
				access_token_key: '1123146156337315840-1UhCxLYz8wlwuaz3xrC4qWHpk3Dcf5',
				access_token_secret: '2efbjrfXrJyCdKk9vwem0XhyxEGutcXTMNS676gayruGV',
			// set the username and either timeline or listname
						screenName: 'AppleGray5',
						listToShow: 'TIMELINE',
						
			}
		}	*/

		/*{
			module: 'MMM-instagram',
			position: 'top_left',
			config: {
				keys: {
				client_id: '3bd83562d4f6457db554775475c14ec9',
				client_secret: '1cb2c2fa61a34fa58ca16d2b0b24e447'
				}
			}
		},*/

		{
			module: 'MMM-darksky-hourly',
			position: 'top_left',  // This can be any of the regions.
			config: {
				// See 'Configuration options' for more information.
				apiKey: '8d7f5d22ed1974d6b4869c9304b39f50', // Dark Sky API key.
				latitude:   37.37988109409138,
				longitude: 126.9287487782795,
				language: 'ko',
			}
		},

		
		{
				module: 'MMM-GoogleMapsTraffic',
				position: 'top_center',
				config: {
						key: 'AIzaSyCun0rD3ujduOli6jrYWJzFjKw9K1HKqww',
						lat: 37.37988109409138,
						lng: 126.9287487782795,
						height: '300px',
						width: '300px',
						styledMapType: "transparent",
						disableDefaultUI: true,
						//backgroundColor: 'hsla(0, 0%, 0%, 0)',
						markers: [
								{
										lat: 37.37988109409138,
										lng: 126.9287487782795,
										fillColor: '#9966ff'
								},
						],
				},
		}
	

	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
