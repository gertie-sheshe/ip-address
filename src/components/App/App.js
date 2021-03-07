import {
  Grid,
  FormControl,
  Input,
  InputLabel,
  Button,
} from "@material-ui/core";

import useStyles from "./useStyles";

function App() {
  const classes = useStyles();

  return (
    <>
      <Grid className={classes.bgHeader}></Grid>
      <Grid className={classes.ipSection}>
        <Grid container justify="center" className={classes.ipRoot}>
          <h1>IP Address Tracker</h1>
        </Grid>
        <Grid container justify="center">
          <FormControl>
            <form>
              <InputLabel className={classes.inputLabel} htmlFor="ip-address">
                Search for any IP address or domain
              </InputLabel>
              <Input className={classes.input} id="ip-address" />
              <Button className={classes.submitButton}> > </Button>
            </form>
          </FormControl>
        </Grid>
        <Grid
          className={classes.dataContainer}
          container
          // justify="center"
          // alignContent="center"
        >
          <Grid
            container
            direction="column"
            justify="center"
            alignContent="center"
            className={classes.data}
          >
            <Grid>IP ADDRESS</Grid>
            <Grid>127.0.0.1</Grid>
          </Grid>
          <Grid
            container
            direction="column"
            justify="center"
            alignContent="center"
            className={classes.data}
          >
            <Grid>LOCATION</Grid>
            <Grid>Brooklyn, NY 10001</Grid>
          </Grid>
          <Grid
            container
            direction="column"
            justify="center"
            alignContent="center"
            className={classes.data}
          >
            <Grid>TIMEZONE</Grid>
            <Grid>UTC - 05:00</Grid>
          </Grid>
          <Grid
            container
            direction="column"
            justify="center"
            alignContent="center"
            className={classes.data}
          >
            <Grid>ISP</Grid>
            <Grid>SpaceX Starlink</Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid className={classes.bgMap}></Grid>
    </>
  );
}

export default App;
