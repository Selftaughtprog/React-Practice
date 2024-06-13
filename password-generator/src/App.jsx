import { useState, useCallback, useEffect, useRef } from "react"

function App() {

  const [password, setPassword] = useState("");
  const [passLength, setPassLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  

  //use-Ref hook
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {

    //useCallback((), [dependencies])
    //use callback takes two paraments, first is the callback function, and the other parameter
    // is the dependencies in array form. 
    
    let pass = ""
    
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if ( numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%&*{}[]"

    for (let i = 0; i <= passLength; i++) {
      let char = Math.floor(Math.random() * str.length + 1);

      pass += str.charAt(char)
    }

    setPassword(pass);

  }, [passLength, numberAllowed, charAllowed, setPassword])

  const copyPasswordClipBoard  = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [passLength, numberAllowed, charAllowed, passwordGenerator])

  return (
    <div className=' w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700'>
      <h1 className=" text-white text-center my-3">Password Generator</h1>
      <div className=" flex shadow rounded-lg overflow-hidden mb-4">
        <input type="text"
        value={password}
        className=" outline-none w-full text-xl font-semibold py-1 px-3"
        placeholder="Password"
        readOnly
        ref={passwordRef}
        />
        <button onClick={copyPasswordClipBoard} className=" bg-blue-500 px-2 py-2">Copy</button>
      </div>
      <div className="flex text-sm gap-x-2">
        <div className=" flex items-center gap-x-3">
          <input onChange={(e) => setPassLength(e.target.value)} className=" cursor-pointer" type="range" min={6} max={100} value={passLength}/>
          <label htmlFor="range">({passLength})</label>
          <input onChange={() => setNumberAllowed((prev) => !prev)} className=" cursor-pointer" type="checkbox" defaultChecked={numberAllowed} name="NumbersAllowed" id="" />
          <label htmlFor="nums">Numbers</label>
          <input onChange={() => setCharAllowed((prev) => !prev)} className=" cursor-pointer" type="checkbox" defaultChecked={charAllowed} name="CharactersAllowed" />
          <label htmlFor="Character">Characters</label>
        </div>
      </div>
    </div>
  )
}

export default App
