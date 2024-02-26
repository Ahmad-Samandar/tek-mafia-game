
import  products16 from '../../assets/images/products/16.jpg';
import products15 from "../../assets/images/products/15.jpg";
import products13 from "../../assets/images/products/13.jpg";
import users2 from '../../assets/images/users/2.jpg';
import users4 from '../../assets/images/users/4.jpg';
import users5 from '../../assets/images/users/5.jpg';
import users7 from '../../assets/images/users/7.jpg';
import users3 from '../../assets/images/users/3.jpg';
import users6 from '../../assets/images/users/6.jpg';
import users1 from '../../assets/images/users/1.jpg';
import products14 from '../../assets/images/products/14.jpg';
import logo from '../../assets/images/brand/logo.png';
import logo1 from '../../assets/images/brand/logo1.png';
import flag1 from '../../assets/images/flags/flags/1.jpg';
import flag2 from '../../assets/images/flags/flags/2.jpg';
import flag3 from '../../assets/images/flags/flags/3.jpg';
import flag4 from '../../assets/images/flags/flags/4.jpg';
import flag5 from '../../assets/images/flags/flags/5.jpg';
import products18 from '../../assets/images/products/18.jpg';
import react from '../../assets/images/brand/react.png'
import firebase from '../../assets/images/brand/firbase.png'
export const ImagesData = (img:any) => {

    const photo: any = {  products16, products15, products13, users2,  users5, users7, users3, users6, products14,logo, logo1, flag1, flag2, flag3, flag4, flag5, users1, users4, products18, react, firebase};

    return photo[img];
};