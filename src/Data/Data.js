import {
    UilEstate,
    UilClipboardAlt,
    UilUsersAlt,
    UilPackage,
    UilChart,
    UilSignOutAlt,
    UilUsdSquare,
    UilMoneyWithdrawal,
} from '@iconscout/react-unicons'

import img1 from '../imgs/img1.png'
import img2 from '../imgs/img2.png'
import img3 from '../imgs/img3.png'

export const SidebarData = [
    {
        icon: UilEstate,
        heading : "Dashboard"
    },
    {
        icon: UilClipboardAlt,
        heading : "Order"
    },
    {
        icon: UilUsersAlt,
        heading : "Customers"
    },
    {
        icon: UilPackage,
        heading : "Products"
    },
    {
        icon: UilChart,
        heading : "Analytics"
    }
]

export const CardsData =[
    {
        title : "Sales",
        color:{
            background: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
            boxShadow : "0px 10px 20px 0px #e0c6f5"
        },
        barValue: 70,
        value : "25.970",
        png: UilUsdSquare,
        series:[
            {
            name :"Sales",
            data:[31,40,28, 51, 42,109,190]
        }
        ]
    },
    {
        title : "Revenue",
        color:{
            background: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
            boxShadow : "0px 10px 20px 0px #FDC0C7"
        },
        barValue: 80,
        value : "17.270",
        png: UilMoneyWithdrawal,
        series:[
            {
            name :"Revenue",
            data:[10,100,50, 70, 48,30,40]
        }
        ]
    },
    {
        title : "Expenses",
        color:{
            background: "linear-gradient(rgb(248, 212 , 154) -146.42% , rgb(255 202 113) -146.42%) ",
            boxShadow : "0px 10px 20px 0px #F9D59B"
        },
        barValue: 60,
        value : "4.970",
        png: UilClipboardAlt,
        series:[
            {
            name :"Expenses",
            data:[31,50,85, 74, 44,100,200]
        }
        ]
    }
]


export const UpdatesData = [
   {
     img : img1, 
     name : "mahmoud",
     noti : "has ordered Apple Smart Watch" ,
     time : "25 seconds ago"
    },
    {
        img : img2, 
        name : "sabry",
        noti : "has ordered Apple Smart Watch" ,
        time : "25 seconds ago"
       },
       {
        img : img3, 
        name : "ahmed",
        noti : "has ordered Apple Smart Watch" ,
        time : "25 seconds ago"
       },
]