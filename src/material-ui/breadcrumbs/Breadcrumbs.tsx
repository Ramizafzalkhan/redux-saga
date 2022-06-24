import React, { useEffect, useState } from 'react'
import Breadcrumbs from '@material-ui/core/Breadcrumbs'
import Link from '@material-ui/core/Link'
import withBreadcrumbs from "react-router-breadcrumbs-hoc";
import { NavLink, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { MBox } from '../box/Box';
import { connect } from 'react-redux';

function  matchUrlWithBreadcrumb(breadcrumb:any){
    let uri = window.location.toString();
    const hostname = window.location.host.toString();
    uri = uri.replace(hostname,'');
    if(breadcrumb==='/'){
        //dont add href in false case
        return true
    }
    if (uri.indexOf(breadcrumb) > 0 ){
        //dont add href in false case
        return false;
    }else{
        return true;
    }    
}

function removeHyphenFromWString(value:any) {
    if(value.props.children){
        value = value.props.children.replace('-', ` `);
    }
    return value;
}

let href = (value:any)=>{
    return {href: value}
}

const mapStateToProps = (state:any, props:any) => ({
    selectedProjectName: state.projects.selectedProjectName,
    userRole: state.userRole.userRole,
    serviceName: state.breadcrumsData.selectedServiceName,
    rateName: state.breadcrumsData.selectedRateName,
    vendorJobName: state.breadcrumsData.selectedVendorJobName
});

const capitalizeFirstLetter = (str: any) => {

    // converting first letter to uppercase
    const capitalized = str.charAt(0).toUpperCase() + str.slice(1);

    return capitalized;
};
const MainPageName = connect(mapStateToProps)(({ match, userRole}):any => {
    console.log('match',window.location.pathname.split('/')[3]);

    if(userRole == 'ROLE_VENDOR' && window.location.pathname.split('/')[1] != 'vendor' && window.location.pathname.split('/')[1] != 'projects') {
        return 'Open Jobs';
    }if(userRole == 'ROLE_CLIENT' &&  window.location.pathname.split('/')[1] != 'projects') {
        return 'Projects';
    }
    return window.location.pathname.split('/')[1] == 'vendor'?'Open Jobs':(window.location.pathname.split('/')[1] == 'linguist'?'My Jobs':capitalizeFirstLetter(window.location.pathname.split('/')[1]));
        // :(userRole =='ROLE_CLIENT'?'Projects':(userRole=="ROLE_TRANSLATOR") ?"Linguist":'Open jobs'));
});

const ProjectName = connect(mapStateToProps)(({ match, selectedProjectName}:any) => {
    return selectedProjectName
});

const ServiceName = connect(mapStateToProps)(({ match, serviceName}):any => {
    return serviceName;
});

const RateName = connect(mapStateToProps)(({ match, rateName}):any => {
    return rateName;
});

const VendorJobName = connect(mapStateToProps)(({ match, vendorJobName}):any => {
    return vendorJobName;
});

let routes:any = [
    {path: '/', breadcrumb:MainPageName},
    {path: '/projects', breadcrumb:null},
    {path: '/vendor', breadcrumb: null},
    {path: '/vendor/open-jobs', breadcrumb: null},
    {path: '/projects/overview/:projectId', breadcrumb: ProjectName},
    {path: '/projects/work-flow/:projectId', breadcrumb: ProjectName},
    {path: '/projects/edit-work-flow/:projectId', breadcrumb: ProjectName},
    {path: '/projects/job/create', breadcrumb:'Create'},
    {path: '/projects/job/create/:projectId', breadcrumb: ProjectName},
    {path: '/projects/files/:projectId', breadcrumb: ProjectName},
    {path: '/projects/reference-files/:projectId', breadcrumb: ProjectName},
    // {path: '/projects/file/:projectId', breadcrumb: ProjectName},
    {path: '/projects/languages/:projectId', breadcrumb: ProjectName},
    {path: '/projects/style-guides/:projectId', breadcrumb: ProjectName},
    {path: '/projects/glossary/:projectId', breadcrumb: ProjectName},
    {path: '/projects/bids-for-job/:projectId', breadcrumb: ProjectName},
    {path: '/projects/tm', breadcrumb:'Translation memory'},
    {path: '/projects/tm/:projectId', breadcrumb: ProjectName},
    {path: '/projects/tags', breadcrumb:'Project tags'},
    {path: '/projects/tags/:projectId', breadcrumb: ProjectName},
    {path: '/projects/job/bids/:projectId', breadcrumb: ProjectName},
    {path: '/manage-admins', breadcrumb:'People'},
    {path: '/vendor/rates/add-rates', breadcrumb: 'Add rates'},
    {path: '/rate/request', breadcrumb: 'Rate request'},
    {path: '/vendor/rates/:id', breadcrumb: RateName},
    {path: '/vendor/services/add-services', breadcrumb: 'Add services'},
    {path: '/vendor/services/:id', breadcrumb: ServiceName},
    {path: '/vendor/send-quotes/:jobId', breadcrumb: VendorJobName},
    {path: '/linguist', breadcrumb: null},
    {path: '/linguist/services/add-services', breadcrumb: 'Add services'},
    {path: '/linguist/services/:id', breadcrumb: ServiceName},
    {path: '/linguist/rates/add-rates', breadcrumb: 'Add rates'},
    {path: '/linguist/rates/:id', breadcrumb: RateName},
    // {path: '/tm', breadcrumb: 'Translation memory'},
]


// import useStyles from './BreadcrumbStyles'
// const classes = useStyles();

const BreadcrumbsNavigation: any = ({breadcrumbs}:any) => {
    const userRole = useSelector((store:any) => store.userRole.userRole);
    const [updatedBreadrumbs, setUpdatedBreadrumbs] = useState([...breadcrumbs])
    // const { projectId, jobId }:any = useParams();
    // let updatedBreadrumbs = [...breadcrumbs];

    useEffect(() => {
        let foundProjectId = updatedBreadrumbs.find((el:any) => el.match.params.projectId);

        console.log('foundProjectId',updatedBreadrumbs);
        if(foundProjectId !== undefined){
            let oldData = [...updatedBreadrumbs];
            let second = oldData[1];
            oldData[1] = oldData[oldData.length-1];
            oldData[oldData.length-1] = second;
            setUpdatedBreadrumbs(oldData)
        }
        
    },[]);

    const checkPathExist:any = (path: any) => {

        const paths = ['/projects/file','/projects/tasks','/projects/settings'];

        paths.forEach(function(item) {
            if(path.indexOf(item)!=-1) {
                return true;
            }
        });

        return false;
    };

    return (
        <React.Fragment>
            <Breadcrumbs className={(window.location.href.indexOf('/projects/')!==-1?"breadcrumsLink1":"")+" breadcrumsLink"} aria-label="breadcrumb">
                {/* {breadcrumbs.map(({ breadcrumb }) => breadcrumb)} */}

                {updatedBreadrumbs.map((item: any, index:number) =>


                    // <a href={item.breadcrumb.key} key={index}>{item.breadcrumb.props.children}</a>
                    (((updatedBreadrumbs.length > index+1 && checkPathExist(item.breadcrumb.key)) || (item.breadcrumb.key == '/') || (updatedBreadrumbs.length > index+2)) &&
                    (item.breadcrumb.key !== '/vendor/send-quotes') && 
                    (item.breadcrumb.key !== '/projects/job/create') &&
                    (item.breadcrumb.key !== '/projects/job/bids')
                    ) ?
                        <MBox key={index} display="inline-block">
                            {/*{ item.breadcrumb.key }*/}
                            {/*{ item.breadcrumb.key.indexOf('/projects/file/') }*/}
                        {/* { item && ((item.key != '/') || window.location.href.indexOf('/projects/')===-1) && */}
                            <NavLink color="inherit"
                                {...(matchUrlWithBreadcrumb(item.breadcrumb.key) && href(item.breadcrumb.key))}
                                // to={matchUrlWithBreadcrumb(item.breadcrumb.key) ? ((userRole==='ROLE_CLIENT')? '/projects':'/vendor/open-jobs') : ((item.breadcrumb.key==='/vendor') ? '/vendor/open-jobs':item.breadcrumb.key+(((projectId || jobId) && (item.breadcrumb.key!=="/projects")) ? ('/'+(projectId?projectId:jobId)):''))}
                                to={matchUrlWithBreadcrumb(item.breadcrumb.key) ? ((userRole==='ROLE_CLIENT')? '/projects':(userRole==='ROLE_TRANSLATOR')?'/linguist/profile':'/vendor/open-jobs') : ((item.breadcrumb.key==='/vendor') ? '/vendor/open-jobs': (item.match.params.projectId ? '/projects/file/'+item.match.params.projectId:item.breadcrumb.key))}
                                key={index}>
                                {removeHyphenFromWString(item.breadcrumb)}
                                </NavLink>
                        {/* } */}
                        </MBox>
                        :
                        <Link color="inherit"
                            key={index}>
                            {removeHyphenFromWString(item.breadcrumb)}</Link>


                )}
            </Breadcrumbs>
        </React.Fragment>
        // <div>
        //     {breadcrumbs.map(({
        //     match,
        //     breadcrumb
        //     }:any) => (
        //     <span key={match.url}>
        //         <NavLink to={match.url}>{breadcrumb}</NavLink>
        //     </span>
        //     ))}
        // </div>
    )
};

export default withBreadcrumbs(routes)(BreadcrumbsNavigation);



