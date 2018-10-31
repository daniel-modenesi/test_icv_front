import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import Cake from '@material-ui/icons/Cake';
import Account from '@material-ui/icons/AccountCircle';
import Money from '@material-ui/icons/MonetizationOn';
import MoreVert from '@material-ui/icons/MoreVert';
import NotificationsNone from '@material-ui/icons/NotificationsNone';
import ArrowUp from '@material-ui/icons/ArrowUpward';
import ArrowDown from '@material-ui/icons/ArrowDownward';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import 'typeface-roboto';
import './App.css';



const styles = theme => ({
  "@global": {
		body: {
      backgroundColor: '#ebebeb;'
    },
	},
  root: {
    width: '100%',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  paper: {
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  profile: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  store: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  camp_par: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: '100px'
  },
  camp_dis: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: '100px'
  },
  container: {
    width: '100%',
    paddingTop: '2%',
  },
  logo: {
    width: '50px',
    paddingLeft: '8%',

  },
  client: {
    width: '110px',
    paddingTop: '1%',
    paddingBottom: '1%',

  },
  client2: {
    width: '150px',
    paddingLeft: '0%'
  },
  title: {
    paddingLeft: '1%',
    color: 'black'
  },
  box2_title: {
    padding: theme.spacing.unit * 2,
    color: '#ff5e6e'
  },
  box3_title: {
    padding: theme.spacing.unit * 2,
    color: '#ff5e6e',
    fontSize: 24
  },
  box1: {
    padding: theme.spacing.unit * 2,
  },
  box2: {
    padding: theme.spacing.unit * 2,
    color: 'black'
  },
  box1_text: {
    fontSize: 18,
  },
  box2_text: {
  },
  box3_text: {
    fontSize: 13,
  },
  account: {
      color:'black',
      width: 70,
      height: 70,
  },
  cake: {
      color:'#ff5b69',
      paddingRight: '2%'
  },
  arup: {
      color:'green',
  },
  ardw: {
      color:'red',
  },
  morevert: {
      color:'#7f7777;',
  },
});

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

class PrimaryApp extends React.Component {
  state = {
    anchorEl: null,
    mobileMoreAnchorEl: null,
  };

  render() {
    const { anchorEl, mobileMoreAnchorEl } = this.state;
    const { classes } = this.props;

    return (

      <div className={classes.root}>

        <AppBar position="static" style={{ background: 'white'}} >
          <Toolbar>
            <img src="/assets/logo.png" className={classes.logo} />
            <FormLabel className={classes.title} ><b>Incentive-me</b></FormLabel>
            <div style={{paddingLeft:'72%'}}>
            <NotificationsNone className={classes.morevert}/>
            <MoreVert className={classes.morevert}/>
            </div>
          </Toolbar>
        </AppBar>

        <Grid className={classes.container} container spacing={24} justify={"center"} >
          <Grid item xs={2}>
            <Paper className={classes.profile}>
            <div className={classes.box1}>
            <Account className={classes.account} />
            <br/>
            <FormLabel className={classes.box1_text} >
            <b>Thiago Lins</b>
            </FormLabel>
            </div>
              <Divider />
              <div className={classes.box2}>
                <FormLabel className={classes.box2_title} >89</FormLabel>
                <br/>
                <FormLabel className={classes.box2_text} >vendas no mês</FormLabel>
              </div>
              <Divider />
              <div className={classes.box2}>
                <FormLabel className={classes.box2_title} >3558</FormLabel>
                <br/>
                <FormLabel className={classes.box2_text} >pontos</FormLabel>
              </div>
              <Divider />
              <div className={classes.box2}>
                <Cake className={classes.cake}/>
                <FormLabel className={classes.box1_title} >
                  <b>48 dias</b>
                  <br/>
                  30/06/2018
                </FormLabel>
              </div>
              <div className={classes.box2}>
                <FormLabel className={classes.box3_text} >Data em que pontos serão transferidos para o seu cartão</FormLabel>
              </div>
            </Paper>
          </Grid>
          <Grid item xs={5}>
          <Typography variant="subheading" gutterBottom>
              campanhas que estou participando
          </Typography>
            <Paper className={classes.camp_dis}>
              <div style={{textAlign:'left', width: '33%',float: 'left'}}>
              Assurant
              <br />
              <img src="/assets/client1.png" className={classes.client} />
              <br />
              Vendeu, Ganhou
              </div>
              <div style={{textAlign:'center', width: '33%',float: 'left'}}>
              <Typography variant="subtitle2" gutterBottom>
                  Garantia Assurant
              </Typography>
              <Divider/>
              <Typography variant="h6" gutterBottom>
                  31
              </Typography>
                  Vendas
              </div>
              <div style={{textAlign:'right', width: '33%',float: 'left'}}>
              30/60/2018
              </div>
              <div style={{textAlign:'right', width: '33%',float: 'left'}}>
              <br/>
              <Typography variant="h6" gutterBottom>
              <Money/>    75
              </Typography>
              Acúmulo
              </div>
            </Paper>
            <br/>
            <Paper className={classes.camp_dis}>
              <div style={{textAlign:'left', width: '33%',float: 'left'}}>
              Samsung
              <br />
              <img src="/assets/client2.png" className={classes.client} />
              <br />
              Ranking
              </div>
              <div style={{textAlign:'center', width: '33%',float: 'left'}}>
              <Typography variant="subtitle2" gutterBottom>
                  SmartPhone Samsung
              </Typography>
              <Divider/>
              <Typography variant="h6" gutterBottom>
                  3º/1008
              </Typography>
                  Posição
              </div>
              <div style={{textAlign:'right', width: '33%',float: 'left'}}>
              30/60/2018
              </div>
              <div style={{textAlign:'right', width: '33%',float: 'left'}}>
              <br/>
              <Typography variant="h6" gutterBottom>
              <Money/>    1000
              </Typography>
              Acúmulo
              </div>
            </Paper>
            <br/>
            <Paper className={classes.camp_dis}>
              <div style={{textAlign:'left', width: '33%',float: 'left'}}>
              Samsung
              <br />
              <img src="/assets/client3.png" className={classes.client} />
              <br />
              Quiz
              </div>
              <div style={{textAlign:'center', width: '33%',float: 'left'}}>
              <Typography variant="subtitle2" gutterBottom>
                  Galaxy S9
              </Typography>
              <Divider/>
              <Typography variant="h6" gutterBottom>
                  2/3
              </Typography>
                  Tentativas
              </div>
              <div style={{textAlign:'right', width: '33%',float: 'left',color:'red'}}>
              <b>faltam 5d</b>
              </div>
              <br/>
              <br/>
              <div style={{textAlign:'right', width: '33%',float: 'left'}}>
              <Typography variant="h6" gutterBottom>
              <Money/>    -
              </Typography>
              Acúmulo
              </div>
            </Paper>
            <br/>
            <Typography variant="subheading" gutterBottom>
                campanhas disponíveis
            </Typography>
            <Paper className={classes.camp_par}>
            <div style={{ width: '33%',float: 'left'}}>
              <img src="/assets/client3.1.png" className={classes.client2} />
            </div>
            <div style={{textAlign:'center', width: '66%',float: 'left'}}>
            <Typography variant="h6" gutterBottom>
                Campanha
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
                Galaxy S9
            </Typography>
            <Button variant="contained" color="primary" >
            Desejo Participar
            </Button>
            </div>
            </Paper>
          </Grid>
          <Grid item xs={3}>
          <Paper className={classes.store}>
          <div className={classes.box1}>
          <img src="/assets/client4.png" className={classes.client2} />
          <br/>
          <FormLabel className={classes.box1_text} >
          <b>C&A Barra da Tijuca</b>
          </FormLabel>
          </div>
            <Divider />
            <div className={classes.box2}>
              <FormLabel className={classes.box3_title} >João Silva</FormLabel>
              <br/>
              <FormLabel className={classes.box2_text} >Líder da Loja</FormLabel>
              <br/>
              <br/>
              <Typography variant="body2" gutterBottom>
                  João Silva - 14:34
              </Typography>
              <FormLabel className={classes.box2_text} >Você está vendendo menos que os seus colegas, o que está acontecendo?</FormLabel>
            </div>
            <Divider />
            <div className={classes.box2}>
              <FormLabel className={classes.box2_title} >121 Média de Vendas</FormLabel>
              <br/>
              <ArrowDown className={classes.ardw}/>
              <FormLabel className={classes.box2_text} >você está vendendo menos que os outros vendedores na loja</FormLabel>
            </div>
            <Divider />
            <div className={classes.box2}>
              <FormLabel className={classes.box2_title} >68 Vendas no mês anterior</FormLabel>
              <br/>
              <ArrowUp className={classes.arup}/>
              <FormLabel className={classes.box2_text} >você está melhor com relação ao mesmo período do mês anterior</FormLabel>
            </div>
          </Paper>
          </Grid>
      </Grid>
    </div>
    );
  }
}

PrimaryApp.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PrimaryApp);
