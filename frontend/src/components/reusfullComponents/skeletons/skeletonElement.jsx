import React from 'react'
import './skeleton.css';

export default function SkeletonElement({type}) {
  return (
    <div className={type || "squar"}>
        <div className="skeleton">

        </div>
    </div>
  )
}
