// import axios from 'axios';
// import React, { useState } from 'react'

// function Demo() {

//     const [data, setData] = useState({ num1: "", num2: "", num3: "", num4: "", num5: "", })
//     const handleAdd = (evt) => {
//         setData({ ...data, [evt.target.name]: evt.target.value })
//     }

//     const handleSubmit = () => {
//         // const name = Object.values(data)
//         // let count = 0;
//         // name.forEach((vbl) => {
//         //     if (vbl !== "") { count = count + 1 }
//         // })
//         // if (name.length === name) {
//         //     console.log("sucsses");
//         // } else {
//         //     console.log("no")
//         // }

//         const data1 = Object.fromEntries(
//             Object.entries(data).map(([key, value]) =>
//                 [key, value === "" ? 0 : value]
//             )
//         )
//         console.log("data1", data1);
//     }
//     return (
//         <div className="container mt-5">
//             <div className="row">
//                 <div className="col">
//                     <h2>Demo</h2>
//                     <hr />

//                     <form>
//                         <input type="number" name='num1' value={data.num1} placeholder=' turnover ' onChange={handleAdd} />{" "}
//                         <input type="number" name='num2' value={data.num2} placeholder=' profit ' onChange={handleAdd} />{" "}
//                         <input type="number" name='num3' value={data.num3} placeholder=' income ' onChange={handleAdd} />{" "}
//                         <input type="number" name='num4' value={data.num4} placeholder=' rate ' onChange={handleAdd} />{" "}
//                         <input type="number" name='num5' value={data.num5} placeholder=' amount ' onChange={handleAdd} />{" "}
//                         <input type="button" value=" + " onClick={handleSubmit} />
//                     </form>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Demo


import React, { useState } from "react";
function Demo() {
    const [data, setData] = useState({ fn: "", ln: "" })

    const [val, setVal] = useState([]);
    const [store, setStore] = useState([])
    const handleAdd = () => {
        setVal([...val, [{
            name: "manish"
        }]])
    }
    const handleChange = (evt) => {
        setData({ ...data, [evt.target.name]: evt.target.value })
    }
    const handleAdd1 = () => {
        setStore([...store, data])
    }


    return (
        <>

            {store?.length > 0 ? null : <button onClick={() => handleAdd()}>Add</button>}
            {val.map((data, i) => {
                return (
                    <div>

                        <input name="fn" type="text" onChange={handleChange} />
                        <input name="ln" type="text" onChange={handleChange} />
                        <input type="button" onClick={() => { handleAdd1(); handleAdd() }} value=" + " />
                    </div>
                )
            })}
            {store?.length > 0 &&
                <table className="table">
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {store?.map((item, index) => (
                            <tr key={index}>
                                <td>{item?.fn}</td>
                                <td>{item?.ln}</td>
                            </tr>
                        ))}

                    </tbody>

                </table>}

        </>
    );
}
export default Demo;