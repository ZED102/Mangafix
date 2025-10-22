import React, { useRef, useState, useEffect } from 'react';
import './styles.css';

export default function App(){
  const canvasRef = useRef(null);
  const [imageFile, setImageFile] = useState(null);
  const [rects, setRects] = useState([]);
  const [selectedRect, setSelectedRect] = useState(null);

  // simple theme toggle
  const [dark, setDark] = useState(false);

  useEffect(()=>{ document.title = 'MangaFix — Deluxe'; },[]);

  function handleFile(e){ const f = e.target.files?.[0]; if(!f) return; const url = URL.createObjectURL(f); const img = new Image(); img.onload = ()=>{ const c = canvasRef.current; c.width = img.width; c.height = img.height; const ctx = c.getContext('2d'); ctx.drawImage(img,0,0); }; img.src = url; setImageFile(f); }

  function exportPNG(){ const c = canvasRef.current; if(!c) return; const link = document.createElement('a'); link.href = c.toDataURL('image/png'); link.download = 'mangafix.png'; link.click(); }

  return (
    <div className={dark? 'app dark' : 'app'}>
      <header className="header">
        <h1>MangaFix</h1>
        <div>
          <button onClick={()=>setDark(d=>!d)}>{dark? 'Light' : 'Dark'}</button>
        </div>
      </header>
      <main className="main">
        <aside className="sidebar">
          <div>
            <input type="file" accept="image/*" onChange={handleFile} />
            <button onClick={exportPNG}>Export PNG</button>
          </div>
          <div style={{marginTop:10}}>
            <h3>Batch Paste</h3>
            <textarea placeholder="Paste chapter text here (use * and #)" rows={6} style={{width:'100%'}}></textarea>
            <button style={{marginTop:6}}>Apply Batch</button>
          </div>
          <div style={{marginTop:10}}>
            <h3>Tools</h3>
            <button>AI Clear (mock)</button>
            <button>Brush Erase</button>
            <button>Auto-detect Bubbles</button>
          </div>
        </aside>
        <section className="canvas-area">
          <canvas ref={canvasRef} style={{maxWidth:'100%',border:'1px solid #ccc'}}></canvas>
        </section>
      </main>
    </div>
  );
}
