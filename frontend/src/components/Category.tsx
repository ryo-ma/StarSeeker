import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import CheckBox from '@material-ui/core/Checkbox';
import table from 'public/data/CorrespondenceTable.json';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    box: {
      border: '1px solid #DDD',
      padding: theme.spacing(2),
      display: 'flex',
    },
    formLabel: {
      color: '#000000',
      fontWeight: 'bold',
      textAlign: 'left',
    },
  })
);

type Props = {
  name: string;
  check: string[];
  handleChange: (
    event: React.ChangeEvent<HTMLInputElement>,
    arg: string
  ) => void;
};

const Category: React.VFC<Props> = ({ name, check, handleChange }) => {
  const classes = useStyles();
  return (
    <Grid item xs={12} sm={6} md={3}>
      <Box className={classes.box}>
        <FormControl component="fieldset">
          <FormLabel component="label" className={classes.formLabel}>
            {table[name]}
          </FormLabel>
          <FormGroup>
            <FormControlLabel
              control={
                <CheckBox
                  color="primary"
                  checked={check.includes(name)}
                  onChange={(e) => handleChange(e, name)}
                  name={name}
                />
              }
              label={name}
            />
          </FormGroup>
        </FormControl>
      </Box>
    </Grid>
  );
};

export default Category;