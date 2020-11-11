import * as React from "react";
import AppBar from "@material-ui/core/AppBar";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Slider from "@material-ui/core/Slider";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    width: 250,
  },
  input: {
    width: 42,
  },
});

function valueLabelFormat(value) {
  const [coefficient, exponent] = value
    .toExponential()
    .split("e")
    .map((item) => Number(item));
  return `${Math.round(coefficient)}e^${exponent}`;
}

const Header = (props) => {
  const {
    setKeyLightBrightness,
    setFillLightBrightness,
    setRimLightBrightness,
    initialKLB,
    initialFLB,
    initialRLB,
  } = props;
  return (
    <AppBar position="static" color="default">
      <Toolbar>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs>
            <Slider
              defaultValue={initialKLB}
              min={0}
              max={initialKLB * 2}
              step={0.1}
              onChange={(event, newValue) => setKeyLightBrightness(newValue)}
            />
          </Grid>
          <Grid item xs>
            <Slider
              defaultValue={initialFLB}
              min={0}
              max={initialFLB * 2}
              step={0.1}
              onChange={(event, newValue) => setFillLightBrightness(newValue)}
            />
          </Grid>
          <Grid item xs>
            <Slider
              defaultValue={initialRLB}
              min={0}
              max={initialRLB * 1.5}
              step={0.1}
              onChange={(event, newValue) => setRimLightBrightness(newValue)}
            />
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
export default Header;
