import { useState } from 'react';
import styles from '../styles/SearchBox.module.scss';
import { useRouter } from 'next/router';

const SearchBox = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const handleChange = (e: any) => {
    setSearchTerm(e.target.value);
  };
  const router = useRouter();
  
  const search = () => {
    router.push(`/items?search=${searchTerm}`);
  };

  return (
    <header>
      <div className="container-xxl d-flex justify-content-center">
        <div className="col-1">LOGO</div>
        <div className="col-9 d-flex">
          <input
            type="text"
            placeholder="Buscar productos, marcas y más..."
            value={searchTerm}
            onChange={handleChange}
          />
          <div onClick={search}>Botón</div>
        </div>
      </div>
    </header>
  )
}

export default SearchBox;
