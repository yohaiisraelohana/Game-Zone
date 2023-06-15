import React from 'react';
import './logo.css';
import { useNavigate } from 'react-router-dom/dist/umd/react-router-dom.development';

export default function Logo() {
  const nav = useNavigate();
  return (
    <button onClick={() => nav('/')} className="logo-container" style={{ background: 'none', border: 'none', outline: 'none' }}>
      <div className="logo-image"></div>
      <p className="logo-name">Game Zone</p>
    </button>
  );
}
