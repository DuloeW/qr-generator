import { useEffect, useState } from 'react'
import './App.css'
import QRCode from 'qrcode.react';

function App() {
  const [jsonData, setJsonData] = useState({
    // Data JSON Anda
    nama: 'John Doe',
    umur: 25,
    // ... tambahkan data JSON lainnya
  });

  useEffect(() => {
    console.log(jsonData)
  }, [jsonData])

  const jsonString = JSON.stringify(jsonData);

  const handleOnChnage = (e) => {
    setJsonData(prev => ({
      ...prev,
      [e.target.name] : [e.target.value]
    }))
  }

  return (
    <>
      <div>
        <label>Nama</label>
        <input type='text' name='nama' onChange={(e => handleOnChnage(e))}/>
      </div>
      <div>
        <label>Umur</label>
        <input type='text' name='umur' onChange={(e => handleOnChnage(e))}/>
      </div>

      <div>
      {/* Tampilkan data JSON sebagai teks */}
      <pre>{jsonString}</pre>

      {/* Tampilkan QR code dari data JSON */}
      <QRCode value={jsonString} />
    </div>
    </>
  )
}

export default App
