import React from 'react';  
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link'; 
import { useHistory , NavLink } from 'react-router-dom';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
interface Links{
  type :string,
  link :string 
}

interface Iprops{ 
  breadcrumbs : Array <Links>,
  isloading? :  boolean
}

 const BreadcrumbsCustom : any=  (props:Iprops)=>{
   const {breadcrumbs , isloading} = props; 
   const history = useHistory();

     return (
       <>      
          {isloading?
          <>
          <Breadcrumbs aria-label="breadcrumb" className="breadcrumsLink">
          {/* <Link color="inherit"><MoreHorizIcon/></Link>
          <Link color="inherit"><MoreHorizIcon/></Link>
          <Link color="inherit"><MoreHorizIcon/></Link> */}
          </Breadcrumbs>
          </>:<> 
             <Breadcrumbs aria-label="breadcrumb" className="breadcrumsLink">
               {
                    breadcrumbs && breadcrumbs.map((key:Links, index:any)=>{
                      return (
                        <>
                        {(breadcrumbs.length)-1 === index ?
                          <Link color="inherit" style={{"textDecoration":"none"}}>{key.type}</Link>
                          :
                          <Link color="inherit" style={{"cursor":"pointer"}} onClick= {()=>history.push(`${key.link}`)} >{key.type}</Link>
                        }
                        </> 
                      )
                    })
               }
               
             </Breadcrumbs> 
          
          </>
          }
        </>
     );

 }
 export default BreadcrumbsCustom;