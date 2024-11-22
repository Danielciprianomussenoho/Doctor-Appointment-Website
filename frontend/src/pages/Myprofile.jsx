import React, { useState } from "react";
import { assets } from "../assets/assets";

const Myprofile = () => {
    const [useData, setUseData] = useState({
        name: "Edward Vincent",
        image: assets.profile_pic,
        Email: "richardjameswap@gmail.com",
        Phone: "+1  123 456 7890",
        Address: {
            lin1: "57th Cross, Richmond ",
            lin2: "Circle, Church Road, London",
        },
        Gender: "Male",
        dob: "20 July, 2024",
    });
    const [isEdit, setIsEdit] = useState(false);

    return (
        <div className="max-w-lg flex flex-col gap-2 text-sm mt-2">
            <img className="w-36 rounded" src={useData.image} alt="" />
            {isEdit ? (
                <input className="bg--gray-50 text-3xl font-medium mx-w-60 mt-4"
                    value={useData.name}
                    type="text"
                    onChange={(e) => setUseData((prev) => ({ ...prev, name: e.target.value }))}
                />
            ) : (
                <p className="font-medium text-3xl text-neutral-800 mt-4">{useData.name}</p>
            )}
            <hr className="bg-zinc-400 h-[1px] border-none" />
            <div>
                <p className="text-neutral-500 underline mt-3">CONTACT INFORMATION</p>
                <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700">
                    <p className="font-medium">Email id:</p>
                    <p className="text-blue-500">{useData.Email}</p>
                    <p className="font-medium">Phone: </p>
                           {isEdit ? (
                            <input className="bg-gray-100 max-w-52"
                                value={useData.Phone}
                                type="text"
                                onChange={(e) =>
                                    setUseData((prev) => ({ ...prev, Phone: e.target.value }))
                                }
                            />
                        ) : (
                            <p  className="text-blue-400">{useData.Phone}</p>
                        )}

                <p className="font-medium">Address: </p>

              
                {isEdit ? (
                  <p>
                        <input className="bg-gray-50"
                            value={useData.Address.lin1}
                            onChange={(e) =>
                              setUseData((prev) => ({
                                ...prev,
                                Address: { ...prev.Address, lin1: e.target.value },
                              }))
                            }
                            type="text"
                            />
                        <br />
                        <input className="bg-gray-50"
                            value={useData.Address.lin2}
                            onChange={(e) =>
                              setUseData((prev) => ({
                                ...prev,
                                Address: { ...prev.Address, lin2: e.target.value },
                              }))
                            }
                            type="text"
                            />
                    </p>
                ) : (
                  <p className="text-gray-500">
                        {useData.Address.lin1}
                        <br />
                        {useData.Address.lin2}
                    </p>
                )}
                </div>
            </div>
            <div>
                <p className="text-neutral-500 underline mt-3">BASIC INFORMATION</p>
                <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700">
                  <p className="font-medium">Gender: </p>
                        {isEdit ? (
                            <select className="max-w-20 bg-gray-100"
                                value={useData.Gender}
                                onChange={(e) =>
                                    setUseData((prev) => ({ ...prev, Gender: e.target.value }))
                                }
                            >
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                        ) : (
                            <p className="text-gray-400">{useData.Gender}</p>
                        )}{" "}
                    
                    <p className="font-medium">Birthday : </p>
                    {
                      isEdit ? (
                        <input className="max-w-28 bg-gray-100"
                            value={useData.dob}
                            type="date"
                            onChange={(e) => setUseData((prev) => ({ ...prev, dob: e.target.value }))}
                        />
                    ) : (
                        <p className="text-gray-400">{useData.dob}</p>
                    )
                    }
                </div>
            </div>
            <div className="mt-10 ">
              {
                isEdit ? <button className="border border-primary rounded-full px-8 py-2 hover:bg-primary hover:text-white transition-all" onClick={()=>setIsEdit(false)}>Save information</button> : <button  className="border border-primary rounded-full px-8 py-2  hover:bg-primary hover:text-white transition-all" onClick={()=>setIsEdit(true)}>Edit</button>
              }
            </div>
        </div>
    );
};

export default Myprofile;
