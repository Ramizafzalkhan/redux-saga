import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({

        tabsWrapper: {
            backgroundColor: 'transparent',
        },
        tabsBar: {
            backgroundColor: 'transparent',
            boxShadow: 'none',
            borderBottom: '1px solid #dcddde',


        },
        tabs: {
            backgroundColor: 'transparent',
            boxShadow: 'none',
            borderBottom: 'none',


        },

        panelWrapper: {
            backgroundColor: '#fff',
            // minHeight: 500,
            boxShadow: '0px 5px 5px 0px rgba(193, 199, 208, 0.26)',
            borderRadius: 5,
        },
        panelWr: {
            backgroundColor: '#fff',
            // minHeight: 500,
            boxShadow: 'none',
            borderRadius: 5,
            border: '1px solid #E8E8E8',
            marginTop: 0,
            marginBottom: 0
        },
        tab: {
            textTransform: 'capitalize',
            fontSize: '14px',
            padding: 0
        },
        tabNavLink: {
            color: '#3a3a3a',
            textDecoration: 'none',
            '& button': {
                opacity: 1
            },
            [theme.breakpoints.down('lg')]: {
                minWidth: 160,
            },
            [theme.breakpoints.only('md')]: {
                minWidth: 107,
            },

        },
        formCustomer: {
            border: '1px solid #E8E8E8',
            backgroundColor: '#FDFDFD',
        }



    }),
);

export default useStyles;