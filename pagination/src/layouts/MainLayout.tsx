import arrNumbers from '../utils/numbers';
import styles from "./MainLayout.module.css"
import { NavLink , Outlet } from 'react-router-dom';
import Header from '../components/breadcrupms/BreadCrupms';
import Footer from '../components/pagination/Pagination';
import crums from '../utils/crums';

export default function MainLayout() {

    return (
        <div className={styles.wrapper}>
            <Header>
                {
                    crums.map( ( crum:{id:number , title:string , path:string } ) => <NavLink className={ ({isActive}) => isActive ? `${styles.title} ${styles.title_active}` : styles.title} to={"/images"+crum.path} key={crum.id}>{crum.title} <span className={styles.slash}>/</span> </NavLink> )
                }
            </Header>
            <div className={styles.container}>
                <Outlet />
            </div>
            <Footer>
                {
                    arrNumbers.map( (num: {id:number , number:number, path:string}) => <NavLink className={ ({isActive}) => isActive ? `${styles.items} ${styles.active}` : styles.items} to={"/images"+num.path} key={num.id}>{num.number}</NavLink>  )
                }
            </Footer>
        </div>
    )
}