import * as React from "react";
import AppBar from "@material-ui/core/AppBar";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Slider from "@material-ui/core/Slider";

const Header = (props) => {
  const { values, onSliderChange, maxValues, minValues, steps, reset } = props;
  return (
    <AppBar position="static" color="default">
      <Toolbar>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs>
            <Slider
              min={minValues[0]}
              max={maxValues[0]}
              step={steps[0]}
              value={values[0]}
              onChange={onSliderChange[0]}
            />
          </Grid>
          <Grid item xs>
            <Slider
              min={minValues[1]}
              max={maxValues[1]}
              step={steps[1]}
              value={values[1]}
              onChange={onSliderChange[1]}
            />
          </Grid>
          <Grid item xs>
            <Slider
              min={minValues[2]}
              max={maxValues[2]}
              step={steps[2]}
              value={values[2]}
              onChange={onSliderChange[2]}
            />
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
export default Header;
