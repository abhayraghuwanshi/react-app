import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    width:'250px'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

class SimpleCard extends React.Component{

render(){
  const classes = useStyles;
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {this.props.title}
        </Typography>
  
        <Typography variant="body2" component="p">
          {this.props.data}
        </Typography>
      </CardContent>
      <CardActions>
        <form style={{display:'flex'}}>
<input></input> <Button size="small">Add</Button>
        </form>
       
      </CardActions>
    </Card>
  );
}

}

export default SimpleCard;