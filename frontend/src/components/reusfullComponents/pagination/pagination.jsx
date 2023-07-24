import React from 'react';
import './pagination.css';

export default function Pagination({page,setPage,pages}) {
  return (
    <div className="Pagination">
        <button
            disabled={page == 1}
            onClick={()=>setPage(page - 1)}
            >&laquo;</button>
        {Array(pages).fill(0).map((n,ind)=>(
            <button
                key={ind}
                className={page == ind+1 ? "selectedPage" :""}
                onClick={()=>setPage(ind + 1)}
            >{ind + 1}</button>
        ))}
        <button
            disabled={page == pages}
            onClick={()=>setPage(page + 1)}
            >&raquo;</button>
    </div>
  )
}
