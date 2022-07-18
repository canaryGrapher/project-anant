import { useState } from "react";

export default function Modal({isOpen, setIsOpen}) {
    const [email, setEmail] = useState("");
    const [isValidEmail, setIsValidEmail] = useState(undefined);
    const [showPassword, setShowPassword] = useState(false);
    const [isCopied, setIsCopied] = useState(false);
    const [password, setPassword] = useState("p@55w0rd")
    const validateEmail = (email) => {
      return String(email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    };

    const submitEmail = () => {
        if(validateEmail(email)) {
            setIsValidEmail(true);
            // send email to server and receive zip file password
            setShowPassword(true)
        } else {
            setIsValidEmail(false);
        }   
    }

    const copyToClipboard = () => {
      let textToCopy = password;
      navigator.clipboard.writeText(textToCopy);
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 3000)
    }

    return (
        isOpen && <div className="z-20 px-4 fixed inset-0 h-screen w-screen overflow-hidden flex flex-col gap-3 items-center justify-center bg-[#00000099]">
            <div className="py-10 px-5 bg-gray-100 rounded-xl flex flex-col justify-center items-start">
                <p className="theme-text text-md">Please enter your email ID to download the entire dataset</p>
                <input
                  className="w-full px-2 py-3 mt-1 border border-2 border-blue-200 rounded-lg outline-none" 
                  placeholder="abc.xyz@gmail.com"
                  onChange={(e) => setEmail(e.target.value)}
                />
                {isValidEmail && isValidEmail != undefined && <p className="text-sm text-green-600"><span><i className="fa fa-check mr-1"></i>Valid Email</span></p>}
                {!isValidEmail && isValidEmail != undefined && <p className="text-sm text-red-700"><span><i className="fa fa-exclamation-circle mr-1"></i></span>Invalid Email</p>}
                {!isValidEmail && <button 
                  className="w-full theme mt-4 py-3 rounded-lg text-gray-100 outline-none hover:font-bold"
                  onClick={submitEmail}
                >Submit</button>}
                <button 
                  className="w-full border border-gray-300 mt-2 py-3 rounded-lg text-gray-900 outline-none hover:font-bold"
                  onClick={() => {setIsOpen(false); setIsValidEmail(undefined); setShowPassword(false);}}
                >Close</button>
            </div>
            {
              showPassword && isValidEmail && <div className="py-4 px-14 bg-gray-100 rounded-xl flex flex-col justify-center items-start">
                <p className="theme-text text-md">The password to open the <monospace>.zip</monospace> file is given below</p>
                <div className="w-full mt-1 px-3 py-2 bg-gray-700 text-gray-200 rounded-md flex justify-between items-center">
                  <pre>{password}</pre>
                  <div className="flex items-center">
                    {isCopied && <p className="text-green-400 mr-1 text-sm">Copied</p>}
                    {!isCopied && <i className="fa fa-copy hover:bg-gray-800 cursor-pointer p-2 rounded-full" onClick={copyToClipboard}></i>}
                    {isCopied && <i className="fa fa-check bg-green-400 p-2 rounded-full"></i>}
                  </div>
                </div>
                <button 
                  className="w-full text-sm border bg-gray-200 border-gray-300 mt-2 py-3 rounded-lg text-gray-900 outline-none hover:font-bold"
                  onClick={() => {}}
                >Download <pre className="inline">.zip</pre></button>
              </div>
            }
        </div>
    )
}