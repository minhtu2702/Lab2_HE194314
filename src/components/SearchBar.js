import { useEffect, useRef } from "react";

function SearchBar({ keyword, setKeyword }) {
  const inputRef = useRef(null);

 useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
      <input
        ref={inputRef}
        type="text"
        value={keyword}
        placeholder="Tìm tên phim..."
        onChange={(e) => setKeyword(e.target.value)}
        style={{ width: "400px", padding: "20px", fontSize: "20px" }}
      />
    </div>
  );
}

export default SearchBar;
