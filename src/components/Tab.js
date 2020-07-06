import { withStyles } from '@material-ui/core/styles';
import Tab from '@material-ui/core/Tab';

export default withStyles((theme) => ({
  root: {
    color: theme.palette.primary.main,
    fontSize: 18,
    fontWeight: 600,
    textTransform: 'none',
  },
}))(Tab);
