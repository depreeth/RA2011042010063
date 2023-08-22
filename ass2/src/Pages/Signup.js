import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [compname, setCompname] = useState("");
  const [ownername, setOwnerName] = useState("");
  const [rollno, setRollno] = useState("");
  const [owneremail, setOwnerEmail] = useState("");
  const [code, setCode] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const userObject = {
      companyName: compname,
      ownerName: ownername,
      rollNo: rollno,
      ownerEmail: owneremail,
      accessCode: code,
    };
    try {
      const response = await fetch("http://20.244.56.144/train/register", {
        method: "POST",

        body: JSON.stringify(userObject),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div className=" w-full h-screen flex flex-col justify-center items-center bg-[#131313] ">
        <form
          onSubmit={handleSubmit}
          className=" bg-[#1D1D1D] w-[40%] px-5 py-6 flex flex-col text-white rounded-md"
        >
          <div className=" w-full text-center text-2xl">SignUp</div>
          <div className=" my-2">Company Name</div>
          <div className=" w-full my-1 p-2 rounded-md bg-slate-300">
            <input
              className=" w-full bg-slate-300 text-black placeholder:text-gray-600 focus:outline-none"
              type="text"
              value={compname}
              onChange={(event) => setCompname(event.target.value)}
              placeholder=" Train Egmore"
            />
          </div>

          <div className=" my-2">Owner Name</div>
          <div className=" w-full my-1 p-2 rounded-md bg-slate-300">
            <input
              className=" w-full bg-slate-300 text-black placeholder:text-gray-600 focus:outline-none"
              type="text"
              value={ownername}
              onChange={(event) => setOwnerName(event.target.value)}
              placeholder=" ramu"
            />
          </div>

          <div className=" my-2">Roll No</div>
          <div className=" w-full my-1 p-2 rounded-md bg-slate-300">
            <input
              className=" w-full bg-slate-300 text-black placeholder:text-gray-600 focus:outline-none"
              type="text"
              value={rollno}
              onChange={(event) => setRollno(event.target.value)}
              placeholder=" 4"
            />
          </div>

          <div className=" my-2">Owner Email</div>
          <div className=" w-full my-1 p-2 rounded-md bg-slate-300">
            <input
              className=" w-full bg-slate-300 text-black placeholder:text-gray-600 focus:outline-none"
              type="email"
              value={owneremail}
              onChange={(event) => setOwnerEmail(event.target.value)}
              placeholder=" ram@abcd.edu"
            />
          </div>

          <div className=" my-2">Access Code</div>
          <div className=" w-full my-1 p-2 rounded-md bg-slate-300">
            <input
              className=" w-full bg-slate-300 text-black placeholder:text-gray-600 focus:outline-none"
              type="password"
              value={code}
              onChange={(event) => setCode(event.target.value)}
              placeholder=""
            />
          </div>
          <div
            onClick={() => navigate("/login")}
            className=" text-right my-2 text-blue-600 hover:text-blue-500 cursor-pointer"
          >
            Already have an account?
          </div>
          <div className=" flex items-center justify-center mt-5">
            <div className=" px-3 py-2 w-[30%] rounded-md bg-blue-600 flex items-center justify-center">
              <button>SignUp</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
