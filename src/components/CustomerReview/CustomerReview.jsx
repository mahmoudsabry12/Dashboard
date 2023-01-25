import React from 'react'
import Chart from 'react-apexcharts'

const CustomerReview = () => {

    const data = {
        series: [
           { name: "Review",
            data : [10, 50, 75 ,25, 60, 180, 130]
        }
        ],
        options : {
            chart:{
                type: "area",
                height : "auto"
            },
        //    dropShadow: {
        //     enabled:false,
        //     enabledOnSeries : undefined,
        //     top: 0,
        //     left:0 ,
        //     blur:3 ,
        //     color:"#000",
        //     opacity:0.35
        //     },
            fill : {
                colors:["#fff"],
                type : "gradient"
            },
            dataLabels: {
                enabled: false
            },
            stroke:{
                curve:"smooth",
                colors: ["#ff929f"]
            },
            tooltip: {
                x: {
                    format : "dd/mm/yy HH:mm"
                }
            },
            grid:{
                show:true
            },
            xaxis:{
                type: "datetime",
                categories : [
                    "2018-09-18T00:00:00.000Z",
                    "2018-09-18T01:00:00.000Z",
                    "2018-09-18T02:00:00.000Z",
                    "2018-09-18T03:00:00.000Z",
                    "2018-09-18T04:00:00.000Z",
                    "2018-09-18T05:00:00.000Z" ,
                    "2018-09-18T06:00:00.000Z"
                ]
            }

        }
    }

  return (
    <div className='CustomerReview'>
        <Chart series={data.series} options={data.options} type= 'area'/>
    </div>
  )
}

export default CustomerReview