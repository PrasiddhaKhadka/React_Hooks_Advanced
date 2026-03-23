import { useMemo, useState } from "react";

const products = [
  { id: 1, name: "iPhone", price: 1000 },
  { id: 2, name: "Samsung", price: 900 },
  { id: 3, name: "Nokia", price: 200 },
  { id: 4, name: "Pixel", price: 800 },
];

const MemoProjectPage = ()=>{
    const [ count, setCount ] = useState(0);
    const [search, setSearch] = useState("");

    const filterProducts =useMemo(() => {
            console.log("Filtering running...");
            return products.filter((product) => {
            return product.name.toLowerCase().includes(search.toLowerCase());
            });
    }, [search]); 
    

    return(
        <div className="m-10">
            <h1>USE MEMO PROJECT</h1>
             <h1 className="font-bold py-3.5">Product Search</h1>
            <input
                type="text"
                placeholder="Search..."
                onChange={(e) => setSearch(e.target.value)}
            />
             <button className="border-2 px-2 bg-amber-400" onClick={() => setCount(count + 1)}>
                Re-render ({count})
            </button>

            <ul>
                    {filterProducts.map((p) => (
                    <li key={p.id}>{p.name}</li>
                    ))}
            </ul>

        </div>
    )
}

export default MemoProjectPage