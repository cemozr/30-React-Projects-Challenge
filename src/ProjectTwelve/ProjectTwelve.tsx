import axios from "axios";
import { useEffect, useState } from "react";

type Weather = {
  location: {
    name: string;
    region: string;
    country: string;
    lat: number;
    lon: number;
    tz_id: string;
    localtime_epoch: number;
    localtime: string;
  };
  current: {
    last_updated_epoch: number;
    last_updated: string;
    temp_c: number;
    temp_f: number;
    is_day: number;
    condition: {
      text: string;
      icon: string;
      code: number;
    };
    wind_mph: number;
    wind_kph: number;
    wind_degree: number;
    wind_dir: string;
    pressure_mb: number;
    pressure_in: number;
    precip_mm: number;
    precip_in: number;
    humidity: number;
    cloud: number;
    feelslike_c: number;
    feelslike_f: number;
    windchill_c: number;
    windchill_f: number;
    heatindex_c: number;
    heatindex_f: number;
    dewpoint_c: number;
    dewpoint_f: number;
    vis_km: number;
    vis_miles: number;
    uv: number;
    gust_mph: number;
    gust_kph: number;
  };
};

export const ProjectTwelve = () => {
  const [latitude, setLatitude] = useState<number>(0);
  const [longitude, setLongitude] = useState<number>(0);
  const [weather, setWeather] = useState<Weather>();
  const baseUrl = "http://api.weatherapi.com/v1";

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      console.log("not supported");
    }
  };

  const showPosition = (position: GeolocationPosition) => {
    setLatitude(position.coords.latitude);
    setLongitude(position.coords.longitude);
  };

  const fetchData = async () => {
    setWeather(
      await axios
        .get(`${baseUrl}/current.json`, {
          params: {
            key: "3f0e7f56c1604f13833153231241410",
            q: `${latitude},${longitude}`,
          },
        })
        .then((r) => {
          return r.data;
        })
    );
  };

  useEffect(() => {
    getLocation();
    fetchData();
  }, [longitude, latitude]);

  return (
    <div className="weather-card">
      <h2>Weather Of Your Location</h2>
      <div className="weather">
        <img src={weather?.current.condition.icon} alt="" />
        <p className="weather__text">
          Condition: {weather?.current.condition.text}
          <br></br>
          <br></br>
          Temperature: {weather?.current.temp_c}°C
          <br></br>
          <br></br>
          Humidity: {weather?.current.humidity}%
        </p>
      </div>
      <div className="border"></div>
      <div className="location">
        <p className="location__text">{weather?.location.localtime}</p>
        <p className="location__text--underline">
          {weather?.location.name + ", " + weather?.location.country}
        </p>
      </div>
    </div>
  );
};
