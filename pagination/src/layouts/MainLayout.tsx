import styles from "./MainLayout.module.scss"
import { NavLink , Outlet, useLocation } from 'react-router-dom';
import Header from '../components/breadcrupms/BreadCrupms';
import Footer from '../components/pagination/Pagination';
import numbers from "../utils/numbers"
import crums from '../utils/crums';
import type { paginations } from "../types/interface";
import {useMemo} from "react";

export default function MainLayout() {
    const params = useLocation();

    const limitPage = useMemo( () => {
        const path = params.pathname
                             .split("/")
                             .slice(2)
                             .join("/");

        const index:number  = numbers.reduce(
                (acc:number , page:paginations , index:number) => {

                    if(page.path == "/" + path)
                        acc = index    

                    return acc
                } , 0);
    
        return index % 2 != 0 ? numbers.slice(index - 1, index + 1) : numbers.slice(index, index + 2)
    } , [params.pathname]);

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
                    limitPage.map( (num: {id:number , number:number, path:string}) => <NavLink className={ ({isActive}) => isActive ? `${styles.items} ${styles.active}` : styles.items} to={"/images"+num.path} key={num.id}>{num.number}</NavLink>  )
                }
            </Footer>
        </div>
    )
}