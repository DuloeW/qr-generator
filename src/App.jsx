import { useState } from 'react'
import './App.css'
import QRCode from 'qrcode.react';

function App() {
  const [jsonData, setJsonData] = useState({
    // Data JSON Anda
    name: 'John Doe',
    age: 25,
    // ... tambahkan data JSON lainnya
  });

  const jsonString = JSON.stringify(jsonData);

  return (
    <>
      <div>
        <label></label>
        <input/>
      </div>
      <div>
        <label></label>
        <input/>
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
