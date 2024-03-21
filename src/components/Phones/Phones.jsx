import axios from "axios";
import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';
import { Audio } from 'react-loader-spinner'

const Phones = () => {
    const [phones, setphones] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        //  fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
        //  .then(res => res.json())
        //  .then(data => setphones(data.data))
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
            .then(data => {
                const phoneData = data.data.data
                const phoneWithFakeData = phoneData.map((phone) => {
                    const obj = {
                        name: phone.phone_name,
                        price: parseInt(phone.slug.split('-')[1])
                    }
                    return obj
                });
                setphones(phoneWithFakeData)
                setLoading(false)
            });
    }, [])
    return (
        <div>
           {loading && <div className=" flex justify-center"><Audio
                height="80"
                width="80"
                radius="9"
                color="green"
                ariaLabel="loading"
                wrapperStyle
                wrapperClass
            /></div>}
            <h2 className="text-4xl"> Phones : {phones.length} </h2>
            <BarChart width={1500} height={300} data={phones}>
                <Bar dataKey="price" fill="seagreen"></Bar>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip></Tooltip>
            </BarChart>
        </div>
    );
};

export default Phones;