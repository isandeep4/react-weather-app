import React from "react";

const popularCity = [{
    id: 1,
    name: 'London',
    lat:51.5073219,
    lon:-0.1276474,
},
{
    id:2,
    name: 'Paris',
    lat:51.5073219,
    lon:-0.1276474,
},
{
    id:3,
    name: 'New York',
    lat:51.5073219,
    lon:-0.1276474,
},
{
    id:4,
    name: 'Bhubaneswar',
    lat:51.5073219,
    lon:-0.1276474,
}]

const Header = ({setQuery}) => {
    return (
        <div className="flex items-center justify-around my-6">
            {
                popularCity.map((city: any)=>{
                    return (
                        <button className="text-white text-lg font-medium" onClick={()=>setQuery({q:city.name})} key={city.id} value={city}>{city.name}</button>
                        )
                })
            }
        </div>
    )
        

}
export default Header;