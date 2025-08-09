import { useState, useEffect } from "react";
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import Button from '@mui/material/Button';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import SingleNote from "./Singlenote";

export default function Notess({ note, currentPage, handlePage }) {
  const [localPage, setLocalPage] = useState(currentPage);

  
  useEffect(() => {
    setLocalPage(currentPage);
  }, [currentPage]);

  if (!note || note.length < 1) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#0d47a1",
          flexDirection: "column",
        }}
      >
        <h2 style={{ fontSize: "xx-large" }}> No note Found</h2>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "x-large",
          }}
        >
          <p>create one </p>
          <TrendingFlatIcon />
        </div>
      </div>
    );
  }

 
  const goPrev = () => {
    if (localPage > 1) {
      const newPage = localPage - 1;
      setLocalPage(newPage);
      handlePage(newPage);
    }
  };

  const goNext = () => {
  
    const newPage = localPage + 1;
    setLocalPage(newPage);
    handlePage(newPage);
  };

  return (
    <div style={{ padding: "1rem" }}>
      {note?.map((e) => (
        <SingleNote
          key={e.id}
          id={e.id}
          title={e.Title}
          description={e.decription}
        />
      ))}

      {/* Pagination */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
        }}
      >
        <Button
          disabled={localPage === 1}
          onClick={goPrev}
          style={{ background: "#0d47a1", color: "white" }}
          variant="contained"
        >
          <ArrowBackIosNewIcon />
        </Button>

        <p style={{ color: "#0d47a1" }}>
          page {localPage}
         
        </p>

        <Button
          onClick={goNext}
          style={{ background: "#0d47a1", color: "white" }}
          variant="contained"
        >
          <ArrowForwardIosIcon />
        </Button>
      </div>
    </div>
  );
}
