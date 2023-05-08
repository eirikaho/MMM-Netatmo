[![Build Status](https://travis-ci.org/RaymondMolenaar/MMM-Netatmo.svg?branch=master)](https://travis-ci.org/RaymondMolenaar/MMM-Netatmo)
[![api](https://img.shields.io/badge/api-Netatmo-orange.svg)](https://dev.netatmo.com/doc)
[![License](https://img.shields.io/github/license/mashape/apistatus.svg)](https://choosealicense.com/licenses/mit/)

# MagicMirror-Netatmo-Module

A module to integrale informations from a Netatmo weather station into the [MagicMirror](https://github.com/MichMich/MagicMirror).

![MMM-Netatmo full display](https://github.com/RaymondMolenaar/MMM-Netatmo/blob/master/MMM-Netatmo_full.png)

## Usage

_Prerequisites_

- requires MagicMirror v2.0.0
- a Netatmo weather station at home or at least access to a Netatmo weather station account

To use this module, clone this repository to your __modules__ folder of your MagicMirror:

`cd ~/MagicMirror/modules`

`git clone https://github.com/RaymondMolenaar/MMM-Netatmo.git MMM-Netatmo`

Now just add the module to your config.js file ([config entries](#configuration)).

### Access Your Data

To be able to access your data, you need to have an Netatmo Application and grant this application access to your data.

#### Register an App

Your can register a new app [here](https://dev.netatmo.com/dev/createapp). Afterwards you will get an APP_ID and an APP_SECRET which you will need to enter in the [config entries](#configuration).

### Configuration

The module needs the default configuration block in your config.js to work.

```
{
	module: 'MMM-Netatmo',
	position: 'bottom_left', // the location where the module should be displayed
	header: 'Netatmo',
	config: {
		clientId: '', // your app id
		clientSecret: '', // your app secret
		username: '', // netatmo username
		password: '', // netatmo password
		
		location: "germany/berlin",  //for AirQuality
		updateIntervalAirQuality: 600, // in secondes = every 30 minutes
		updatesIntervalDisplay: 60, //refresh internal
		lastMessageThreshold: 600, // in seconds (10 minutes)
		horizontal: false,
		horizontalOverflow: false,
		windUnit: "KT", // Possible "KMH", "MPH", "MS", "BFT", "KT"
		displayWindInOutdoor: false,
		displayRainInOutdoor: false,
		showLastMessage: true,
		showDataIcon: true,
		showDataHeader: true,
		showModuleStatus: true,
		showModuleFirmware: true,
		refreshInterval: 3,
		moduleOrder: ["Indoor", "wind", "Kitchen", "Garden", "Rain" ],
	}
},
```

The following properties can be configured:

|Option|Description|
|---|---|
|clientId|The ID of your Netatmo [application](https://dev.netatmo.com/dev/listapps).<br><br>This value is **REQUIRED**|
|clientSecret|The app secret of your Netatmo [application](https://dev.netatmo.com/dev/listapps).<br><br>This value is **REQUIRED**|
|username|Netatmo username<br><br>This value is **REQUIRED**|
|username|Netatmo password<br><br>This value is **REQUIRED**|
|updatesIntervalDisplay|How often to check if netatmo datas needs to be updated? (Minutes) No Netatmo server request with this value. Netatmo request minimum every 11 min.<br>Data is updated by netatmo every 10 minutes.<br><br>**Default value:** `1`|
|moduleOrder|The rendering order of your weather modules, ommit a module to hide the output.<br><br>**Example:** `["Kitchen","Kid's Bedroom","Garage","Garden"]` <br>Be aware that you need to use the module names that you set in the netatmo configuration.|
|location|For AirQuality display. Use the part behind http://aqicn.org/city/ for your location. For example http://aqicn.org/city/netherland/utrecht/griftpark/<br><br>**Example:** `'germany/berlin'`|
|updateIntervalAirQuality|Value in secondes. If last request to AirQuality server is bigger that this value, a new request to made. AirQuality serveur update is approx every hour. <br><br>**Example:** `600`|
|horizontal|When true, Modules will be displayed horizontal (in a row). But only as wide as the MMM-Module has space. If it needs more space, the Netatmo-Modules will be added to the next row.|
|horizontalOverflow|When true, all the Netatmo-Modules will stay in one row, and will overflow the module space when it needs more space.|
|units|Default config.units, bus can be overriden here. Possible values are metric or imperial|
|windUnit|Unit to be used for windspeed. Default is "KMH" (km/h). Possible is "KMH" (km/h), "MPH" (mph), "MS (m/s)", "BFT (Bft)" and "KT (kt)" |
|displayWindInOutdoor|When true, Wind-Module won't be shown, but the data will be added to the OutdoorModule|
|displayRainInOutdoor|When true, Rain-Module won't be shown, but the data will be added to the OutdoorModule|
|showLastMessage|When true, will show if contact with module has been lost|
|showDataIcon|Show Icons with the module data, default true|
|showDataHeader|Show Header-title with the module data, default true|
|showModuleStatus|Show status of module like radio-signal or battery-status|
|showModuleFirmware|Show firmwarestatus of module in modulestatus |

## About this Fork
Initially I forked the original repository https://github.com/CFenner/MMM-Netatmo.git, and did some changes to it (like still being able to show all modules, even they not all were in reach).
Then however I found out that [AgP42](https://github.com/AgP42), [haywirecoder](https://github.com/haywirecoder) and [QBseventy](https://github.com/QBseventy) did an amazing job, and wanted to use that version.
Since it is not possible to double fork or something, I put my original fork in a release https://github.com/RaymondMolenaar/MMM-Netatmo/tree/master/Releases/CFenner-Fork

The most important change of this fork, is that even when not all of your Netatmo Modules are in reach (due to empty batteries or whatever), this MM-Module will still display your module, but with empty values. It doesn't hang on the loading circle.

I also redesigned the way de data is displayed. The Icons don't change color depending on the status, but the little dot's do, similar to the Android-App.
The Wind-speed unit can be configured in the config.
If your system is set to Imperial units, it will show Temp in Fahrenheit and Rain in Inches/Hour.

In the MM-config: 
```
var config = {
	units: "metric", // "imperial" for Fahrenheit
};
```
or in MMM-config
```
{
	module: 'MMM-Netatmo',
	position: 'bottom_left', // the location where the module should be displayed
	header: 'Netatmo',
	config: {
		units: "metric", // "imperial" for Fahrenheit
	}
},
```

Update 22-03-2020: Added Horizantal (row) View

## Some Screenprints
![MMM-Netatmo full display](https://github.com/RaymondMolenaar/MMM-Netatmo/blob/master/MMM-Netatmo_full.png)
![MMM-Netatmo No DataHeader](https://github.com/RaymondMolenaar/MMM-Netatmo/blob/master/MMM-Netatmo_noheader.png)
![MMM-Netatmo No DataIcon](https://github.com/RaymondMolenaar/MMM-Netatmo/blob/master/MMM-Netatmo_noicon.png)
![MMM-Netatmo No DataIconHeader](https://github.com/RaymondMolenaar/MMM-Netatmo/blob/master/MMM-Netatmo_noicon_noheader.png)
![MMM-Netatmo No Status](https://github.com/RaymondMolenaar/MMM-Netatmo/blob/master/MMM-Netatmo_nostatus.png)
![MMM-Netatmo Rain and Wind in Outdoor](https://github.com/RaymondMolenaar/MMM-Netatmo/blob/master/MMM-Netatmo_raininoutdoor.png)
![MMM-Netatmo Wind in Knots](https://github.com/RaymondMolenaar/MMM-Netatmo/blob/master/MMM-Netatmo_wind_in_knots.png)
![MMM-Netatmo Horizontal](https://github.com/RaymondMolenaar/MMM-Netatmo/blob/master/MMM-Netatmo_Horizontal.png)
![MMM-Netatmo Horizontal No Overflow ](https://github.com/RaymondMolenaar/MMM-Netatmo/blob/master/MMM-Netatmo_Horizontal2.png)
![MMM-Netatmo Horizontal Overflow ](https://github.com/RaymondMolenaar/MMM-Netatmo/blob/master/MMM-Netatmo_HorizontalOverflow.png)
