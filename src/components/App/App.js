import React, { useState } from "react";
import {
  Grid,
  FormControl,
  Input,
  InputLabel,
  Button,
} from "@material-ui/core";

import Map from "../Map/Map";

import useStyles from "./useStyles";

function App() {
  const classes = useStyles();
  const [domain, setDomain] = useState("");
  const [isp, setIsp] = useState("");
  const [ipaddress, setIpAddress] = useState("");
  const [location, setLocation] = useState("");
  const [timezone, setTimezone] = useState("");
  const [long, setLongitude] = useState(-118.24368);
  const [lat, setLatitude] = useState(34.05223);

  const fetchDomain = async (e) => {
    e.preventDefault();
    const API_KEY = process.env.REACT_APP_API_KEY;

    let result = await fetch(
      `https://geo.ipify.org/api/v1?apiKey=${API_KEY}&domain=${domain}`
    );
    let resultJson = await result.json();

    // abeg, see nonsense
    setIsp(resultJson.isp);
    setIpAddress(resultJson.ip);
    setLocation(resultJson.location.city);
    setTimezone(resultJson.location.timezone);

    const lat = resultJson.location.lat;
    const long = resultJson.location.lng;
    setLongitude(long);
    setLatitude(lat);
  };

  return (
    <>
      <Grid className={classes.bgHeader}></Grid>
      <Grid className={classes.ipSection}>
        <Grid container justify="center" className={classes.ipRoot}>
          <h1>IP Address Tracker</h1>
        </Grid>
        <Grid container justify="center">
          <FormControl>
            <form onSubmit={fetchDomain}>
              <InputLabel className={classes.inputLabel} htmlFor="ip-address">
                Search for any IP address or domain
              </InputLabel>
              <Input
                value={domain}
                onChange={(e) => setDomain(e.target.value)}
                className={classes.input}
                id="ip-address"
              />
              <Button type="submit" className={classes.submitButton}>
                {" "}
                >{" "}
              </Button>
            </form>
          </FormControl>
        </Grid>
        <Grid className={classes.dataContainer} container>
          <Grid
            container
            direction="column"
            justify="center"
            alignContent="center"
            className={classes.data}
          >
            <Grid>
              <h3>IP ADDRESS</h3>
            </Grid>
            <Grid>{ipaddress}</Grid>
          </Grid>
          <Grid
            container
            direction="column"
            justify="center"
            alignContent="center"
            className={classes.data}
          >
            <Grid>
              <h3>LOCATION</h3>
            </Grid>
            <Grid>{location}</Grid>
          </Grid>
          <Grid
            container
            direction="column"
            justify="center"
            alignContent="center"
            className={classes.data}
          >
            <Grid>
              <h3>TIMEZONE</h3>
            </Grid>
            <Grid>{`UTC ${timezone}`}</Grid>
          </Grid>
          <Grid
            container
            direction="column"
            justify="center"
            alignContent="center"
            className={classes.dataEnd}
          >
            <Grid>
              <h3>ISP</h3>
            </Grid>
            <Grid>{isp}</Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid className={classes.bgMap}>
        <Map lat={lat} long={long} />
      </Grid>
    </>
  );
}

export default App;
