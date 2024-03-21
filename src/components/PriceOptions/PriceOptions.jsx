import PriceOption from "../PriceOption/PriceOption";


const PriceOptions = () => {


    const priceOptions = [
        {
            "name": "Basic",
            "price": "$29.99",
            "features": [
                "Access to cardio equipment",
                "Access to weightlifting area",
                "Group fitness classes"
            ]
        },
        {
            "name": "Standard",
            "price": "$39.99",
            "features": [
                "All Basic features",
                "Access to swimming pool",
                "Access to sauna and steam room"
            ]
        },
        {
            "name": "Premium",
            "price": "$49.99",
            "features": [
                "All Standard features",
                "Personal training sessions",
                "Towel service",
                "Locker rental"
            ]
        }
    ]


    return (
        <div className="mt-10">
            <h2 className="text-5xl font-bold">Best Prices in the town</h2>
            <div className="grid lg:grid-cols-3 gap-6 mt-5">
            {
                priceOptions.map(option => <PriceOption
                    key={option.id}
                    option={option}
                ></PriceOption>)
            }
            </div>
        </div>
    );
};

export default PriceOptions;